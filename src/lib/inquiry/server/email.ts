import { getEquipmentCategory } from "../../../data/energex/equipment";
import type { InquiryRequestBody } from "../protocol";
import type { OutgoingEmail } from "./resend";

type Row = { label: string; value: string; multiline?: boolean };

const SUBJECT_MAX = 180;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Collapses every whitespace or control run so header values stay on one line,
 * and removes bidirectional overrides that could disguise the subject.
 */
export function headerSafe(value: string): string {
  return value
    .replace(/[\u202a-\u202e\u2066-\u2069\u200e\u200f]/g, "")
    .replace(/[\x00-\x1f\x7f\u2028\u2029\s]+/g, " ")
    .trim();
}

function truncate(value: string, max: number): string {
  return value.length <= max ? value : `${value.slice(0, max - 1)}…`;
}

function trimmed<T extends Record<string, string>>(fields: T): T {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields)) out[key] = value.trim();
  return out as T;
}

function renderText(heading: string, rows: Row[], footer: string[]): string {
  const lines = [heading, ""];
  for (const row of rows) {
    if (row.multiline) {
      lines.push(`${row.label}:`, row.value, "");
    } else {
      lines.push(`${row.label}: ${row.value}`);
    }
  }
  lines.push("", ...footer);
  return lines.join("\n");
}

function renderHtml(heading: string, rows: Row[], footer: string[]): string {
  const body = rows
    .map(
      (row) =>
        `<tr><th align="left" valign="top" style="padding:6px 12px 6px 0;font-weight:600;white-space:nowrap">${escapeHtml(row.label)}</th>` +
        `<td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(row.value)}</td></tr>`,
    )
    .join("");
  const notes = footer.map((line) => `<p style="color:#555;font-size:13px">${escapeHtml(line)}</p>`).join("");
  return (
    `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#011836">` +
    `<h1 style="font-size:18px">${escapeHtml(heading)}</h1>` +
    `<table cellpadding="0" cellspacing="0">${body}</table>${notes}</body></html>`
  );
}

export type BuildEmailInput = {
  request: InquiryRequestBody;
  reference: string;
  from: string;
  to: string;
};

/**
 * Builds a categorized email. Callers must pass a request that already passed
 * validation. Output is deterministic for a given request so a retry reuses an
 * identical payload with the same Resend idempotency key.
 */
export function buildInquiryEmail({ request, reference, from, to }: BuildEmailInput): OutgoingEmail {
  const footer = [
    `Reference: ${reference}`,
    "Source: ENERGEX website inquiry form.",
    "Reply-To is the address the visitor entered. It has not been verified.",
    "No documents are accepted through the website in this phase.",
  ];

  if (request.mode === "project") {
    const f = trimmed(request.fields);
    const rows: Row[] = [
      { label: "Name", value: f.name },
      { label: "Company", value: f.company },
      { label: "Email", value: f.email },
      { label: "Phone", value: f.phone || "Not provided" },
      { label: "Project location", value: f.location },
      { label: "Project description", value: f.description, multiline: true },
    ];
    const heading = "Project inquiry";
    return {
      from,
      to,
      replyTo: f.email,
      subject: truncate(headerSafe(`[Project inquiry ${reference}] ${f.company} — ${f.location}`), SUBJECT_MAX),
      text: renderText(heading, rows, footer),
      html: renderHtml(heading, rows, footer),
      tags: [{ name: "inquiry_type", value: "project" }],
    };
  }

  const f = trimmed(request.fields);
  const category = getEquipmentCategory(f.category);
  const categoryTitle = category ? category.title : f.category;
  const rows: Row[] = [
    { label: "Name", value: f.name },
    { label: "Company", value: f.company },
    { label: "Email", value: f.email },
    { label: "Phone", value: f.phone || "Not provided" },
    { label: "Equipment category", value: categoryTitle },
    { label: "Equipment description / specifications", value: f.description, multiline: true },
    { label: "Quantity", value: f.quantity },
    { label: "Delivery destination", value: f.destination },
    { label: "Required delivery timeline", value: f.timeline },
  ];
  const heading = "Equipment quotation request";
  return {
    from,
    to,
    replyTo: f.email,
    subject: truncate(
      headerSafe(`[Equipment quotation ${reference}] ${categoryTitle} — ${f.company}`),
      SUBJECT_MAX,
    ),
    text: renderText(heading, rows, footer),
    html: renderHtml(heading, rows, footer),
    tags: [{ name: "inquiry_type", value: "equipment" }],
  };
}
