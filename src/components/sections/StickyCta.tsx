import { useEffect, useState } from "react";
import { ArrowRight, FileText, GraduationCap } from "lucide-react";
import { SCHOOL, waLink } from "@/lib/ppdb";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import Logo from "../ui/Logo";

export function StickyCta() {
  const [isVisibleDesktop, setIsVisibleDesktop] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Tampilkan top bar desktop saat hero keluar dari viewport
        if (entry) {
          setIsVisibleDesktop(!entry.isIntersecting);
        }
      },
      {
        threshold: 0,
      },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop: Top bar tipis yang tersembunyi di awal, muncul setelah hero keluar dari viewport */}
      <div
        className={`sticky-cta-desktop fixed top-0 inset-x-0 z-50 border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-md transition-all duration-300 ease-out ${
          isVisibleDesktop
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isVisibleDesktop}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xs">
              <Logo size="sm" className="rounded-full shadow-md" />
            </div>
            <div className="leading-tight">
              <span className="font-display text-sm font-bold text-navy">
                {SCHOOL.name}
              </span>
              <span className="hidden text-[11px] font-medium text-primary sm:inline ml-2">
                PPDB {SCHOOL.year}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={waLink("Assalamu'alaikum Admin PMB, saya ingin berkonsultasi mengenai PPDB SMK Madinatulquran.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-[#0B3B2E] bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#0B3B2E] shadow-xs transition-all hover:bg-[#0B3B2E]/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsAppIcon className="size-3.5" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <a
              href={SCHOOL.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F5A623] px-4 py-1.5 text-xs font-bold text-[#0B3B2E] shadow-xs transition-all hover:bg-[#E0961B] hover:-translate-y-0.5 active:translate-y-0 border border-[#F5A623]/30"
            >
              <FileText className="size-3.5" aria-hidden="true" />
              <span>Daftar Sekarang</span>
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile (≤860px): Bottom bar fixed selalu terlihat dengan 2 tombol full-width sejajar */}
      <div
        className="sticky-cta-mobile fixed bottom-0 inset-x-0 z-50 border-t border-border/80 bg-background/95 p-3 shadow-[0_-8px_24px_-6px_oklch(0.318_0.06_233.3/0.15)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        role="region"
        aria-label="Aksi Cepat Pendaftaran"
      >
        <div className="mx-auto grid w-full grid-cols-2 gap-2.5">
          <a
            href={waLink("Assalamu'alaikum Admin PMB, saya ingin berkonsultasi mengenai PPDB SMK Madinatulquran.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#0B3B2E] bg-transparent py-2.5 px-3 text-xs sm:text-sm font-bold text-[#0B3B2E] shadow-xs transition-transform hover:bg-[#0B3B2E]/10 active:scale-95"
          >
            <WhatsAppIcon className="size-4 shrink-0" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <a
            href={SCHOOL.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#F5A623] py-2.5 px-3 text-xs sm:text-sm font-bold text-[#0B3B2E] shadow-xs transition-transform hover:bg-[#E0961B] active:scale-95 border border-[#F5A623]/30"
          >
            <FileText className="size-4 shrink-0" aria-hidden="true" />
            <span>Daftar Sekarang</span>
            <ArrowRight className="size-3.5 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}
