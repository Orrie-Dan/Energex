"use client";

import { useEffect, useRef, useState } from "react";
import { digitalEnergy } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

/** Dark industrial-intelligence section: physical layers + progressive digital capabilities. */
export default function DigitalEnergySection() {
  const rootRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeCap, setActiveCap] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReduce = () => setReduced(media.matches);
    syncReduce();
    media.addEventListener("change", syncReduce);

    let raf = 0;
    const update = () => {
      raf = 0;
      const el = rootRef.current;
      if (!el) return;
      if (media.matches) {
        setProgress(1);
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const t = (vh * 0.8 - rect.top) / (vh * 0.55);
      setProgress(Math.min(1, Math.max(0, t)));
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

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setActiveCap((v) => (v + 1) % digitalEnergy.capabilities.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, [reduced]);

  const lineOn = progress >= 0.25 || reduced;

  return (
    <section
      ref={rootRef}
      id="digital-energy"
      className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip bg-color-001"
      aria-labelledby="digital-heading"
    >
      <div className="w-full max-w-400 flex relative py-37.5 px-8 flex-col justify-start items-start content-start shrink-0 gap-14 max-lg:py-18 max-lg:px-6 max-lg:gap-10">
        <div className="w-full max-w-150 flex flex-col gap-4">
          <p className={`block text-background ${FONT} text-sm font-semibold leading-[1.375rem]`}>
            {digitalEnergy.label}
          </p>
          <h2
            id="digital-heading"
            className={`block text-background ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
          >
            {digitalEnergy.headingLead}{" "}
            <span className="inline text-color-002">{digitalEnergy.headingAccent}</span>
          </h2>
          <p
            className={`block max-w-125 text-color-002 ${FONT} text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']`}
          >
            {digitalEnergy.supporting}
          </p>
        </div>

        {/* Physical layers connected by a system line */}
        <div className="w-full flex flex-col gap-8">
          <div className="relative w-full">
            <div
              className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-surface-3 max-md:hidden"
              aria-hidden="true"
            >
              <div
                className="h-full bg-accent origin-left"
                style={{
                  width: lineOn ? "100%" : "0%",
                  transition: reduced ? "none" : "width 0.9s ease",
                }}
              />
            </div>
            <ul className="relative m-0 grid list-none grid-cols-2 gap-3 p-0 md:grid-cols-4 md:gap-4">
              {digitalEnergy.layers.map((layer, i) => (
                <li
                  key={layer}
                  className={`flex flex-col items-start gap-2 border border-surface-3 bg-color-001/60 px-4 py-5 transition-opacity duration-500 ${
                    progress >= 0.15 + i * 0.08 || reduced ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <span className={`block text-accent ${FONT} text-xs font-semibold tracking-wider`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`block text-background ${FONT} text-lg font-medium tracking-[-0.2px]`}>
                    {layer}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capability index — sequential active words, not giant cards */}
          <div className="w-full border-t border-surface-3 pt-8">
            <p className={`mb-4 block text-color-002 ${FONT} text-xs font-semibold uppercase tracking-wider`}>
              Progressive capabilities
            </p>
            <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-3 p-0" aria-live="polite">
              {digitalEnergy.capabilities.map((cap, i) => {
                const active = i === activeCap || reduced;
                return (
                  <li key={cap}>
                    <button
                      type="button"
                      className={` ${FONT} text-sm font-semibold tracking-wide transition-colors duration-300 ${
                        active ? "text-accent" : "text-color-002/50 hover:text-color-002"
                      }`}
                      onClick={() => setActiveCap(i)}
                      aria-pressed={i === activeCap}
                    >
                      {cap}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
