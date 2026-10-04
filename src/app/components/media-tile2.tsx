export type MediaTile2Data = {
  description: string;
};
/** A media tile. */
export default function MediaTile2({ d, cids }: { d: MediaTile2Data; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="hidden 2xl:w-full 2xl:block 2xl:relative 2xl:[align-self:start] 2xl:shrink-0">
      <div data-cid={cids[1]} className="hidden 2xl:w-[32.6875rem] 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:gap-1.5 2xl:overflow-clip">
        <svg data-cid={cids[2]} className="hidden 2xl:w-5 2xl:h-5 2xl:block 2xl:relative 2xl:shrink-0 2xl:overflow-hidden 2xl:aspect-square" role="presentation" viewBox="0 0 24 24" fill="currentColor">
          <use href="#4119102008" />
        </svg>
        <div data-cid={cids[3]} className="hidden 2xl:w-[31.0625rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
          <p data-cid={cids[4]} className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" dir="auto">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
