export const SCHOOL = {
  name: "SMK Madinatulquran",
  tagline: "Digital Intelligent, Islamic Attitude",
  year: "2027/2028",
  address:
    "Kp. Kebon Kelapa, RT.002/RW.011, Singasari, Kec. Jonggol, Bogor, Jawa Barat 16830",
  waAdmin: "6285545182776",
  waAdminLabel: "+62 855 4518 2776",
  hotline: "+62 812 6900 457",
  hotlineHref: "tel:+628126900457",
  website: "smkmadinatulquran.sch.id",
  instagram: "https://instagram.com/smkmadinatulquran",
  youtube: "https://youtube.com/@smkmadinatulquran",
  facebook: "https://facebook.com/smkmadinatulquran",
  bank: { name: "BRI", holder: "SMK Madinatulquran", number: "141801000600567" },
  maps: "https://www.google.com/maps?q=SMK+Madinatulquran+Jonggol+Bogor&output=embed",
} as const;

export const waLink = (
  message = `Assalamu'alaikum, saya ingin mendaftar PPDB SMK Madinatulquran TA ${SCHOOL.year}. Mohon informasinya.`,
) => `https://wa.me/${SCHOOL.waAdmin}?text=${encodeURIComponent(message)}`;

export const PARTNERS = [
  { name: "MikroTik Academy", note: "Jaringan & Routing" },
  { name: "Cisco Networking Academy", note: "Networking Global" },
  { name: "ITC", note: "International Test Center" },
  { name: "LSP Telematika", note: "Sertifikasi Profesi" },
] as const;

export const PROGRAMS = [
  {
    code: "TKJ / TKJT",
    title: "Teknik Komputer & Jaringan",
    focus: "Infrastruktur jaringan & server, instalasi, dan administrasi jaringan.",
    outcomes: [
      "Menyelesaikan program Cisco Academy",
      "Menguasai Linux Fundamental",
      "Meraih sertifikasi internasional",
      "Siap menjadi Network Developer",
    ],
  },
  {
    code: "RPL / PPLG",
    title: "Rekayasa Perangkat Lunak",
    focus: "Pengembangan software website & mobile, pemrograman berbasis data.",
    outcomes: [
      "Mampu membuat aplikasi berbasis website",
      "Mampu membuat aplikasi Android",
      "Siap kerja sebagai Software Engineer",
      "Mengerjakan proyek nyata dari klien",
    ],
  },
] as const;

export const VALUE_PROPS = [
  {
    title: "Tahfidz Camp",
    desc: "Hafal Al-Qur'an 3 Juz & Hadits Arba'in Nawawi.",
    icon: "book",
  },
  {
    title: "Program Internasional",
    desc: "Peluang studi dan magang ke luar negeri.",
    icon: "globe",
  },
  {
    title: "English Discovery",
    desc: "Sertifikasi International Test Center.",
    icon: "languages",
  },
  {
    title: "Entrepreneurship & IT Camp",
    desc: "Camp bisnis, teknologi, dan English Camp.",
    icon: "rocket",
  },
  {
    title: "Project Based Learning",
    desc: "Belajar langsung dari proyek nyata industri.",
    icon: "target",
  },
  {
    title: "Kurikulum Berstandar Industri",
    desc: "Materi selaras kebutuhan dunia kerja.",
    icon: "scroll",
  },
] as const;

export const FACILITIES = [
  { label: "Akses Internet", icon: "wifi" },
  { label: "Kelas ber-AC", icon: "snow" },
  { label: "Kantin & Tempat Makan", icon: "utensils" },
  { label: "Asrama", icon: "home" },
  { label: "Laundry", icon: "shirt" },
  { label: "Masjid", icon: "mosque" },
  { label: "Lapangan Olahraga", icon: "ball" },
] as const;

export const EXTRAS = ["Futsal", "Diplomasi", "Karate", "Kepanduan"] as const;

export const STEPS = [
  {
    title: "Daftar Online",
    desc: "Klik tombol pendaftaran dan isi formulir resmi PPDB.",
  },
  {
    title: "Bayar Biaya Registrasi",
    desc: "Selesaikan biaya pendaftaran sebesar Rp450.000.",
  },
  { title: "Ikuti Tes", desc: "Tes potensi minat, bakat, dan akademik." },
  {
    title: "Observasi & Wawancara",
    desc: "Sesi wawancara singkat bersama calon santri dan orang tua.",
  },
  {
    title: "Pengumuman Hasil",
    desc: "Terima hasil kelulusan seleksi PPDB.",
  },
] as const;

export const PROGRAM_FEES = [
  {
    name: "Fullday",
    subtitle: "Pulang-pergi, makan siang di sekolah",
    entry: "Rp8.500.000",
    monthly: "Rp1.000.000",
    monthlyNote: "termasuk makan siang",
    featured: false,
  },
  {
    name: "Boarding",
    subtitle: "Asrama, makan 3x sehari + laundry",
    entry: "Rp14.500.000",
    monthly: "Rp2.500.000",
    monthlyNote: "makan 3x sehari + laundry",
    featured: true,
  },
] as const;
