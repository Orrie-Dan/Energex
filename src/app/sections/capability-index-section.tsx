"use client";

import Link from "next/link";
import { useState } from "react";
import type { Capability, CapabilityFamilySlug } from "../../data/energex";
import { formatText } from "../../i18n/config";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

type CapabilityIndexProps = {
  capabilities: readonly Capability[];
  familyLabels: Record<CapabilityFamilySlug, string>;
  familiesNote: string;
  text: {
    eyebrow: string;
    heading: string;
    listLabel: string;
    crossCutting: string;
    belongsTo: string;
    viewAll: string;
    /** "{family} →" */
    familyLink: string;
  };
};

/** Editorial 15-capability index — desktop select + preview; mobile accordion. */
export default function CapabilityIndexSection({
  capabilities,
  familyLabels,
  familiesNote,
  text,
}: CapabilityIndexProps) {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState(0);
  const current = capabilities[active]!;

  return (
    <section
      id="capabilities"
      className="w-full flex relative flex-col justify-start items-center content-center shrink-0 bg-white"
      aria-labelledby="capabilities-heading"
    >
      <div className="w-full max-w-400 flex relative py-16 px-8 flex-col gap-10 max-lg:py-12 max-lg:px-6 max-lg:gap-8">
        <div className="max-w-175 flex flex-col gap-4">
          <p className={`text-color-001 ${FONT} text-sm font-semibold`}>{text.eyebrow}</p>
          <h2
            id="capabilities-heading"
            className={`text-color-001 ${FONT} text-[2.5rem] font-medium leading-10 tracking-[-1.4px] text-balance max-lg:text-3xl`}
          >
            {text.heading}
          </h2>
          <p className={`text-muted-foreground ${FONT} text-base leading-6.5`}>
            {familiesNote}
          </p>
        </div>

        {/* Desktop: index + detail plane */}
        <div className="hidden lg:grid w-full grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-12 items-stretch min-h-140">
          <ol className="m-0 flex list-none flex-col border-t border-color-001/10 p-0" role="listbox" aria-label={text.listLabel}>
            {capabilities.map((cap, i) => {
              const selected = i === active;
              return (
                <li key={cap.id} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    className={`group flex w-full items-baseline gap-4 border-b border-color-001/10 py-3.5 text-left transition-colors ${
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
                      {cap.id}
                    </span>
                    <span
                      className={`block ${FONT} text-base font-medium tracking-[-0.2px] ${
                        selected ? "text-color-001" : ""
                      }`}
                    >
                      {cap.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <article className="sticky top-28 flex flex-col gap-6 self-start border border-color-001/10 bg-surface p-8">
            <div className="relative h-56 w-full overflow-hidden bg-color-001">
              <img
                src={current.imgSrc}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
            </div>
            <span className={`text-accent ${FONT} text-sm font-semibold`}>{current.id}</span>
            <h3 className={`text-color-001 ${FONT} text-[1.75rem] font-medium leading-8 tracking-[-0.3px]`}>
              {current.title}
            </h3>
            <p className={`text-muted-foreground ${FONT} text-base leading-6.5`}>{current.summary}</p>
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {current.includes.slice(0, 6).map((item) => (
                <li key={item} className={`flex gap-3 text-sm leading-relaxed text-color-001 ${FONT}`}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-col gap-1">
              <p className={`m-0 text-muted-foreground ${FONT} text-xs font-semibold tracking-wide uppercase`}>
                {current.familySlug === "cross-cutting" ? text.crossCutting : text.belongsTo}
              </p>
              <Link
                href={current.familyHref}
                className={`inline-flex w-fit items-center gap-2 text-color-001 ${FONT} text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent`}
              >
                {current.familySlug === "cross-cutting"
                  ? text.viewAll
                  : formatText(text.familyLink, { family: familyLabels[current.familySlug] })}
              </Link>
            </div>
          </article>
        </div>

        {/* Mobile accordion */}
        <div className="lg:hidden w-full border-t border-color-001/10">
          {capabilities.map((cap, i) => {
            const open = openMobile === i;
            return (
              <div key={cap.id} className="border-b border-color-001/10">
                <button
                  type="button"
                  className="flex w-full items-baseline gap-4 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenMobile(open ? -1 : i)}
                >
                  <span className={`shrink-0 text-accent ${FONT} text-sm font-semibold`}>
                    {cap.id}
                  </span>
                  <span className={`flex-1 text-color-001 ${FONT} text-base font-medium`}>
                    {cap.title}
                  </span>
                  <span className="text-muted-foreground" aria-hidden>
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open ? (
                  <div className="pb-6 pl-10 flex flex-col gap-4">
                    <p className={`text-muted-foreground ${FONT} text-sm leading-6`}>{cap.summary}</p>
                    <ul className="m-0 flex list-none flex-col gap-2 p-0">
                      {cap.includes.slice(0, 5).map((item) => (
                        <li key={item} className={`text-sm text-color-001 ${FONT}`}>
                          · {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-1">
                      <p className={`m-0 text-muted-foreground ${FONT} text-xs font-semibold uppercase`}>
                        {cap.familySlug === "cross-cutting" ? text.crossCutting : text.belongsTo}
                      </p>
                      <Link
                        href={cap.familyHref}
                        className={`inline-flex text-sm font-semibold text-accent ${FONT}`}
                      >
                        {cap.familySlug === "cross-cutting"
                          ? text.viewAll
                          : formatText(text.familyLink, { family: familyLabels[cap.familySlug] })}
                      </Link>
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
