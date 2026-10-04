"use client";

import { useEffect, useRef, type ReactNode } from "react";

type SolutionRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms once visible. */
  delayMs?: number;
};

/**
 * Editorial scroll reveal: soft opacity + slight translateY.
 * Reveals on intersection OR when the block has already reached / passed
 * the viewport (covers fast scroll and programmatic jumps).
 */
export function SolutionReveal({ children, className, delayMs = 0 }: SolutionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    let io: IntersectionObserver | null = null;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const shouldReveal = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.96 || rect.bottom < window.innerHeight * 0.25;
    };

    const onScroll = () => {
      if (!done && shouldReveal()) reveal();
    };

    const cleanup = () => {
      io?.disconnect();
      io = null;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const reveal = () => {
      if (done) return;
      done = true;
      cleanup();
      window.setTimeout(() => {
        el.classList.add("sd-reveal-visible");
      }, reduce ? 0 : delayMs);
    };

    if (reduce || shouldReveal()) {
      reveal();
      return cleanup;
    }

    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || shouldReveal()) reveal();
        }
      },
      { threshold: 0.02, rootMargin: "0px 0px -2% 0px" },
    );
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return cleanup;
  }, [delayMs]);

  return (
    <div ref={ref} className={`sd-reveal${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
