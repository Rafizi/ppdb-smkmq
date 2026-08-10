import { STEPS } from "@/lib/ppdb";
import { SectionHeading, WhatsAppButton } from "./shared";

export function Steps() {
  return (
    <section id="alur" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Alur Pendaftaran"
          title="5 Langkah Mudah Menuju SMK Madinatulquran"
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-6 pt-8 shadow-card"
            >
              <span className="absolute -top-5 left-6 flex size-11 items-center justify-center rounded-2xl bg-accent font-display text-lg font-extrabold text-accent-foreground shadow-card">
                {i + 1}
              </span>
              <h3 className="font-display text-base font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <WhatsAppButton message="Assalamu'alaikum, saya ingin memulai pendaftaran PPDB SMK Madinatulquran. Mohon dipandu langkah-langkahnya.">
            Mulai Pendaftaran via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
