"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

export type WhySlide = {
  title: string;
  description: string;
  icon: ReactNode;
};

type Props = {
  slides: WhySlide[];
};

function useSlidesPerView() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1601) setCount(3);
      else if (w >= 1025) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

/** Reusable Why Choose Us carousel — preserves card look, restores motion. */
export default function WhyCarousel({ slides }: Props) {
  const perView = useSlidesPerView();
  const maxIndex = Math.max(0, slides.length - perView);
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir)));
    },
    [maxIndex]
  );

  const gap = 16;
  const slideBasis = useMemo(() => {
    if (perView <= 1) return "100%";
    return `calc((100% - ${(perView - 1) * gap}px) / ${perView})`;
  }, [perView]);

  return (
    <section className="relative w-full 2xl:hidden" data-cid="n699" aria-roledescription="carousel" aria-label="Why choose us">
      <div className="relative w-full overflow-hidden">
        <ul
          ref={trackRef}
          className="flex list-none items-stretch transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{
            gap,
            transform: `translate3d(calc(-${index} * (${slideBasis} + ${gap}px)), 0, 0)`,
          }}
          onTouchStart={(e) => {
            touchX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            if (touchX.current == null) return;
            const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) < 40) return;
            go(dx < 0 ? 1 : -1);
          }}
        >
          {slides.map((slide) => (
            <li
              key={slide.title}
              className="relative shrink-0 grow-0"
              style={{ flexBasis: slideBasis, width: slideBasis }}
            >
              <div className="flex h-full min-h-[33.45rem] flex-col justify-between overflow-clip p-8 max-md:min-h-[479.5px] md:max-lg:min-h-[40rem]">
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
      <div className="mt-6 flex justify-end gap-1 max-lg:mt-8">
        <button
          type="button"
          aria-label="Previous"
          disabled={index <= 0}
          onClick={() => go(-1)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center bg-surface-3 disabled:cursor-default disabled:opacity-40 max-lg:h-12 max-lg:w-12"
        >
          <img src="/assets/cloned/svg/de9d52a631a7.svg" alt="" width={40} height={40} className="h-10 w-10 max-lg:h-12 max-lg:w-12" />
        </button>
        <button
          type="button"
          aria-label="Next"
          disabled={index >= maxIndex}
          onClick={() => go(1)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center bg-surface-3 disabled:cursor-default disabled:opacity-40 max-lg:h-12 max-lg:w-12"
        >
          <img src="/assets/cloned/svg/0db50e6c503d.svg" alt="" width={40} height={40} className="h-10 w-10 max-lg:h-12 max-lg:w-12" />
        </button>
      </div>
    </section>
  );
}
