export type MediaTileData = {
  description: string;
};
/** A media tile. */
export default function MediaTile({ d, cids }: { d: MediaTileData; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="w-full block relative [align-self:start] shrink-0 2xl:hidden">
      <div data-cid={cids[1]} className="w-[32.6875rem] flex relative justify-start items-center content-center gap-1.5 overflow-clip 2xl:hidden">
        <svg data-cid={cids[2]} className="w-auto h-5 block relative shrink-0 overflow-hidden aspect-square 2xl:hidden" data-component="icon" role="presentation" viewBox="0 0 24 24" fill="currentColor">
          <use href="#4119102008" />
        </svg>
        <div data-cid={cids[3]} className="w-[31.0625rem] flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] 2xl:hidden">
          <p data-cid={cids[4]} className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" dir="auto">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
