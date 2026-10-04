# AGENTS.md

This is the ENERGEX Global Solutions website, adapted from a repaired Ditto clone of the Tilanium Framer reference (design grammar preserved; content and brand replaced).

## Run

- `npm install`
- `npm run dev`
- `npm run build`
- Static export: use `npx serve out` (project uses `output: "export"`)

## Safe Edit Areas

- `src/data/energex.ts`: authoritative Energex copy and IA.
- `src/data/solutions.ts`: solution-detail family pages (data-driven).
- `src/app/content.ts` or `src/app/content.tsx`: editable structured content when present.
- `src/app/components/`: component modules (prefer focused client islands for interactions).
- `src/app/components/solution-detail/`: reusable solution-detail shell.
- `src/app/sections/`: section modules.
- `src/app/svgs/`: inline SVG modules.
- `src/app/ditto.css`: fidelity CSS; small visual tweaks only.
- `src/app/solution-detail.css`: solution-detail geometry and motion.
- SEO/docs: `AGENTS.md`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/llms.txt/route.ts`.

## Routes

- `/` — Home
- `/solutions` — full 15-capability portfolio index (families link to detail pages)
- `/solutions/power-generation` — Power & Generation family
- `/solutions/renewables-storage` — Renewables & Storage family
- `/solutions/grid-distributed-energy` — Grid & Distributed Energy family
- `/solutions/project-delivery-lifecycle` — Project Delivery & Lifecycle family
- `/about` — operating model and delivery framework
- `/projects` — honest placeholder; route kept, unlinked from primary nav/footer until verified case studies exist
- `/contact` — Hong Kong address and UI-only form
- `/privacy` — temporary legal placeholder
- `/terms` — temporary legal placeholder
- `/reference-solution-test` — internal fidelity shell (not in nav)

## Do Not Edit Casually

- `src/app/ditto/` runtime utilities.
- Generated anchor metadata such as `ditto-meta.ts`.
- Framework shell plumbing unless intentionally changing global metadata.
