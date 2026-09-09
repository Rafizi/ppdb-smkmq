import React from "react";
import logoImg from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { SCHOOL } from "@/lib/ppdb";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  showText?: boolean;
  subtext?: string;
  textTone?: "default" | "light" | "navy";
  imgClassName?: string;
  alt?: string;
}

const sizeMap = {
  xs: "size-6",
  sm: "size-8",
  md: "size-10",
  lg: "size-12 sm:size-14",
  xl: "size-16 sm:size-20",
  "2xl": "size-20 sm:size-24",
};

export function Logo({
  size = "md",
  showText = false,
  subtext,
  textTone = "default",
  className,
  imgClassName,
  alt = `Logo ${SCHOOL.name}`,
  ...props
}: LogoProps) {
  const isLight = textTone === "light";

  return (
    <div className={cn("inline-flex items-center gap-3", className)} {...props}>
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full bg-white transition-transform duration-200 shadow-sm ring-1 ring-black/5",
          sizeMap[size],
        )}
      >
        <img
          src={logoImg}
          alt={alt}
          width={96}
          height={96}
          loading="eager"
          decoding="async"
          className={cn("h-full w-full object-contain select-none p-0.5", imgClassName)}
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={cn(
              "font-display font-bold tracking-tight",
              size === "sm" && "text-sm",
              size === "md" && "text-sm sm:text-base",
              size === "lg" && "text-base sm:text-lg",
              size === "xl" && "text-xl sm:text-2xl",
              isLight ? "text-white" : "text-navy",
            )}
          >
            {SCHOOL.name}
          </span>
          <span
            className={cn(
              "text-[11px] font-medium tracking-wide",
              isLight ? "text-primary-light" : "text-primary",
            )}
          >
            {subtext ?? `PPDB ${SCHOOL.year} Dibuka`}
          </span>
        </div>
      )}
    </div>
  );
}

export default Logo;
