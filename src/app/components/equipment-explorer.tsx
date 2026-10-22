"use client";

import type { KeyboardEvent } from "react";
import { useId, useRef, useState } from "react";

export type EquipmentExplorerItem = {
  slug: string;
  title: string;
  description: string;
  scope: readonly { label: string; detail: string }[];
  featured: boolean;
  href: string;
  quoteHref: string;
};

type Props = {
  items: readonly EquipmentExplorerItem[];
  label: string;
  featured: string;
  requestQuote: string;
};

const pad = (value: number) => String(value).padStart(2, "0");

function FeaturedBadge({ children }: { children: string }) {
  return (
    <span className="shrink-0 rounded-sm bg-[#f06f12] px-1.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-wider text-white">
      {children}
    </span>
  );
}

/** Category body shared by the desktop tab panel and the mobile accordion. */
function CategoryDetail({
  item,
  index,
  total,
  withHeader,
  featured,
  requestQuote,
}: {
  item: EquipmentExplorerItem;
  index: number;
  total: number;
  withHeader: boolean;
  featured: string;
  requestQuote: string;
}) {
  return (
    <div data-enter className="flex flex-1 flex-col">
      {withHeader ? (
        <>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#011836]/45">
            <span>
              <span className="text-[#f06f12]">{pad(index + 1)}</span> / {pad(total)}
            </span>
            {item.featured ? <FeaturedBadge>{featured}</FeaturedBadge> : null}
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#011836] md:text-4xl">{item.title}</h3>
        </>
      ) : null}
      <p
        className={`max-w-2xl text-base leading-relaxed text-[#011836]/75 md:text-lg ${withHeader ? "mt-4" : ""}`}
      >
        {item.description}
      </p>
      <ul className="mt-8 list-none border-t border-[#011836]/10 p-0">
        {item.scope.map((entry, scopeIndex) => (
          <li
            key={entry.label}
            className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 gap-y-1 border-b border-[#011836]/10 py-4 text-[#011836] sm:grid-cols-[2.5rem_minmax(0,16rem)_minmax(0,1fr)] sm:items-baseline md:py-5"
          >
            <span className="font-mono text-xs text-[#f06f12]">{pad(scopeIndex + 1)}</span>
            <span className="text-sm font-semibold md:text-base">{entry.label}</span>
            <span className="col-start-2 text-xs leading-relaxed text-[#011836]/60 sm:col-start-3 md:text-sm">
              {entry.detail}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-5 pt-8 lg:pt-10">
        <a
          href={item.quoteHref}
          className="text-sm font-semibold text-[#011836]/70 transition-colors hover:text-[#011836]"
        >
          {requestQuote}
        </a>
      </div>
    </div>
  );
}

/** Category tabs with a detail panel on large screens; an accordion below `lg`. */
export function EquipmentExplorer({ items, label, featured, requestQuote }: Props) {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = items[active];
  const detailProps = { total: items.length, featured, requestQuote };

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: items.length - 1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (keys[event.key] + items.length) % items.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <>
      <div className="hidden overflow-hidden rounded-lg border border-[#011836]/10 bg-white lg:grid lg:grid-cols-[minmax(18rem,0.36fr)_minmax(0,1fr)]">
        <div
          role="tablist"
          aria-label={label}
          aria-orientation="vertical"
          className="flex flex-col border-r border-[#011836]/10"
        >
          {items.map((entry, index) => {
            const selected = index === active;
            return (
              <button
                key={entry.slug}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${index}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={`relative flex items-center gap-3 border-b border-[#011836]/10 px-6 py-6 text-left text-lg font-semibold transition-colors last:border-b-0 ${
                  selected ? "bg-[#011836] text-white" : "text-[#011836] hover:bg-[#f6f4f0]"
                }`}
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-[#f06f12] transition-opacity ${
                    selected ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden
                />
                <span className={`font-mono text-xs ${selected ? "text-[#f06f12]" : "text-[#011836]/45"}`}>
                  {pad(index + 1)}
                </span>
                <span>{entry.title}</span>
                {entry.featured ? (
                  <span className="ml-auto">
                    <FeaturedBadge>{featured}</FeaturedBadge>
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${active}`}
          className="flex min-h-[36rem] flex-col p-14"
        >
          <CategoryDetail key={item.slug} item={item} index={active} withHeader {...detailProps} />
        </div>
      </div>

      <div className="divide-y divide-[#011836]/10 overflow-hidden rounded-lg border border-[#011836]/10 bg-white lg:hidden">
        {items.map((entry, index) => {
          const expanded = index === open;
          return (
            <div key={entry.slug}>
              <h3>
                <button
                  type="button"
                  id={`${baseId}-acc-${index}`}
                  aria-expanded={expanded}
                  aria-controls={`${baseId}-acc-panel-${index}`}
                  onClick={() => setOpen(expanded ? null : index)}
                  className={`relative flex w-full items-center gap-3 px-5 py-4 text-left text-base font-semibold transition-colors md:px-6 md:py-5 md:text-lg ${
                    expanded ? "bg-[#011836] text-white" : "text-[#011836] hover:bg-[#f6f4f0]"
                  }`}
                >
                  <span
                    className={`absolute inset-y-0 left-0 w-1 bg-[#f06f12] transition-opacity ${
                      expanded ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden
                  />
                  <span className={`font-mono text-xs ${expanded ? "text-[#f06f12]" : "text-[#011836]/45"}`}>
                    {pad(index + 1)}
                  </span>
                  <span className="flex-1">{entry.title}</span>
                  {entry.featured ? <FeaturedBadge>{featured}</FeaturedBadge> : null}
                  <span className="w-4 shrink-0 text-center font-mono text-lg leading-none" aria-hidden>
                    {expanded ? "−" : "+"}
                  </span>
                </button>
              </h3>
              {expanded ? (
                <div
                  id={`${baseId}-acc-panel-${index}`}
                  role="region"
                  aria-labelledby={`${baseId}-acc-${index}`}
                  className="flex flex-col px-5 pb-6 pt-5 md:px-6 md:pb-8"
                >
                  <CategoryDetail item={entry} index={index} withHeader={false} {...detailProps} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
