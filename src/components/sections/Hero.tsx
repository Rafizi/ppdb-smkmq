import React from "react";
import { Sparkles } from "lucide-react";
import { SCHOOL } from "@/lib/ppdb";
import { StatCounter } from "@/components/ui/StatCounter";
import AnimatedCardStack from "@/components/ui/card-stack-hero";
import { FormButton, WhatsAppButton } from "./shared";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        // className="pattern-geo pointer-events-none absolute inset-0 text-primary-foreground/25"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:max-w-7xl lg:grid-cols-2 lg:gap-12 lg:py-20 xl:max-w-[1440px] xl:grid-cols-[1fr_1.1fr] xl:gap-16">
        <div>
          {/* Badge dengan pulsing live indicator dot
          <div
            className="reveal-up"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold tracking-wide text-accent-foreground uppercase shadow-sm">
              <span className="relative flex size-2">
                <span className="animate-pulse-badge absolute inline-flex size-full rounded-full bg-terracotta" />
                <span className="relative inline-flex size-2 rounded-full bg-terracotta" />
              </span>
              <Sparkles className="size-3.5" aria-hidden="true" />
              PPDB {SCHOOL.year} Dibuka
            </span>
          </div> */}

          {/* Eyebrow Tagline */}
          <p
            className="reveal-up mt-4 font-display text-sm font-semibold tracking-wide text-accent sm:text-base"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {SCHOOL.tagline}
          </p>

          {/* H1 Aksi Utama */}
          <h1
            className="reveal-up mt-2.5 font-display text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-6xl"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Daftarkan Putra/Putri Anda ke {SCHOOL.name}
          </h1>

          {/* Subtext dengan ajakan pengisian form */}
          <p
            className="reveal-up mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            Sekolah kejuruan berbasis Al-Qur'an &amp; teknologi — mencetak generasi
            Qurani, technopreneur, dan siap kerja global. Isi formulir pendaftaran, prosesnya cuma 5 menit.
          </p>

          <div
            className="reveal-up mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            <FormButton
              size="lg"
              variant="accent"
              className="hover-lift hover:scale-[1.02] text-base font-bold shadow-lift"
            >
              Isi Formulir Pendaftaran (5 Menit)
            </FormButton>
            <WhatsAppButton
              size="lg"
              variant="outline"
              className="hover-lift"
              message="Assalamu'alaikum Admin PMB, saya ingin berkonsultasi mengenai pendaftaran santri baru SMK Madinatulquran."
            >
              Tanya Admin via WhatsApp
            </WhatsAppButton>
          </div>

          <div
            className="reveal-up mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-primary-foreground/20 pt-6"
            style={{ "--i": 5 } as React.CSSProperties}
          >
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-accent">
                <StatCounter value={10} suffix="+ Th" />
              </span>
              <span className="mt-0.5 text-xs font-semibold text-primary-foreground">
                Pengalaman Mendidik
              </span>
              <span className="text-[11px] text-primary-foreground/70">
                Sejak 2014
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-accent">
                <StatCounter value={100} suffix="%" />
              </span>
              <span className="mt-0.5 text-xs font-semibold text-primary-foreground">
                Standar Industri
              </span>
              <span className="text-[11px] text-primary-foreground/70">
                Cisco &amp; MikroTik
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-accent">
                <StatCounter value={3} suffix=" Juz" />
              </span>
              <span className="mt-0.5 text-xs font-semibold text-primary-foreground">
                Target Tahfidz
              </span>
              <span className="text-[11px] text-primary-foreground/70">
                + Hadits Arba'in
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-6 rounded-[3rem] bg-accent/25 blur-3xl" aria-hidden="true" />
          <AnimatedCardStack />
        </div>
      </div>
    </section>
  );
}
