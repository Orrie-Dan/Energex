import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Static guard for the client/server boundary: only the API route (and tests)
 * may import `lib/inquiry/server`, and browser-reachable inquiry modules must
 * not read server-only environment variables.
 */

const ROOT = join(__dirname, "..", "..");

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.(ts|tsx)$/.test(name) && !/\.test\.tsx?$/.test(name) ? [path] : [];
  });
}

const SERVER_IMPORT = /from\s+["'][^"']*lib\/inquiry\/server[^"']*["']|from\s+["']\.\/server\//;
const SERVER_ENV = /process\.env\.(?!NEXT_PUBLIC_)[A-Z_]+/;

describe("inquiry client/server boundary", () => {
  const files = sourceFiles(ROOT).map((path) => ({
    path: relative(ROOT, path).replace(/\\/g, "/"),
    text: readFileSync(path, "utf8"),
  }));

  it("only the API route imports server inquiry modules", () => {
    const importers = files
      .filter((file) => !file.path.startsWith("lib/inquiry/server/"))
      .filter((file) => SERVER_IMPORT.test(file.text))
      .map((file) => file.path);
    expect(importers).toEqual(["app/api/inquiry/route.ts"]);
  });

  it("browser-reachable inquiry modules read no server-only environment variables", () => {
    const clientSide = files.filter(
      (file) =>
        (file.path.startsWith("lib/inquiry/") && !file.path.startsWith("lib/inquiry/server/")) ||
        file.text.startsWith('"use client"'),
    );
    expect(clientSide.length).toBeGreaterThan(5);
    const offenders = clientSide.filter((file) => SERVER_ENV.test(file.text)).map((file) => file.path);
    expect(offenders).toEqual([]);
  });
});
