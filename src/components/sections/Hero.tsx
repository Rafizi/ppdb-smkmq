import React from "react";
import { BadgeCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";
import { SCHOOL } from "@/lib/ppdb";
import { StatCounter } from "@/components/ui/StatCounter";
import { FormButton, WhatsAppButton } from "./shared";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="pattern-geo pointer-events-none absolute inset-0 text-primary-foreground/25"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          {/* Badge dengan pulsing live indicator dot */}
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
          </div>

          <h1
            className="reveal-up mt-6 font-display text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-6xl"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {SCHOOL.tagline}
          </h1>

          <p
            className="reveal-up mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Sekolah kejuruan berbasis Al-Qur'an &amp; teknologi — mencetak generasi
            Qurani, technopreneur, dan siap kerja global.
          </p>

          <div
            className="reveal-up mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            style={{ "--i": 3 } as React.CSSProperties}
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
            style={{ "--i": 4 } as React.CSSProperties}
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

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-accent/25 blur-2xl" aria-hidden="true" />
          <div className="overflow-hidden rounded-[1.75rem] border border-primary-foreground/20 shadow-lift">
            <img
              src={heroImage}
              width={1280}
              height={960}
              alt="Santri SMK Madinatulquran belajar di laboratorium komputer dan jaringan"
              className="animate-slowzoom w-full object-cover will-change-transform"
            />
          </div>
          <div className="relative -mt-8 ml-4 inline-flex max-w-xs items-center gap-3 rounded-2xl bg-card px-4 py-3 text-card-foreground shadow-lift">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
              <BadgeCheck className="size-5 text-terracotta" aria-hidden="true" />
            </span>
            <p className="text-xs leading-snug font-medium text-navy">
              Kurikulum berstandar industri &amp; bermitra dengan Cisco, MikroTik,
              ITC, LSP Telematika.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
