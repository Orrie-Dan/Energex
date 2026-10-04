import { deliveryFlexibility } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

/** Quiet editorial matrix of participation roles after interactive sections. */
export default function DeliveryFlexibilitySection() {
  return (
    <section
      id="delivery"
      className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip bg-surface"
      aria-labelledby="delivery-heading"
    >
      <div className="w-full max-w-400 flex relative py-37.5 px-8 flex-col justify-start items-start content-start shrink-0 gap-12 max-lg:py-18 max-lg:px-6 max-lg:gap-8">
        <div className="w-full max-w-150 flex flex-col gap-4">
          <p className={`block text-color-001 ${FONT} text-sm font-semibold leading-[1.375rem]`}>
            {deliveryFlexibility.label}
          </p>
          <h2
            id="delivery-heading"
            className={`block text-color-001 ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
          >
            {deliveryFlexibility.headingLead}{" "}
            <span className="inline text-muted-foreground">{deliveryFlexibility.headingAccent}</span>
          </h2>
          <p
            className={`block max-w-150 text-muted-foreground ${FONT} text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']`}
          >
            {deliveryFlexibility.supporting}
          </p>
        </div>

        <ul className="m-0 w-full list-none divide-y divide-color-001/10 border-y border-color-001/10 p-0">
          {deliveryFlexibility.matrix.map((row) => (
            <li
              key={`${row.left}-${row.right}`}
              className="grid grid-cols-1 gap-2 py-5 md:grid-cols-2 md:gap-10"
            >
              <span className={`block text-color-001 ${FONT} text-lg font-medium tracking-[-0.2px]`}>
                {row.left}
              </span>
              <span className={`block text-color-001 ${FONT} text-lg font-medium tracking-[-0.2px] md:text-right`}>
                {row.right}
              </span>
            </li>
          ))}
        </ul>

        <p
          className={`block max-w-150 text-muted-foreground ${FONT} text-sm leading-[1.375rem]`}
        >
          {deliveryFlexibility.financingNote}
        </p>

        <a
          href={deliveryFlexibility.cta.href}
          className={`inline-flex items-center gap-3 text-color-001 ${FONT} text-sm font-semibold leading-[1.375rem] hover:text-accent`}
        >
          {deliveryFlexibility.cta.label}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
