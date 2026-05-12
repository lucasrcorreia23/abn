"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { VERTICALS, type Vertical } from "@/lib/sitemap";
import { ARTICLES, formatDate } from "@/lib/mock-articles";

/**
 * Navbar — Relume Navbar-5 style megamenu.
 *
 * One fixed full-width mega-panel sits below the top bar. Hovering any of the
 * four verticals (Cabin, Cargo, MRO, Regional) swaps the panel's content
 * without remounting it — the panel always has the same layout (subcategory
 * columns + featured story), only the data changes.
 *
 * Mobile: stacked accordion (one section per vertical).
 */
export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [activeVertical, setActiveVertical] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const active = activeVertical
    ? VERTICALS.find((v) => v.slug === activeVertical)
    : null;

  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white"
      onMouseLeave={() => setActiveVertical(null)}
    >
      {/* Utility bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs text-gray-500 sm:px-6">
          <span>Aviation Business News — Global B2B coverage</span>
          <div className="hidden gap-4 sm:flex">
            <Link href="/newsletter" className="hover:text-gray-900">
              Newsletter
            </Link>
            <Link href="/subscribe" className="hover:text-gray-900">
              Subscribe Magazine
            </Link>
            <Link href="/events" className="hover:text-gray-900">
              Events
            </Link>
          </div>
        </div>
      </div>

      {/* Top bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0"
          aria-label="Aviation Business News — Home"
          onMouseEnter={() => setActiveVertical(null)}
        >
          <Image
            src="/abn-logo.png"
            alt="Aviation Business News"
            width={180}
            height={73}
            priority
            className="h-10 w-auto grayscale contrast-125"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {VERTICALS.map((v) => {
            const isActive = activeVertical === v.slug;
            return (
              <Link
                key={v.slug}
                href={`/${v.slug}`}
                onMouseEnter={() => setActiveVertical(v.slug)}
                onFocus={() => setActiveVertical(v.slug)}
                className={`inline-flex items-center gap-1 border-b-2 px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                  isActive
                    ? "border-gray-900 text-black"
                    : "border-transparent text-gray-800 hover:text-black"
                }`}
                aria-haspopup="true"
                aria-expanded={isActive}
              >
                {v.name}
                <span
                  aria-hidden
                  className={`text-xs text-gray-400 transition-transform ${
                    isActive ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </Link>
            );
          })}
          <Link
            href="/magazines"
            onMouseEnter={() => setActiveVertical(null)}
            className="px-3 py-2 text-sm font-medium uppercase tracking-wide text-gray-800 hover:text-black"
          >
            Magazines
          </Link>
          <Link
            href="/events"
            onMouseEnter={() => setActiveVertical(null)}
            className="px-3 py-2 text-sm font-medium uppercase tracking-wide text-gray-800 hover:text-black"
          >
            Events
          </Link>
          <Link
            href="/about"
            onMouseEnter={() => setActiveVertical(null)}
            className="px-3 py-2 text-sm font-medium uppercase tracking-wide text-gray-800 hover:text-black"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <label className="hidden items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm md:flex">
            <span aria-hidden className="text-gray-400">⌕</span>
            <input
              className="w-40 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none"
              placeholder="Search news…"
              type="search"
            />
          </label>
          <Link
            href="/subscribe"
            className="hidden rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:bg-black sm:inline-block"
          >
            Subscribe
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded border border-gray-300 px-2 py-1 text-sm lg:hidden"
            onClick={() => setOpenMobile((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Megamenu — single fixed panel, content swaps based on `active` */}
      {active && (
        <div className="absolute inset-x-0 top-full hidden border-b border-gray-200 bg-white shadow-lg lg:block">
          <MegaPanel vertical={active} />
        </div>
      )}

      {/* Mobile drawer */}
      {openMobile && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <ul className="mx-auto max-w-7xl divide-y divide-gray-100 px-4 sm:px-6">
            {VERTICALS.map((v) => {
              const isExpanded = mobileExpanded === v.slug;
              return (
                <li key={v.slug} className="py-2">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded(isExpanded ? null : v.slug)
                    }
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
            <li className="py-3">
              <Link
                href="/magazines"
                className="block text-sm font-semibold uppercase"
                onClick={() => setOpenMobile(false)}
              >
                Magazines
              </Link>
            </li>
            <li className="py-3">
              <Link
                href="/events"
                className="block text-sm font-semibold uppercase"
                onClick={() => setOpenMobile(false)}
              >
                Events
              </Link>
            </li>
            <li className="py-3">
              <Link
                href="/about"
                className="block text-sm font-semibold uppercase"
                onClick={() => setOpenMobile(false)}
              >
                About
              </Link>
            </li>
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
  );
}

/* ---------- Mega panel ---------- */

function MegaPanel({ vertical }: { vertical: Vertical }) {
  const featured =
    ARTICLES.find((a) => a.category === vertical.slug && a.featured) ??
    ARTICLES.find((a) => a.category === vertical.slug);

  const MAGAZINE_TITLE: Record<Vertical["slug"], string> = {
    cabin: "Aircraft Cabin Management",
    cargo: "Air Cargo Business",
    mro: "MRO Management",
    regional: "Low Cost & Regional Airline Business",
  };
  const MAGAZINE_ISSUE: Record<Vertical["slug"], string> = {
    cabin: "April / May 2026",
    cargo: "April 2026",
    mro: "March 2026",
    regional: "January / February 2026",
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1fr_1.1fr]">
      {/* Column 1 — two stacked description cards */}
      <div className="flex flex-col divide-y divide-gray-200">
        {/* Block 1 — vertical summary */}
        <div className="pb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
            {vertical.name}
          </p>
          <h3 className="mt-1 text-xl font-extrabold tracking-tight text-gray-900">
            {vertical.tagline}
          </h3>
          <p className="mt-2 max-w-xs text-sm text-gray-600">
            {vertical.description}
          </p>
          <Link
            href={`/${vertical.slug}`}
            className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-gray-900 underline-offset-4 hover:underline"
          >
            View all {vertical.name} →
          </Link>
        </div>

        {/* Block 2 — magazine teaser (same visual rhythm) */}
        <div className="pt-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
            {vertical.name} Magazine
          </p>
          <h3 className="mt-1 text-xl font-extrabold tracking-tight text-gray-900">
            {MAGAZINE_TITLE[vertical.slug]}
          </h3>
          <p className="mt-2 max-w-xs text-sm text-gray-600">
            Latest issue: <span className="font-medium text-gray-800">{MAGAZINE_ISSUE[vertical.slug]}</span>. Long-form
            reporting, interviews and analysis from the {vertical.name.toLowerCase()} beat.
          </p>
          <Link
            href={`/magazines#${vertical.slug}`}
            className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-gray-900 underline-offset-4 hover:underline"
          >
            Read latest issue →
          </Link>
        </div>
      </div>

      {/* Column 2 — all sections in a single list */}
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          Sections
        </p>
        <ul className="space-y-1.5">
          {vertical.subcategories.map((sub) => (
            <li key={sub}>
              <Link
                href={`/${vertical.slug}?sub=${encodeURIComponent(sub)}`}
                className="text-sm text-gray-700 hover:text-gray-900 hover:underline"
              >
                {sub}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3 — featured story */}
      {featured && (
        <Link
          href={`/${featured.category}/${featured.slug}`}
          className="group block border-l border-gray-200 pl-8"
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            Featured in {vertical.name}
          </p>
          <div
            className="ph-img mt-3 aspect-[16/9] w-full"
            data-label={featured.imagePlaceholder}
          />
          <h4 className="mt-3 text-base font-semibold leading-snug text-gray-900 group-hover:underline">
            {featured.title}
          </h4>
          <p className="mt-1 line-clamp-2 text-xs text-gray-600">
            {featured.excerpt}
          </p>
          <p className="mt-2 text-[11px] text-gray-500">
            {featured.author} · {formatDate(featured.date)}
          </p>
        </Link>
      )}
    </div>
  );
}
