import { solutionFamilies } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

/** Four solution families in one horizontal row (stacks on small screens). */
export default function SolutionsFamilyGrid() {
  return (
    <div
      className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5"
      role="list"
      aria-label="Energy solution families"
    >
      {solutionFamilies.map((family) => (
        <a
          key={family.href}
          href={family.href}
          role="listitem"
          className="group flex min-w-0 flex-col overflow-hidden bg-background text-primary outline-none ring-1 ring-color-001/10 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:ring-accent/50 focus-visible:ring-2 focus-visible:ring-accent"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-color-001">
            <img
              src={family.imgSrc}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-5">
            <h3
              className={`block text-color-001 ${FONT} text-lg font-medium leading-6 tracking-[-0.2px] whitespace-nowrap overflow-hidden text-ellipsis`}
            >
              {family.title}
            </h3>
            <p
              className={`block text-muted-foreground ${FONT} text-sm leading-5 line-clamp-3`}
            >
              {family.description}
            </p>
            <span
              className={`mt-auto pt-2 inline-flex items-center gap-1.5 text-color-001 ${FONT} text-sm font-semibold leading-5 group-hover:text-accent`}
            >
              Explore
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
