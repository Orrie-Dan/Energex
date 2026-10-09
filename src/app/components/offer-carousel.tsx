"use client";

import {
  Children,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { formatText } from "../../i18n/config";
import { useRevealed } from "./home-reveal";

const GAP = 16;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Container width, not the window: 1-up below 700, 2-up through tablet, 3-up from 1200. */
function perViewFor(width: number) {
  if (width >= 1200) return 3;
  if (width >= 700) return 2;
  return 1;
}

function offsetsFor(count: number, slide: number, view: number) {
  const stride = slide + GAP;
  const track = count * slide + Math.max(0, count - 1) * GAP;
  const max = Math.max(0, track - view);
  if (max <= 1) return [0];
  const list: number[] = [0];
  let x = stride;
  while (x < max - 1) {
    list.push(x);
    x += stride;
  }
  list.push(max);
  return list;
}

export type OfferCarouselText = {
  previous: string;
  next: string;
  /** "Showing {first} to {last} of {count}" */
  showing: string;
};

const DEFAULT_TEXT: OfferCarouselText = {
  previous: "Previous",
  next: "Next",
  showing: "Showing {first} to {last} of {count}",
};

type Props = {
  label: string;
  text?: OfferCarouselText;
  header?: (controls: ReactNode) => ReactNode;
  children: ReactNode;
};

/**
 * Finite horizontal track. The last snap sits flush with the viewport
 * so the end of the row does not leave an empty column.
 */
export default function OfferCarousel({ label, text = DEFAULT_TEXT, header, children }: Props) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; dx: number; pointer: number } | null>(null);
  const suppressClick = useRef(false);
  const wheelLock = useRef(0);
  const maxPosRef = useRef(0);
  const [pos, setPos] = useState(0);
  const [slidePx, setSlidePx] = useState(0);
  const [viewPx, setViewPx] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [reduced, setReduced] = useState(false);
  const revealed = useRevealed(viewportRef);

  const measure = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const view = el.clientWidth;
    const perView = perViewFor(view);
    const slide = perView === 1 ? view * 0.86 : (view - GAP * (perView - 1)) / perView;
    setViewPx(view);
    setSlidePx(slide);
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = viewportRef.current;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReduce = () => setReduced(media.matches);
    syncReduce();
    media.addEventListener("change", syncReduce);
    window.addEventListener("resize", measure);
    const observer = typeof ResizeObserver !== "undefined" && el ? new ResizeObserver(measure) : null;
    observer?.observe(el as Element);
    return () => {
      media.removeEventListener("change", syncReduce);
      window.removeEventListener("resize", measure);
      observer?.disconnect();
    };
  }, [measure]);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) || Math.abs(event.deltaX) < 16) return;
      event.preventDefault();
      const now = performance.now();
      if (now < wheelLock.current) return;
      wheelLock.current = now + 450;
      setDragging(false);
      setDragX(0);
      setPos((current) => {
        const next = current + (event.deltaX > 0 ? 1 : -1);
        return Math.min(maxPosRef.current, Math.max(0, next));
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const positions = slidePx > 0 && viewPx > 0 ? offsetsFor(count, slidePx, viewPx) : [0];
  const maxPos = positions.length - 1;
  maxPosRef.current = maxPos;
  const safePos = Math.min(Math.max(pos, 0), maxPos);
  const maxOffset = positions[positions.length - 1] ?? 0;
  const rawX = -(positions[safePos] ?? 0) + dragX;
  const x = Math.min(48, Math.max(-maxOffset - 48, rawX));
  const atStart = safePos <= 0;
  const atEnd = safePos >= positions.length - 1;

  const go = useCallback((dir: -1 | 1) => {
    setDragging(false);
    setDragX(0);
    setPos((current) => Math.min(maxPosRef.current, Math.max(0, current + dir)));
  }, []);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.altKey || event.metaKey || event.ctrlKey) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      setPos(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setPos(maxPosRef.current);
    }
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLUListElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if ((event.target as HTMLElement).closest("button")) return;
    dragRef.current = { x: event.clientX, dx: 0, pointer: event.pointerId };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLUListElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointer !== event.pointerId) return;
    const dx = event.clientX - drag.x;
    drag.dx = dx;
    setDragX(dx);
  };

  const endDrag = (event: ReactPointerEvent<HTMLUListElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointer !== event.pointerId) return;
    dragRef.current = null;
    const dx = drag.dx;
    if (Math.abs(dx) > 8) suppressClick.current = true;
    if (dx <= -48) go(1);
    else if (dx >= 48) go(-1);
    else {
      setDragging(false);
      setDragX(0);
    }
  };

  const onClickCapture = (event: React.MouseEvent<HTMLUListElement>) => {
    if (!suppressClick.current) return;
    suppressClick.current = false;
    event.preventDefault();
    event.stopPropagation();
  };

  const first = Math.min(count, Math.max(1, safePos + 1));
  const visible = slidePx > 0 ? Math.max(1, Math.min(count, Math.round((viewPx + GAP) / (slidePx + GAP)))) : 1;
  const last = Math.min(count, first + visible - 1);

  const controls = (
    <div className="flex gap-1">
      <button
        type="button"
        aria-label={text.previous}
        disabled={atStart}
        onClick={() => go(-1)}
        className="flex h-10 w-10 cursor-pointer items-center justify-center bg-color-001 disabled:cursor-default disabled:opacity-35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <img src="/assets/cloned/svg/de9d52a631a7.svg" alt="" width={40} height={40} className="h-10 w-10" />
      </button>
      <button
        type="button"
        aria-label={text.next}
        disabled={atEnd}
        onClick={() => go(1)}
        className="flex h-10 w-10 cursor-pointer items-center justify-center bg-color-001 disabled:cursor-default disabled:opacity-35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <img src="/assets/cloned/svg/0db50e6c503d.svg" alt="" width={40} height={40} className="h-10 w-10" />
      </button>
    </div>
  );

  const basis =
    slidePx > 0
      ? `${slidePx}px`
      : undefined;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      data-offer-carousel=""
      onKeyDown={onKeyDown}
      className="relative flex w-full min-w-0 flex-col gap-10 outline-none max-lg:gap-8"
    >
      {header ? header(controls) : <div className="flex justify-end">{controls}</div>}
      <p className="offer-live" aria-live="polite">
        {formatText(text.showing, { first, last, count })}
      </p>
      <div ref={viewportRef} className="offer-viewport w-full min-w-0 overflow-hidden">
        <ul
          data-revealed={revealed ? "true" : "false"}
          className="home-reveal-stagger m-0 flex list-none items-stretch p-0"
          style={{
            gap: GAP,
            transform: slidePx ? `translate3d(${x}px, 0, 0)` : undefined,
            transition: dragging || reduced ? "none" : `transform 700ms ${EASE}`,
            cursor: "grab",
            touchAction: "pan-y",
            userSelect: dragging ? "none" : undefined,
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
        >
          {slides.map((slide, index) => (
            <li
              key={index}
              className="offer-slide flex min-w-0 shrink-0 grow-0"
              style={basis ? { width: basis, flexBasis: basis } : undefined}
              aria-roledescription="slide"
            >
              {slide}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
