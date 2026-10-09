# AGENTS.md

This is the ENERGEX Global Solutions website, adapted from a repaired Ditto clone of the Tilanium Framer reference (design grammar preserved; content and brand replaced).

## Run

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start` serves the production build (hybrid: pages are static, `/api/inquiry` is a server function). `npx serve out` no longer applies.
- `npm run typecheck` (the build ignores type errors, so run this separately)
- `npm test` (Vitest)

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
- `/contact` — Hong Kong address and inquiry form (live submission only when configured; preview/unavailable otherwise)
- `/privacy` — temporary legal placeholder
- `/terms` — temporary legal placeholder
- `/reference-solution-test` — internal fidelity shell (not in nav)
- `/api/inquiry` — POST-only inquiry endpoint (server function). Disabled unless configured.

## Inquiry Delivery

- Browser adapter: `src/lib/inquiry/submit.ts`; wire format: `protocol.ts`; shared rules: `validate.ts` (returns error codes); English text: `messages.ts`.
- Server-only code lives in `src/lib/inquiry/server/`. Never import it from client components.
- Configuration is documented in `.env.example`. Delivery stays off unless `INQUIRY_DELIVERY_ENABLED=true` and every required value is valid; the form shows the preview/unavailable state otherwise.
- Document upload is disabled; no file bytes are ever sent. The 10 MB spec in `contract.ts` is reserved for a future approved attachment phase.
- Do not enable production delivery until the recipient inbox, verified sending domain, Resend account, commercial Vercel plan, privacy/collection notice, retention policy, and production rate-limit store are approved.

## Do Not Edit Casually

- `src/app/ditto/` runtime utilities.
- `src/lib/inquiry/server/` security controls (origin, size, schema, honeypot, Turnstile, rate limits, idempotency) without updating tests.
- Generated anchor metadata such as `ditto-meta.ts`.
- Framework shell plumbing unless intentionally changing global metadata.
