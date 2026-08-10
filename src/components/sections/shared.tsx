import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { waLink } from "@/lib/ppdb";

export function WhatsAppButton({
  children = "Daftar PPDB Sekarang via WhatsApp",
  message,
  className,
  size = "lg",
}: {
  children?: React.ReactNode;
  message?: string;
  className?: string;
  size?: "lg" | "md";
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp font-semibold text-whatsapp-foreground shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp",
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-2.5 text-sm",
        className,
      )}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {children}
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
