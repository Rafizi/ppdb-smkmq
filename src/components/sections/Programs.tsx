import { Check, Cpu, Network } from "lucide-react";
import { PROGRAMS } from "@/lib/ppdb";
import { SectionHeading, WhatsAppButton } from "./shared";

const ICONS = [Network, Cpu];

export function Programs() {
  return (
    <section id="jurusan" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Program Keahlian"
          title="Kuasai keahlian IT & Al-Qur'an sekaligus — siap kerja, siap kuliah, siap jadi technopreneur"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {PROGRAMS.map((program, i) => {
            const Icon = ICONS[i] ?? Cpu;
            return (
              <article
                key={program.code}
                className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-accent-foreground uppercase">
                      {program.code}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-navy">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {program.focus}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {program.outcomes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-navy">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <WhatsAppButton
                  size="md"
                  className="mt-7 self-start"
                  message={`Assalamu'alaikum, saya tertarik dengan jurusan ${program.title} (${program.code}) di SMK Madinatulquran. Mohon informasi PPDB-nya.`}
                >
                  Tanya jurusan ini
                </WhatsAppButton>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
