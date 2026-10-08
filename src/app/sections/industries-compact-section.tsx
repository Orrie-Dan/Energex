import { customerSegmentId, industries, industriesSection } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

/** Compact segment index. Full need, response, and offerings stay on /industries. */
export default function IndustriesCompactSection() {
  return (
    <section
      id="industries"
      className="w-full flex flex-col items-center bg-background"
      aria-labelledby="industries-heading"
    >
      <div className="flex w-full max-w-400 flex-col gap-12 px-8 py-28 max-lg:gap-8 max-lg:px-6 max-lg:py-18">
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-150 flex-col gap-4">
            <p className={`text-color-001 ${FONT} text-sm font-semibold leading-5.5`}>
              {industriesSection.label}
            </p>
            <h2
              id="industries-heading"
              className={`text-color-001 ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
            >
              {industriesSection.headingLead}{" "}
              <span className="text-muted-foreground">{industriesSection.headingAccent}</span>
            </h2>
          </div>
          <a
            href="/industries"
            className={`inline-flex items-center gap-2 text-color-001 ${FONT} text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent`}
          >
            Industry details
          </a>
        </div>
        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((segment) => (
            <li key={segment.title}>
              <a
                href={`/industries#${customerSegmentId(segment.title)}`}
                className="group flex h-full flex-col overflow-hidden bg-background text-primary ring-1 ring-color-001/10 outline-none transition-[transform] duration-500 ease-[cubic-bezier(0.33,0,0.2,1)] hover:-translate-y-1 hover:ring-accent focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="relative block aspect-[16/10] overflow-hidden bg-color-001">
                  <img
                    src={segment.imgSrc}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </span>
                <span className="flex flex-1 flex-col gap-2 p-5">
                  <span className={`text-color-001 ${FONT} text-base font-medium leading-6`}>
                    {segment.title}
                  </span>
                  <span className={`text-muted-foreground ${FONT} text-sm leading-5`}>
                    {segment.need}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
