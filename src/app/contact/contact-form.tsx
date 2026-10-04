"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { contactPage } from "../../data/energex";

export function ContactForm() {
  const [previewNotice, setPreviewNotice] = useState(false);

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
          defaultValue=""
        >
          <option value="" disabled>
            Select an area
          </option>
          {contactPage.interests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
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
