import { useEffect } from "react";

/**
 * Global lightweight IntersectionObserver for scroll-reveal animations.
 * Targets all elements with `.reveal-up` class.
 */
export function useScrollReveal(threshold = 0.15) {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealEls = document.querySelectorAll(".reveal-up");

    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add("in-view"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    revealEls.forEach((el) => {
      // If already in-view or above fold, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("in-view");
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [threshold]);
}

/**
 * Lightweight vanilla frame-based count-up animation
 */
export function countUp(
  el: HTMLElement,
  target: number,
  duration = 1200,
  suffix = "",
) {
  const start = performance.now();

  function frame(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out expo
    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.floor(ease * target);

    el.textContent = `${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      el.textContent = `${target}${suffix}`;
    }
  }

  requestAnimationFrame(frame);
}
