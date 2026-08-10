import { Phone } from "lucide-react";
import { SCHOOL } from "@/lib/ppdb";
import { WhatsAppButton } from "./shared";

export function CtaBanner() {
  return (
    <section className="bg-background pb-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground">
          <div
            className="pattern-geo pointer-events-none absolute inset-0 text-primary-foreground/20"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold text-balance sm:text-4xl">
              Kuota PPDB {SCHOOL.year} Terbatas
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Amankan kursi putra/putri Anda sekarang. Tim Admin PMB siap membantu
              proses pendaftaran dari awal sampai pengumuman.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton />
              <a
                href={SCHOOL.hotlineHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/50 px-7 py-4 text-base font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="size-4" aria-hidden="true" />
                Hotline {SCHOOL.hotline}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
