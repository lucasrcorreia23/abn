"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  VERTICALS,
  MEGAMENU_SECTIONS,
  type Vertical,
  type MegaSection,
} from "@/lib/sitemap";
import { ARTICLES, formatDate } from "@/lib/mock-articles";

/**
 * Navbar — Relume Navbar-5 style megamenu.
 *
 * One fixed full-width mega-panel sits below the top bar. Hovering any of the
 * seven top-level items (4 verticals + Magazines, Events & Webinars, About ABN)
 * swaps the panel's content without remounting it — the panel always has the
 * same 3-column layout (summary + topics + featured), only the data changes.
 *
 * Mobile: stacked accordion (one section per item).
 */
export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const verticalKey = (slug: string) => `v:${slug}`;
  const sectionKey = (slug: string) => `s:${slug}`;

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!searchContainerRef.current?.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [searchOpen]);

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    setSearchOpen(false);
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  const activePanel: PanelData | null = (() => {
    if (!activeKey) return null;
    if (activeKey.startsWith("v:")) {
      const v = VERTICALS.find((x) => verticalKey(x.slug) === activeKey);
      return v ? verticalToPanel(v) : null;
    }
    const s = MEGAMENU_SECTIONS.find((x) => sectionKey(x.slug) === activeKey);
    return s ? sectionToPanel(s) : null;
  })();

  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white"
      onMouseLeave={() => setActiveKey(null)}
    >
      {/* Utility bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs text-gray-500 sm:px-6">
          <span>Aviation Business News — Global B2B coverage</span>
          <div className="hidden gap-4 sm:flex">
            <Link href="/videocast" className="hover:text-gray-900">
              Videocast
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Advertise with Us
            </Link>
            <Link href="/newsletter" className="hover:text-gray-900">
              Newsletter
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
          onMouseEnter={() => setActiveKey(null)}
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

        <nav
          className={`hidden flex-1 items-center justify-center gap-1 lg:flex ${
            searchOpen ? "lg:hidden" : ""
          }`}
        >
          {VERTICALS.map((v) => {
            const key = verticalKey(v.slug);
            const isActive = activeKey === key;
            return (
              <TriggerLink
                key={key}
                href={`/${v.slug}`}
                label={v.name}
                isActive={isActive}
                onActivate={() => setActiveKey(key)}
              />
            );
          })}
          {MEGAMENU_SECTIONS.map((s) => {
            const key = sectionKey(s.slug);
            const isActive = activeKey === key;
            return (
              <TriggerLink
                key={key}
                href={s.href}
                label={s.name}
                isActive={isActive}
                onActivate={() => setActiveKey(key)}
              />
            );
          })}
        </nav>

        {searchOpen && (
          <form
            ref={searchContainerRef}
            onSubmit={onSearchSubmit}
            role="search"
            className="hidden flex-1 items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5 md:flex"
          >
            <span aria-hidden className="text-gray-400">⌕</span>
            <input
              ref={searchInputRef}
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news…"
              aria-label="Search news"
              className="w-full bg-transparent text-sm placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSearchOpen(false);
              }}
              aria-label="Close search"
              className="text-sm text-gray-400 hover:text-gray-700"
            >
              ✕
            </button>
          </form>
        )}

        <div className="flex items-center gap-2">
          {!searchOpen && (
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="hidden h-9 w-9 items-center justify-center text-gray-600 hover:text-gray-900 md:flex"
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
          )}
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

      {/* Megamenu — single fixed panel, content swaps based on `activePanel` */}
      {activePanel && (
        <div className="absolute inset-x-0 top-full hidden border-b border-gray-200 bg-white shadow-lg lg:block">
          <MegaPanel data={activePanel} onClose={() => setActiveKey(null)} />
        </div>
      )}

      {/* Mobile drawer */}
      {openMobile && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <ul className="mx-auto max-w-7xl divide-y divide-gray-100 px-4 sm:px-6">
            {VERTICALS.map((v) => {
              const key = verticalKey(v.slug);
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
              const key = sectionKey(s.slug);
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
  );
}

/* ---------- Trigger ---------- */

function TriggerLink({
  href,
  label,
  isActive,
  onActivate,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <Link
      href={href}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`inline-flex items-center gap-1 border-b-2 px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
        isActive
          ? "border-gray-900 text-black"
          : "border-transparent text-gray-800 hover:text-black"
      }`}
      aria-haspopup="true"
      aria-expanded={isActive}
    >
      {label}
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
}

/* ---------- Panel data model + adapters ---------- */

type PanelData = {
  eyebrow: string;
  tagline: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  topics: { label: string; href: string }[];
  secondaryCard?: {
    eyebrow: string;
    title: string;
    body: ReactNode;
    href: string;
    cta: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    excerpt: string;
    meta: string;
    href: string;
    imagePlaceholder: string;
  } | null;
};

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

function verticalToPanel(v: Vertical): PanelData {
  const featured =
    ARTICLES.find((a) => a.category === v.slug && a.featured) ??
    ARTICLES.find((a) => a.category === v.slug);

  return {
    eyebrow: v.name,
    tagline: v.tagline,
    description: v.description,
    primaryHref: `/${v.slug}`,
    primaryLabel: `View all ${v.name}`,
    topics: v.subcategories.map((sub) => ({
      label: sub,
      href: `/${v.slug}?sub=${encodeURIComponent(sub)}`,
    })),
    secondaryCard: {
      eyebrow: `${v.name} Magazine`,
      title: MAGAZINE_TITLE[v.slug],
      body: (
        <>
          Latest issue:{" "}
          <span className="font-medium text-gray-800">
            {MAGAZINE_ISSUE[v.slug]}
          </span>
          . Long-form reporting, interviews and analysis from the{" "}
          {v.name.toLowerCase()} beat.
        </>
      ),
      href: `/magazines#${v.slug}`,
      cta: "Read latest issue →",
    },
    featured: featured
      ? {
          eyebrow: `Featured in ${v.name}`,
          title: featured.title,
          excerpt: featured.excerpt,
          meta: `${featured.author} · ${formatDate(featured.date)}`,
          href: `/${featured.category}/${featured.slug}`,
          imagePlaceholder: featured.imagePlaceholder,
        }
      : null,
  };
}

function sectionToPanel(s: MegaSection): PanelData {
  return {
    eyebrow: s.name,
    tagline: s.tagline,
    description: s.description,
    primaryHref: s.href,
    primaryLabel: `View all ${s.name}`,
    topics: s.items,
    secondaryCard: {
      eyebrow: s.secondary.eyebrow,
      title: s.secondary.title,
      body: s.secondary.body,
      href: s.secondary.href,
      cta: s.secondary.cta,
    },
    featured: s.featured,
  };
}

/* ---------- Mega panel ---------- */

function MegaPanel({ data, onClose }: { data: PanelData; onClose: () => void }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1fr_1.1fr]">
      {/* Column 1 — summary (+ optional secondary card) */}
      <div
        className={`flex flex-col ${
          data.secondaryCard ? "divide-y divide-gray-200" : ""
        }`}
      >
        <div className={data.secondaryCard ? "pb-6" : ""}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
            {data.eyebrow}
          </p>
          <h3 className="mt-1 text-xl font-extrabold tracking-tight text-gray-900">
            {data.tagline}
          </h3>
          <p className="mt-2 max-w-xs text-sm text-gray-600">
            {data.description}
          </p>
          <Link
            href={data.primaryHref}
            onClick={onClose}
            className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-gray-900 underline-offset-4 hover:underline"
          >
            {data.primaryLabel} →
          </Link>
        </div>

        {data.secondaryCard && (
          <div className="pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
              {data.secondaryCard.eyebrow}
            </p>
            <h3 className="mt-1 text-xl font-extrabold tracking-tight text-gray-900">
              {data.secondaryCard.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm text-gray-600">
              {data.secondaryCard.body}
            </p>
            <Link
              href={data.secondaryCard.href}
              onClick={onClose}
              className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-gray-900 underline-offset-4 hover:underline"
            >
              {data.secondaryCard.cta}
            </Link>
          </div>
        )}
      </div>

      {/* Column 2 — topics */}
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          Topics
        </p>
        <ul className="space-y-1.5">
          {data.topics.map((t) => (
            <li key={t.href}>
              <Link
                href={t.href}
                onClick={onClose}
                className="text-sm text-gray-700 hover:text-gray-900 hover:underline"
              >
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3 — featured */}
      {data.featured && (
        <Link
          href={data.featured.href}
          onClick={onClose}
          className="group block border-l border-gray-200 pl-8"
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            {data.featured.eyebrow}
          </p>
          <div
            className="ph-img mt-3 aspect-[16/9] w-full"
            data-label={data.featured.imagePlaceholder}
          />
          <h4 className="mt-3 text-base font-semibold leading-snug text-gray-900 group-hover:underline">
            {data.featured.title}
          </h4>
          <p className="mt-1 line-clamp-2 text-xs text-gray-600">
            {data.featured.excerpt}
          </p>
          <p className="mt-2 text-[11px] text-gray-500">{data.featured.meta}</p>
        </Link>
      )}
    </div>
  );
}
