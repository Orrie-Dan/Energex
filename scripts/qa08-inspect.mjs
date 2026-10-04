import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const pages = [
  ["power", "/solutions/power-generation"],
  ["renewables", "/solutions/renewables-storage"],
  ["grid", "/solutions/grid-distributed-energy"],
  ["delivery", "/solutions/project-delivery-lifecycle"],
];

const vps = [
  [1440, 900, false],
  [1280, 800, false],
  [1024, 768, false],
  [768, 1024, true],
  [430, 932, true],
  [390, 844, true],
  [375, 812, true],
];

const shotDir = path.resolve("scripts/qa08-shots");
fs.mkdirSync(shotDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const out = [];

for (const [w, h, mobile] of vps) {
  const context = await browser.newContext({
    viewport: { width: w, height: h },
    isMobile: mobile,
    hasTouch: mobile,
  });
  const page = await context.newPage();
  for (const [name, route] of pages) {
    await page.goto("http://localhost:3000" + route, {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    await page.waitForTimeout(200);
    const m = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const lh = h1 ? parseFloat(getComputedStyle(h1).lineHeight) || 1 : 0;
      const lines = h1 ? Math.round(h1.getBoundingClientRect().height / lh) : 0;
      const lineBreaks = [];
      if (h1?.firstChild?.nodeType === 3) {
        const text = h1.firstChild;
        const range = document.createRange();
        let lastTop = null;
        let cur = "";
        for (let i = 0; i < text.length; i++) {
          range.setStart(text, i);
          range.setEnd(text, i + 1);
          const r = range.getBoundingClientRect();
          if (lastTop === null) lastTop = r.top;
          if (Math.abs(r.top - lastTop) > 2) {
            lineBreaks.push(cur.trim());
            cur = text.data[i];
            lastTop = r.top;
          } else {
            cur += text.data[i];
          }
        }
        if (cur.trim()) lineBreaks.push(cur.trim());
      }
      const pn = [...document.querySelectorAll("a")]
        .filter((a) => {
          const t = (a.textContent || "") + " " + (a.getAttribute("aria-label") || "");
          return /previous|next/i.test(t) && /solutions\//.test(a.getAttribute("href") || "");
        })
        .map((a) => ({
          href: a.getAttribute("href"),
          text: (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 100),
        }));
      const cross = [...document.querySelectorAll("p, span, div, small, strong")]
        .find((el) => /^cross-cutting$/i.test((el.textContent || "").trim()));
      return {
        overflowOk: document.documentElement.scrollWidth <= window.innerWidth + 1,
        h1: h1?.textContent?.trim(),
        h1Lines: lines,
        h1Breaks: lineBreaks,
        pn,
        crossCutting: cross?.textContent?.trim() || null,
        clickableDivs: [...document.querySelectorAll("[role=button], .sd-cap-item, .sd-cap-row")]
          .filter((el) => el.tagName === "DIV" && el.getAttribute("tabindex") !== null)
          .length,
      };
    });
    out.push({ name, w, h, ...m });

    const priority =
      (name === "power" && (w === 1440 || w === 390)) ||
      (name === "renewables" && (w === 1440 || w === 375)) ||
      (name === "grid" && [1440, 430, 390, 375].includes(w)) ||
      (name === "delivery" && [1440, 430, 390, 375].includes(w));
    if (priority) {
      await page.screenshot({
        path: path.join(shotDir, `${name}-${w}.png`),
        fullPage: false,
      });
    }
  }
  await context.close();
}

// /solutions regression
for (const [w, h, mobile] of [
  [1440, 900, false],
  [390, 844, true],
]) {
  const context = await browser.newContext({
    viewport: { width: w, height: h },
    isMobile: mobile,
    hasTouch: mobile,
  });
  const page = await context.newPage();
  await page.goto("http://localhost:3000/solutions", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  const sol = await page.evaluate(() => {
    const nums = [...document.body.innerText.matchAll(/\b(0[1-9]|1[0-5])\b/g)].map((m) => m[1]);
    const unique = [...new Set(nums)].sort();
    const familyLinks = [...document.querySelectorAll("a")]
      .map((a) => a.getAttribute("href") || "")
      .filter((href) =>
        /\/solutions\/(power-generation|renewables-storage|grid-distributed-energy|project-delivery-lifecycle)/.test(
          href,
        ),
      );
    return {
      overflowOk: document.documentElement.scrollWidth <= window.innerWidth + 1,
      uniqueNums: unique,
      familyLinks: [...new Set(familyLinks)],
    };
  });
  out.push({ name: "solutions", w, h, ...sol });
  await page.screenshot({
    path: path.join(shotDir, `solutions-${w}.png`),
    fullPage: false,
  });
  await context.close();
}

// keyboard
{
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  await page.goto("http://localhost:3000/solutions/grid-distributed-energy", {
    waitUntil: "networkidle",
  });
  const btn = page.locator("button[aria-expanded]").first();
  await btn.scrollIntoViewIfNeeded();
  const before = await btn.getAttribute("aria-expanded");
  await btn.focus();
  await page.keyboard.press("Enter");
  await page.waitForTimeout(120);
  const afterEnter = await btn.getAttribute("aria-expanded");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(120);
  const afterEnter2 = await btn.getAttribute("aria-expanded");
  await page.keyboard.press(" ");
  await page.waitForTimeout(120);
  const afterSpace = await btn.getAttribute("aria-expanded");
  const tag = await btn.evaluate((el) => el.tagName);
  out.push({ keyboard: { before, afterEnter, afterEnter2, afterSpace, tag } });
  await context.close();
}

// reduced motion
{
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto("http://localhost:3000/solutions/delivery".replace(
    "/delivery",
    "/project-delivery-lifecycle",
  ), { waitUntil: "networkidle" });
  await page.waitForTimeout(150);
  const rm = await page.evaluate(() => {
    const hidden = document.querySelectorAll(".sd-reveal:not(.sd-reveal-visible)").length;
    const total = document.querySelectorAll(".sd-reveal").length;
    return { hidden, total, allVisible: hidden === 0 };
  });
  out.push({ reducedMotion: rm });
  await context.close();
}

await browser.close();
fs.writeFileSync("scripts/qa08-inspect.json", JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
