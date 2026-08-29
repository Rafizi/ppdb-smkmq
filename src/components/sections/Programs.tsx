import React from "react";
import { Award, Check, Cpu, Network, Sparkles, TrendingUp } from "lucide-react";
import { PROGRAMS } from "@/lib/ppdb";
import { SectionHeading, WhatsAppButton } from "./shared";

const ICONS = [Network, Cpu];

export function Programs() {
  return (
    <section id="jurusan" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Program Keahlian"
            title="Kuasai keahlian IT & Al-Qur'an sekaligus — siap kerja, siap kuliah, siap jadi technopreneur"
            description="Kurikulum vokasi berbasis industri global dengan fokus praktek nyata dan pembekalan sertifikasi internasional."
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {PROGRAMS.map((program, i) => {
            const Icon = ICONS[i] ?? Cpu;
            return (
              <article
                key={program.code}
                className="reveal-up hover-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-card sm:p-8"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div>
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-13 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                      <Icon className="size-6.5" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-accent-foreground uppercase">
                        {program.code}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold text-navy sm:text-2xl">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {program.focus}
                  </p>

                  <div className="mt-6">
                    <h4 className="flex items-center gap-2 text-xs font-bold tracking-wider text-navy uppercase">
                      <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
                      Kompetensi &amp; Capaian Utama
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {program.outcomes.map((item, idx) => (
                        <li
                          key={item}
                          className="reveal-up flex gap-2.5 text-sm text-navy"
                          style={{ "--i": idx } as React.CSSProperties}
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4.5">
                    <h4 className="flex items-center gap-2 text-xs font-bold tracking-wider text-primary-dark uppercase">
                      <TrendingUp className="size-3.5 text-primary" aria-hidden="true" />
                      Bukti Outcome &amp; Serapan Industri
                    </h4>
                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-navy">
                      {program.proofStats.map((stat) => (
                        <li key={stat} className="flex gap-2">
                          <Award className="mt-0.5 size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-[10px] italic text-muted-foreground">
                      {program.dummyNote}
                    </p>
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-border">
                  <WhatsAppButton
                    size="md"
                    className="hover-lift w-full sm:w-auto"
                    message={`Assalamu'alaikum Admin PMB, saya ingin berkonsultasi mengenai jurusan ${program.title} (${program.code}) di SMK Madinatulquran.`}
                  >
                    Konsultasi Jurusan {program.code.split(" ")[0]}
                  </WhatsAppButton>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
