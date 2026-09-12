import Clarity from "@microsoft/clarity";

let isInitialized = false;

/**
 * Atribut standar Microsoft Clarity untuk menyamarkan (mask) teks / input sensitif (PII).
 * Pasang atribut ini pada form input atau elemen data pribadi:
 * <input {...CLARITY_MASK_ATTR} /> atau data-clarity-mask="true"
 */
export const CLARITY_MASK_ATTR = {
  "data-clarity-mask": "true",
} as const;

/**
 * Atribut standar Microsoft Clarity untuk mengecualikan (unmask) teks umum dari penyamaran
 */
export const CLARITY_UNMASK_ATTR = {
  "data-clarity-unmask": "true",
} as const;

export function initClarity() {
  if (typeof window === "undefined" || isInitialized) {
    return;
  }

  const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID || "y9rb9l3bd9";

  if (!projectId) {
    console.warn("[Clarity] VITE_CLARITY_PROJECT_ID belum diset");
    return;
  }

  try {
    Clarity.init(projectId);
    isInitialized = true;
  } catch (error) {
    console.error("[Clarity] Gagal inisialisasi:", error);
  }
}

export { Clarity };
