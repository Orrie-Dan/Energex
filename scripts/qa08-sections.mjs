import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const shotDir = path.resolve("scripts/qa08-shots");
fs.mkdirSync(shotDir, { recursive: true });

const targets = [
  ["power", "/solutions/power-generation", 1440, 900],
  ["renewables", "/solutions/renewables-storage", 1440, 900],
  ["grid", "/solutions/grid-distributed-energy", 1440, 900],
  ["grid", "/solutions/grid-distributed-energy", 390, 844],
  ["delivery", "/solutions/project-delivery-lifecycle", 1440, 900],
  ["delivery", "/solutions/project-delivery-lifecycle", 390, 844],
  ["solutions", "/solutions", 1440, 900],
  ["solutions", "/solutions", 390, 844],
];

const browser = await chromium.launch({ headless: true });
const report = [];

for (const [name, route, w, h] of targets) {
  const mobile = w < 800;
  const context = await browser.newContext({
    viewport: { width: w, height: h },
    isMobile: mobile,
    hasTouch: mobile,
  });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push(String(err)));

  await page.goto("http://localhost:3000" + route, {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.waitForTimeout(700);

  // step-scroll for reveals
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += Math.max(220, Math.floor(h * 0.5))) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(50);
  }

  const selectors = [
    [".sd-deliverables, #what-we-deliver, [data-section='deliver']", "deliver"],
    [".sd-approach, [data-section='approach']", "approach"],
    [".sd-digital, [data-section='digital']", "digital"],
    [".sd-family-nav, .sd-prev-next, [data-section='family-nav']", "nav"],
    [".sd-final-cta, [data-section='final-cta']", "cta"],
    ["footer", "footer"],
  ];

  for (const [sel, label] of selectors) {
    const el = page.locator(sel).first();
    if (await el.count()) {
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
      await page.screenshot({
        path: path.join(shotDir, `${name}-${w}-${label}.png`),
        fullPage: false,
      });
    }
  }

  const metrics = await page.evaluate(() => {
    const overflowOk = document.documentElement.scrollWidth <= window.innerWidth + 1;
    const hidden = document.querySelectorAll(".sd-reveal:not(.sd-reveal-visible)").length;
    const caps = [...document.querySelectorAll(".sd-cap-title-text")].map((t) =>
      (t.textContent || "").trim(),
    );
    const digital = [...document.querySelectorAll("*")]
      .find((el) => /^cross-cutting$/i.test((el.textContent || "").trim()))
      ?.textContent?.trim();
    const navCards = [...document.querySelectorAll(".sd-nav-card")].map((a) => ({
      href: a.getAttribute("href"),
      text: (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 90),
    }));
    return { overflowOk, hidden, caps, digital, navCards };
  });

  report.push({ name, w, h, consoleErrors, ...metrics });
  await context.close();
}

await browser.close();
fs.writeFileSync("scripts/qa08-sections.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
