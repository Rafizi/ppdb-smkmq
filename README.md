# Website PPDB SMK Madinatulquran

Website resmi Penerimaan Peserta Didik Baru (PPDB) **SMK Madinatulquran** Tahun Ajaran 2027/2028.

## 🎯 Fitur & Keunggulan

- **Program Keahlian Unggulan**: Teknik Jaringan Komputer & Telekomunikasi (TKJ) dan Rekayasa Perangkat Lunak (RPL).
- **Kurikulum Industri & Tahfidz**: Terakreditasi dan bermitra dengan Cisco Networking Academy, MikroTik Academy, dan LSP Media Informatika, serta target tahfidz minimal 3 Juz & Hadits Arba'in.
- **Transparansi Biaya & Alur Cepat**: Total biaya masuk awal transparan dengan skema cicilan 2x dan alur seleksi terpadu 1 hari.
- **Desain Responsif & Cepat**: Dibangun dengan arsitektur TanStack Start, React 19, Tailwind CSS, SSR/Nitro, dan animasi ramah aksesibilitas (_prefers-reduced-motion_).
- **Optimasi SEO Lengkap**: Dilengkapi Schema.org JSON-LD (EducationalOrganization, FAQPage, Course), OpenGraph, Twitter Cards, Sitemap, dan Robots.txt.

## 🛠️ Tech Stack

- **Framework**: TanStack Start / React 19 / TypeScript
- **Styling**: Tailwind CSS & CSS Custom Design System (Teal & Cream Palette)
- **Icons**: Lucide React
- **UI Components**: Radix UI Primitives & Embla Carousel

## 🚀 Menjalankan Secara Lokal

```bash
# Install dependencies
npm install

# Jalankan server development
npm run dev

# Build production
npm run build

# Preview build production
npm run preview
```

## ☁️ Deployment ke Vercel (Produksi)

Proyek ini telah dikonfigurasi penuh untuk deployment di **Vercel** menggunakan Nitro Vercel Preset (Build Output API v3):

1. **Push ke Git Repository** (GitHub / GitLab / Bitbucket).
2. **Import ke Vercel**:
   - Buka [vercel.com/new](https://vercel.com/new) dan pilih repositori proyek ini.
   - Framework akan otomatis terdeteksi sebagai **TanStack Start** melalui `vercel.json`.
   - Pastikan **Node.js Version** pada Project Settings diset ke **20.x** atau lebih baru.
3. **Environment Variables**:
   - Tambahkan variabel lingkungan yang diperlukan di menu **Settings > Environment Variables** (misal `VITE_CLARITY_ID` jika menggunakan Microsoft Clarity).
4. **Build Command**:
   - Vercel secara otomatis menjalankan `npm run build` yang menghasilkan artefak di `.vercel/output`.

## 🐳 Deployment Menggunakan Docker / Docker Compose

Aplikasi ini dapat dijalankan dalam kontainer mandiri (_self-hosted_ / VPS) dengan preset `node-server`:

### Menggunakan Docker Compose (Direkomendasikan)

```bash
# Build dan jalankan container di background
docker compose up -d --build

# Cek status log container
docker compose logs -f

# Hentikan container
docker compose down
```

### Menggunakan Docker CLI Langsung

```bash
# 1. Build image Docker produksi
docker build -t ppdb-smkmq:latest .

# 2. Jalankan container pada port 3000
docker run -d --name ppdb-smkmq -p 3000:3000 --restart unless-stopped ppdb-smkmq:latest
```

Aplikasi akan aktif dan dapat diakses di `http://localhost:3000`.
