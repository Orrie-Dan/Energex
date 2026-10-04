"use client";

import { useEffect } from "react";

function zoomStart(width: number) {
  if (width < 810) return 1.32;
  if (width < 1200) return 1.388;
  return 1.35;
}

/** Match Framer's baked rotateX matrix (perspective ≈ 1200). */
function serviceTiltMatrix(deg: number) {
  const r = (deg * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  // Flat Framer state keeps m34 ≈ -1/1200. Angle eases the other perspective term.
  const p = 1 / 1200;
  const m24 = -p * s;
  const m34 = -p * c;
  return `matrix3d(1,0,0,0, 0,${c},${s},${m24}, 0,${-s},${c},${m34}, 0,0,0,1)`;
}

/**
 * One scroll/resize loop for continuous motion:
 * - service cards: rotateX 20° → 0° as each card rises through one card-height (reversible)
 * - about media: scale eases from the breakpoint start value to 1.05 until the sticky frame locks
 */
export default function ScrollMotion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let queued = false;

    const frame = () => {
      queued = false;
      const reduced = reduce.matches;
      const vh = window.innerHeight;

      const cards = document.querySelectorAll<HTMLElement>("[data-service-card]");
      cards.forEach((card) => {
        const tilt = card.querySelector<HTMLElement>("[data-service-tilt]");
        if (!tilt) return;
        if (reduced) {
          tilt.style.transform = "none";
          return;
        }
        const top = card.getBoundingClientRect().top;
        const h = card.offsetHeight || 1;
        // 1 while the card sits at the bottom of the viewport; 0 once it has risen one card-height.
        const t = Math.min(1, Math.max(0, (top - (vh - h)) / h));
        const rx = 20 * t;
        const originX = Math.round(tilt.offsetWidth / 2);
        const originY = Math.round(tilt.offsetHeight / 2);
        tilt.style.transformOrigin = `${originX}px ${originY}px`;
        tilt.style.transform = serviceTiltMatrix(rx);
      });

      const sticky = document.querySelector<HTMLElement>("[data-scroll-zoom-sticky]");
      const zoom = document.querySelector<HTMLElement>("[data-scroll-zoom]");
      if (sticky && zoom) {
        const start = zoomStart(window.innerWidth);
        if (reduced) {
          zoom.style.transform = "scale(1.05)";
          zoom.style.transformOrigin = "center center";
        } else {
          const stuck = parseFloat(getComputedStyle(sticky).top) || 0;
          const top = sticky.getBoundingClientRect().top;
          let progress = 1;
          if (top > stuck + 0.5) {
            const layoutTop = top + window.scrollY;
            const range = Math.max(1, layoutTop - stuck);
            progress = Math.min(1, Math.max(0, window.scrollY / range));
          }
          const scale = start + (1.05 - start) * progress;
          zoom.style.transformOrigin = "center center";
          zoom.style.transform = `scale(${scale.toFixed(4)})`;
        }
      }
    };

    const request = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(frame);
    };

    request();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    reduce.addEventListener("change", request);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      reduce.removeEventListener("change", request);
    };
  }, []);

  return null;
}
