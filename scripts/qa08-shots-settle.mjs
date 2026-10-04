import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const shotDir = path.resolve("scripts/qa08-shots");
fs.mkdirSync(shotDir, { recursive: true });

const shots = [
  ["power", "/solutions/power-generation", 1440, 900, false],
  ["power", "/solutions/power-generation", 390, 844, true],
  ["renewables", "/solutions/renewables-storage", 1440, 900, false],
  ["renewables", "/solutions/renewables-storage", 375, 812, true],
  ["grid", "/solutions/grid-distributed-energy", 1440, 900, false],
  ["grid", "/solutions/grid-distributed-energy", 430, 932, true],
  ["grid", "/solutions/grid-distributed-energy", 390, 844, true],
  ["grid", "/solutions/grid-distributed-energy", 375, 812, true],
  ["delivery", "/solutions/project-delivery-lifecycle", 1440, 900, false],
  ["delivery", "/solutions/project-delivery-lifecycle", 430, 932, true],
  ["delivery", "/solutions/project-delivery-lifecycle", 390, 844, true],
  ["delivery", "/solutions/project-delivery-lifecycle", 375, 812, true],
];

const browser = await chromium.launch({ headless: true });
const meta = [];

for (const [name, route, w, h, mobile] of shots) {
  const context = await browser.newContext({
    viewport: { width: w, height: h },
    isMobile: mobile,
    hasTouch: mobile,
  });
  const page = await context.newPage();
  await page.goto("http://localhost:3000" + route, {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.waitForFunction(() => {
    const title = document.querySelector(".sd-hero-title");
    return title?.classList.contains("sd-hero-title-settled");
  });
  await page.waitForTimeout(900);
  const info = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const clip = document.querySelector(".sd-hero-title-clip");
    const title = document.querySelector(".sd-hero-title");
    const chars = [...document.querySelectorAll(".sd-hero-char")];
    const last = chars[chars.length - 1];
    const clipRect = clip?.getBoundingClientRect();
    const titleRect = title?.getBoundingClientRect();
    const lastRect = last?.getBoundingClientRect();
    return {
      text: h1?.textContent,
      aria: h1?.getAttribute("aria-label") || null,
      settled: title?.classList.contains("sd-hero-title-settled"),
      clipOverflow: clip ? getComputedStyle(clip).overflow : null,
      clipW: clipRect?.width,
      titleW: titleRect?.width,
      lastRight: lastRect?.right,
      clipRight: clipRect?.right,
      clippedRight: lastRect && clipRect ? lastRect.right > clipRect.right + 1 : null,
      lastChar: last?.textContent,
    };
  });
  meta.push({ name, w, h, ...info });
  await page.screenshot({
    path: path.join(shotDir, `${name}-${w}-settled.png`),
    fullPage: false,
  });
  await context.close();
}

await browser.close();
fs.writeFileSync("scripts/qa08-hero-meta.json", JSON.stringify(meta, null, 2));
console.log(JSON.stringify(meta, null, 2));
