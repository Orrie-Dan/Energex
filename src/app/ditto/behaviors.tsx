"use client";

import { useEffect } from "react";

/**
 * Lightweight DOM behaviors for captured Framer interactions.
 * Mount once from the root layout — does not rebuild navigation markup.
 */
export default function DittoBehaviors() {
  useEffect(() => {
    const bottom = document.querySelector<HTMLElement>("[data-ditto-nav-bottom]");
    const topNavs = [...document.querySelectorAll<HTMLElement>("[data-ditto-nav-top]")];
    const trigger = document.querySelector("#menu-changer");
    const mobileShell = document.querySelector<HTMLElement>("[data-ditto-mobile-nav]");
    const menuButton = document.querySelector<HTMLElement>("[data-ditto-menu-toggle]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let scrolledPastMenu = false;
    let showingBottom = false;
    const desktopBottomNav = () => window.matchMedia("(min-width: 1025px)").matches;

    const applyNavSwap = () => {
      if (!bottom) return;
      const showBottom = scrolledPastMenu && desktopBottomNav();
      if (showBottom === showingBottom) return;
      showingBottom = showBottom;
      bottom.classList.toggle("ditto-nav-bottom-visible", showBottom);
      bottom.setAttribute("aria-hidden", showBottom ? "false" : "true");
      // Framer swaps top ↔ floating bottom nav (desktop only; bottom bar is hidden ≤1024).
      for (const top of topNavs) {
        top.classList.toggle("ditto-nav-top-hidden", showBottom);
        if (!top.hasAttribute("data-ditto-mobile-nav")) {
          top.setAttribute("aria-hidden", showBottom ? "true" : "false");
        }
      }
    };

    const setScrolledPastMenu = (next: boolean) => {
      scrolledPastMenu = next;
      applyNavSwap();
    };

    let io: IntersectionObserver | null = null;
    const onResize = () => applyNavSwap();
    window.addEventListener("resize", onResize, { passive: true });

    if (bottom && trigger && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          // When menu-changer leaves the top of the viewport, reveal bottom nav.
          setScrolledPastMenu(!(entry?.isIntersecting ?? true));
        },
        { root: null, threshold: 0, rootMargin: "-1px 0px 0px 0px" }
      );
      io.observe(trigger);
    } else if (bottom) {
      const onScroll = () => setScrolledPastMenu(window.scrollY > 520);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      };
    }

    const setMenuOpen = (open: boolean) => {
      if (!mobileShell || !menuButton) return;
      mobileShell.classList.toggle("ditto-mobile-nav-open", open);
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("ditto-menu-lock", open);
    };

    const onMenuClick = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!mobileShell) return;
      setMenuOpen(!mobileShell.classList.contains("ditto-mobile-nav-open"));
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const onLinkClick = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a") && mobileShell?.classList.contains("ditto-mobile-nav-open")) {
        setMenuOpen(false);
      }
    };

    menuButton?.addEventListener("click", onMenuClick);
    document.addEventListener("keydown", onKeyDown);
    mobileShell?.addEventListener("click", onLinkClick);

    // Stats count-up
    const counters = [...document.querySelectorAll<HTMLElement>("[data-count-up]")];
    let countIo: IntersectionObserver | null = null;
    if (counters.length) {
      const runCount = (el: HTMLElement) => {
        const target = Number(el.getAttribute("data-count-up") || "0");
        const suffix = el.getAttribute("data-count-suffix") || "";
        if (reduceMotion) {
          el.textContent = `${target}${suffix}`;
          return;
        }
        const start = performance.now();
        const duration = 1100;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${Math.round(target * eased)}${suffix}`;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };
      countIo = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            runCount(entry.target as HTMLElement);
            countIo?.unobserve(entry.target);
          }
        },
        { threshold: 0.4 }
      );
      counters.forEach((el) => countIo?.observe(el));
    }

    return () => {
      io?.disconnect();
      countIo?.disconnect();
      window.removeEventListener("resize", onResize);
      menuButton?.removeEventListener("click", onMenuClick);
      document.removeEventListener("keydown", onKeyDown);
      mobileShell?.removeEventListener("click", onLinkClick);
      document.body.classList.remove("ditto-menu-lock");
    };
  }, []);

  return null;
}
