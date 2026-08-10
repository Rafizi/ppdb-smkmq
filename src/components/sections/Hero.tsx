import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";
import { SCHOOL, waLink } from "@/lib/ppdb";
import { WhatsAppButton } from "./shared";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="pattern-geo pointer-events-none absolute inset-0 text-primary-foreground/25"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold tracking-wide text-accent-foreground uppercase">
            <Sparkles className="size-3.5" aria-hidden="true" />
            PPDB {SCHOOL.year} Dibuka
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-6xl">
            {SCHOOL.tagline}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            Sekolah kejuruan berbasis Al-Qur'an &amp; teknologi — mencetak generasi
            Qurani, technopreneur, dan siap kerja global.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton />
            <a
              href={waLink(
                "Assalamu'alaikum, saya ingin mengisi formulir pendaftaran PPDB SMK Madinatulquran. Mohon dikirim link formulirnya.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/50 px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Isi Formulir Pendaftaran (5 Menit)
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { icon: BadgeCheck, label: "2 Jurusan IT unggulan" },
              { icon: ShieldCheck, label: "Sertifikasi internasional" },
              { icon: Sparkles, label: "Tahfidz 3 Juz + Arba'in" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-2">
                <Icon
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <dt className="text-sm text-primary-foreground/85">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-accent/25 blur-2xl" aria-hidden="true" />
          <img
            src={heroImage}
            width={1280}
            height={960}
            alt="Santri SMK Madinatulquran belajar di laboratorium komputer dan jaringan"
            className="relative w-full rounded-[1.75rem] border border-primary-foreground/20 object-cover shadow-lift"
          />
          <div className="relative -mt-8 ml-4 inline-flex max-w-xs items-center gap-3 rounded-2xl bg-card px-4 py-3 text-card-foreground shadow-lift">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
              <BadgeCheck className="size-5 text-terracotta" aria-hidden="true" />
            </span>
            <p className="text-xs leading-snug font-medium">
              Kurikulum berstandar industri &amp; bermitra dengan Cisco, MikroTik,
              ITC, LSP Telematika.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
