import { Link } from "@tanstack/react-router";
import { SCHOOL, waLink } from "@/lib/ppdb";
import { Logo } from "@/components/ui/Logo";
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
    <header className="relative z-30 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center transition-opacity hover:opacity-95">
          <Logo size="md" showText />
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
            className="hidden items-center gap-1.5 rounded-full border-2 border-[#0B3B2E] bg-transparent px-3.5 py-2 text-xs font-semibold text-[#0B3B2E] transition-all hover:bg-[#0B3B2E]/10 hover:-translate-y-0.5 sm:inline-flex"
          >
            <WhatsAppIcon className="size-3.5" aria-hidden="true" />
            <span>Tanya CS</span>
          </a>

          <FormButton size="md" variant="accent">
            <span className="hidden sm:inline">Daftar Online</span>
            <span className="sm:hidden">Daftar</span>
          </FormButton>
        </div>
      </div>
    </header>
  );
}
