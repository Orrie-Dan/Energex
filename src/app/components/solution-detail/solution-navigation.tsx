import Link from "next/link";
import type { SolutionDetail } from "../../../data/solutions";
import { SolutionReveal } from "./solution-reveal";

type SolutionNavigationProps = {
  previous: SolutionDetail | null;
  next: SolutionDetail | null;
  /** When true, nav links go to /reference-solution-test style paths are unused — always use slug routes. */
  basePath?: string;
};

function NavCard({
  direction,
  solution,
  basePath = "/solutions",
}: {
  direction: "previous" | "next";
  solution: SolutionDetail;
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
            {direction === "previous" ? "Previous solution" : "Next solution"}
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

export function SolutionNavigation({ previous, next }: SolutionNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav className="sd-nav" aria-label="Adjacent solutions">
      {previous ? <NavCard direction="previous" solution={previous} /> : null}
      {next ? <NavCard direction="next" solution={next} /> : null}
    </nav>
  );
}
