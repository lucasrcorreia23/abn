"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { VERTICALS, MEGAMENU_SECTIONS } from "@/lib/sitemap";

/**
 * Navbar — portal-style top navigation (BBC / Globo).
 *
 * Two-row desktop header:
 *   (1) centered logo only;
 *   (2) flat nav row + search button + Subscribe CTA on the right.
 * Tapping search opens a full-screen overlay with a large input,
 * recent searches and suggested navigation items.
 */

const RECENT_SEARCHES = [
  "Cabin interiors",
  "PAM Conference",
  "GTF shop visits",
  "Trans-Pacific cargo",
];

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hidden, setHidden] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const threshold = 80;
    const delta = 6;

    const update = () => {
      const y = window.scrollY;
      const diff = y - lastY;
      if (Math.abs(diff) > delta) {
        if (diff > 0 && y > threshold) {
          setHidden(true);
        } else if (diff < 0) {
          setHidden(false);
        }
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (openMobile || searchOpen) setHidden(false);
  }, [openMobile, searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [searchOpen]);

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    setSearchOpen(false);
    setSearchQuery("");
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  const goRecent = (term: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b border-gray-200 bg-white transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Top row — centered logo (mobile: hamburger left, logo center) */}
        <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6">
          <div className="hidden flex-1 lg:block" aria-hidden />
          <div className="flex-1 lg:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              className="rounded border border-gray-300 px-2 py-1 text-sm"
              onClick={() => setOpenMobile((v) => !v)}
            >
              ☰
            </button>
          </div>

          <Link
            href="/"
            className="shrink-0"
            aria-label="Aviation Business News — Home"
          >
            <Image
              src="/abn-logo.png"
              alt="Aviation Business News"
              width={180}
              height={73}
              priority
              className="h-14 w-auto grayscale contrast-125"
            />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="flex h-9 w-9 items-center justify-center text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </div>

          <div className="hidden flex-1 lg:block" aria-hidden />
        </div>

        {/* Nav row — links + search + subscribe (desktop only) */}
        <div className="hidden lg:block">
          <div className="mx-auto flex max-w-7xl items-center px-4 py-3 sm:px-6">
            <div className="flex-1" aria-hidden />
            <nav className="flex items-center justify-center gap-2">
              {VERTICALS.map((v) => (
                <NavLink key={v.slug} href={`/${v.slug}`} label={v.name} />
              ))}
              {MEGAMENU_SECTIONS.map((s) => (
                <NavLink key={s.slug} href={s.href} label={s.name} />
              ))}
            </nav>
            <div className="flex flex-1 items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="flex h-9 w-9 items-center justify-center text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </button>
              <Link
                href="/subscribe"
                className="rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:bg-black"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {openMobile && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <ul className="mx-auto max-w-7xl divide-y divide-gray-100 px-4 sm:px-6">
              {VERTICALS.map((v) => {
                const key = `v:${v.slug}`;
                const isExpanded = mobileExpanded === key;
                return (
                  <li key={key} className="py-2">
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(isExpanded ? null : key)}
                      className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold uppercase tracking-wide text-gray-900"
                      aria-expanded={isExpanded}
                    >
                      <span>{v.name}</span>
                      <span aria-hidden className="text-gray-400">
                        {isExpanded ? "−" : "+"}
                      </span>
                    </button>
                    {isExpanded && (
                      <>
                        <Link
                          href={`/${v.slug}`}
                          className="block py-1 text-xs font-semibold uppercase tracking-widest text-gray-500 underline-offset-2 hover:underline"
                          onClick={() => setOpenMobile(false)}
                        >
                          View all {v.name} →
                        </Link>
                        <ul className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1 pb-2 text-sm text-gray-600">
                          {v.subcategories.map((sub) => (
                            <li key={sub}>
                              <Link
                                href={`/${v.slug}?sub=${encodeURIComponent(sub)}`}
                                className="hover:text-gray-900"
                                onClick={() => setOpenMobile(false)}
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                );
              })}
              {MEGAMENU_SECTIONS.map((s) => {
                const key = `s:${s.slug}`;
                const isExpanded = mobileExpanded === key;
                return (
                  <li key={key} className="py-2">
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(isExpanded ? null : key)}
                      className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold uppercase tracking-wide text-gray-900"
                      aria-expanded={isExpanded}
                    >
                      <span>{s.name}</span>
                      <span aria-hidden className="text-gray-400">
                        {isExpanded ? "−" : "+"}
                      </span>
                    </button>
                    {isExpanded && (
                      <>
                        <Link
                          href={s.href}
                          className="block py-1 text-xs font-semibold uppercase tracking-widest text-gray-500 underline-offset-2 hover:underline"
                          onClick={() => setOpenMobile(false)}
                        >
                          View all {s.name} →
                        </Link>
                        <ul className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1 pb-2 text-sm text-gray-600">
                          {s.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="hover:text-gray-900"
                                onClick={() => setOpenMobile(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                );
              })}
              <li className="py-3">
                <Link
                  href="/subscribe"
                  className="block rounded-full bg-gray-900 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white"
                  onClick={() => setOpenMobile(false)}
                >
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Full-screen search overlay */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          className="fixed inset-0 z-50 flex flex-col bg-white"
        >
          <div className="border-b border-gray-200">
            <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-5 sm:px-6">
              <form
                onSubmit={onSearchSubmit}
                role="search"
                className="flex flex-1 items-center gap-3 border-b-2 border-gray-900 pb-2"
              >
                <span aria-hidden className="text-2xl text-gray-700">
                  ⌕
                </span>
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search news, magazines, events…"
                  aria-label="Search"
                  className="w-full bg-transparent text-2xl placeholder:text-gray-400 focus:outline-none sm:text-3xl"
                />
              </form>
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                aria-label="Close search"
                className="shrink-0 text-sm font-semibold uppercase tracking-widest text-gray-500 hover:text-gray-900"
              >
                Close ✕
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:py-14">
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Recent searches
                </h3>
                <ul className="mt-4 space-y-2">
                  {RECENT_SEARCHES.map((term) => (
                    <li key={term}>
                      <button
                        type="button"
                        onClick={() => goRecent(term)}
                        className="flex w-full items-center gap-3 border-b border-gray-100 py-2 text-left text-base text-gray-800 hover:text-black"
                      >
                        <span aria-hidden className="text-gray-400">
                          ↻
                        </span>
                        {term}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Suggested navigation
                </h3>
                <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                  {VERTICALS.map((v) => (
                    <li key={v.slug}>
                      <Link
                        href={`/${v.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="block border-b border-gray-100 py-2 text-base font-semibold uppercase tracking-wide text-gray-900 hover:text-black"
                      >
                        {v.name}
                      </Link>
                    </li>
                  ))}
                  {MEGAMENU_SECTIONS.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={s.href}
                        onClick={() => setSearchOpen(false)}
                        className="block border-b border-gray-100 py-2 text-base font-semibold uppercase tracking-wide text-gray-900 hover:text-black"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-10 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Quick links
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[
                    { label: "PAM Conference", href: "/events#pam" },
                    { label: "Videocast", href: "/videocast" },
                    { label: "Subscribe Magazine", href: "/subscribe" },
                    { label: "Contact", href: "/contact" },
                  ].map((q) => (
                    <li key={q.href}>
                      <Link
                        href={q.href}
                        onClick={() => setSearchOpen(false)}
                        className="inline-block border border-gray-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-700 hover:border-gray-900 hover:text-gray-900"
                      >
                        {q.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-3 py-2 text-sm font-medium uppercase tracking-wide text-gray-800 hover:text-black"
    >
      {label}
    </Link>
  );
}
