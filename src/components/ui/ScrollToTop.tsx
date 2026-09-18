import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
      className={`fixed z-40 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 border border-white/20 hover:bg-primary-dark hover:shadow-xl active:scale-95 motion-safe:hover:-translate-y-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:size-12 max-[860px]:bottom-[calc(5rem+env(safe-area-inset-bottom,0px))] max-[860px]:right-4 min-[861px]:bottom-6 min-[861px]:right-6 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      }`}
    >
      <ArrowUp className="size-5 sm:size-6 stroke-[2.5]" aria-hidden="true" />
    </button>
  );
}
