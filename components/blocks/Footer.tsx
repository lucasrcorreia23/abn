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

            <div className="mt-6 flex gap-4 text-gray-500">
              <Link href="#" aria-label="LinkedIn" className="hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                </svg>
              </Link>
              <Link href="#" aria-label="X (Twitter)" className="hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
                </svg>
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link href="#" aria-label="RSS" className="hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248S0 22.546 0 20.752s1.456-3.248 3.252-3.248 3.251 1.454 3.251 3.248zM1.677 6.464v4.581c6.518 0 11.806 5.282 11.806 11.806h4.581c0-9.043-7.342-16.387-16.387-16.387zM1.677 0v4.582C12.198 4.582 19.418 11.802 19.418 22.322H24C24 9.272 14.728 0 1.677 0z" />
                </svg>
              </Link>
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
