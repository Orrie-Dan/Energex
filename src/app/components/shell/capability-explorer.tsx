"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { formatText as formatLabel } from "../../../i18n/config";
import { CheckIcon } from "./emph";
import { revealPanelOnSmallScreens } from "./reveal-panel";

export type ExplorerGroup = "pg" | "rs" | "gd" | "pd" | "es";

export type ExplorerCapability = {
  id: string;
  title: string;
  summary: string;
  includes: readonly string[];
  group: ExplorerGroup;
  imgSrc: string;
  familyHref: string;
};

type CapabilityExplorerProps = {
  capabilities: readonly ExplorerCapability[];
  /** Filter chips in display order; `all` shows every capability. */
  filters: readonly { key: "all" | ExplorerGroup; label: string }[];
  groupLabels: Record<ExplorerGroup, string>;
  discussHref: string;
  text: {
    filterLabel: string;
    capabilityLabel: string;
    discuss: string;
    familyPage: string;
  };
};

/** Solutions portfolio: filter by family, pick a capability, read its scope. */
export function CapabilityExplorer({ capabilities, filters, groupLabels, discussHref, text }: CapabilityExplorerProps) {
  const [filter, setFilter] = useState<"all" | ExplorerGroup>("all");
  const [picked, setPicked] = useState(capabilities[0]?.id ?? "");
  const panelRef = useRef<HTMLElement>(null);

  function pick(id: string) {
    setPicked(id);
    requestAnimationFrame(() => revealPanelOnSmallScreens(panelRef.current));
  }

  const visible = capabilities.filter((cap) => filter === "all" || cap.group === filter);
  const selected = capabilities.find((cap) => cap.id === picked) ?? capabilities[0];

  function chooseFilter(key: "all" | ExplorerGroup) {
    setFilter(key);
    const first = capabilities.find((cap) => key === "all" || cap.group === key);
    if (first) setPicked(first.id);
  }

  if (!selected) return null;

  return (
    <div className="flex flex-col gap-9">
      <div role="group" aria-label={text.filterLabel} className="flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.key}
            type="button"
            className="nx-filter"
            aria-pressed={filter === item.key}
            onClick={() => chooseFilter(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-start gap-6">
        <div className="grid min-w-0 flex-[999_1_560px] grid-cols-[repeat(auto-fill,minmax(min(230px,100%),1fr))] gap-3">
          {visible.map((cap) => {
            const on = cap.id === selected.id;
            return (
              <button
                key={cap.id}
                type="button"
                aria-pressed={on}
                onClick={() => pick(cap.id)}
                className={`nx-tile flex min-h-[136px] flex-col justify-between gap-4 rounded-[18px] p-[22px] ${
                  on
                    ? "border-[#13294a] bg-[#13294a] text-white shadow-[0_16px_36px_rgba(19,41,74,0.25)]"
                    : "bg-[#f6f3ef] text-[#121a2a]"
                }`}
              >
                <span
                  className={`flex justify-between gap-3 text-xs font-semibold uppercase tracking-[0.12em] ${
                    on ? "text-[#f07a1a]" : "text-[#535c6b]"
                  }`}
                >
                  <span>{cap.id}</span>
                  <span className="text-right">{groupLabels[cap.group]}</span>
                </span>
                <span className="text-lg">{cap.title}</span>
              </button>
            );
          })}
        </div>

        <aside
          ref={panelRef}
          aria-live="polite"
          className="flex min-w-0 flex-[1_1_360px] flex-col overflow-hidden rounded-[24px] border border-[#e6e0d8] bg-white shadow-[0_24px_60px_rgba(18,26,42,0.08)]"
        >
          <div className="nx-media h-[220px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selected.imgSrc} alt="" />
            <div
              aria-hidden="true"
              className="nx-shade"
              style={{ background: "linear-gradient(180deg, rgba(11,26,48,0) 40%, rgba(11,26,48,0.75) 100%)" }}
            />
            <span className="nx-label absolute bottom-5 left-6 right-6 text-white">
              {formatLabel(text.capabilityLabel, { id: selected.id, family: groupLabels[selected.group] })}
            </span>
          </div>
          <div className="flex flex-col gap-[18px] p-8 max-[640px]:p-6">
            <h3 className="nx-display m-0 nx-t-h3">{selected.title}</h3>
            <p className="nx-body text-sm">{selected.summary}</p>
            <ul className="nx-checks">
              {selected.includes.map((item) => (
                <li key={item} className="text-sm">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
              <Link href={discussHref} className="nx-btn nx-btn--navy nx-btn--sm">
                {text.discuss} <span aria-hidden="true">→</span>
              </Link>
              <Link href={selected.familyHref} className="nx-link text-sm">
                {text.familyPage}
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
