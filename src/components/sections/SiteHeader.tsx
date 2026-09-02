import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { SCHOOL, waLink } from "@/lib/ppdb";
import { FormButton, WhatsAppIcon } from "./shared";

const NAV = [
  { href: "#jurusan", label: "Jurusan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#prestasi", label: "Prestasi" },
  { href: "#alur", label: "Alur Daftar" },
  { href: "#biaya", label: "Biaya" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold text-navy">
              {SCHOOL.name}
            </span>
            <span className="block text-[11px] font-medium text-primary">
              PPDB {SCHOOL.year} Dibuka
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex xl:gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href={waLink("Assalamu'alaikum Admin PMB, saya ingin bertanya tentang PPDB SMK Madinatulquran.")}
            target="_blank"
            rel="noopener noreferrer"
            title="Tanya Admin via WhatsApp"
            className="hidden items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold text-navy transition-colors hover:border-whatsapp hover:bg-whatsapp/10 hover:text-whatsapp-foreground sm:inline-flex"
          >
            <WhatsAppIcon className="size-3.5 text-whatsapp" aria-hidden="true" />
            <span>Tanya CS</span>
          </a>

          <FormButton size="md" variant="primary">
            <span className="hidden sm:inline">Daftar Online</span>
            <span className="sm:hidden">Daftar</span>
          </FormButton>
        </div>
      </div>
    </header>
  );
}
