import React, { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, MessageSquareQuote, Quote, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  TESTIMONIAL_ROLE_LABEL,
  TESTIMONIALS,
  type Testimonial,
  type TestimonialRole,
} from "@/lib/ppdb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PendingDataPanel, SectionHeading } from "./shared";

const FILTERS = [
  { value: "semua", label: "Semua" },
  { value: "orangtua", label: "Orang Tua" },
  { value: "alumni", label: "Alumni" },
] as const;

type FilterValue = (typeof FILTERS)[number]["value"];

const ROLE_BADGE: Record<TestimonialRole, string> = {
  orangtua: "bg-primary/10 text-primary-dark",
  alumni: "bg-accent/25 text-accent-foreground",
};

export function Testimonials() {
  const [filter, setFilter] = useState<FilterValue>("semua");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const hasParents = TESTIMONIALS.some((item) => item.role === "orangtua");
  const hasAlumni = TESTIMONIALS.some((item) => item.role === "alumni");
  const showFilter = hasParents && hasAlumni;

  const visible =
    showFilter && filter !== "semua"
      ? TESTIMONIALS.filter((item) => item.role === filter)
      : TESTIMONIALS;

  // Update carousel state on slide change
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, visible]);

  // Auto-rotate every 5.5 seconds (pause on hover/interaction)
  useEffect(() => {
    if (!api || isPaused || visible.length <= 1) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5500);

    return () => clearInterval(interval);
  }, [api, isPaused, visible.length]);

  return (
    <section id="testimoni" className="bg-background py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal-up">
          <SectionHeading
            eyebrow="Testimoni"
            title="Kata orang tua santri & alumni SMK Madinatulquran"
            description="Pengalaman langsung keluarga santri dan lulusan yang kini melanjutkan kuliah maupun bekerja di industri teknologi."
          />
        </div>

        {TESTIMONIALS.length === 0 ? (
          <div className="mt-10">
            <PendingDataPanel
              icon={<MessageSquareQuote className="size-5" aria-hidden="true" />}
              title="Testimoni Orang Tua & Alumni"
              description="Wadah untuk kutipan orang tua santri boarding/fullday serta alumni RPL dan TKJ yang sudah bekerja atau kuliah. Tambahkan datanya pada TESTIMONIALS di src/lib/ppdb.ts."
            />
          </div>
        ) : (
          <>
            {showFilter ? (
              <div
                role="group"
                aria-label="Filter testimoni"
                className="reveal-up mx-auto mt-8 flex w-fit gap-1 rounded-full border border-border bg-cream p-1"
              >
                {FILTERS.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    aria-pressed={filter === item.value}
                    onClick={() => {
                      setFilter(item.value);
                      api?.scrollTo(0);
                    }}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                      filter === item.value
                        ? "bg-primary text-primary-foreground shadow-card"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ) : null}

            {/* Testimonials Carousel */}
            <div
              className="reveal-up relative mt-10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4 md:-ml-6">
                  {visible.map((item) => (
                    <CarouselItem
                      key={`${item.role}-${item.name}`}
                      className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="h-full py-1">
                        <TestimonialCard item={item} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Navigation Controls (Dots & Arrows) */}
              <div className="mt-8 flex items-center justify-between gap-4">
                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                  {visible.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Lihat testimoni slide ke-${index + 1}`}
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        "h-2.5 rounded-full transition-all duration-300",
                        current === index
                          ? "w-8 bg-primary shadow-sm"
                          : "w-2.5 bg-border hover:bg-primary/50",
                      )}
                    />
                  ))}
                </div>

                {/* Next / Prev Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Testimoni sebelumnya"
                    onClick={() => api?.scrollPrev()}
                    className="hover-lift flex size-10 items-center justify-center rounded-full border border-border bg-card text-navy shadow-card transition-colors hover:border-primary hover:text-primary"
                  >
                    <ChevronLeft className="size-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Testimoni berikutnya"
                    onClick={() => api?.scrollNext()}
                    className="hover-lift flex size-10 items-center justify-center rounded-full border border-border bg-card text-navy shadow-card transition-colors hover:border-primary hover:text-primary"
                  >
                    <ChevronRight className="size-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="hover-lift flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-card">
      <div>
        <div className="flex items-start justify-between gap-3">
          <Quote className="size-7 shrink-0 text-accent" aria-hidden="true" />
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase",
              ROLE_BADGE[item.role],
            )}
          >
            {TESTIMONIAL_ROLE_LABEL[item.role]}
          </span>
        </div>

        <blockquote className="mt-4 text-sm leading-relaxed text-navy">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
      </div>

      <figcaption className="mt-6 border-t border-border pt-5">
        <div className="flex items-center gap-3">
          {item.photo ? (
            <img
              src={item.photo}
              alt=""
              loading="lazy"
              className="size-11 shrink-0 rounded-full object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary-dark"
            >
              {getInitials(item.name)}
            </span>
          )}
          <div className="min-w-0">
            <p className="font-display text-sm font-bold text-navy">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.detail}</p>
          </div>
        </div>

        {item.now ? (
          <p className="mt-3 flex gap-2 text-xs leading-relaxed text-primary-dark">
            <Sparkles className="mt-0.5 size-3.5 shrink-0 text-terracotta" aria-hidden="true" />
            {item.now}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}

/** Ambil maksimal 2 inisial nama, gelar sapaan seperti "Bapak/Ibu" dilewati. */
function getInitials(name: string) {
  const words = name
    .replace(/^(bapak|ibu|bpk\.?|bu|pak|ust\.?|ustadz(ah)?)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean);

  return (
    words
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "?"
  );
}
