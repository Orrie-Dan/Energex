import CardGridSection from "./sections/card-grid-section";
import CardGridSection7 from "./sections/card-grid-section7";
import SubscribeToOurSection from "./sections/subscribe-to-our-section";
import Logo, { type LogoData } from "./components/logo";
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
import MediaCard, { type MediaCardData } from "./components/media-card";
import MediaCard2, { type MediaCard2Data } from "./components/media-card2";
import FeatureCard2, { type FeatureCard2Data } from "./components/feature-card2";
import Icon8 from "./svgs/svg-icon8";
import Icon9 from "./svgs/svg-icon9";
import Icon10 from "./svgs/svg-icon10";
import Icon11 from "./svgs/svg-icon11";
import MediaTile, { type MediaTileData } from "./components/media-tile";
import Icon18 from "./svgs/svg-icon18";
import Icon19 from "./svgs/svg-icon19";
import MediaTile2, { type MediaTile2Data } from "./components/media-tile2";
import Icon20 from "./svgs/svg-icon20";
import Icon21 from "./svgs/svg-icon21";
import Icon22 from "./svgs/svg-icon22";
import Icon23 from "./svgs/svg-icon23";
import Icon24 from "./svgs/svg-icon24";
import Icon25 from "./svgs/svg-icon25";
import Icon26 from "./svgs/svg-icon26";
import Illustration from "./svgs/svg-illustration";
import Icon27 from "./svgs/svg-icon27";
import Icon28 from "./svgs/svg-icon28";
import Tile3, { type Tile3Data } from "./components/tile3";
import Tile4, { type Tile4Data } from "./components/tile4";
import Icon29 from "./svgs/svg-icon29";
import Icon30 from "./svgs/svg-icon30";
import Logo2, { type Logo2Data } from "./components/logo2";
import Logo3, { type Logo3Data } from "./components/logo3";
import WhyCarousel from "./components/why-carousel";
import FaqAccordion from "./components/faq-accordion";
import { Logo_cids, Tile_cids, FeatureCard_cids, Tile2_cids, MediaCard_cids, MediaCard2_cids, FeatureCard2_cids, MediaTile_cids, MediaTile_cids2, MediaTile_cids3, MediaTile2_cids, MediaTile2_cids2, MediaTile2_cids3, Tile3_cids, Tile4_cids, Logo2_cids, Logo3_cids } from "./_cids";
import { Logo_styles, Tile_styles, FeatureCard_styles, Tile2_styles, MediaCard_styles, MediaCard2_styles, FeatureCard2_styles, Tile3_styles, Tile4_styles, Logo2_styles, Logo3_styles } from "./_styles";

const Logo_data: LogoData[] = [
    { height: "1200", imgSrc: "/assets/cloned/images/ad1430f14707.png", srcSet: "/assets/cloned/images/9b084a4f1aa9.png 512w, /assets/cloned/images/455959fc7437.png 1024w, /assets/cloned/images/ad1430f14707.png 1600w", width: "1600" },
    { height: "750", imgSrc: "/assets/cloned/images/d04527adf534.png", srcSet: "/assets/cloned/images/57f4e99fe91a.png 512w, /assets/cloned/images/d04527adf534.png 1000w", width: "1000" },
    { height: "750", imgSrc: "/assets/cloned/images/8e2e02f7d795.png", srcSet: "/assets/cloned/images/1a7c9e372d19.png 512w, /assets/cloned/images/8e2e02f7d795.png 1000w", width: "1000" },
    { height: "750", imgSrc: "/assets/cloned/images/e59285bfe68a.png", srcSet: "/assets/cloned/images/e777b4e3cae7.png 512w, /assets/cloned/images/e59285bfe68a.png 1000w", width: "1000" }
];
const Tile_data: TileData[] = [
    { href: "/solutions", description: "Solutions" },
    { href: "/industries", description: "Industries" },
    { href: "/about", description: "About" },
    { href: "/projects", description: "Projects" },
    { href: "/contact", description: "Contact" }
];
const FeatureCard_data: FeatureCardData[] = [
    { href: "/solutions", title: "Solutions", description: "Solutions" },
    { href: "/industries", title: "Industries", description: "Industries" },
    { href: "/about", title: "About", description: "About" },
    { href: "/projects", title: "Projects", description: "Projects" },
    { href: "/contact", title: "Contact", description: "Contact" }
];
const Tile2_data: Tile2Data[] = [
    { href: "/solutions", description: "Solutions" },
    { href: "/industries", description: "Industries" },
    { href: "/about", description: "About" },
    { href: "/projects", description: "Projects" },
    { href: "/contact", description: "Contact" }
];
const MediaCard_data: MediaCardData[] = [
    { href: "/solutions", title: "Power & Generation", title2: "Power & Generation", description: "Power generation, LNG & gas-to-power, and floating power solutions.", title3: "Power generation, LNG & gas-to-power, and floating power solutions.", height: "600", imgSrc: "/assets/energex/power.webp", srcSet: "/assets/energex/power.webp 800w", width: "800", title4: "Power generation, LNG & gas-to-power, and floating power solutions.", height2: "600", imgSrc2: "/assets/energex/power.webp", srcSet2: "/assets/energex/power.webp 800w", width2: "800" },
    { href: "/solutions", title: "Renewables & Storage", title2: "Renewables & Storage", description: "Renewable energy systems and battery energy storage for flexible supply.", title3: "Renewable energy systems and battery energy storage for flexible supply.", height: "600", imgSrc: "/assets/energex/renewables.webp", srcSet: "/assets/energex/renewables.webp 800w", width: "800", title4: "Renewable energy systems and battery energy storage for flexible supply.", height2: "600", imgSrc2: "/assets/energex/renewables.webp", srcSet2: "/assets/energex/renewables.webp 800w", width2: "800" },
    { href: "/solutions", title: "Grid & Distributed Energy", title2: "Grid & Distributed Energy", description: "Grid infrastructure, rural electrification, distributed energy and e-mobility.", title3: "Grid infrastructure, rural electrification, distributed energy and e-mobility.", height: "600", imgSrc: "/assets/energex/grid.webp", srcSet: "/assets/energex/grid.webp 800w", width: "800", title4: "Grid infrastructure, rural electrification, distributed energy and e-mobility.", height2: "600", imgSrc2: "/assets/energex/grid.webp", srcSet2: "/assets/energex/grid.webp 800w", width2: "800" },
    { href: "/solutions", title: "Project Delivery & Lifecycle", title2: "Project Delivery & Lifecycle", description: "Development, procurement, EPC, financing support, O&M and digital energy.", title3: "Development, procurement, EPC, financing support, O&M and digital energy.", height: "600", imgSrc: "/assets/energex/investment.webp", srcSet: "/assets/energex/investment.webp 800w", width: "800", title4: "Development, procurement, EPC, financing support, O&M and digital energy.", height2: "600", imgSrc2: "/assets/energex/investment.webp", srcSet2: "/assets/energex/investment.webp 800w", width2: "800" }
];
const MediaCard2_data: MediaCard2Data[] = [
    { ariahidden: true, icon: <>
              <use href="#3754084069" />
              </>, title: "Innovation & Efficiency", description: "We improve systems and workflows to maximize efficiency" },
    { ariahidden: false, icon: <>
              <use href="#967363847" />
              </>, title: "Industry Expertise", description: "Decades of experience delivering consistent results in complex environments." },
    { ariahidden: false, icon: <>
              <use href="#3306108000" />
              </>, title: "Tailored Scalability", description: "Custom-built solutions that evolve with your operations." },
    { ariahidden: false, icon: <>
              <use href="#2813894442" />
              </>, title: "Precision Execution", description: "Timely delivery backed by efficient workflows and expert teams." },
    { ariahidden: true, icon: <>
              <use href="#3022238965" />
              </>, title: "Built on Safety & Quality", description: "Committed to the highest standards in every project we deliver." }
];
const FeatureCard2_data: FeatureCard2Data[] = [
    { title: "1", title2: "MW", description: "From", description2: "Distributed", title3: "1", title4: "MW", description3: "From", description4: "Distributed" },
    { title: "1", title2: "GW+", description: "To Utility", description2: "Scale", title3: "1", title4: "GW+", description3: "To Utility", description4: "Scale" },
    { title: "Full", title2: "", description: "Lifecycle", description2: "Coverage", title3: "Full", title4: "", description3: "Lifecycle", description4: "Coverage" }
];
const MediaTile_data: MediaTileData[] = [
    { description: "Initial consultation and needs assessment" },
    { description: "Basic workflow optimization" },
    { description: "Performance recommendations" },
    { description: "Email support" }
];
const MediaTile_data2: MediaTileData[] = [
    { description: "Full operational analysis" },
    { description: "Custom optimization strategy" },
    { description: "Process automation recommendations" },
    { description: "Priority email & chat supportl support" }
];
const MediaTile_data3: MediaTileData[] = [
    { description: "Full system implementation" },
    { description: "Dedicated project team" },
    { description: "Advanced engineering solutions" },
    { description: "24/7 priority support" }
];
const MediaTile2_data: MediaTile2Data[] = [
    { description: "Initial consultation and needs assessment" },
    { description: "Basic workflow optimization" },
    { description: "Performance recommendations" },
    { description: "Email support" }
];
const MediaTile2_data2: MediaTile2Data[] = [
    { description: "Full operational analysis" },
    { description: "Custom optimization strategy" },
    { description: "Process automation recommendations" },
    { description: "Priority email & chat supportl support" }
];
const MediaTile2_data3: MediaTile2Data[] = [
    { description: "Full system implementation" },
    { description: "Dedicated project team" },
    { description: "Advanced engineering solutions" },
    { description: "24/7 priority support" }
];
const MediaCard4_data: { title: string; description: string }[] = [
    { title: "What does ENERGEX Global Solutions do?", description: "Energex is an integrated energy solutions platform providing clients with a single commercial and technical interface across development, engineering, procurement, EPC delivery, financing support, operations and long-term asset management." },
    { title: "How does Energex deliver energy projects?", description: "Energex acts as integrator: specialist OEMs, EPC contractors, engineering firms and other partners may execute defined packages while Energex retains the client interface, project integration and commercial coordination." },
    { title: "Does Energex work with both conventional and renewable energy?", description: "Yes. The operating model is technology-agnostic. Conventional generation, renewables, storage, grid infrastructure, LNG and gas-to-power, distributed energy, e-mobility and digital systems are configured around each project's needs." },
    { title: "Can Energex support project financing?", description: "Energex supports project structuring and investor/lender coordination and may selectively participate through project SPVs. Energex does not automatically finance client projects and is not a bank." },
    { title: "Does Energex provide operations and maintenance?", description: "Yes. Depending on the commercial model, Energex can support O&M, monitoring, warranty coordination and long-term asset management through the operating phase." },
    { title: "What types of clients does Energex work with?", description: "Governments and utilities, independent power producers, mining and heavy industry, industrial parks and data centers, oil & gas / LNG, commercial and real estate, fleet operators, and development institutions." }
];
const WhyCarousel_slides = [
    { title: "One Integrated Interface", description: "One commercial and technical interface across the project lifecycle.", icon: <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full text-background" aria-hidden="true"><use href="#3754084069" /></svg> },
    { title: "Technology Agnostic", description: "Solutions configured around project requirements rather than a single technology.", icon: <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full text-background" aria-hidden="true"><use href="#967363847" /></svg> },
    { title: "Global Sourcing", description: "Qualified OEMs, engineering partners and supply-chain coordination.", icon: <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full text-background" aria-hidden="true"><use href="#3306108000" /></svg> },
    { title: "Flexible Delivery", description: "Developer, advisor, supplier, EPC integrator, owner's representative, operator or asset manager depending on the project.", icon: <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full text-background" aria-hidden="true"><use href="#2813894442" /></svg> },
    { title: "Lifecycle Focus", description: "From initial requirement through commercial operation, monitoring, optimization and expansion.", icon: <svg viewBox="0 0 200 200" fill="currentColor" className="h-full w-full text-background" aria-hidden="true"><use href="#3022238965" /></svg> }
];
const Tile3_data: Tile3Data[] = [
    { href: "/", description: "Home" },
    { href: "/about", description: "About" },
    { href: "/solutions", description: "Solutions" },
    { href: "/industries", description: "Industries" },
    { href: "/projects", description: "Projects" },
    { href: "/contact", description: "Contact" },
    { href: "/privacy", description: "Privacy" }
];
const Tile4_data: Tile4Data[] = [
    { href: "/solutions", description: "Power Generation" },
    { href: "/solutions", description: "Renewable Energy" },
    { href: "/solutions", description: "Energy Storage" },
    { href: "/solutions", description: "E-Mobility" }
];
const Logo2_data: Logo2Data[] = [
    { href: "https://x.com/", icon: <>
            <use href="#svg1697944008_465" />
            </> },
    { href: "https://www.instagram.com/", icon: <>
            <use href="#svg1142650918_2497" />
            </> },
    { href: "https://www.facebook.com/", icon: <>
            <use href="#svg196919569_483" />
            </> },
    { href: "https://www.linkedin.com/", icon: <>
            <use href="#svg-1791685465_687" />
            </> },
    { href: "https://www.youtube.com/", icon: <>
            <use href="#svg-474446846_984" />
            </> }
];
const Logo3_data: Logo3Data[] = [
    { href: "https://x.com/", icon: <>
            <use href="#svg1697944008_465" />
            </> },
    { href: "https://www.instagram.com/", icon: <>
            <use href="#svg1142650918_2497" />
            </> },
    { href: "https://www.facebook.com/", icon: <>
            <use href="#svg196919569_483" />
            </> },
    { href: "https://www.linkedin.com/", icon: <>
            <use href="#svg-1791685465_687" />
            </> },
    { href: "https://www.youtube.com/", icon: <>
            <use href="#svg-474446846_984" />
            </> }
];

export default function Page() {
  return (
    <>
      <div className="block" data-cid="n1" id="main">
        <div className="h-[904.225rem] min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-background max-md:h-[14575.1px] md:max-lg:h-[15449.5px] 2xl:h-[15248.5px]" data-cid="n2">
          <div className="w-35 h-[10.6625rem] block fixed right-5 bottom-15 z-10 min-w-0 shrink-0 order-[-1000]" data-cid="n3">
            <div className="flex relative flex-col justify-center items-center content-center gap-0.5" data-cid="n4">
              <div className="w-4 h-4 flex absolute -top-2 -right-2 z-1 min-w-0 rounded-4xl justify-center items-center content-center shrink-0 gap-2.5 bg-background shadow-[var(--clr-0)_0px_2px_6px_0px] cursor-pointer" data-cid="n5">
                <div className="w-3 block relative z-1 shrink-0 aspect-square bg-foreground" style={{ maskImage: "url(\"data:image/svg+xml,<svg display=\\\"block\\\" role=\\\"presentation\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M 14 1.41 L 12.59 0 L 7 5.59 L 1.41 0 L 0 1.41 L 5.59 7 L 0 12.59 L 1.41 14 L 7 8.41 L 12.59 14 L 14 12.59 L 8.41 7 Z\\\" fill=\\\"var(--esondr, var(--foreground))\\\" height=\\\"14px\\\" id=\\\"tANCHQdDU\\\" transform=\\\"translate(5 5)\\\" width=\\\"14px\\\"/></svg>\"), none" }} data-cid="n6" />
              </div>
              <div className="block relative shrink-0" data-cid="n7" data-name="All Templates">
                <a className="w-35 h-[8.0375rem] flex relative rounded-lg flex-col justify-center items-center content-center overflow-clip text-primary bg-foreground cursor-pointer" data-cid="n8" data-component="link" href="https://buy.polar.sh/polar_cl_7sl7ZO5dvseRChpONuMm0ystujjz5p0aYF3WU4Lpe5V" data-name="All Templates" target="_blank">
                  <div className="w-full flex relative pt-2 px-2 justify-center items-center content-center shrink-0" data-cid="n9">
                    <div className="w-31 flex relative opacity-50 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word]" data-cid="n10">
                      <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-medium leading-[1.25rem] tracking-[-0.28px] text-center" data-cid="n11" dir="auto">
                        ALL ACCESS
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[6.3125rem] flex relative p-2 justify-center items-center content-center shrink-0 group" data-cid="n12">
                    <div className="w-10 h-10 flex absolute z-8 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip" data-cid="n13" />
                    <div className="basis-0 shrink-0 h-full block relative grow" data-cid="n14">
                      <div className="w-31 h-[5.3125rem] flex relative rounded-md flex-col justify-center items-center content-center overflow-hidden bg-background group" data-cid="n15">
                        {Logo_data.map((d, i) => <Logo key={i} d={d} cids={Logo_cids[i]} styles={Logo_styles[i]} />)}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="block relative shrink-0" data-cid="n28">
                <a className="w-35 h-10 flex relative rounded-lg justify-center items-center content-center overflow-clip text-primary bg-foreground cursor-pointer" data-cid="n29" data-component="link" href="https://buy.polar.sh/polar_cl_wPE4AfShYflc1w8gJxJyDqmF3lEKu4LNhCxeR2vjj4Q" target="_blank">
                  <div className="w-[5.75rem] flex relative justify-center items-center content-center shrink-0 gap-2.5 overflow-clip" data-cid="n30">
                    <div className="w-[5.75rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap" data-cid="n31">
                      <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-medium leading-[0.9375rem] tracking-[-0.28px] text-center" data-cid="n32" dir="auto">
                        Buy it for $129
                      </p>
                    </div>
                    <div className="w-[5.75rem] h-full flex absolute top-[1.1875rem] left-[2.875rem] z-1 opacity-50 min-w-0 flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix(1,0,0,1,-46.0391,0)]" data-cid="n33">
                      <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-medium leading-[0.9375rem] tracking-[-0.28px] text-center" data-cid="n34" dir="auto">
                        Buy it for $129
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="contents min-w-0 transform-[none] 2xl:w-405 2xl:h-23 2xl:block 2xl:fixed 2xl:top-0 2xl:left-0 2xl:z-10 2xl:shrink-0 2xl:order-[-999] 2xl:transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)] 2xl:origin-[810px_46px]" data-cid="n35">
            <nav className="hidden 2xl:w-405 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:overflow-clip" data-cid="n36" data-name="Navigation top">
              <div className="hidden 2xl:basis-0 2xl:shrink-0 2xl:flex 2xl:relative 2xl:p-8 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:grow 2xl:gap-16" data-cid="n37">
                <div className="hidden 2xl:w-[8.6625rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-0" data-cid="n38">
                  <div className="hidden 2xl:w-[8.6625rem] 2xl:h-7 2xl:block 2xl:relative 2xl:z-1 2xl:shrink-0" data-cid="n39">
                    <a className="hidden 2xl:h-7 2xl:block 2xl:relative 2xl:aspect-[4.95/1] 2xl:text-primary 2xl:cursor-pointer" data-cid="n40" href="/">
                      <div className="hidden 2xl:w-[8.6625rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0" data-cid="n41">
                        <img className="hidden 2xl:w-full 2xl:h-7 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_396/80]" data-cid="n42" alt="" height="80" src="/assets/energex/logo-cropped.png" width="396" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hidden 2xl:w-[79.0875rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-8 2xl:overflow-clip" data-cid="n43">
                  {Tile_data.map((d, i) => <Tile key={i} d={d} cids={Tile_cids[i]} styles={Tile_styles[i]} />)}
                </div>
                <div className="hidden 2xl:w-6 2xl:block 2xl:relative 2xl:shrink-0 2xl:aspect-square 2xl:cursor-pointer" data-cid="n69">
                  <div className="hidden 2xl:h-full 2xl:flex 2xl:rounded-[10px] 2xl:overflow-hidden" data-cid="n70">
                    <button className="hidden 2xl:w-full 2xl:flex 2xl:rounded-[10px] 2xl:justify-center 2xl:items-center 2xl:text-center" data-cid="n71" aria-label="Search Icon">
                      <Icon cid={"n72"} />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            <div className="h-23 block fixed right-75 left-0 z-10 shrink-0 order-[-999] transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)] origin-[490px_46px] max-lg:h-15 max-lg:right-0 max-md:origin-[187.5px_30px] md:max-lg:origin-[384px_30px] 2xl:hidden" data-cid="n73" data-name="Navigation top" data-ditto-mobile-nav>
              <nav className="h-full flex relative justify-start items-center content-center overflow-clip 2xl:hidden" data-cid="n74" data-component="nav" data-name="Navigation top">
                <div className="basis-0 shrink-0 h-full flex relative p-8 justify-start items-center content-center grow gap-16 max-lg:py-4 max-lg:px-6 max-lg:flex-col max-lg:gap-20 max-lg:bg-color-001 2xl:hidden" data-cid="n75">
                  <div className="w-[15%] flex relative justify-start items-center content-center shrink-0 max-lg:w-full max-lg:justify-between 2xl:hidden" data-cid="n76">
                    <div className="w-[8.6625rem] h-7 block relative z-1 shrink-0 2xl:hidden" data-cid="n77">
                      <a className="h-7 block relative aspect-[4.95/1] text-primary cursor-pointer 2xl:hidden" data-cid="n78" data-component="link" href="/">
                        <div className="w-[8.6625rem] h-full block absolute top-0 2xl:hidden" data-cid="n79">
                          <img className="hidden lg:block w-full h-7 overflow-clip object-cover aspect-[auto_396/80] 2xl:hidden" data-cid="n80" data-component="image" alt="ENERGEX" height="80" src="/assets/energex/logo-cropped.png" width="396" />
                          <img className="block lg:hidden w-full h-7 overflow-clip object-cover aspect-[auto_396/80]" data-cid="n80b" alt="ENERGEX" height="80" src="/assets/energex/logo-on-dark-cropped.png" width="396" />
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
                  <div className="w-6 block relative shrink-0 aspect-square cursor-pointer max-lg:order-[3] 2xl:hidden" data-cid="n116">
                    <div className="h-6 flex rounded-[10px] overflow-hidden 2xl:hidden" data-cid="n117">
                      <button className="w-full h-6 flex rounded-[10px] justify-center items-center text-center 2xl:hidden" data-cid="n118" data-component="button" aria-label="Search Icon">
                        <Icon2 cid={"n119"} />
                      </button>
                    </div>
                  </div>
                  <div className="hidden max-lg:w-full max-lg:block max-lg:relative max-lg:shrink-0 max-lg:order-[2]" data-cid="n120" data-ditto-mobile-panel>
                    <a className="hidden max-lg:h-16 max-lg:flex max-lg:relative max-lg:p-6 max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-clip max-lg:bg-accent max-lg:cursor-pointer" data-cid="n121">
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
                      <div className="hidden max-lg:w-6 max-lg:h-6 max-lg:flex max-lg:absolute max-lg:top-[0.4375rem] max-lg:right-2.5 max-lg:z-1 max-lg:min-w-0 max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5 max-lg:overflow-clip" data-cid="n127">
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
          <div className="h-16 block fixed top-182 inset-x-0 z-10 opacity-0 min-w-0 shrink-0 order-[-998] transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,80,0,1)] origin-[640px_32px] max-lg:hidden" data-cid="n134" data-name="Navigation bottom" data-ditto-nav-bottom aria-hidden="true">
            <nav className="flex relative justify-center items-center content-center overflow-clip max-lg:hidden" data-cid="n135" data-component="nav" data-name="Navigation bottom">
              <div className="w-[55.25rem] flex relative pl-4 justify-start items-center content-center shrink-0 gap-5 bg-color-001 max-lg:hidden" data-cid="n136">
                <div className="w-[8.6625rem] flex relative justify-start items-center content-center shrink-0 max-lg:hidden" data-cid="n137">
                  <div className="w-[8.6625rem] h-7 block relative z-1 shrink-0 max-lg:hidden" data-cid="n138">
                    <a className="h-7 block relative aspect-[4.95/1] text-primary cursor-pointer max-lg:hidden" data-cid="n139" data-component="link" href="/">
                      <div className="w-[8.6625rem] h-full block absolute top-0 max-lg:hidden" data-cid="n140">
                        <img className="w-full h-7 block overflow-clip object-cover aspect-[auto_396/80] max-lg:hidden" data-cid="n141" data-component="image" alt="" height="80" src="/assets/energex/logo-on-dark-cropped.png" width="396" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-[445.3px] flex relative px-5 justify-start items-center content-center shrink-0 gap-8 overflow-clip max-lg:hidden" data-cid="n142">
                  {Tile2_data.map((d, i) => <Tile2 key={i} d={d} cids={Tile2_cids[i]} styles={Tile2_styles[i]} />)}
                </div>
                <div className="w-6 block relative shrink-0 aspect-square cursor-pointer max-lg:hidden" data-cid="n168">
                  <div className="h-full flex rounded-[10px] overflow-hidden max-lg:hidden" data-cid="n169">
                    <button className="w-full h-6 flex rounded-[10px] justify-center items-center text-center max-lg:hidden" data-cid="n170" data-component="button" aria-label="Search Icon">
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
                    <div className="w-38 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:hidden" data-cid="n177">
                      <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base font-semibold leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" data-cid="n178" dir="auto">
                        Start a Project
                      </p>
                    </div>
                    <div className="w-6 h-6 flex absolute top-[0.4375rem] right-2.5 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:hidden" data-cid="n179">
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
              <header className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip bg-surface" data-cid="n188" id="hero">
                <CardGridSection />
              </header>
              <section className="w-full flex relative flex-col justify-center items-center content-center shrink-0 overflow-clip" data-cid="n354">
                <div className="w-full h-[56.25rem] flex sticky top-0 z-1 flex-col justify-start items-center content-center shrink-0 overflow-clip bg-muted-foreground max-md:h-[16.825rem] max-lg:top-14 max-lg:aspect-[1.39286/1] md:max-lg:h-[34.4625rem] 2xl:h-270" data-cid="n355" data-reveal="media">
                  <div className="w-full h-full flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip" data-cid="n356">
                    <div className="w-full h-[56.25rem] block relative grow shrink-0 basis-0 transform-[matrix(1.3875,0,0,1.3875,0,0)] origin-[640px_450px] max-md:h-[16.825rem] max-md:transform-[matrix(1.36617,0,0,1.36617,0,0)] max-md:origin-[187.5px_134.609px] md:max-lg:h-[34.4625rem] md:max-lg:transform-[matrix(1.1725,0,0,1.1725,0,0)] md:max-lg:origin-[384px_275.688px] 2xl:h-270 2xl:transform-[matrix(1.3,0,0,1.3,0,0)] 2xl:origin-[960px_540px]" data-cid="n357">
                      <video className="w-full h-[56.25rem] block overflow-clip object-cover max-md:h-[16.8125rem] md:max-lg:h-[34.4375rem] 2xl:h-270" data-cid="n358" src="/assets/cloned/videos/9b66c259c486.mp4" autoPlay muted loop playsInline preload="auto" />
                    </div>
                  </div>
                </div>
                <div className="w-full flex relative z-2 flex-col justify-start items-center content-center shrink-0 overflow-clip bg-muted-foreground" data-cid="n359">
                  <div className="w-full flex relative max-w-400 py-37.5 px-8 justify-start items-start content-start shrink-0 gap-25 overflow-clip max-lg:py-18 max-lg:px-6 max-lg:flex-col max-lg:gap-10 max-lg:max-w-none" data-cid="n360">
                    <div className="w-full max-w-100 h-125 flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-12 max-md:h-[27.05rem] max-lg:gap-8 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:h-[23.2rem]" data-cid="n361">
                      <div className="w-100 h-[26.85rem] flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-10 overflow-clip max-md:w-[20.4375rem] max-md:h-[23.65rem] max-lg:gap-8 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:h-[19.8rem]" data-cid="n362">
                        <div className="w-100 flex relative flex-col justify-start items-start content-start shrink-0 gap-4 max-md:w-[20.4375rem]" data-cid="n363">
                          <div className="contents min-w-0 2xl:w-100 2xl:h-[1.4rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n364">
                            <div className="w-full block relative shrink-0 2xl:flex 2xl:max-w-212.5 2xl:pr-2 2xl:pl-3 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:overflow-clip 2xl:shrink-[initial] after:content-[''] after:block after:absolute after:inset-0 after:w-100 after:h-[1.4rem] max-lg:after:hidden" data-cid="n365">
                              <div className="flex relative max-w-212.5 pr-2 pl-3 flex-col justify-start items-start content-start overflow-clip 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:max-w-none 2xl:px-0 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] after:content-[''] after:block after:absolute after:inset-0 after:h-[1.4rem] 2xl:after:hidden" data-cid="n366">
                                <p className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n367" dir="auto">
                                  <span className="hidden 2xl:inline-block" data-cid="n368">
                                    About
                                  </span>
                                  {" "}
                                  <span className="hidden 2xl:inline-block" data-cid="n369">
                                    Us
                                  </span>
                                </p>
                                <div className="w-[62.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden" data-cid="n370">
                                  <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" data-cid="n371" dir="auto">
                                    <span className="inline-block 2xl:hidden" data-cid="n372">
                                      About
                                    </span>
                                    {" "}
                                    <span className="inline-block 2xl:hidden" data-cid="n373">
                                      Us
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-100 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem]" data-cid="n374">
                            <h2 className="block text-clr-3 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]" data-cid="n375" data-component="heading" dir="auto">
                              <span className="inline text-background" data-cid="n376">
                                {"Driven by "}
                              </span>
                              {"Precision. "}
                              <span className="inline text-background" data-cid="n377">
                                {"Powered by "}
                              </span>
                              Experience.
                            </h2>
                          </div>
                        </div>
                        <div className="w-full h-10 block relative z-1 shrink-0" data-cid="n378">
                          <div className="h-10 min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-muted-foreground shadow-[var(--surface-3)_0px_0px_0px_1px_inset]" data-cid="n379" aria-hidden="true">
                            <div className="h-26.5 block absolute -top-[2.0625rem] -inset-x-[2.0625rem] [background-position:-5.64215px_-5.64215px] [animation-name:hatchMove\_R6pd8lb5dp] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-md:[background-position:-3.29455px_-3.29455px] md:max-lg:[background-position:-4.42083px_-4.42083px] 2xl:[background-position:-0.837214px_-0.837214px] 2xl:[animation-name:hatchMove\_reg]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface-3) 0px, var(--surface-3) 1px, var(--clr-2) 1px, var(--clr-2) 12px)" }} data-cid="n380" />
                          </div>
                        </div>
                        <div className="w-100 flex relative flex-col justify-start shrink-0 max-md:w-[20.4375rem]" data-cid="n381">
                          <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n382" dir="auto">
                            ENERGEX Global Solutions provides clients with a single commercial and technical interface across the full energy project lifecycle. From development and engineering to global procurement, EPC delivery, financing support, operations and long-term asset management, Energex coordinates the technologies and partners required around each project's needs.
                          </p>
                        </div>
                      </div>
                      <div className="contents min-w-0 2xl:w-[101.1px] 2xl:h-[1.4rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n383">
                        <a className="hidden 2xl:w-[101.1px] 2xl:h-[1.4rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:gap-3 2xl:overflow-clip 2xl:text-primary 2xl:cursor-pointer" data-cid="n384" href="/about">
                          <div className="hidden 2xl:w-[77.1px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word] 2xl:text-nowrap" data-cid="n385">
                            <p className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-left" data-cid="n386" dir="auto">
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
                          <a className="w-[101.1px] h-[1.4rem] flex relative justify-start items-center content-center gap-3 overflow-clip text-primary cursor-pointer max-lg:items-start max-lg:content-start 2xl:hidden" data-cid="n395" data-component="link" href="/about">
                            <div className="w-[77.1px] flex relative flex-col justify-start shrink-0 whitespace-pre [word-break:break-word] [overflow-wrap:break-word] text-nowrap 2xl:hidden" data-cid="n396">
                              <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-left 2xl:hidden" data-cid="n397" dir="auto">
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
                          <img className="hidden 2xl:w-full 2xl:h-125 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_1448/1086]" data-cid="n408" alt="Two construction workers in orange vests talking" height="1086" sizes="max((min(100vw, 1600px) - 164px) / 2, 1px)" src="/assets/cloned/images/bb82f83e2d40.png" srcSet="/assets/cloned/images/3eb6cb83302b.png 512w, /assets/cloned/images/d8683c6910d4.png 1024w, /assets/cloned/images/bb82f83e2d40.png 1448w" width="1448" />
                          <div className="h-full block absolute top-0 inset-x-0 2xl:hidden" data-cid="n409">
                            <img className="w-full h-125 block overflow-clip object-cover aspect-[auto_1448/1086] max-lg:h-60 2xl:hidden" data-cid="n410" data-component="image" alt="Two construction workers in orange vests talking" height="1086" sizes="max((min(100vw, 1600px) - 164px) / 2, 1px)" src="/assets/cloned/images/bb82f83e2d40.png" srcSet="/assets/cloned/images/3eb6cb83302b.png 512w, /assets/cloned/images/d8683c6910d4.png 1024w, /assets/cloned/images/bb82f83e2d40.png 1448w" width="1448" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full flex relative z-2 flex-col justify-start items-center content-center shrink-0 overflow-clip bg-background" data-cid="n411" data-reveal>
                <div className="h-full flex absolute top-0 inset-x-0 z-0 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-muted-foreground" data-cid="n412" />
                <div className="w-full max-w-400 flex relative py-37.5 px-8 flex-col justify-start items-start content-start shrink-0 gap-10 overflow-clip max-lg:py-18 max-lg:px-6 max-lg:gap-8" data-cid="n413">
                  <div className="w-304 flex relative flex-col justify-start items-start content-start shrink-0 gap-4 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-384" data-cid="n414" id="service-title">
                    <div className="contents min-w-0 2xl:w-384 2xl:h-[1.4rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n415">
                      <div className="w-full block relative shrink-0 2xl:flex 2xl:max-w-212.5 2xl:pr-2 2xl:pl-3 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:overflow-clip 2xl:shrink-[initial] after:content-[''] after:block after:absolute after:inset-0 after:w-212.5 after:h-[1.4rem] max-lg:after:hidden" data-cid="n416">
                        <div className="flex relative max-w-212.5 pr-2 pl-3 flex-col justify-start items-start content-start overflow-clip 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:max-w-none 2xl:px-0 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] after:content-[''] after:block after:absolute after:inset-0 after:h-[1.4rem] 2xl:after:hidden" data-cid="n417">
                          <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n418" dir="auto">
                            <span className="hidden 2xl:inline-block" data-cid="n419">
                              Services
                            </span>
                          </p>
                          <div className="w-[3.7rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden" data-cid="n420">
                            <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" data-cid="n421" dir="auto">
                              <span className="inline-block 2xl:hidden" data-cid="n422">
                                Services
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
                            Offer
                          </span>
                        </h2>
                      </div>
                      <div className="contents min-w-0 2xl:w-[6.5125rem] 2xl:h-[1.4rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n427">
                        <a className="hidden 2xl:w-[6.5125rem] 2xl:h-[1.4rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:gap-3 2xl:overflow-clip 2xl:text-primary 2xl:cursor-pointer" data-cid="n428" href="/solutions">
                          <div className="hidden 2xl:w-20 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word] 2xl:text-nowrap" data-cid="n429">
                            <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-left" data-cid="n430" dir="auto">
                              View All Solutions
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
                          <a className="w-[6.5125rem] h-[1.4rem] flex relative justify-start items-center content-center gap-3 overflow-clip text-primary cursor-pointer max-lg:items-start max-lg:content-start 2xl:hidden" data-cid="n439" data-component="link" href="/solutions">
                            <div className="w-20 flex relative flex-col justify-start shrink-0 whitespace-pre [word-break:break-word] [overflow-wrap:break-word] text-nowrap 2xl:hidden" data-cid="n440">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-left 2xl:hidden" data-cid="n441" dir="auto">
                                View All Solutions
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
                  {MediaCard_data.map((d, i) => <MediaCard key={i} d={d} cids={MediaCard_cids[i]} styles={MediaCard_styles[i]} />)}
                </div>
              </section>
              <section className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip bg-color-001" data-cid="n617" data-reveal>
                <div className="h-full block absolute top-0 inset-x-0 z-0 opacity-30 min-w-0 shrink-0" style={{ maskImage: "linear-gradient(var(--foreground) 48%, var(--clr-2) 100%)" }} data-cid="n618">
                  <div className="h-full block relative overflow-hidden" data-cid="n619">
                    <img className="w-320 h-239.5 block absolute opacity-10 [mix-blend-mode:overlay] overflow-clip aspect-[auto_800/800] max-md:w-[23.4375rem] max-md:h-195.5 md:max-lg:w-192 md:max-lg:h-339.5 2xl:w-480 2xl:h-274.5" data-cid="n620" height="800" src="/assets/cloned/images/f96b27607340.png" width="800" alt="" />
                  </div>
                </div>
                <div className="w-full max-w-400 flex relative py-37.5 px-8 flex-col justify-start items-start content-start shrink-0 gap-10 max-lg:pt-18 max-lg:pb-31 max-lg:px-6 max-lg:gap-8" data-cid="n621">
                  <div className="w-full max-w-125 flex relative flex-col justify-start items-start content-start shrink-0 gap-4" data-cid="n622">
                    <div className="contents min-w-0 2xl:w-125 2xl:h-[1.4rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n623">
                      <div className="w-full block relative shrink-0 2xl:flex 2xl:max-w-212.5 2xl:pr-2 2xl:pl-3 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:overflow-clip 2xl:shrink-[initial] after:content-[''] after:block after:absolute after:inset-0 after:w-125 after:h-[1.4rem] max-lg:after:hidden" data-cid="n624">
                        <div className="flex relative max-w-212.5 pr-2 pl-3 flex-col justify-start items-start content-start overflow-clip 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:max-w-none 2xl:px-0 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] after:content-[''] after:block after:absolute after:inset-0 after:h-[1.4rem] 2xl:after:hidden" data-cid="n625">
                          <p className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n626" dir="auto">
                            <span className="hidden 2xl:inline-block" data-cid="n627">
                              Why
                            </span>
                            {" "}
                            <span className="hidden 2xl:inline-block" data-cid="n628">
                              Choose
                            </span>
                            {" "}
                            <span className="hidden 2xl:inline-block" data-cid="n629">
                              Us
                            </span>
                          </p>
                          <div className="w-[6.7375rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden" data-cid="n630">
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" data-cid="n631" dir="auto">
                              <span className="inline-block 2xl:hidden" data-cid="n632">
                                Why
                              </span>
                              {" "}
                              <span className="inline-block 2xl:hidden" data-cid="n633">
                                Choose
                              </span>
                              {" "}
                              <span className="inline-block 2xl:hidden" data-cid="n634">
                                Us
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-125 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem]" data-cid="n635">
                      <h2 className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]" data-cid="n636" data-component="heading" dir="auto">
                        {"Built for "}
                        <span className="inline text-color-002" data-cid="n637">
                          Results
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="w-full block relative shrink-0 aspect-[2.272/1] max-lg:aspect-[0.682/1]" data-cid="n638">
                    <section className="hidden 2xl:h-full 2xl:flex 2xl:max-w-full 2xl:max-h-full 2xl:items-center 2xl:justify-items-center" data-cid="n639">
                      <div className="hidden 2xl:w-384 2xl:h-[42.25rem] 2xl:block 2xl:absolute 2xl:min-w-0" data-cid="n640">
                        <ul className="hidden 2xl:h-[42.25rem] 2xl:flex 2xl:max-w-full 2xl:max-h-full 2xl:items-center 2xl:justify-items-center 2xl:[list-style-type:none] 2xl:list-outside 2xl:transform-[matrix(1,0,0,1,-2560,0)] 2xl:cursor-grab" data-cid="n641">
                          {MediaCard2_data.map((d, i) => <MediaCard2 key={i} d={d} cids={MediaCard2_cids[i]} styles={MediaCard2_styles[i]} />)}
                        </ul>
                      </div>
                      <fieldset className="hidden 2xl:w-384 2xl:h-[42.25rem] 2xl:flex 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-[min-content] 2xl:justify-between 2xl:items-center 2xl:pointer-events-none" data-cid="n692" aria-label="Slideshow pagination controls">
                        <div className="hidden 2xl:w-21 2xl:h-10 2xl:flex 2xl:absolute 2xl:-top-20.5 2xl:right-0 2xl:min-w-0 2xl:justify-center 2xl:items-center 2xl:gap-1 2xl:pointer-events-none" data-cid="n693">
                          <button className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:justify-items-center 2xl:overflow-hidden 2xl:text-center 2xl:bg-surface-3 2xl:cursor-pointer" data-cid="n694" aria-label="Previous" type="button">
                            <img className="hidden 2xl:w-10 2xl:h-10 2xl:inline 2xl:overflow-clip 2xl:aspect-[auto_40/40]" data-cid="n695" alt="Back Arrow" height="40" src="/assets/cloned/svg/de9d52a631a7.svg" width="40" />
                          </button>
                          <button className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:justify-items-center 2xl:overflow-hidden 2xl:text-center 2xl:bg-surface-3 2xl:cursor-pointer" data-cid="n696" aria-label="Next" type="button">
                            <img className="hidden 2xl:w-10 2xl:h-10 2xl:inline 2xl:overflow-clip 2xl:aspect-[auto_40/40]" data-cid="n697" alt="Next Arrow" height="40" src="/assets/cloned/svg/0db50e6c503d.svg" width="40" />
                          </button>
                        </div>
                      </fieldset>
                    </section>
                    <div className="contents 2xl:hidden" data-cid="n698">
                      <WhyCarousel slides={WhyCarousel_slides} />
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip bg-color-001" data-cid="n751" data-reveal>
                <div className="w-full max-w-400 flex relative py-37.5 px-8 flex-col justify-start items-start content-start shrink-0 gap-25 max-lg:py-18 max-lg:px-6 max-lg:gap-12" data-cid="n752">
                  <div className="w-full max-w-125 flex relative flex-col justify-start items-start content-start shrink-0 gap-4" data-cid="n753">
                    <div className="contents min-w-0 2xl:w-125 2xl:h-[1.4rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n754">
                      <div className="w-full block relative shrink-0 2xl:flex 2xl:max-w-212.5 2xl:pr-2 2xl:pl-3 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:overflow-clip 2xl:shrink-[initial] after:content-[''] after:block after:absolute after:inset-0 after:w-125 after:h-[1.4rem] max-lg:after:hidden" data-cid="n755">
                        <div className="flex relative max-w-212.5 pr-2 pl-3 flex-col justify-start items-start content-start overflow-clip 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:max-w-none 2xl:px-0 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] after:content-[''] after:block after:absolute after:inset-0 after:h-[1.4rem] 2xl:after:hidden" data-cid="n756">
                          <p className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n757" dir="auto">
                            <span className="hidden 2xl:inline-block" data-cid="n758">
                              How
                            </span>
                            {" "}
                            <span className="hidden 2xl:inline-block" data-cid="n759">
                              We
                            </span>
                            {" "}
                            <span className="hidden 2xl:inline-block" data-cid="n760">
                              Work
                            </span>
                          </p>
                          <div className="w-[95.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden" data-cid="n761">
                            <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" data-cid="n762" dir="auto">
                              <span className="inline-block 2xl:hidden" data-cid="n763">
                                How
                              </span>
                              {" "}
                              <span className="inline-block 2xl:hidden" data-cid="n764">
                                We
                              </span>
                              {" "}
                              <span className="inline-block 2xl:hidden" data-cid="n765">
                                Work
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-125 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem]" data-cid="n766">
                      <h2 className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]" data-cid="n767" data-component="heading" dir="auto">
                        {"Engineered "}
                        <span className="inline text-color-002" data-cid="n768">
                          Processes
                        </span>
                        {" that Ensure Consistency"}
                      </h2>
                    </div>
                  </div>
                  <div className="w-full flex relative justify-start items-start content-start shrink-0 gap-25 overflow-clip max-lg:gap-8" data-cid="n769" id="steps">
                    <div className="w-4 flex relative justify-center items-center content-center self-stretch shrink-0 gap-2.5 overflow-clip" data-cid="n770">
                      <div className="w-4 h-full block absolute top-0 left-0 z-1 min-w-0 shrink-0" data-cid="n771">
                        <div className="w-4 h-full min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-color-001 shadow-[var(--surface-3)_0px_0px_0px_1px_inset]" data-cid="n772" aria-hidden="true">
                          <div className="w-20.5 h-340.5 block absolute -top-[2.0625rem] -left-[2.0625rem] [background-position:-5.64215px_-5.64215px] [animation-name:hatchMove\_Rdb9db5dp] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-lg:h-[83.4375rem] max-md:[background-position:-3.29455px_-3.29455px] md:max-lg:[background-position:-4.42083px_-4.42083px] 2xl:[background-position:-0.837214px_-0.837214px] 2xl:[animation-name:hatchMove\_rf8]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface-3) 0px, var(--surface-3) 1px, var(--clr-2) 1px, var(--clr-2) 12px)" }} data-cid="n773" />
                        </div>
                      </div>
                      <div className="contents min-w-0 transform-[none] 2xl:w-0.5 2xl:h-324 2xl:flex 2xl:relative 2xl:z-1 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip 2xl:bg-accent 2xl:transform-[matrix(1,0,0,1,0,-1310)]" data-cid="n774">
                        <div className="w-0.5 h-full flex relative z-1 flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-accent transform-[matrix(1,0,0,1,0,-1310)] max-lg:transform-[matrix(1,0,0,1,0,-1180)] 2xl:hidden" data-cid="n775" />
                      </div>
                      <div className="w-4 h-full flex absolute top-0 z-1 min-w-0 flex-col justify-start items-center content-center shrink-0 gap-8 overflow-clip max-lg:gap-[1.4375rem]" data-cid="n776">
                        <div className="h-75 flex relative pt-6 flex-col justify-start items-center content-center grow shrink-0 basis-0 overflow-clip max-lg:pt-2.5" data-cid="n777" />
                        <div className="h-75 flex relative pt-6 flex-col justify-start items-center content-center grow shrink-0 basis-0 overflow-clip max-lg:pt-2.5" data-cid="n778" />
                        <div className="h-75 flex relative pt-6 flex-col justify-start items-center content-center grow shrink-0 basis-0 overflow-clip max-lg:pt-2.5" data-cid="n779" />
                        <div className="h-75 flex relative pt-6 flex-col justify-start items-center content-center grow shrink-0 basis-0 overflow-clip max-lg:pt-2.5" data-cid="n780" />
                      </div>
                    </div>
                    <div className="w-[90.5%] flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-8 overflow-clip max-md:w-[85.5%] max-lg:gap-[1.4375rem] md:max-lg:w-[93.5%] 2xl:w-[92.5%]" data-cid="n781">
                      <div className="contents min-w-0" data-cid="n782">
                        <div className="w-full h-75 block relative shrink-0" data-cid="n783" id="step-1">
                          <div className="h-full flex relative pb-8 justify-start items-start content-start overflow-clip max-lg:flex-col max-lg:gap-6" data-cid="n784">
                            <div className="h-px block absolute bottom-0 inset-x-0 z-1 min-w-0 shrink-0" data-cid="n785">
                              <div className="flex relative justify-start items-center content-center" data-cid="n786">
                                <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-2" data-cid="n787" />
                                <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-3" data-cid="n788" />
                                <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-2" data-cid="n789" />
                              </div>
                            </div>
                            <div className="w-212.5 flex relative justify-start items-start content-start grow shrink-0 basis-0 gap-1 max-md:w-[17.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-168" data-cid="n790">
                              <div className="w-[24.3125rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[200.1px]" data-cid="n791">
                                <h2 className="hidden max-lg:block max-lg:text-background max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-4xl max-lg:font-medium max-lg:leading-9 max-lg:tracking-[-1.44px] max-lg:whitespace-pre-wrap max-lg:text-balance" data-cid="n792" dir="auto">
                                  <span className="hidden max-lg:inline max-lg:whitespace-nowrap max-lg:[text-wrap:nowrap_balance]" data-cid="n793">
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n794">
                                      C
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n795">
                                      o
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n796">
                                      n
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n797">
                                      s
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n798">
                                      u
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n799">
                                      l
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n800">
                                      t
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n801">
                                      a
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n802">
                                      t
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n803">
                                      i
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n804">
                                      o
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n805">
                                      n
                                    </span>
                                  </span>
                                </h2>
                                <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] whitespace-pre-wrap text-balance max-lg:hidden" data-cid="n806" dir="auto">
                                  <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:hidden" data-cid="n807">
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n808">
                                      C
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n809">
                                      o
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n810">
                                      n
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n811">
                                      s
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n812">
                                      u
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n813">
                                      l
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n814">
                                      t
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n815">
                                      a
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n816">
                                      t
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n817">
                                      i
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n818">
                                      o
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n819">
                                      n
                                    </span>
                                  </span>
                                </p>
                              </div>
                              <div className="w-[1.225rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap" data-cid="n820">
                                <p className="block text-accent [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem]" data-cid="n821" dir="auto">
                                  01.
                                </p>
                              </div>
                            </div>
                            <div className="w-62.5 flex relative max-w-62.5 flex-col justify-start grow shrink-0 basis-0 max-lg:grow-[initial] max-lg:basis-[initial]" data-cid="n822">
                              <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n823" dir="auto">
                                We analyze your needs and define the best solution.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contents min-w-0" data-cid="n824">
                        <div className="w-full h-75 block relative shrink-0" data-cid="n825" id="step-2">
                          <div className="h-full flex relative pb-8 justify-start items-start content-start overflow-clip max-lg:flex-col max-lg:gap-6" data-cid="n826">
                            <div className="h-px block absolute bottom-0 inset-x-0 z-1 min-w-0 shrink-0" data-cid="n827">
                              <div className="flex relative justify-start items-center content-center" data-cid="n828">
                                <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-2" data-cid="n829" />
                                <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-3" data-cid="n830" />
                                <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-2" data-cid="n831" />
                              </div>
                            </div>
                            <div className="w-212.5 flex relative justify-start items-start content-start grow shrink-0 basis-0 gap-1 max-md:w-[17.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-168" data-cid="n832">
                              <div className="w-[267.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[137.5px]" data-cid="n833">
                                <h2 className="hidden max-lg:block max-lg:text-background max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-4xl max-lg:font-medium max-lg:leading-9 max-lg:tracking-[-1.44px] max-lg:whitespace-pre-wrap max-lg:text-balance" data-cid="n834" dir="auto">
                                  <span className="hidden max-lg:inline max-lg:whitespace-nowrap max-lg:[text-wrap:nowrap_balance]" data-cid="n835">
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n836">
                                      P
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n837">
                                      l
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n838">
                                      a
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n839">
                                      n
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n840">
                                      n
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n841">
                                      i
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n842">
                                      n
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n843">
                                      g
                                    </span>
                                  </span>
                                </h2>
                                <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] whitespace-pre-wrap text-balance max-lg:hidden" data-cid="n844" dir="auto">
                                  <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:hidden" data-cid="n845">
                                    <span className="inline-block max-lg:hidden" data-cid="n846">
                                      P
                                    </span>
                                    <span className="inline-block max-lg:hidden" data-cid="n847">
                                      l
                                    </span>
                                    <span className="inline-block max-lg:hidden" data-cid="n848">
                                      a
                                    </span>
                                    <span className="inline-block max-lg:hidden" data-cid="n849">
                                      n
                                    </span>
                                    <span className="inline-block max-lg:hidden" data-cid="n850">
                                      n
                                    </span>
                                    <span className="inline-block max-lg:hidden" data-cid="n851">
                                      i
                                    </span>
                                    <span className="inline-block max-lg:hidden" data-cid="n852">
                                      n
                                    </span>
                                    <span className="inline-block max-lg:hidden" data-cid="n853">
                                      g
                                    </span>
                                  </span>
                                </p>
                              </div>
                              <div className="w-[1.4rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap" data-cid="n854">
                                <p className="block text-accent [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem]" data-cid="n855" dir="auto">
                                  02.
                                </p>
                              </div>
                            </div>
                            <div className="w-62.5 flex relative max-w-62.5 flex-col justify-start grow shrink-0 basis-0 max-lg:grow-[initial] max-lg:basis-[initial]" data-cid="n856">
                              <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n857" dir="auto">
                                We design a strategy tailored to your operations.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contents min-w-0" data-cid="n858">
                        <div className="w-full h-75 block relative shrink-0" data-cid="n859" id="step-3">
                          <div className="h-full flex relative pb-8 justify-start items-start content-start overflow-clip max-lg:flex-col max-lg:gap-6" data-cid="n860">
                            <div className="h-px block absolute bottom-0 inset-x-0 z-1 min-w-0 shrink-0" data-cid="n861">
                              <div className="flex relative justify-start items-center content-center" data-cid="n862">
                                <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-2" data-cid="n863" />
                                <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-3" data-cid="n864" />
                                <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-2" data-cid="n865" />
                              </div>
                            </div>
                            <div className="w-212.5 flex relative justify-start items-start content-start grow shrink-0 basis-0 gap-1 max-md:w-[17.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-168" data-cid="n866">
                              <div className="w-[29.9375rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[15.4rem]" data-cid="n867">
                                <h2 className="hidden max-lg:block max-lg:text-background max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-4xl max-lg:font-medium max-lg:leading-9 max-lg:tracking-[-1.44px] max-lg:whitespace-pre-wrap max-lg:text-balance" data-cid="n868" dir="auto">
                                  <span className="hidden max-lg:inline" data-cid="n869">
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n870">
                                      I
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n871">
                                      m
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n872">
                                      p
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n873">
                                      l
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n874">
                                      e
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n875">
                                      m
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n876">
                                      e
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n877">
                                      n
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n878">
                                      t
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n879">
                                      a
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n880">
                                      t
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n881">
                                      i
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n882">
                                      o
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n883">
                                      n
                                    </span>
                                  </span>
                                </h2>
                                <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] whitespace-pre-wrap text-balance max-lg:hidden" data-cid="n884" dir="auto">
                                  <span className="inline max-lg:hidden" data-cid="n885">
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n886">
                                      I
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n887">
                                      m
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n888">
                                      p
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n889">
                                      l
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n890">
                                      e
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n891">
                                      m
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n892">
                                      e
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n893">
                                      n
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n894">
                                      t
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n895">
                                      a
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n896">
                                      t
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n897">
                                      i
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n898">
                                      o
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n899">
                                      n
                                    </span>
                                  </span>
                                </p>
                              </div>
                              <div className="w-[22.3px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap" data-cid="n900">
                                <p className="block text-accent [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem]" data-cid="n901" dir="auto">
                                  03.
                                </p>
                              </div>
                            </div>
                            <div className="w-62.5 flex relative max-w-62.5 flex-col justify-start grow shrink-0 basis-0 max-lg:grow-[initial] max-lg:basis-[initial]" data-cid="n902">
                              <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n903" dir="auto">
                                We execute the solution with precision and quality.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contents min-w-0" data-cid="n904">
                        <div className="w-full h-75 block relative shrink-0" data-cid="n905" id="step-4">
                          <div className="h-full flex relative pb-8 justify-start items-start content-start overflow-clip max-lg:flex-col max-lg:gap-6" data-cid="n906">
                            <div className="h-px block absolute bottom-0 inset-x-0 z-1 min-w-0 shrink-0" data-cid="n907">
                              <div className="flex relative justify-start items-center content-center" data-cid="n908">
                                <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-2" data-cid="n909" />
                                <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-3" data-cid="n910" />
                                <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface-2" data-cid="n911" />
                              </div>
                            </div>
                            <div className="w-212.5 flex relative justify-start items-start content-start grow shrink-0 basis-0 gap-1 max-md:w-[17.4375rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-168" data-cid="n912">
                              <div className="w-[247.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[127.3px]" data-cid="n913">
                                <h2 className="hidden max-lg:block max-lg:text-background max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-4xl max-lg:font-medium max-lg:leading-9 max-lg:tracking-[-1.44px] max-lg:whitespace-pre-wrap max-lg:text-balance" data-cid="n914" dir="auto">
                                  <span className="hidden max-lg:inline max-lg:whitespace-nowrap max-lg:[text-wrap:nowrap_balance]" data-cid="n915">
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n916">
                                      S
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n917">
                                      u
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n918">
                                      p
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n919">
                                      p
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n920">
                                      o
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n921">
                                      r
                                    </span>
                                    <span className="hidden max-lg:inline-block max-lg:opacity-[0.001] max-lg:transform-[matrix(1,0,0,1,0,10)]" data-cid="n922">
                                      t
                                    </span>
                                  </span>
                                </h2>
                                <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] whitespace-pre-wrap text-balance max-lg:hidden" data-cid="n923" dir="auto">
                                  <span className="inline whitespace-nowrap [text-wrap:nowrap_balance] max-lg:hidden" data-cid="n924">
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n925">
                                      S
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n926">
                                      u
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n927">
                                      p
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n928">
                                      p
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n929">
                                      o
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n930">
                                      r
                                    </span>
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,0,10)] max-lg:hidden" data-cid="n931">
                                      t
                                    </span>
                                  </span>
                                </p>
                              </div>
                              <div className="w-[1.4125rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap" data-cid="n932">
                                <p className="block text-accent [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem]" data-cid="n933" dir="auto">
                                  04.
                                </p>
                              </div>
                            </div>
                            <div className="w-62.5 flex relative max-w-62.5 flex-col justify-start grow shrink-0 basis-0 max-lg:grow-[initial] max-lg:basis-[initial]" data-cid="n934">
                              <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n935" dir="auto">
                                Ongoing maintenance and optimization.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip bg-color-001" data-cid="n936" id="stats" data-reveal>
                <div className="w-full max-w-400 grid relative py-37.5 px-8 justify-center shrink-0 [grid-auto-rows:min-content] grid-cols-4 max-lg:py-18 max-lg:px-6 max-lg:grid-cols-1" data-cid="n937">
                  {FeatureCard2_data.map((d, i) => <FeatureCard2 key={i} d={d} cids={FeatureCard2_cids[i]} styles={FeatureCard2_styles[i]} />)}
                  <div className="contents min-w-0 2xl:h-[11.3375rem] 2xl:block 2xl:relative 2xl:[align-self:start] 2xl:shrink-0" data-cid="n1022">
                    <a className="hidden 2xl:w-96 2xl:h-[11.3375rem] 2xl:flex 2xl:relative 2xl:p-8 2xl:flex-col 2xl:justify-end 2xl:items-end 2xl:content-end 2xl:gap-2.5 2xl:overflow-clip 2xl:text-primary 2xl:bg-accent 2xl:cursor-pointer" data-cid="n1023" href="/contact">
                      <div className="hidden" data-cid="n1024">
                        <div className="hidden 2xl:w-96 2xl:h-[11.3375rem] 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-1" data-cid="n1025" aria-hidden="true">
                          <div className="hidden 2xl:w-118 2xl:h-[16.8375rem] 2xl:block 2xl:absolute 2xl:-top-11 2xl:-left-11 2xl:[background-position:-1.11629px_-1.11629px] 2xl:[animation-name:hatchMove\_rfr] 2xl:[animation-duration:1.5s] 2xl:[animation-timing-function:linear] 2xl:[animation-iteration-count:infinite] 2xl:pointer-events-none" data-cid="n1026" />
                        </div>
                      </div>
                      <div className="hidden 2xl:w-80 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n1027">
                        <h4 className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-2xl 2xl:font-medium 2xl:leading-[1.9375rem] 2xl:tracking-[-0.2px] 2xl:text-balance" data-cid="n1028" dir="auto">
                          Start a Project
                        </h4>
                      </div>
                      <div className="hidden 2xl:w-9.5 2xl:h-9.5 2xl:flex 2xl:absolute 2xl:top-2.5 2xl:right-2.5 2xl:z-1 2xl:min-w-0 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip" data-cid="n1029">
                        <div className="hidden 2xl:w-[0.6875rem] 2xl:h-[0.1875rem] 2xl:block 2xl:absolute 2xl:top-2 2xl:left-6 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] 2xl:origin-[5.5px_1.5px]" data-cid="n1030" aria-hidden="true">
                          <div className="hidden 2xl:h-full 2xl:block" data-cid="n1031">
                            <Icon8 cid={"n1032"} />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-9.5 2xl:h-9.5 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1033" aria-hidden="true">
                          <div className="hidden 2xl:h-full 2xl:block" data-cid="n1034">
                            <Icon9 cid={"n1035"} />
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="w-full block relative [align-self:start] shrink-0 2xl:hidden" data-cid="n1036">
                      <a className="h-[11.3375rem] flex relative p-8 flex-col justify-end items-end content-end gap-2.5 overflow-clip text-primary bg-accent cursor-pointer max-lg:h-16 max-lg:p-6 max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:[flex-direction:initial] 2xl:hidden group" data-cid="n1037" data-component="link" href="/contact">
                        <div className="w-76 h-[11.3375rem] block absolute top-0 left-0 z-0 opacity-0 min-w-0 shrink-0 transform-[matrix(1.1,0,0,1.1,0,0)] origin-[152px_90.7031px] max-md:w-[20.4375rem] max-lg:h-16 max-md:origin-[163.5px_32px] max-lg:opacity-[initial] md:max-lg:w-180 md:max-lg:origin-[360px_32px] 2xl:hidden hover:opacity-[0.00140418] group-hover:opacity-[0.910302]" style={{ maskImage: "linear-gradient(315deg, var(--clr-2) 10%, var(--foreground) 50%, var(--clr-2) 90%)" }} data-cid="n1038">
                          <div className="h-full min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-1 2xl:hidden" data-cid="n1039" aria-hidden="true">
                            <div className="w-98 h-[16.8375rem] block absolute -top-11 -left-11 [background-position:-1.75815px_-1.75815px] [animation-name:hatchMove\_r95] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-md:w-[25.9375rem] max-lg:h-38 max-md:[background-position:-9.17466px_-9.17466px] max-lg:[animation-name:hatchMove\_r4o] md:max-lg:w-202 md:max-lg:[background-position:-10.6764px_-10.6764px] 2xl:hidden hover:[background-position:-1.54017px_-1.54017px] focus:[background-position:-4.18004px_-4.18004px]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface-3) 0px, var(--surface-3) 2px, var(--clr-2) 2px, var(--clr-2) 16px)" }} data-cid="n1040" />
                          </div>
                        </div>
                        <div className="w-60 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] max-lg:flex-1 md:max-lg:w-168 2xl:hidden" data-cid="n1041">
                          <p className="hidden max-lg:block max-lg:text-background max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-base max-lg:font-semibold max-lg:leading-[1.625rem] max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1042" dir="auto">
                            Start a Project
                          </p>
                          <h4 className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.9375rem] tracking-[-0.2px] text-balance max-lg:hidden 2xl:hidden" data-cid="n1043" data-component="heading" dir="auto">
                            Start a Project
                          </h4>
                        </div>
                        <div className="w-9.5 h-9.5 flex absolute top-2.5 right-2.5 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:w-6 max-lg:h-6 max-lg:top-[0.4375rem] 2xl:hidden" data-cid="n1044">
                          <div className="w-[0.6875rem] h-[0.1875rem] block absolute top-2 left-6 min-w-0 shrink-0 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[5.5px_1.5px] max-lg:w-[0.3125rem] max-lg:h-8 max-lg:-top-[0.1875rem] max-lg:left-2 max-lg:origin-[2.5px_16px] 2xl:hidden" data-cid="n1045" aria-hidden="true">
                            <div className="h-full block 2xl:hidden" data-cid="n1046">
                              <Icon10 cid={"n1047"} />
                            </div>
                          </div>
                          <div className="w-9.5 h-full block relative shrink-0 max-lg:w-6 2xl:hidden" data-cid="n1048" aria-hidden="true">
                            <div className="h-full block 2xl:hidden" data-cid="n1049">
                              <Icon11 cid={"n1050"} />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip bg-surface" data-cid="n1051">
                <div className="h-full flex absolute top-0 inset-x-0 z-0 min-w-0 flex-col justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-color-001" data-cid="n1052" />
                <div className="w-full max-w-400 flex relative py-37.5 px-8 flex-col justify-start items-start content-start shrink-0 gap-25 max-lg:py-18 max-lg:px-6 max-lg:gap-12" data-cid="n1053">
                  <div className="w-320 h-px flex absolute top-0 left-0 z-1 min-w-0 justify-center items-center content-center shrink-0 overflow-clip max-md:w-[23.4375rem] md:max-lg:w-192 2xl:w-400" data-cid="n1054" id="prices-color" />
                  <div className="contents min-w-0 2xl:w-384 2xl:h-[105.9375rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1055">
                    <div className="w-304 block relative shrink-0 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-384 2xl:flex 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:overflow-clip 2xl:shrink-[initial]" data-cid="n1056">
                      <div className="w-304 h-[105.9375rem] flex relative inset-0 justify-start items-start content-start overflow-clip max-md:w-[20.4375rem] max-md:h-[118rem] max-lg:flex-col max-lg:gap-10 md:max-lg:w-180 md:max-lg:h-[1775.3px] 2xl:w-[33.6rem] 2xl:h-[12.8rem] 2xl:sticky 2xl:top-[1.4375rem] 2xl:z-1 2xl:flex-col 2xl:shrink-0 2xl:gap-12 2xl:bottom-auto 2xl:inset-x-auto 2xl:[overflow-x:initial] 2xl:[overflow-y:initial]" data-cid="n1057">
                        <div className="w-full h-[12.8rem] flex sticky top-[1.4375rem] z-1 flex-col justify-start items-start content-start shrink-0 gap-12 max-md:h-[11.3rem] max-lg:relative max-lg:inset-0 max-lg:gap-10 md:max-lg:h-[9.05rem] 2xl:h-[7.9rem] 2xl:relative 2xl:inset-0 2xl:gap-4 2xl:z-[initial]" data-cid="n1058">
                          <div className="w-[26.6rem] flex relative flex-col justify-start items-start content-start shrink-0 gap-4 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-[33.6rem] 2xl:block 2xl:[flex-direction:initial] 2xl:[justify-content:initial] 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:gap-[initial]" data-cid="n1059">
                            <div className="w-full block relative shrink-0 2xl:flex 2xl:max-w-212.5 2xl:pr-2 2xl:pl-3 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:overflow-clip 2xl:shrink-[initial] after:content-[''] after:block after:absolute after:inset-0 after:w-[33.6rem] after:h-[1.4rem] max-lg:after:hidden" data-cid="n1060">
                              <div className="flex relative max-w-212.5 pr-2 pl-3 flex-col justify-start items-start content-start overflow-clip 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:max-w-none 2xl:px-0 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] after:content-[''] after:block after:absolute after:inset-0 after:h-[1.4rem] 2xl:after:hidden" data-cid="n1061">
                                <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n1062" dir="auto">
                                  <span className="hidden 2xl:inline-block" data-cid="n1063">
                                    Choose
                                  </span>
                                  {" "}
                                  <span className="hidden 2xl:inline-block" data-cid="n1064">
                                    the
                                  </span>
                                  {" "}
                                  <span className="hidden 2xl:inline-block" data-cid="n1065">
                                    Plan
                                  </span>
                                </p>
                                <div className="w-[110.1px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden" data-cid="n1066">
                                  <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" data-cid="n1067" dir="auto">
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,-20,0)] 2xl:hidden" data-cid="n1068">
                                      Choose
                                    </span>
                                    {" "}
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,-20,0)] 2xl:hidden" data-cid="n1069">
                                      the
                                    </span>
                                    {" "}
                                    <span className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,-20,0)] 2xl:hidden" data-cid="n1070">
                                      Plan
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="w-[26.6rem] flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] md:max-lg:w-180 2xl:hidden" data-cid="n1071">
                              <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px] 2xl:hidden" data-cid="n1072" data-component="heading" dir="auto">
                                {"Flexible "}
                                <span className="inline text-muted-foreground 2xl:hidden" data-cid="n1073">
                                  Pricing
                                </span>
                                {" for Every Scale"}
                              </h2>
                            </div>
                          </div>
                          <div className="w-full flex relative z-1 justify-start items-start content-start shrink-0 2xl:flex-col 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word] 2xl:z-[initial] 2xl:[align-items:initial] 2xl:[align-content:initial]" data-cid="n1074">
                            <h2 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[2.75rem] 2xl:font-medium 2xl:leading-11 2xl:tracking-[-1.76px] 2xl:text-balance" data-cid="n1075" dir="auto">
                              {"Flexible "}
                              <span className="hidden 2xl:inline 2xl:text-muted-foreground" data-cid="n1076">
                                Pricing
                              </span>
                              {" for Every Scale"}
                            </h2>
                            <div className="w-[18.5%] flex relative py-1 px-3 justify-center items-center content-center shrink-0 overflow-clip bg-color-001 max-lg:w-1/2 max-lg:flex-1 2xl:hidden" data-cid="n1077">
                              <div className="w-[3.475rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden" data-cid="n1078">
                                <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" data-cid="n1079" dir="auto">
                                  Monthly
                                </p>
                              </div>
                            </div>
                            <div className="w-[27.5%] flex relative py-1 px-3 justify-center items-center content-center shrink-0 overflow-clip max-lg:w-1/2 max-lg:flex-1 2xl:hidden" data-cid="n1080">
                              <div className="w-[92.1px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap cursor-pointer 2xl:hidden" data-cid="n1081">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" data-cid="n1082" dir="auto">
                                  {"Yearly "}
                                  <span className="inline text-accent 2xl:hidden" data-cid="n1083">
                                    (-15%)
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[65%] flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-25 max-lg:w-full max-lg:gap-18 max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-full 2xl:z-1 2xl:[flex-direction:initial] 2xl:grow-[initial] 2xl:basis-[initial] 2xl:gap-[initial]" data-cid="n1084">
                          <div className="w-full block relative shrink-0 2xl:w-[15%] 2xl:flex 2xl:py-1 2xl:px-3 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:overflow-clip 2xl:bg-color-001" data-cid="n1085">
                            <div className="w-[49.4rem] flex relative justify-start items-start content-start max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-[3.475rem] 2xl:flex-col 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:[align-items:initial] 2xl:[align-content:initial]" data-cid="n1086">
                              <p className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n1087" dir="auto">
                                Monthly
                              </p>
                              <div className="basis-0 shrink-0 flex relative flex-col justify-start items-start content-start grow gap-16 max-lg:gap-6 2xl:hidden" data-cid="n1088">
                                <div className="w-full flex relative justify-start items-end content-end shrink-0 overflow-clip max-lg:flex-col max-lg:items-start max-lg:content-start max-lg:gap-6 2xl:hidden" data-cid="n1089">
                                  <div className="w-[741.9px] flex relative justify-start items-start content-start grow shrink-0 basis-0 gap-4 max-md:w-[20.4375rem] max-lg:flex-col max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:hidden" data-cid="n1090">
                                    <div className="w-[209.1px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[8.9625rem] max-lg:order-[1] 2xl:hidden" data-cid="n1091">
                                      <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] whitespace-pre-wrap text-balance max-lg:text-5xl max-lg:leading-[2.6875rem] max-lg:tracking-[-1.92px] 2xl:hidden" data-cid="n1092" dir="auto">
                                        Starter
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex relative flex-col justify-start items-end content-end shrink-0 overflow-clip max-lg:gap-1 max-lg:[flex-direction:initial] 2xl:hidden" data-cid="n1093">
                                    <div className="w-[44.9px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[37.3px] 2xl:hidden" data-cid="n1094">
                                      <h4 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.9375rem] tracking-[-0.2px] text-right whitespace-pre-wrap text-balance max-lg:text-xl max-lg:leading-6.5 max-lg:text-left 2xl:hidden" data-cid="n1095" data-component="heading" dir="auto">
                                        $59
                                      </h4>
                                    </div>
                                    <div className="w-[48.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden" data-cid="n1096">
                                      <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-right max-lg:text-left 2xl:hidden" data-cid="n1097" dir="auto">
                                        /month
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full max-w-112.5 flex relative flex-col justify-start shrink-0 2xl:hidden" data-cid="n1098">
                                  <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1099" dir="auto">
                                    Perfect for businesses looking to improve efficiency and establish a solid production foundation.
                                  </p>
                                </div>
                                <div className="w-[49.4rem] grid relative justify-center shrink-0 gap-4 [grid-auto-rows:min-content] overflow-clip grid-cols-2 grid-rows-2 max-md:w-[20.4375rem] max-lg:grid-cols-1 max-lg:grid-rows-4 md:max-lg:w-180 2xl:hidden" data-cid="n1100">
                                  {MediaTile_data.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids[i]} />)}
                                </div>
                                <div className="w-[31.5%] block relative z-1 shrink-0 max-lg:w-full 2xl:hidden" data-cid="n1121">
                                  <a className="h-16 flex relative p-6 justify-start items-center content-center gap-2.5 overflow-clip text-primary bg-accent cursor-pointer 2xl:hidden" data-cid="n1122" data-component="link" href="/contact">
                                    <div className="w-62.5 h-16 block absolute top-0 left-0 z-0 opacity-0 min-w-0 shrink-0 transform-[matrix(1.1,0,0,1.1,0,0)] origin-[125px_32px] max-md:w-[20.4375rem] max-md:origin-[163.5px_32px] max-lg:opacity-[initial] md:max-lg:w-180 md:max-lg:origin-[360px_32px] 2xl:hidden" style={{ maskImage: "linear-gradient(315deg, var(--clr-2) 10%, var(--foreground) 50%, var(--clr-2) 90%)" }} data-cid="n1123">
                                      <div className="h-16 min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-1 2xl:hidden" data-cid="n1124" aria-hidden="true">
                                        <div className="w-84.5 h-38 block absolute -top-11 -left-11 [background-position:-1.75815px_-1.75815px] [animation-name:hatchMove\_r9e] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-md:w-[25.9375rem] max-md:[background-position:-9.17466px_-9.17466px] max-lg:[animation-name:hatchMove\_r51] md:max-lg:w-202 md:max-lg:[background-position:-10.6764px_-10.6764px] 2xl:hidden hover:[background-position:-9.20182px_-9.20182px] focus:[background-position:-0.779137px_-0.779137px]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface-3) 0px, var(--surface-3) 2px, var(--clr-2) 2px, var(--clr-2) 16px)" }} data-cid="n1125" />
                                      </div>
                                    </div>
                                    <div className="w-50.5 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:hidden" data-cid="n1126">
                                      <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base font-semibold leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1127" dir="auto">
                                        Start a Project
                                      </p>
                                    </div>
                                    <div className="w-6 h-6 flex absolute top-[0.4375rem] right-2.5 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip 2xl:hidden" data-cid="n1128">
                                      <div className="w-[0.3125rem] h-px block absolute top-0.5 left-[1.1875rem] min-w-0 shrink-0 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[2.5px_0.5px] max-lg:h-8 max-lg:-top-[0.1875rem] max-lg:left-2 max-lg:origin-[2.5px_16px] 2xl:hidden" data-cid="n1129" aria-hidden="true">
                                        <div className="h-full block 2xl:hidden" data-cid="n1130">
                                          <Icon18 cid={"n1131"} />
                                        </div>
                                      </div>
                                      <div className="w-6 h-6 block relative shrink-0 2xl:hidden" data-cid="n1132" aria-hidden="true">
                                        <div className="h-full block 2xl:hidden" data-cid="n1133">
                                          <Icon19 cid={"n1134"} />
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full block relative shrink-0 2xl:w-[21.5%] 2xl:flex 2xl:py-1 2xl:px-3 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:overflow-clip" data-cid="n1135">
                            <div className="w-[49.4rem] flex relative justify-start items-center content-center max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-[92.1px] 2xl:flex-col 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:cursor-pointer 2xl:[align-items:initial] 2xl:[align-content:initial]" data-cid="n1136">
                              <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n1137" dir="auto">
                                {"Yearly "}
                                <span className="hidden 2xl:inline 2xl:text-accent" data-cid="n1138">
                                  (-15%)
                                </span>
                              </p>
                              <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" data-cid="n1139" />
                              <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-background 2xl:hidden" data-cid="n1140" />
                              <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" data-cid="n1141" />
                            </div>
                          </div>
                          <div className="w-full block relative shrink-0 2xl:hidden" data-cid="n1142">
                            <div className="flex relative justify-start items-start content-start 2xl:hidden" data-cid="n1143">
                              <div className="basis-0 shrink-0 flex relative flex-col justify-start items-start content-start grow gap-16 max-lg:gap-6 2xl:hidden" data-cid="n1144">
                                <div className="w-full flex relative justify-start items-end content-end shrink-0 overflow-clip max-lg:flex-col max-lg:items-start max-lg:content-start max-lg:gap-6 2xl:hidden" data-cid="n1145">
                                  <div className="w-[741.9px] flex relative justify-start items-start content-start grow shrink-0 basis-0 gap-4 max-md:w-[20.4375rem] max-lg:flex-col max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:hidden" data-cid="n1146">
                                    <div className="w-[23.75rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[260.5px] max-lg:order-[1] 2xl:hidden" data-cid="n1147">
                                      <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] whitespace-pre-wrap text-balance max-lg:text-5xl max-lg:leading-[2.6875rem] max-lg:tracking-[-1.92px] 2xl:hidden" data-cid="n1148" dir="auto">
                                        Professional
                                      </p>
                                    </div>
                                    <div className="w-[7.1rem] block relative shrink-0 2xl:hidden" data-cid="n1149">
                                      <div className="flex relative py-1 px-3 justify-center items-center content-center 2xl:hidden" data-cid="n1150">
                                        <div className="w-[7.1rem] h-full block absolute top-0 left-0 z-0 min-w-0 shrink-0 2xl:hidden" data-cid="n1151">
                                          <div className="w-[7.1rem] h-[1.9rem] min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-1 shadow-[var(--accent)_0px_0px_0px_1px_inset] 2xl:hidden" data-cid="n1152" aria-hidden="true">
                                            <div className="w-[11.225rem] h-[6.025rem] block absolute -top-[2.0625rem] -left-[2.0625rem] [background-position:-1.31861px_-1.31861px] [animation-name:hatchMove\_r9i] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-md:[background-position:-6.881px_-6.881px] max-lg:[animation-name:hatchMove\_r55] md:max-lg:[background-position:-8.00728px_-8.00728px] 2xl:hidden" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--clr-5) 0px, var(--clr-5) 1px, var(--clr-2) 1px, var(--clr-2) 12px)" }} data-cid="n1153" />
                                          </div>
                                        </div>
                                        <div className="w-[5.6rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden" data-cid="n1154">
                                          <p className="block text-accent [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" data-cid="n1155" dir="auto">
                                            Most Popular
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex relative flex-col justify-start items-end content-end shrink-0 overflow-clip max-lg:gap-1 max-lg:[flex-direction:initial] 2xl:hidden" data-cid="n1156">
                                    <div className="w-[45.1px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[37.5px] 2xl:hidden" data-cid="n1157">
                                      <h4 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.9375rem] tracking-[-0.2px] text-right whitespace-pre-wrap text-balance max-lg:text-xl max-lg:leading-6.5 max-lg:text-left 2xl:hidden" data-cid="n1158" data-component="heading" dir="auto">
                                        $99
                                      </h4>
                                    </div>
                                    <div className="w-[48.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden" data-cid="n1159">
                                      <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-right max-lg:text-left 2xl:hidden" data-cid="n1160" dir="auto">
                                        /month
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full max-w-112.5 flex relative flex-col justify-start shrink-0 2xl:hidden" data-cid="n1161">
                                  <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1162" dir="auto">
                                    Designed for businesses ready to optimize processes and implement advanced solutions.
                                  </p>
                                </div>
                                <div className="w-[49.4rem] grid relative justify-center shrink-0 gap-4 [grid-auto-rows:min-content] overflow-clip grid-cols-2 grid-rows-2 max-md:w-[20.4375rem] max-lg:grid-cols-1 max-lg:grid-rows-4 md:max-lg:w-180 2xl:hidden" data-cid="n1163">
                                  {MediaTile_data2.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids2[i]} />)}
                                </div>
                                <div className="w-[31.5%] block relative z-1 shrink-0 max-lg:w-full 2xl:hidden" data-cid="n1184">
                                  <a className="h-16 flex relative p-6 justify-start items-center content-center gap-2.5 overflow-clip text-primary bg-accent cursor-pointer 2xl:hidden" data-cid="n1185" data-component="link" href="/contact">
                                    <div className="w-62.5 h-16 block absolute top-0 left-0 z-0 opacity-0 min-w-0 shrink-0 transform-[matrix(1.1,0,0,1.1,0,0)] origin-[125px_32px] max-md:w-[20.4375rem] max-md:origin-[163.5px_32px] max-lg:opacity-[initial] md:max-lg:w-180 md:max-lg:origin-[360px_32px] 2xl:hidden" style={{ maskImage: "linear-gradient(315deg, var(--clr-2) 10%, var(--foreground) 50%, var(--clr-2) 90%)" }} data-cid="n1186">
                                      <div className="h-16 min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-1 2xl:hidden" data-cid="n1187" aria-hidden="true">
                                        <div className="w-84.5 h-38 block absolute -top-11 -left-11 [background-position:-1.75815px_-1.75815px] [animation-name:hatchMove\_r9o] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-md:w-[25.9375rem] max-md:[background-position:-9.17466px_-9.17466px] max-lg:[animation-name:hatchMove\_r5b] md:max-lg:w-202 md:max-lg:[background-position:-10.6764px_-10.6764px] 2xl:hidden hover:[background-position:-3.91756px_-3.91756px] focus:[background-position:-6.55743px_-6.55743px]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface-3) 0px, var(--surface-3) 2px, var(--clr-2) 2px, var(--clr-2) 16px)" }} data-cid="n1188" />
                                      </div>
                                    </div>
                                    <div className="w-50.5 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:hidden" data-cid="n1189">
                                      <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base font-semibold leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1190" dir="auto">
                                        Start a Project
                                      </p>
                                    </div>
                                    <div className="w-6 h-6 flex absolute top-[0.4375rem] right-2.5 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip 2xl:hidden" data-cid="n1191">
                                      <div className="w-[0.3125rem] h-px block absolute top-0.5 left-[1.1875rem] min-w-0 shrink-0 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[2.5px_0.5px] max-lg:h-8 max-lg:-top-[0.1875rem] max-lg:left-2 max-lg:origin-[2.5px_16px] 2xl:hidden" data-cid="n1192" aria-hidden="true">
                                        <div className="h-full block 2xl:hidden" data-cid="n1193">
                                          <Icon18 cid={"n1194"} />
                                        </div>
                                      </div>
                                      <div className="w-6 h-6 block relative shrink-0 2xl:hidden" data-cid="n1195" aria-hidden="true">
                                        <div className="h-full block 2xl:hidden" data-cid="n1196">
                                          <Icon19 cid={"n1197"} />
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full block relative shrink-0 2xl:hidden" data-cid="n1198">
                            <div className="flex relative justify-start items-center content-center 2xl:hidden" data-cid="n1199">
                              <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" data-cid="n1200" />
                              <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-background 2xl:hidden" data-cid="n1201" />
                              <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" data-cid="n1202" />
                            </div>
                          </div>
                          <div className="w-full block relative shrink-0 2xl:hidden" data-cid="n1203">
                            <div className="flex relative justify-start items-start content-start 2xl:hidden" data-cid="n1204">
                              <div className="basis-0 shrink-0 flex relative flex-col justify-start items-start content-start grow gap-16 max-lg:gap-6 2xl:hidden" data-cid="n1205">
                                <div className="w-full flex relative justify-start items-end content-end shrink-0 overflow-clip max-lg:flex-col max-lg:items-start max-lg:content-start max-lg:gap-6 2xl:hidden" data-cid="n1206">
                                  <div className="w-[735.5px] flex relative justify-start items-start content-start grow shrink-0 basis-0 gap-4 max-md:w-[20.4375rem] max-lg:flex-col max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:hidden" data-cid="n1207">
                                    <div className="w-[19.7625rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[13.55rem] max-lg:order-[1] 2xl:hidden" data-cid="n1208">
                                      <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] whitespace-pre-wrap text-balance max-lg:text-5xl max-lg:leading-[2.6875rem] max-lg:tracking-[-1.92px] 2xl:hidden" data-cid="n1209" dir="auto">
                                        Enterprise
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex relative flex-col justify-start items-end content-end shrink-0 overflow-clip max-lg:gap-1 max-lg:[flex-direction:initial] 2xl:hidden" data-cid="n1210">
                                    <div className="w-[3.4375rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:w-[2.85rem] 2xl:hidden" data-cid="n1211">
                                      <h4 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.9375rem] tracking-[-0.2px] text-right whitespace-pre-wrap text-balance max-lg:text-xl max-lg:leading-6.5 max-lg:text-left 2xl:hidden" data-cid="n1212" data-component="heading" dir="auto">
                                        $199
                                      </h4>
                                    </div>
                                    <div className="w-[48.5px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden" data-cid="n1213">
                                      <p className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-right max-lg:text-left 2xl:hidden" data-cid="n1214" dir="auto">
                                        /month
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full max-w-112.5 flex relative flex-col justify-start shrink-0 2xl:hidden" data-cid="n1215">
                                  <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1216" dir="auto">
                                    A complete, end-to-end solution for enterprises that require precision, scalability, and reliability.
                                  </p>
                                </div>
                                <div className="w-[49.4rem] grid relative justify-center shrink-0 gap-4 [grid-auto-rows:min-content] overflow-clip grid-cols-2 grid-rows-2 max-md:w-[20.4375rem] max-lg:grid-cols-1 max-lg:grid-rows-4 md:max-lg:w-180 2xl:hidden" data-cid="n1217">
                                  {MediaTile_data3.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids3[i]} />)}
                                </div>
                                <div className="w-[31.5%] block relative z-1 shrink-0 max-lg:w-full 2xl:hidden" data-cid="n1238">
                                  <a className="h-16 flex relative p-6 justify-start items-center content-center gap-2.5 overflow-clip text-primary bg-accent cursor-pointer 2xl:hidden group" data-cid="n1239" data-component="link" href="/contact">
                                    <div className="w-62.5 h-16 block absolute top-0 left-0 z-0 opacity-0 min-w-0 shrink-0 transform-[matrix(1.1,0,0,1.1,0,0)] origin-[125px_32px] max-md:w-[20.4375rem] max-md:origin-[163.5px_32px] max-lg:opacity-[initial] md:max-lg:w-180 md:max-lg:origin-[360px_32px] 2xl:hidden hover:opacity-[0.00513206] group-hover:opacity-[0.917507]" style={{ maskImage: "linear-gradient(315deg, var(--clr-2) 10%, var(--foreground) 50%, var(--clr-2) 90%)" }} data-cid="n1240">
                                      <div className="h-16 min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-1 2xl:hidden" data-cid="n1241" aria-hidden="true">
                                        <div className="w-84.5 h-38 block absolute -top-11 -left-11 [background-position:-1.75815px_-1.75815px] [animation-name:hatchMove\_ra0] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-md:w-[25.9375rem] max-md:[background-position:-9.17466px_-9.17466px] max-lg:[animation-name:hatchMove\_r5j] md:max-lg:w-202 md:max-lg:[background-position:-10.6764px_-10.6764px] 2xl:hidden hover:[background-position:-10.073px_-10.073px] focus:[background-position:-1.02276px_-1.02276px]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface-3) 0px, var(--surface-3) 2px, var(--clr-2) 2px, var(--clr-2) 16px)" }} data-cid="n1242" />
                                      </div>
                                    </div>
                                    <div className="w-50.5 flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.4375rem] md:max-lg:w-168 2xl:hidden" data-cid="n1243">
                                      <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base font-semibold leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1244" dir="auto">
                                        Start a Project
                                      </p>
                                    </div>
                                    <div className="w-6 h-6 flex absolute top-[0.4375rem] right-2.5 z-1 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip 2xl:hidden" data-cid="n1245">
                                      <div className="w-[0.3125rem] h-px block absolute top-0.5 left-[1.1875rem] min-w-0 shrink-0 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[2.5px_0.5px] max-lg:h-8 max-lg:-top-[0.1875rem] max-lg:left-2 max-lg:origin-[2.5px_16px] 2xl:hidden" data-cid="n1246" aria-hidden="true">
                                        <div className="h-full block 2xl:hidden" data-cid="n1247">
                                          <Icon18 cid={"n1248"} />
                                        </div>
                                      </div>
                                      <div className="w-6 h-6 block relative shrink-0 2xl:hidden" data-cid="n1249" aria-hidden="true">
                                        <div className="h-full block 2xl:hidden" data-cid="n1250">
                                          <Icon19 cid={"n1251"} />
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden 2xl:w-[62.4rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-25" data-cid="n1252">
                        <div className="hidden 2xl:w-full 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1253">
                          <div className="hidden 2xl:w-[62.4rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start" data-cid="n1254">
                            <div className="hidden 2xl:basis-0 2xl:shrink-0 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:gap-16" data-cid="n1255">
                              <div className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-end 2xl:content-end 2xl:shrink-0 2xl:overflow-clip" data-cid="n1256">
                                <div className="hidden 2xl:w-[949.9px] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-4" data-cid="n1257">
                                  <div className="hidden 2xl:w-[209.1px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n1258">
                                    <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[4.375rem] 2xl:font-medium 2xl:leading-[3.9375rem] 2xl:tracking-[-2.8px] 2xl:whitespace-pre-wrap 2xl:text-balance" data-cid="n1259" dir="auto">
                                      Starter
                                    </p>
                                  </div>
                                </div>
                                <div className="hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-end 2xl:content-end 2xl:shrink-0 2xl:overflow-clip" data-cid="n1260">
                                  <div className="hidden 2xl:w-[44.9px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n1261">
                                    <h4 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-2xl 2xl:font-medium 2xl:leading-[1.9375rem] 2xl:tracking-[-0.2px] 2xl:text-right 2xl:whitespace-pre-wrap 2xl:text-balance" data-cid="n1262" dir="auto">
                                      $59
                                    </h4>
                                  </div>
                                  <div className="hidden 2xl:w-[48.5px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n1263">
                                    <p className="hidden 2xl:block 2xl:text-muted-foreground 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-right" data-cid="n1264" dir="auto">
                                      /month
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden 2xl:w-112.5 2xl:flex 2xl:relative 2xl:max-w-112.5 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n1265">
                                <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem] 2xl:text-balance 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1266" dir="auto">
                                  Perfect for businesses looking to improve efficiency and establish a solid production foundation.
                                </p>
                              </div>
                              <div className="hidden 2xl:w-[62.4rem] 2xl:grid 2xl:relative 2xl:justify-center 2xl:shrink-0 2xl:gap-4 2xl:grid-cols-[491.203px_491.203px] 2xl:[grid-auto-rows:min-content] 2xl:overflow-clip" data-cid="n1267">
                                {MediaTile2_data.map((d, i) => <MediaTile2 key={i} d={d} cids={MediaTile2_cids[i]} />)}
                              </div>
                              <div className="hidden 2xl:block 2xl:relative 2xl:z-1 2xl:shrink-0" data-cid="n1288">
                                <a className="hidden 2xl:w-62.5 2xl:h-16 2xl:flex 2xl:relative 2xl:p-6 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:gap-2.5 2xl:overflow-clip 2xl:text-primary 2xl:bg-accent 2xl:cursor-pointer" data-cid="n1289" href="/contact">
                                  <div className="hidden" data-cid="n1290">
                                    <div className="hidden 2xl:w-62.5 2xl:h-16 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-1" data-cid="n1291" aria-hidden="true">
                                      <div className="hidden 2xl:w-84.5 2xl:h-38 2xl:block 2xl:absolute 2xl:-top-11 2xl:-left-11 2xl:[background-position:-1.11629px_-1.11629px] 2xl:[animation-name:hatchMove\_rg4] 2xl:[animation-duration:1.5s] 2xl:[animation-timing-function:linear] 2xl:[animation-iteration-count:infinite] 2xl:pointer-events-none" data-cid="n1292" />
                                    </div>
                                  </div>
                                  <div className="hidden 2xl:w-50.5 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n1293">
                                    <p className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:font-semibold 2xl:leading-[1.625rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1294" dir="auto">
                                      Start a Project
                                    </p>
                                  </div>
                                  <div className="hidden 2xl:w-6 2xl:h-6 2xl:flex 2xl:absolute 2xl:top-[0.4375rem] 2xl:right-2.5 2xl:z-1 2xl:min-w-0 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip" data-cid="n1295">
                                    <div className="hidden 2xl:w-[0.3125rem] 2xl:h-px 2xl:block 2xl:absolute 2xl:top-0.5 2xl:left-[1.1875rem] 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] 2xl:origin-[2.5px_0.5px]" data-cid="n1296" aria-hidden="true">
                                      <div className="hidden 2xl:h-full 2xl:block" data-cid="n1297">
                                        <Icon20 cid={"n1298"} />
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:w-6 2xl:h-6 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1299" aria-hidden="true">
                                      <div className="hidden 2xl:h-full 2xl:block" data-cid="n1300">
                                        <Icon21 cid={"n1301"} />
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hidden 2xl:w-full 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1302">
                          <div className="hidden 2xl:w-[62.4rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n1303">
                            <div className="hidden 2xl:w-4 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" data-cid="n1304" />
                            <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-background" data-cid="n1305" />
                            <div className="hidden 2xl:w-4 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" data-cid="n1306" />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-full 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1307">
                          <div className="hidden 2xl:w-[62.4rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start" data-cid="n1308">
                            <div className="hidden 2xl:basis-0 2xl:shrink-0 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:gap-16" data-cid="n1309">
                              <div className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-end 2xl:content-end 2xl:shrink-0 2xl:overflow-clip" data-cid="n1310">
                                <div className="hidden 2xl:w-[949.9px] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-4" data-cid="n1311">
                                  <div className="hidden 2xl:w-[23.75rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n1312">
                                    <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[4.375rem] 2xl:font-medium 2xl:leading-[3.9375rem] 2xl:tracking-[-2.8px] 2xl:whitespace-pre-wrap 2xl:text-balance" data-cid="n1313" dir="auto">
                                      Professional
                                    </p>
                                  </div>
                                  <div className="hidden 2xl:w-[7.1rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1314">
                                    <div className="hidden 2xl:flex 2xl:relative 2xl:py-1 2xl:px-3 2xl:justify-center 2xl:items-center 2xl:content-center" data-cid="n1315">
                                      <div className="hidden 2xl:w-[7.1rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:z-0 2xl:min-w-0 2xl:shrink-0" data-cid="n1316">
                                        <div className="hidden 2xl:w-[7.1rem] 2xl:h-[1.9rem] 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-1 2xl:shadow-[var(--accent)_0px_0px_0px_1px_inset]" data-cid="n1317" aria-hidden="true">
                                          <div className="hidden 2xl:w-[11.225rem] 2xl:h-[6.025rem] 2xl:block 2xl:absolute 2xl:-top-[2.0625rem] 2xl:-left-[2.0625rem] 2xl:[background-position:-0.837214px_-0.837214px] 2xl:[animation-name:hatchMove\_rg8] 2xl:[animation-duration:1.5s] 2xl:[animation-timing-function:linear] 2xl:[animation-iteration-count:infinite] 2xl:pointer-events-none" data-cid="n1318" />
                                        </div>
                                      </div>
                                      <div className="hidden 2xl:w-[5.6rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n1319">
                                        <p className="hidden 2xl:block 2xl:text-accent 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n1320" dir="auto">
                                          Most Popular
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-end 2xl:content-end 2xl:shrink-0 2xl:overflow-clip" data-cid="n1321">
                                  <div className="hidden 2xl:w-[45.1px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n1322">
                                    <h4 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-2xl 2xl:font-medium 2xl:leading-[1.9375rem] 2xl:tracking-[-0.2px] 2xl:text-right 2xl:whitespace-pre-wrap 2xl:text-balance" data-cid="n1323" dir="auto">
                                      $99
                                    </h4>
                                  </div>
                                  <div className="hidden 2xl:w-[48.5px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n1324">
                                    <p className="hidden 2xl:block 2xl:text-muted-foreground 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-right" data-cid="n1325" dir="auto">
                                      /month
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden 2xl:w-112.5 2xl:flex 2xl:relative 2xl:max-w-112.5 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n1326">
                                <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem] 2xl:text-balance 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1327" dir="auto">
                                  Designed for businesses ready to optimize processes and implement advanced solutions.
                                </p>
                              </div>
                              <div className="hidden 2xl:w-[62.4rem] 2xl:grid 2xl:relative 2xl:justify-center 2xl:shrink-0 2xl:gap-4 2xl:grid-cols-[491.203px_491.203px] 2xl:[grid-auto-rows:min-content] 2xl:overflow-clip" data-cid="n1328">
                                {MediaTile2_data2.map((d, i) => <MediaTile2 key={i} d={d} cids={MediaTile2_cids2[i]} />)}
                              </div>
                              <div className="hidden 2xl:block 2xl:relative 2xl:z-1 2xl:shrink-0" data-cid="n1349">
                                <a className="hidden 2xl:w-62.5 2xl:h-16 2xl:flex 2xl:relative 2xl:p-6 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:gap-2.5 2xl:overflow-clip 2xl:text-primary 2xl:bg-accent 2xl:cursor-pointer" data-cid="n1350" href="/contact">
                                  <div className="hidden" data-cid="n1351">
                                    <div className="hidden 2xl:w-62.5 2xl:h-16 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-1" data-cid="n1352" aria-hidden="true">
                                      <div className="hidden 2xl:w-84.5 2xl:h-38 2xl:block 2xl:absolute 2xl:-top-11 2xl:-left-11 2xl:[background-position:-1.11629px_-1.11629px] 2xl:[animation-name:hatchMove\_rge] 2xl:[animation-duration:1.5s] 2xl:[animation-timing-function:linear] 2xl:[animation-iteration-count:infinite] 2xl:pointer-events-none" data-cid="n1353" />
                                    </div>
                                  </div>
                                  <div className="hidden 2xl:w-50.5 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n1354">
                                    <p className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:font-semibold 2xl:leading-[1.625rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1355" dir="auto">
                                      Start a Project
                                    </p>
                                  </div>
                                  <div className="hidden 2xl:w-6 2xl:h-6 2xl:flex 2xl:absolute 2xl:top-[0.4375rem] 2xl:right-2.5 2xl:z-1 2xl:min-w-0 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip" data-cid="n1356">
                                    <div className="hidden 2xl:w-[0.3125rem] 2xl:h-px 2xl:block 2xl:absolute 2xl:top-0.5 2xl:left-[1.1875rem] 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] 2xl:origin-[2.5px_0.5px]" data-cid="n1357" aria-hidden="true">
                                      <div className="hidden 2xl:h-full 2xl:block" data-cid="n1358">
                                        <Icon20 cid={"n1359"} />
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:w-6 2xl:h-6 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1360" aria-hidden="true">
                                      <div className="hidden 2xl:h-full 2xl:block" data-cid="n1361">
                                        <Icon21 cid={"n1362"} />
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hidden 2xl:w-full 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1363">
                          <div className="hidden 2xl:w-[62.4rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n1364">
                            <div className="hidden 2xl:w-4 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" data-cid="n1365" />
                            <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-background" data-cid="n1366" />
                            <div className="hidden 2xl:w-4 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" data-cid="n1367" />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-full 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1368">
                          <div className="hidden 2xl:w-[62.4rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start" data-cid="n1369">
                            <div className="hidden 2xl:basis-0 2xl:shrink-0 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:gap-16" data-cid="n1370">
                              <div className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-end 2xl:content-end 2xl:shrink-0 2xl:overflow-clip" data-cid="n1371">
                                <div className="hidden 2xl:w-[943.5px] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-4" data-cid="n1372">
                                  <div className="hidden 2xl:w-[19.7625rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n1373">
                                    <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[4.375rem] 2xl:font-medium 2xl:leading-[3.9375rem] 2xl:tracking-[-2.8px] 2xl:whitespace-pre-wrap 2xl:text-balance" data-cid="n1374" dir="auto">
                                      Enterprise
                                    </p>
                                  </div>
                                </div>
                                <div className="hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-end 2xl:content-end 2xl:shrink-0 2xl:overflow-clip" data-cid="n1375">
                                  <div className="hidden 2xl:w-[3.4375rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n1376">
                                    <h4 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-2xl 2xl:font-medium 2xl:leading-[1.9375rem] 2xl:tracking-[-0.2px] 2xl:text-right 2xl:whitespace-pre-wrap 2xl:text-balance" data-cid="n1377" dir="auto">
                                      $199
                                    </h4>
                                  </div>
                                  <div className="hidden 2xl:w-[48.5px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n1378">
                                    <p className="hidden 2xl:block 2xl:text-muted-foreground 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-right" data-cid="n1379" dir="auto">
                                      /month
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden 2xl:w-112.5 2xl:flex 2xl:relative 2xl:max-w-112.5 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n1380">
                                <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem] 2xl:text-balance 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1381" dir="auto">
                                  A complete, end-to-end solution for enterprises that require precision, scalability, and reliability.
                                </p>
                              </div>
                              <div className="hidden 2xl:w-[62.4rem] 2xl:grid 2xl:relative 2xl:justify-center 2xl:shrink-0 2xl:gap-4 2xl:grid-cols-[491.203px_491.203px] 2xl:[grid-auto-rows:min-content] 2xl:overflow-clip" data-cid="n1382">
                                {MediaTile2_data3.map((d, i) => <MediaTile2 key={i} d={d} cids={MediaTile2_cids3[i]} />)}
                              </div>
                              <div className="hidden 2xl:block 2xl:relative 2xl:z-1 2xl:shrink-0" data-cid="n1403">
                                <a className="hidden 2xl:w-62.5 2xl:h-16 2xl:flex 2xl:relative 2xl:p-6 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:gap-2.5 2xl:overflow-clip 2xl:text-primary 2xl:bg-accent 2xl:cursor-pointer" data-cid="n1404" href="/contact">
                                  <div className="hidden" data-cid="n1405">
                                    <div className="hidden 2xl:w-62.5 2xl:h-16 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-1" data-cid="n1406" aria-hidden="true">
                                      <div className="hidden 2xl:w-84.5 2xl:h-38 2xl:block 2xl:absolute 2xl:-top-11 2xl:-left-11 2xl:[background-position:-1.11629px_-1.11629px] 2xl:[animation-name:hatchMove\_rgm] 2xl:[animation-duration:1.5s] 2xl:[animation-timing-function:linear] 2xl:[animation-iteration-count:infinite] 2xl:pointer-events-none" data-cid="n1407" />
                                    </div>
                                  </div>
                                  <div className="hidden 2xl:w-50.5 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n1408">
                                    <p className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:font-semibold 2xl:leading-[1.625rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1409" dir="auto">
                                      Start a Project
                                    </p>
                                  </div>
                                  <div className="hidden 2xl:w-6 2xl:h-6 2xl:flex 2xl:absolute 2xl:top-[0.4375rem] 2xl:right-2.5 2xl:z-1 2xl:min-w-0 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip" data-cid="n1410">
                                    <div className="hidden 2xl:w-[0.3125rem] 2xl:h-px 2xl:block 2xl:absolute 2xl:top-0.5 2xl:left-[1.1875rem] 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] 2xl:origin-[2.5px_0.5px]" data-cid="n1411" aria-hidden="true">
                                      <div className="hidden 2xl:h-full 2xl:block" data-cid="n1412">
                                        <Icon20 cid={"n1413"} />
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:w-6 2xl:h-6 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1414" aria-hidden="true">
                                      <div className="hidden 2xl:h-full 2xl:block" data-cid="n1415">
                                        <Icon21 cid={"n1416"} />
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip" data-cid="n1417" id="reviews">
                <div className="w-full max-w-400 flex relative py-37.5 px-8 flex-col justify-start items-start content-start shrink-0 gap-25 max-lg:py-18 max-lg:px-6 max-lg:gap-12" data-cid="n1418">
                  <div className="w-full max-w-125 flex relative flex-col justify-start items-start content-start shrink-0 gap-4" data-cid="n1419">
                    <div className="contents min-w-0 2xl:w-125 2xl:h-[1.4rem] 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1420">
                      <div className="w-full block relative shrink-0 2xl:flex 2xl:max-w-212.5 2xl:pr-2 2xl:pl-3 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:overflow-clip 2xl:shrink-[initial] after:content-[''] after:block after:absolute after:inset-0 after:w-125 after:h-[1.4rem] max-lg:after:hidden" data-cid="n1421">
                        <div className="flex relative max-w-212.5 pr-2 pl-3 flex-col justify-start items-start content-start overflow-clip 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:max-w-none 2xl:px-0 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] after:content-[''] after:block after:absolute after:inset-0 after:h-[1.4rem] 2xl:after:hidden" data-cid="n1422">
                          <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n1423" dir="auto">
                            <span className="hidden 2xl:inline-block" data-cid="n1424">
                              Reviews
                            </span>
                          </p>
                          <div className="w-[3.525rem] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden" data-cid="n1425">
                            <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" data-cid="n1426" dir="auto">
                              <span className="inline-block 2xl:hidden" data-cid="n1427">
                                Reviews
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-125 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem]" data-cid="n1428">
                      <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]" data-cid="n1429" data-component="heading" dir="auto">
                        {"Trusted by Industry "}
                        <span className="inline text-muted-foreground" data-cid="n1430">
                          Leaders
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="contents min-w-0 2xl:w-384 2xl:h-75 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1431">
                    <div className="w-304 block relative shrink-0 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-384 2xl:h-75 2xl:flex 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:gap-25 2xl:overflow-clip 2xl:shrink-[initial]" data-cid="n1432">
                      <div className="w-full h-full flex relative justify-start items-start content-start gap-25 overflow-clip max-lg:flex-col max-lg:gap-8 2xl:w-2/5 2xl:flex-col 2xl:justify-between 2xl:shrink-0 2xl:gap-[initial]" data-cid="n1433">
                        <div className="w-2/5 h-75 flex relative flex-col justify-between items-start content-start shrink-0 overflow-clip max-lg:w-full max-md:h-[12.6rem] max-lg:justify-start max-lg:gap-8 md:max-lg:h-[10.8rem] 2xl:w-full 2xl:h-[4.8rem] 2xl:justify-start 2xl:gap-4 2xl:[flex-direction:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial]" data-cid="n1434">
                          <div className="w-full flex relative justify-start items-start content-start shrink-0 gap-4 max-lg:flex-col 2xl:w-[8%] 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:aspect-square 2xl:gap-[initial]" data-cid="n1435">
                            <div className="w-12 h-12 flex relative inset-0 justify-center items-center content-center shrink-0 aspect-square 2xl:w-px 2xl:block 2xl:absolute 2xl:z-1 2xl:min-w-0 2xl:right-auto 2xl:bottom-auto 2xl:[justify-content:initial] 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:aspect-[initial]" data-cid="n1436">
                              <div className="w-px h-12 block absolute top-0 left-0 z-1 min-w-0 shrink-0 2xl:flex 2xl:relative 2xl:right-0 2xl:bottom-0 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:z-[initial] 2xl:shrink-[initial]" data-cid="n1437" data-name="Line v">
                                <div className="w-px h-12 flex relative flex-col justify-start items-center content-center 2xl:h-px 2xl:justify-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface 2xl:[flex-direction:initial]" data-cid="n1438" data-name="Line v">
                                  <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1439" />
                                </div>
                              </div>
                              <div className="w-12 h-px block absolute top-0 z-1 min-w-0 shrink-0 2xl:hidden" data-cid="n1440" data-name="Line h">
                                <div className="w-12 h-full flex relative justify-start items-center content-center 2xl:hidden" data-cid="n1441" data-name="Line h">
                                  <div className="h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1442" />
                                </div>
                              </div>
                              <Icon22 cid={"n1443"} />
                            </div>
                            <div className="w-100 h-[4.8rem] flex relative inset-0 max-w-100 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] max-md:h-[3.6rem] max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:h-[1.8rem] 2xl:w-12 2xl:h-px 2xl:block 2xl:absolute 2xl:z-1 2xl:min-w-0 2xl:right-auto 2xl:bottom-auto 2xl:max-w-none 2xl:[flex-direction:initial] 2xl:[justify-content:initial] 2xl:grow-[initial] 2xl:basis-[initial] 2xl:[white-space:inherit] 2xl:[word-break:inherit] 2xl:[overflow-wrap:inherit]" data-cid="n1444">
                              <div className="hidden 2xl:w-12 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n1445" data-name="Line h">
                                <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface" data-cid="n1446" />
                              </div>
                              <h3 className="h-full block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2rem] font-medium leading-[2.375rem] tracking-[-0.3px] text-balance max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:hidden" data-cid="n1447" data-component="heading" dir="auto">
                                Outstanding service and reliability.
                              </h3>
                            </div>
                            <Icon23 cid={"n1448"} />
                          </div>
                          <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-4 overflow-clip 2xl:w-[65%] 2xl:max-w-100 2xl:flex-col 2xl:flex-1 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word] 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:gap-[initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial]" data-cid="n1449">
                            <h3 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[2rem] 2xl:font-medium 2xl:leading-[2.375rem] 2xl:tracking-[-0.3px] 2xl:text-balance" data-cid="n1450" dir="auto">
                              Outstanding service and reliability.
                            </h3>
                            <div className="w-12 block relative shrink-0 aspect-square 2xl:hidden" data-cid="n1451">
                              <div className="w-12 h-full block absolute top-0 left-0 2xl:hidden" data-cid="n1452">
                                <img className="w-full h-12 block overflow-clip object-cover aspect-[auto_3744/5616] 2xl:hidden" data-cid="n1453" data-component="image" alt="man's grey and black shirt" height="5616" sizes="48px" src="/assets/cloned/images/8e544dd0a923.jpg" srcSet="/assets/cloned/images/ce4f3cf2e0ea.jpg 682w, /assets/cloned/images/1628f9a31c9d.jpg 1365w, /assets/cloned/images/e0d354686365.jpg 2730w, /assets/cloned/images/8e544dd0a923.jpg 3744w" width="3744" />
                              </div>
                            </div>
                            <div className="w-[26.4rem] flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-md:w-[16.4375rem] md:max-lg:w-164 2xl:hidden" data-cid="n1454">
                              <div className="w-[26.4rem] flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.4375rem] md:max-lg:w-164 2xl:hidden" data-cid="n1455">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1456" dir="auto">
                                  Michael Carter
                                </p>
                              </div>
                              <div className="w-[26.4rem] flex relative flex-col justify-start shrink-0 max-md:w-[16.4375rem] md:max-lg:w-164 2xl:hidden" data-cid="n1457">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-balance 2xl:hidden" data-cid="n1458" dir="auto">
                                  Operations Director
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[27%] flex relative flex-col justify-start grow shrink-0 basis-0 max-lg:w-full max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-full 2xl:items-center 2xl:content-center 2xl:gap-4 2xl:overflow-clip 2xl:[flex-direction:initial] 2xl:grow-[initial] 2xl:basis-[initial]" data-cid="n1459">
                          <div className="hidden 2xl:w-12 2xl:block 2xl:relative 2xl:shrink-0 2xl:aspect-square" data-cid="n1460">
                            <div className="hidden 2xl:w-12 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n1461">
                              <img className="hidden 2xl:w-full 2xl:h-12 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_3744/5616]" data-cid="n1462" alt="man's grey and black shirt" height="5616" sizes="48px" src="/assets/cloned/images/8e544dd0a923.jpg" srcSet="/assets/cloned/images/ce4f3cf2e0ea.jpg 682w, /assets/cloned/images/1628f9a31c9d.jpg 1365w, /assets/cloned/images/e0d354686365.jpg 2730w, /assets/cloned/images/8e544dd0a923.jpg 3744w" width="3744" />
                            </div>
                          </div>
                          <div className="hidden 2xl:w-[34.4rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip" data-cid="n1463">
                            <div className="hidden 2xl:w-[34.4rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n1464">
                              <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1465" dir="auto">
                                Michael Carter
                              </p>
                            </div>
                            <div className="hidden 2xl:w-[34.4rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n1466">
                              <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n1467" dir="auto">
                                Operations Director
                              </p>
                            </div>
                          </div>
                          <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1468" dir="auto">
                            From the initial consultation to final implementation, everything was handled with precision. What impressed us most was their ability to simplify complex processes and turn them into clear.
                          </p>
                        </div>
                        <div className="w-50 h-75 flex relative max-w-50 pr-2 pb-2 flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-8 overflow-clip max-md:w-[20.4375rem] max-lg:h-11 max-lg:max-w-none max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:hidden" data-cid="n1469">
                          <div className="w-50 h-187.5 block absolute top-[-225.5px] left-0 z-0 min-w-0 shrink-0 transform-[matrix(1,0,0,1,0,100)] max-md:w-[20.4375rem] max-lg:h-32.5 max-lg:top-[-43.1px] md:max-lg:w-180 2xl:hidden" data-cid="n1470">
                            <div className="h-full min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-4 2xl:hidden" data-cid="n1471" aria-hidden="true">
                              <div className="h-209.5 block absolute -top-11 -inset-x-11 [background-position:-1.75815px_-1.75815px] [animation-name:hatchMove\_ra5] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-lg:h-54.5 max-md:[background-position:-9.17466px_-9.17466px] max-lg:[animation-name:hatchMove\_r5o] md:max-lg:[background-position:-10.6764px_-10.6764px] 2xl:hidden" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface) 0px, var(--surface) 2px, var(--clr-2) 2px, var(--clr-2) 16px)" }} data-cid="n1472" />
                            </div>
                          </div>
                          <div className="w-50 h-px block absolute bottom-0 z-1 min-w-0 shrink-0 transform-[matrix(-1,0,0,-1,0,0)] origin-[100px_0.5px] max-md:w-[20.4375rem] max-md:origin-[163.5px_0.5px] md:max-lg:w-180 md:max-lg:origin-[360px_0.5px] 2xl:hidden" data-cid="n1473" data-name="Line h">
                            <div className="h-full flex relative justify-start items-center content-center 2xl:hidden" data-cid="n1474" data-name="Line h">
                              <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1475" />
                            </div>
                          </div>
                          <div className="w-px h-75 block absolute right-0 bottom-0 z-1 min-w-0 shrink-0 transform-[matrix(-1,0,0,-1,0,0)] origin-[0.5px_150px] max-lg:h-13 max-lg:origin-[0.5px_26px] 2xl:hidden" data-cid="n1476" data-name="Line v">
                            <div className="w-px h-full flex relative flex-col justify-start items-center content-center 2xl:hidden" data-cid="n1477" data-name="Line v">
                              <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1478" />
                            </div>
                          </div>
                          <div className="w-50 h-full flex absolute top-0 left-0 z-0 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-background max-md:w-[20.4375rem] md:max-lg:w-180 2xl:hidden" style={{ maskImage: "radial-gradient(75% 90% at 100% 100%, var(--clr-2) 0%, var(--foreground) 100%)" }} data-cid="n1479" />
                          <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-4 max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-6 max-lg:[flex-direction:initial] 2xl:hidden" data-cid="n1480">
                            <div className="w-37.5 flex relative max-w-37.5 flex-col justify-start shrink-0 max-md:w-[218.7px] max-lg:flex-1 max-lg:order-[1] max-lg:max-w-none md:max-lg:w-[611.7px] 2xl:hidden" data-cid="n1481">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-balance 2xl:hidden" data-cid="n1482" dir="auto">
                                Reduced operational costs
                              </p>
                            </div>
                            <div className="w-48 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:w-[76.3px] max-lg:whitespace-pre max-lg:text-nowrap 2xl:hidden" data-cid="n1483">
                              <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px] max-lg:text-right max-lg:whitespace-pre-wrap 2xl:hidden" data-cid="n1484" data-component="heading" dir="auto">
                                28%
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden 2xl:w-[32.6rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0" data-cid="n1485">
                        <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem] 2xl:text-balance 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1486" dir="auto">
                          From the initial consultation to final implementation, everything was handled with precision. What impressed us most was their ability to simplify complex processes and turn them into clear.
                        </p>
                      </div>
                      <div className="hidden 2xl:w-50 2xl:h-full 2xl:flex 2xl:relative 2xl:max-w-50 2xl:pr-2 2xl:pb-2 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-8 2xl:overflow-clip" data-cid="n1487">
                        <div className="hidden 2xl:w-50 2xl:h-187.5 2xl:block 2xl:absolute 2xl:top-[-225.5px] 2xl:left-0 2xl:z-0 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(1,0,0,1,0,100)]" data-cid="n1488">
                          <div className="hidden 2xl:w-50 2xl:h-187.5 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-4" data-cid="n1489" aria-hidden="true">
                            <div className="hidden 2xl:w-72 2xl:h-209.5 2xl:block 2xl:absolute 2xl:-top-11 2xl:-left-11 2xl:[background-position:-1.11629px_-1.11629px] 2xl:[animation-name:hatchMove\_rgs] 2xl:[animation-duration:1.5s] 2xl:[animation-timing-function:linear] 2xl:[animation-iteration-count:infinite] 2xl:pointer-events-none" data-cid="n1490" />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-50 2xl:h-px 2xl:block 2xl:absolute 2xl:bottom-0 2xl:z-1 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(-1,0,0,-1,0,0)] 2xl:origin-[100px_0.5px]" data-cid="n1491" data-name="Line h">
                          <div className="hidden 2xl:w-50 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n1492" data-name="Line h">
                            <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface" data-cid="n1493" />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-px 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:right-0 2xl:z-1 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(-1,0,0,-1,0,0)] 2xl:origin-[0.5px_150px]" data-cid="n1494" data-name="Line v">
                          <div className="hidden 2xl:w-px 2xl:h-75 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n1495" data-name="Line v">
                            <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface" data-cid="n1496" />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-50 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:left-0 2xl:z-0 2xl:min-w-0 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip 2xl:bg-background" data-cid="n1497" />
                        <div className="hidden 2xl:w-48 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-4" data-cid="n1498">
                          <div className="hidden 2xl:w-37.5 2xl:flex 2xl:relative 2xl:max-w-37.5 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n1499">
                            <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n1500" dir="auto">
                              Reduced operational costs
                            </p>
                          </div>
                          <div className="hidden 2xl:w-48 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n1501">
                            <h2 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[2.75rem] 2xl:font-medium 2xl:leading-11 2xl:tracking-[-1.76px] 2xl:text-balance" data-cid="n1502" dir="auto">
                              28%
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contents min-w-0 2xl:w-384 2xl:h-px 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1503">
                    <div className="w-304 block relative shrink-0 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-384 2xl:flex 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-[initial]" data-cid="n1504">
                      <div className="w-304 h-px flex relative justify-start items-center content-center max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-4 2xl:justify-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" data-cid="n1505">
                        <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" data-cid="n1506" />
                        <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1507" />
                        <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" data-cid="n1508" />
                      </div>
                      <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface" data-cid="n1509" />
                      <div className="hidden 2xl:w-4 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" data-cid="n1510" />
                    </div>
                  </div>
                  <div className="contents min-w-0 2xl:w-384 2xl:h-75 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1511">
                    <div className="w-304 block relative shrink-0 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-384 2xl:h-75 2xl:flex 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:gap-25 2xl:overflow-clip 2xl:shrink-[initial]" data-cid="n1512">
                      <div className="w-full h-full flex relative justify-start items-start content-start gap-25 overflow-clip max-lg:flex-col max-lg:gap-8 2xl:w-2/5 2xl:flex-col 2xl:justify-between 2xl:shrink-0 2xl:gap-[initial]" data-cid="n1513">
                        <div className="w-2/5 h-75 flex relative flex-col justify-between items-start content-start shrink-0 overflow-clip max-lg:w-full max-lg:h-[12.6rem] max-lg:justify-start max-lg:gap-8 2xl:w-full 2xl:h-[4.8rem] 2xl:justify-start 2xl:gap-4 2xl:[flex-direction:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial]" data-cid="n1514">
                          <div className="w-full flex relative justify-start items-start content-start shrink-0 gap-4 max-lg:flex-col 2xl:w-[8%] 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:aspect-square 2xl:gap-[initial]" data-cid="n1515">
                            <div className="w-12 h-12 flex relative inset-0 justify-center items-center content-center shrink-0 aspect-square 2xl:w-px 2xl:block 2xl:absolute 2xl:z-1 2xl:min-w-0 2xl:right-auto 2xl:bottom-auto 2xl:[justify-content:initial] 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:aspect-[initial]" data-cid="n1516">
                              <div className="w-px h-12 block absolute top-0 left-0 z-1 min-w-0 shrink-0 2xl:flex 2xl:relative 2xl:right-0 2xl:bottom-0 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:z-[initial] 2xl:shrink-[initial]" data-cid="n1517" data-name="Line v">
                                <div className="w-px h-12 flex relative flex-col justify-start items-center content-center 2xl:h-px 2xl:justify-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface 2xl:[flex-direction:initial]" data-cid="n1518" data-name="Line v">
                                  <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1519" />
                                </div>
                              </div>
                              <div className="w-12 h-px block absolute top-0 z-1 min-w-0 shrink-0 2xl:hidden" data-cid="n1520" data-name="Line h">
                                <div className="w-12 h-full flex relative justify-start items-center content-center 2xl:hidden" data-cid="n1521" data-name="Line h">
                                  <div className="h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1522" />
                                </div>
                              </div>
                              <Icon22 cid={"n1523"} />
                            </div>
                            <div className="w-100 h-[4.8rem] flex relative inset-0 max-w-100 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] max-lg:h-[3.6rem] max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-12 2xl:h-px 2xl:block 2xl:absolute 2xl:z-1 2xl:min-w-0 2xl:right-auto 2xl:bottom-auto 2xl:max-w-none 2xl:[flex-direction:initial] 2xl:[justify-content:initial] 2xl:grow-[initial] 2xl:basis-[initial] 2xl:[white-space:inherit] 2xl:[word-break:inherit] 2xl:[overflow-wrap:inherit]" data-cid="n1524">
                              <div className="hidden 2xl:w-12 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n1525" data-name="Line h">
                                <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface" data-cid="n1526" />
                              </div>
                              <h3 className="h-full block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2rem] font-medium leading-[2.375rem] tracking-[-0.3px] text-balance max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:hidden" data-cid="n1527" data-component="heading" dir="auto">
                                Highly professional and detail-oriented team.
                              </h3>
                            </div>
                            <Icon23 cid={"n1528"} />
                          </div>
                          <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-4 overflow-clip 2xl:w-[65%] 2xl:max-w-100 2xl:flex-col 2xl:flex-1 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word] 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:gap-[initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial]" data-cid="n1529">
                            <h3 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[2rem] 2xl:font-medium 2xl:leading-[2.375rem] 2xl:tracking-[-0.3px] 2xl:text-balance" data-cid="n1530" dir="auto">
                              Highly professional and detail-oriented team.
                            </h3>
                            <div className="w-12 block relative shrink-0 aspect-square 2xl:hidden" data-cid="n1531">
                              <div className="w-12 h-full block absolute top-0 left-0 2xl:hidden" data-cid="n1532">
                                <img className="w-full h-12 block overflow-clip object-cover aspect-[auto_3974/5000] 2xl:hidden" data-cid="n1533" data-component="image" alt="woman in white crew neck shirt smiling" height="5000" sizes="48px" src="/assets/cloned/images/28ff515b8451.jpg" srcSet="/assets/cloned/images/902eb8da2592.jpg 813w, /assets/cloned/images/f276ec10d294.jpg 1627w, /assets/cloned/images/9f976d6d8d71.jpg 3255w, /assets/cloned/images/28ff515b8451.jpg 3974w" width="3974" />
                              </div>
                            </div>
                            <div className="w-[26.4rem] flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-md:w-[16.4375rem] md:max-lg:w-164 2xl:hidden" data-cid="n1534">
                              <div className="w-[26.4rem] flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.4375rem] md:max-lg:w-164 2xl:hidden" data-cid="n1535">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1536" dir="auto">
                                  Jane Smith
                                </p>
                              </div>
                              <div className="w-[26.4rem] flex relative flex-col justify-start shrink-0 max-md:w-[16.4375rem] md:max-lg:w-164 2xl:hidden" data-cid="n1537">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-balance 2xl:hidden" data-cid="n1538" dir="auto">
                                  Head of Production
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[27%] flex relative flex-col justify-start grow shrink-0 basis-0 max-lg:w-full max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-full 2xl:items-center 2xl:content-center 2xl:gap-4 2xl:overflow-clip 2xl:[flex-direction:initial] 2xl:grow-[initial] 2xl:basis-[initial]" data-cid="n1539">
                          <div className="hidden 2xl:w-12 2xl:block 2xl:relative 2xl:shrink-0 2xl:aspect-square" data-cid="n1540">
                            <div className="hidden 2xl:w-12 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n1541">
                              <img className="hidden 2xl:w-full 2xl:h-12 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_3974/5000]" data-cid="n1542" alt="woman in white crew neck shirt smiling" height="5000" sizes="48px" src="/assets/cloned/images/28ff515b8451.jpg" srcSet="/assets/cloned/images/902eb8da2592.jpg 813w, /assets/cloned/images/f276ec10d294.jpg 1627w, /assets/cloned/images/9f976d6d8d71.jpg 3255w, /assets/cloned/images/28ff515b8451.jpg 3974w" width="3974" />
                            </div>
                          </div>
                          <div className="hidden 2xl:w-[34.4rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip" data-cid="n1543">
                            <div className="hidden 2xl:w-[34.4rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n1544">
                              <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1545" dir="auto">
                                Jane Smith
                              </p>
                            </div>
                            <div className="hidden 2xl:w-[34.4rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n1546">
                              <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n1547" dir="auto">
                                Head of Production
                              </p>
                            </div>
                          </div>
                          <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1548" dir="auto">
                            From the initial consultation to final implementation, everything was handled with precision. Their ability to simplify complex systems into clear processes was impressive.
                          </p>
                        </div>
                        <div className="w-50 h-75 flex relative max-w-50 pr-2 pb-2 flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-8 overflow-clip max-md:w-[20.4375rem] max-lg:h-11 max-lg:max-w-none max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-180 2xl:hidden" data-cid="n1549">
                          <div className="w-50 h-187.5 block absolute top-[-225.5px] left-0 z-0 min-w-0 shrink-0 transform-[matrix(1,0,0,1,0,100)] max-md:w-[20.4375rem] max-lg:h-32.5 max-lg:top-[-43.1px] md:max-lg:w-180 2xl:hidden" data-cid="n1550">
                            <div className="h-full min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-4 2xl:hidden" data-cid="n1551" aria-hidden="true">
                              <div className="h-209.5 block absolute -top-11 -inset-x-11 [background-position:-1.75815px_-1.75815px] [animation-name:hatchMove\_rac] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-lg:h-54.5 max-md:[background-position:-9.17466px_-9.17466px] max-lg:[animation-name:hatchMove\_r5v] md:max-lg:[background-position:-10.6764px_-10.6764px] 2xl:hidden" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface) 0px, var(--surface) 2px, var(--clr-2) 2px, var(--clr-2) 16px)" }} data-cid="n1552" />
                            </div>
                          </div>
                          <div className="w-50 h-px block absolute bottom-0 z-1 min-w-0 shrink-0 transform-[matrix(-1,0,0,-1,0,0)] origin-[100px_0.5px] max-md:w-[20.4375rem] max-md:origin-[163.5px_0.5px] md:max-lg:w-180 md:max-lg:origin-[360px_0.5px] 2xl:hidden" data-cid="n1553" data-name="Line h">
                            <div className="h-full flex relative justify-start items-center content-center 2xl:hidden" data-cid="n1554" data-name="Line h">
                              <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1555" />
                            </div>
                          </div>
                          <div className="w-px h-75 block absolute right-0 bottom-0 z-1 min-w-0 shrink-0 transform-[matrix(-1,0,0,-1,0,0)] origin-[0.5px_150px] max-lg:h-13 max-lg:origin-[0.5px_26px] 2xl:hidden" data-cid="n1556" data-name="Line v">
                            <div className="w-px h-full flex relative flex-col justify-start items-center content-center 2xl:hidden" data-cid="n1557" data-name="Line v">
                              <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1558" />
                            </div>
                          </div>
                          <div className="w-50 h-full flex absolute top-0 left-0 z-0 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-background max-md:w-[20.4375rem] md:max-lg:w-180 2xl:hidden" style={{ maskImage: "radial-gradient(75% 90% at 100% 100%, var(--clr-2) 0%, var(--foreground) 100%)" }} data-cid="n1559" />
                          <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-4 max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-6 max-lg:[flex-direction:initial] 2xl:hidden" data-cid="n1560">
                            <div className="w-37.5 flex relative max-w-37.5 flex-col justify-start shrink-0 max-md:w-[218.7px] max-lg:flex-1 max-lg:order-[1] max-lg:max-w-none md:max-lg:w-[611.7px] 2xl:hidden" data-cid="n1561">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-balance 2xl:hidden" data-cid="n1562" dir="auto">
                                Increased production efficiency
                              </p>
                            </div>
                            <div className="w-48 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-lg:w-[76.3px] max-lg:whitespace-pre max-lg:text-nowrap 2xl:hidden" data-cid="n1563">
                              <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px] max-lg:text-right max-lg:whitespace-pre-wrap 2xl:hidden" data-cid="n1564" data-component="heading" dir="auto">
                                35%
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden 2xl:w-[32.6rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0" data-cid="n1565">
                        <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem] 2xl:text-balance 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1566" dir="auto">
                          From the initial consultation to final implementation, everything was handled with precision. Their ability to simplify complex systems into clear processes was impressive.
                        </p>
                      </div>
                      <div className="hidden 2xl:w-50 2xl:h-full 2xl:flex 2xl:relative 2xl:max-w-50 2xl:pr-2 2xl:pb-2 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-8 2xl:overflow-clip" data-cid="n1567">
                        <div className="hidden 2xl:w-50 2xl:h-187.5 2xl:block 2xl:absolute 2xl:top-[-225.5px] 2xl:left-0 2xl:z-0 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(1,0,0,1,0,100)]" data-cid="n1568">
                          <div className="hidden 2xl:w-50 2xl:h-187.5 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-4" data-cid="n1569" aria-hidden="true">
                            <div className="hidden 2xl:w-72 2xl:h-209.5 2xl:block 2xl:absolute 2xl:-top-11 2xl:-left-11 2xl:[background-position:-1.11629px_-1.11629px] 2xl:[animation-name:hatchMove\_rh4] 2xl:[animation-duration:1.5s] 2xl:[animation-timing-function:linear] 2xl:[animation-iteration-count:infinite] 2xl:pointer-events-none" data-cid="n1570" />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-50 2xl:h-px 2xl:block 2xl:absolute 2xl:bottom-0 2xl:z-1 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(-1,0,0,-1,0,0)] 2xl:origin-[100px_0.5px]" data-cid="n1571" data-name="Line h">
                          <div className="hidden 2xl:w-50 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n1572" data-name="Line h">
                            <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface" data-cid="n1573" />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-px 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:right-0 2xl:z-1 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(-1,0,0,-1,0,0)] 2xl:origin-[0.5px_150px]" data-cid="n1574" data-name="Line v">
                          <div className="hidden 2xl:w-px 2xl:h-75 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n1575" data-name="Line v">
                            <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface" data-cid="n1576" />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-50 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:left-0 2xl:z-0 2xl:min-w-0 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip 2xl:bg-background" data-cid="n1577" />
                        <div className="hidden 2xl:w-48 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-4" data-cid="n1578">
                          <div className="hidden 2xl:w-37.5 2xl:flex 2xl:relative 2xl:max-w-37.5 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n1579">
                            <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n1580" dir="auto">
                              Increased production efficiency
                            </p>
                          </div>
                          <div className="hidden 2xl:w-48 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n1581">
                            <h2 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[2.75rem] 2xl:font-medium 2xl:leading-11 2xl:tracking-[-1.76px] 2xl:text-balance" data-cid="n1582" dir="auto">
                              35%
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contents min-w-0 2xl:w-384 2xl:h-px 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1583">
                    <div className="w-304 block relative shrink-0 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-384 2xl:flex 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-[initial]" data-cid="n1584">
                      <div className="w-304 h-px flex relative justify-start items-center content-center max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-4 2xl:justify-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" data-cid="n1585">
                        <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" data-cid="n1586" />
                        <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1587" />
                        <div className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" data-cid="n1588" />
                      </div>
                      <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface" data-cid="n1589" />
                      <div className="hidden 2xl:w-4 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" data-cid="n1590" />
                    </div>
                  </div>
                  <div className="contents min-w-0 2xl:w-384 2xl:h-75 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n1591">
                    <div className="w-304 block relative shrink-0 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-384 2xl:h-75 2xl:flex 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:gap-25 2xl:overflow-clip 2xl:shrink-[initial]" data-cid="n1592">
                      <div className="w-full h-full flex relative justify-start items-start content-start gap-25 overflow-clip max-lg:flex-col max-lg:gap-8 2xl:w-2/5 2xl:flex-col 2xl:justify-between 2xl:shrink-0 2xl:gap-[initial]" data-cid="n1593">
                        <div className="w-2/5 h-75 flex relative flex-col justify-between items-start content-start shrink-0 overflow-clip max-lg:w-full max-lg:h-[10.8rem] max-lg:justify-start max-lg:gap-8 2xl:w-full 2xl:h-[4.8rem] 2xl:justify-start 2xl:gap-4 2xl:[flex-direction:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial]" data-cid="n1594">
                          <div className="w-full flex relative justify-start items-start content-start shrink-0 gap-4 max-lg:flex-col 2xl:w-[8%] 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:aspect-square 2xl:gap-[initial]" data-cid="n1595">
                            <div className="w-12 h-12 flex relative inset-0 justify-center items-center content-center shrink-0 aspect-square 2xl:w-px 2xl:block 2xl:absolute 2xl:z-1 2xl:min-w-0 2xl:right-auto 2xl:bottom-auto 2xl:[justify-content:initial] 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:aspect-[initial]" data-cid="n1596">
                              <div className="w-px h-12 block absolute top-0 left-0 z-1 min-w-0 shrink-0 2xl:flex 2xl:relative 2xl:right-0 2xl:bottom-0 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:z-[initial] 2xl:shrink-[initial]" data-cid="n1597" data-name="Line v">
                                <div className="w-px h-12 flex relative flex-col justify-start items-center content-center 2xl:h-px 2xl:justify-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface 2xl:[flex-direction:initial]" data-cid="n1598" data-name="Line v">
                                  <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1599" />
                                </div>
                              </div>
                              <div className="w-12 h-px block absolute top-0 z-1 min-w-0 shrink-0 2xl:hidden" data-cid="n1600" data-name="Line h">
                                <div className="w-12 h-full flex relative justify-start items-center content-center 2xl:hidden" data-cid="n1601" data-name="Line h">
                                  <div className="h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1602" />
                                </div>
                              </div>
                              <Icon22 cid={"n1603"} />
                            </div>
                            <div className="w-100 h-[4.8rem] flex relative inset-0 max-w-100 flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem] max-lg:h-[1.8rem] max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-12 2xl:h-px 2xl:block 2xl:absolute 2xl:z-1 2xl:min-w-0 2xl:right-auto 2xl:bottom-auto 2xl:max-w-none 2xl:[flex-direction:initial] 2xl:[justify-content:initial] 2xl:grow-[initial] 2xl:basis-[initial] 2xl:[white-space:inherit] 2xl:[word-break:inherit] 2xl:[overflow-wrap:inherit]" data-cid="n1604">
                              <div className="hidden 2xl:w-12 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n1605" data-name="Line h">
                                <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface" data-cid="n1606" />
                              </div>
                              <h3 className="h-full block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2rem] font-medium leading-[2.375rem] tracking-[-0.3px] text-balance max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:hidden" data-cid="n1607" data-component="heading" dir="auto">
                                A reliable long-term partner.
                              </h3>
                            </div>
                            <Icon23 cid={"n1608"} />
                          </div>
                          <div className="w-full flex relative justify-start items-center content-center shrink-0 gap-4 overflow-clip 2xl:w-[65%] 2xl:max-w-100 2xl:flex-col 2xl:flex-1 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word] 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:gap-[initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial]" data-cid="n1609">
                            <h3 className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[2rem] 2xl:font-medium 2xl:leading-[2.375rem] 2xl:tracking-[-0.3px] 2xl:text-balance" data-cid="n1610" dir="auto">
                              A reliable long-term partner.
                            </h3>
                            <div className="w-12 block relative shrink-0 aspect-square 2xl:hidden" data-cid="n1611">
                              <div className="w-12 h-full block absolute top-0 left-0 2xl:hidden" data-cid="n1612">
                                <img className="w-full h-12 block overflow-clip object-cover aspect-[auto_3000/4499] 2xl:hidden" data-cid="n1613" data-component="image" alt="man wearing Henley top portrait" height="4499" sizes="48px" src="/assets/cloned/images/9c3f3f411d3c.jpg" srcSet="/assets/cloned/images/ed2faf12d594.jpg 682w, /assets/cloned/images/d7813cb1fed6.jpg 1365w, /assets/cloned/images/a7e77557cd19.jpg 2731w, /assets/cloned/images/9c3f3f411d3c.jpg 3000w" width="3000" />
                              </div>
                            </div>
                            <div className="w-[26.4rem] flex relative flex-col justify-center items-center content-center grow shrink-0 basis-0 overflow-clip max-md:w-[16.4375rem] md:max-lg:w-164 2xl:hidden" data-cid="n1614">
                              <div className="w-[26.4rem] flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.4375rem] md:max-lg:w-164 2xl:hidden" data-cid="n1615">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1616" dir="auto">
                                  Robert Hughes
                                </p>
                              </div>
                              <div className="w-[26.4rem] flex relative flex-col justify-start shrink-0 max-md:w-[16.4375rem] md:max-lg:w-164 2xl:hidden" data-cid="n1617">
                                <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-balance 2xl:hidden" data-cid="n1618" dir="auto">
                                  Technical Director
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[27%] flex relative flex-col justify-start grow shrink-0 basis-0 max-lg:w-full max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-full 2xl:items-center 2xl:content-center 2xl:gap-4 2xl:overflow-clip 2xl:[flex-direction:initial] 2xl:grow-[initial] 2xl:basis-[initial]" data-cid="n1619">
                          <div className="hidden 2xl:w-12 2xl:block 2xl:relative 2xl:shrink-0 2xl:aspect-square" data-cid="n1620">
                            <div className="hidden 2xl:w-12 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n1621">
                              <img className="hidden 2xl:w-full 2xl:h-12 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_3000/4499]" data-cid="n1622" alt="man wearing Henley top portrait" height="4499" sizes="48px" src="/assets/cloned/images/9c3f3f411d3c.jpg" srcSet="/assets/cloned/images/ed2faf12d594.jpg 682w, /assets/cloned/images/d7813cb1fed6.jpg 1365w, /assets/cloned/images/a7e77557cd19.jpg 2731w, /assets/cloned/images/9c3f3f411d3c.jpg 3000w" width="3000" />
                            </div>
                          </div>
                          <div className="hidden 2xl:w-[34.4rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip" data-cid="n1623">
                            <div className="hidden 2xl:w-[34.4rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n1624">
                              <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1625" dir="auto">
                                Robert Hughes
                              </p>
                            </div>
                            <div className="hidden 2xl:w-[34.4rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n1626">
                              <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n1627" dir="auto">
                                Technical Director
                              </p>
                            </div>
                          </div>
                          <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" data-cid="n1628" dir="auto">
                            They don’t just deliver results — they think ahead. Their strategic approach helped us improve multiple areas of our operations.
                          </p>
                        </div>
                        <div className="w-50 h-full flex relative max-w-50 pr-2 pb-2 flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-8 overflow-clip transform-[none] max-lg:opacity-0 2xl:hidden" data-cid="n1629">
                          <div className="w-50 h-187.5 block absolute top-[-225.5px] left-0 z-0 min-w-0 shrink-0 transform-[matrix(1,0,0,1,0,100)] max-md:w-[20.4375rem] max-lg:h-32.5 max-lg:top-[-49.9px] md:max-lg:w-180 2xl:hidden" data-cid="n1630">
                            <div className="h-full min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-4 2xl:hidden" data-cid="n1631" aria-hidden="true">
                              <div className="h-209.5 block absolute -top-11 -inset-x-11 [background-position:-1.75815px_-1.75815px] [animation-name:hatchMove\_raj] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-lg:h-54.5 max-md:[background-position:-9.17466px_-9.17466px] max-lg:[animation-name:hatchMove\_r66] md:max-lg:[background-position:-10.6764px_-10.6764px] 2xl:hidden" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface) 0px, var(--surface) 2px, var(--clr-2) 2px, var(--clr-2) 16px)" }} data-cid="n1632" />
                            </div>
                          </div>
                          <div className="w-50 h-px block absolute bottom-0 z-1 min-w-0 shrink-0 transform-[matrix(-1,0,0,-1,0,0)] origin-[100px_0.5px] max-md:w-[20.4375rem] max-md:origin-[163.5px_0.5px] md:max-lg:w-180 md:max-lg:origin-[360px_0.5px] 2xl:hidden" data-cid="n1633" data-name="Line h">
                            <div className="h-full flex relative justify-start items-center content-center 2xl:hidden" data-cid="n1634" data-name="Line h">
                              <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1635" />
                            </div>
                          </div>
                          <div className="w-px h-75 block absolute right-0 bottom-0 z-1 min-w-0 shrink-0 transform-[matrix(-1,0,0,-1,0,0)] origin-[0.5px_150px] max-lg:h-13 max-lg:origin-[0.5px_26px] 2xl:hidden" data-cid="n1636" data-name="Line v">
                            <div className="w-px h-full flex relative flex-col justify-start items-center content-center 2xl:hidden" data-cid="n1637" data-name="Line v">
                              <div className="w-px h-px flex relative justify-center items-center content-center shrink-0 overflow-clip bg-surface 2xl:hidden" data-cid="n1638" />
                            </div>
                          </div>
                          <div className="w-50 h-full flex absolute top-0 left-0 z-0 min-w-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip bg-background max-md:w-[20.4375rem] md:max-lg:w-180 2xl:hidden" style={{ maskImage: "radial-gradient(75% 90% at 100% 100%, var(--clr-2) 0%, var(--foreground) 100%)" }} data-cid="n1639" />
                          <div className="w-full flex relative flex-col justify-center items-start content-start shrink-0 gap-4 max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-6 max-lg:[flex-direction:initial] 2xl:hidden" data-cid="n1640">
                            <div className="w-37.5 flex relative max-w-37.5 flex-col justify-start shrink-0 max-md:w-[19.9375rem] max-lg:flex-1 max-lg:order-[1] max-lg:max-w-none md:max-lg:w-178 2xl:hidden" data-cid="n1641">
                              <p className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-balance 2xl:hidden" data-cid="n1642" dir="auto">
                                Ongoing collaboration across multiple projects
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden 2xl:w-[32.6rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0" data-cid="n1643">
                        <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem] 2xl:text-balance 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n1644" dir="auto">
                          They don’t just deliver results — they think ahead. Their strategic approach helped us improve multiple areas of our operations.
                        </p>
                      </div>
                      <div className="hidden 2xl:w-50 2xl:h-full 2xl:flex 2xl:relative 2xl:max-w-50 2xl:pr-2 2xl:pb-2 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-8 2xl:overflow-clip" data-cid="n1645">
                        <div className="hidden 2xl:w-50 2xl:h-187.5 2xl:block 2xl:absolute 2xl:top-[-225.5px] 2xl:left-0 2xl:z-0 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(1,0,0,1,0,100)]" data-cid="n1646">
                          <div className="hidden 2xl:w-50 2xl:h-187.5 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-4" data-cid="n1647" aria-hidden="true">
                            <div className="hidden 2xl:w-72 2xl:h-209.5 2xl:block 2xl:absolute 2xl:-top-11 2xl:-left-11 2xl:[background-position:-1.11629px_-1.11629px] 2xl:[animation-name:hatchMove\_rhc] 2xl:[animation-duration:1.5s] 2xl:[animation-timing-function:linear] 2xl:[animation-iteration-count:infinite] 2xl:pointer-events-none" data-cid="n1648" />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-50 2xl:h-px 2xl:block 2xl:absolute 2xl:bottom-0 2xl:z-1 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(-1,0,0,-1,0,0)] 2xl:origin-[100px_0.5px]" data-cid="n1649" data-name="Line h">
                          <div className="hidden 2xl:w-50 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n1650" data-name="Line h">
                            <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface" data-cid="n1651" />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-px 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:right-0 2xl:z-1 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(-1,0,0,-1,0,0)] 2xl:origin-[0.5px_150px]" data-cid="n1652" data-name="Line v">
                          <div className="hidden 2xl:w-px 2xl:h-75 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center" data-cid="n1653" data-name="Line v">
                            <div className="hidden 2xl:w-px 2xl:h-px 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-surface" data-cid="n1654" />
                          </div>
                        </div>
                        <div className="hidden 2xl:w-50 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:left-0 2xl:z-0 2xl:min-w-0 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip 2xl:bg-background" data-cid="n1655" />
                        <div className="hidden 2xl:w-48 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-center 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-4" data-cid="n1656">
                          <div className="hidden 2xl:w-37.5 2xl:flex 2xl:relative 2xl:max-w-37.5 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n1657">
                            <p className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n1658" dir="auto">
                              Ongoing collaboration across multiple projects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip" data-cid="n1659" id="reviews-1">
                <div className="w-full max-w-400 flex relative py-37.5 px-8 justify-start items-start content-start shrink-0 gap-25 max-lg:py-18 max-lg:px-6 max-lg:flex-col max-lg:gap-8" data-cid="n1660">
                  <div className="w-full max-w-87.5 flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-4 max-lg:grow-[initial] max-lg:basis-[initial]" data-cid="n1661">
                    <div className="w-87.5 flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[20.4375rem]" data-cid="n1662">
                      <h2 className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]" data-cid="n1663" data-component="heading" dir="auto">
                        {"Frequently Asked "}
                        <span className="inline text-muted-foreground" data-cid="n1664">
                          Questions
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="w-[63%] flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-1 max-lg:w-full max-lg:grow-[initial] max-lg:basis-[initial] 2xl:w-[70.5%]" data-cid="n1665" data-reveal>
                    <FaqAccordion items={MediaCard4_data} />
                  </div>
                </div>
              </section>
              <CardGridSection7 />
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
                          {"Ready to "}
                          <span className="hidden 2xl:inline 2xl:text-clr-3" data-cid="n2099">
                            Modernize
                          </span>
                          {" Your Industrial Operations?"}
                        </h1>
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
                            {"Ready to "}
                            <span className="inline text-clr-3 2xl:hidden" data-cid="n2117">
                              Modernize
                            </span>
                            {" Your Industrial Operations?"}
                          </h1>
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
                            <img className="hidden 2xl:w-full 2xl:h-7 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_396/80]" data-cid="n2134" alt="" height="80" src="/assets/energex/logo-on-dark-cropped.png" width="396" />
                          </div>
                        </a>
                      </div>
                      <div className="hidden 2xl:w-55 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n2135">
                        <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n2136" dir="auto">
                          Building modern industrial solutions for businesses.
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
                            Services
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
                        <div className="hidden 2xl:w-55 2xl:flex 2xl:relative 2xl:max-w-55 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n2194">
                          <h3 className="hidden 2xl:block 2xl:text-surface 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[2rem] 2xl:font-medium 2xl:leading-[2.375rem] 2xl:tracking-[-0.3px] 2xl:text-balance" data-cid="n2195" dir="auto">
                            {"Subscribe to our "}
                            <span className="hidden 2xl:inline 2xl:text-color-002" data-cid="n2196">
                              newsletter
                            </span>
                          </h3>
                        </div>
                        <form className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-5 2xl:overflow-hidden" data-cid="n2197">
                          <label className="hidden 2xl:basis-0 2xl:shrink-0 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-end 2xl:content-end 2xl:grow 2xl:gap-4 2xl:cursor-default" data-cid="n2198">
                            <div className="hidden 2xl:basis-0 2xl:shrink-0 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-end 2xl:content-end 2xl:grow 2xl:overflow-clip" data-cid="n2199">
                              <div className="hidden 2xl:w-[28.2rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-1.5 2xl:overflow-clip" data-cid="n2200">
                                <div className="hidden 2xl:w-[4.4375rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n2201">
                                  <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance 2xl:whitespace-nowrap" data-cid="n2202" dir="auto">
                                    Your email
                                  </p>
                                </div>
                                <div className="hidden 2xl:w-full 2xl:h-16 2xl:flex 2xl:relative 2xl:p-5 2xl:items-center 2xl:shrink-0 2xl:overflow-hidden 2xl:bg-surface-3 after:content-[''] after:block after:absolute after:inset-0 after:w-[28.2rem] after:h-16 max-lg:after:hidden" data-cid="n2203">
                                  <input className="hidden 2xl:w-full 2xl:h-6 2xl:block 2xl:min-w-0 2xl:flex-1 2xl:overflow-clip 2xl:text-background 2xl:[font-family:Inter] 2xl:text-base 2xl:leading-6 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:cursor-text" data-cid="n2204" data-name="Email" placeholder="jane@example.com" type="email" value="" />
                                </div>
                              </div>
                              <div className="hidden 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n2205">
                                <button className="hidden 2xl:w-16 2xl:h-16 2xl:flex 2xl:relative 2xl:pr-2 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:overflow-clip 2xl:text-center 2xl:bg-accent 2xl:cursor-pointer" data-cid="n2206" type="submit">
                                  <div className="hidden" data-cid="n2207">
                                    <div className="hidden 2xl:w-16 2xl:h-16 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-1" data-cid="n2208" aria-hidden="true">
                                      <div className="hidden 2xl:w-38 2xl:h-38 2xl:block 2xl:absolute 2xl:-top-11 2xl:-left-11 2xl:[background-position:-1.11629px_-1.11629px] 2xl:[animation-name:hatchMove\_riu] 2xl:[animation-duration:1.5s] 2xl:[animation-timing-function:linear] 2xl:[animation-iteration-count:infinite] 2xl:pointer-events-none" data-cid="n2209" />
                                    </div>
                                  </div>
                                  <div className="hidden 2xl:w-4 2xl:h-4 2xl:flex 2xl:relative 2xl:z-1 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip 2xl:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] 2xl:origin-[8px_8px]" data-cid="n2210">
                                    <div className="hidden 2xl:w-[0.1875rem] 2xl:h-px 2xl:block 2xl:absolute 2xl:top-px 2xl:left-3.5 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] 2xl:origin-[1.5px_0.5px]" data-cid="n2211" aria-hidden="true">
                                      <div className="hidden 2xl:w-[0.1875rem] 2xl:block" data-cid="n2212">
                                        <Icon29 cid={"n2213"} />
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:w-4 2xl:h-4 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n2214" aria-hidden="true">
                                      <div className="hidden 2xl:h-full 2xl:block" data-cid="n2215">
                                        <Icon30 cid={"n2216"} />
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </label>
                        </form>
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
                      <div className="hidden 2xl:w-[89.7px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n2227">
                        <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n2228" dir="auto">
                          <a className="hidden 2xl:inline 2xl:text-background 2xl:cursor-pointer" data-cid="n2229" href="/legal/terms-of-use">
                            Terms of Use
                          </a>
                        </p>
                      </div>
                      <div className="hidden 2xl:w-[95.1px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n2230">
                        <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n2231" dir="auto">
                          <a className="hidden 2xl:inline 2xl:text-background 2xl:cursor-pointer" data-cid="n2232" href="/legal/privacy-policy">
                            Privacy Policy
                          </a>
                        </p>
                      </div>
                      <div className="hidden 2xl:w-[183.7px] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap" data-cid="n2233">
                        <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n2234" dir="auto">
                          {"Created in "}
                          <a className="hidden 2xl:inline 2xl:text-background 2xl:cursor-pointer" data-cid="n2235" href="https://framer.link/nikita-shabunko/?via=nikita-shabunko" target="_blank">
                            Framer
                          </a>
                          {" by "}
                          <a className="hidden 2xl:inline 2xl:text-background 2xl:cursor-pointer" data-cid="n2236" href="https://framer.link/nikita-shabunko/?via=nikita-shabunko" target="_blank">
                            Nikita
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
                  <SubscribeToOurSection />
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
                        <div className="w-[89.7px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-md:w-[151.5px] max-lg:[align-self:start] max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] max-lg:[text-wrap:initial] md:max-lg:w-87 2xl:hidden" data-cid="n2360">
                          <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] max-lg:text-center 2xl:hidden" data-cid="n2361" dir="auto">
                            <a className="inline text-background cursor-pointer 2xl:hidden hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)]" data-cid="n2362" data-component="link" href="/legal/terms-of-use">
                              Terms of Use
                            </a>
                          </p>
                        </div>
                        <div className="w-[95.1px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-md:w-[151.5px] max-lg:[align-self:start] max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] max-lg:[text-wrap:initial] md:max-lg:w-87 2xl:hidden" data-cid="n2363">
                          <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] max-lg:text-center 2xl:hidden" data-cid="n2364" dir="auto">
                            <a className="inline text-background cursor-pointer 2xl:hidden hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-cid="n2365" data-component="link" href="/legal/privacy-policy">
                              Privacy Policy
                            </a>
                          </p>
                        </div>
                        <div className="w-[183.7px] flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-md:w-[20.4375rem] max-lg:[align-self:start] max-lg:col-start-[span_2] max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] max-lg:[text-wrap:initial] md:max-lg:w-180 2xl:hidden" data-cid="n2366">
                          <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] max-lg:text-center 2xl:hidden" data-cid="n2367" dir="auto">
                            {"Created in "}
                            <a className="inline text-background cursor-pointer 2xl:hidden hover:border-clr-8 hover:text-clr-8 hover:outline-clr-8 hover:[text-decoration-color:var(--clr-8)]" data-cid="n2368" data-component="link" href="https://framer.link/nikita-shabunko/?via=nikita-shabunko" target="_blank">
                              Framer
                            </a>
                            {" by "}
                            <a className="inline text-background cursor-pointer 2xl:hidden hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)]" data-cid="n2369" data-component="link" href="https://framer.link/nikita-shabunko/?via=nikita-shabunko" target="_blank">
                              Nikita
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
