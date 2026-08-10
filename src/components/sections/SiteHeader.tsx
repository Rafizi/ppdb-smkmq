import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { SCHOOL } from "@/lib/ppdb";
import { WhatsAppButton } from "./shared";

const NAV = [
  { href: "#jurusan", label: "Jurusan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#alur", label: "Alur Daftar" },
  { href: "#biaya", label: "Biaya" },
  { href: "#kontak", label: "Kontak" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
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

        <nav className="ml-auto hidden items-center gap-6 lg:flex">
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

        <WhatsAppButton size="md" className="ml-auto lg:ml-0">
          <span className="hidden sm:inline">Daftar via WhatsApp</span>
          <span className="sm:hidden">Daftar</span>
        </WhatsAppButton>
      </div>
    </header>
  );
}
