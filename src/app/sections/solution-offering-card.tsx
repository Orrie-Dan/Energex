const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

export type SolutionOffering = {
  href: string;
  title: string;
  description: string;
  imgSrc: string;
};

/** One commercial offering. Hover stays on the card, separate from the track motion. */
export default function SolutionOfferingCard({
  offering,
  exploreLabel = "Explore",
}: {
  offering: SolutionOffering;
  exploreLabel?: string;
}) {
  return (
    <a
      href={offering.href}
      className={`group relative flex h-full w-full min-w-0 flex-col overflow-hidden bg-background text-primary outline-none ring-1 ring-color-001/10 transition-[transform,box-shadow,ring-color] duration-500 ease-[cubic-bezier(0.33,0,0.2,1)] hover:-translate-y-1 hover:ring-accent hover:shadow-[0_16px_36px_-22px_rgba(1,24,54,0.38)] focus-visible:ring-2 focus-visible:ring-accent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.33,0,0.2,1)] hover:before:scale-x-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none motion-reduce:before:transition-none`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-color-001">
        <img
          src={offering.imgSrc}
          alt=""
          draggable={false}
          className="h-full w-full object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(0.33,0,0.2,1)] will-change-transform group-hover:scale-[1.07] group-hover:brightness-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:will-change-auto"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-color-001/0 transition-colors duration-500 ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:bg-color-001/12"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3
          className={`block text-color-001 ${FONT} text-lg font-medium leading-6 tracking-[-0.2px] text-balance transition-colors duration-500 ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:text-accent`}
        >
          {offering.title}
        </h3>
        <p className={`block text-muted-foreground ${FONT} text-sm leading-5 line-clamp-3`}>{offering.description}</p>
        <span
          className={`mt-auto pt-2 inline-flex items-center gap-1.5 text-color-001 ${FONT} text-sm font-semibold leading-5 transition-colors duration-500 ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:text-accent`}
        >
          {exploreLabel}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </span>
      </div>
    </a>
  );
}
