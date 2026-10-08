import { equipmentSupplyCard, solutionFamilies } from "../../data/energex";
import SolutionsFamilyGrid from "./solutions-family-grid";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

const offerings = [
  ...solutionFamilies.map((family) => ({
    href: family.href,
    title: family.title,
    description: family.description,
    imgSrc: family.imgSrc,
  })),
  equipmentSupplyCard,
];

/** Four solution families plus Power Equipment Supply. Families stay defined in solutionFamilies. */
export default function SolutionsHomeSection() {
  return (
    <section
      id="solutions"
      className="w-full flex flex-col items-center bg-background"
      aria-labelledby="solutions-heading"
    >
      <div className="flex w-full max-w-400 flex-col gap-10 px-8 py-28 max-lg:gap-8 max-lg:px-6 max-lg:py-18">
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-175 flex-col gap-4">
            <p className={`text-color-001 ${FONT} text-sm font-semibold leading-5.5`}>Energy Solutions</p>
            <h2
              id="solutions-heading"
              className={`text-color-001 ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
            >
              {"What We "}
              <span className="text-muted-foreground">Deliver</span>
            </h2>
          </div>
          <a
            href="/solutions"
            className={`inline-flex items-center gap-2 text-color-001 ${FONT} text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent`}
          >
            Explore All Capabilities
          </a>
        </div>
        <SolutionsFamilyGrid offerings={offerings} />
      </div>
    </section>
  );
}
