import { chromium } from "playwright";
import fs from "node:fs";

const BASE = "http://localhost:3000";
const routes = [
  "/",
  "/solutions",
  "/solutions/power-generation",
  "/solutions/renewables-storage",
  "/solutions/grid-distributed-energy",
  "/solutions/project-delivery-lifecycle",
  "/industries",
  "/about",
  "/projects",
  "/contact",
  "/privacy",
  "/terms",
  "/reference-solution-test",
];

const priority = ["/", "/solutions", "/industries", "/about", "/contact"];
const vps = [
  [1440, 900, false],
  [1280, 800, false],
  [1024, 768, false],
  [768, 1024, true],
  [430, 932, true],
  [390, 844, true],
  [375, 812, true],
];

const claimRe =
  /\b(we operate|our projects|our plants|our assets|our fleet|our platform|we finance|we manufacture|global operations|worldwide|leading|largest|#1|guaranteed|proven track record)\b/gi;
const residueRe =
  /\b(Tilanium|Buy Template|newsletter|testimonial|monthly|yearly|careers?\b|blog\b|pricing)\b/gi;

const browser = await chromium.launch({ headless: true });
const out = {
  routes: [],
  overflow: [],
  reveal: [],
  reducedMotion: [],
  links: { valid: [], broken: [], external: [], hash: [], tilanium: [] },
  claims: [],
  residueUi: [],
  contactForm: null,
  journeys: [],
  stickyNav: [],
  console: [],
};

// Route inventory + body claims/residue + link harvest
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  page.on("pageerror", (e) => out.console.push({ type: "pageerror", msg: String(e) }));
  page.on("console", (msg) => {
    if (msg.type() === "error") out.console.push({ type: "console", msg: msg.text() });
  });

  const allHrefs = new Set();
  for (const route of routes) {
    const res = await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(400);
    const status = res?.status() ?? 0;
    const text = await page.evaluate(() => document.body.innerText);
    const claims = [...text.matchAll(claimRe)].map((m) => m[0]);
    const residue = [...text.matchAll(residueRe)].map((m) => m[0]);
    const hrefs = await page.evaluate(() =>
      [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
    );
    hrefs.forEach((h) => h && allHrefs.add(h));
    const headings = await page.evaluate(() =>
      [...document.querySelectorAll("h1,h2")].map((h) =>
        (h.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80),
      ),
    );
    const navProjects = await page.evaluate(() => {
      const nav = document.querySelector('nav[aria-label="Main"], nav, [data-ditto-nav-top]');
      const links = [...document.querySelectorAll("a")].filter((a) =>
        /projects/i.test(a.textContent || ""),
      );
      return links.map((a) => ({
        href: a.getAttribute("href"),
        text: (a.textContent || "").trim().slice(0, 40),
        inHeader: !!(a.closest("header") || a.closest("[data-ditto-nav-top]") || a.closest("[data-ditto-nav-bottom]")),
      }));
    });
    out.routes.push({
      route,
      status,
      title: await page.title(),
      headings: headings.slice(0, 20),
      claims: [...new Set(claims)],
      residue: [...new Set(residue)],
      navProjects,
    });
    if (claims.length) out.claims.push({ route, claims: [...new Set(claims)] });
    if (residue.length) out.residueUi.push({ route, residue: [...new Set(residue)] });
  }

  // resolve internal links
  for (const href of [...allHrefs].sort()) {
    if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) {
      out.links.external.push(href);
      continue;
    }
    if (href.startsWith("http")) {
      if (/tilanium|framer\.website/i.test(href)) out.links.tilanium.push(href);
      else out.links.external.push(href);
      continue;
    }
    if (href.startsWith("#")) {
      out.links.hash.push(href);
      continue;
    }
    const path = href.split("#")[0];
    if (!path) {
      out.links.hash.push(href);
      continue;
    }
    try {
      const r = await page.goto(BASE + path, { waitUntil: "domcontentloaded", timeout: 30000 });
      const st = r?.status() ?? 0;
      if (st >= 400) out.links.broken.push({ href, st });
      else out.links.valid.push(href);
    } catch (e) {
      out.links.broken.push({ href, st: "error", err: String(e) });
    }
  }
  await ctx.close();
}

// Overflow + reveal matrix for priority routes
for (const [w, h, mobile] of vps) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    isMobile: mobile,
    hasTouch: mobile,
  });
  const page = await ctx.newPage();
  for (const route of priority) {
    await page.goto(BASE + route, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(200);
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += Math.max(240, Math.floor(h * 0.55))) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(35);
    }
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(150);
    const m = await page.evaluate(() => {
      const overflowOk = document.documentElement.scrollWidth <= window.innerWidth + 1;
      const hidden = [...document.querySelectorAll(".sd-reveal, .reveal, [data-reveal]")].filter(
        (el) => {
          const s = getComputedStyle(el);
          return s.opacity === "0" || s.visibility === "hidden";
        },
      ).length;
      const opacityZeroText = [...document.querySelectorAll("h1,h2,h3,p,li,a,button")].filter(
        (el) => {
          const s = getComputedStyle(el);
          const r = el.getBoundingClientRect();
          return (
            r.width > 20 &&
            r.height > 10 &&
            r.bottom > 0 &&
            r.top < window.innerHeight &&
            parseFloat(s.opacity) === 0
          );
        },
      ).length;
      return { overflowOk, hiddenRevealLike: hidden, visibleOpacityZero: opacityZeroText };
    });
    out.overflow.push({ route, w, h, ...m });
  }
  await ctx.close();
}

// Reduced motion spot check
{
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  for (const route of ["/", "/solutions", "/solutions/power-generation", "/industries", "/about"]) {
    await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(200);
    const m = await page.evaluate(() => {
      const zero = [...document.querySelectorAll("h1,h2,h3,p")].filter((el) => {
        const s = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return r.height > 8 && parseFloat(s.opacity) === 0;
      }).length;
      return { zero, title: document.title };
    });
    out.reducedMotion.push({ route, ...m });
  }
  await ctx.close();
}

// Contact form behavior
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
  const reqs = [];
  page.on("request", (r) => {
    if (r.method() !== "GET") reqs.push({ method: r.method(), url: r.url() });
  });
  await page.click('button[type="submit"]');
  await page.waitForTimeout(300);
  const notice = await page.locator('[role="status"]').textContent().catch(() => null);
  const button = await page.locator('button[type="submit"]').textContent();
  out.contactForm = { button, notice, nonGetRequests: reqs };
  await ctx.close();
}

// Sticky bottom nav contrast samples on homepage
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const height = await page.evaluate(() => document.body.scrollHeight);
  const samples = [0.15, 0.35, 0.55, 0.75, 0.9].map((p) => Math.floor(height * p));
  for (const y of samples) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(200);
    const info = await page.evaluate(() => {
      const bottom = document.querySelector("[data-ditto-nav-bottom]");
      if (!bottom) return { present: false };
      const s = getComputedStyle(bottom);
      const link = bottom.querySelector("a");
      const ls = link ? getComputedStyle(link) : null;
      return {
        present: true,
        display: s.display,
        opacity: s.opacity,
        color: ls?.color,
        bg: s.backgroundColor,
        text: (link?.textContent || "").trim().slice(0, 40),
      };
    });
    out.stickyNav.push({ y, ...info });
  }
  await ctx.close();
}

// Journey A smoke
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const path = [];
  for (const step of ["/", "/solutions", "/solutions/power-generation", "/contact"]) {
    const r = await page.goto(BASE + step, { waitUntil: "domcontentloaded" });
    path.push({ step, status: r?.status(), title: await page.title() });
  }
  out.journeys.push({ name: "A", path });
  await ctx.close();
}

await browser.close();
fs.writeFileSync("scripts/qa09-audit.json", JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
