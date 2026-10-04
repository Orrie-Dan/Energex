import MediaCard3, { type MediaCard3Data } from "../components/media-card3";
import { MediaCard3_cids } from "../_cids";
import { MediaCard3_styles } from "../_styles";
const MediaCard3_data: MediaCard3Data[] = [
    { ariahidden: false, kind: "image", icon: <>
              <use href="#967363847" />
              </>, title: "Industry Expertise", description: "Decades of experience delivering consistent results in complex environments." },
    { ariahidden: false, kind: "image", icon: <>
              <use href="#3306108000" />
              </>, title: "Tailored Scalability", description: "Custom-built solutions that evolve with your operations." },
    { ariahidden: false, kind: "image", icon: <>
              <use href="#2813894442" />
              </>, title: "Precision Execution", description: "Timely delivery backed by efficient workflows and expert teams." },
    { ariahidden: true, icon: <>
              <use href="#3022238965" />
              </>, title: "Built on Safety & Quality", description: "Committed to the highest standards in every project we deliver." }
];
/** Card Grid section. */
export default function CardGridSection6({ mediaCard3Data = MediaCard3_data } = {}) {
  return (
    <section className="h-full flex max-w-full max-h-full items-center justify-items-center 2xl:hidden grid-cols-2" data-cid="n699">
      <div className="h-[33.45rem] block absolute inset-x-0 min-w-0 max-md:h-[479.5px] md:max-lg:h-[1055.7px] 2xl:hidden" data-cid="n700">
        <ul className="h-[33.45rem] flex max-w-full max-h-full items-center justify-items-center [list-style-type:none] list-outside transform-[matrix(1,0,0,1,-2026.67,0)] cursor-grab max-md:h-[479.5px] max-md:transform-[matrix(1,0,0,1,-1635,0)] md:max-lg:h-[1055.7px] md:max-lg:transform-[matrix(1,0,0,1,-3600,0)] 2xl:hidden" data-cid="n701">
          <li className="contents min-w-0 2xl:hidden" data-cid="n702">
            <div className="w-[405.3px] h-full block relative shrink-0 aspect-[0.773196/1] max-md:w-[20.4375rem] md:max-lg:w-180 2xl:hidden" data-cid="n703" aria-hidden="true">
              <div className="h-full flex relative p-8 flex-col justify-between items-center content-center overflow-clip 2xl:hidden after:content-[''] after:block after:absolute after:inset-0 2xl:after:hidden" data-cid="n704" />
            </div>
          </li>
          {mediaCard3Data.map((d, i) => <MediaCard3 key={i} d={d} cids={MediaCard3_cids[i]} styles={MediaCard3_styles[i]} />)}
        </ul>
      </div>
      <fieldset className="h-[33.45rem] flex absolute top-0 inset-x-0 min-w-[min-content] justify-between items-center pointer-events-none max-md:h-[479.5px] md:max-lg:h-[1055.7px] 2xl:hidden" data-cid="n745" aria-label="Slideshow pagination controls">
        <div className="h-10 flex absolute -top-20.5 right-0 left-283 min-w-0 justify-center items-center gap-1 pointer-events-none max-lg:h-12 max-md:top-[495.5px] max-md:right-[14.1875rem] max-lg:left-0 md:max-lg:top-[1071.7px] md:max-lg:right-155 2xl:hidden" data-cid="n746">
          <button className="w-10 h-full block justify-center items-center content-center justify-items-center overflow-hidden text-center bg-surface-3 cursor-pointer max-lg:w-12 2xl:hidden" data-cid="n747" data-component="button" aria-label="Previous" type="button">
            <img className="w-10 h-10 inline overflow-clip aspect-[auto_40/40] max-lg:w-12 max-lg:h-12 max-lg:aspect-[auto_48/48] 2xl:hidden" data-cid="n748" data-component="image" alt="Back Arrow" height="40" src="/assets/cloned/svg/de9d52a631a7.svg" width="40" />
          </button>
          <button className="w-10 h-full block justify-center items-center content-center justify-items-center overflow-hidden text-center bg-surface-3 cursor-pointer max-lg:w-12 2xl:hidden" data-cid="n749" data-component="button" aria-label="Next" type="button">
            <img className="w-10 h-10 inline overflow-clip aspect-[auto_40/40] max-lg:w-12 max-lg:h-12 max-lg:aspect-[auto_48/48] 2xl:hidden" data-cid="n750" data-component="image" alt="Next Arrow" height="40" src="/assets/cloned/svg/0db50e6c503d.svg" width="40" />
          </button>
        </div>
      </fieldset>
    </section>
  );
}
