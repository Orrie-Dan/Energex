import type { CSSProperties, ReactNode } from "react";
import { Emph } from "./emph";

type PageHeroProps = {
  label: string;
  video?: string;
  poster?: string;
  /** Overlay gradient (CSS background) keeping text legible over the media. */
  shade: string;
  /** Adds a faint orange colour wash over the media. */
  tint?: boolean;
  minHeight: number;
  /** Space below the copy in px (larger when content overlaps the hero, e.g. Contact). Trimmed by 80px on phones. */
  paddingBottom?: number;
  /** Primary chip text; extra chips follow it. */
  eyebrow: string;
  chips?: readonly string[];
  title: string;
  lead?: string;
  /** Buttons shown beside the lead paragraph. */
  actions?: ReactNode;
  /** Content shown beside the copy column (e.g. stat cards). */
  aside?: ReactNode;
  /** Full-width strip at the bottom edge (e.g. marquee). */
  footer?: ReactNode;
  titleMaxWidth?: number;
};

/** Dark full-bleed page opener with a looping, muted background video. */
export function PageHero({
  label,
  video,
  poster,
  shade,
  tint,
  minHeight,
  paddingBottom = 88,
  eyebrow,
  chips,
  title,
  lead,
  actions,
  aside,
  footer,
  titleMaxWidth = 1200,
}: PageHeroProps) {
  const copy = (
    <div data-enter className="flex min-w-0 flex-col gap-7">
      <div className="flex flex-wrap gap-2">
        <span className="nx-chip-glass">
          <i aria-hidden="true" />
          {eyebrow}
        </span>
        {chips?.map((chip) => (
          <span key={chip} className="nx-chip-line">
            {chip}
          </span>
        ))}
      </div>
      <h1 className="nx-h1" style={{ maxWidth: titleMaxWidth }}>
        <Emph text={title} />
      </h1>
      {lead || actions ? (
        <div className="flex flex-wrap items-end justify-between gap-8 pt-2">
          {lead ? <p className="nx-lead max-w-[600px]">{lead}</p> : null}
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      ) : null}
    </div>
  );

  return (
    <section aria-label={label} className="nx-hero" style={{ minHeight }}>
      {video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" aria-hidden="true" className="nx-hero-media" />
      ) : null}
      <div aria-hidden="true" className="nx-shade" style={{ background: shade }} />
      {tint ? (
        <div aria-hidden="true" className="nx-shade" style={{ background: "rgba(240,122,26,0.10)", mixBlendMode: "color" }} />
      ) : null}

      <div className="nx-wrap nx-hero-body" style={{ "--nx-hero-pb": `${paddingBottom}px` } as CSSProperties}>
        {aside ? (
          <div className="flex flex-wrap items-end justify-between gap-12">
            <div className="flex-[1_1_640px] min-w-0">{copy}</div>
            {aside}
          </div>
        ) : (
          copy
        )}
      </div>
      {footer}
    </section>
  );
}
