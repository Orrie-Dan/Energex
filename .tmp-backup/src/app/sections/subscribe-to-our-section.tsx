import Icon31 from "../svgs/svg-icon31";
import Icon32 from "../svgs/svg-icon32";
import Tile5 from "../components/tile5";
import Tile6 from "../components/tile6";
import Icon33 from "../svgs/svg-icon33";
import Icon34 from "../svgs/svg-icon34";
import { Tile5_cids, Tile6_cids } from "../_cids";
import { Tile5_styles, Tile6_styles } from "../_styles";
import { tile5Data as tile5DataContent, tile6Data as tile6DataContent } from "../content";
/** Subscribe To Our section. */
export default function SubscribeToOurSection({ tile5Data = tile5DataContent, tile6Data = tile6DataContent } = {}) {
  return (
    <div className="w-full flex relative justify-start items-start content-start shrink-0 gap-25 max-lg:flex-col max-lg:gap-12 2xl:hidden grid-cols-1 lg:grid-cols-2" data-cid="n2261">
      <div className="w-[18%] flex relative max-w-55 flex-col justify-between items-start content-start self-stretch grow shrink-0 basis-0 overflow-clip max-lg:w-full max-lg:justify-start max-lg:max-w-none max-lg:[flex-direction:initial] max-lg:[align-self:initial] max-lg:grow-[initial] max-lg:basis-[initial] 2xl:hidden" data-cid="n2262">
        <div className="w-full flex relative flex-col justify-start items-start content-start shrink-0 gap-6 max-md:w-[88%] max-lg:flex-1 md:max-lg:w-[94.5%] 2xl:hidden" data-cid="n2263">
          <div className="w-[8.6625rem] h-7 block relative shrink-0 2xl:hidden" data-cid="n2264">
            <a className="h-7 block relative aspect-[4.95/1] text-primary cursor-pointer 2xl:hidden" data-cid="n2265" data-component="link" href="/">
              <div className="w-[8.6625rem] h-full block absolute top-0 2xl:hidden" data-cid="n2266">
                <img className="w-full h-7 block overflow-clip object-cover aspect-[auto_396/80] 2xl:hidden" data-cid="n2267" data-component="image" alt="" height="80" src="/assets/cloned/images/21c992ec6562.png" width="396" />
              </div>
            </a>
          </div>
          <div className="w-55 flex relative flex-col justify-start shrink-0 max-md:w-[17.9375rem] md:max-lg:w-170 2xl:hidden" data-cid="n2268">
            <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-balance 2xl:hidden" data-cid="n2269" dir="auto">
              Building modern industrial solutions for businesses.
            </p>
          </div>
        </div>
        <div className="w-10 h-10 block relative shrink-0 2xl:hidden" data-cid="n2270">
          <a className="w-10 h-10 flex relative pt-1 justify-center items-center content-center overflow-clip text-primary cursor-pointer 2xl:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-10 after:h-10 2xl:after:hidden" data-cid="n2271" data-component="link" href="/#hero">
            <div className="w-3 h-3 flex relative z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip transform-[matrix(0.707107,-0.707107,0.707107,0.707107,0,0)] origin-[6px_6px] 2xl:hidden" data-cid="n2272">
              <div className="w-0.5 h-px block absolute top-px left-[0.5625rem] min-w-0 shrink-0 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[1px_0.5px] 2xl:hidden" data-cid="n2273" aria-hidden="true">
                <div className="h-full block 2xl:hidden" data-cid="n2274">
                  <Icon31 cid={"n2275"} />
                </div>
              </div>
              <div className="w-3 h-3 block relative shrink-0 2xl:hidden" data-cid="n2276" aria-hidden="true">
                <div className="h-full block 2xl:hidden" data-cid="n2277">
                  <Icon32 cid={"n2278"} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="w-[73.5%] flex relative justify-start items-start content-start grow shrink-0 basis-0 max-lg:w-full max-lg:flex-col max-lg:gap-12 max-lg:grow-[initial] max-lg:basis-[initial] 2xl:hidden" data-cid="n2279">
        <div className="w-[55%] flex relative justify-start items-start content-start grow shrink-0 basis-0 gap-25 max-lg:w-full max-lg:grow-[initial] max-lg:basis-[initial] max-lg:gap-[initial] 2xl:hidden" data-cid="n2280">
          <div className="w-[15%] flex relative flex-col justify-start items-start content-start shrink-0 gap-6 max-lg:w-1/2 max-lg:flex-1 2xl:hidden" data-cid="n2281">
            <div className="w-[4.55rem] flex relative flex-col justify-start shrink-0 2xl:hidden" data-cid="n2282">
              <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-balance 2xl:hidden" data-cid="n2283" dir="auto">
                Navigation
              </p>
            </div>
            <div className="flex relative flex-col justify-start items-start content-start shrink-0 gap-2 2xl:hidden" data-cid="n2284">
              {tile5Data.map((d, i) => <Tile5 key={i} d={d} cids={Tile5_cids[i]} styles={Tile5_styles[i]} />)}
            </div>
          </div>
          <div className="w-[65%] flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-6 max-lg:w-1/2 2xl:hidden" data-cid="n2306">
            <div className="w-[3.7rem] flex relative flex-col justify-start shrink-0 2xl:hidden" data-cid="n2307">
              <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-balance 2xl:hidden" data-cid="n2308" dir="auto">
                Services
              </p>
            </div>
            <div className="w-50 flex relative min-w-50 flex-col justify-start items-start content-start shrink-0 gap-2 2xl:hidden" data-cid="n2309">
              {tile6Data.map((d, i) => <Tile6 key={i} d={d} cids={Tile6_cids[i]} styles={Tile6_styles[i]} />)}
            </div>
          </div>
        </div>
        <div className="w-[45%] flex relative justify-start items-start content-start shrink-0 gap-6 overflow-clip max-lg:w-full 2xl:hidden" data-cid="n2322">
          <div className="w-2 block relative z-0 self-stretch shrink-0 2xl:hidden" data-cid="n2323">
            <div className="w-2 h-full min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-color-001 shadow-[var(--surface-3)_0px_0px_0px_1px_inset] 2xl:hidden" data-cid="n2324" aria-hidden="true">
              <div className="w-13 h-[15.825rem] block absolute -top-5.5 -left-5.5 [background-position:-0.879075px_-0.879075px] [animation-name:hatchMove\_r39] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-md:h-54.5 max-md:[background-position:-4.58733px_-4.58733px] md:max-lg:h-[11.825rem] md:max-lg:[background-position:-5.33818px_-5.33818px] 2xl:hidden" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface-3) 0px, var(--surface-3) 1px, var(--clr-2) 1px, var(--clr-2) 8px)" }} data-cid="n2325" />
            </div>
          </div>
          <div className="w-[23.2rem] flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-10 overflow-clip max-md:w-[18.4375rem] max-lg:gap-6 md:max-lg:w-172 2xl:hidden" data-cid="n2326">
            <div className="w-55 flex relative max-w-55 flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[18.4375rem] max-lg:max-w-none md:max-lg:w-172 2xl:hidden" data-cid="n2327">
              <h3 className="block text-surface [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2rem] font-medium leading-[2.375rem] tracking-[-0.3px] text-balance max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:hidden" data-cid="n2328" data-component="heading" dir="auto">
                {"Subscribe to our "}
                <span className="inline text-color-002 2xl:hidden" data-cid="n2329">
                  newsletter
                </span>
              </h3>
            </div>
            <form className="w-full flex relative justify-start items-start content-start shrink-0 gap-5 overflow-hidden 2xl:hidden" data-cid="n2330">
              <label className="basis-0 shrink-0 flex relative justify-start items-end content-end grow gap-4 cursor-default 2xl:hidden" data-cid="n2331">
                <div className="basis-0 shrink-0 flex relative justify-start items-end content-end grow overflow-clip 2xl:hidden" data-cid="n2332">
                  <div className="w-5/6 flex relative flex-col justify-start items-start content-start grow shrink-0 basis-0 gap-1.5 overflow-clip max-md:w-[78.5%] md:max-lg:w-[90.5%] 2xl:hidden" data-cid="n2333">
                    <div className="w-[4.4375rem] flex relative flex-col justify-start shrink-0 2xl:hidden" data-cid="n2334">
                      <p className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-balance whitespace-nowrap 2xl:hidden" data-cid="n2335" dir="auto">
                        Your email
                      </p>
                    </div>
                    <div className="w-full h-16 flex relative p-5 items-center shrink-0 overflow-hidden bg-surface-3 2xl:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-16 2xl:after:hidden" data-cid="n2336">
                      <input className="w-full h-6 block min-w-0 flex-1 overflow-clip text-background [font-family:Inter] text-base leading-6 whitespace-nowrap text-nowrap cursor-text 2xl:hidden" data-cid="n2337" data-component="input" data-name="Email" placeholder="jane@example.com" type="email" value="" />
                    </div>
                  </div>
                  <div className="block relative shrink-0 2xl:hidden" data-cid="n2338">
                    <button className="w-16 h-16 flex relative pr-2 justify-center items-center content-center overflow-clip text-center bg-accent cursor-pointer 2xl:hidden" data-cid="n2339" data-component="button" type="submit">
                      <div className="w-16 h-16 block absolute top-0 left-0 z-0 opacity-0 min-w-0 shrink-0 transform-[matrix(1.1,0,0,1.1,0,0)] origin-[32px_32px] 2xl:hidden" data-cid="n2340">
                        <div className="w-16 h-16 min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-1 2xl:hidden" data-cid="n2341" aria-hidden="true">
                          <div className="w-38 h-38 block absolute -top-11 -left-11 [background-position:-1.75815px_-1.75815px] [animation-name:hatchMove\_r3a] [animation-duration:1.5s] [animation-timing-function:linear] [animation-iteration-count:infinite] pointer-events-none max-md:[background-position:-9.17466px_-9.17466px] md:max-lg:[background-position:-10.6764px_-10.6764px] 2xl:hidden hover:[background-position:-5.46905px_-5.46905px] focus:[background-position:-7.73179px_-7.73179px]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface-3) 0px, var(--surface-3) 2px, var(--clr-2) 2px, var(--clr-2) 16px)" }} data-cid="n2342" />
                        </div>
                      </div>
                      <div className="w-4 h-4 flex relative z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[8px_8px] 2xl:hidden" data-cid="n2343">
                        <div className="w-[0.1875rem] h-px block absolute top-px left-3.5 min-w-0 shrink-0 transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] origin-[1.5px_0.5px] 2xl:hidden" data-cid="n2344" aria-hidden="true">
                          <div className="w-[0.1875rem] block 2xl:hidden" data-cid="n2345">
                            <Icon33 cid={"n2346"} />
                          </div>
                        </div>
                        <div className="w-4 h-4 block relative shrink-0 2xl:hidden" data-cid="n2347" aria-hidden="true">
                          <div className="h-full block 2xl:hidden" data-cid="n2348">
                            <Icon34 cid={"n2349"} />
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
  );
}
