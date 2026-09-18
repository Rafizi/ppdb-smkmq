# ==============================================================================
# Multi-stage Dockerfile untuk PPDB SMK Madinatulquran (TanStack Start + Nitro)
# ==============================================================================

# ------------------------------------------------------------------------------
# Tahap 1: Dependencies Cache
# ------------------------------------------------------------------------------
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy manifest dependensi
COPY package.json package-lock.json ./
RUN npm ci || npm install

# ------------------------------------------------------------------------------
# Tahap 2: Build Aplikasi
# ------------------------------------------------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Konfigurasi preset Nitro untuk standalone node server
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server

# Compile client & SSR bundles ke folder .output
RUN npm run build

# ------------------------------------------------------------------------------
# Tahap 3: Production Runner (Minimalis & Aman)
# ------------------------------------------------------------------------------
FROM node:22-alpine AS runner
WORKDIR /app

# Keamanan: Buat user non-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 ppdb

# Salin seluruh folder .output hasil build
COPY --from=builder --chown=ppdb:nodejs /app/.output ./.output

# Variabel Lingkungan Produksi
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

USER ppdb

EXPOSE 3000

# Healthcheck berkala
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/ || exit 1

# Pindah working directory ke dalam server agar Nitro dapat me-resolve path static .output/public dengan benar
WORKDIR /app/.output/server

CMD ["node", "index.mjs"]