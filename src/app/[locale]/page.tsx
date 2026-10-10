import type { Metadata } from "next";
import CorporateFooterSection from "../sections/corporate-footer-section";
import VideoHeroSection from "../sections/video-hero-section";
import SolutionsHomeSection from "../sections/solutions-home-section";
import WhyEnergexSection from "../sections/why-energex-section";
import IndustriesCompactSection from "../sections/industries-compact-section";
import CapabilitiesEvidenceSection from "../sections/capabilities-evidence-section";
import ContactCloseSection from "../sections/contact-close-section";
import { formatText, isLocale, type Locale } from "../../i18n/config";
import { getContent } from "../../i18n/content";
import { pageMetadata } from "../../i18n/metadata";
import { LanguageSwitcher } from "../components/language-switcher";
import Tile, { type TileData } from "../components/tile";
import Icon from "../svgs/svg-icon";
import FeatureCard, { type FeatureCardData } from "../components/feature-card";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import Tile2, { type Tile2Data } from "../components/tile2";
import Icon5 from "../svgs/svg-icon5";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Icon27 from "../svgs/svg-icon27";
import Icon28 from "../svgs/svg-icon28";
import Tile3, { type Tile3Data } from "../components/tile3";
import Tile4, { type Tile4Data } from "../components/tile4";
import Logo2, { type Logo2Data } from "../components/logo2";
import Logo3, { type Logo3Data } from "../components/logo3";
import { Tile_cids, FeatureCard_cids, Tile2_cids, Tile3_cids, Tile4_cids, Logo2_cids, Logo3_cids } from "../_cids";
import { Tile_styles, FeatureCard_styles, Tile2_styles, Tile3_styles, Tile4_styles, Logo2_styles, Logo3_styles } from "../_styles";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { ui } = getContent(locale);
  // The layout's title template is skipped so the home title stays "ENERGEX".
  return { ...pageMetadata(locale, "/", ui.meta.home), title: { absolute: ui.meta.home.title } };
}

const Logo2_data: Logo2Data[] = [];
const Logo3_data: Logo3Data[] = [];

export default async function Page({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const t = getContent(locale);
  const { brand, finalCta, footer, navCta, navLinks, ui, href } = t;
  const year = new Date().getFullYear();
  const rights = formatText(ui.chrome.rights, { year, name: "ENERGEX Global Solutions" });

  const Tile_data: TileData[] = navLinks.map((link) => ({ href: link.href, description: link.label }));
  const FeatureCard_data: FeatureCardData[] = navLinks.map((link) => ({
    href: link.href,
    title: link.label,
    description: link.label,
  }));
  const Tile2_data: Tile2Data[] = Tile_data;
  const Tile3_data: Tile3Data[] = [
    { href: href("/"), description: ui.chrome.home },
    ...Tile_data,
    { href: href("/privacy"), description: ui.chrome.privacy },
  ];
  const allCapabilitiesHref = href("/solutions");
  const Tile4_data: Tile4Data[] = footer.solutions
    .filter((item) => item.href !== allCapabilitiesHref)
    .map((item) => ({ href: item.href, description: item.label }));

  const carouselText = ui.carousel;
  const offerings = [
    ...t.solutionFamilies.map((family) => ({
      href: family.href,
      title: family.title,
      description: family.description,
      imgSrc: family.imgSrc,
    })),
    t.equipmentSupplyCard,
  ];
  const segments = t.customers.map((segment) => ({
    title: segment.title,
    need: segment.need,
    imgSrc: segment.imgSrc,
    href: `${href("/industries")}#${segment.anchorId}`,
  }));

  return (
    <>
      <div className="block" data-cid="n1" id="main">
        <div className="min-h-screen flex relative flex-col justify-start items-center content-center overflow-clip bg-background" data-cid="n2">
          <div className="contents min-w-0 transform-[none] 2xl:w-405 2xl:h-23 2xl:block 2xl:fixed 2xl:top-0 2xl:left-0 2xl:z-10 2xl:shrink-0 2xl:order-[-999] 2xl:transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)] 2xl:origin-[810px_46px]" data-cid="n35" data-ditto-nav-top>
            <nav className="hidden 2xl:w-405 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:overflow-clip" data-cid="n36" data-name="Navigation top">
              <div className="hidden 2xl:basis-0 2xl:shrink-0 2xl:flex 2xl:relative 2xl:p-8 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:grow 2xl:gap-16" data-cid="n37">
                <div className="hidden 2xl:w-[8.6625rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-0" data-cid="n38">
                  <div className="hidden 2xl:w-[8.6625rem] 2xl:h-7 2xl:block 2xl:relative 2xl:z-1 2xl:shrink-0" data-cid="n39">
                    <a className="hidden 2xl:h-7 2xl:block 2xl:relative 2xl:aspect-[4.95/1] 2xl:text-primary 2xl:cursor-pointer" data-cid="n40" href={href("/")}>
                      <div className="hidden 2xl:w-[8.6625rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0" data-cid="n41">
                        <img className="hidden 2xl:w-full 2xl:h-7 2xl:block 2xl:overflow-clip 2xl:object-contain 2xl:object-left 2xl:aspect-[auto_396/103]" data-cid="n42" alt="ENERGEX" height="80" src="/assets/energex/logo-on-dark-cropped.png" width="396" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hidden 2xl:w-[79.0875rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-8 2xl:overflow-clip" data-cid="n43">
                  {Tile_data.map((d, i) => <Tile key={i} d={d} cids={Tile_cids[i]} styles={Tile_styles[i]} />)}
                  <div className="hidden 2xl:block 2xl:relative 2xl:shrink-0 2xl:w-max">
                    <LanguageSwitcher
                      locale={locale}
                      switchLabel={ui.chrome.switchLanguage}
                      className="hidden 2xl:flex 2xl:relative 2xl:px-1 2xl:whitespace-nowrap 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:hover:text-accent"
                    />
                  </div>
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
                      <a className="h-7 block relative aspect-[4.95/1] text-primary cursor-pointer 2xl:hidden" data-cid="n78" data-component="link" href={href("/")}>
                        <div className="w-[8.6625rem] h-full block absolute top-0 2xl:hidden" data-cid="n79">
                          <img className="block w-full h-7 overflow-clip object-contain object-left aspect-[auto_396/103] 2xl:hidden" data-cid="n80" data-component="image" alt="ENERGEX" height="80" src="/assets/energex/logo-on-dark-cropped.png" width="396" />
                        </div>
                      </a>
                    </div>
                    <button type="button" className="hidden max-lg:w-6 max-lg:h-6 max-lg:block max-lg:relative max-lg:shrink-0" data-cid="n81" data-ditto-menu-toggle aria-label={ui.chrome.openMenu} aria-expanded="false">
                      <div className="hidden max-lg:w-6 max-lg:h-6 max-lg:flex max-lg:relative max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-clip max-lg:cursor-pointer" data-cid="n82">
                        <div className="hidden max-lg:w-5 max-lg:h-1 max-lg:block max-lg:absolute max-lg:top-1 max-lg:z-1 max-lg:min-w-0 max-lg:shrink-0 max-lg:bg-background max-lg:transform-[matrix(1,-0.176327,0,1,0,0)] max-lg:origin-[10px_2px]" data-cid="n83" data-ditto-menu-bar />
                        <div className="hidden max-lg:w-5 max-lg:h-1 max-lg:block max-lg:absolute max-lg:bottom-1 max-lg:z-1 max-lg:min-w-0 max-lg:shrink-0 max-lg:bg-background max-lg:transform-[matrix(1,-0.176327,0,1,0,0)] max-lg:origin-[10px_2px]" data-cid="n84" data-ditto-menu-bar />
                      </div>
                    </button>
                  </div>
                  <div className="w-[68.5%] flex relative justify-start items-center content-center grow shrink-0 basis-0 gap-8 overflow-clip max-lg:w-full max-lg:flex-col max-lg:items-start max-lg:content-start max-lg:order-[1] max-lg:gap-16 max-lg:grow-[initial] max-lg:basis-[initial] 2xl:hidden" data-cid="n85" data-ditto-mobile-panel>
                    {FeatureCard_data.map((d, i) => <FeatureCard key={i} d={d} cids={FeatureCard_cids[i]} styles={FeatureCard_styles[i]} />)}
                    <div className="block relative shrink-0 w-max max-lg:opacity-0 2xl:hidden">
                      <LanguageSwitcher
                        locale={locale}
                        switchLabel={ui.chrome.switchLanguage}
                        className="flex relative px-1 whitespace-nowrap text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] hover:text-accent max-lg:text-color-002 max-lg:text-4xl max-lg:font-medium max-lg:leading-9 max-lg:tracking-[-1.44px] 2xl:hidden"
                      />
                    </div>
                  </div>
                  <div className="hidden" data-cid="n116" aria-hidden="true">
                    <div className="hidden" data-cid="n117">
                      <button type="button" tabIndex={-1} disabled className="hidden" data-cid="n118" aria-hidden="true">
                        <Icon2 cid={"n119"} />
                      </button>
                    </div>
                  </div>
                  <div className="hidden max-lg:w-full max-lg:block max-lg:relative max-lg:shrink-0 max-lg:order-[2]" data-cid="n120" data-ditto-mobile-panel>
                    <a className="hidden max-lg:h-16 max-lg:flex max-lg:relative max-lg:p-6 max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-clip max-lg:bg-accent max-lg:cursor-pointer" data-cid="n121" href={href("/contact")}>
                      <div className="hidden max-md:w-[20.4375rem] max-lg:h-16 max-lg:block max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:z-0 max-lg:min-w-0 max-lg:shrink-0 max-lg:transform-[matrix(1.1,0,0,1.1,0,0)] max-md:origin-[163.5px_32px] md:max-lg:w-180 md:max-lg:origin-[360px_32px]" data-cid="n122">
                        <div className="hidden max-lg:h-16 max-lg:min-h-[0.3125rem] max-lg:block max-lg:relative max-lg:min-w-[0.3125rem] max-lg:overflow-hidden max-lg:bg-clr-1" data-cid="n123" aria-hidden="true">
                          <div className="hidden max-md:w-[25.9375rem] max-lg:h-38 max-lg:block max-lg:absolute max-lg:-top-11 max-lg:-left-11 max-md:[background-position:-9.17466px_-9.17466px] max-lg:[animation-name:hatchMove\_r3l] max-lg:[animation-duration:1.5s] max-lg:[animation-timing-function:linear] max-lg:[animation-iteration-count:infinite] max-lg:pointer-events-none md:max-lg:w-202 md:max-lg:[background-position:-10.6764px_-10.6764px]" data-cid="n124" />
                        </div>
                      </div>
                      <div className="hidden max-md:w-[17.4375rem] max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:grow max-lg:shrink-0 max-lg:basis-0 max-lg:whitespace-pre-wrap max-lg:[word-break:break-word] max-lg:[overflow-wrap:break-word] md:max-lg:w-168" data-cid="n125">
                        <p className="hidden max-lg:block max-lg:text-background max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-base max-lg:font-semibold max-lg:leading-[1.625rem] max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" data-cid="n126" dir="auto">
                          {navCta.label}
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
              <div className="w-max max-w-[calc(100vw-2rem)] flex relative pl-4 justify-start items-center content-center shrink-0 gap-5 bg-color-001 max-lg:hidden" data-cid="n136">
                <div className="w-[8.6625rem] flex relative justify-start items-center content-center shrink-0 max-lg:hidden" data-cid="n137">
                  <div className="w-[8.6625rem] h-7 block relative z-1 shrink-0 max-lg:hidden" data-cid="n138">
                    <a className="h-7 block relative aspect-[4.95/1] text-primary cursor-pointer max-lg:hidden" data-cid="n139" data-component="link" href={href("/")}>
                      <div className="w-[8.6625rem] h-full block absolute top-0 max-lg:hidden" data-cid="n140">
                        <img className="w-full h-7 block overflow-clip object-contain object-left aspect-[auto_396/103] max-lg:hidden" data-cid="n141" data-component="image" alt="ENERGEX" height="80" src="/assets/energex/logo-on-dark-cropped.png" width="396" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-auto flex relative px-5 justify-start items-center content-center shrink-0 gap-8 max-lg:hidden" data-cid="n142">
                  {Tile2_data.map((d, i) => <Tile2 key={i} d={d} cids={Tile2_cids[i]} styles={Tile2_styles[i]} />)}
                  <div className="block relative shrink-0 w-max max-lg:hidden">
                    <LanguageSwitcher
                      locale={locale}
                      switchLabel={ui.chrome.switchLanguage}
                      className="flex relative px-1 whitespace-nowrap text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] hover:text-accent max-lg:hidden"
                    />
                  </div>
                </div>
                <div className="hidden" data-cid="n168" aria-hidden="true">
                  <div className="hidden" data-cid="n169">
                    <button type="button" tabIndex={-1} disabled className="hidden" data-cid="n170" aria-hidden="true">
                      <Icon5 cid={"n171"} />
                    </button>
                  </div>
                </div>
                <div className="w-50 block relative shrink-0 max-lg:hidden" data-cid="n172">
                  <a className="w-50 h-16 flex relative p-6 justify-start items-center content-center gap-2.5 overflow-clip text-primary bg-accent cursor-pointer max-lg:hidden" data-cid="n173" data-component="link" href={href("/contact")}>
                    <div className="w-50 h-16 block absolute top-0 left-0 z-0 opacity-0 min-w-0 shrink-0 transform-[matrix(1.1,0,0,1.1,0,0)] origin-[100px_32px] max-lg:hidden" style={{ maskImage: "linear-gradient(315deg, var(--clr-2) 10%, var(--foreground) 50%, var(--clr-2) 90%)" }} data-cid="n174">
                      <div className="w-50 h-16 min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-1 max-lg:hidden" data-cid="n175" aria-hidden="true">
                        <div className="w-72 h-38 block absolute -top-11 -left-11 [background-position:-1.75815px_-1.75815px] [animation-name:hatchMove\_r82] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-lg:hidden 2xl:[background-position:-1.11629px_-1.11629px] 2xl:[animation-name:hatchMove\_re9] hover:[background-position:-3.97865px_-3.97865px] focus:[background-position:-6.74448px_-6.74448px]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface-3) 0px, var(--surface-3) 2px, var(--clr-2) 2px, var(--clr-2) 16px)" }} data-cid="n176" />
                      </div>
                    </div>
                    <div className="w-auto flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-nowrap max-lg:hidden" data-cid="n177">
                      <p className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base font-semibold leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:hidden" data-cid="n178" dir="auto">
                        {navCta.label}
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
              <VideoHeroSection locale={locale} />
              <SolutionsHomeSection
                offerings={offerings}
                allCapabilitiesHref={allCapabilitiesHref}
                text={{
                  carouselLabel: ui.home.solutionsCarousel,
                  eyebrow: ui.home.solutionsEyebrow,
                  headingLead: ui.home.solutionsHeadingLead,
                  headingAccent: ui.home.solutionsHeadingAccent,
                  exploreAll: ui.home.exploreAllCapabilities,
                  explore: ui.home.explore,
                  carousel: carouselText,
                }}
              />
              <WhyEnergexSection locale={locale} />
              <IndustriesCompactSection
                segments={segments}
                industriesHref={href("/industries")}
                text={{
                  carouselLabel: ui.home.industriesCarousel,
                  label: t.industriesSection.label,
                  headingLead: t.industriesSection.headingLead,
                  headingAccent: t.industriesSection.headingAccent,
                  details: ui.home.industryDetails,
                  carousel: carouselText,
                }}
              />
              <CapabilitiesEvidenceSection locale={locale} />
              <ContactCloseSection locale={locale} />
            </main>
          </div>
          <div className="w-full block relative shrink-0 order-[1004]" data-cid="n2125">
            <footer className="hidden 2xl:w-480 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:overflow-clip 2xl:bg-color-001" data-cid="n2126">
              <div className="hidden 2xl:w-400 2xl:flex 2xl:relative 2xl:max-w-400 2xl:pt-37.5 2xl:pb-8 2xl:px-8 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-37.5" data-cid="n2127">
                <div className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-25" data-cid="n2128">
                  <div className="hidden 2xl:w-55 2xl:flex 2xl:relative 2xl:max-w-55 2xl:flex-col 2xl:justify-between 2xl:items-start 2xl:content-start 2xl:self-stretch 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip" data-cid="n2129">
                    <div className="hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-6" data-cid="n2130">
                      <div className="hidden 2xl:w-[8.6625rem] 2xl:h-7 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n2131">
                        <a className="hidden 2xl:h-7 2xl:block 2xl:relative 2xl:aspect-[4.95/1] 2xl:text-primary 2xl:cursor-pointer" data-cid="n2132" href={href("/")}>
                          <div className="hidden 2xl:w-[8.6625rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0" data-cid="n2133">
                            <img className="hidden 2xl:w-full 2xl:h-7 2xl:block 2xl:overflow-clip 2xl:object-contain 2xl:object-left 2xl:aspect-[auto_396/103]" data-cid="n2134" alt="" height="80" src="/assets/energex/logo-on-dark-cropped.png" width="396" />
                          </div>
                        </a>
                      </div>
                      <div className="hidden 2xl:w-55 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n2135">
                        <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n2136" dir="auto">
                          {brand.taglineSecondary}
                        </p>
<p className="hidden 2xl:block 2xl:mt-4 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-xs 2xl:leading-4" dir="auto">
  {formatText(ui.chrome.registration, { registration: brand.registration })}
</p>
                      </div>
                    </div>
                    <div className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:relative 2xl:shrink-0" data-cid="n2137">
                      <a className="hidden 2xl:w-10 2xl:h-10 2xl:flex 2xl:relative 2xl:pt-1 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:overflow-clip 2xl:text-primary 2xl:cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 max-lg:after:hidden" data-cid="n2138" href={`${href("/")}#hero`}>
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
                            {ui.chrome.navigation}
                          </p>
                        </div>
                        <div className="hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:gap-2" data-cid="n2151">
                          {Tile3_data.map((d, i) => <Tile3 key={i} d={d} cids={Tile3_cids[i]} styles={Tile3_styles[i]} />)}
                        </div>
                      </div>
                      <div className="hidden 2xl:w-124 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:gap-6" data-cid="n2173">
                        <div className="hidden 2xl:w-[3.7rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0" data-cid="n2174">
                          <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" data-cid="n2175" dir="auto">
                            {ui.chrome.solutions}
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
    {ui.chrome.corporateLead}
    <span className="hidden 2xl:inline 2xl:text-color-002" data-cid="n2196">{ui.chrome.corporateAccent}</span>
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
<a className="hidden 2xl:inline-flex 2xl:w-fit 2xl:items-center 2xl:gap-2 2xl:text-accent 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:font-semibold 2xl:leading-[1.625rem] 2xl:underline 2xl:underline-offset-4 2xl:cursor-pointer" href={href("/contact")}>
  {ui.chrome.startProjectArrow}
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
                        {rights}
                      </p>
                    </div>
                    <div className="hidden 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-8" data-cid="n2226">
                      <div className="hidden 2xl:w-auto 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-nowrap" data-cid="n2227">
                        <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n2228" dir="auto">
                          <a className="hidden 2xl:inline 2xl:text-background 2xl:cursor-pointer" data-cid="n2229" href={href("/terms")}>
                            {ui.chrome.termsOfUse}
                          </a>
                        </p>
                      </div>
                      <div className="hidden 2xl:w-auto 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-nowrap" data-cid="n2230">
                        <p className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" data-cid="n2231" dir="auto">
                          <a className="hidden 2xl:inline 2xl:text-background 2xl:cursor-pointer" data-cid="n2232" href={href("/privacy")}>
                            {ui.chrome.privacyPolicy}
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
                  <CorporateFooterSection locale={locale} />
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
                          {rights}
                        </p>
                      </div>
                      <div className="w-[35.5%] flex relative justify-center items-center content-center shrink-0 gap-8 max-lg:w-full max-lg:grid max-lg:gap-6 max-lg:[grid-auto-rows:minmax(0px,_1fr)] max-lg:grid-cols-2 max-lg:[align-items:initial] max-lg:[align-content:initial] 2xl:hidden" data-cid="n2359">
                        <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-nowrap max-lg:[align-self:start] max-lg:whitespace-normal 2xl:hidden" data-cid="n2360">
                          <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] max-lg:text-center 2xl:hidden" data-cid="n2361" dir="auto">
                            <a className="inline text-background cursor-pointer 2xl:hidden hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)]" data-cid="n2362" data-component="link" href={href("/terms")}>
                              {ui.chrome.termsOfUse}
                            </a>
                          </p>
                        </div>
                        <div className="w-auto flex relative flex-col justify-start shrink-0 whitespace-nowrap max-lg:[align-self:start] max-lg:whitespace-normal 2xl:hidden" data-cid="n2363">
                          <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] max-lg:text-center 2xl:hidden" data-cid="n2364" dir="auto">
                            <a className="inline text-background cursor-pointer 2xl:hidden hover:border-clr-10 hover:text-clr-10 hover:outline-clr-10 hover:[text-decoration-color:var(--clr-10)]" data-cid="n2365" data-component="link" href={href("/privacy")}>
                              {ui.chrome.privacyPolicy}
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
