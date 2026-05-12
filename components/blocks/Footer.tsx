"use client";

import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/lib/sitemap";

/**
 * Footer — multi-column site footer with all sitemap links, inline newsletter,
 * social placeholders and legal. Rendered on every page via the root layout.
 */
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-sm text-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2.8fr]">
          <div>
            <Link href="/" aria-label="Aviation Business News — Home" className="inline-block">
              <Image
                src="/abn-logo.png"
                alt="Aviation Business News"
                width={220}
                height={89}
                className="h-12 w-auto grayscale contrast-125"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-gray-600">
              Aviation Business News is the B2B publishing hub for Cabin, Cargo, MRO and
              Regional aviation — independent reporting, analysis and events.
            </p>

            <form
              className="mt-5 flex max-w-xs gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="sr-only" htmlFor="footer-newsletter">
                Your email
              </label>
              <input
                id="footer-newsletter"
                type="email"
                placeholder="Your email"
                className="flex-1 border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
              <button
                type="submit"
                className="bg-gray-900 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:bg-black"
              >
                Sign up
              </button>
            </form>

            <div className="mt-6 flex gap-3 text-xs uppercase tracking-widest text-gray-500">
              <span className="border border-gray-300 px-2 py-1">LK</span>
              <span className="border border-gray-300 px-2 py-1">X</span>
              <span className="border border-gray-300 px-2 py-1">YT</span>
              <span className="border border-gray-300 px-2 py-1">RSS</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-gray-900">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-gray-600 hover:text-gray-900">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Aviation Business News — Wireframe proposal.</span>
          <span className="flex gap-4">
            <Link href="/terms" className="hover:text-gray-900">Terms</Link>
            <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
