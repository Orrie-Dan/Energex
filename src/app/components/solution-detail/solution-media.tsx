"use client";

import { useEffect, useRef } from "react";
import { SD_MEDIA_START_SCALE, sdReducedMotion } from "./solution-motion";

type SolutionMediaProps = {
  src: string;
  srcSet: string;
  alt: string;
  objectPosition?: string;
  /** Replays entrance when navigating between solution pages. */
  motionKey: string;
};

/**
 * Full-bleed hero media with sticky frame + subtle scale settle on scroll,
 * matching the reference sticky/clip media plane under the title hero.
 */
export function SolutionMedia({
  src,
  srcSet,
  alt,
  objectPosition = "50% 50%",
  motionKey,
}: SolutionMediaProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const zoom = zoomRef.current;
    if (!frame || !zoom) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let queued = false;
    let enterTimer = 0;

    const tick = () => {
      queued = false;
      if (reduce.matches) {
        zoom.style.transform = "scale(1)";
        return;
      }
      const rect = frame.getBoundingClientRect();
      const stage = frame.closest(".sd-body-stage");
      const stageRect = stage?.getBoundingClientRect();
      const start = SD_MEDIA_START_SCALE;
      let progress = 0;
      if (rect.top <= 1 && stageRect) {
        const traveled = Math.max(0, -stageRect.top);
        const range = Math.max(1, stageRect.height - window.innerHeight);
        progress = Math.min(1, traveled / range);
      }
      const scale = start + (1 - start) * progress;
      zoom.style.transform = `scale(${scale.toFixed(5)})`;
    };

    const request = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(tick);
    };

    zoom.classList.remove("sd-media-entered");
    if (reduce.matches || sdReducedMotion()) {
      zoom.classList.add("sd-media-entered");
      zoom.style.transform = "scale(1)";
    } else {
      enterTimer = window.setTimeout(() => {
        zoom.classList.add("sd-media-entered");
        request();
      }, 220);
    }

    request();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    reduce.addEventListener("change", request);
    return () => {
      window.clearTimeout(enterTimer);
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      reduce.removeEventListener("change", request);
    };
  }, [src, motionKey]);

  return (
    <div className="sd-media-section" ref={frameRef}>
      <div className="sd-media-sticky">
        <div className="sd-media-clip">
          <div ref={zoomRef} className="sd-media-zoom">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              srcSet={srcSet}
              sizes="100vw"
              alt={alt}
              className="sd-media-img"
              style={{ objectPosition }}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
