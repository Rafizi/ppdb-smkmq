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
  variant = "accent",
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  size?: "lg" | "md" | "sm";
  variant?: "accent" | "primary" | "white";
}) {
  const variantStyles = {
    accent:
      "bg-accent text-accent-foreground shadow-lift hover:bg-accent/90 border border-accent-foreground/10",
    primary:
      "bg-primary text-primary-foreground shadow-lift hover:bg-primary-dark",
    white:
      "bg-white text-navy shadow-lift hover:bg-cream border border-border",
  };

  const sizeStyles = {
    lg: "px-7 py-4 text-base font-bold",
    md: "px-5 py-2.5 text-sm font-semibold",
    sm: "px-4 py-2 text-xs font-semibold",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:translate-y-0",
        variantStyles[variant],
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
  variant = "solid",
}: {
  children?: React.ReactNode;
  message?: string;
  className?: string;
  size?: "lg" | "md" | "sm";
  variant?: "solid" | "outline" | "subtle";
}) {
  const variantStyles = {
    solid:
      "bg-whatsapp text-whatsapp-foreground shadow-card hover:-translate-y-0.5 hover:shadow-lift",
    outline:
      "border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
    subtle:
      "border border-border bg-card text-navy shadow-sm hover:border-whatsapp hover:text-whatsapp-foreground hover:bg-whatsapp/10",
  };

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
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp active:translate-y-0",
        variantStyles[variant],
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
