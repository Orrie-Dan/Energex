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
      className="offer-card group relative flex h-full w-full min-w-0 flex-col overflow-hidden bg-background text-primary outline-none ring-1 ring-color-001/10 hover:ring-accent focus-visible:ring-2 focus-visible:ring-accent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-0.5 before:origin-left before:scale-x-0 before:bg-accent hover:before:scale-x-100"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-color-001">
        <img
          src={offering.imgSrc}
          alt=""
          draggable={false}
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-color-001/0 transition-colors duration-1000 ease-in-out group-hover:bg-color-001/12 motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3
          className={`block text-color-001 ${FONT} text-lg font-medium leading-6 tracking-[-0.2px] text-balance transition-colors duration-1000 ease-in-out group-hover:text-accent motion-reduce:transition-none`}
        >
          {offering.title}
        </h3>
        <p className={`block text-muted-foreground ${FONT} text-sm leading-5 line-clamp-3`}>{offering.description}</p>
        <span
          className={`mt-auto pt-2 inline-flex items-center gap-1.5 text-color-001 ${FONT} text-sm font-semibold leading-5 transition-colors duration-1000 ease-in-out group-hover:text-accent motion-reduce:transition-none`}
        >
          {exploreLabel}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-1000 ease-in-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </span>
      </div>
    </a>
  );
}
