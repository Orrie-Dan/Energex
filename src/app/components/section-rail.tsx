"use client";

import { useEffect, useState } from "react";

type RailItem = { id: string; index: string; label: string };

/** Sticky in-page section index; highlights the section crossing the upper middle of the viewport. */
export function SectionRail({ items, label }: { items: readonly RailItem[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label={label} className="sticky top-28">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#011836]/45">{label}</p>
      <ol className="mt-4 border-l border-[#011836]/10">
        {items.map((item) => {
          const current = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={current ? "location" : undefined}
                className={`-ml-px flex gap-3 border-l-2 py-2 pl-4 text-sm transition-colors duration-300 ${
                  current
                    ? "border-[#f06f12] font-semibold text-[#011836]"
                    : "border-transparent text-[#011836]/55 hover:text-[#011836]"
                }`}
              >
                <span className={`font-mono text-xs leading-5 ${current ? "text-[#f06f12]" : ""}`}>{item.index}</span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
