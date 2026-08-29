import React from "react";
import { Award, BadgeCheck, Medal, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ACCREDITATION,
  ACHIEVEMENTS,
  type Achievement,
  type AchievementLevel,
} from "@/lib/ppdb";
import { PendingDataPanel, SectionHeading } from "./shared";

const LEVEL_BADGE: Record<AchievementLevel, string> = {
  Internasional: "bg-terracotta text-terracotta-foreground",
  Nasional: "bg-primary text-primary-foreground",
  Provinsi: "bg-accent text-accent-foreground",
  "Kabupaten/Kota": "bg-muted text-navy",
};

export function Achievements() {
  return (
    <section id="prestasi" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Prestasi & Akreditasi"
            title="Kompetensi santri yang terukur dan diakui"
            description="Status akreditasi sekolah beserta capaian santri di ajang kompetisi tingkat kabupaten hingga internasional."
          />
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <AccreditationCard />
          <AchievementList />
        </div>
      </div>
    </section>
  );
}

function AccreditationCard() {
  if (!ACCREDITATION) {
    return (
      <PendingDataPanel
        icon={<BadgeCheck className="size-5" aria-hidden="true" />}
        title="Status Akreditasi"
        description="Wadah untuk peringkat akreditasi BAN-S/M, nomor SK penetapan, NPSN, dan masa berlakunya. Isi objek ACCREDITATION di src/lib/ppdb.ts."
      />
    );
  }

  const rows = [
    { label: "NPSN", value: ACCREDITATION.npsn },
    { label: "Nomor SK", value: ACCREDITATION.decree },
    { label: "Tahun penetapan", value: ACCREDITATION.year },
    { label: "Berlaku sampai", value: ACCREDITATION.validUntil },
  ].filter((row) => Boolean(row.value));

  return (
    <div className="reveal-up hover-lift rounded-3xl border border-border bg-card p-7 shadow-card">
      <div className="flex items-center gap-4">
        <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary font-display text-3xl font-extrabold text-primary-foreground">
          {ACCREDITATION.grade}
        </span>
        <div>
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Terakreditasi
          </p>
          <p className="font-display text-lg font-bold text-navy">{ACCREDITATION.institution}</p>
        </div>
      </div>

      {rows.length > 0 ? (
        <dl className="mt-6 space-y-3 text-sm">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-b-0 last:pb-0"
            >
              <dt className="text-muted-foreground">{row.label}</dt>
              <dd className="text-right font-semibold text-navy">{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}

function AchievementList() {
  if (ACHIEVEMENTS.length === 0) {
    return (
      <PendingDataPanel
        icon={<Trophy className="size-5" aria-hidden="true" />}
        title="Prestasi Santri"
        description="Wadah untuk daftar juara lomba santri — nama ajang, tingkat, tahun, dan peraihnya. Tambahkan datanya pada ACHIEVEMENTS di src/lib/ppdb.ts."
      />
    );
  }

  return (
    <div className="reveal-up hover-lift rounded-3xl border border-border bg-card p-7 shadow-card">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Award className="size-5" aria-hidden="true" />
        </span>
        <h3 className="font-display text-lg font-bold text-navy">Prestasi Terbaru Santri</h3>
      </div>

      <ol className="mt-6 space-y-7">
        {groupByYear(ACHIEVEMENTS).map((group) => (
          <li key={group.year}>
            <p className="font-display text-sm font-bold tracking-wide text-primary">
              {group.year}
            </p>
            <ul className="mt-3 space-y-3">
              {group.items.map((item, idx) => (
                <li
                  key={`${item.year}-${item.title}-${item.event}`}
                  className="reveal-up hover-lift rounded-2xl border border-border bg-cream p-5"
                  style={{ "--i": idx } as React.CSSProperties}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase",
                        LEVEL_BADGE[item.level],
                      )}
                    >
                      {item.level}
                    </span>
                    {item.program ? (
                      <span className="rounded-full bg-card px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                        {item.program}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 font-display text-base leading-snug font-bold text-navy">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.event}</p>

                  {item.winner ? (
                    <p className="mt-2 flex gap-2 text-xs text-primary-dark">
                      <Medal className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                      {item.winner}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Kelompokkan prestasi per tahun, tahun terbaru lebih dulu. */
function groupByYear(items: Achievement[]) {
  const byYear = new Map<string, Achievement[]>();

  for (const item of items) {
    const bucket = byYear.get(item.year);
    if (bucket) {
      bucket.push(item);
    } else {
      byYear.set(item.year, [item]);
    }
  }

  return [...byYear.entries()]
    .map(([year, group]) => ({ year, items: group }))
    .sort((a, b) => b.year.localeCompare(a.year, "id", { numeric: true }));
}
