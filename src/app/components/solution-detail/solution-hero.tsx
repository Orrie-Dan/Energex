"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { sdReducedMotion } from "./solution-motion";

type SolutionHeroProps = {
  eyebrow: string;
  /** Accessible name of the hero region. */
  regionLabel?: string;
  titleLines: string[];
  /** Short supporting statement under the title. */
  supporting?: string;
  cta: { href: string; label: string };
  /** Changes on route navigation to replay Framer entrance. */
  motionKey: string;
};

/**
 * Sparse service-detail hero:
 * eyebrow + large clipped title entrance + supporting line + floating CTA card.
 * Title uses a clipped upward reveal (overflow clip on hero),
 * with per-character stagger matching the reference character.
 */
export function SolutionHero({
  eyebrow,
  regionLabel = "Solution hero",
  titleLines,
  supporting,
  cta,
  motionKey,
}: SolutionHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    if (!hero || !title) return;

    hero.classList.remove("sd-hero-settled");
    title.classList.remove("sd-hero-title-settled");

    if (sdReducedMotion()) {
      hero.classList.add("sd-hero-settled");
      title.classList.add("sd-hero-title-settled");
      return;
    }

    const raf = window.requestAnimationFrame(() => {
      hero.classList.add("sd-hero-settled");
      window.requestAnimationFrame(() => {
        title.classList.add("sd-hero-title-settled");
      });
    });
    return () => window.cancelAnimationFrame(raf);
  }, [motionKey, titleLines]);

  return (
    <section ref={heroRef} className="sd-hero" id="solution-hero" aria-label={regionLabel}>
      <div className="sd-hero-inner">
        <div className="sd-hero-eyebrow">
          <span className="sd-hero-eyebrow-bar" aria-hidden />
          <p>{eyebrow}</p>
        </div>

        <div className="sd-hero-title-clip">
        <h1 ref={titleRef} className="sd-hero-title">
          {titleLines.map((line, lineIndex) => (
            <span key={`${line}-${lineIndex}`} className="sd-hero-line">
              {Array.from(line).map((ch, i) => (
                <span
                  key={`${lineIndex}-${i}`}
                  className="sd-hero-char"
                  style={{ ["--sd-i" as string]: lineIndex * 18 + i }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
              {lineIndex < titleLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </h1>
        </div>

        {supporting ? <p className="sd-hero-supporting">{supporting}</p> : null}

        <Link href={cta.href} className="sd-hero-cta">
          <span className="sd-hero-cta-label">{cta.label}</span>
          <span className="sd-hero-cta-arrow" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
