export default function Illustration({ cid }: { cid?: string }) {
  return (
    <svg className="w-25 h-25 block overflow-hidden max-lg:w-16 max-lg:h-16 2xl:hidden" data-component="image" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor" data-cid={cid}>
      <use href="#svg-218974579_290" />
    </svg>
  );
}
