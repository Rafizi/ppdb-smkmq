import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { Programs } from "@/components/sections/Programs";
import { Vision } from "@/components/sections/Vision";
import { ValueProps } from "@/components/sections/ValueProps";
import { Facilities } from "@/components/sections/Facilities";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { Steps } from "@/components/sections/Steps";
import { Fees } from "@/components/sections/Fees";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SiteFooter } from "@/components/sections/SiteFooter";

const title = "PPDB SMK Madinatulquran 2027/2028 — Pendaftaran Santri Baru Online";
const description =
  "PPDB SMK Madinatulquran TA 2027/2028: Jurusan TKJ & RPL, tahfidz 3 juz, sertifikasi Cisco, MikroTik & LSP. Transparan biaya, skema cicilan, dan alur pendaftaran 1 hari tes.";

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
  useScrollReveal(0.15);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Proof />
        <Programs />
        <Vision />
        <ValueProps />
        <Facilities />
        <Achievements />
        <Testimonials />
        <Steps />
        <Fees />
        <Faq />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
