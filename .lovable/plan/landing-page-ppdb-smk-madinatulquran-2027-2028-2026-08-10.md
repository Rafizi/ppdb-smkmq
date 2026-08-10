# Landing Page PPDB SMK Madinatulquran 2027/2028

Satu halaman landing (single page, `/`) mengikuti blueprint 3P: Proof → Promise → Plan, dengan palet teal/krem/amber dari file color-palette.

## Struktur Halaman (atas → bawah)

1. **Navbar** — logo teks "SMK Madinatulquran", badge "PPDB 2027/2028 Dibuka", tombol WA di kanan. Sticky.
2. **Hero** — background teal `#0B7E7E`, headline "Digital Intelligent, Islamic Attitude", sub-headline, CTA hijau WhatsApp + CTA outline "Isi Formulir Pendaftaran", gambar suasana sekolah.
3. **Proof** — strip logo/partner (MikroTik Academy, Cisco Networking Academy, ITC, LSP Telematika) dengan caption sertifikasi. Slot testimoni & prestasi disiapkan sebagai kartu placeholder yang rapi (mudah diisi nanti), tidak menampilkan klaim palsu.
4. **Promise — Jurusan** — 2 kartu besar: TKJ/TKJT dan RPL/PPLG, masing-masing fokus + target lulusan.
5. **Promise — Nilai Tambah** — grid 6 ikon (Tahfidz Camp, Program Internasional, English Discovery, Entrepreneurship/IT Camp, Project Based Learning, Kurikulum Industri).
6. **Visi & Karakter Lulusan** — kutipan visi di panel teal + 2 poin karakter lulusan.
7. **Fasilitas & Ekstrakurikuler** — grid ikon fasilitas (7 item) + chip ekstrakurikuler (4 item).
8. **Plan — Alur 5 Langkah** — stepper horizontal (desktop) / vertikal (mobile), angka besar amber, CTA WA di akhir.
9. **Plan — Biaya** — tabel biaya awal + 2 kartu banding Fullday vs Boarding, catatan cakupan biaya, dan info rekening BRI.
10. **CTA Section** — banner teal dengan tombol WA besar.
11. **Footer** — navy `#08374C`: alamat, WA admin, hotline, website, sosial media, embed Google Maps lokasi Jonggol.

Semua tombol WhatsApp membuka `wa.me/6285545182776` dengan pesan pendaftaran yang sudah terisi.

## Desain

- Palet 60-30-10 dari file: teal `#0B7E7E` dominan, krem `#FAF6EE`/putih netral, amber `#F5A623` + terracotta `#AC4D1D` aksen, hijau WhatsApp `#25D366` khusus CTA utama.
- Tipografi tegas modern (heading Plus Jakarta Sans / body Inter-alternatif non-generik), sudut kartu lembut, ornamen geometris islami halus sebagai tekstur latar — bukan gradien ungu generik.
- Responsif penuh, mobile-first (mayoritas orang tua akses via HP).

## Catatan Teknis

- Route tunggal `src/routes/index.tsx` (menggantikan placeholder), dipecah ke komponen per section di `src/components/sections/`.
- Token warna palet ditambahkan ke `src/styles.css` (`@theme inline`, format oklch) — tidak ada warna hardcode di komponen.
- Head metadata SEO khusus PPDB (title, description, og/twitter) di route index.
- Gambar hero/suasana sekolah dibuat sebagai aset generated karena belum ada foto asli; mudah diganti dengan foto sekolah nanti.
- Tanpa backend: form pendaftaran diarahkan ke WhatsApp/link resmi sekolah.

## Yang Belum Ada Datanya

Testimoni, prestasi/akreditasi, dan status promo diskon tidak ada di brosur — disiapkan sebagai slot siap-isi. Kirimkan datanya kapan saja untuk saya masukkan.

&nbsp;