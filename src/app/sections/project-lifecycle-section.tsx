"use client";

import { useEffect, useRef, useState } from "react";
import { deliveryFramework, lifecycleSection } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

/** Source: SOW §17 — scroll-linked 10-stage Project Delivery Framework. */
export default function ProjectLifecycleSection() {
  const stageRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const stages = deliveryFramework;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReduce = () => setReduced(media.matches);
    syncReduce();
    media.addEventListener("change", syncReduce);

    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight * 0.42;
      let best = 0;
      let bestDist = Infinity;
      stageRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };
    const request = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    request();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      media.removeEventListener("change", syncReduce);
    };
  }, []);

  const progress = stages.length <= 1 ? 1 : active / (stages.length - 1);
  const current = stages[active]!;

  return (
    <section
      id="delivery"
      className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip bg-color-001"
      aria-labelledby="lifecycle-heading"
    >
      <div className="w-full max-w-400 flex relative py-37.5 px-8 flex-col justify-start items-start content-start shrink-0 gap-16 max-lg:py-18 max-lg:px-6 max-lg:gap-10">
        <div className="w-full max-w-150 flex relative flex-col justify-start items-start content-start shrink-0 gap-4">
          <p className={`block text-background ${FONT} text-sm font-semibold leading-[1.375rem]`}>
            {lifecycleSection.label}
          </p>
          <h2
            id="lifecycle-heading"
            className={`block text-background ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
          >
            {lifecycleSection.headingLead}{" "}
            <span className="inline text-color-002">{lifecycleSection.headingAccent}</span>
          </h2>
          <p
            className={`block max-w-125 text-color-002 ${FONT} text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']`}
          >
            {lifecycleSection.supporting}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:items-start">
          {/* Sticky stage detail — desktop */}
          <div className="hidden lg:sticky lg:top-28 lg:flex lg:flex-col lg:gap-8 lg:self-start">
            <div className="flex flex-col gap-3">
              <span className={`block text-accent ${FONT} text-sm font-semibold tracking-wider`}>
                {current.id}
              </span>
              <h3
                className={`block text-background ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance`}
              >
                {current.title}
              </h3>
              <p className={`block max-w-100 text-color-002 ${FONT} text-base leading-[1.625rem]`}>
                {current.description}
              </p>
            </div>
            <div className="relative h-0.5 w-full max-w-80 bg-surface-3 overflow-hidden" aria-hidden="true">
              <div
                className="absolute inset-y-0 left-0 bg-accent"
                style={{
                  width: `${progress * 100}%`,
                  transition: reduced ? "none" : "width 0.35s ease",
                }}
              />
            </div>
          </div>

          {/* Single stage list for all breakpoints (avoids hidden-ref overwrite) */}
            <ol className="relative m-0 flex list-none flex-col gap-0 p-0" aria-label="Project delivery framework stages">
            <div className="absolute left-[0.7rem] top-3 bottom-3 w-px bg-surface-3" aria-hidden="true">
              <div
                className="w-full bg-accent origin-top"
                style={{
                  height: `${progress * 100}%`,
                  transition: reduced ? "none" : "height 0.35s ease",
                }}
              />
            </div>
            {stages.map((stage, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <li
                  key={stage.id}
                  ref={(el) => {
                    stageRefs.current[i] = el;
                  }}
                  className="relative flex min-h-[5.5rem] flex-col gap-2 py-4 pl-10 lg:min-h-[6.25rem] lg:py-4"
                >
                  <span
                    className={`absolute left-0 top-5 flex h-6 w-6 items-center justify-center rounded-full border text-[0.65rem] font-semibold ${FONT} ${
                      isActive
                        ? "border-accent bg-accent text-background"
                        : isPast
                          ? "border-accent/70 bg-color-001 text-accent"
                          : "border-surface-3 bg-color-001 text-color-002"
                    }`}
                    aria-hidden="true"
                  >
                    {stage.id}
                  </span>
                  <button
                    type="button"
                    className={`text-left transition-opacity duration-300 ${
                      isActive ? "opacity-100" : isPast ? "opacity-70" : "opacity-45"
                    }`}
                    onClick={() => {
                      stageRefs.current[i]?.scrollIntoView({
                        behavior: reduced ? "auto" : "smooth",
                        block: "center",
                      });
                    }}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className={`block ${FONT} text-xl font-medium tracking-[-0.2px] lg:text-xl ${
                        isActive ? "text-background" : "text-color-002"
                      }`}
                    >
                      {stage.title}
                    </span>
                    <span className={`mt-1 block ${FONT} text-sm leading-5 text-color-002 lg:text-sm`}>
                      {stage.description}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
