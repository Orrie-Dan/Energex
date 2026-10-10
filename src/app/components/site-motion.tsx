"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Site-wide motion for server-rendered pages (styles in `site-motion.css`):
 * - `[data-reveal]` / `[data-reveal="stagger"]` rise into view once (one-shot).
 * - `html[data-scrolled]` lets the sticky header gain elevation after the top.
 *
 * Content stays visible until this runs: hidden states only apply under
 * `html[data-motion]`, and anything already on screen is marked revealed first,
 * so no-JS, reduced motion and the first paint never hide content.
 */
export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pending = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"));
    const reveal = (el: Element) => el.setAttribute("data-revealed", "");

    const vh = window.innerHeight;
    const offscreen = pending.filter((el) => {
      if (reduce.matches || el.getBoundingClientRect().top < vh * 0.92) {
        reveal(el);
        return false;
      }
      return true;
    });
    root.setAttribute("data-motion", "");

    if (!offscreen.length || !("IntersectionObserver" in window)) {
      offscreen.forEach(reveal);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    offscreen.forEach((el) => io.observe(el));
    const onReduce = () => {
      if (reduce.matches) offscreen.forEach(reveal);
    };
    reduce.addEventListener("change", onReduce);
    return () => {
      io.disconnect();
      reduce.removeEventListener("change", onReduce);
    };
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const update = () => {
      raf = 0;
      root.toggleAttribute("data-scrolled", window.scrollY > 8);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
