"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export function ContactForm() {
  const [previewNotice, setPreviewNotice] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPreviewNotice(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-[#00183c]/10 bg-white p-6 shadow-sm"
      noValidate
    >
      <p className="mb-4 text-sm text-[#00183c]/70">
        Form preview only — submission is not connected yet.
      </p>
      <label className="block text-sm font-medium text-[#00183c]">
        Name
        <input
          type="text"
          name="name"
          className="mt-1 w-full rounded-md border border-[#00183c]/20 px-3 py-2 text-sm"
          autoComplete="name"
        />
      </label>
      <label className="mt-4 block text-sm font-medium text-[#00183c]">
        Organization
        <input
          type="text"
          name="organization"
          className="mt-1 w-full rounded-md border border-[#00183c]/20 px-3 py-2 text-sm"
          autoComplete="organization"
        />
      </label>
      <label className="mt-4 block text-sm font-medium text-[#00183c]">
        Message
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border border-[#00183c]/20 px-3 py-2 text-sm"
        />
      </label>
      <button
        type="submit"
        className="mt-6 rounded-md bg-[#3ca80c] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#349609]"
      >
        Preview submit
      </button>
      {previewNotice ? (
        <p className="mt-4 text-sm font-medium text-[#00183c]" role="status">
          Form preview only — submission is not connected yet.
        </p>
      ) : null}
    </form>
  );
}
