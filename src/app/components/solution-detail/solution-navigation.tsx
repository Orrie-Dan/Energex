import Link from "next/link";
import type { SolutionDetail } from "../../../data/solutions";
import { SolutionReveal } from "./solution-reveal";

type NavigationText = { previous: string; next: string; adjacent: string };

type SolutionNavigationProps = {
  previous: SolutionDetail | null;
  next: SolutionDetail | null;
  text: NavigationText;
  /** Locale-prefixed solutions base path, e.g. "/zh-hk/solutions". */
  basePath?: string;
};

function NavCard({
  direction,
  solution,
  text,
  basePath = "/solutions",
}: {
  direction: "previous" | "next";
  solution: SolutionDetail;
  text: NavigationText;
  basePath?: string;
}) {
  const href =
    solution.slug === "reference-solution-test"
      ? "/reference-solution-test"
      : `${basePath}/${solution.slug}`;

  return (
    <SolutionReveal>
      <Link href={href} className="sd-nav-card">
        <div className="sd-nav-card-copy">
          <p className="sd-nav-eyebrow">
            {direction === "previous" ? text.previous : text.next}
          </p>
          <p className="sd-nav-title">{solution.title}</p>
        </div>
        <div className="sd-nav-card-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={solution.heroImage.src}
            srcSet={solution.heroImage.srcSet}
            sizes="(min-width: 809px) 185px, 100vw"
            alt=""
            aria-hidden
            decoding="async"
          />
        </div>
      </Link>
    </SolutionReveal>
  );
}

export function SolutionNavigation({ previous, next, text, basePath }: SolutionNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav className="sd-nav" aria-label={text.adjacent}>
      {previous ? <NavCard direction="previous" solution={previous} text={text} basePath={basePath} /> : null}
      {next ? <NavCard direction="next" solution={next} text={text} basePath={basePath} /> : null}
    </nav>
  );
}
