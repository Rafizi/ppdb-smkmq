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
import heroImage from "@/assets/hero-school.jpg";
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
    img: heroImage, // TODO: ganti dengan foto asli kegiatan Futsal — sementara pakai path foto hero yang sudah ada
    title: "Futsal",
    desc: "Melatih kerja sama tim dan sportivitas santri melalui latihan rutin.",
    sliderName: "futsal",
  },
  {
    img: heroImage, // TODO: ganti dengan foto asli kegiatan Diplomasi
    title: "Diplomasi",
    desc: "Mengasah kemampuan komunikasi, debat, dan kepercayaan diri santri.",
    sliderName: "diplomasi",
  },
  {
    img: heroImage, // TODO: ganti dengan foto asli kegiatan Karate
    title: "Karate",
    desc: "Membentuk disiplin dan ketahanan fisik melalui seni bela diri.",
    sliderName: "karate",
  },
  {
    img: heroImage, // TODO: ganti dengan foto asli kegiatan Kepanduan
    title: "Kepanduan",
    desc: "Menumbuhkan jiwa kepemimpinan dan kemandirian santri.",
    sliderName: "kepanduan",
  },
];
// CATATAN: seluruh teks deskripsi di atas dummy. Jangan publish ke production
// sebelum diganti dengan copy & foto asli dari sekolah untuk masing-masing ekskul.

export function Facilities() {
  return (
    <section id="fasilitas" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Fasilitas & Ekstrakurikuler"
            title="Lingkungan belajar yang nyaman untuk santri"
            description="Fasilitas harian yang mendukung kegiatan akademik, ibadah, dan tumbuh kembang santri."
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
            Ekstrakurikuler
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
            Kegiatan Pengembangan Diri Santri
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
            Membentuk karakter, kedisiplinan, dan sportivitas santri melalui beragam kegiatan pilihan.
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
                  className="h-[300px] sm:h-[360px] md:h-[420px] w-full object-cover"
                  src={item.img}
                  alt={item.title}
                />
              </SliderWrapper>
            ))}
          </SliderContent>

          <SliderBtnGroup className="absolute bottom-0 left-0 right-0 grid h-fit grid-cols-2 overflow-hidden rounded-b-2xl border-t border-white/10 bg-navy/85 backdrop-blur-md md:grid-cols-4">
            {EKSKUL_ITEMS.map((item) => (
              <SliderBtn
                key={item.sliderName}
                value={item.sliderName}
                className="cursor-pointer p-3 sm:p-3.5 text-left border-b md:border-b-0 border-r border-white/10 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:last:border-r-0 transition-opacity duration-300 hover:opacity-100"
                progressBarClass="h-full bg-accent/40"
              >
                <h4 className="relative mb-1 w-fit rounded-full bg-white/15 px-2.5 py-0.5 font-display text-xs font-bold text-white sm:text-sm">
                  {item.title}
                </h4>
                <p className="line-clamp-2 text-xs text-white/80 leading-relaxed">{item.desc}</p>
              </SliderBtn>
            ))}
          </SliderBtnGroup>
        </ProgressSlider>
      </div>
    </section>
  );
}
