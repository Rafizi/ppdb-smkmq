import { Quote, Star } from "lucide-react";

export function Vision() {
  return (
    <section className="bg-cream pb-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary-dark px-6 py-12 text-primary-foreground sm:px-12">
          <div
            className="pattern-geo pointer-events-none absolute inset-0 text-primary-foreground/20"
            aria-hidden="true"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Quote className="size-8 text-accent" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl leading-snug font-bold text-balance sm:text-3xl">
                "Menjadi SMK unggul yang melahirkan generasi Qurani,
                technopreneur, dan pemimpin masa depan yang inovatif, mandiri,
                serta berdaya saing global."
              </h2>
              <p className="mt-4 text-sm tracking-wide text-primary-foreground/70 uppercase">
                Visi SMK Madinatulquran
              </p>
            </div>

            <div className="rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur">
              <h3 className="font-display text-base font-bold">
                Target Karakter Lulusan
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "Hafal Al-Qur'an 3 Juz & Hadits Arba'in Nawawi",
                  "Beraqidah Ahlussunnah wal Jama'ah",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Star
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
