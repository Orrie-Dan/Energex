const { load } = require("./.tmp-lib");
const f = load("src/app/sections/card-grid-section.tsx");
const { L } = f;

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

// --- heights (allow hero stack to grow on small screens)
f.tokens("n189", [
  ["max-md:h-[45.725rem]", "max-md:h-auto"],
  ["md:max-lg:h-[38.925rem]", "md:max-lg:h-auto"],
]);
f.tokens("n301", [
  ["max-md:h-[14.525rem]", "max-md:h-auto"],
  ["md:max-lg:h-52.5", "md:max-lg:h-auto"],
]);
f.tokens("n331", [
  ["max-md:h-[10.525rem]", "max-md:h-auto"],
  ["md:max-lg:h-36.5", "md:max-lg:h-auto"],
]);

// --- eyebrow
f.tokens("n197", [["2xl:w-[11.125rem]", "2xl:w-max"]]);
f.tokens("n203", [["w-[9.875rem]", "w-max"]]);
f.pText("n200", "Integrated Energy Solutions");
f.pText("n204", "Integrated Energy Solutions");

// --- h1 (desktop 2xl)
const d = (cid, text, extra = "") =>
  `<span className="hidden 2xl:inline 2xl:whitespace-nowrap 2xl:[text-wrap:nowrap_balance] 2xl:pointer-events-none${extra}" data-cid="${cid}">${text}</span>`;
f.replaceChildren("n208", [
  d("n209", "One"),
  '{" "}',
  d("n210", "Partner."),
  '{" "}',
  '<span className="hidden 2xl:inline 2xl:text-muted-foreground 2xl:pointer-events-none" data-cid="n241">',
  "  " + d("n242", "Every"),
  '  {" "}',
  "  " + d("n243", "Energy"),
  '  {" "}',
  "  " + d("n244", "Solution."),
  "</span>",
]);

// --- h1 (below 2xl)
const m = (cid, text) =>
  `<span className="inline whitespace-nowrap [text-wrap:nowrap_balance] pointer-events-none max-lg:[pointer-events:initial] 2xl:hidden" data-cid="${cid}">${text}</span>`;
f.replaceChildren("n255", [
  m("n256", "One"),
  '{" "}',
  m("n257", "Partner."),
  '{" "}',
  '<span className="inline text-muted-foreground pointer-events-none max-lg:[pointer-events:initial] 2xl:hidden" data-cid="n288">',
  "  " + m("n289", "Every"),
  '  {" "}',
  "  " + m("n290", "Energy"),
  '  {" "}',
  "  " + m("n291", "Solution."),
  "</span>",
]);

// --- body + secondary CTA (lg and up) after the 2xl h1 wrapper
const bodyIdx = f.idx("n207");
const bodyEnd = f.end(bodyIdx);
const BODY =
  "From project development and engineering to procurement, delivery and long-term operations, Energex coordinates integrated energy solutions around each project's needs.";
f.replace(bodyEnd + 1, bodyEnd, [
  `<div className="flex relative max-w-[34rem] flex-col justify-start items-start content-start gap-3 pointer-events-none max-lg:hidden" data-cid="n207b">`,
  `  <p className="block text-color-001 ${FONT} text-base font-semibold leading-[1.625rem] pointer-events-none" dir="auto">From Concept to Power.</p>`,
  `  <p className="block text-muted-foreground ${FONT} text-base leading-[1.625rem] text-balance pointer-events-none" dir="auto">`,
  `    ${BODY}`,
  `  </p>`,
  `  <a className="pointer-events-auto mt-1 inline-flex items-center gap-2 text-color-001 ${FONT} text-sm font-semibold leading-[1.375rem] underline decoration-accent decoration-2 underline-offset-4 hover:text-accent" href="/solutions">`,
  `    Explore Solutions &rarr;`,
  `  </a>`,
  `</div>`,
]);

// --- CTA tile text
for (const l of L) void l;
{
  // Replace every "Get Started" line
  for (let i = 0; i < L.length; i++) {
    if (L[i].trim() === "Get Started") f.replace(i, i, L[i].replace("Get Started", "Start a Project"));
  }
}

// --- bottom panel: stats -> descriptors (no invented metrics)
f.replaceChildren("n340", ["One"]);
f.replace(f.idx("n343") + 1, f.idx("n343") + 1, L[f.idx("n343") + 1].replace("years experience", "integrated interface"));
f.replaceChildren("n348", ["Global"]);
f.replace(f.idx("n351") + 1, f.idx("n351") + 1, L[f.idx("n351") + 1].replace("projects delivered", "OEM sourcing"));

// --- panel footer copy
{
  const i = f.idx("n353");
  const e = f.end(i);
  f.replace(i + 1, e - 1, ["From Concept to Power."]);
  f.replace(e + 1, e, [
    `<p className="hidden max-lg:block mt-2 text-color-002 ${FONT} text-sm leading-[1.375rem]" dir="auto">`,
    `  ${BODY}`,
    `</p>`,
    `<a className="hidden max-lg:inline-flex mt-3 items-center gap-2 text-background ${FONT} text-sm font-semibold leading-[1.375rem] underline decoration-accent decoration-2 underline-offset-4 hover:text-accent" href="/solutions">`,
    `  Explore Solutions &rarr;`,
    `</a>`,
  ]);
}

f.save();
console.log("hero ok");
