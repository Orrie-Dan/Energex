import CardGridSection from "./sections/card-grid-section";
import CorporateFooterSection from "./sections/corporate-footer-section";
import IntegratorModelSection from "./sections/integrator-model-section";
import ProjectLifecycleSection from "./sections/project-lifecycle-section";
import ScaleSection from "./sections/scale-section";
import IndustryExplorerSection from "./sections/industry-explorer-section";
import DigitalEnergySection from "./sections/digital-energy-section";
import DeliveryFlexibilitySection from "./sections/delivery-flexibility-section";
import MarketBridgeSection from "./sections/market-bridge-section";
import SolutionsFamilyGrid from "./sections/solutions-family-grid";
import { brand, finalCta } from "../data/energex";
import Tile, { type TileData } from "./components/tile";
import Icon from "./svgs/svg-icon";
import FeatureCard, { type FeatureCardData } from "./components/feature-card";
import Icon2 from "./svgs/svg-icon2";
import Icon3 from "./svgs/svg-icon3";
import Icon4 from "./svgs/svg-icon4";
import Tile2, { type Tile2Data } from "./components/tile2";
import Icon5 from "./svgs/svg-icon5";
import Icon6 from "./svgs/svg-icon6";
import Icon7 from "./svgs/svg-icon7";
import Icon14 from "./svgs/svg-icon14";
import Icon15 from "./svgs/svg-icon15";
import Icon16 from "./svgs/svg-icon16";
import Icon17 from "./svgs/svg-icon17";
import Icon24 from "./svgs/svg-icon24";
import Icon25 from "./svgs/svg-icon25";
import Icon26 from "./svgs/svg-icon26";
import Illustration from "./svgs/svg-illustration";
import Icon27 from "./svgs/svg-icon27";
import Icon28 from "./svgs/svg-icon28";
import Tile3, { type Tile3Data } from "./components/tile3";
import Tile4, { type Tile4Data } from "./components/tile4";
import Logo2, { type Logo2Data } from "./components/logo2";
import Logo3, { type Logo3Data } from "./components/logo3";
import { Tile_cids, FeatureCard_cids, Tile2_cids, Tile3_cids, Tile4_cids, Logo2_cids, Logo3_cids } from "./_cids";
import { Tile_styles, FeatureCard_styles, Tile2_styles, Tile3_styles, Tile4_styles, Logo2_styles, Logo3_styles } from "./_styles";

const Tile_data: TileData[] = [
    { href: "/solutions", description: "Solutions" },
    { href: "/industries", description: "Industries" },
    { href: "/about", description: "About" },
    { href: "/contact", description: "Contact" }
];
const FeatureCard_data: FeatureCardData[] = [
    { href: "/solutions", title: "Solutions", description: "Solutions" },
    { href: "/industries", title: "Industries", description: "Industries" },
    { href: "/about", title: "About", description: "About" },
    { href: "/contact", title: "Contact", description: "Contact" }
];
const Tile2_data: Tile2Data[] = [
    { href: "/solutions", description: "Solutions" },
    { href: "/industries", description: "Industries" },
    { href: "/about", description: "About" },
    { href: "/contact", description: "Contact" }
];
const Tile3_data: Tile3Data[] = [
    { href: "/", description: "Home" },
    { href: "/about", description: "About" },
    { href: "/solutions", description: "Solutions" },
    { href: "/industries", description: "Industries" },
    { href: "/contact", description: "Contact" },
    { href: "/privacy", description: "Privacy" }
];
const Tile4_data: Tile4Data[] = [
    { href: "/solutions/power-generation", description: "Power & Generation" },
    { href: "/solutions/renewables-storage", description: "Renewables & Storage" },
    { href: "/solutions/grid-distributed-energy", description: "Grid & Distributed Energy" },
    { href: "/solutions/project-delivery-lifecycle", description: "Project Delivery & Lifecycle" }
];
const Logo2_data: Logo2Data[] = [];
const Logo3_data: Logo3Data[] = [];

export default function Page() {
  return (
    <>
      <div className="block" data-cid="n1" id="main">
        <div className="min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-background" data-cid="n2">
          <div className="contents min-w-0 transform-[none] 2xl:w-405 2xl:h-23 2xl:block 2xl:fixed 2xl:top-0 2xl:left-0 2xl:z-10 2xl:shrink-0 2xl:order-[-999] 2xl:transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)] 2xl:origin-[810px_46px]" data-cid="n35" data-ditto-nav-top>
            <nav className="hidden 2xl:w-405 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:overflow-clip" data-cid="n36" data-name="Navigation top">
              <div className="hidden 2xl:basis-0 2xl:shrink-0 2xl:flex 2xl:relative 2xl:p-8 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:grow 2xl:gap-16" data-cid="n37">
                <div className="hidden 2xl:w-[8.6625rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-0" data-cid="n38">
                  <div className="hidden 2xl:w-[8.6625rem] 2xl:h-7 2xl:block 2xl:relative 2xl:z-1 2xl:shrink-0" data-cid="n39">
                    <a className="hidden 2xl:h-7 2xl:block 2xl:relative 2xl:aspect-[4.95/1] 2xl:text-primary 2xl:cursor-pointer" data-cid="n40" href="/">
                      <div className="hidden 2xl:w-[8.6625rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0" data-cid="n41">
                        <img className="hidden 2xl:w-full 2xl:h-7 2xl:block 2xl:overflow-clip 2xl:object-contain 2xl:object-left 2xl:aspect-[auto_396/103]" data-cid="n42" alt="ENERGEX" height="80" src="/assets/energex/logo-cropped.png" width="396" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hidden 2xl:w-[79.0875rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-8 2xl:overflow-clip" data-cid="n43">
                  {Tile_data.map((d, i) => <Tile key={i} d={d} cids={Tile_cids[i]} styles={Tile_styles[i]} />)}
                </div>
                {/* Template search control removed — no site search endpoint. */}
                <div className="hidden" data-cid="n69" aria-hidden="true">
                  <div className="hidden" data-cid="n70">
                    <button type="button" tabIndex={-1} disabled className="hidden" data-cid="n71" aria-hidden="true">
                      <Icon cid={"n72"} />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            <div className="h-23 block fixed right-75 left-0 z-10 shrink-0 order-[-999] transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)] origin-[490px_46px] max-lg:h-15 max-lg:right-0 max-md:origin-[187.5px_30px] md:max-lg:origin-[384px_30px] 2xl:hidden" data-cid="n73" data-name="Navigation top" data-ditto-mobile-nav data-ditto-nav-top>
              <nav className="h-full flex relative justify-start items-center content-center overflow-clip 2xl:hidden" data-cid="n74" data-component="nav" data-name="Navigation top">
                <div className="basis-0 shrink-0 h-full flex relative p-8 justify-start items-center content-center grow gap-16 max-lg:py-4 max-lg:px-6 max-lg:flex-col max-lg:gap-20 max-lg:bg-color-001 2xl:hidden" data-cid="n75">
                  <div className="w-[15%] flex relative justify-start items-center content-center shrink-0 max-lg:w-full max-lg:justify-between 2xl:hidden" data-cid="n76">
                    <div className="w-[8.6625rem] h-7 block relative z-1 shrink-0 2xl:hidden" data-cid="n77">
                      <a className="h-7 block relative aspect-[4.95/1] text-primary cursor-pointer 2xl:hidden" data-cid="n78" data-component="link" href="/">
                        <div className="w-[8.6625rem] h-full block absolute top-0 2xl:hidden" data-cid="n79">
                          <img className="hidden lg:block w-full h-7 overflow-clip object-contain object-left aspect-[auto_396/103] 2xl:hidden" data-cid="n80" data-component="image" alt="ENERGEX" height="80" src="/assets/energex/logo-cropped.png" width="396" />
                          <img className="block lg:hidden w-full h-7 overflow-clip object-contain object-left aspect-[auto_396/103]" data-cid="n80b" alt="ENERGEX" height="80" src="/assets/energex/logo-on-dark-cropped.png" width="396" />
                        </div>
                      </a>
                    </div>
                    <button type="button" className="hidden max-lg:w-6 max-lg:h-6 max-lg:block max-lg:relative max-lg:shrink-0" data-cid="n81" data-ditto-menu-toggle aria-label="Open menu" aria-expanded="false">
                      <div className="hidden max-lg:w-6 max-lg:h-6 max-lg:flex max-lg:relative max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-clip max-lg:cursor-pointer" data-cid="n82">
                        <div className="hidden max-lg:w-5 max-lg:h-1 max-lg:block max-lg:absolute max-lg:top-1 max-lg:z-1 max-lg:min-w-0 max-lg:shrink-0 max-lg:bg-background max-lg:transform-[matrix(1,-0.176327,0,1,0,0)] max-lg:origin-[10px_2px]" data-cid="n83" data-ditto-menu-bar />
                        <div className="hidden max-lg:w-5 max-lg:h-1 max-lg:block max-lg:absolute max-lg:bottom-1 max-lg:z-1 max-lg:min-w-0 max-lg:shrink-0 max-lg:bg-background max-lg:transform-[matrix(1,-0.176327,0,1,0,0)] max-lg:origin-[10px_2px]" data-cid="n84" data-ditto-menu-bar />
                      </div>
                    </button>
                  </div>
                  <div className="w-[68.5%] flex relative justify-start items-center content-center grow shrink-0 basis-0 gap-8 overflow-clip max-lg:w-full max-lg:flex-col max-lg:items-start max-lg:content-start max-lg:order-[1] max-lg:gap-16 max-lg:grow-[initial] max-lg:basis-[initial] 2xl:hidden" data-cid="n85" data-ditto-mobile-panel>
                    {FeatureCard_data.map((d, i) => <FeatureCard key={i} d={d} cids={FeatureCard_cids[i]} styles={FeatureCard_styles[i]} />)}
                  </div>
                  <div className="hidden" data-cid="n116" aria-hidden="true">
                    <div className="hidden" data-cid="n117">
                      <button type="button" tabIndex={-1} disabled className="hidden" data-cid="n118" aria-hidden="true">
                        <Icon2 cid={"n119"} />
                      </button>
                    </div>
                  </div>
                  <div className="hidden max-lg:w-full max-lg:block max-lg:relative max-lg:shrink-0 max-lg:order-[2]" data-cid="n120" data-ditto-mobile-panel>
                    <a className="hidden max-lg:h-16 max-lg:flex max-lg:relative max-lg:p-6 max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-clip max-lg:bg-accent max-lg:cursor-pointer" data-cid="n121" href="/contact">
                      <div className="hidden max-md:w-[20.4375rem] max-lg:h-16 max-lg:block max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:z-0 max-lg:min-w-0 max-lg:shrink-0 max-lg:transform-[matrix(1.1,0,0,1.1,0,0)] max-md:origin-[163.5px_32px] md:max-lg:w-180 md:max-lg:origin-[360px_32px]" data-cid="n122">
                        <div className="hidden max-lg:h-16 max-lg:min-h-[0.3125rem] max-lg:block max-lg:relative max-lg:min-w-[0.3125rem] max-lg:overflow-hidden max-lg:bg-clr-1" data-cid="n123" aria-hidden="true">
                          <div className="hidden max-md:w-[25.9375rem] max-lg:h-38 max-lg:block max-lg:absolute max-lg:-top-11 max-lg:-left-11 max-md:[background-position:-9.17466px_-9.17466px] max-lg:[animation-name:hatchMove\_r3l] max-lg:[animation-duration:1.5s] max-lg:[animation-timing-function:linear] max-lg:[animation-iteration-count:infinite] max-lg:pointer-events-none md:max-lg:w-202 md:max-lg:[background-position:-10.6764px_-10.6764px]" data-cid="n124" />
                        </div>
                      </div>
                      <div className="hidden max-md:w-[17.4375rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:grow max-lg:shrink-0 max-lg:basis-0 max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] md:max-lg:w-168" data-cid="n125">
                        <p className="hidden max-lg:block max-lg:text-background max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-base max-lg:font-semibold max-lg:leading-[1.625rem] max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n126" dir="auto">
                          Start a Project
                        </p>
                      </div>
                      <div className="hidden max-lg:w-6 max-lg:h-6 max-lg:flex max-lg:absolute max-lg:top-[0.4375rem] max-lg:right-2.5 max-lg:z-1 max-lg:min-w-0 max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5 max-lg:overflow-clip max-lg:text-background" data-cid="n127">
                        <div className="hidden max-lg:w-[0.3125rem] max-lg:h-8 max-lg:block max-lg:absolute max-lg:-top-[0.1875rem] max-lg:left-2 max-lg:min-w-0 max-lg:shrink-0 max-lg:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] max-lg:origin-[2.5px_16px]" data-cid="n128" aria-hidden="true">
                          <div className="hidden max-lg:h-full max-lg:block" data-cid="n129">
                            <Icon3 cid={"n130"} />
                          </div>
                        </div>
                        <div className="hidden max-lg:w-6 max-lg:h-6 max-lg:block max-lg:relative max-lg:shrink-0" data-cid="n131" aria-hidden="true">
                          <div className="hidden max-lg:h-full max-lg:block" data-cid="n132">
                            <Icon4 cid={"n133"} />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="h-16 block fixed bottom-2 inset-x-0 z-10 opacity-0 min-w-0 shrink-0 order-[-998] transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,80,0,1)] origin-[640px_32px] max-lg:hidden" data-cid="n134" data-name="Navigation bottom" data-ditto-nav-bottom aria-hidden="true">
            <nav className="flex relative justify-center items-center content-center overflow-clip max-lg:hidden" data-cid="n135" data-component="nav" data-name="Navigation bottom">
              <div className="w-[55.25rem] flex relative pl-4 justify-start items-center content-center shrink-0 gap-5 bg-color-001 max-lg:hidden" data-cid="n136">
                <div className="w-[8.6625rem] flex relative justify-start items-center content-center shrink-0 max-lg:hidden" data-cid="n137">
                  <div className="w-[8.6625rem] h-7 block relative z-1 shrink-0 max-lg:hidden" data-cid="n138">
                    <a className="h-7 block relative aspect-[4.95/1] text-primary cursor-pointer max-lg:hidden" data-cid="n139" data-component="link" href="/">
                      <div className="w-[8.6625rem] h-full block absolute top-0 max-lg:hidden" data-cid="n140">
                        <img className="w-full h-7 block overflow-clip object-contain object-left aspect-[auto_396/103] max-lg:hidden" data-cid="n141" data-component="image" alt="ENERGEX" height="80" src="/assets/energex/logo-on-dark-cropped.png" width="396" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-auto flex relative px-5 justify-start items-center content-center shrink-0 gap-8 max-lg:hidden" data-cid="n142">
                  {Tile2_data.map((d, i) => <Tile2 key={i} d={d} cids={Tile2_cids[i]} styles={Tile2_styles[i]} />)}
                </div>
                <div className="hidden" data-cid="n168" aria-hidden="true">
                  <div className="hidden" data-cid="n169">
                    <button type="button" tabIndex={-1} disabled className="hidden" data-cid="n170" aria-hidden="true">
                      <Icon5 cid={"n171"} />
                    </button>
                  </div>
                </div>
                <div className="w-50 block relative shrink-0 max-lg:hidden" data-cid="n172">
                  <a className="w-50 h-16 flex relative p-6 justify-start items-center content-center gap-2.5 overflow-clip text-primary bg-accent cursor-pointer max-lg:hidden" data-cid="n173" data-component="link" href="/contact">
                    <div className="w-50 h-16 block absolute top-0 left-0 z-0 opacity-0 min-w-0 shrink-0 transform-[matrix(1.1,0,0,1.1,0,0)] origin-[100px_32px] max-lg:hidden" style={{ maskImage: "linear-gradient(315deg, var(--clr-2) 10%, var(--foreground) 50%, var(--clr-2) 90%)" }} data-cid="n174">
                      <div className="w-50 h-16 min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-1 max-lg:hidden" data-cid="n175" aria-hidden="true">
                        <div className="w-72 h-38 block absolute -top-11 -left-11 [background-position:-1.75815px_-1.75815px] [animation-name:hatchMove\_r82] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-lg:hidden 2xl:[background-position:-1.11629px_-1.11629px] 2xl:[animation-name:hatchMove\_re9] hover:[background-position:-3.97865px_-3.97865px] focus:[background-position:-6.74448px_-6.74448px]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface-3) 0px, var(--surface-3) 2px, var(--clr-2) 2px, var(--clr-2) 16px)" }} data-cid="n176" />
                      </div>
                    </div>
                    <div className="w-auto flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-nowrap max-lg:hidden" data-cid="n177">
                      <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base font-semibold leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" data-cid="n178" dir="auto">
                        Start a Project
                      </p>
                    </div>
                    <div className="w-6 h-6 flex absolute top-[0.4375rem] right-2.5 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip text-background max-lg:hidden" data-cid="n179">
                      <div className="w-[0.3125rem] h-px block absolute top-0.5 left-[1.1875rem] min-w-0 shrink-0 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[2.5px_0.5px] max-lg:hidden" data-cid="n180" aria-hidden="true">
                        <div className="h-full block max-lg:hidden" data-cid="n181">
                          <Icon6 cid={"n182"} />
                        </div>
                      </div>
                      <div className="w-6 h-6 block relative shrink-0 max-lg:hidden" data-cid="n183" aria-hidden="true">
                        <div className="h-full block max-lg:hidden" data-cid="n184">
                          <Icon7 cid={"n185"} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className="h-[min-content] min-h-screen contents relative min-w-0 flex-col justify-start items-center content-center overflow-clip bg-background" data-cid="n186">
            <main className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip" data-cid="n187">
              <section className="w-full flex relative flex-col justify-center items-center content-center shrink-0 overflow-clip" data-cid="n354" aria-label="Hero video">
                <div className="w-full h-[56.25rem] flex sticky top-0 z-1 flex-col justify-start items-center content-center shrink-0 overflow-clip bg-background max-md:h-[16.825rem] max-lg:top-14 max-lg:aspect-[1.39286/1] md:max-lg:h-[34.4625rem] 2xl:h-270" data-cid="n355" data-scroll-zoom-sticky="">
                  <div className="w-full h-full flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip" data-cid="n356">
                    <div className="w-full h-[56.25rem] block relative grow shrink-0 basis-0 max-md:h-[16.825rem] md:max-lg:h-[34.4625rem] 2xl:h-270" data-cid="n357" data-scroll-zoom="">
                      <video className="w-full h-[56.25rem] block overflow-clip object-cover max-md:h-[16.8125rem] md:max-lg:h-[34.4375rem] 2xl:h-270" data-cid="n358" src="/assets/energex/hero.mp4" autoPlay muted loop playsInline preload="auto" />
                    </div>
                  </div>
                </div>
              </section>
              <header className="w-full flex relative z-2 flex-col justify-start items-center content-center shrink-0 overflow-clip bg-background" data-cid="n188" id="hero">
                <CardGridSection />
              </header>
              <section className="w-full flex relative z-2 flex-col justify-center items-center content-center shrink-0 overflow-clip bg-background" data-cid="n359-wrap">
                <div className="w-full flex relative z-2 flex-col justify-start items-center content-center shrink-0 overflow-clip bg-background" data-cid="n359">
                  <div className="w-full flex relative max-w-400 py-37.5 px-8 justify-start items-start content-start shrink-0 gap-25 overflow-clip max-lg:py-18 max-lg:px-6 max-lg:flex-col max-lg:gap-10 max-lg:max-w-none" data-cid="n360">
                    <div className="w-full max-w-100 min-h-125 flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-12 max-md:h-auto max-lg:gap-8 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:h-auto" data-cid="n361">
                      <div className="w-100 h-auto flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-10 overflow-clip max-md:w-[20.4375rem] max-md:h-auto max-lg:gap-8 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:h-auto" data-cid="n362">
                        <div className="w-100 flex relative flex-col justify-start items-start content-start shrink-0 gap-4 max-md:w-[20.4375rem]" data-cid="n363">
                          <div className="contents min-w-0 2xl:w-auto 2xl:h-[1.4rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n364">
                            <div className="w-full block relative shrink-0 2xl:flex 2xl:w-auto 2xl:pr-2 2xl:pl-3 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-[initial]" data-cid="n365">
                              <div className="flex relative w-auto pr-2 pl-3 flex-col justify-start items-start content-start 2xl:shrink-0 2xl:whitespace-nowrap 2xl:max-w-none 2xl:px-0 2xl:[align-items:initial] 2xl:[align-content:initial]" data-cid="n366">
                                <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n367" dir="auto">
                                  <span className="hidden 2xl:inline-block" data-cid="n368">
  ABOUT ENERGEX
</span>
                                </p>
                                <div className="w-max flex relative flex-col justify-start shrink-0 whitespace-nowrap 2xl:hidden" data-cid="n370">
                                  <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" data-cid="n371" dir="auto">
                                    <span className="inline-block 2xl:hidden" data-cid="n372">
  ABOUT ENERGEX
</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-100 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem]" data-cid="n374">
                            <h2 className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]" data-cid="n375" data-component="heading" dir="auto">
<span className="inline text-color-001" data-cid="n376">
  {"ONE COMPANY. "}
</span>
{"ONE INTEGRATED ENERGY SOLUTION."}
                            </h2>
                          </div>
                        </div>
                        <div className="w-full h-10 block relative z-1 shrink-0" data-cid="n378">
                          <div className="h-10 min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-color-001" data-cid="n379" aria-hidden="true">
                            <div className="h-26.5 block absolute -top-[2.0625rem] -inset-x-[2.0625rem] [background-position:-5.64215px_-5.64215px] [animation-name:hatchMove\_R6pd8lb5dp] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-md:[background-position:-3.29455px_-3.29455px] md:max-lg:[background-position:-4.42083px_-4.42083px] 2xl:[background-position:-0.837214px_-0.837214px] 2xl:[animation-name:hatchMove\_reg]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 12px)" }} data-cid="n380" />
                          </div>
                        </div>
                        <div className="w-100 flex relative flex-col justify-start shrink-0 max-md:w-[20.4375rem]" data-cid="n381">
                          <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n382" dir="auto">
                            ENERGEX Global Solutions provides clients with a single commercial and technical interface across the full energy project lifecycle. From development and engineering to global procurement, EPC delivery, financing support, operations and long-term asset management, Energex coordinates the technologies and partners required around each project's needs.
                          </p>
                        </div>
                      </div>
                      <div className="contents min-w-0 2xl:w-auto 2xl:h-[1.4rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n383">
                        <a className="hidden 2xl:w-auto 2xl:h-[1.4rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:gap-3 2xl:text-primary 2xl:cursor-pointer" data-cid="n384" href="/about">
                          <div className="hidden 2xl:w-auto 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-nowrap" data-cid="n385">
                            <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-left" data-cid="n386" dir="auto">
                              About Energex
                            </p>
                          </div>
                          <div className="hidden 2xl:w-3 2xl:h-3 2xl:flex 2xl:relative 2xl:z-1 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip" data-cid="n387">
                            <div className="hidden 2xl:w-[0.1875rem] 2xl:h-px 2xl:block 2xl:absolute 2xl:top-px 2xl:left-[0.5625rem] 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] 2xl:origin-[1.5px_0.5px]" data-cid="n388" aria-hidden="true">
                              <div className="hidden 2xl:h-full 2xl:block" data-cid="n389">
                                <Icon14 cid={"n390"} />
                              </div>
                            </div>
                            <div className="hidden 2xl:w-3 2xl:h-3 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n391" aria-hidden="true">
                              <div className="hidden 2xl:h-full 2xl:block" data-cid="n392">
                                <Icon15 cid={"n393"} />
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="block relative shrink-0 2xl:hidden" data-cid="n394">
                          <a className="w-auto h-[1.4rem] flex relative justify-start items-center content-center gap-3 text-primary cursor-pointer max-lg:items-start max-lg:content-start 2xl:hidden" data-cid="n395" data-component="link" href="/about">
                            <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-nowrap 2xl:hidden" data-cid="n396">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-left 2xl:hidden" data-cid="n397" dir="auto">
                                About Energex
                              </p>
                            </div>
                            <div className="w-3 h-3 flex relative z-1 flex-col justify-center items-center content-center shrink-0 overflow-clip 2xl:hidden" data-cid="n398">
                              <div className="w-[0.1875rem] h-px block absolute top-px left-[0.5625rem] min-w-0 shrink-0 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[1.5px_0.5px] max-lg:h-4 max-lg:-top-px max-lg:left-[0.1875rem] max-lg:origin-[1.5px_8px] 2xl:hidden" data-cid="n399" aria-hidden="true">
                                <div className="h-full block 2xl:hidden" data-cid="n400">
                                  <Icon16 cid={"n401"} />
                                </div>
                              </div>
                              <div className="w-3 h-3 block relative shrink-0 2xl:hidden" data-cid="n402" aria-hidden="true">
                                <div className="h-full block 2xl:hidden" data-cid="n403">
                                  <Icon17 cid={"n404"} />
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="w-[59%] h-125 flex relative justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-lg:w-full max-lg:h-60 max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-[67.5%]" data-cid="n405">
                      <div className="contents min-w-0 transform-[none] 2xl:w-259 2xl:h-125 2xl:block 2xl:relative 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:transform-[matrix(1.2,0,0,1.2,0,0)] 2xl:origin-[518px_250px]" data-cid="n406">
                        <div className="w-179 h-125 block relative inset-0 grow shrink-0 basis-0 transform-[matrix(1.2,0,0,1.2,0,0)] origin-[358px_250px] max-md:w-[20.4375rem] max-lg:h-60 max-md:origin-[163.5px_120px] md:max-lg:w-180 md:max-lg:origin-[360px_120px] 2xl:w-259 2xl:absolute 2xl:transform-[none] 2xl:right-auto 2xl:bottom-auto 2xl:grow-[initial] 2xl:shrink-[initial] 2xl:basis-[initial] 2xl:origin-[initial]" data-cid="n407">
                          <img className="hidden 2xl:w-full 2xl:h-125 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_1448/1086]" data-cid="n408" alt="Energex engineers inspecting a solar array" height="1086" sizes="max((min(100vw, 1600px) - 164px) / 2, 1px)" src="/assets/energex/engineers.png" width="1448" />
                          <div className="h-full block absolute top-0 inset-x-0 2xl:hidden" data-cid="n409">
                            <img className="w-full h-125 block overflow-clip object-cover aspect-[auto_1448/1086] max-lg:h-60 2xl:hidden" data-cid="n410" data-component="image" alt="Energex engineers inspecting a solar array" height="1086" sizes="max((min(100vw, 1600px) - 164px) / 2, 1px)" src="/assets/energex/engineers.png" width="1448" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full flex relative z-2 flex-col justify-start items-center content-center shrink-0 overflow-clip bg-background" data-cid="n411">
                <div className="h-full flex absolute top-0 inset-x-0 z-0 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-background" data-cid="n412" />
                <div className="w-full max-w-400 flex relative py-37.5 px-8 flex-col justify-start items-start content-start shrink-0 gap-10 overflow-clip max-lg:py-18 max-lg:px-6 max-lg:gap-8" data-cid="n413">
                  <div className="w-304 flex relative flex-col justify-start items-start content-start shrink-0 gap-4 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-384" data-cid="n414" id="service-title">
                    <div className="contents min-w-0 2xl:w-auto 2xl:h-[1.4rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n415">
                      <div className="w-full block relative shrink-0 2xl:flex 2xl:w-auto 2xl:pr-2 2xl:pl-3 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-[initial]" data-cid="n416">
                        <div className="flex relative w-auto pr-2 pl-3 flex-col justify-start items-start content-start 2xl:shrink-0 2xl:whitespace-nowrap 2xl:max-w-none 2xl:px-0 2xl:[align-items:initial] 2xl:[align-content:initial]" data-cid="n417">
                          <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n418" dir="auto">
                            <span className="hidden 2xl:inline-block" data-cid="n419">
  Energy Solutions
</span>
                          </p>
                          <div className="w-max flex relative flex-col justify-start shrink-0 whitespace-nowrap 2xl:hidden" data-cid="n420">
                            <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" data-cid="n421" dir="auto">
                              <span className="inline-block 2xl:hidden" data-cid="n422">
  Energy Solutions
</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex relative justify-start items-end content-end shrink-0 gap-2.5 max-lg:flex-col max-lg:items-start max-lg:content-start max-lg:gap-8" data-cid="n423">
                      <div className="w-[68.8625rem] flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:w-[88.8625rem]" data-cid="n424">
                        <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]" data-cid="n425" data-component="heading" dir="auto">
                          {"What We "}
                          <span className="inline text-muted-foreground" data-cid="n426">
                            Deliver
                          </span>
                        </h2>
                      </div>
                      <div className="contents min-w-0 2xl:w-auto 2xl:h-[1.4rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n427">
                        <a className="hidden 2xl:w-auto 2xl:h-[1.4rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:gap-3 2xl:text-primary 2xl:cursor-pointer" data-cid="n428" href="/solutions">
                          <div className="hidden 2xl:w-auto 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-nowrap" data-cid="n429">
                            <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-left" data-cid="n430" dir="auto">
                              Explore All Capabilities
                            </p>
                          </div>
                          <div className="hidden 2xl:w-3 2xl:h-3 2xl:flex 2xl:relative 2xl:z-1 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip" data-cid="n431">
                            <div className="hidden 2xl:w-[0.1875rem] 2xl:h-px 2xl:block 2xl:absolute 2xl:top-px 2xl:left-[0.5625rem] 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] 2xl:origin-[1.5px_0.5px]" data-cid="n432" aria-hidden="true">
                              <div className="hidden 2xl:h-full 2xl:block" data-cid="n433">
                                <Icon14 cid={"n434"} />
                              </div>
                            </div>
                            <div className="hidden 2xl:w-3 2xl:h-3 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n435" aria-hidden="true">
                              <div className="hidden 2xl:h-full 2xl:block" data-cid="n436">
                                <Icon15 cid={"n437"} />
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="block relative shrink-0 2xl:hidden" data-cid="n438">
                          <a className="w-auto h-[1.4rem] flex relative justify-start items-center content-center gap-3 text-primary cursor-pointer max-lg:items-start max-lg:content-start 2xl:hidden" data-cid="n439" data-component="link" href="/solutions">
                            <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-nowrap 2xl:hidden" data-cid="n440">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-left 2xl:hidden" data-cid="n441" dir="auto">
                                Explore All Capabilities
                              </p>
                            </div>
                            <div className="w-3 h-3 flex relative z-1 flex-col justify-center items-center content-center shrink-0 overflow-clip 2xl:hidden" data-cid="n442">
                              <div className="w-[0.1875rem] h-px block absolute top-px left-[0.5625rem] min-w-0 shrink-0 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[1.5px_0.5px] max-lg:h-4 max-lg:-top-px max-lg:left-[0.1875rem] max-lg:origin-[1.5px_8px] 2xl:hidden" data-cid="n443" aria-hidden="true">
                                <div className="h-full block 2xl:hidden" data-cid="n444">
                                  <Icon16 cid={"n445"} />
                                </div>
                              </div>
                              <div className="w-3 h-3 block relative shrink-0 2xl:hidden" data-cid="n446" aria-hidden="true">
                                <div className="h-full block 2xl:hidden" data-cid="n447">
                                  <Icon17 cid={"n448"} />
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <SolutionsFamilyGrid />
                </div>
              </section>
              <IntegratorModelSection />
              <ProjectLifecycleSection />
              <ScaleSection />
              <IndustryExplorerSection />
              <DigitalEnergySection />
              <DeliveryFlexibilitySection />
              <MarketBridgeSection />
              <div className="hidden 2xl:w-full 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n2090" id="cta">
                <a className="hidden 2xl:w-480 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:overflow-clip 2xl:text-primary 2xl:bg-accent 2xl:cursor-pointer" data-cid="n2091" href="/contact">
                  <div className="hidden 2xl:w-400 2xl:h-107 2xl:flex 2xl:relative 2xl:max-w-400 2xl:p-8 2xl:flex-col 2xl:justify-end 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-25" data-cid="n2092">
                    <div className="hidden" data-cid="n2093">
                      <div className="hidden 2xl:w-400 2xl:h-107 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-1" data-cid="n2094" aria-hidden="true">
                        <div className="hidden 2xl:w-449 2xl:h-156 2xl:block 2xl:absolute 2xl:-top-24.5 2xl:-left-24.5 2xl:[background-position:-2.51164px_-2.51164px] 2xl:[animation-name:hatchMove\_rin] 2xl:[animation-duration:1.5s] 2xl:[animation-timing-function:linear] 2xl:[animation-iteration-count:infinite] 2xl:pointer-events-none" data-cid="n2095" />
                      </div>
                    </div>
                    <div className="hidden 2xl:w-full 2xl:h-91 2xl:flex 2xl:relative 2xl:justify-between 2xl:items-end 2xl:content-end 2xl:grow 2xl:shrink-0 2xl:basis-0" data-cid="n2096">
                      <div className="hidden 2xl:w-200 2xl:flex 2xl:relative 2xl:max-w-200 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n2097">
                        <h1 className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[4.375rem] 2xl:font-medium 2xl:leading-[3.9375rem] 2xl:tracking-[-2.8px] 2xl:text-balance" data-cid="n2098" dir="auto">
{finalCta.headingLead}{" "}
                          <span className="hidden 2xl:inline 2xl:text-clr-3" data-cid="n2099">
  {finalCta.headingAccent}
</span>
                        </h1>
<p className="hidden 2xl:block 2xl:mt-6 2xl:max-w-125 2xl:text-background 2xl:text-base 2xl:leading-[1.625rem] 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] " dir="auto">
  {finalCta.body}
</p>
<span className="hidden 2xl:inline-flex 2xl:mt-8 2xl:w-fit 2xl:h-12 2xl:items-center 2xl:gap-2 2xl:px-6 2xl:bg-background 2xl:text-color-001 2xl:text-base 2xl:font-semibold 2xl:leading-[1.625rem] 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] ">
  Start a Project &rarr;
</span>
                      </div>
                    </div>
                    <div className="hidden 2xl:w-25 2xl:h-25 2xl:flex 2xl:absolute 2xl:top-4 2xl:right-4 2xl:z-1 2xl:min-w-0 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip 2xl:aspect-square" data-cid="n2100">
                      <div className="hidden 2xl:w-4.5 2xl:h-[0.1875rem] 2xl:block 2xl:absolute 2xl:top-[0.5625rem] 2xl:left-[5.0625rem] 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] 2xl:origin-[9px_1.5px]" data-cid="n2101" aria-hidden="true">
                        <div className="hidden 2xl:h-full 2xl:block" data-cid="n2102">
                          <Icon24 cid={"n2103"} />
                        </div>
                      </div>
                      <div className="hidden 2xl:w-25 2xl:h-25 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n2104" aria-hidden="true">
                        <div className="hidden 2xl:h-full 2xl:block" data-cid="n2105">
                          <Icon25 cid={"n2106"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="contents min-w-0 2xl:hidden" data-cid="n2107">
                <div className="w-full block relative shrink-0 2xl:hidden" data-cid="n2108" id="cta">
                  <a className="flex relative flex-col justify-start items-center content-center overflow-clip text-primary bg-accent cursor-pointer max-lg:[cursor:inherit] 2xl:hidden group" data-cid="n2109" data-component="link" href="/contact">
                    <div className="w-full h-107 flex relative max-w-400 p-8 flex-col justify-end items-start content-start shrink-0 gap-25 max-lg:p-6 2xl:hidden group" data-cid="n2110">
                      <div className="w-320 h-full block absolute top-0 left-0 z-0 opacity-0 min-w-0 shrink-0 transform-[matrix(1.1,0,0,1.1,0,0)] origin-[640px_214px] max-md:w-[23.4375rem] max-lg:transform-[none] max-lg:opacity-[initial] max-lg:origin-[initial] md:max-lg:w-192 2xl:hidden group-hover:opacity-[0.928867] group-hover:opacity-100" style={{ maskImage: "linear-gradient(315deg, var(--clr-2) 10%, var(--foreground) 50%, var(--clr-2) 90%)" }} data-cid="n2111">
                        <div className="h-full min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-1 2xl:hidden" data-cid="n2112" aria-hidden="true">
                          <div className="w-369 h-156 block absolute -top-24.5 -left-24.5 [background-position:-3.95584px_-3.95584px] [animation-name:hatchMove\_rbt] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-md:w-[28.9375rem] max-lg:h-129 max-lg:-top-11 max-lg:-left-11 max-md:[background-position:-9.17466px_-9.17466px] max-lg:[animation-name:hatchMove\_r7g] md:max-lg:w-214 md:max-lg:[background-position:-10.6764px_-10.6764px] 2xl:hidden hover:[background-position:-22.5165px_-22.5165px] focus:[background-position:-3.2838px_-3.2838px]" data-cid="n2113" />
                        </div>
                      </div>
                      <div className="w-full h-full flex relative justify-between items-end content-end grow shrink-0 basis-0 2xl:hidden" data-cid="n2114">
                        <div className="w-full max-w-200 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] 2xl:hidden" data-cid="n2115">
                          <h1 className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] text-balance max-lg:text-5xl max-lg:leading-[2.6875rem] max-lg:tracking-[-1.92px] 2xl:hidden" data-cid="n2116" data-component="heading" dir="auto">
{finalCta.headingLead}{" "}
                            <span className="inline text-clr-3 2xl:hidden" data-cid="n2117">
  {finalCta.headingAccent}
</span>
                          </h1>
<p className="block mt-6 max-w-125 text-background text-base leading-[1.625rem] [font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:hidden" dir="auto">
  {finalCta.body}
</p>
<span className="inline-flex mt-8 w-fit h-12 items-center gap-2 px-6 bg-background text-color-001 text-base font-semibold leading-[1.625rem] [font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:hidden">
  Start a Project &rarr;
</span>
                        </div>
                      </div>
                      <div className="w-25 h-25 flex absolute top-4 right-4 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip aspect-square max-lg:w-16 max-lg:h-16 2xl:hidden" data-cid="n2118">
                        <div className="w-4.5 h-[0.1875rem] block absolute top-[0.5625rem] left-[5.0625rem] min-w-0 shrink-0 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[9px_1.5px] max-lg:w-2.5 max-lg:h-[5.6875rem] max-lg:-top-2.5 max-lg:left-[1.4375rem] max-lg:origin-[5px_45.5px] 2xl:hidden" data-cid="n2119" aria-hidden="true">
                          <div className="h-full block 2xl:hidden" data-cid="n2120">
                            <Icon26 cid={"n2121"} />
                          </div>
                        </div>
                        <div className="w-25 h-full block relative shrink-0 max-lg:w-16 2xl:hidden" data-cid="n2122" aria-hidden="true">
                          <div className="h-full block 2xl:hidden" data-cid="n2123">
                            <Illustration cid={"n2124"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </main>
          </div>
          <div className="w-full block relative shrink-0 order-[1004]" data-cid="n2125">
            <footer className="hidden 2xl:w-480 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:overflow-clip 2xl:bg-color-001" data-cid="n2126">
              <div className="hidden 2xl:w-400 2xl:flex 2xl:relative 2xl:max-w-400 2xl:pt-37.5 2xl:pb-8 2xl:px-8 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-37.5" data-cid="n2127">
                <div className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-25" data-cid="n2128">
                  <div className="hidden 2xl:w-55 2xl:flex 2xl:relative 2xl:max-w-55 2xl:flex-col 2xl:justify-between 2xl:items-start 2xl:content-start 2xl:self-stretch 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip" data-cid="n2129">
                    <div className="hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-6" data-cid="n2130">
                      <div className="hidden 2xl:w-[8.6625rem] 2xl:h-7 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n2131">
                        <a className="hidden 2xl:h-7 2xl:block 2xl:relative 2xl:aspect-[4.95/1] 2xl:text-primary 2xl:cursor-pointer" data-cid="n2132" href="/">
                          <div className="hidden 2xl:w-[8.6625rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0" data-cid="n2133">
                            <img className="hidden 2xl:w-full 2xl:h-7 2xl:block 2xl:overflow-clip 2xl:object-contain 2xl:object-left 2xl:aspect-[auto_396/103]" data-cid="n2134" alt="" height="80" src="/assets/energex/logo-on-dark-cropped.png" width="396" />
                          </div>
                        </a>
                      </div>
                      <div className="hidden 2xl:w-55 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n2135">
                        <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n2136" dir="auto">
                          FROM CONCEPT TO POWER.
                        </p>
<p className="hidden 2xl:block 2xl:mt-4 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-xs 2xl:leading-4" dir="auto">
  Registration No. {brand.registration}
</p>
                      </div>
                    </div>
                    <div className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n2137">
                      <a className="hidden 2xl:w-10 2xl:h-10 2xl:flex 2xl:relative 2xl:pt-1 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:overflow-clip 2xl:text-primary 2xl:cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 max-lg:after:hidden" data-cid="n2138" href="/#hero">
                        <div className="hidden 2xl:w-3 2xl:h-3 2xl:flex 2xl:relative 2xl:z-1 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip 2xl:transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] 2xl:origin-[6px_6px]" data-cid="n2139">
                          <div className="hidden 2xl:w-0.5 2xl:h-px 2xl:block 2xl:absolute 2xl:top-px 2xl:left-[0.5625rem] 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] 2xl:origin-[1px_0.5px]" data-cid="n2140" aria-hidden="true">
                            <div className="hidden 2xl:h-full 2xl:block" data-cid="n2141">
                              <Icon27 cid={"n2142"} />
                            </div>
                          </div>
                          <div className="hidden 2xl:w-3 2xl:h-3 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n2143" aria-hidden="true">
                            <div className="hidden 2xl:h-full 2xl:block" data-cid="n2144">
                              <Icon28 cid={"n2145"} />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="hidden 2xl:w-304 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0" data-cid="n2146">
                    <div className="hidden 2xl:w-[41.8rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-25" data-cid="n2147">
                      <div className="hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-6" data-cid="n2148">
                        <div className="hidden 2xl:w-[4.55rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n2149">
                          <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n2150" dir="auto">
                            Navigation
                          </p>
                        </div>
                        <div className="hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-2" data-cid="n2151">
                          {Tile3_data.map((d, i) => <Tile3 key={i} d={d} cids={Tile3_cids[i]} styles={Tile3_styles[i]} />)}
                        </div>
                      </div>
                      <div className="hidden 2xl:w-124 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-6" data-cid="n2173">
                        <div className="hidden 2xl:w-[3.7rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n2174">
                          <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n2175" dir="auto">
                            Solutions
                          </p>
                        </div>
                        <div className="hidden 2xl:w-50 2xl:flex 2xl:relative 2xl:min-w-50 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-2" data-cid="n2176">
                          {Tile4_data.map((d, i) => <Tile4 key={i} d={d} cids={Tile4_cids[i]} styles={Tile4_styles[i]} />)}
                        </div>
                      </div>
                    </div>
                    <div className="hidden 2xl:w-[34.2rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-6 2xl:overflow-clip" data-cid="n2189">
                      <div className="hidden 2xl:w-2 2xl:block 2xl:relative 2xl:z-0 2xl:self-stretch 2xl:shrink-0" data-cid="n2190">
                        <div className="hidden 2xl:w-2 2xl:h-[13.075rem] 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-color-001 2xl:shadow-[var(--surface-3)_0px_0px_0px_1px_inset]" data-cid="n2191" aria-hidden="true">
                          <div className="hidden 2xl:w-13 2xl:h-[15.825rem] 2xl:block 2xl:absolute 2xl:-top-5.5 2xl:-left-5.5 2xl:[background-position:-0.558143px_-0.558143px] 2xl:[animation-name:hatchMove\_ris] 2xl:[animation-duration:1.5s] 2xl:[animation-timing-function:linear] 2xl:[animation-iteration-count:infinite] 2xl:pointer-events-none" data-cid="n2192" />
                        </div>
                      </div>
                      <div className="hidden 2xl:w-[32.2rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-10 2xl:overflow-clip" data-cid="n2193">
<div className="hidden 2xl:w-[32.2rem] 2xl:flex 2xl:relative 2xl:max-w-125 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n2194">
  <h3 className="hidden 2xl:block 2xl:text-surface 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[2rem] 2xl:font-medium 2xl:leading-[2.375rem] 2xl:tracking-[-0.3px] 2xl:text-balance" data-cid="n2195" dir="auto">
    {"Corporate "}
    <span className="hidden 2xl:inline 2xl:text-color-002" data-cid="n2196">address</span>
  </h3>
</div>
<address className="hidden 2xl:block 2xl:not-italic 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem]">
  <span className="hidden 2xl:block 2xl:font-semibold">{brand.name}</span>
  {brand.addressLines.map((line) => (
    <span key={line} className="hidden 2xl:block">{line}</span>
  ))}
</address>
<p className="hidden 2xl:block 2xl:max-w-125 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem]" dir="auto">
  {finalCta.body}
</p>
<a className="hidden 2xl:inline-flex 2xl:w-fit 2xl:items-center 2xl:gap-2 2xl:text-accent 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:font-semibold 2xl:leading-[1.625rem] 2xl:underline 2xl:underline-offset-4 2xl:cursor-pointer" href="/contact">
  Start a Project &rarr;
</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden 2xl:w-384 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-8 2xl:overflow-clip" data-cid="n2217">
                  <div className="hidden 2xl:w-full 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n2218">
                    <div className="hidden 2xl:w-384 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n2219">
                      <div className="hidden 2xl:w-4 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface-2" data-cid="n2220" />
                      <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface-3" data-cid="n2221" />
                      <div className="hidden 2xl:w-4 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface-2" data-cid="n2222" />
                    </div>
                  </div>
                  <div className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-between 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip" data-cid="n2223">
                    <div className="hidden 2xl:w-[551.7px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n2224">
                      <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n2225" dir="auto">
                        © 2026 ENERGEX Global Solutions. All rights reserved.
                      </p>
                    </div>
                    <div className="hidden 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-8" data-cid="n2226">
                      <div className="hidden 2xl:w-auto 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-nowrap" data-cid="n2227">
                        <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n2228" dir="auto">
                          <a className="hidden 2xl:inline 2xl:text-background 2xl:cursor-pointer" data-cid="n2229" href="/terms">
                            Terms of Use
                          </a>
                        </p>
                      </div>
                      <div className="hidden 2xl:w-auto 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-nowrap" data-cid="n2230">
                        <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n2231" dir="auto">
                          <a className="hidden 2xl:inline 2xl:text-background 2xl:cursor-pointer" data-cid="n2232" href="/privacy">
                            Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="hidden 2xl:w-[551.7px] 2xl:flex 2xl:relative 2xl:justify-end 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-4 2xl:overflow-clip" data-cid="n2237">
                      {Logo2_data.map((d, i) => <Logo2 key={i} d={d} cids={Logo2_cids[i]} styles={Logo2_styles[i]} />)}
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <div className="contents 2xl:hidden" data-cid="n2258">
              <footer className="flex relative flex-col justify-start items-center content-center overflow-clip bg-color-001 2xl:hidden" data-cid="n2259">
                <div className="w-full flex relative max-w-400 pt-37.5 pb-8 px-8 flex-col justify-start items-start content-start shrink-0 gap-37.5 max-lg:pt-18 max-lg:pb-6 max-lg:px-6 max-lg:gap-18 2xl:hidden" data-cid="n2260">
                  <CorporateFooterSection />
                  <div className="w-304 flex relative flex-col justify-start items-start content-start shrink-0 gap-8 overflow-clip max-md:w-[20.4375rem] max-lg:gap-6 md:max-lg:w-180 2xl:hidden" data-cid="n2350">
                    <div className="w-full block relative shrink-0 2xl:hidden" data-cid="n2351">
                      <div className="flex relative justify-start items-center content-center 2xl:hidden" data-cid="n2352">
                        <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-2 2xl:hidden" data-cid="n2353" />
                        <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-3 2xl:hidden" data-cid="n2354" />
                        <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-2 2xl:hidden" data-cid="n2355" />
                      </div>
                    </div>
                    <div className="w-full flex relative justify-between items-center content-center shrink-0 overflow-clip max-lg:flex-col max-lg:justify-start max-lg:gap-6 2xl:hidden" data-cid="n2356">
                      <div className="w-[391.7px] flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:hidden" data-cid="n2357">
                        <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] max-lg:text-center 2xl:hidden" data-cid="n2358" dir="auto">
                          © 2026 ENERGEX Global Solutions. All rights reserved.
                        </p>
                      </div>
                      <div className="w-[35.5%] flex relative justify-center items-center content-center shrink-0 gap-8 max-lg:w-full max-lg:grid max-lg:gap-6 max-lg:[grid-auto-rows:minmax(0px,_1fr)] max-lg:grid-cols-2 max-lg:[align-items:initial] max-lg:[align-content:initial] 2xl:hidden" data-cid="n2359">
                        <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-nowrap max-lg:[align-self:start] max-lg:whitespace-normal 2xl:hidden" data-cid="n2360">
                          <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] max-lg:text-center 2xl:hidden" data-cid="n2361" dir="auto">
                            <a className="inline text-background cursor-pointer 2xl:hidden hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)]" data-cid="n2362" data-component="link" href="/terms">
                              Terms of Use
                            </a>
                          </p>
                        </div>
                        <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-nowrap max-lg:[align-self:start] max-lg:whitespace-normal 2xl:hidden" data-cid="n2363">
                          <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] max-lg:text-center 2xl:hidden" data-cid="n2364" dir="auto">
                            <a className="inline text-background cursor-pointer 2xl:hidden hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-cid="n2365" data-component="link" href="/privacy">
                              Privacy Policy
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="w-[32%] flex relative justify-end items-center content-center grow shrink-0 basis-0 gap-4 overflow-clip max-lg:w-full max-lg:justify-between max-lg:grow-[initial] max-lg:basis-[initial] max-lg:gap-[initial] 2xl:hidden" data-cid="n2370">
                        {Logo3_data.map((d, i) => <Logo3 key={i} d={d} cids={Logo3_cids[i]} styles={Logo3_styles[i]} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div className="block" data-cid="n2391" id="template-overlay" />
      </div>
      {" "}
    </>
  );
}
