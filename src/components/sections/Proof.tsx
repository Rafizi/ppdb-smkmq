import { Award, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { PARTNERS } from "@/lib/ppdb";
import { SectionHeading } from "./shared";

export function Proof() {
  return (
    <section id="proof" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Bukti Kepercayaan"
          title="Kurikulum tersertifikasi, bermitra dengan lembaga teknologi nasional & internasional"
          description="Pembelajaran di SMK Madinatulquran mengikuti standar mitra industri, sehingga kompetensi santri terukur dan diakui."
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PARTNERS.map((partner) => (
            <li
              key={partner.name}
              className="rounded-2xl border border-border bg-card p-5 text-center shadow-card"
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

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <PlaceholderCard
            icon={<MessageSquareQuote className="size-5" aria-hidden="true" />}
            title="Testimoni Alumni & Orang Tua"
            desc="Ruang untuk 2–3 kutipan alumni RPL/PPLG dan TKJ/TKJT yang sudah bekerja atau kuliah, serta orang tua santri boarding."
          />
          <PlaceholderCard
            icon={<Award className="size-5" aria-hidden="true" />}
            title="Prestasi & Akreditasi"
            desc="Ruang untuk status akreditasi BAN-S/M dan daftar prestasi kompetisi terbaru santri."
          />
        </div>
      </div>
    </section>
  );
}

function PlaceholderCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-primary/35 bg-cream p-6">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </span>
        <h3 className="font-display text-base font-bold text-navy">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <p className="mt-3 text-xs font-semibold tracking-wide text-terracotta uppercase">
        Menunggu data dari sekolah
      </p>
    </div>
  );
}
