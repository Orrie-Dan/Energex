import { brand, finalCta, footer, navLinks } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

const navigation = [{ href: "/", label: "Home" }, ...navLinks, { href: "/privacy", label: "Privacy" }];

/** Corporate address + navigation block for the below-2xl footer (replaces the template newsletter section). */
export default function CorporateFooterSection() {
  return (
    <div
      className="w-full flex relative justify-start items-start content-start shrink-0 gap-25 max-lg:flex-col max-lg:gap-12 2xl:hidden"
      data-cid="n2261"
    >
      <div className="w-[18%] flex relative max-w-55 flex-col justify-start items-start content-start shrink-0 gap-6 max-lg:w-full max-lg:max-w-none">
        <a className="block relative h-7 w-[8.6625rem] shrink-0" href="/" data-cid="n2265">
          <img
            className="block h-7 w-full overflow-clip object-cover"
            data-cid="n2267"
            alt="ENERGEX"
            height="80"
            src={brand.logoDark}
            width="396"
          />
        </a>
        <p className={`block text-color-002 ${FONT} text-sm font-semibold leading-[1.375rem] text-balance`} dir="auto">
          FROM CONCEPT TO POWER.
        </p>
        <p className={`block text-color-002 ${FONT} text-xs leading-4`} dir="auto">
          Registration No. {brand.registration}
        </p>
      </div>
      <div className="w-[73.5%] flex relative justify-start items-start content-start grow shrink-0 basis-0 gap-12 max-lg:w-full max-lg:flex-col max-lg:grow-[initial] max-lg:basis-[initial]">
        <div className="flex relative justify-start items-start content-start grow shrink-0 basis-0 gap-25 max-lg:w-full max-lg:grow-[initial] max-lg:basis-[initial] max-lg:gap-6 max-md:flex-col">
          <div className="flex relative flex-col justify-start items-start content-start shrink-0 gap-6 max-lg:flex-1">
            <p className={`block text-color-002 ${FONT} text-sm font-semibold leading-[1.375rem]`} dir="auto">
              Navigation
            </p>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    className={`text-background ${FONT} text-base leading-[1.625rem] hover:text-accent`}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex relative flex-col justify-start items-start content-start shrink-0 gap-6 max-lg:flex-1">
            <p className={`block text-color-002 ${FONT} text-sm font-semibold leading-[1.375rem]`} dir="auto">
              Solutions
            </p>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {footer.solutions.filter((item) => item.href !== "/solutions").map((item) => (
                <li key={item.label}>
                  <a
                    className={`text-background ${FONT} text-base leading-[1.625rem] hover:text-accent`}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex relative justify-start items-start content-start grow shrink-0 basis-0 gap-6 max-lg:w-full max-lg:grow-[initial] max-lg:basis-[initial]">
          <div className="w-2 block relative z-0 self-stretch shrink-0">
            <div
              className="w-2 h-full min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-color-001 shadow-[var(--surface-3)_0px_0px_0px_1px_inset]"
              aria-hidden="true"
            />
          </div>
          <div className="flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-6">
            <h3
              className={`block text-surface ${FONT} text-[2rem] font-medium leading-[2.375rem] tracking-[-0.3px] text-balance max-lg:text-2xl max-lg:leading-[1.8125rem]`}
              data-component="heading"
              dir="auto"
            >
              {"Corporate "}
              <span className="inline text-color-002">address</span>
            </h3>
            <address className={`block not-italic text-background ${FONT} text-base leading-[1.625rem]`}>
              <span className="block font-semibold">{brand.name}</span>
              {brand.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className={`block max-w-125 text-color-002 ${FONT} text-base leading-[1.625rem]`} dir="auto">
              {finalCta.body}
            </p>
            <a
              className={`inline-flex w-fit items-center gap-2 text-accent ${FONT} text-base font-semibold leading-[1.625rem] underline underline-offset-4`}
              href="/contact"
            >
              Start a Project &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
