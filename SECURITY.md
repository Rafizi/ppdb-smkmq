# Panduan Lengkap Taktis Keamanan Website PPDB (SECURITY.md)

Dokumen ini memuat seluruh kebijakan, standar implementasi, dan langkah mitigasi risiko keamanan untuk sistem website **Penerimaan Peserta Didik Baru (PPDB) SMK Madinatulquran** (`ppdb-smkmq`). Panduan ini mencakup 4 lapisan keamanan utama: Frontend & UI, Backend & Server, Jaringan & Infrastruktur, serta Manajemen Secrets, Dependensi & Operasional.

---

## 1. Sisi Kode Aplikasi: Frontend & UI (`src/`)

### 1.1 Eliminasi Penggunaan HTML Mentah & Pertahankan Safe Rendering
* **Larangan Penggunaan `innerHTML` / `dangerouslySetInnerHTML`**:
  * Hindari penggunaan properti `innerHTML` maupun `dangerouslySetInnerHTML` di seluruh komponen UI untuk mencegah celah *Cross-Site Scripting* (XSS).
  * Pertahankan perenderan teks menggunakan kurung kurawal bawaan React (`{content}`) yang secara otomatis melakukan *auto-escaping* terhadap karakter berbahaya seperti `<`, `>`, `&`, `"`, dan `'`.
* **Sanitasi Konten Dinamis (Jika Dibutuhkan di Masa Depan)**:
  * Jika terdapat fitur masa depan yang memerlukan perenderan konten berformat kaya (seperti pengumuman berita atau parser Markdown), input wajib dibersihkan menggunakan pustaka sanitasi klien tepercaya seperti `DOMPurify` sebelum diinjeksikan ke DOM:
    ```ts
    import DOMPurify from "dompurify";
    const cleanHtml = DOMPurify.sanitize(rawUserInput);
    ```
* **Proteksi Tautan Eksternal**:
  * Setiap tautan eksternal (`target="_blank"`) wajib menyertakan atribut `rel="noopener noreferrer"` untuk mencegah serangan *tabnabbing* dan kebocoran `window.opener`.

### 1.2 Privasi & Masking Skrip Pihak Ketiga (`src/lib/clarity.ts`)
* **Pencegahan Kebocoran Data Pribadi (PII)**:
  * Skrip analitik pihak ketiga (Microsoft Clarity) secara default berpotensi merekam input formulir.
  * Terapkan atribut `data-clarity-mask="true"` pada seluruh field formulir sensitif (seperti NIK siswa, nomor WhatsApp orang tua, alamat rumah, nama lengkap, dan data finansial).
  * Pastikan pelacakan analitik hanya mengumpulkan data telemetri interaksi agregat tanpa menyimpan informasi pribadi siswa (*Personally Identifiable Information*).

---

## 2. Sisi Kode Aplikasi: Backend & Server (`src/server.ts`)

### 2.1 Validasi Ketat di Sisi Server (*Never Trust the Client*)
* Validasi sisi browser bersifat kosmetik untuk kenyamanan pengguna (*UX*) dan dapat dilewati dengan mudah menggunakan tools seperti cURL, Postman, atau skrip otomatis.
* Seluruh endpoint API server wajib menerapkan validasi skema ketat (misalnya menggunakan pustaka `zod`) sebelum data diproses ke layer database:
  ```ts
  import { z } from "zod";

  export const RegistrationSchema = z.object({
    fullName: z.string().trim().min(3).max(100),
    phone: z.string().regex(/^(\+62|62|0)8[1-9][0-9]{6,10}$/, "Format nomor WhatsApp tidak valid"),
    email: z.string().email().max(120),
    program: z.enum(["TKJ", "RPL"]),
  });
  ```

### 2.2 Pencegahan SQL Injection Menggunakan Parameterized Queries
* Dilarang keras menggabungkan input pengguna ke dalam query database menggunakan konkatenasi string biasa (`+` atau template literal `${}`).
* Wajib menggunakan *parameterized queries* (prepared statements) atau ORM/Query Builder tepercaya (seperti Prisma, Drizzle, atau TypeORM) sehingga database memperlakukan input pengguna murni sebagai data parameter, bukan sintaks kode SQL yang dapat dieksekusi:
  ```ts
  // CONTOH SALAH (Rentan SQLi):
  // db.query(`SELECT * FROM applicants WHERE phone = '${inputPhone}'`);

  // CONTOH BENAR (Prepared Statement):
  // db.query('SELECT * FROM applicants WHERE phone = $1', [inputPhone]);
  ```

### 2.3 Penerapan Rate Limiting pada Endpoint Pendaftaran
* Lindungi endpoint server dari serangan *brute force*, *bot spam*, dan *DoS tingkat aplikasi* menggunakan middleware pembatas laju permintaan (*Rate Limiting*):
  * **Endpoint Navigasi Umum / SSR**: Dibatasi maksimal 100 request/menit per IP.
  * **Endpoint Mutasi / Formulir Pendaftaran**: Dibatasi maksimal 5–10 request/menit per IP.
* Saat limit terlampaui, server mengembalikan status HTTP `429 Too Many Requests` beserta header `Retry-After: 60`.

### 2.4 Konfigurasi Keamanan Cookie & Mitigasi CSRF
* Jika sistem menggunakan sesi berbasis cookie (misal untuk portal admin):
  * Aktifkan flag `HttpOnly` agar cookie tidak dapat dibaca oleh JavaScript (mitigasi pencurian sesi via XSS).
  * Aktifkan flag `Secure` agar cookie hanya dikirim melalui jalur terenkripsi HTTPS.
  * Tetapkan `SameSite=Lax` atau `SameSite=Strict` guna mencegah pengiriman cookie otomatis dari situs pihak ketiga (mitigasi CSRF).
* Validasi header `Origin` dan `Referer` pada setiap request mutasi data (`POST`, `PUT`, `DELETE`) untuk memastikan panggilan berasal dari domain resmi sekolah.

### 2.5 Pengelolaan Respon Error (*Information Disclosure*)
* Pada lingkungan produksi (*production*), server dilarang menampilkan informasi teknis internal kepada pengguna seperti:
  * *Stack trace* JavaScript/Node.js
  * Path direktori sistem operasi (misal `D:\Kerja\...`)
  * Nama driver/tabel database
  * Alamat IP internal atau versi framework
* Tangkap kesalahan menggunakan error handler terpusat (`src/lib/error-capture.ts`), catat detail teknis secara privat pada log server, dan tampilkan halaman error yang aman serta ramah pengguna (`src/lib/error-page.ts`).

---

## 3. Sisi Jaringan & Infrastruktur (Web Server & CDN)

### 3.1 Penegakan HTTPS dan HSTS Penuh
* Alihkan seluruh lalu lintas HTTP biasa secara otomatis ke HTTPS menggunakan pengalihan permanen (*HTTP 301 Redirect*).
* Terapkan header `Strict-Transport-Security` (HSTS) dengan durasi minimal 1 tahun:
  ```http
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  ```
  Header ini memerintahkan browser untuk selalu mengakses situs menggunakan HTTPS guna menggagalkan serangan *SSL Strip* dan *Man-in-the-Middle* (MitM).

### 3.2 Konfigurasi Header Keamanan (Security Headers & CSP)
Sistem menyuntikkan header keamanan standar pada setiap respon web:
* **Content-Security-Policy (CSP)**:
  Membatasi sumber daya yang boleh dieksekusi di browser:
  * `default-src 'self'`: Hanya sumber dari domain sendiri yang diizinkan secara default.
  * `script-src 'self' 'unsafe-inline' https://www.clarity.ms https://*.clarity.ms`: Membatasi eksekusi skrip hanya untuk aplikasi dan analitik resmi.
  * `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`: Mengizinkan gaya lokal dan Google Fonts.
  * `font-src 'self' https://fonts.gstatic.com data:`: Mengizinkan pemuatan webfont resmi.
  * `img-src 'self' data: blob: https:`: Mengizinkan aset gambar lokal dan protokol aman.
  * `connect-src 'self' https://www.clarity.ms https://*.clarity.ms https://*.bing.com`: Membatasi koneksi API/telemetri.
  * `frame-src 'self' https://www.google.com https://maps.google.com`: Mengizinkan penyematan peta resmi lokasi sekolah via Google Maps iframe.
  * `frame-ancestors 'none'`: Mencegah halaman disematkan ke dalam iframe situs lain (anti-Clickjacking).
* **X-Content-Type-Options**: `nosniff` (mencegah browser menafsirkan file di luar MIME-type aslinya).
* **X-Frame-Options**: `DENY` (mencegah clickjacking).
* **Referrer-Policy**: `strict-origin-when-cross-origin` (melindungi privasi URL asal saat navigasi ke domain luar).
* **Permissions-Policy**: `camera=(), microphone=(), geolocation=()` (menonaktifkan sensor hardware yang tidak digunakan).

### 3.3 Mitigasi Serangan DDoS Tingkat Jaringan
* Menggunakan jaringan Cloudflare Edge / CDN untuk menyerap dan memfilter serangan volumetrik (SYN Flood, UDP Flood, HTTP Flood).
* Mengaktifkan fitur *Web Application Firewall* (WAF) dan proteksi *Bot Management* di tingkat DNS/Edge Cloudflare.

---

## 4. Manajemen Secrets, Dependensi & Operasional

### 4.1 Pemisahan Secrets dan Larangan Hardcoding Kredensial
* Dilarang keras melakukan commit atau *hardcoding* API key privat, password database, atau token rahasia ke dalam repositori Git.
* Seluruh kredensial rahasia wajib disimpan pada *Environment Variables* runtime server (`process.env`).
* Prefix `VITE_` pada file `.env` hanya diperuntukkan bagi nilai publik yang aman terekspos ke bundle klien browser (misal `VITE_CLARITY_PROJECT_ID`).

### 4.2 Audit dan Pembaruan Rutin Dependensi
* Jalankan audit keamanan paket secara berkala melalui terminal:
  ```bash
  npm audit
  # atau memperbaiki secara otomatis jika patch tersedia
  npm audit fix
  ```
* Terapkan otomatisasi pemindaian keamanan dependensi pada repositori (seperti GitHub Dependabot atau Snyk) untuk menerima peringatan dini terkait CVE (*Common Vulnerabilities and Exposures*).

### 4.3 Prinsip Hak Akses Minimum (*Principle of Least Privilege*)
* Akun database yang digunakan oleh aplikasi backend tidak boleh menggunakan hak akses superuser/root.
* Batasi hak akses database hanya pada perintah `SELECT`, `INSERT`, dan `UPDATE` pada tabel yang relevan untuk operasional PPDB.

### 4.4 Pemantauan & Pencatatan Log (*Security Monitoring*)
* Catat aktivitas request penting pada server:
  * Timestamp akses (ISO format)
  * Alamat IP pengirim
  * Metode & path endpoint HTTP
  * Status respon HTTP
  * User-Agent klien
* Pasang sistem alert / notifikasi darurat jika terdeteksi lonjakan error 500 beruntun atau percobaan akses mencurigakan dalam jumlah masif.

---

## 5. Prosedur Pelaporan Kerentanan (*Vulnerability Disclosure*)

Jika Anda menemukan potensi celah keamanan pada website PPDB SMK Madinatulquran:
1. **Laporkan secara bertanggung jawab** melalui email: `keamanan@madinatulquran.sch.id` atau kontak pengembang sekolah.
2. **Mohon tidak mempublikasikan** detail kerentanan kepada publik sebelum tim pengembang merilis perbaikan (*patch*).
3. Cantumkan rincian langkah reproduksi (*proof of concept*), dampak teknis, dan saran penanganan pada laporan Anda.
