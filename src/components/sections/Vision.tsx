import React from "react";
import { BookOpen, CheckCircle2, Compass, Quote, Sparkles, Star } from "lucide-react";
import { SCHOOL } from "@/lib/ppdb";

export function Vision() {
  return (
    <section id="visi" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up relative overflow-hidden rounded-3xl bg-primary-dark px-6 py-12 text-primary-foreground shadow-lift sm:px-12 sm:py-16">
          <div
            // className="pattern-geo pointer-events-none absolute inset-0 text-primary-foreground/15"
            aria-hidden="true"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div>
              <div className="flex items-center gap-2 text-accent">
                <Compass className="size-5" aria-hidden="true" />
                <span className="text-xs font-bold tracking-widest uppercase">
                  Visi Pendidikan {SCHOOL.name}
                </span>
              </div>

              <h2 className="mt-4 font-display text-2xl leading-snug font-extrabold text-balance sm:text-3xl lg:text-3.5xl">
                "Menjadi SMK unggul yang melahirkan generasi Qurani, technopreneur, dan pemimpin masa depan yang inovatif, mandiri, serta berdaya saing global."
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                Memadukan kedalaman adab Islami, hafalan Al-Qur'an, dan penguasaan teknologi tingkat tinggi dalam ekosistem boarding school yang kondusif.
              </p>
            </div>

            <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 sm:p-7 backdrop-blur">
              <div className="flex items-center gap-2.5">
                <Sparkles className="size-5 text-accent" aria-hidden="true" />
                <h3 className="font-display text-lg font-bold text-white">
                  Target Karakter Lulusan
                </h3>
              </div>

              <ul className="mt-5 space-y-3.5 text-sm">
                {[
                  "Hafidz Al-Qur'an minimal 3 Juz bersanad mutqin",
                  "Hafal & memahami Hadits Arba'in An-Nawawiyyah",
                  "Beraqidah lurus Ahlussunnah wal Jama'ah & beradab mulia",
                  "Menguasai keahlian IT profesional siap sertifikasi global",
                  "Memiliki jiwa kepemimpinan, kemandirian & technopreneurship",
                ].map((item, idx) => (
                  <li
                    key={item}
                    className="reveal-up flex items-start gap-3"
                    style={{ "--i": idx } as React.CSSProperties}
                  >
                    <CheckCircle2
                      className="mt-0.5 size-4.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-primary-foreground/95 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
