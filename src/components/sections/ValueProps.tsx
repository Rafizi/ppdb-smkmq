import React from "react";
import {
  BookOpen,
  Globe2,
  Languages,
  Rocket,
  ScrollText,
  Target,
} from "lucide-react";
import { VALUE_PROPS } from "@/lib/ppdb";
import { SectionHeading } from "./shared";

const ICON_MAP = {
  book: BookOpen,
  globe: Globe2,
  languages: Languages,
  rocket: Rocket,
  target: Target,
  scroll: ScrollText,
} as const;

export function ValueProps() {
  return (
    <section id="keunggulan" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Nilai Tambah"
            title="Lebih dari sekadar sekolah kejuruan"
            description="Program pendukung yang membentuk kompetensi teknis, karakter Qurani, dan kesiapan global santri."
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((item, idx) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className="reveal-up hover-lift stagger-fast rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary/40"
                style={{ "--i": idx } as React.CSSProperties}
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary-light/25 text-primary-dark">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
