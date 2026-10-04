"use client";

import { useEffect, useRef, useState } from "react";
import { scale } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

function ScaleVoltLine({
  active,
  reduced,
  className = "",
}: {
  active: boolean;
  reduced: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative h-8 w-full self-center ${className}`}
      data-scale-volt={active || reduced ? "on" : "off"}
      aria-hidden="true"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 24"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="12"
          x2="100"
          y2="12"
          stroke="var(--surface-3)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          className="scale-volt-rail"
          x1="0"
          y1="12"
          x2="100"
          y2="12"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          pathLength={100}
        />
        <line
          className="scale-volt-current"
          x1="0"
          y1="12"
          x2="100"
          y2="12"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          pathLength={100}
        />
        <path
          className="scale-volt-zig"
          d="M0 12 L18 12 L22 6 L28 18 L34 8 L40 12 L100 12"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          pathLength={100}
        />
      </svg>
      <span className="scale-volt-spark" />
    </div>
  );
}

/** Quiet monumental scale statement: 1 MW → 1 GW+. No invented metrics. */
export default function ScaleSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReduce = () => setReduced(media.matches);
    syncReduce();
    media.addEventListener("change", syncReduce);

    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setOn(true);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      media.removeEventListener("change", syncReduce);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="scale"
      className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip bg-color-001"
      aria-labelledby="scale-heading"
    >
      <div className="w-full max-w-400 flex relative py-48 px-8 flex-col justify-center items-start content-start shrink-0 gap-12 max-lg:py-28 max-lg:px-6 max-lg:gap-8">
        <div className="w-full max-w-150 flex flex-col gap-3">
          <h2
            id="scale-heading"
            className={`block text-background ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
          >
            Power at{" "}
            <span className="inline text-color-002">Every Scale.</span>
          </h2>
          <p
            className={`block max-w-125 text-color-002 ${FONT} text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']`}
          >
            {scale.supporting}
          </p>
        </div>

        <div
          className={`w-full flex flex-col items-start gap-8 transition-opacity duration-700 md:flex-row md:items-end md:justify-between md:gap-10 ${
            on || reduced ? "opacity-100" : "opacity-0"
          }`}
        >
          <p
            className={`block text-background ${FONT} text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] max-lg:text-5xl max-lg:leading-[2.6875rem] max-lg:tracking-[-1.92px]`}
          >
            {scale.from}
          </p>

          <div className="hidden md:flex flex-1 items-center px-6 self-center gap-3" aria-hidden="true">
            <ScaleVoltLine active={on} reduced={reduced} />
            <span className="text-accent text-2xl leading-none shrink-0">→</span>
          </div>

          <div className="md:hidden flex items-center gap-3 w-full" aria-hidden="true">
            <ScaleVoltLine active={on} reduced={reduced} />
            <span className="text-accent text-xl leading-none shrink-0">↓</span>
          </div>

          <p
            className={`block text-color-002 ${FONT} text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] max-lg:text-5xl max-lg:leading-[2.6875rem] max-lg:tracking-[-1.92px]`}
          >
            {scale.to}
          </p>
        </div>
      </div>
    </section>
  );
}
