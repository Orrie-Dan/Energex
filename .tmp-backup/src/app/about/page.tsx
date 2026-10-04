import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import {
  about,
  deliveryFramework,
  deliveryRoles,
  digitalEnergyCapabilities,
  lifecycle,
  marketPhases,
} from "../../data/energex";

export const metadata: Metadata = {
  title: "About",
  description:
    "Technology-agnostic integrator across development, delivery, operations, and digital energy.",
};

export default function AboutPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#3ca80c]">{about.eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-[#00183c] md:text-4xl">
          {about.heading}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#00183c]/85">{about.body}</p>

        <section className="mt-16">
          <h2 className="text-xl font-semibold text-[#00183c]">Operating model</h2>
          <p className="mt-3 max-w-3xl text-[#00183c]/80">
            Energex acts as a <strong className="font-semibold">technology-agnostic integrator</strong>.
            Specialist OEMs, EPC contractors, and engineering partners may execute defined work packages
            while Energex holds the client interface, commercial coordination, and project integration.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-[#00183c]">Lifecycle</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#00183c]/70">
            Seven stages from opportunity through long-term performance.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map((stage, index) => (
              <li
                key={stage.title}
                className="rounded-lg border border-[#00183c]/10 bg-white p-5"
              >
                <span className="text-xs font-semibold text-[#3ca80c]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-semibold text-[#00183c]">{stage.title}</h3>
                <p className="mt-2 text-sm text-[#00183c]/75">{stage.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-[#00183c]">Delivery roles</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#00183c]/70">
            Engagements are shaped around project needs—not a single fixed contract type.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {deliveryRoles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-[#00183c]/15 bg-white px-4 py-2 text-sm text-[#00183c]"
              >
                {role}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-[#00183c]">Geographic focus</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {marketPhases.map((phase) => (
              <article
                key={phase.phase}
                className="rounded-lg border border-[#00183c]/10 bg-white p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#3ca80c]">
                  {phase.phase}
                </p>
                <h3 className="mt-1 font-semibold text-[#00183c]">{phase.title}</h3>
                <p className="mt-2 text-sm text-[#00183c]/75">{phase.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-[#00183c]">Delivery framework</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#00183c]/70">
            A structured path from requirement to expansion—applied with flexibility per project.
          </p>
          <ol className="mt-8 space-y-3">
            {deliveryFramework.map((step) => (
              <li
                key={step.id}
                className="flex gap-4 rounded-lg border border-[#00183c]/10 bg-white p-4 md:items-start"
              >
                <span className="shrink-0 font-mono text-sm font-semibold text-[#3ca80c]">
                  {step.id}
                </span>
                <div>
                  <h3 className="font-semibold text-[#00183c]">{step.title}</h3>
                  <p className="mt-1 text-sm text-[#00183c]/75">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14 rounded-lg bg-[#00183c] p-8 text-white">
          <h2 className="text-xl font-semibold">Digital energy</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
            Progressive digital layers complement physical assets—supporting visibility, commercial
            operations, and optimization without replacing core engineering discipline.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {digitalEnergyCapabilities.map((cap) => (
              <li
                key={cap}
                className="rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-[#3ca80c]"
              >
                {cap}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SiteChrome>
  );
}
