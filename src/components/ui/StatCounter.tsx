import { useEffect, useRef, useState } from "react";
import { countUp } from "@/hooks/use-scroll-reveal";

interface StatCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function StatCounter({ value, suffix = "", className }: StatCounterProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el || animated) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      el.textContent = `${value}${suffix}`;
      setAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countUp(el, value, 1200, suffix);
            setAnimated(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [value, suffix, animated]);

  return (
    <span ref={spanRef} className={className}>
      {value}
      {suffix}
    </span>
  );
}
