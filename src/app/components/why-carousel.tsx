"use client";

import { useCallback, useLayoutEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode, type TransitionEvent } from "react";

export type WhySlide = {
  title: string;
  description: string;
  icon: ReactNode;
};

type Props = {
  slides: WhySlide[];
};

/** Framer breakpoints: 1-up ≤809, 2-up 810–1199, 3-up ≥1200. */
function perViewFor(width: number) {
  if (width >= 1200) return 3;
  if (width >= 810) return 2;
  return 1;
}

/**
 * Why Choose Us track. Infinite, button + drag, no autoplay.
 * Step size is the viewport width divided by the visible card count (gap 0).
 */
export default function WhyCarousel({ slides }: Props) {
  const n = slides.length;
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; dx: number; pointer: number } | null>(null);
  const [perView, setPerView] = useState(3);
  const [slidePx, setSlidePx] = useState(0);
  const [index, setIndex] = useState(n);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [animate, setAnimate] = useState(true);

  const measure = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const pv = perViewFor(window.innerWidth);
    setPerView(pv);
    setSlidePx(el.clientWidth / pv);
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const go = useCallback((dir: -1 | 1) => {
    setDragging(false);
    setDragX(0);
    setAnimate(true);
    setIndex((i) => i + dir);
  }, []);

  const settle = useCallback(
    (i: number) => {
      if (i >= n * 2 || i < n) {
        const normalized = ((i % n) + n) % n + n;
        setAnimate(false);
        setIndex(normalized);
      }
    },
    [n]
  );

  const onTransitionEnd = (event: TransitionEvent<HTMLUListElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    settle(index);
  };

  useLayoutEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate, index]);

  const onPointerDown = (event: ReactPointerEvent<HTMLUListElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragRef.current = { x: event.clientX, dx: 0, pointer: event.pointerId };
    setAnimate(false);
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
    if (dx <= -48) go(1);
    else if (dx >= 48) go(-1);
    else {
      setDragging(false);
      setAnimate(true);
      setDragX(0);
    }
  };

  const loop = [...slides, ...slides, ...slides];
  const x = -index * slidePx + dragX;
  const transition = animate && !dragging ? "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)" : "none";

  return (
    <section className="relative h-full w-full" data-cid="n699" aria-roledescription="carousel" aria-label="Why Energex">
      <div className="pointer-events-none absolute -top-[5.125rem] right-0 z-2 flex gap-1 max-lg:-top-[4.25rem]">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => go(-1)}
          className="pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center bg-surface-3 max-lg:h-12 max-lg:w-12"
        >
          <img src="/assets/cloned/svg/de9d52a631a7.svg" alt="" width={40} height={40} className="h-10 w-10 max-lg:h-12 max-lg:w-12" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => go(1)}
          className="pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center bg-surface-3 max-lg:h-12 max-lg:w-12"
        >
          <img src="/assets/cloned/svg/0db50e6c503d.svg" alt="" width={40} height={40} className="h-10 w-10 max-lg:h-12 max-lg:w-12" />
        </button>
      </div>
      <div ref={viewportRef} className="h-full w-full overflow-hidden">
        <ul
          className="flex h-full list-none motion-reduce:!transition-none"
          style={{
            transform: slidePx ? `translate3d(${x}px, 0, 0)` : undefined,
            transition,
            cursor: "grab",
            touchAction: "pan-y",
            userSelect: "none",
          }}
          onTransitionEnd={onTransitionEnd}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {loop.map((slide, i) => (
            <li
              key={`${slide.title}-${i}`}
              className="h-full min-w-0 shrink-0 grow-0 overflow-hidden"
              style={slidePx ? { width: slidePx, flexBasis: slidePx } : { flexBasis: `${100 / perView}%` }}
            >
              <div className="flex h-full min-h-0 flex-col justify-between overflow-clip p-8">
                <div className="flex grow items-center justify-center p-8">
                  <div className="aspect-square h-48.5 max-md:h-[8.6875rem] md:max-lg:h-103.5 [&>svg]:h-full [&>svg]:w-full">
                    {slide.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-4 overflow-clip">
                  <h4 className="text-balance text-2xl font-medium leading-[1.9375rem] tracking-[-0.2px] text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif]">
                    {slide.title}
                  </h4>
                  <p className="text-balance text-sm font-semibold leading-[1.375rem] text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif]">
                    {slide.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
