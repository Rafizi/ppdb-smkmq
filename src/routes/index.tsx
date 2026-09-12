import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { FAQS, PROGRAMS, SCHOOL } from "@/lib/ppdb";
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
import { FeeSummary } from "@/components/sections/FeeSummary";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { StickyCta } from "@/components/sections/StickyCta";

const pageTitle = "PPDB SMK Madinatulquran 2027/2028 — Pendaftaran Santri Baru Online";
const pageDescription =
  "Penerimaan Peserta Didik Baru (PPDB) SMK Madinatulquran TA 2027/2028: Jurusan TKJ & RPL, tahfidz 3 juz, sertifikasi Cisco, MikroTik & LSP. Transparan biaya, skema cicilan 2x, dan seleksi terpadu 1 hari.";
const siteUrl = "https://ppdb.smkmadinatulquran.sch.id";

// JSON-LD Structured Data for Schema.org
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "SMK Madinatulquran",
      alternateName: "SMK MQ",
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      description:
        "Sekolah Menengah Kejuruan berbasis Pesantren dan Teknologi (TKJ & RPL) dengan kurikulum industri dan hafalan Al-Qur'an di Jonggol, Bogor.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Singasari, Kec. Jonggol",
        addressLocality: "Kabupaten Bogor",
        addressRegion: "Jawa Barat",
        postalCode: "16830",
        addressCountry: "ID",
      },
      telephone: "+62 855 4518 2776",
      sameAs: [
        "https://www.instagram.com/smkmadinatulquran",
        "https://www.youtube.com/@smkmadinatulquran",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    ...PROGRAMS.map((program) => ({
      "@type": "Course",
      name: `${program.title} (${program.code})`,
      description: program.focus,
      provider: {
        "@type": "EducationalOrganization",
        name: "SMK Madinatulquran",
        sameAs: siteUrl,
      },
    })),
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: siteUrl },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: siteUrl },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdSchema),
      },
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
        <FeeSummary />
        <Programs />
        <Vision />
        <ValueProps />
        <Facilities />
        <Testimonials />
        <Achievements />
        <Steps />
        <Fees />
        <Faq />
        <CtaBanner />
      </main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
