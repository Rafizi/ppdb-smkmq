import { ArrowRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { SCHOOL, waLink } from "@/lib/ppdb";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export { WhatsAppIcon };

export function FormButton({
  children = "Isi Formulir Pendaftaran (5 Menit)",
  href = SCHOOL.formUrl,
  className,
  size = "lg",
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  size?: "lg" | "md" | "sm";
  variant?: string;
}) {
  const sizeStyles = {
    lg: "px-7 py-4 text-base font-bold",
    md: "px-5 py-2.5 text-sm font-bold",
    sm: "px-4 py-2 text-xs font-bold",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F5A623] text-[#0B3B2E] transition-all duration-200 hover:bg-[#E0961B] hover:-translate-y-0.5 shadow-card border border-[#F5A623]/30 font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623] active:translate-y-0",
        sizeStyles[size],
        className,
      )}
    >
      <FileText className="size-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
      <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}

export function WhatsAppButton({
  children = "Tanya Admin via WhatsApp",
  message,
  className,
  size = "lg",
  variant = "light",
}: {
  children?: React.ReactNode;
  message?: string;
  className?: string;
  size?: "lg" | "md" | "sm";
  variant?: "light" | "dark" | "outline" | "solid" | "subtle";
}) {
  const isDark = variant === "dark" || variant === "outline";

  const variantStyles = isDark
    ? "border-2 border-white/80 bg-transparent text-white hover:bg-white/10 hover:border-white focus-visible:outline-white"
    : "border-2 border-[#0B3B2E] bg-transparent text-[#0B3B2E] hover:bg-[#0B3B2E]/10 focus-visible:outline-[#0B3B2E]";

  const sizeStyles = {
    lg: "px-7 py-4 text-base",
    md: "px-5 py-2.5 text-sm",
    sm: "px-3.5 py-1.5 text-xs",
  };

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2",
        variantStyles,
        sizeStyles[size],
        className,
      )}
    >
      <WhatsAppIcon className="size-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "default" | "inverse";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase",
            tone === "inverse"
              ? "bg-primary-foreground/15 text-primary-foreground"
              : "bg-primary/10 text-primary",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-3xl font-bold text-balance sm:text-4xl",
          tone === "inverse" ? "text-primary-foreground" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "inverse"
              ? "text-primary-foreground/85"
              : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Placeholder untuk bagian yang wadahnya sudah siap tapi datanya belum
 * dikirim sekolah. Begitu data diisi di `@/lib/ppdb`, panel ini hilang
 * dan diganti konten aslinya.
 */
export function PendingDataPanel({
  icon,
  title,
  description,
  className,
  hint = "Menunggu data dari sekolah",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  hint?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-dashed border-primary/35 bg-cream p-6",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </span>
        <h3 className="font-display text-base font-bold text-navy">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <p className="mt-3 text-xs font-semibold tracking-wide text-terracotta uppercase">{hint}</p>
    </div>
  );
}
