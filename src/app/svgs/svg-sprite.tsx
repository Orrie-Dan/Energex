/** Shared SVG sprite sheet for Framer-exported <use href="#…"> icons. */
export default function SvgSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="absolute h-0 w-0 overflow-hidden"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        {/* Service-card corner “½ box” (⌝) — 40×40 */}
        <symbol id="svg-170617100_279" viewBox="0 0 40 40" overflow="visible">
          <path d="M 0 0 L 40 0 L 40 40 L 30.474 40 L 30.474 9.526 L 0 9.526 Z" fill="currentColor" />
        </symbol>
        {/* Service-card diagonal slash — 11×1 */}
        <symbol id="svg-62705727_246" viewBox="0 0 11 1" overflow="visible">
          <path d="M 0 0 L 11 0 L 11 1 L 0 1 Z" fill="currentColor" />
        </symbol>
        {/* Compact corner for “View All Solutions” etc. — 12×12 */}
        <symbol id="svg-909882879_314" viewBox="0 0 12 12" overflow="visible">
          <path d="M 0 0 L 12 0 L 12 12 L 9.5 12 L 9.5 2.5 L 0 2.5 Z" fill="currentColor" />
        </symbol>
        {/* Compact slash — 3×1 */}
        <symbol id="svg-900033461_288" viewBox="0 0 3 1" overflow="visible">
          <path d="M 0 0 L 3 0 L 3 1 L 0 1 Z" fill="currentColor" />
        </symbol>
        {/* Nav / CTA corner “½ box” (⌝) — 24×24 */}
        <symbol id="svg-780670427_282" viewBox="0 0 24 24" overflow="visible">
          <path d="M 0 0 L 24 0 L 24 24 L 19.579 24 L 19.579 4.421 L 0 4.421 Z" fill="currentColor" />
        </symbol>
        {/* Nav / CTA diagonal slash — 5×1 */}
        <symbol id="svg496763275_246" viewBox="0 0 5 1" overflow="visible">
          <path d="M 0 0 L 5 0 L 5 1 L 0 1 Z" fill="currentColor" />
        </symbol>
        {/* Mobile CTA tall slash — 5×32 (rotated into diagonal) */}
        <symbol id="svg1924944071_249" viewBox="0 0 5 32" overflow="visible">
          <path d="M 0 0 L 5 0 L 5 32 L 0 32 Z" fill="currentColor" />
        </symbol>
      </defs>
    </svg>
  );
}
