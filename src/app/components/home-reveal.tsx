"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Reversible viewport reveal. Reduced motion and no-JS stay visible via CSS. */
export function useRevealed(ref: RefObject<HTMLElement | null>) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setShown(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    const onChange = () => {
      if (media.matches) setShown(true);
    };
    media.addEventListener("change", onChange);
    return () => {
      io.disconnect();
      media.removeEventListener("change", onChange);
    };
  }, [ref]);

  return shown;
}

type Tag = "div" | "ul" | "ol";

/**
 * Heading / copy rise. With `stagger`, direct children reveal in sequence.
 * Leaving the viewport reverses the transition.
 */
export function HomeReveal({
  as = "div",
  stagger = false,
  delayMs = 0,
  className,
  children,
}: {
  as?: Tag;
  stagger?: boolean;
  delayMs?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shown = useRevealed(ref);
  const Comp = as;

  return (
    <Comp
      ref={ref as never}
      data-revealed={shown ? "true" : "false"}
      className={`${stagger ? "home-reveal-stagger" : "home-reveal"} ${className ?? ""}`}
      style={
        stagger
          ? undefined
          : { transitionDelay: shown ? `${delayMs}ms` : "0ms", transitionTimingFunction: EASE }
      }
    >
      {children}
    </Comp>
  );
}
