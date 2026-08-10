import {
  Home,
  Shirt,
  Snowflake,
  Trophy,
  Utensils,
  Wifi,
  Landmark,
} from "lucide-react";
import { EXTRAS, FACILITIES } from "@/lib/ppdb";
import { SectionHeading } from "./shared";

const ICON_MAP = {
  wifi: Wifi,
  snow: Snowflake,
  utensils: Utensils,
  home: Home,
  shirt: Shirt,
  mosque: Landmark,
  ball: Trophy,
} as const;

export function Facilities() {
  return (
    <section id="fasilitas" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Fasilitas & Ekstrakurikuler"
          title="Lingkungan belajar yang nyaman untuk santri"
          description="Fasilitas harian yang mendukung kegiatan akademik, ibadah, dan tumbuh kembang santri."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {FACILITIES.map((facility) => {
            const Icon = ICON_MAP[facility.icon];
            return (
              <div
                key={facility.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-cream px-4 py-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-card">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-navy">
                  {facility.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-5">
          <span className="text-sm font-bold text-navy">Ekstrakurikuler:</span>
          {EXTRAS.map((extra) => (
            <span
              key={extra}
              className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-dark"
            >
              {extra}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
