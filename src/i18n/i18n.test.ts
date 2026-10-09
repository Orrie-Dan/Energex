import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";
import { customerSegmentId } from "../data/energex";
import { LOCALES, formatText, isLocale, localizeHref, stripLocale, switchLocaleHref } from "./config";
import { englishContent, getContent } from "./content";
import { localizeContent, missingTranslations } from "./translate";
import { uiEn } from "./ui/en";
import { uiZhHk } from "./ui/zh-hk";
import { contentZhHk } from "./zh-hk";

const HAN = /\p{Script=Han}/u;

function collectStrings(value: unknown, key = "", out: { key: string; value: string }[] = []) {
  if (typeof value === "string") out.push({ key, value });
  else if (Array.isArray(value)) value.forEach((item) => collectStrings(item, key, out));
  else if (value && typeof value === "object") {
    for (const [childKey, child] of Object.entries(value)) collectStrings(child, childKey, out);
  }
  return out;
}

describe("locale helpers", () => {
  it("recognises only supported locales", () => {
    expect(LOCALES).toEqual(["en", "zh-hk"]);
    expect(isLocale("zh-hk")).toBe(true);
    expect(isLocale("zh-HK")).toBe(false);
    expect(isLocale("fr")).toBe(false);
  });

  it("prefixes internal links and keeps query and fragment", () => {
    expect(localizeHref("zh-hk", "/")).toBe("/zh-hk");
    expect(localizeHref("en", "/about#delivery")).toBe("/en/about#delivery");
    expect(localizeHref("zh-hk", "/contact?interest=equipment&category=lng-cryogenic")).toBe(
      "/zh-hk/contact?interest=equipment&category=lng-cryogenic",
    );
    expect(localizeHref("zh-hk", "/equipment#inquiry")).toBe("/zh-hk/equipment#inquiry");
  });

  it("leaves external, asset, API, file and already-localized hrefs unchanged", () => {
    for (const href of [
      "https://example.com/x",
      "//cdn.example.com/x",
      "#hero",
      "/assets/energex/logo.png",
      "/api/inquiry",
      "/sitemap.xml",
      "/reference-solution-test",
      "/en/about",
      "/zh-hk",
    ]) {
      expect(localizeHref("zh-hk", href)).toBe(href);
    }
  });

  it("switches locale while preserving path, query and fragment", () => {
    expect(switchLocaleHref("/en/equipment/solar-storage", "zh-hk")).toBe("/zh-hk/equipment/solar-storage");
    expect(switchLocaleHref("/zh-hk", "en")).toBe("/en");
    expect(switchLocaleHref("/en/contact", "zh-hk", "?interest=equipment&category=spare-parts", "#inquiry-name")).toBe(
      "/zh-hk/contact?interest=equipment&category=spare-parts#inquiry-name",
    );
    expect(switchLocaleHref("/en/about", "zh-hk", "", "#delivery")).toBe("/zh-hk/about#delivery");
    expect(stripLocale("/zh-hk/solutions/power-generation")).toEqual({
      locale: "zh-hk",
      path: "/solutions/power-generation",
    });
  });

  it("formats placeholders and keeps unknown ones", () => {
    expect(formatText("Show {count} more", { count: 3 })).toBe("Show 3 more");
    expect(formatText("{a} {b}", { a: "x" })).toBe("x {b}");
  });
});

describe("zh-HK translation completeness", () => {
  it("translates every English text field in the content overlay", () => {
    expect(missingTranslations(englishContent, contentZhHk)).toEqual([]);
  });

  it("translates every interface string", () => {
    expect(missingTranslations(uiEn, uiZhHk)).toEqual([]);
  });

  it("keeps English placeholders in every translated interface string", () => {
    const en = collectStrings(uiEn);
    const zh = collectStrings(uiZhHk);
    expect(zh.length).toBe(en.length);
    en.forEach((item, index) => {
      const placeholders = (text: string) => [...text.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();
      expect(placeholders(zh[index]!.value), item.value).toEqual(placeholders(item.value));
    });
  });

  it("contains Chinese text for every translated content field (no untranslated English copies)", () => {
    const allowedLatinOnly = new Set(["1 MW", "1 GW+", "IPP", "EPC", "BESS", "HSE", "QA/QC", "OEM", "FAT／SAT", "BOT／BOOT／BOO"]);
    const untranslated = collectStrings(contentZhHk).filter(
      (item) => !HAN.test(item.value) && !allowedLatinOnly.has(item.value),
    );
    expect(untranslated).toEqual([]);
  });
});

describe("localized content", () => {
  const zh = getContent("zh-hk");
  const en = getContent("en");

  it("keeps English unchanged apart from locale-prefixed links", () => {
    expect(en.hero.body).toBe(englishContent.hero.body);
    expect(en.hero.primaryCta.href).toBe("/en/solutions");
    expect(en.contactClose.equipment.href).toBe("/en/equipment#inquiry");
    expect(en.capabilities[0]!.familyHref).toBe("/en/solutions/project-delivery-lifecycle");
  });

  it("takes text from the overlay and structure from English", () => {
    expect(zh.hero.headlineLead).toBe("一個夥伴，");
    expect(zh.hero.primaryCta.href).toBe("/zh-hk/solutions");
    expect(zh.navLinks.map((link) => link.href)).toEqual(englishContent.navLinks.map((link) => `/zh-hk${link.href}`));
    expect(zh.equipmentCategories.map((c) => c.slug)).toEqual(englishContent.equipmentCategories.map((c) => c.slug));
    expect(zh.equipmentCategories.map((c) => c.imgSrc)).toEqual(englishContent.equipmentCategories.map((c) => c.imgSrc));
    expect(zh.capabilities.map((c) => c.id)).toEqual(englishContent.capabilities.map((c) => c.id));
  });

  it("keeps the brand name, address and registration in English", () => {
    expect(zh.brand.name).toBe("ENERGEX GLOBAL SOLUTIONS");
    expect(zh.brand.shortName).toBe("ENERGEX");
    expect(zh.brand.addressLines).toEqual(englishContent.brand.addressLines);
    expect(zh.brand.registration).toBe(englishContent.brand.registration);
  });

  it("keeps customer anchors identical across locales and resolves join keys", () => {
    expect(zh.customers.map((c) => c.anchorId)).toEqual(en.customers.map((c) => c.anchorId));
    expect(zh.customers[0]!.anchorId).toBe(customerSegmentId("Governments & Utilities"));
    expect(zh.customerTitle("Governments & Utilities")).toBe("政府及公用事業");
    for (const family of zh.solutionDetails) {
      for (const title of family.customerTitles ?? []) {
        expect(HAN.test(zh.customerTitle(title)), title).toBe(true);
      }
    }
  });

  it("builds localized solution details with locale-prefixed links", () => {
    const delivery = zh.solutionDetails.find((s) => s.slug === "project-delivery-lifecycle")!;
    expect(delivery.title).toBe("項目交付及生命週期");
    expect(delivery.cta).toEqual({ href: "/zh-hk/contact", label: "開展項目" });
    expect(delivery.frameworkCta?.href).toBe("/zh-hk/about#delivery");
    expect(delivery.heroImage.src).toBe(en.solutionDetails.find((s) => s.slug === delivery.slug)!.heroImage.src);
  });

  it("builds locale-aware equipment links", () => {
    expect(zh.equipmentQuoteHref("lng-cryogenic")).toBe("/zh-hk/contact?interest=equipment&category=lng-cryogenic");
    expect(zh.equipmentCategoryHref("spare-parts")).toBe("/zh-hk/equipment/spare-parts");
    expect(zh.getEquipmentCategory("SOLAR-STORAGE")?.title).toBe("太陽能及儲能");
  });

  it("never lets an overlay override structural keys", () => {
    const merged = localizeContent(
      { href: "/about", label: "About", imgSrc: "/a.png" },
      { href: "/evil", label: "關於", imgSrc: "/b.png" },
      "zh-hk",
    );
    expect(merged).toEqual({ href: "/zh-hk/about", label: "關於", imgSrc: "/a.png" });
  });
});

describe("client bundle boundary", () => {
  const SRC = join(__dirname, "..");
  const files = (function walk(dir: string): string[] {
    return readdirSync(dir).flatMap((name) => {
      const path = join(dir, name);
      if (statSync(path).isDirectory()) return walk(path);
      return /\.tsx?$/.test(name) && !/\.test\.tsx?$/.test(name) ? [path] : [];
    });
  })(SRC);

  it("client components never import the all-locale content module", () => {
    const offenders = files
      .filter((path) => readFileSync(path, "utf8").startsWith('"use client"'))
      .filter((path) => /from\s+["'][^"']*i18n\/content["']/.test(readFileSync(path, "utf8")))
      .map((path) => relative(SRC, path).split("\\").join("/"));
    expect(offenders).toEqual([]);
  });
});
