import React from "react";
import {
  Home,
  Shirt,
  Snowflake,
  Trophy,
  Utensils,
  Wifi,
  Landmark,
} from "lucide-react";
import futsalImage from "@/assets/ekskul/futsal.jpg";
import diplomasiImage from "@/assets/ekskul/diplomasi.jpg";
import karateImage from "@/assets/ekskul/karate.jpg";
import kepanduanImage from "@/assets/ekskul/kepanduan.jpg";
import { FACILITIES } from "@/lib/ppdb";
import {
  ProgressSlider,
  SliderBtn,
  SliderBtnGroup,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progressive-carousel";
import { SectionHeading } from "./shared";

const ICON_MAP = {
  wifi: Wifi,
  snow: Snowflake,
  utensils: Utensils,
  home: Home,
  shirt: Shirt,
  mosque: Landmark,
  ball: Trophy,
} as const;

const EKSKUL_ITEMS = [
  {
    img: futsalImage,
    title: "Futsal",
    desc: "Melatih kerja sama tim, kebugaran fisik, dan sportivitas santri melalui latihan rutin dan turnamen terarah.",
    sliderName: "futsal",
  },
  {
    img: diplomasiImage,
    title: "Diplomasi",
    desc: "Mengasah keberanian berbicara di depan publik, teknik debat argumentatif, dan wawasan komunikasi global.",
    sliderName: "diplomasi",
  },
  {
    img: karateImage,
    title: "Karate",
    desc: "Membangun ketahanan fisik, ketenangan mental, disiplin diri, serta seni bela diri yang terukur.",
    sliderName: "karate",
  },
  {
    img: kepanduanImage,
    title: "Kepanduan",
    desc: "Menumbuhkan jiwa kepemimpinan, kekompakan regu, survival alam terbuka, dan kemandirian santri asrama.",
    sliderName: "kepanduan",
  },
];

export function Facilities() {
  return (
    <section id="fasilitas" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Fasilitas &amp; Asrama"
            title="Lingkungan Belajar Asri &amp; Asrama yang Kondusif"
            description="Sarana belajar ber-AC, koneksi internet cepat, serta lingkungan asrama di Jonggol yang mendukung ibadah, akademik, dan kesehatan santri."
          />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {FACILITIES.map((facility, idx) => {
            const Icon = ICON_MAP[facility.icon];
            return (
              <div
                key={facility.label}
                className="reveal-up hover-lift stagger-fast flex items-center gap-3 rounded-2xl border border-border bg-cream px-4 py-4"
                style={{ "--i": idx } as React.CSSProperties}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-card">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-navy">
                  {facility.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="reveal-up mt-16 mb-6 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Ekstrakurikuler Pilihan
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
            Ajang Pembentukan Karakter &amp; Minat Santri
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
            Melatih ketangkasan fisik, mental sportivitas, dan kepercayaan diri melalui pembinaan kegiatan yang seru dan terarah.
          </p>
        </div>

        <ProgressSlider
          vertical={false}
          activeSlider="futsal"
          className="reveal-up relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border shadow-card"
        >
          <SliderContent>
            {EKSKUL_ITEMS.map((item) => (
              <SliderWrapper key={item.sliderName} value={item.sliderName}>
                <img
                  className="w-full aspect-[16/10] sm:aspect-video object-cover"
                  src={item.img}
                  alt={`Kegiatan Ekstrakurikuler ${item.title} SMK Madinatulquran`}
                  loading="lazy"
                  decoding="async"
                />
              </SliderWrapper>
            ))}
          </SliderContent>

          <SliderBtnGroup className="grid grid-cols-2 overflow-hidden rounded-b-2xl border-t border-white/10 bg-primary md:grid-cols-4">
            {EKSKUL_ITEMS.map((item) => (
              <SliderBtn
                key={item.sliderName}
                value={item.sliderName}
                className="cursor-pointer p-3 sm:p-4 text-left border-b md:border-b-0 border-r border-white/15 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:last:border-r-0 transition-opacity duration-300 hover:opacity-100"
                progressBarClass="h-full bg-accent/40"
              >
                <h4 className="relative mb-1 w-fit rounded-full bg-accent px-2.5 py-0.5 font-display text-xs font-bold text-accent-foreground shadow-xs sm:text-sm">
                  {item.title}
                </h4>
                <p className="line-clamp-2 text-xs text-white leading-relaxed">{item.desc}</p>
              </SliderBtn>
            ))}
          </SliderBtnGroup>
        </ProgressSlider>
      </div>
    </section>
  );
}
