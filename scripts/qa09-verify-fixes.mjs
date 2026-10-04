import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
const errs = [];
page.on("pageerror", (e) => errs.push(String(e)));

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
const home = await page.evaluate(() => {
  const projectLinks = [...document.querySelectorAll("a")]
    .filter(
      (a) =>
        /projects/i.test(a.textContent || "") ||
        (a.getAttribute("href") || "").includes("/projects"),
    )
    .map((a) => ({
      href: a.getAttribute("href"),
      text: (a.textContent || "").trim().slice(0, 40),
      inNav: !!(
        a.closest("header") ||
        a.closest("[data-ditto-nav-top]") ||
        a.closest("[data-ditto-nav-bottom]")
      ),
    }));
  return {
    projectLinks,
    searchButtons: document.querySelectorAll('button[aria-label="Search Icon"]').length,
    visibleSearch: [...document.querySelectorAll("button")].filter((b) =>
      /search/i.test(b.getAttribute("aria-label") || ""),
    ).length,
    topNav: [...document.querySelectorAll("[data-ditto-nav-top] a")]
      .map((a) => (a.textContent || "").trim())
      .filter(Boolean),
  };
});

await page.goto("http://localhost:3000/solutions", { waitUntil: "domcontentloaded" });
const chrome = await page.evaluate(() =>
  [...document.querySelectorAll("header a, footer a")].map((a) => ({
    h: a.getAttribute("href"),
    t: (a.textContent || "").trim(),
  })),
);

await page.goto("http://localhost:3000/projects", { waitUntil: "domcontentloaded" });
const projects = {
  title: await page.title(),
  robots: await page.locator('meta[name="robots"]').getAttribute("content").catch(() => null),
  h1: await page.locator("h1").textContent(),
};

await page.goto("http://localhost:3000/sitemap.xml", { waitUntil: "domcontentloaded" });
const sitemap = await page.content();

console.log(
  JSON.stringify(
    {
      home,
      chromeProjectish: chrome.filter((x) => /project/i.test(x.t + x.h)),
      projects,
      sitemapHasProjects: sitemap.includes("/projects"),
      errs,
    },
    null,
    2,
  ),
);

await browser.close();
