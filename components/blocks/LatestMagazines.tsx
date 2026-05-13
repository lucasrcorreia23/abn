import Link from "next/link";
import { DEFAULT_ISSUES, type MagazineIssue } from "@/lib/magazines";

/**
 * LatestMagazines — "Latest Specialist Magazine Editions" strip.
 *
 * Shows the most recent issue of each ABN title (Cabin / Cargo / MRO /
 * Regional) as a row of 4 cover cards. Each card links to the magazine
 * archive for that title; the "View all" header link goes to /magazines.
 */

export default function LatestMagazines({
  issues = DEFAULT_ISSUES,
}: {
  issues?: MagazineIssue[];
}) {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        {/* Header row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 bg-gray-900 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            <span aria-hidden>↘</span>
            Latest specialist magazine editions
          </span>
          <Link
            href="/magazines"
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-gray-900 underline-offset-4 hover:underline"
          >
            <span aria-hidden>+</span>
            View all
          </Link>
        </div>

        {/* Covers grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {issues.map((m) => (
            <Link
              key={m.slug}
              href={`/magazines#${m.slug}`}
              className="group block"
            >
              <div
                className="ph-img aspect-[3/4] w-full shadow-sm transition-transform group-hover:scale-[1.01]"
                data-label={m.coverLabel}
              />
              <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900 group-hover:underline">
                {m.issue}
              </h3>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-gray-500 underline-offset-2 group-hover:underline">
                View all issues
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
