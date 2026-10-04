const { load } = require("./.tmp-lib");
const f = load("src/app/page.tsx");
const { L } = f;
const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";
const FONT2XL = "2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

const textLineAfter = (cid, from, to) => {
  const i = f.idx(cid) + 1;
  if (!L[i].includes(from)) throw new Error(`text '${from}' not found after ${cid}: ${L[i]}`);
  f.replace(i, i, L[i].replace(from, to));
};

/* ---------- 0. imports & data ---------- */
{
  const find = (s) => {
    const i = L.findIndex((l) => l.startsWith(s));
    if (i < 0) throw new Error("missing " + s);
    return i;
  };
  f.replace(find("import SubscribeToOurSection"), find("import SubscribeToOurSection"), 'import CorporateFooterSection from "./sections/corporate-footer-section";\nimport { brand, deliveryRoles, finalCta, industries, lifecycle, whySlides } from "../data/energex";');
  f.replace(find("import Logo, {"), find("import Logo, {"), []);
  f.replace(find("import MediaTile, {"), find("import MediaTile, {"), []);
  f.replace(find("import MediaTile2, {"), find("import MediaTile2, {"), []);
  const cidsI = find("import { Logo_cids");
  f.replace(
    cidsI,
    cidsI,
    L[cidsI]
      .replace("Logo_cids, ", "")
      .replace("MediaTile_cids, MediaTile_cids2, MediaTile_cids3, MediaTile2_cids, MediaTile2_cids2, MediaTile2_cids3, ", "")
  );
  const stylesI = find("import { Logo_styles");
  f.replace(stylesI, stylesI, L[stylesI].replace("Logo_styles, ", ""));

  const dropConst = (name) => {
    const s = find("const " + name);
    let e = s;
    while (!L[e].startsWith("];")) e++;
    f.replace(s, e, []);
  };
  dropConst("Logo_data");
  for (const n of ["MediaTile_data", "MediaTile_data2", "MediaTile_data3", "MediaTile2_data", "MediaTile2_data2", "MediaTile2_data3"]) {
    // names are prefixes of each other; match exact "const NAME:" 
    const s = L.findIndex((l) => l.startsWith("const " + n + ":"));
    if (s < 0) throw new Error("missing const " + n);
    let e = s;
    while (!L[e].startsWith("];")) e++;
    f.replace(s, e, []);
  }
  // socials: remove generic template platform links (not Energex accounts)
  for (const n of ["Logo2_data", "Logo3_data"]) {
    const s = L.findIndex((l) => l.startsWith("const " + n + ":"));
    let e = s;
    while (!L[e].startsWith("];")) e++;
    const type = n === "Logo2_data" ? "Logo2Data" : "Logo3Data";
    f.replace(s, e, `const ${n}: ${type}[] = [];`);
  }
  // Why static list (2xl) -> Energex copy
  {
    const s = L.findIndex((l) => l.startsWith("const MediaCard2_data:"));
    let e = s;
    while (!L[e].startsWith("];")) e++;
    const slides = [
      ["One Integrated Interface", "One commercial and technical interface across the project lifecycle."],
      ["Technology Agnostic", "Solutions configured around project requirements rather than a single technology."],
      ["Global Sourcing", "Qualified OEMs, engineering partners and supply-chain coordination."],
      [
        "Flexible Delivery",
        "Developer, advisor, supplier, EPC integrator, owner's representative, operator or asset manager depending on the project.",
      ],
      [
        "Lifecycle Focus",
        "From initial requirement through commercial operation, monitoring, optimization and expansion.",
      ],
    ];
    let k = 0;
    for (let i = s; i <= e; i++) {
      if (/^\s*<\/>, title: ".*", description: ".*" \}/.test(L[i])) {
        const tail = L[i].trimEnd().endsWith("},") ? "}," : "}";
        const lead = L[i].match(/^\s*/)[0];
        f.replace(i, i, `${lead}</>, title: ${JSON.stringify(slides[k][0])}, description: ${JSON.stringify(slides[k][1])} ${tail}`);
        k++;
      }
    }
    if (k !== 5) throw new Error("why slides replaced " + k);
  }
}

/* ---------- 1. template promo ---------- */
f.deleteEl("n3");
f.tokens("n2", [
  ["h-[904.225rem] ", ""],
  [" max-md:h-[14575.1px]", ""],
  [" md:max-lg:h-[15449.5px]", ""],
  [" 2xl:h-[15248.5px]", ""],
]);

/* ---------- nav ---------- */
f.tokens("n42", [['alt=""', 'alt="ENERGEX"']]);
f.tokens("n141", [['alt=""', 'alt="ENERGEX"']]);
f.tokens("n121", [['data-cid="n121"', 'data-cid="n121" href="/contact"']]);

/* ---------- 3. About ---------- */
f.pText("n367", "ABOUT ENERGEX");
f.pText("n371", "ABOUT ENERGEX");
f.tokens("n370", [["w-[62.5px]", "w-max"]]);
f.replaceChildren("n375", [
  '<span className="inline text-background" data-cid="n376">',
  '  {"ONE COMPANY. "}',
  "</span>",
  '{"ONE INTEGRATED ENERGY SOLUTION."}',
]);
f.tokens("n361", [
  ["h-125", "min-h-125"],
  ["max-md:h-[27.05rem]", "max-md:h-auto"],
  ["md:max-lg:h-[23.2rem]", "md:max-lg:h-auto"],
]);
f.tokens("n362", [
  ["h-[26.85rem]", "h-auto"],
  ["max-md:h-[23.65rem]", "max-md:h-auto"],
  ["md:max-lg:h-[19.8rem]", "md:max-lg:h-auto"],
]);
f.tokens("n408", [["Two construction workers in orange vests talking", "Energex project delivery"]]);
f.tokens("n410", [["Two construction workers in orange vests talking", "Energex project delivery"]]);

/* ---------- 4. Services ---------- */
f.pText("n418", "Energy Solutions");
f.pText("n421", "Energy Solutions");
f.tokens("n420", [["w-[3.7rem]", "w-max"]]);
textLineAfter("n426", "Offer", "Deliver");

/* ---------- 5. Why ---------- */
f.pText("n626", "Why Energex");
f.pText("n631", "Why Energex");
f.tokens("n630", [["w-[6.7375rem]", "w-max"]]);
textLineAfter("n637", "Results", "Delivery");

/* ---------- 6. Process / lifecycle ---------- */
f.pText("n757", "Project Lifecycle");
f.pText("n762", "Project Lifecycle");
f.tokens("n761", [["w-[95.3px]", "w-max"]]);
f.replaceChildren("n767", [
  '{"From Concept "}',
  '<span className="inline text-color-002" data-cid="n768">',
  "  to Power",
  "</span>",
]);
f.replaceEl("n774", ['<div className="w-0.5 self-stretch relative z-1 bg-accent" data-cid="n774" />']);
f.deleteEl("n776");
f.replaceChildren("n781", [
  '<ol className="w-full grid list-none m-0 p-0 grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4" data-cid="n782" aria-label="Project lifecycle">',
  "  {lifecycle.map((stage, i) => (",
  '    <li key={stage.title} id={`stage-${i + 1}`} className="flex flex-col justify-start items-start gap-3 border-t-2 border-accent pt-5">',
  `      <span className="block text-accent ${FONT} text-sm font-semibold leading-[1.375rem]">{String(i + 1).padStart(2, "0")}.</span>`,
  `      <h3 className="block text-background ${FONT} text-2xl font-medium leading-[1.9375rem] tracking-[-0.2px] text-balance max-lg:text-xl max-lg:leading-6.5">{stage.title}</h3>`,
  `      <p className="block text-color-002 ${FONT} text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']">{stage.description}</p>`,
  "    </li>",
  "  ))}",
  "</ol>",
]);

/* ---------- 7. Stats ---------- */
f.replace(f.idx("n937"), f.idx("n937"), [
  '<div className="w-full max-w-400 flex relative pt-37.5 px-8 flex-col justify-start items-start content-start shrink-0 gap-4 max-lg:pt-18 max-lg:px-6" data-cid="n937h">',
  `  <h2 className="block text-background ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]" data-component="heading" dir="auto">`,
  '    {"Power at Every "}',
  '    <span className="inline text-color-002">Scale</span>',
  "  </h2>",
  `  <p className="block max-w-125 text-color-002 ${FONT} text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">`,
  "    From distributed generation to utility-scale power plants.",
  "  </p>",
  "</div>",
  L[f.idx("n937")].replace("py-37.5", "pt-16 pb-37.5").replace("max-lg:py-18", "max-lg:pt-10 max-lg:pb-18"),
]);

/* ---------- 8. Pricing -> Industries We Serve ---------- */
f.tokens("n1051", [['data-cid="n1051"', 'data-cid="n1051" id="industries"']]);
{
  const priceLine = L[f.idx("n1054")].replace('id="prices-color"', 'id="industries-color"');
  f.replaceChildren("n1053", [
    priceLine,
    '<div className="w-full max-w-125 flex relative flex-col justify-start items-start content-start shrink-0 gap-4" data-cid="n1056">',
    `  <p className="block text-color-001 ${FONT} text-sm font-semibold leading-[1.375rem]" dir="auto">Industries</p>`,
    `  <h2 className="block text-color-001 ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]" data-component="heading" dir="auto">`,
    '    {"Industries We "}',
    '    <span className="inline text-muted-foreground">Serve</span>',
    "  </h2>",
    "</div>",
    '<ul className="w-full grid list-none m-0 p-0 gap-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4" data-cid="n1100">',
    "  {industries.map((item, i) => (",
    '    <li key={item.title} className="flex flex-col justify-between items-start gap-8 min-h-[17rem] p-6 bg-background border-t-2 border-accent">',
    '      <div className="flex flex-col gap-3">',
    `        <span className="block text-accent ${FONT} text-sm font-semibold leading-[1.375rem]">{String(i + 1).padStart(2, "0")}</span>`,
    `        <h3 className="block text-color-001 ${FONT} text-2xl font-medium leading-[1.9375rem] tracking-[-0.2px] text-balance">{item.title}</h3>`,
    "      </div>",
    '      <div className="flex flex-col gap-4">',
    "        <div>",
    `          <p className="block text-muted-foreground ${FONT} text-xs font-semibold uppercase tracking-wider leading-4">Need</p>`,
    `          <p className="block text-color-001 ${FONT} text-base leading-[1.625rem]">{item.need}</p>`,
    "        </div>",
    "        <div>",
    `          <p className="block text-muted-foreground ${FONT} text-xs font-semibold uppercase tracking-wider leading-4">Energex Response</p>`,
    `          <p className="block text-color-001 ${FONT} text-base leading-[1.625rem]">{item.response}</p>`,
    "        </div>",
    "      </div>",
    "    </li>",
    "  ))}",
    "</ul>",
  ]);
}

/* ---------- 9. Reviews -> Flexible by Design ---------- */
f.tokens("n1417", [['id="reviews"', 'id="delivery-roles"']]);
f.pText("n1423", "Delivery Roles");
f.pText("n1426", "Delivery Roles");
f.tokens("n1425", [["w-[3.525rem]", "w-max"]]);
f.replaceChildren("n1429", [
  '{"Flexible "}',
  '<span className="inline text-muted-foreground" data-cid="n1430">',
  "  by Design",
  "</span>",
]);
f.replaceEl("n1431", [
  '<div className="w-full flex relative flex-col justify-start items-start content-start shrink-0 gap-10" data-cid="n1431">',
  `  <p className="block max-w-150 text-muted-foreground ${FONT} text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">`,
  '    {whySlides.find((s) => s.title === "Flexible Delivery")?.description}',
  "  </p>",
  '  <ul className="w-full grid list-none m-0 p-0 gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">',
  "    {deliveryRoles.map((role, i) => (",
  '      <li key={role} className="flex items-start gap-4 min-h-28 p-6 bg-surface border-t-2 border-accent">',
  `        <span className="block text-accent ${FONT} text-sm font-semibold leading-[1.375rem]">{String(i + 1).padStart(2, "0")}</span>`,
  `        <h3 className="block text-color-001 ${FONT} text-2xl font-medium leading-[1.9375rem] tracking-[-0.2px] text-balance max-lg:text-xl max-lg:leading-6.5">{role}</h3>`,
  "      </li>",
  "    ))}",
  "  </ul>",
  "</div>",
]);

/* ---------- 10. FAQ ---------- */
f.tokens("n1659", [['id="reviews-1"', 'id="faq"']]);

/* ---------- 12. Final CTA ---------- */
{
  const cta = (cidH1, cidSpan, prefix, hide) => {
    const spanLine = L[f.idx(cidSpan)];
    f.replaceChildren(cidH1, ['{"Ready to "}', spanLine, "  Power", "</span>", `{" What's Next?"}`]);
    const e = f.end(f.idx(cidH1));
    const p = (s) => (prefix ? s.split(" ").map((c) => (c ? prefix + c : c)).join(" ") : s);
    const vis = prefix ? "hidden 2xl:block" : "block";
    const visFlex = prefix ? "hidden 2xl:inline-flex" : "inline-flex";
    f.replace(e + 1, e, [
      `<p className="${vis} ${p("mt-6 max-w-125 text-background text-base leading-[1.625rem]")} ${prefix ? FONT2XL : FONT} ${hide}" dir="auto">`,
      "  {finalCta.body}",
      "</p>",
      `<span className="${visFlex} ${p("mt-8 w-fit h-12 items-center gap-2 px-6 bg-background text-color-001 text-base font-semibold leading-[1.625rem]")} ${prefix ? FONT2XL : FONT} ${hide}">`,
      "  Start a Project &rarr;",
      "</span>",
    ]);
  };
  cta("n2098", "n2099", "2xl:", "");
  cta("n2116", "n2117", "", "2xl:hidden");
}

/* ---------- 13. Footer ---------- */
textLineAfter("n2136", "Building modern industrial solutions for businesses.", "FROM CONCEPT TO POWER.");
{
  const e = f.end(f.idx("n2136"));
  f.replace(e + 1, e, [
    `<p className="hidden 2xl:block 2xl:mt-4 2xl:text-color-002 ${FONT2XL} 2xl:text-xs 2xl:leading-4" dir="auto">`,
    "  Registration No. {brand.registration}",
    "</p>",
  ]);
}
textLineAfter("n2175", "Services", "Solutions");
f.replaceChildren("n2193", [
  '<div className="hidden 2xl:w-[32.2rem] 2xl:flex 2xl:relative 2xl:max-w-125 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]" data-cid="n2194">',
  `  <h3 className="hidden 2xl:block 2xl:text-surface ${FONT2XL} 2xl:text-[2rem] 2xl:font-medium 2xl:leading-[2.375rem] 2xl:tracking-[-0.3px] 2xl:text-balance" data-cid="n2195" dir="auto">`,
  '    {"Corporate "}',
  '    <span className="hidden 2xl:inline 2xl:text-color-002" data-cid="n2196">address</span>',
  "  </h3>",
  "</div>",
  `<address className="hidden 2xl:block 2xl:not-italic 2xl:text-background ${FONT2XL} 2xl:text-base 2xl:leading-[1.625rem]">`,
  '  <span className="hidden 2xl:block 2xl:font-semibold">{brand.name}</span>',
  '  {brand.addressLines.map((line) => (',
  '    <span key={line} className="hidden 2xl:block">{line}</span>',
  "  ))}",
  "</address>",
  `<p className="hidden 2xl:block 2xl:max-w-125 2xl:text-color-002 ${FONT2XL} 2xl:text-base 2xl:leading-[1.625rem]" dir="auto">`,
  "  {finalCta.body}",
  "</p>",
  `<a className="hidden 2xl:inline-flex 2xl:w-fit 2xl:items-center 2xl:gap-2 2xl:text-accent ${FONT2XL} 2xl:text-base 2xl:font-semibold 2xl:leading-[1.625rem] 2xl:underline 2xl:underline-offset-4 2xl:cursor-pointer" href="/contact">`,
  "  Start a Project &rarr;",
  "</a>",
]);
// copyright lines
for (let i = 0; i < L.length; i++) {
  if (L[i].trim().startsWith("Ac 2026 ENERGEX")) {
    f.replace(i, i, L[i].replace(/Ac 2026 ENERGEX Global Solutions\./, "\u00A9 2026 ENERGEX Global Solutions."));
  }
}
f.tokens("n2229", [["/legal/terms-of-use", "/terms"]]);
f.tokens("n2232", [["/legal/privacy-policy", "/privacy"]]);
f.tokens("n2362", [["/legal/terms-of-use", "/terms"]]);
f.tokens("n2365", [["/legal/privacy-policy", "/privacy"]]);
f.deleteEl("n2233");
f.deleteEl("n2366");
{
  const i = L.findIndex((l) => l.trim() === "<SubscribeToOurSection />");
  f.replace(i, i, L[i].replace("SubscribeToOurSection", "CorporateFooterSection"));
}

f.save();
console.log("page ok");
