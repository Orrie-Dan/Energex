"use client";

import { useState } from "react";
import type { Capability } from "../../../data/energex";
import { financingNote } from "../../../data/energex";
import { SolutionReveal } from "./solution-reveal";

type FamilyCapabilityListProps = {
  capabilities: Capability[];
};

function CapabilityBlock({
  capability,
  index,
  defaultVisible,
}: {
  capability: Capability;
  index: number;
  /** Dense families (4+) show fewer includes until expanded. */
  defaultVisible: number;
}) {
  const [open, setOpen] = useState(false);
  const extras = capability.includes.slice(defaultVisible);
  const hasMore = extras.length > 0;
  const visible = open
    ? capability.includes
    : capability.includes.slice(0, defaultVisible);

  return (
    <SolutionReveal delayMs={index * 50}>
      <article className="sd-cap">
        <header className="sd-cap-head">
          <h3 className="sd-cap-title">
            <span className="sd-cap-num">{capability.id}</span>
            <span className="sd-cap-title-text">{capability.title}</span>
          </h3>
        </header>
        <p className="sd-body sd-body-tight">{capability.summary}</p>
        <ul className="sd-bullets">
          {visible.map((item) => (
            <li key={item}>
              <span className="sd-bullet-dot" aria-hidden />
              <p>{item}</p>
            </li>
          ))}
        </ul>
        {hasMore ? (
          <button
            type="button"
            className="sd-cap-toggle"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Show less" : `Show ${extras.length} more`}
          </button>
        ) : null}
        {capability.id === "13" ? (
          <p className="sd-cap-note">{financingNote}</p>
        ) : null}
      </article>
    </SolutionReveal>
  );
}

export function FamilyCapabilityList({ capabilities }: FamilyCapabilityListProps) {
  const dense = capabilities.length >= 4;
  const defaultVisible = dense ? 3 : 4;

  return (
    <div className={`sd-deliverables${dense ? " sd-deliverables-dense" : ""}`}>
      {capabilities.map((cap, index) => (
        <CapabilityBlock
          key={cap.id}
          capability={cap}
          index={index}
          defaultVisible={defaultVisible}
        />
      ))}
    </div>
  );
}
