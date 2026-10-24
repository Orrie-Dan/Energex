import { Fragment } from "react";

/**
 * Renders copy that marks its accent phrase with asterisks: "Five families. *One* partner."
 * The marked phrase becomes an accent (`.nx-em`). Safe in server and client components.
 */
export function Emph({ text }: { text: string }) {
  const parts = text.split("*");
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <em key={index} className="nx-em">
            {part}
          </em>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** The same copy without accent markers (for aria labels and metadata). */
export function plainText(text: string): string {
  return text.replace(/\*/g, "");
}

export function CheckIcon({ color = "var(--nx-accent-ink)" }: { color?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

/** Two-digit display index: 1 → "01". */
export function pad2(value: number): string {
  return String(value).padStart(2, "0");
}
