import React from "react";
import { Clock } from "lucide-react";
import { STEPS } from "@/lib/ppdb";
import { FormButton, SectionHeading, WhatsAppButton } from "./shared";

export function Steps() {
  return (
    <section id="alur" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Alur Pendaftaran &amp; Seleksi"
            title="4 Langkah Mudah Menjadi Santri SMK Madinatulquran"
            description="Alur penerimaan yang terstruktur dan efisien. Seluruh rangkaian tes akademik, minat bakat IT, baca Al-Qur'an, dan wawancara orang tua tuntas dalam 1 hari."
          />
        </div>

        <div className="relative mt-12">
          {/* Animated Connector Line for Desktop */}
          <div
            className="reveal-up hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 -translate-y-6 bg-gradient-to-r from-accent via-primary to-accent origin-left pointer-events-none z-0 opacity-40 transition-transform duration-700"
            aria-hidden="true"
          />

          <ol className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, idx) => (
              <li
                key={step.title}
                className="reveal-up hover-lift stagger-slow group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 pt-9 shadow-card hover:border-primary/40"
                style={{ "--i": idx } as React.CSSProperties}
              >
                <span className="absolute -top-5 left-6 flex size-11 items-center justify-center rounded-2xl bg-accent font-display text-lg font-extrabold text-accent-foreground shadow-card group-hover:scale-110 transition-transform">
                  {step.step}
                </span>

                <div>
                  <h3 className="font-display text-base font-bold text-navy group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-border">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary-dark">
                    <Clock className="size-3 shrink-0 text-primary" aria-hidden="true" />
                    {step.estimate}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal-up mt-12 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <FormButton size="lg" variant="primary" className="hover-lift">
            Isi Formulir Pendaftaran (5 Menit)
          </FormButton>
          <WhatsAppButton
            size="lg"
            variant="subtle"
            className="hover-lift"
            message="Assalamu'alaikum Admin PMB, saya ingin dipandu mengenai alur pendaftaran PPDB SMK Madinatulquran."
          >
            Bantuan Alur via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
