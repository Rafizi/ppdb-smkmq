import React from "react";
import { PARTNERS } from "@/lib/ppdb";
import { SectionHeading } from "./shared";
import logoMikrotik from "@/assets/partners/mikrotik.png";
import logoCisco from "@/assets/partners/cisco.png";
import logoItc from "@/assets/partners/itc.png";
import logoLsp from "@/assets/partners/lsp-telematika.png";

const PARTNER_CONFIG: Record<
  string,
  { src: string; className: string }
> = {
  "MikroTik Academy": {
    src: logoMikrotik,
    className: "max-h-10 sm:max-h-11 max-w-[135px]",
  },
  "Cisco Networking Academy": {
    src: logoCisco,
    className: "max-h-12 sm:max-h-[52px] max-w-[54px] drop-shadow-xs",
  },
  ITC: {
    src: logoItc,
    className: "max-h-11 sm:max-h-12 max-w-[110px]",
  },
  "LSP Telematika": {
    src: logoLsp,
    className: "max-h-10 sm:max-h-11 max-w-[135px]",
  },
};

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
          {PARTNERS.map((partner, idx) => {
            const config = PARTNER_CONFIG[partner.name] ?? {
              src: partner.logo,
              className: "max-h-11 max-w-[130px]",
            };

            return (
              <li
                key={partner.name}
                className="reveal-up hover-lift group flex h-full flex-col items-center justify-between rounded-2xl border border-border bg-card p-5 text-center shadow-card transition-all"
                style={{ "--i": idx } as React.CSSProperties}
              >
                <div className="flex h-16 w-full items-center justify-center">
                  <img
                    src={config.src}
                    alt={`Logo ${partner.name}`}
                    className={`${config.className} w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105`}
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex flex-1 flex-col justify-between">
                  <p className="font-display text-sm font-bold text-navy">
                    {partner.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {partner.note}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
