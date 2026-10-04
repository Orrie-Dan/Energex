import { brand, hero, navCta } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

/** Full-bleed video opener with hero copy overlaid. */
export default function VideoHeroSection() {
  return (
    <header
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-clip bg-color-001 max-lg:min-h-[36rem]"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 z-0 overflow-clip"
        data-scroll-zoom-sticky=""
      >
        <div className="h-full w-full" data-scroll-zoom="">
          <video
            className="h-full w-full object-cover"
            src="/assets/energex/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-color-001/90 via-color-001/35 to-color-001/20"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-1 flex w-full max-w-400 flex-col justify-end gap-6 px-8 pb-16 pt-40 max-lg:px-6 max-lg:pb-12 max-lg:pt-28">
        <p
          className={`block text-background/90 ${FONT} text-sm font-semibold leading-[1.375rem]`}
        >
          {hero.eyebrow}
        </p>
        <h1
          className={`max-w-3xl text-balance text-background ${FONT} text-[4.375rem] font-medium leading-[0.95] tracking-[-2.8px] max-lg:text-5xl max-lg:leading-[1.05] max-lg:tracking-[-1.92px]`}
        >
          <span className="block">{hero.headlineLead}</span>
          <span className="block text-background/70">{hero.headlineAccent}</span>
        </h1>
        <p
          className={`max-w-xl text-balance text-background/85 ${FONT} text-base leading-[1.625rem]`}
        >
          {hero.supporting}
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a
            href={hero.primaryCta.href}
            className={`inline-flex h-12 items-center gap-2 bg-accent px-6 text-background ${FONT} text-sm font-semibold leading-[1.375rem] transition-opacity hover:opacity-90`}
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={navCta.href}
            className={`inline-flex h-12 items-center gap-2 border border-background/40 px-6 text-background ${FONT} text-sm font-semibold leading-[1.375rem] transition-colors hover:border-background hover:bg-background/10`}
          >
            {navCta.label}
          </a>
        </div>
        <p className={`sr-only`}>{brand.name}</p>
      </div>

      {/* Nav swap trigger — when this leaves the viewport, bottom nav appears */}
      <div
        id="menu-changer"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px"
        aria-hidden="true"
      />
    </header>
  );
}
