import type { ReactNode } from "react";
import { Emph } from "./emph";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  /** Short paragraph aligned to the right of the heading. */
  aside?: ReactNode;
  id?: string;
  titleMaxWidth?: number;
};

/** Eyebrow + large heading row used at the top of most refreshed sections. */
export function SectionHead({ eyebrow, title, aside, id, titleMaxWidth }: SectionHeadProps) {
  return (
    <div data-reveal className="nx-head">
      <div style={titleMaxWidth ? { maxWidth: titleMaxWidth } : undefined}>
        <p className="nx-eyebrow">{eyebrow}</p>
        <h2 id={id} className="nx-h2">
          <Emph text={title} />
        </h2>
      </div>
      {aside ? <div className="nx-body max-w-[380px]">{aside}</div> : null}
    </div>
  );
}

/** Large figure over a ruled label (hero and band statistics). */
export function StatFigure({ number, label, accent }: { number: string; label: string; accent?: boolean }) {
  return (
    <div className="flex flex-col gap-2.5">
      <span
        className={`nx-t-stat font-semibold ${
          accent ? "text-[var(--nx-accent)]" : ""
        }`}
      >
        {number}
      </span>
      <span
        className="pt-3.5 text-sm text-[var(--nx-mist)]"
        style={{ borderTop: `1px solid ${accent ? "var(--nx-accent)" : "rgba(255,255,255,0.16)"}` }}
      >
        {label}
      </span>
    </div>
  );
}

/** Looping strip of words separated by accent stars (decorative; duplicated for a seamless loop). */
export function Marquee({ items }: { items: readonly string[] }) {
  const run = items.flatMap((item, index) => [
    <span key={`t${index}`}>{item}</span>,
    <b key={`s${index}`}>✦</b>,
  ]);
  return (
    <div aria-hidden="true" className="nx-marquee">
      <div className="nx-marquee-track">
        {run}
        {run.map((node, index) => (
          <span key={`d${index}`} className="contents">
            {node}
          </span>
        ))}
      </div>
    </div>
  );
}
