"use client";

import { useEffect, useRef, useState } from "react";
import { integratorModel } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

const PARTNERS = integratorModel.partners;

/** Scroll progress thresholds for the 10-step integrator story. */
const HEADING_AT = 0.04;
const PARTNER_START = 0.1;
const PARTNER_STEP = 0.095;
const ALL_CONNECTED_AT = 0.72;
const CLIENT_AT = 0.78;
const CLOSING_AT = 0.9;

type PartnerPhase = "inactive" | "active" | "completed";

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function partnerPhase(index: number, progress: number, reduced: boolean): PartnerPhase {
  if (reduced) return "completed";
  const start = PARTNER_START + index * PARTNER_STEP;
  const peak = start + PARTNER_STEP * 0.55;
  if (progress < start) return "inactive";
  if (progress < peak) return "active";
  return "completed";
}

function partnerPathProgress(index: number, progress: number, reduced: boolean) {
  if (reduced) return 1;
  const start = PARTNER_START + index * PARTNER_STEP;
  return clamp01((progress - start) / (PARTNER_STEP * 0.7));
}

function clientPathProgress(progress: number, reduced: boolean) {
  if (reduced) return 1;
  return clamp01((progress - CLIENT_AT) / (CLOSING_AT - CLIENT_AT));
}

/** Orthogonal convergence paths → Energex → Client (editorial geometry, not a spider). */
function ConvergenceViz({
  progress,
  reduced,
}: {
  progress: number;
  reduced: boolean;
}) {
  const clientOn = progress >= CLIENT_AT || reduced;
  const closingOn = progress >= CLOSING_AT || reduced;
  const anyPathNear =
    reduced || PARTNERS.some((_, i) => partnerPathProgress(i, progress, reduced) > 0.85);
  const energexOn = progress >= ALL_CONNECTED_AT || anyPathNear;
  const clientDraw = clientPathProgress(progress, reduced);

  const leftX = 8;
  const spineX = 250;
  const energexX = 278;
  const energexW = 178;
  const energexH = 68;
  const clientX = 510;
  const clientW = 118;
  const midY = 200;
  const energexY = midY - energexH / 2;
  const clientY = midY - 24;
  const ys = [42, 104, 158, 242, 296, 358];

  const connected = PARTNERS.map((_, i) => partnerPathProgress(i, progress, reduced) > 0.9);
  const firstConnected = connected.findIndex(Boolean);
  const lastConnected = connected.lastIndexOf(true);

  return (
    <div className="relative flex h-full min-h-[20rem] w-full flex-col justify-center">
      <svg
        className="h-auto max-h-[28rem] w-full"
        viewBox="0 0 640 400"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Specialist partners converge through Energex to one client interface"
      >
        <line
          x1={spineX}
          y1={ys[0]}
          x2={spineX}
          y2={ys[ys.length - 1]}
          stroke="rgba(255,255,255,0.14)"
          strokeWidth={3}
        />

        {PARTNERS.map((partner, i) => {
          const phase = partnerPhase(i, progress, reduced);
          const draw = partnerPathProgress(i, progress, reduced);
          const y = ys[i];
          const accent =
            phase === "active"
              ? "var(--accent)"
              : phase === "completed"
                ? "rgba(240,111,18,0.62)"
                : "transparent";
          const width = phase === "active" ? 4 : phase === "completed" ? 3.25 : 2.5;

          return (
            <g key={partner.id}>
              {/* Always-visible neutral rail */}
              <path
                d={`M ${leftX} ${y} H ${spineX}`}
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth={2.75}
                strokeLinecap="square"
              />
              {/* Green progress overlay */}
              <path
                d={`M ${leftX} ${y} H ${spineX}`}
                fill="none"
                stroke={accent}
                strokeWidth={width}
                strokeLinecap="square"
                pathLength={100}
                style={{
                  strokeDasharray: 100,
                  strokeDashoffset: 100 * (1 - draw),
                  transition: reduced ? "none" : "stroke 0.35s ease, stroke-width 0.35s ease",
                }}
              />
              <circle
                cx={spineX}
                cy={y}
                r={phase === "active" ? 5 : 3.75}
                fill={phase === "inactive" ? "rgba(255,255,255,0.22)" : "var(--accent)"}
                style={{
                  opacity: phase === "inactive" ? 0.45 : draw > 0.92 ? (phase === "completed" ? 0.8 : 1) : 0.35,
                  transition: reduced ? "none" : "opacity 0.3s ease, fill 0.3s ease",
                }}
              />
            </g>
          );
        })}

        {firstConnected >= 0 && (
          <line
            x1={spineX}
            y1={ys[firstConnected]}
            x2={spineX}
            y2={ys[lastConnected]}
            stroke="var(--accent)"
            strokeWidth={4}
            strokeLinecap="square"
            style={{
              opacity: progress >= ALL_CONNECTED_AT || reduced ? 1 : 0.75,
              transition: reduced ? "none" : "opacity 0.4s ease",
            }}
          />
        )}

        <line
          x1={spineX}
          y1={midY}
          x2={energexX}
          y2={midY}
          stroke={energexOn ? "var(--accent)" : "rgba(255,255,255,0.16)"}
          strokeWidth={energexOn ? 4.5 : 2.5}
          strokeLinecap="square"
          style={{ transition: reduced ? "none" : "stroke 0.4s ease, stroke-width 0.4s ease" }}
        />

        <rect
          x={energexX}
          y={energexY}
          width={energexW}
          height={energexH}
          fill={energexOn ? "var(--accent)" : "rgba(255,255,255,0.06)"}
          stroke={energexOn ? "var(--accent)" : "rgba(255,255,255,0.2)"}
          strokeWidth={1}
          style={{ transition: reduced ? "none" : "fill 0.45s ease, stroke 0.45s ease" }}
        />
        <text
          x={energexX + energexW / 2}
          y={energexY + energexH / 2 + 7}
          textAnchor="middle"
          fill={energexOn ? "var(--background)" : "rgba(255,255,255,0.45)"}
          style={{
            fontFamily: "Inter, 'Inter Placeholder', sans-serif",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.18em",
            transition: reduced ? "none" : "fill 0.45s ease",
          }}
        >
          {integratorModel.node}
        </text>

        <line
          x1={energexX + energexW}
          y1={midY}
          x2={clientX}
          y2={midY}
          stroke="var(--accent)"
          strokeWidth={4.5}
          strokeLinecap="square"
          pathLength={100}
          style={{
            strokeDasharray: 100,
            strokeDashoffset: 100 * (1 - clientDraw),
            opacity: clientOn || clientDraw > 0 ? 1 : 0.2,
          }}
        />

        <rect
          x={clientX}
          y={clientY}
          width={clientW}
          height={48}
          fill="none"
          stroke={clientOn ? "var(--accent)" : "rgba(255,255,255,0.22)"}
          strokeWidth={1.75}
          style={{
            opacity: clientDraw > 0.55 ? 1 : 0.35,
            transition: reduced ? "none" : "stroke 0.4s ease, opacity 0.4s ease",
          }}
        />
        <text
          x={clientX + clientW / 2}
          y={clientY + 30}
          textAnchor="middle"
          fill={clientOn ? "var(--accent)" : "rgba(255,255,255,0.35)"}
          style={{
            fontFamily: "Inter, 'Inter Placeholder', sans-serif",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "0.14em",
            opacity: clientDraw > 0.55 ? 1 : 0.35,
            transition: reduced ? "none" : "fill 0.4s ease, opacity 0.4s ease",
          }}
        >
          {integratorModel.client}
        </text>

        <text
          x={(energexX + energexW + clientX) / 2}
          y={energexY + energexH + 40}
          textAnchor="middle"
          fill="var(--accent)"
          style={{
            fontFamily: "Inter, 'Inter Placeholder', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.06em",
            opacity: closingOn ? 1 : 0,
            transition: reduced ? "none" : "opacity 0.5s ease",
          }}
        >
          {integratorModel.closingLines[0].toUpperCase()}
        </text>
        <text
          x={(energexX + energexW + clientX) / 2}
          y={energexY + energexH + 58}
          textAnchor="middle"
          fill="var(--accent)"
          style={{
            fontFamily: "Inter, 'Inter Placeholder', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.06em",
            opacity: closingOn ? 1 : 0,
            transition: reduced ? "none" : "opacity 0.5s ease",
          }}
        >
          {integratorModel.closingLines[1].toUpperCase()}
        </text>
      </svg>
    </div>
  );
}

function PartnerRow({
  index,
  progress,
  reduced,
}: {
  index: number;
  progress: number;
  reduced: boolean;
}) {
  const partner = PARTNERS[index];
  const phase = partnerPhase(index, progress, reduced);
  const opacity = phase === "active" ? 1 : phase === "completed" ? 0.82 : 0.34;
  const numberColor = phase === "inactive" ? "text-color-002" : "text-accent";
  const labelColor =
    phase === "active"
      ? "text-background"
      : phase === "completed"
        ? "text-background/80"
        : "text-color-002";

  return (
    <div
      className={`grid grid-cols-[3rem_1fr] items-baseline gap-3 border-b border-surface-3 py-3 ${
        phase === "active" ? "border-accent/40" : ""
      }`}
      style={{ opacity, transition: reduced ? "none" : "opacity 0.35s ease" }}
    >
      <span className={`block ${FONT} text-sm font-semibold tracking-[0.08em] ${numberColor}`}>
        {partner.number}
      </span>
      <span
        className={`block ${FONT} text-[1.375rem] font-medium leading-7 tracking-[-0.3px] uppercase ${labelColor} max-lg:text-lg`}
      >
        {partner.label}
      </span>
    </div>
  );
}

function HeadingBlock({
  progress,
  reduced,
}: {
  progress: number;
  reduced: boolean;
}) {
  const on = progress >= HEADING_AT || reduced;
  return (
    <div
      className="relative flex w-full max-w-150 shrink-0 flex-col content-start items-start justify-start gap-4"
      style={{
        opacity: on ? 1 : 0.35,
        transform: on || reduced ? "translateY(0)" : "translateY(12px)",
        transition: reduced ? "none" : "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <p className={`block text-background ${FONT} text-sm font-semibold leading-[1.375rem]`}>
        {integratorModel.label}
      </p>
      {/* Visual title — landmark heading is the section-level sr-only h2 */}
      <p
        className={`block text-balance text-background ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
      >
        {integratorModel.headingLead}{" "}
        <span className="inline text-color-002">{integratorModel.headingAccent}</span>
      </p>
      <p
        className={`block max-w-125 text-color-002 ${FONT} text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']`}
      >
        {integratorModel.supporting}
      </p>
    </div>
  );
}

function PartnerList({
  progress,
  reduced,
}: {
  progress: number;
  reduced: boolean;
}) {
  return (
    <div className="flex flex-col" aria-label="Partner categories">
      {PARTNERS.map((partner, i) => (
        <PartnerRow key={partner.id} index={i} progress={progress} reduced={reduced} />
      ))}
    </div>
  );
}

function MobileNarrative({
  progress,
  reduced,
}: {
  progress: number;
  reduced: boolean;
}) {
  const energexOn = progress >= 0.68 || reduced;
  const clientDraw = clientPathProgress(progress, reduced);
  const closingOn = progress >= CLOSING_AT || reduced;

  return (
    <div className="flex w-full flex-col gap-8">
      <HeadingBlock progress={progress} reduced={reduced} />
      <PartnerList progress={progress} reduced={reduced} />

      <div className="flex flex-col items-center gap-3 py-2" aria-hidden="true">
        <div
          className="h-10 w-px origin-top bg-accent"
          style={{
            transform: `scaleY(${clamp01((progress - 0.55) / 0.15)})`,
            opacity: progress >= 0.55 || reduced ? 1 : 0.25,
            transition: reduced ? "none" : "transform 0.35s ease, opacity 0.35s ease",
          }}
        />
        <div
          className="bg-accent px-8 py-4"
          style={{
            opacity: energexOn ? 1 : 0.3,
            transition: reduced ? "none" : "opacity 0.45s ease",
          }}
        >
          <span className={`block text-background ${FONT} text-base font-semibold tracking-[0.16em]`}>
            {integratorModel.node}
          </span>
        </div>
        <div
          className="h-10 w-px origin-top bg-accent"
          style={{
            transform: `scaleY(${clientDraw})`,
            opacity: progress >= CLIENT_AT || reduced ? 1 : 0.2,
            transition: reduced ? "none" : "transform 0.35s ease, opacity 0.35s ease",
          }}
        />
        <div
          className="border border-accent px-6 py-3"
          style={{
            opacity: progress >= CLIENT_AT || reduced ? 1 : 0.25,
            transition: reduced ? "none" : "opacity 0.45s ease",
          }}
        >
          <span className={`block text-accent ${FONT} text-sm font-semibold tracking-[0.14em]`}>
            {integratorModel.client}
          </span>
        </div>
      </div>

      <p
        className={`block whitespace-pre-line text-center text-accent ${FONT} text-base font-medium tracking-[-0.1px]`}
        style={{
          opacity: closingOn ? 1 : 0,
          transition: reduced ? "none" : "opacity 0.5s ease",
        }}
      >
        {`${integratorModel.closingLines[0]}\n${integratorModel.closingLines[1]}`}
      </p>
    </div>
  );
}

/** Scroll-driven integrator model: specialists → Energex → client. */
export default function IntegratorModelSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopMq = window.matchMedia("(min-width: 1025px)");

    const syncReduce = () => setReduced(reduceMq.matches);
    syncReduce();
    reduceMq.addEventListener("change", syncReduce);

    let raf = 0;
    const update = () => {
      raf = 0;
      if (reduceMq.matches) {
        setProgress(1);
        return;
      }

      if (desktopMq.matches) {
        const track = trackRef.current;
        if (!track) return;
        const rect = track.getBoundingClientRect();
        const range = Math.max(1, track.offsetHeight - window.innerHeight);
        setProgress(clamp01(-rect.top / range));
        return;
      }

      const flow = flowRef.current;
      if (!flow) return;
      const rect = flow.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.88;
      const end = Math.min(vh * 0.12, Math.max(1, rect.height * 0.35));
      setProgress(clamp01((start - rect.top) / (start - end)));
    };
    const request = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    request();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    desktopMq.addEventListener("change", request);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      desktopMq.removeEventListener("change", request);
      reduceMq.removeEventListener("change", syncReduce);
    };
  }, []);

  const p = reduced ? 1 : progress;

  return (
    <section
      id="integrator"
      className="relative flex w-full shrink-0 flex-col items-center justify-start overflow-clip bg-color-001"
      aria-labelledby="integrator-heading"
    >
      <h2 id="integrator-heading" className="sr-only">
        {integratorModel.headingLead} {integratorModel.headingAccent}
      </h2>

      {/* Desktop sticky scroll story */}
      <div ref={trackRef} className="relative hidden h-[160vh] w-full lg:block">
        <div className="sticky top-0 flex h-screen w-full items-center">
            <div className="mx-auto grid w-full max-w-400 grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] items-center gap-8 px-8 xl:gap-10">
            <div className="flex min-w-0 flex-col gap-8">
              <HeadingBlock progress={p} reduced={reduced} />
              <PartnerList progress={p} reduced={reduced} />
            </div>
            <ConvergenceViz progress={p} reduced={reduced} />
          </div>
        </div>
      </div>

      {/* Tablet + mobile */}
      <div ref={flowRef} className="mx-auto w-full max-w-400 px-6 py-16 max-md:py-14 lg:hidden">
        <div className="hidden grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-8 md:grid">
          <div className="flex min-w-0 flex-col gap-6">
            <HeadingBlock progress={p} reduced={reduced} />
            <PartnerList progress={p} reduced={reduced} />
          </div>
          <ConvergenceViz progress={p} reduced={reduced} />
        </div>
        <div className="md:hidden">
          <MobileNarrative progress={p} reduced={reduced} />
        </div>
      </div>
    </section>
  );
}
