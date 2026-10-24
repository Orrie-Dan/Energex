"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { formatText } from "../../../i18n/config";
import { CheckIcon, pad2 } from "./emph";
import { revealPanelOnSmallScreens } from "./reveal-panel";

export type EquipmentTab = {
  slug: string;
  title: string;
  description: string;
  scope: readonly { label: string; detail: string }[];
  featured: boolean;
  imgSrc: string;
  imgAlt: string;
  quoteHref: string;
  detailHref: string;
};

type EquipmentTabsProps = {
  categories: readonly EquipmentTab[];
  text: {
    label: string;
    featured: string;
    categoryOf: string;
    requestQuote: string;
    viewCategory: string;
  };
};

/** Equipment categories as image tabs with a detail panel below. */
export function EquipmentTabs({ categories, text }: EquipmentTabsProps) {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const selected = categories[index];
  if (!selected) return null;

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const keys: Record<string, number> = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1,
    };
    let next: number | null = null;
    if (event.key in keys) next = (index + keys[event.key]! + categories.length) % categories.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = categories.length - 1;
    if (next === null) return;
    event.preventDefault();
    setIndex(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="flex flex-col gap-12">
      <div
        role="tablist"
        aria-label={text.label}
        className="grid grid-cols-[repeat(auto-fill,minmax(min(170px,100%),1fr))] gap-3 max-[640px]:grid-cols-2"
      >
        {categories.map((category, i) => {
          const on = i === index;
          return (
            <button
              key={category.slug}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`eq-tab-${category.slug}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="eq-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => {
                setIndex(i);
                requestAnimationFrame(() => revealPanelOnSmallScreens(panelRef.current));
              }}
              onKeyDown={onKeyDown}
              className="nx-tile nx-media nx-zoom relative h-[200px] overflow-hidden rounded-[20px] p-0 text-white max-[640px]:h-[150px]"
              style={{ border: `3px solid ${on ? "#f07a1a" : "transparent"}` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={category.imgSrc} alt="" style={{ opacity: on ? 1 : 0.8 }} />
              <span
                aria-hidden="true"
                className="nx-shade"
                style={{
                  background: on
                    ? "linear-gradient(180deg, rgba(11,26,48,0.1) 20%, rgba(11,26,48,0.9) 100%)"
                    : "linear-gradient(180deg, rgba(11,26,48,0.2) 20%, rgba(11,26,48,0.92) 100%)",
                }}
              />
              <span className="absolute bottom-3.5 left-4 right-4 flex flex-col gap-1">
                <span
                  className={`text-sm ${on ? "text-[#f07a1a]" : "text-[#d9e0eb]"}`}
                >
                  {pad2(i + 1)}
                </span>
                <span className="text-lg">{category.title}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        ref={panelRef}
        id="eq-panel"
        role="tabpanel"
        aria-labelledby={`eq-tab-${selected.slug}`}
        className="flex flex-wrap overflow-hidden rounded-[32px] border border-[#e6e0d8] bg-white shadow-[0_30px_80px_rgba(18,26,42,0.10)] max-[640px]:rounded-[24px]"
      >
        <div className="nx-media relative min-h-[480px] min-w-0 flex-[1_1_520px] max-[640px]:min-h-[280px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={selected.imgSrc} alt={selected.imgAlt} />
          {selected.featured ? (
            <span className="nx-label absolute left-6 top-6 rounded-full bg-[#f07a1a] px-3.5 py-2 text-[#121a2a]">
              {text.featured}
            </span>
          ) : null}
        </div>
        <div className="flex min-w-0 flex-[1_1_480px] flex-col justify-center gap-[22px] p-12 max-[640px]:p-7">
          <span className="nx-label text-[#b8470f]">
            {formatText(text.categoryOf, { current: pad2(index + 1), total: pad2(categories.length) })}
          </span>
          <h3 className="nx-display m-0 nx-t-h3">{selected.title}</h3>
          <p className="nx-body">{selected.description}</p>
          <ul className="nx-checks nx-checks--2">
            {selected.scope.map((item) => (
              <li key={item.label}>
                <CheckIcon />
                <span>
                  <span className="font-semibold">{item.label}</span>
                  <span className="block text-sm text-[#535c6b]">{item.detail}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href={selected.quoteHref} className="nx-btn nx-btn--navy">
              {text.requestQuote} <span aria-hidden="true">→</span>
            </Link>
            <Link href={selected.detailHref} className="nx-link text-sm">
              {text.viewCategory}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
