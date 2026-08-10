import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { Programs } from "@/components/sections/Programs";
import { ValueProps } from "@/components/sections/ValueProps";
import { Vision } from "@/components/sections/Vision";
import { Facilities } from "@/components/sections/Facilities";
import { Steps } from "@/components/sections/Steps";
import { Fees } from "@/components/sections/Fees";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SiteFooter } from "@/components/sections/SiteFooter";

const title = "PPDB SMK Madinatulquran 2027/2028 — Daftar Sekarang";
const description =
  "PPDB SMK Madinatulquran TA 2027/2028: jurusan TKJ & RPL, tahfidz 3 juz, sertifikasi Cisco, MikroTik & LSP. Lihat alur pendaftaran dan biaya, daftar via WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <h1 className="sr-only">
          PPDB SMK Madinatulquran Tahun Ajaran 2027/2028
        </h1>
        <Hero />
        <Proof />
        <Programs />
        <Vision />
        <ValueProps />
        <Facilities />
        <Steps />
        <Fees />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
