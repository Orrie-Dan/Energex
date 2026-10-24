import type { ReactNode } from "react";
import { Emph } from "./emph";

type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  /** Short paragraph under the heading. */
  body?: string;
  image?: string;
  video?: string;
  poster?: string;
  actions: ReactNode;
  /** Extra top padding when the banner follows a light section without its own spacing. */
  flushTop?: boolean;
};

/** Rounded dark call-to-action card with photo or looping video behind the copy. */
export function CtaBanner({ eyebrow, title, body, image, video, poster, actions, flushTop }: CtaBannerProps) {
  return (
    <section className={`nx-wrap ${flushTop ? "pb-32" : "py-32"} max-[900px]:py-20`}>
      <div
        data-reveal
        className="nx-media nx-dark relative flex min-h-[460px] items-end overflow-hidden rounded-[32px] max-[640px]:min-h-[420px] max-[640px]:rounded-[24px]"
      >
        {video ? (
          <video autoPlay muted loop playsInline preload="metadata" poster={poster} aria-hidden="true" tabIndex={-1}>
            <source src={video} type="video/mp4" />
          </video>
        ) : image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" aria-hidden="true" loading="lazy" />
        ) : null}
        <div
          aria-hidden="true"
          className="nx-shade"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,26,48,0.94) 0%, rgba(11,26,48,0.6) 55%, rgba(11,26,48,0.15) 100%)",
          }}
        />
        <div className="relative flex w-full flex-wrap items-end justify-between gap-8 p-16 max-[640px]:p-7">
          <div className="flex max-w-[760px] flex-col gap-[18px]">
            {eyebrow ? <p className="nx-eyebrow">{eyebrow}</p> : null}
            <h2 className="nx-display m-0 nx-t-h2">
              <Emph text={title} />
            </h2>
            {body ? <p className="nx-lead max-w-[600px]">{body}</p> : null}
          </div>
          <div className="flex flex-wrap gap-3">{actions}</div>
        </div>
      </div>
    </section>
  );
}
