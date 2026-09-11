import React from "react";
import { ShieldCheck } from "lucide-react";
import { PARTNERS } from "@/lib/ppdb";
import { SectionHeading } from "./shared";

export function Proof() {
  return (
    <section id="proof" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Mitra Industri Resmi"
            title="Kurikulum terstandarisasi dengan lembaga teknologi nasional dan internasional"
            description="Pembelajaran di SMK Madinatulquran mengacu pada silabus resmi mitra industri global. Kompetensi santri teruji melalui sertifikasi yang diakui dunia kerja."
          />
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PARTNERS.map((partner, idx) => (
            <li
              key={partner.name}
              className="reveal-up hover-lift rounded-2xl border border-border bg-card p-5 text-center shadow-card"
              style={{ "--i": idx } as React.CSSProperties}
            >
              <span className="mx-auto flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-3 font-display text-sm font-bold text-navy">
                {partner.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{partner.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
