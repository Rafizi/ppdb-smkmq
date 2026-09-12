import React from "react";
import { ArrowDown, CheckCircle2, CreditCard, Sparkles } from "lucide-react";
import { PROGRAM_FEES, SCHOOL } from "@/lib/ppdb";

export function FeeSummary() {
  const fullday = PROGRAM_FEES[0];
  const boarding = PROGRAM_FEES[1];

  return (
    <section id="ringkasan-biaya" className="bg-background py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up rounded-3xl border border-primary/20 bg-gradient-to-br from-cream/80 via-card to-primary/5 p-6 sm:p-8 shadow-card">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Informasi Rentang Biaya */}
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                <CreditCard className="size-3.5" aria-hidden="true" />
                <span>Transparansi Biaya Pendidikan TA {SCHOOL.year}</span>
              </div>

              <h2 className="font-display text-xl font-bold text-navy sm:text-2xl lg:text-3xl">
                Biaya Masuk Mulai dari{" "}
                <span className="text-primary font-extrabold">{fullday.totalInitial}</span>
              </h2>

              <p className="max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Biaya awal transparan mencakup seragam lengkap (3 set), jas almamater, dan uang pangkal.
                Tersedia skema cicilan 2x dengan SPP bulanan terjangkau mulai {fullday.monthly}/bulan.
              </p>

              {/* Tag ringkasan paket */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold">
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-navy shadow-xs">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" aria-hidden="true" />
                  <span>
                    Fullday: <strong>{fullday.totalInitial}</strong>
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-accent/30 bg-accent/10 px-3 py-1.5 text-accent-foreground shadow-xs">
                  <Sparkles className="size-3.5 text-accent shrink-0" aria-hidden="true" />
                  <span>
                    Boarding (Asrama): <strong>{boarding.totalInitial}</strong>
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-muted-foreground shadow-xs">
                  <span>Bisa Dicicil 2x</span>
                </span>
              </div>
            </div>

            {/* Link Anchor menuju section biaya lengkap */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-2">
              <a
                href="#biaya"
                className="hover-lift inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0B3B2E] bg-transparent px-5 py-3 text-xs sm:text-sm font-bold text-[#0B3B2E] shadow-xs transition-all hover:bg-[#0B3B2E]/10 active:scale-95"
              >
                <span>Lihat Rincian Biaya Lengkap</span>
                <ArrowDown className="size-4 shrink-0" aria-hidden="true" />
              </a>
              <span className="text-[11px] text-muted-foreground">
                Detail cicilan, SPP, &amp; rekening resmi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
