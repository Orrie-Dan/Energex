"use client";

import { useEffect, type ReactNode } from "react";

type SolutionPageMotionProps = {
  routeKey: string;
  children: ReactNode;
};

/**
 * Re-runs the service-detail entrance when moving between solution routes
 * (prev/next, homepage card, direct load). Matches Framer scroll-to-top + settle.
 */
export function SolutionPageMotion({ routeKey, children }: SolutionPageMotionProps) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [routeKey]);

  return (
    <div key={routeKey} className="sd-route" data-sd-route={routeKey}>
      {children}
    </div>
  );
}
