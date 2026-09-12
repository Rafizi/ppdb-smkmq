import React from "react";
import { Phone } from "lucide-react";
import { SCHOOL } from "@/lib/ppdb";
import { Logo } from "@/components/ui/Logo";
import { FormButton, WhatsAppButton } from "./shared";

export function CtaBanner() {
  return (
    <section className="bg-background pb-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-16">
          <div
            // className="pattern-geo pointer-events-none absolute inset-0 text-primary-foreground/20"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto mb-6 flex justify-center">
              <div className="rounded-full bg-white/15 p-2 backdrop-blur-md ring-1 ring-white/30 shadow-lift">
                <Logo size="lg" className="rounded-full shadow-md" />
              </div>
            </div>
            <h2 className="font-display text-3xl font-extrabold text-balance sm:text-4xl">
              Mulai Langkah Nyata Menjadi Santri Ahli Teknologi di {SCHOOL.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
              Kuota penerimaan santri dibatasi setiap tahunnya demi menjaga efektivitas belajar dan rasio santri-mentor yang ideal. Isi formulir pendaftaran Anda sekarang atau hubungi Admin PMB untuk konsultasi.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <FormButton
                size="lg"
                variant="accent"
                className="animate-breathe hover-lift hover:scale-[1.02]"
              >
                Isi Formulir Pendaftaran (5 Menit)
              </FormButton>
              <WhatsAppButton
                size="lg"
                variant="outline"
                className="hover-lift"
                message="Assalamu'alaikum Admin PMB, saya ingin berkonsultasi mengenai pendaftaran santri baru SMK Madinatulquran."
              >
                Konsultasi via WhatsApp
              </WhatsAppButton>
            </div>

            <p className="mt-6 text-xs text-primary-foreground/75">
              Butuh respon telepon cepat? Hubungi Hotline:{" "}
              <a
                href={SCHOOL.hotlineHref}
                className="font-bold text-white underline underline-offset-4 hover:text-accent"
              >
                {SCHOOL.hotline}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
