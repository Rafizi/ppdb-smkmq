export const SCHOOL = {
  name: "SMK Madinatulquran",
  tagline: "Digital Intelligent, Islamic Attitude",
  year: "2027/2028",
  logo: "/logo.png",
  formUrl: "https://bit.ly/PMBSMKMQ2728",
  address:
    "Kp. Kebon Kelapa, RT.002/RW.011, Singasari, Kec. Jonggol, Bogor, Jawa Barat 16830",
  waAdmin: "6285111390457",
  waAdminLabel: "+62 851-1139-0457",
  hotline: "+62 812 6900 457",
  hotlineHref: "tel:+628126900457",
  website: "smkmadinatulquran.sch.id",
  instagram: "https://instagram.com/smkmadinatulquran",
  youtube: "https://youtube.com/@smkmadinatulquran",
  facebook: "https://facebook.com/smkmadinatulquran",
  bank: { name: "BRI", holder: "SMK Madinatulquran", number: "141801000600567" },
  maps: "https://www.google.com/maps?q=SMK+Madinatulquran+Jonggol+Bogor&output=embed",
  antiFraudNotice:
    "SMK Madinatulquran hanya menerima pembayaran ke rekening resmi BRI 141801000600567 a/n SMK Madinatulquran. Konfirmasikan setiap bukti pembayaran hanya melalui Admin PMB resmi di nomor +62 851-1139-0457. Sekolah tidak bertanggung jawab atas transaksi ke rekening/nomor lain di luar yang tercantum resmi di halaman ini.",
} as const;

export const waLink = (
  message = `Assalamu'alaikum, saya ingin berkonsultasi mengenai PPDB SMK Madinatulquran TA ${SCHOOL.year}. Mohon informasinya.`,
) => `https://wa.me/${SCHOOL.waAdmin}?text=${encodeURIComponent(message)}`;

export const TRUST_METRICS = [
  { value: "10+ Th", label: "Pengalaman Mendidik", sub: "Berdiri Sejak 2014" },
  { value: "2 Mitra", label: "Sertifikasi Global", sub: "Resmi Cisco & MikroTik" },
  { value: "3 Juz", label: "Target Tahfidz", sub: "+ Hadits Arba'in Nawawi" },
] as const;

export const PARTNERS = [
  { name: "MikroTik Academy", note: "Jaringan & Routing Internasional" },
  { name: "Cisco Networking Academy", note: "Networking Global Terstandar" },
  { name: "ITC", note: "International Test Center (English Discovery)" },
  { name: "LSP Telematika", note: "Sertifikasi Profesi BNSP" },
] as const;

export const PROGRAMS = [
  {
    code: "TKJ / TJKT",
    title: "Teknik Komputer & Jaringan",
    focus:
      "Spesialisasi infrastruktur jaringan modern, instalasi fiber optic & wireless, administrasi Linux server, serta keamanan jaringan tingkat enterprise.",
    outcomes: [
      "Menyelesaikan kurikulum resmi Cisco Networking Academy",
      "Menguasai administrasi Linux Server & fundamental Cloud Computing",
      "Meraih sertifikasi industri internasional MikroTik (MTCNA) & Cisco",
      "Siap berkarir sebagai Network Administrator & Cloud Support Engineer",
    ],
    proofStats: [
      "100% santri dibekali materi sertifikasi MikroTik & Cisco sebelum kelulusan",
      "Portofolio praktik nyata: konfigurasi router Mikrotik, server Linux, dan jaringan fiber optic",
      "Kesiapan kerja terbukti dengan pemahaman troubleshooting riil perangkat industri",
    ],
  },
  {
    code: "RPL / PPLG",
    title: "Rekayasa Perangkat Lunak",
    focus:
      "Pengembangan aplikasi web & mobile modern, rekayasa database, implementasi clean code, dan metodologi Project Based Learning (PBL).",
    outcomes: [
      "Mampu membangun aplikasi web full-stack modern",
      "Mampu merilis aplikasi Android fungsional sebelum menginjak kelas XII",
      "Memiliki portofolio aplikasi nyata melalui metode Project Based Learning",
      "Siap berkarir sebagai Junior Software Engineer & Technopreneur",
    ],
    proofStats: [
      "Proyek aplikasi & website nyata dikerjakan santri secara berkelompok dan mandiri",
      "Penguasaan ekosistem pemrograman modern, database SQL, dan version control Git",
      "Santri dilatih merilis dan mempublikasikan karya perangkat lunak sendiri",
    ],
  },
] as const;

export const VALUE_PROPS = [
  {
    title: "Tahfidz & Sanad Mutqin",
    desc: "Target hafalan minimal 3 Juz Al-Qur'an bersanad mutqin dan 42 Hadits Arba'in An-Nawawiyyah.",
    icon: "book",
  },
  {
    title: "Sertifikasi Global",
    desc: "Akses kurikulum dan sertifikasi industri internasional resmi dari MikroTik dan Cisco.",
    icon: "globe",
  },
  {
    title: "English Discovery",
    desc: "Pelatihan bahasa Inggris tersertifikasi International Test Center (ITC) untuk komunikasi global.",
    icon: "languages",
  },
  {
    title: "Inkubasi Technopreneur",
    desc: "Pembentukan mental wirausaha digital, kemandirian teknologi, dan pemecahan masalah riil.",
    icon: "rocket",
  },
  {
    title: "Project Based Learning",
    desc: "Metode belajar aplikatif melalui pengerjaan proyek riil berbasis kebutuhan pengguna nyata.",
    icon: "target",
  },
  {
    title: "Standar Industri & BNSP",
    desc: "Kurikulum selaras dengan kebutuhan dunia kerja dan uji kompetensi profesi LSP Telematika BNSP.",
    icon: "scroll",
  },
] as const;

export const FACILITIES = [
  { label: "Akses Internet Cepat", icon: "wifi" },
  { label: "Kelas & Lab Ber-AC", icon: "snow" },
  { label: "Kantin Bersih & Sehat", icon: "utensils" },
  { label: "Asrama Nyaman", icon: "home" },
  { label: "Layanan Laundry", icon: "shirt" },
  { label: "Masjid Pusat Ibadah", icon: "mosque" },
  { label: "Lapangan Olahraga", icon: "ball" },
] as const;

export const EXTRAS = ["Futsal", "Diplomasi / Public Speaking", "Karate", "Kepanduan / Pramuka"] as const;

export const STEPS = [
  {
    step: 1,
    title: "Isi Formulir Online",
    desc: "Lengkapi formulir pendaftaran online resmi (±5 menit). Data Anda tersimpan langsung di sistem PMB sekolah.",
    estimate: "H+3 hari kerja dihubungi",
  },
  {
    step: 2,
    title: "Biaya Registrasi",
    desc: "Selesaikan biaya registrasi sebesar Rp450.000 ke rekening resmi BRI sekolah lalu konfirmasikan ke Admin PMB.",
    estimate: "Konfirmasi via WhatsApp",
  },
  {
    step: 3,
    title: "Seleksi Terpadu 1 Hari",
    desc: "Tes potensi akademik, minat bakat IT, baca Al-Qur'an, dan wawancara orang tua tuntas dalam 1 hari tanpa bolak-balik.",
    estimate: "Dilaksanakan 1 hari penuh",
  },
  {
    step: 4,
    title: "Pengumuman Kelulusan",
    desc: "Dapatkan Surat Keputusan hasil kelulusan seleksi PPDB secara resmi dari panitia penerimaan santri baru.",
    estimate: "H+3 hari kerja pasca tes",
  },
] as const;

export const REGISTRATION_FEE = "Rp450.000";

export const PROGRAM_FEES = [
  {
    name: "Fullday",
    subtitle: "Pulang-pergi, makan siang bergizi di sekolah",
    registrationFee: "Rp450.000",
    entry: "Rp8.500.000",
    totalInitial: "Rp8.950.000",
    totalInitialBreakdown: "Rp450.000 (Registrasi) + Rp8.500.000 (Uang Masuk)",
    entryIncludes: "Uang Pangkal, Seragam Lengkap (3 Set), dan Jas Almamater",
    installmentText: "Bisa dicicil 2x. 70% saat dinyatakan lulus, 30% sebelum Juni 2027",
    installmentStages: [
      { label: "Tahap 1 (Setelah Lulus)", amount: "Rp5.950.000", desc: "70% dari Uang Masuk saat dinyatakan lulus tes" },
      { label: "Tahap 2 (Sebelum Juni 2027)", amount: "Rp2.550.000", desc: "30% pelunasan sebelum bulan Juni 2027" },
    ],
    reRegistration: "Rp3.500.000",
    reRegistrationNote: "Dibayarkan setiap tahun ajaran baru saat santri naik ke kelas XI dan XII (untuk pemeliharaan & perbaikan sarana prasarana belajar).",
    monthly: "Rp1.000.000",
    monthlyNote: "Termasuk SPP akademik & makan siang santri",
    featured: false,
  },
  {
    name: "Boarding",
    subtitle: "Asrama 24 jam, makan 3x sehari + fasilitas laundry",
    registrationFee: "Rp450.000",
    entry: "Rp14.500.000",
    totalInitial: "Rp14.950.000",
    totalInitialBreakdown: "Rp450.000 (Registrasi) + Rp14.500.000 (Uang Masuk)",
    entryIncludes: "Uang Pangkal, Kasur/Lemari Asrama, Seragam Lengkap, dan Jas Almamater",
    installmentText: "Bisa dicicil 2x. Rp10.000.000 saat dinyatakan lulus, Rp4.500.000 sebelum Juni 2027",
    installmentStages: [
      { label: "Tahap 1 (Setelah Lulus)", amount: "Rp10.000.000", desc: "±70% dibayarkan setelah dinyatakan lulus tes" },
      { label: "Tahap 2 (Sebelum Juni 2027)", amount: "Rp4.500.000", desc: "±30% pelunasan sebelum bulan Juni 2027" },
    ],
    reRegistration: "Rp3.500.000",
    reRegistrationNote: "Dibayarkan setiap tahun ajaran baru saat santri naik ke kelas XI dan XII (untuk pemeliharaan & perbaikan sarana prasarana belajar).",
    monthly: "Rp2.500.000",
    monthlyNote: "Termasuk asrama, pembinaan tahfidz, makan 3x & laundry",
    featured: true,
  },
] as const;

export const FAQS = [
  {
    question: "Bagaimana cara mendaftar PPDB SMK Madinatulquran?",
    answer:
      "Pendaftaran dilakukan secara online dengan mengisi formulir resmi di tautan https://bit.ly/PMBSMKMQ2728 (estimasi pengisian hanya ±5 menit). Setelah formulir terkirim, Admin PMB akan menghubungi Anda dalam H+3 hari kerja untuk mengonfirmasi jadwal seleksi.",
  },
  {
    question: "Apakah tes potensi dan wawancara dilaksanakan di hari yang berbeda?",
    answer:
      "Tidak. Seluruh rangkaian tes (tes potensi akademik, peminatan IT, kemampuan membaca Al-Qur'an) dan sesi wawancara orang tua serta calon santri dilaksanakan pada HARI YANG SAMA untuk menghemat waktu dan memudahkan keluarga santri, khususnya yang berasal dari luar kota.",
  },
  {
    question: "Apakah uang masuk PPDB dapat dicicil?",
    answer:
      "Ya. SMK Madinatulquran menyediakan skema cicilan 2 kali untuk Uang Masuk: untuk Program Boarding dibayar Rp10.000.000 saat dinyatakan lulus seleksi dan pelunasan Rp4.500.000 sebelum Juni 2027. Untuk Program Fullday dibayar 70% (Rp5.950.000) saat dinyatakan lulus dan 30% (Rp2.550.000) sebelum Juni 2027.",
  },
  {
    question: "Berapa biaya daftar ulang saat santri naik kelas?",
    answer:
      "Biaya daftar ulang untuk kenaikan kelas (naik ke kelas XI dan kelas XII) adalah sebesar Rp3.500.000 per tahun ajaran baru, berlaku untuk Program Fullday maupun Boarding. Biaya ini dialokasikan untuk pemeliharaan fasilitas dan perbaikan sarana prasarana belajar santri.",
  },
  {
    question: "Apa perbedaan antara Program Fullday dan Boarding?",
    answer:
      "Program Boarding adalah sistem pesantren/asrama penuh 24 jam dengan pembinaan karakter intensif, tahfidz pagi-malam, makan 3 kali sehari, dan layanan laundry. Sedangkan Program Fullday adalah santri pulang-pergi harian yang sudah mencakup makan siang di sekolah. Keduanya mendapatkan kurikulum kejuruan IT dan sertifikasi internasional yang setara.",
  },
  {
    question: "Bagaimana cara pembayaran agar aman dari penipuan?",
    answer:
      "SMK Madinatulquran HANYA menerima transaksi keuangan ke rekening resmi Bank BRI 141801000600567 a/n SMK Madinatulquran. Konfirmasi pembayaran HANYA dilakukan melalui kontak resmi Admin PMB di +62 851-1139-0457. Pihak sekolah tidak pernah meminta transfer ke rekening atas nama pribadi siapa pun.",
  },
  {
    question: "Apa saja sertifikasi IT yang akan diperoleh santri?",
    answer:
      "Santri akan dibekali sertifikasi berstandar industri global & nasional, meliputi MikroTik Certified Network Associate (MTCNA), Cisco Networking Academy, International Test Center (ITC) untuk English Discovery, serta uji kompetensi profesi LSP Telematika berlisensi BNSP.",
  },
] as const;

/* ------------------------------------------------------------------ *
 * Testimoni orang tua & alumni
 *
 * Wadah siap isi. Tambahkan objek baru ke TESTIMONIALS dan section
 * "Testimoni" otomatis menampilkannya (filter Orang Tua/Alumni muncul
 * sendiri bila kedua peran sudah terisi). Selama array masih kosong,
 * section menampilkan status "menunggu data dari sekolah".
 * ------------------------------------------------------------------ */

export type TestimonialRole = "orangtua" | "alumni";

export type Testimonial = {
  /** Nama narasumber, mis. "Ibu Siti Aminah" */
  name: string;
  /** Menentukan badge dan filter yang dipakai di halaman */
  role: TestimonialRole;
  /** Keterangan singkat: "Orang tua santri Boarding 2024" / "Alumni RPL 2023" */
  detail: string;
  /** Isi kutipan 1–3 kalimat, tanpa tanda kutip (ditambahkan otomatis) */
  quote: string;
  /** Opsional — kondisi sekarang: "Backend Developer di PT ..." / "Mahasiswa UPI" */
  now?: string;
  /** Opsional — path foto di folder public/ atau URL. Kosong = pakai inisial nama */
  photo?: string;
};

export const TESTIMONIAL_ROLE_LABEL: Record<TestimonialRole, string> = {
  orangtua: "Orang Tua",
  alumni: "Alumni",
};

/** DATA DUMMY — ganti seluruh isi array ini dengan testimoni asli dari sekolah. */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ibu Siti Aminah",
    role: "orangtua",
    detail: "Orang tua santri Boarding angkatan 2024",
    quote:
      "Hafalan anak saya bertambah dan salatnya jauh lebih disiplin, tapi pelajaran komputernya tetap kuat. Laporan perkembangan dari asrama juga rutin kami terima.",
  },
  {
    name: "Bapak Hendra Kurniawan",
    role: "orangtua",
    detail: "Orang tua santri Fullday angkatan 2025",
    quote:
      "Awalnya saya ragu menggabungkan pesantren dengan SMK teknologi. Ternyata anak saya justru lebih terarah — pagi mengaji, siang praktik jaringan.",
  },
  {
    name: "Ibu Nurul Hidayah",
    role: "orangtua",
    detail: "Orang tua santri TKJ angkatan 2023",
    quote:
      "Yang paling saya syukuri adalah adabnya. Sekarang anak saya lebih hormat pada orang tua, dan sudah bisa memperbaiki jaringan Wi-Fi di rumah sendiri.",
  },
  {
    name: "Ahmad Fauzan",
    role: "alumni",
    detail: "Alumni RPL angkatan 2023",
    quote:
      "Project based learning membuat saya sudah punya portofolio nyata sebelum lulus sekolah. Saat wawancara kerja, saya tinggal menunjukkan hasil proyek klien.",
    now: "Frontend Developer di PT Digital Nusantara",
  },
  {
    name: "Muhammad Rizki Pratama",
    role: "alumni",
    detail: "Alumni TKJ angkatan 2022",
    quote:
      "Sertifikasi dari MikroTik Academy dan Cisco yang saya dapat di sekolah langsung dipakai saat magang. Bekal Linux Fundamental-nya sangat terasa.",
    now: "Network Engineer di PT Solusi Data Andalan",
  },
  {
    name: "Aisyah Kamila",
    role: "alumni",
    detail: "Alumni RPL angkatan 2024",
    quote:
      "Selain skill teknis, hafalan 3 juz dan Hadits Arba'in tetap terjaga sampai sekarang. Itu yang membedakan lulusan Madinatulquran dengan SMK lain.",
    now: "Mahasiswa Teknik Informatika, Universitas Pendidikan Indonesia",
  },
];

/* ------------------------------------------------------------------ *
 * Prestasi & akreditasi
 *
 * ACCREDITATION diisi bila SK akreditasi sudah keluar, ACHIEVEMENTS
 * diisi per capaian lomba. Keduanya independen: bagian yang belum ada
 * datanya tetap menampilkan status "menunggu data dari sekolah".
 * ------------------------------------------------------------------ */

export type Accreditation = {
  /** Peringkat, mis. "A" atau "Unggul" */
  grade: string;
  /** Lembaga penilai, mis. "BAN-S/M" */
  institution: string;
  /** Opsional — nomor SK penetapan */
  decree?: string;
  /** Opsional — tahun penetapan */
  year?: string;
  /** Opsional — masa berlaku sampai tahun berapa */
  validUntil?: string;
  /** Opsional — NPSN sekolah */
  npsn?: string;
};

/** DATA DUMMY — ganti dengan SK akreditasi & NPSN asli sekolah. */
export const ACCREDITATION: Accreditation | null = {
  grade: "A",
  institution: "BAN-S/M",
  decree: "1234/BAN-SM/SK/2024",
  year: "2024",
  validUntil: "2029",
  npsn: "69000000",
};

export const ACHIEVEMENT_LEVELS = [
  "Internasional",
  "Nasional",
  "Provinsi",
  "Kabupaten/Kota",
] as const;

export type AchievementLevel = (typeof ACHIEVEMENT_LEVELS)[number];

export type Achievement = {
  /** Capaian, mis. "Juara 1 IT Network Systems Administration" */
  title: string;
  /** Nama ajang beserta penyelenggara */
  event: string;
  /** Tingkat lomba — menentukan warna badge */
  level: AchievementLevel;
  /** Tahun perolehan, dipakai untuk mengelompokkan & mengurutkan */
  year: string;
  /** Opsional — nama santri atau tim peraih */
  winner?: string;
  /** Opsional — jurusan peraih, mis. "TKJ" atau "RPL" */
  program?: string;
};

/** DATA DUMMY — ganti seluruh isi array ini dengan prestasi asli santri. */
export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Medali Perak Kategori IT Software Solutions",
    event: "ASEAN Youth Skills Challenge, Kuala Lumpur",
    level: "Internasional",
    year: "2026",
    winner: "Tim Madinatulquran Dev",
    program: "RPL",
  },
  {
    title: "Juara 2 Web Technologies",
    event: "Lomba Kompetensi Siswa (LKS) SMK Tingkat Nasional",
    level: "Nasional",
    year: "2026",
    winner: "Aisyah Kamila",
    program: "RPL",
  },
  {
    title: "Juara 1 Musabaqah Hifzhil Qur'an 3 Juz",
    event: "Pekan Olahraga & Seni Pesantren Jawa Barat",
    level: "Provinsi",
    year: "2026",
    winner: "Abdurrahman Hakim",
  },
  {
    title: "Juara 1 IT Network Systems Administration",
    event: "Lomba Kompetensi Siswa (LKS) SMK Tingkat Provinsi Jawa Barat",
    level: "Provinsi",
    year: "2025",
    winner: "Muhammad Rafi",
    program: "TKJ",
  },
  {
    title: "Juara 3 Hackathon Pelajar Nasional",
    event: "Indonesia Student Hackathon, Kemendikbudristek",
    level: "Nasional",
    year: "2025",
    winner: "Tim Qur'an Coder",
    program: "RPL",
  },
  {
    title: "Juara 1 Cyber Security Competition Pelajar",
    event: "Bogor Digital Talent Fest",
    level: "Kabupaten/Kota",
    year: "2025",
    winner: "Fadhil Ramadhan",
    program: "TKJ",
  },
  {
    title: "Juara 2 English Speech Contest",
    event: "Olimpiade Bahasa Pelajar Kabupaten Bogor",
    level: "Kabupaten/Kota",
    year: "2024",
    winner: "Nabila Zahra",
  },
  {
    title: "Juara 1 Futsal Antar Pesantren",
    event: "Liga Santri Kabupaten Bogor",
    level: "Kabupaten/Kota",
    year: "2024",
    winner: "Tim Futsal SMK Madinatulquran",
  },
];
