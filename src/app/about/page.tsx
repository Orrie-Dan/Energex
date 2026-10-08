import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import {
  about,
  brandLifecycle,
  integratorModel,
  scale,
  deliverableGroups,
  deliveryControls,
  deliveryFlexibility,
  deliveryFramework,
  deliveryRoles,
  financingNote,
  financingStructures,
  finalCta,
  marketPhases,
  marketStrategySection,
  organizationFunctions,
  organizationSection,
  revenueModels,
} from "../../data/energex";

export const metadata: Metadata = {
  title: "About",
  description:
    "ENERGEX operating model, project delivery framework, delivery controls, market strategy, organization and responsibility framework.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About",
    description:
      "ENERGEX operating model, project delivery framework, delivery controls, market strategy, organization and responsibility framework.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <SiteChrome tone="plain">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f06f12]">
          {about.eyebrow}
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-[#011836] md:text-4xl">
          {about.heading}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#011836]/85">{about.body}</p>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#011836]/80">{about.introExtended}</p>

        <section className="mt-16" id="operating-model">
          <h2 className="text-xl font-semibold text-[#011836]">Operating model</h2>
          <p className="mt-3 max-w-3xl text-[#011836]/80">{about.operatingModel}</p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#011836]/50">
            Brand lifecycle
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {brandLifecycle.map((stage) => (
              <li
                key={stage.title}
                className="rounded-full border border-[#011836]/15 bg-white px-4 py-2 text-sm text-[#011836]"
              >
                {stage.title}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#011836]/50">
            Coordination interfaces
          </p>
          <p className="mt-2 max-w-3xl text-sm text-[#011836]/70">
            {integratorModel.supporting} The labels below are a simplified view of partner types.
            They are not a reporting hierarchy.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {integratorModel.partners.map((partner) => (
              <li
                key={partner.id}
                className="rounded-full border border-[#011836]/15 bg-white px-4 py-2 text-sm text-[#011836]"
              >
                {partner.label}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14" id="scale">
          <h2 className="text-xl font-semibold text-[#011836]">{scale.label}</h2>
          <p className="mt-3 text-2xl font-medium tracking-tight text-[#011836]">
            {scale.from} – {scale.to}
          </p>
          <p className="mt-3 max-w-3xl text-[#011836]/80">{scale.supporting}</p>
          <p className="mt-3 max-w-3xl text-sm text-[#011836]/65">
            This is a configured range for the systems Energex can coordinate. It is not a list of
            completed projects or installed capacity.
          </p>
        </section>

        <section className="mt-14" id="roles">
          <h2 className="text-xl font-semibold text-[#011836]">How the scope is applied</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#011836]/70">
            Depending on project scale, risk allocation, licensing and commercial structure, Energex
            may participate in different roles.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {deliveryRoles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-[#011836]/15 bg-white px-4 py-2 text-sm text-[#011836]"
              >
                {role}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm text-[#011836]/75">{deliveryFlexibility.supporting}</p>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {deliveryFlexibility.matrix.map((pair) => (
              <div key={pair.left} className="rounded-lg border border-[#011836]/10 bg-white px-4 py-3 text-sm text-[#011836]">
                <dt className="font-medium">{pair.left}</dt>
                <dd className="mt-1 text-[#011836]/70">{pair.right}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 max-w-3xl text-sm text-[#011836]/65">{deliveryFlexibility.financingNote}</p>
        </section>

        <section className="mt-14" id="delivery">
          <h2 className="text-xl font-semibold text-[#011836]">Project delivery framework</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#011836]/70">
            Source: Scope of Work §17 — from client requirement through expansion / repowering.
          </p>
          <ol className="mt-8 space-y-3">
            {deliveryFramework.map((step) => (
              <li
                key={step.id}
                className="flex gap-4 rounded-lg border border-[#011836]/10 bg-white p-4"
              >
                <span className="shrink-0 font-mono text-sm font-semibold text-[#f06f12]">
                  {step.id}
                </span>
                <div>
                  <h3 className="font-semibold text-[#011836]">{step.title}</h3>
                  <p className="mt-1 text-sm text-[#011836]/75">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14" id="controls">
          <h2 className="text-xl font-semibold text-[#011836]">Delivery controls</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#011836]/70">
            Discipline at every stage — governance, quality, HSE and risk.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {deliveryControls.map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-[#011836]/10 bg-white px-5 py-4"
              >
                <h3 className="text-sm font-semibold text-[#011836]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#011836]/75">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14" id="markets">
          <h2 className="text-xl font-semibold text-[#011836]">
            {marketStrategySection.headingLead}{" "}
            <span className="text-[#011836]/55">{marketStrategySection.headingAccent}</span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[#011836]/70">
            {marketStrategySection.supporting}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {marketPhases.map((phase) => (
              <article
                key={phase.phase}
                className={`rounded-lg border p-5 ${
                  phase.emphasis === "primary"
                    ? "border-[#f06f12]/40 bg-[#f06f12]/5"
                    : "border-[#011836]/10 bg-white"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#f06f12]">
                  {phase.phase}
                </p>
                <h3 className="mt-1 font-semibold text-[#011836]">{phase.title}</h3>
                <p className="mt-2 text-sm text-[#011836]/75">{phase.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#011836]/55">{marketStrategySection.disclaimer}</p>
          {/* Strategic region emphasis — not an operating-country map */}
          <div
            className="mt-8 grid gap-2 rounded-lg border border-[#011836]/10 bg-[#e4eaf2] p-6 sm:grid-cols-3"
            aria-label="Strategic market phases"
          >
            <div className="rounded-md bg-[#011836] px-4 py-6 text-center text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#f06f12]">Phase I</p>
              <p className="mt-2 text-sm font-medium">Africa &amp; Middle East</p>
              <p className="mt-1 text-xs text-white/65">Priority focus</p>
            </div>
            <div className="rounded-md bg-[#011836]/70 px-4 py-6 text-center text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Phase II</p>
              <p className="mt-2 text-sm font-medium">Wider emerging markets</p>
              <p className="mt-1 text-xs text-white/65">Partnership expansion</p>
            </div>
            <div className="rounded-md border border-[#011836]/20 bg-white/60 px-4 py-6 text-center text-[#011836]">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#011836]/50">
                Phase III
              </p>
              <p className="mt-2 text-sm font-medium">Multi-regional platform</p>
              <p className="mt-1 text-xs text-[#011836]/55">Ambition over time</p>
            </div>
          </div>
        </section>

        <section className="mt-14" id="organization">
          <h2 className="text-xl font-semibold text-[#011836]">
            {organizationSection.headingLead}{" "}
            <span className="text-[#011836]/55">{organizationSection.headingAccent}</span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[#011836]/70">
            {organizationSection.supporting}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {organizationFunctions.map((fn) => (
              <li
                key={fn.id}
                className="rounded-lg border border-[#011836]/10 bg-white p-5"
              >
                <span className="text-xs font-semibold text-[#f06f12]">{fn.id}</span>
                <h3 className="mt-1 font-semibold text-[#011836]">{fn.title}</h3>
                <p className="mt-2 text-sm text-[#011836]/75">{fn.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14" id="deliverables">
          <h2 className="text-xl font-semibold text-[#011836]">
            Deliverables across the project lifecycle
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[#011836]/70">
            Typical outputs Energex can coordinate — scoped project by project into a statement of
            work.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliverableGroups.map((group) => (
              <details
                key={group.id}
                className="rounded-lg border border-[#011836]/10 bg-white p-5 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold text-[#011836]">
                  <span className="mr-2 text-xs text-[#f06f12]">{group.id}</span>
                  {group.title}
                </summary>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[#011836]/75">
                      · {item}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14" id="commercial">
          <h2 className="text-xl font-semibold text-[#011836]">Commercial models</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#011836]/70">{financingNote}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {financingStructures.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[#011836]/15 bg-white px-3 py-1.5 text-xs font-medium text-[#011836]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 overflow-x-auto rounded-lg border border-[#011836]/10 bg-white">
            <table className="w-full min-w-xl text-left text-sm">
              <thead className="border-b border-[#011836]/10 bg-[#011836]/3">
                <tr>
                  <th className="px-5 py-3 font-semibold text-[#011836]">Revenue stream</th>
                  <th className="px-5 py-3 font-semibold text-[#011836]">Mechanism</th>
                  <th className="px-5 py-3 font-semibold text-[#011836]">Character</th>
                </tr>
              </thead>
              <tbody>
                {revenueModels.map((row) => (
                  <tr key={row.stream} className="border-b border-[#011836]/8 last:border-0">
                    <td className="px-5 py-3 font-medium text-[#011836]">{row.stream}</td>
                    <td className="px-5 py-3 text-[#011836]/75">{row.mechanism}</td>
                    <td className="px-5 py-3 text-[#011836]/75">{row.character}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14 rounded-lg border border-[#011836]/10 bg-white px-6 py-8 text-center md:px-10">
          <h2 className="text-xl font-semibold text-[#011836]">{finalCta.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#011836]/75">{finalCta.body}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={finalCta.cta.href}
              className="inline-flex rounded-md bg-[#f06f12] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c4500a]"
            >
              {finalCta.cta.label}
            </Link>
            <Link
              href="/solutions"
              className="inline-flex rounded-md border border-[#011836]/20 px-5 py-2.5 text-sm font-semibold text-[#011836] hover:border-[#f06f12]/50"
            >
              Explore All Capabilities
            </Link>
          </div>
        </section>
      </div>
    </SiteChrome>
  );
}
