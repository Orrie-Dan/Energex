"use client";

import { useEffect, useId, useRef, useState } from "react";

/** How long each step stays active while playing. */
const STEP_MS = 5000;

type Props = {
  steps: readonly { title: string; body: string }[];
  pause: string;
  play: string;
  /** Template with `{current}` and `{total}`. */
  stepOf: string;
};

/**
 * Horizontal step rail that plays itself: the active step's segment of the line
 * fills, then the next step takes over, looping. Plays only while in view, holds
 * on hover/focus, and starts paused for reduced-motion users. Steps stay clickable.
 */
export function ProcurementStepper({ steps, pause, play, stepOf }: Props) {
  const baseId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [held, setHeld] = useState(false);
  const step = steps[active];
  const running = inView && !paused && !held;
  const status = stepOf
    .replace("{current}", String(active + 1))
    .replace("{total}", String(steps.length));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const segment = 100 / steps.length;

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHeld(false);
      }}
    >
      <div className="relative h-px bg-white/15" aria-hidden>
        <span
          className="absolute -top-px left-0 h-0.5 bg-[#f06f12]"
          style={{ width: `${active * segment}%` }}
        />
        <span className="absolute -top-px h-0.5" style={{ left: `${active * segment}%`, width: `${segment}%` }}>
          <span
            key={active}
            className="block h-full origin-left bg-[#f06f12]"
            onAnimationEnd={() => setActive((current) => (current + 1) % steps.length)}
            style={
              paused
                ? undefined
                : {
                    animation: `site-fill ${STEP_MS}ms linear forwards`,
                    animationPlayState: running ? "running" : "paused",
                  }
            }
          />
        </span>
      </div>
      <ol className="mt-6 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((entry, index) => {
          const selected = index === active;
          return (
            <li key={entry.title}>
              <button
                type="button"
                aria-current={selected ? "step" : undefined}
                aria-controls={`${baseId}-detail`}
                onClick={() => setActive(index)}
                className="group flex w-full flex-col items-start gap-1 text-left"
              >
                <span className="font-mono text-xs text-[#f06f12]">{String(index + 1).padStart(2, "0")}</span>
                <span
                  className={`text-lg font-semibold transition-colors md:text-xl ${
                    selected ? "text-white" : "text-white/45 group-hover:text-white/80"
                  }`}
                >
                  {entry.title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        {/* Announce changes only when the user drives them, not on every automatic advance. */}
        <div id={`${baseId}-detail`} aria-live={running ? "off" : "polite"}>
          <div key={active} data-enter>
            <p className="max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
              <span className="sr-only">{status}. </span>
              {step.body}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#f06f12]"
          >
            <span aria-hidden>{paused ? "▶" : "❚❚"}</span>
            {paused ? play : pause}
          </button>
          <span className="ml-1 font-mono text-xs text-white/50" aria-hidden>
            {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
