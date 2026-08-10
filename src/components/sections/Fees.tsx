import { Building2, Check, Info } from "lucide-react";
import { PROGRAM_FEES, SCHOOL } from "@/lib/ppdb";
import { SectionHeading, WhatsAppButton } from "./shared";

export function Fees() {
  return (
    <section id="biaya" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Rincian Biaya"
          title="Transparan sejak awal, tanpa biaya tersembunyi"
          description="Berikut rincian biaya PPDB tahun ajaran 2027/2028 sesuai brosur resmi sekolah."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-border bg-cream p-7">
            <h3 className="font-display text-lg font-bold text-navy">
              Biaya Awal
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Berlaku untuk semua program.
            </p>
            <dl className="mt-6 space-y-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
                <dt className="text-sm text-navy">Pendaftaran</dt>
                <dd className="font-display text-lg font-bold text-primary">
                  Rp450.000
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-navy">
                  Daftar Ulang{" "}
                  <span className="text-muted-foreground">(naik kelas XI &amp; XII)</span>
                </dt>
                <dd className="font-display text-lg font-bold text-primary">
                  Rp3.500.000
                </dd>
              </div>
            </dl>

            <div className="mt-6 space-y-2 rounded-2xl bg-card p-4 text-xs leading-relaxed text-muted-foreground">
              <p className="flex gap-2">
                <Info className="mt-0.5 size-3.5 shrink-0 text-accent-foreground" aria-hidden="true" />
                Uang Masuk mencakup Uang Pangkal, Seragam, dan Almamater.
              </p>
              <p className="flex gap-2">
                <Info className="mt-0.5 size-3.5 shrink-0 text-accent-foreground" aria-hidden="true" />
                Daftar Ulang untuk pemeliharaan &amp; perbaikan sarana prasarana.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {PROGRAM_FEES.map((plan) => (
              <article
                key={plan.name}
                className={
                  plan.featured
                    ? "relative rounded-3xl border-2 border-accent bg-card p-7 shadow-lift"
                    : "rounded-3xl border border-border bg-card p-7 shadow-card"
                }
              >
                {plan.featured ? (
                  <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[11px] font-bold tracking-wide text-accent-foreground uppercase">
                    Paling diminati
                  </span>
                ) : null}
                <h3 className="font-display text-xl font-bold text-navy">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.subtitle}</p>

                <p className="mt-6 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Uang Masuk
                </p>
                <p className="font-display text-2xl font-extrabold text-primary">
                  {plan.entry}
                </p>

                <p className="mt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  SPP / bulan
                </p>
                <p className="font-display text-2xl font-extrabold text-navy">
                  {plan.monthly}
                </p>
                <p className="mt-1 flex gap-1.5 text-xs text-muted-foreground">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                  {plan.monthlyNote}
                </p>

                <WhatsAppButton
                  size="md"
                  className="mt-6 w-full"
                  message={`Assalamu'alaikum, saya ingin mendaftar program ${plan.name} di SMK Madinatulquran. Mohon informasi biaya dan prosedurnya.`}
                >
                  Daftar {plan.name}
                </WhatsAppButton>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-border bg-cream p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Building2 className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs tracking-wide text-muted-foreground uppercase">
                Pembayaran melalui Bank {SCHOOL.bank.name}
              </p>
              <p className="font-display text-lg font-bold text-navy">
                {SCHOOL.bank.number}
              </p>
              <p className="text-sm text-muted-foreground">
                a/n {SCHOOL.bank.holder}
              </p>
            </div>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
            Konfirmasikan bukti pembayaran ke Admin PMB agar pendaftaran segera
            diproses.
          </p>
        </div>
      </div>
    </section>
  );
}
