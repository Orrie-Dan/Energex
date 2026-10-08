"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { contactPage } from "../../data/energex";

const INTERESTS = contactPage.interests;

function interestFromQuery(): string {
  if (typeof window === "undefined") return "";
  const raw = new URLSearchParams(window.location.search).get("interest")?.trim().toLowerCase() ?? "";
  if (!raw) return "";
  if (raw === "project") return "Project inquiry";
  if (raw === "equipment") return "Power Equipment Supply";
  return INTERESTS.find((item) => item.toLowerCase() === raw) ?? "";
}

export function ContactForm() {
  const [previewNotice, setPreviewNotice] = useState(false);
  const [interest, setInterest] = useState("");

  useEffect(() => {
    setInterest(interestFromQuery());
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPreviewNotice(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-[#011836]/10 bg-white p-6 shadow-sm"
      noValidate
    >
      <p className="mb-4 text-sm text-[#011836]/70">{contactPage.formNote}</p>

      <label className="block text-sm font-medium text-[#011836]">
        Name
        <input
          type="text"
          name="name"
          className="mt-1 w-full rounded-md border border-[#011836]/20 px-3 py-2 text-sm"
          autoComplete="name"
        />
      </label>

      <label className="mt-4 block text-sm font-medium text-[#011836]">
        Organization
        <input
          type="text"
          name="organization"
          className="mt-1 w-full rounded-md border border-[#011836]/20 px-3 py-2 text-sm"
          autoComplete="organization"
        />
      </label>

      <label className="mt-4 block text-sm font-medium text-[#011836]">
        Email
        <input
          type="email"
          name="email"
          className="mt-1 w-full rounded-md border border-[#011836]/20 px-3 py-2 text-sm"
          autoComplete="email"
        />
      </label>

      <label className="mt-4 block text-sm font-medium text-[#011836]">
        Interest
        <select
          name="interest"
          className="mt-1 w-full rounded-md border border-[#011836]/20 px-3 py-2 text-sm"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
        >
          <option value="" disabled>
            Select an area
          </option>
          {INTERESTS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 block text-sm font-medium text-[#011836]">
        Project / message
        <textarea
          name="message"
          rows={5}
          placeholder="Demand, location, fuel or renewable resources, schedule, and commercial objectives…"
          className="mt-1 w-full rounded-md border border-[#011836]/20 px-3 py-2 text-sm"
        />
      </label>

      <button
        type="submit"
        className="mt-6 rounded-md bg-[#f06f12] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c4500a]"
      >
        Preview submit
      </button>
      {previewNotice ? (
        <p className="mt-4 text-sm font-medium text-[#011836]" role="status">
          Form preview only — submission is not connected yet.
        </p>
      ) : null}
    </form>
  );
}
