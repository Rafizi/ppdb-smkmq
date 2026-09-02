import React from "react";
import {
  AlertTriangle,
  Building2,
  CalendarCheck,
  Check,
  CreditCard,
  FileText,
  Info,
  QrCode,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { PROGRAM_FEES, REGISTRATION_FEE, SCHOOL } from "@/lib/ppdb";
import { FormButton, SectionHeading, WhatsAppButton, WhatsAppIcon } from "./shared";

export function Fees() {
  return (
    <section id="biaya" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Rincian Biaya PPDB"
            title="Transparan sejak awal, tanpa biaya tersembunyi"
            description={`Rincian biaya resmi PPDB SMK Madinatulquran Tahun Ajaran ${SCHOOL.year}. Tersedia opsi cicilan 2x untuk kemudahan orang tua santri.`}
          />
        </div>

        {/* Biaya Registrasi Info Box */}
        <div className="reveal-up mt-8 mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-4 text-center">
          <p className="text-sm font-medium text-navy">
            Biaya Registrasi Formulir PPDB:{" "}
            <span className="font-display font-bold text-primary text-base">
              {REGISTRATION_FEE}
            </span>{" "}
            <span className="text-xs text-muted-foreground">
              (Berlaku untuk semua program seleksi)
            </span>
          </p>
        </div>

        {/* Paket Program Cards (Fullday & Boarding) */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {PROGRAM_FEES.map((plan, idx) => (
            <article
              key={plan.name}
              style={{ "--i": idx } as React.CSSProperties}
              className={
                plan.featured
                  ? "reveal-up hover-lift relative flex flex-col justify-between rounded-3xl border-2 border-accent bg-card p-7 shadow-lift sm:p-8"
                  : "reveal-up hover-lift relative flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-card sm:p-8"
              }
            >
              <div>
                {plan.featured ? (
                  <span className="absolute -top-3.5 right-6 inline-flex items-center gap-1 rounded-full bg-accent px-3.5 py-1 text-xs font-bold tracking-wide text-accent-foreground uppercase shadow-sm">
                    <Sparkles className="size-3" aria-hidden="true" />
                    Paling Diminati
                  </span>
                ) : null}

                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Paket {plan.name}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.subtitle}
                </p>

                {/* Total Biaya Masuk Awal (Highlight) */}
                <div className="mt-6 rounded-2xl border border-primary/25 bg-cream p-5">
                  <span className="text-xs font-bold tracking-wider text-primary uppercase">
                    Total Biaya Masuk Awal
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
                      {plan.totalInitial}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {plan.totalInitialBreakdown}
                  </p>
                  <p className="mt-2.5 flex items-start gap-1.5 text-xs text-navy/80">
                    <Info className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                    <span>Mencakup: {plan.entryIncludes}</span>
                  </p>
                </div>

                {/* Skema Cicilan 2x */}
                <div className="mt-5 rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="size-4 text-accent-foreground" aria-hidden="true" />
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider">
                      Skema Cicilan 2x Uang Masuk
                    </h4>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {plan.installmentText}
                  </p>

                  <div className="mt-3.5 grid grid-cols-2 gap-3">
                    {plan.installmentStages.map((stage) => (
                      <div
                        key={stage.label}
                        className="rounded-xl border border-border bg-cream p-3 text-left"
                      >
                        <p className="text-[11px] font-semibold text-primary-dark">
                          {stage.label}
                        </p>
                        <p className="mt-1 font-display text-base font-bold text-navy">
                          {stage.amount}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {stage.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SPP Bulanan */}
                <div className="mt-6 border-t border-border pt-5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                        SPP Bulanan
                      </p>
                      <p className="font-display text-2xl font-extrabold text-navy">
                        {plan.monthly}
                        <span className="text-sm font-normal text-muted-foreground">
                          {" "}
                          / bulan
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Check className="size-3.5 text-primary" aria-hidden="true" />
                    {plan.monthlyNote}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3 pt-4 border-t border-border">
                <FormButton
                  size="md"
                  variant={plan.featured ? "accent" : "primary"}
                  className="w-full justify-center"
                >
                  Daftar Program {plan.name}
                </FormButton>
                <WhatsAppButton
                  size="sm"
                  variant="subtle"
                  className="w-full justify-center"
                  message={`Assalamu'alaikum Admin PMB, saya ingin konsultasi mengenai rincian biaya program ${plan.name} SMK Madinatulquran.`}
                >
                  Tanya Rincian {plan.name} via WA
                </WhatsAppButton>
              </div>
            </article>
          ))}
        </div>

        {/* Banner Waspada Penipuan & Rekening Resmi */}
        <div className="reveal-up mt-12 overflow-hidden rounded-3xl border-2 border-terracotta/30 bg-card shadow-card">
          <div className="bg-terracotta/10 px-6 py-3.5 border-b border-terracotta/20 flex items-center gap-2.5">
            <ShieldAlert className="size-5 text-terracotta shrink-0" aria-hidden="true" />
            <p className="text-sm font-bold text-terracotta">
              Peringatan Keamanan &amp; Anti-Penipuan PPDB
            </p>
          </div>

          <div className="p-6 sm:p-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm leading-relaxed text-navy">
                {SCHOOL.antiFraudNotice}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream border border-border px-3 py-1 text-navy">
                  <CreditCard className="size-3.5 text-primary" aria-hidden="true" />
                  Transfer Bank BRI
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream border border-border px-3 py-1 text-navy">
                  <Check className="size-3.5 text-primary" aria-hidden="true" />
                  Konfirmasi WA Resmi
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-cream p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                  <Building2 className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                    Rekening Resmi Bank {SCHOOL.bank.name}
                  </p>
                  <p className="font-display text-xl font-extrabold text-navy select-all tracking-wider">
                    {SCHOOL.bank.number}
                  </p>
                  <p className="text-xs font-semibold text-primary-dark">
                    a/n {SCHOOL.bank.holder}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-border flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <WhatsAppIcon className="size-3.5 text-whatsapp shrink-0" aria-hidden="true" />
                <span>Nomor Admin PMB (WA):</span>{" "}
                <a
                  href={`https://wa.me/${SCHOOL.waAdmin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-navy hover:underline hover:text-whatsapp transition-colors"
                >
                  {SCHOOL.waAdminLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
