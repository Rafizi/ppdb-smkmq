import { Facebook, Globe, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import { SCHOOL } from "@/lib/ppdb";

export function SiteFooter() {
  return (
    <footer id="kontak" className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold">{SCHOOL.name}</h2>
          <p className="mt-2 text-sm text-navy-foreground/70">
            {SCHOOL.tagline} — PPDB Tahun Ajaran {SCHOOL.year}
          </p>

          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary-light" aria-hidden="true" />
              <span className="text-navy-foreground/85">{SCHOOL.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary-light" aria-hidden="true" />
              <span className="text-navy-foreground/85">
                Admin PMB (WA):{" "}
                <a
                  href={`https://wa.me/${SCHOOL.waAdmin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline-offset-4 hover:underline"
                >
                  {SCHOOL.waAdminLabel}
                </a>
                <br />
                Hotline:{" "}
                <a
                  href={SCHOOL.hotlineHref}
                  className="font-semibold underline-offset-4 hover:underline"
                >
                  {SCHOOL.hotline}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 size-4 shrink-0 text-primary-light" aria-hidden="true" />
              <a
                href={`https://${SCHOOL.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-foreground/85 underline-offset-4 hover:underline"
              >
                {SCHOOL.website}
              </a>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {[
              { href: SCHOOL.instagram, Icon: Instagram, label: "Instagram" },
              { href: SCHOOL.youtube, Icon: Youtube, label: "YouTube" },
              { href: SCHOOL.facebook, Icon: Facebook, label: "Facebook" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-xl bg-navy-foreground/10 transition-colors hover:bg-primary"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-navy-foreground/15 flex flex-wrap items-center gap-3">
            <a
              href={SCHOOL.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-xs font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Isi Formulir PPDB Online
            </a>
            <a
              href={`https://wa.me/${SCHOOL.waAdmin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy-foreground/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-whatsapp hover:text-whatsapp-foreground"
            >
              Chat Admin PMB
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-navy-foreground/15">
          <iframe
            src={SCHOOL.maps}
            title="Lokasi SMK Madinatulquran di Jonggol, Bogor"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full lg:h-full"
          />
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} {SCHOOL.name}. Seluruh informasi mengacu pada
          brosur resmi PPDB {SCHOOL.year}.
        </p>
      </div>
    </footer>
  );
}
