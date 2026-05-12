"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { VERTICALS } from "@/lib/sitemap";

/**
 * FloatingNav — bottom-pinned shortcut bar that anchors to the four verticals.
 *
 * Behaviour:
 *  - Hidden by default at the top of the page (above the hero).
 *  - Becomes visible as soon as the user scrolls past the hero.
 *  - Auto-hides 5s after the last scroll event, reappears on the next scroll.
 *
 * Anchors point to `/#<slug>` so they work both from the home page (smooth
 * scroll to the matching `<section id="…">`) and from any other route
 * (browser navigates to home and then scrolls).
 *
 * Not a reusable block — lives outside `components/blocks/` and does not
 * count against the 28-block cap.
 */
export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const SHOW_AFTER_PX = 400; // roughly past the hero
    const HIDE_AFTER_MS = 2000;

    function clearHideTimer() {
      if (hideTimer.current !== null) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    }

    function onScroll() {
      const past = window.scrollY > SHOW_AFTER_PX;
      if (!past) {
        setVisible(false);
        clearHideTimer();
        return;
      }
      setVisible(true);
      clearHideTimer();
      hideTimer.current = setTimeout(() => setVisible(false), HIDE_AFTER_MS);
    }

    // Initial check in case the page loads already scrolled.
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearHideTimer();
    };
  }, []);

  return (
    <nav
      aria-label="Jump to vertical"
      className={`pointer-events-none fixed inset-x-0 bottom-6 z-30 flex justify-center px-4 transition-all duration-300 ease-out ${
        visible ? "opacity-100 translate-y-0" : "translate-y-6 opacity-0"
      }`}
      // Keep it focusable while visible.
      aria-hidden={!visible}
    >
      <div
        className={`pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-gray-200 bg-white/95 px-2 py-1.5 shadow-lg backdrop-blur ${
          visible ? "" : "pointer-events-none"
        }`}
      >
        <span className="hidden px-2 text-[10px] font-semibold uppercase tracking-widest text-gray-500 sm:inline">
          Jump to
        </span>
        {VERTICALS.map((v) => (
          <Link
            key={v.slug}
            href={`/#${v.slug}`}
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-700 transition-colors hover:bg-gray-900 hover:text-white"
          >
            {v.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
