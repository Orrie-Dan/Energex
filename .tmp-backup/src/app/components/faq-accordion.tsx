"use client";

import { useId, useState } from "react";

export type FaqItem = {
  title: string;
  description: string;
};

type Props = {
  items: FaqItem[];
};

/** FAQ disclosure matching reference: one open at a time, first open initially. */
export default function FaqAccordion({ items }: Props) {
  const baseId = useId();
  const [open, setOpen] = useState(0);

  return (
    <div className="flex w-full flex-col gap-1">
      {items.map((item, i) => {
        const expanded = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div
            key={item.title}
            className="relative w-full cursor-pointer overflow-clip bg-clr-6 p-8 max-lg:p-4 md:max-lg:w-full"
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={expanded}
              aria-controls={panelId}
              className="flex w-full cursor-pointer items-center justify-start gap-4 text-left"
              onClick={() => setOpen(expanded ? -1 : i)}
            >
              <span className="grow text-balance text-xl font-semibold leading-7 tracking-[-0.2px] text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif]">
                {item.title}
              </span>
              <svg
                className={`h-6 w-6 shrink-0 text-color-001 transition-transform duration-300 ease-out motion-reduce:transition-none ${expanded ? "rotate-45" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="pt-4 text-balance text-base leading-[1.625rem] text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
