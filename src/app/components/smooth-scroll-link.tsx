"use client";

import type { MouseEvent, ReactNode } from "react";

/**
 * In-page anchor that smooth-scrolls to its `#target` (instant under reduced motion).
 * Falls back to the native jump when JS is unavailable or the target is missing.
 */
export function SmoothScrollLink({
  href,
  className,
  children,
}: {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
}) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    window.history.pushState(null, "", href);
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
