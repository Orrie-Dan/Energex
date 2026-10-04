"use client";

import { useState } from "react";
import { industries, industriesSection } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

/** Industry explorer: hover preview + click select on desktop; accordion on mobile. */
export default function IndustryExplorerSection() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState(0);
  const current = industries[active];

  return (
    <section
      id="industries"
      className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip bg-surface"
      aria-labelledby="industries-heading"
    >
      <div className="w-full max-w-400 flex relative py-37.5 px-8 flex-col justify-start items-start content-start shrink-0 gap-12 max-lg:py-18 max-lg:px-6 max-lg:gap-8">
        <div className="w-full max-w-150 flex flex-col gap-3">
          <p className={`block text-color-001 ${FONT} text-sm font-semibold leading-[1.375rem]`}>
            {industriesSection.label}
          </p>
          <h2
            id="industries-heading"
            className={`block text-color-001 ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
          >
            {industriesSection.headingLead}{" "}
            <span className="inline text-muted-foreground">{industriesSection.headingAccent}</span>
          </h2>
        </div>

        {/* Desktop explorer */}
        <div className="hidden lg:grid w-full grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-12 items-stretch min-h-[32rem]">
          <div className="relative flex flex-col gap-6 overflow-hidden">
            <div className="relative w-full flex-1 min-h-[22rem] overflow-hidden bg-color-001">
              {industries.map((item, i) => (
                <img
                  key={item.title}
                  src={item.imgSrc}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                    i === active
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[1.04] pointer-events-none"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-color-001/85 via-color-001/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col gap-4">
                <span className={`block text-accent ${FONT} text-sm font-semibold`}>
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`block text-background ${FONT} text-[2rem] font-medium leading-[2.375rem] tracking-[-0.3px] text-balance`}
                >
                  {current.title}
                </h3>
                <div className="flex flex-col gap-3 pt-1">
                  <div>
                    <p className={`text-accent ${FONT} text-xs font-semibold uppercase tracking-wide`}>
                      Primary need
                    </p>
                    <p className={`mt-1 block max-w-125 text-color-002 ${FONT} text-base leading-[1.625rem]`}>
                      {current.need}
                    </p>
                  </div>
                  <div>
                    <p className={`text-accent ${FONT} text-xs font-semibold uppercase tracking-wide`}>
                      Energex response
                    </p>
                    <p className={`mt-1 block max-w-125 text-background ${FONT} text-base leading-[1.625rem]`}>
                      {current.response}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ol className="m-0 flex list-none flex-col gap-0 p-0 border-t border-color-001/10" role="listbox" aria-label="Industries">
            {industries.map((item, i) => {
              const selected = i === active;
              return (
                <li key={item.title} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    className={`group flex w-full items-baseline gap-4 border-b border-color-001/10 py-4 text-left transition-colors ${
                      selected ? "text-color-001" : "text-muted-foreground hover:text-color-001"
                    }`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                  >
                    <span
                      className={`shrink-0 ${FONT} text-sm font-semibold ${
                        selected ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`block ${FONT} text-lg font-medium tracking-[-0.2px] ${
                        selected ? "text-color-001" : ""
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile accordion */}
        <div className="lg:hidden w-full flex flex-col gap-0 border-t border-color-001/10">
          {industries.map((item, i) => {
            const open = openMobile === i;
            return (
              <div key={item.title} className="border-b border-color-001/10">
                <button
                  type="button"
                  className="flex w-full items-baseline gap-4 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenMobile(open ? -1 : i)}
                >
                  <span className={`shrink-0 text-accent ${FONT} text-sm font-semibold`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`flex-1 block text-color-001 ${FONT} text-lg font-medium tracking-[-0.2px]`}>
                    {item.title}
                  </span>
                  <span className={`text-muted-foreground ${FONT} text-sm`} aria-hidden="true">
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open ? (
                  <div className="pb-6 pl-10 flex flex-col gap-4">
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-color-001">
                      <img src={item.imgSrc} alt="" className="absolute inset-0 h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className={`text-accent ${FONT} text-xs font-semibold uppercase tracking-wide`}>
                        Primary need
                      </p>
                      <p className={`mt-1 block text-color-001 ${FONT} text-base leading-[1.625rem]`}>
                        {item.need}
                      </p>
                    </div>
                    <div>
                      <p className={`text-accent ${FONT} text-xs font-semibold uppercase tracking-wide`}>
                        Energex response
                      </p>
                      <p className={`mt-1 block text-color-001 ${FONT} text-base leading-[1.625rem]`}>
                        {item.response}
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
