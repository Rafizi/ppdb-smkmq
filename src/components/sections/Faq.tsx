import React from "react";
import { HelpCircle, MessageCircle } from "lucide-react";
import { FAQS } from "@/lib/ppdb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading, WhatsAppButton } from "./shared";

export function Faq() {
  return (
    <section id="faq" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Tanya Jawab (FAQ)"
            title="Pertanyaan yang Sering Diajukan"
            description="Jawaban seputar pendaftaran, tes seleksi, kurikulum kejuruan, dan skema biaya di SMK Madinatulquran."
          />
        </div>

        <div className="reveal-up mt-10 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-b border-border py-2 last:border-b-0"
              >
                <AccordionTrigger className="font-display text-base font-bold text-navy hover:text-primary hover:no-underline sm:text-lg">
                  <span className="flex items-start gap-3 text-left">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pl-9 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="reveal-up mt-8 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 text-center">
          <p className="text-sm font-semibold text-navy">
            Punya pertanyaan lain yang belum terjawab di sini?
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Admin PMB kami siap menjawab dan membantu seluruh pertanyaan Anda.
          </p>
          <div className="mt-4 flex justify-center">
            <WhatsAppButton
              size="md"
              variant="solid"
              className="hover-lift"
              message="Assalamu'alaikum Admin PMB, saya memiliki pertanyaan mengenai PPDB SMK Madinatulquran yang belum ada di FAQ."
            >
              Tanya Langsung ke Admin via WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
