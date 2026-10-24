"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { formatText } from "../../../i18n/config";
import { CheckIcon, pad2 } from "./emph";
import { revealPanelOnSmallScreens } from "./reveal-panel";

export type IndustrySegment = {
  anchorId: string;
  title: string;
  need: string;
  response: string;
  services: readonly string[];
  imgSrc: string;
  imgAlt: string;
};

type IndustrySelectorProps = {
  segments: readonly IndustrySegment[];
  discussHref: string;
  exploreHref: string;
  text: {
    label: string;
    segmentOf: string;
    need: string;
    response: string;
    discuss: string;
    explore: string;
  };
};

/**
 * Segment list with a detail panel. A URL fragment matching a segment anchor
 * (e.g. `#fleet-operators`, used by homepage tiles) preselects that segment.
 */
export function IndustrySelector({ segments, discussHref, exploreHref, text }: IndustrySelectorProps) {
  const [index, setIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const match = segments.findIndex((segment) => segment.anchorId === id);
      if (match >= 0) {
        setIndex(match);
        rootRef.current?.scrollIntoView({ block: "start" });
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [segments]);

  const selected = segments[index];
  if (!selected) return null;

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    let next: number | null = null;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % segments.length;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + segments.length) % segments.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = segments.length - 1;
    if (next === null) return;
    event.preventDefault();
    setIndex(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div ref={rootRef} className="flex scroll-mt-6 flex-wrap items-stretch gap-6">
      {/* Fragment targets so `/industries#<segment>` links still resolve. */}
      {segments.map((segment) => (
        <span key={segment.anchorId} id={segment.anchorId} className="sr-only" aria-hidden="true" />
      ))}
      <div role="tablist" aria-label={text.label} aria-orientation="vertical" className="flex min-w-0 flex-[1_1_340px] flex-col gap-1.5">
        {segments.map((segment, i) => {
          const on = i === index;
          return (
            <button
              key={segment.anchorId}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`ind-tab-${segment.anchorId}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="ind-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => {
                setIndex(i);
                requestAnimationFrame(() => revealPanelOnSmallScreens(panelRef.current));
              }}
              onKeyDown={onKeyDown}
              className={`nx-row-tab nx-focus flex min-h-[72px] items-center gap-4 rounded-2xl py-3 pl-3 pr-5 text-left ${
                on ? "bg-[#13294a] text-white shadow-[0_16px_36px_rgba(19,41,74,0.22)]" : "bg-[#f6f3ef] text-[#121a2a]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={segment.imgSrc}
                alt=""
                className="h-12 w-14 flex-none rounded-[10px] object-cover"
                style={{ opacity: on ? 1 : 0.85 }}
              />
              <span className="flex-1 text-lg">{segment.title}</span>
              <span className={`text-sm ${on ? "text-[#f07a1a]" : "text-[#535c6b]"}`}>
                {pad2(i + 1)}
              </span>
            </button>
          );
        })}
      </div>

      <div
        ref={panelRef}
        id="ind-panel"
        role="tabpanel"
        aria-labelledby={`ind-tab-${selected.anchorId}`}
        className="flex min-w-0 flex-[999_1_600px] flex-col overflow-hidden rounded-[28px] border border-[#e6e0d8] bg-white shadow-[0_30px_80px_rgba(18,26,42,0.10)]"
      >
        <div className="nx-media h-[380px] max-[640px]:h-[260px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={selected.imgSrc} alt={selected.imgAlt} />
          <div
            aria-hidden="true"
            className="nx-shade"
            style={{ background: "linear-gradient(180deg, rgba(11,26,48,0) 35%, rgba(11,26,48,0.9) 100%)" }}
          />
          <div className="absolute bottom-8 left-10 right-10 flex flex-col gap-2.5 text-white max-[640px]:bottom-6 max-[640px]:left-6 max-[640px]:right-6">
            <span className="nx-label text-[#f07a1a]">
              {formatText(text.segmentOf, { current: pad2(index + 1), total: pad2(segments.length) })}
            </span>
            <h3 className="nx-display m-0 nx-t-h3">{selected.title}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-7 px-10 pb-10 pt-9 max-[640px]:px-6 max-[640px]:pb-8 max-[640px]:pt-7">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-3">
            <div className="flex flex-col gap-2.5 rounded-[18px] bg-[#f6f3ef] p-6">
              <span className="nx-label text-[#535c6b]">{text.need}</span>
              <span className="text-base">{selected.need}</span>
            </div>
            <div className="flex flex-col gap-2.5 rounded-[18px] bg-[#13294a] p-6 text-white">
              <span className="nx-label text-[#f07a1a]">{text.response}</span>
              <span className="text-base">{selected.response}</span>
            </div>
          </div>
          <ul className="nx-checks nx-checks--2">
            {selected.services.map((service) => (
              <li key={service}>
                <CheckIcon />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-6">
            <Link href={discussHref} className="nx-btn nx-btn--navy nx-btn--sm">
              {text.discuss} <span aria-hidden="true">→</span>
            </Link>
            <Link href={exploreHref} className="nx-link text-sm">
              {text.explore}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
