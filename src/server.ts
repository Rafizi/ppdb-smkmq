import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// In-memory IP rate limiter (Sliding Window / Fixed Window per menit)
interface RateLimitInfo {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitInfo>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 menit
const MAX_REQUESTS_PER_WINDOW = 120; // 120 requests per IP per menit

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; retryAfter: number } {
  const now = Date.now();
  const clientInfo = rateLimitMap.get(ip);

  // Bersihkan entry jika sudah lewat masa reset
  if (!clientInfo || now > clientInfo.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1, retryAfter: 0 };
  }

  // Jika masih dalam window
  clientInfo.count += 1;
  if (clientInfo.count > MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((clientInfo.resetTime - now) / 1000);
    return { allowed: false, remaining: 0, retryAfter };
  }

  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - clientInfo.count,
    retryAfter: 0,
  };
}

// Garbage collection berkala setiap 5 menit agar memori tetap bersih
setInterval(() => {
  const now = Date.now();
  for (const [ip, info] of rateLimitMap.entries()) {
    if (now > info.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

function getClientIp(request: Request): string {
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp;
  const xForwarded = request.headers.get("x-forwarded-for");
  if (xForwarded) return xForwarded.split(",")[0].trim();
  const xRealIp = request.headers.get("x-real-ip");
  if (xRealIp) return xRealIp;
  return "127.0.0.1";
}

// Verifikasi CSRF pada mutasi data non-idempotent (POST, PUT, PATCH, DELETE)
function isCsrfSafe(request: Request): boolean {
  const method = request.method.toUpperCase();
  if (["GET", "HEAD", "OPTIONS"].includes(method)) {
    return true;
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("host") || new URL(request.url).host;

  if (origin) {
    try {
      const originHost = new URL(origin).host;
      return originHost === host;
    } catch {
      return false;
    }
  }

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const refererHost = new URL(referer).host;
      return refererHost === host;
    } catch {
      return false;
    }
  }

  // Jika tidak ada header origin & referer pada request mutasi, tolak demi keamanan
  return false;
}

// Injeksi Security Headers & Content-Security-Policy (CSP)
const CSP_DIRECTIVES = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms https://*.clarity.ms",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' https://www.clarity.ms https://*.clarity.ms https://*.bing.com",
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "frame-ancestors 'none'",
  "form-action 'self' https://bit.ly https://wa.me https://api.whatsapp.com",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

function applySecurityHeaders(res: Response): Response {
  const headers = new Headers(res.headers);

  // Kebijakan Konten & Frame Protection
  headers.set("Content-Security-Policy", CSP_DIRECTIVES);
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  );
  headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
  );
  headers.set("Cross-Origin-Opener-Policy", "same-origin");

  // Hilangkan kebocoran teknologi (tech leak)
  headers.delete("x-powered-by");
  headers.delete("server");

  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers,
  });
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown): Promise<Response> {
    // 1. Validasi CSRF untuk request mutasi (POST, PUT, DELETE, PATCH)
    if (!isCsrfSafe(request)) {
      return applySecurityHeaders(
        new Response("Akses Ditolak: Permintaan lintas asal (CSRF) tidak diizinkan.", {
          status: 403,
          headers: { "content-type": "text/plain; charset=utf-8" },
        }),
      );
    }

    // 2. IP Rate Limiting
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return applySecurityHeaders(
        new Response("Terlalu Banyak Permintaan. Silakan tunggu beberapa saat lagi.", {
          status: 429,
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "Retry-After": rateLimit.retryAfter.toString(),
          },
        }),
      );
    }

    // 3. Proses SSR Handler
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalizedResponse = await normalizeCatastrophicSsrResponse(response);
      return applySecurityHeaders(normalizedResponse);
    } catch (error) {
      console.error("Internal Server Error:", error);
      return applySecurityHeaders(
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
      );
    }
  },
};
