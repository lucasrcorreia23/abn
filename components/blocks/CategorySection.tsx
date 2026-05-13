import Link from "next/link";
import type { Article } from "@/lib/mock-articles";
import { formatDate } from "@/lib/mock-articles";

/**
 * CategorySection — home-page section for one vertical, Globo-style:
 * 1 large lead card on the left + 4 smaller cards on the right (2×2).
 *
 * Pass 5 articles — [0] is the lead, [1..4] fill the right grid.
 */
export default function CategorySection({
  verticalName,
  verticalSlug,
  tagline,
  articles,
  id,
}: {
  verticalName: string;
  verticalSlug: string;
  tagline?: string;
  articles: Article[];
  /** Optional DOM id — used as anchor target by the floating nav. */
  id?: string;
}) {
  const lead = articles[0];
  const rest = articles.slice(1, 5);
  if (!lead) return null;

  return (
    <section id={id} className="scroll-mt-24 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b-2 border-gray-900 pb-3">
          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-gray-900 sm:text-3xl">
              {verticalName}
            </h2>
            {tagline && <p className="text-sm text-gray-500">{tagline}</p>}
          </div>
          <Link
            href={`/${verticalSlug}`}
            className="text-xs font-semibold uppercase tracking-widest text-gray-700 hover:text-black"
          >
            View all {verticalName} →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Lead — spans 2 rows on desktop */}
          <Link
            href={`/${lead.category}/${lead.slug}`}
            className="group flex flex-col lg:row-span-2"
          >
            <div
              className="ph-img aspect-[4/3] w-full"
              data-label={lead.imagePlaceholder}
            />
            <div className="mt-3">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                {lead.subcategory}
              </span>
              <h3 className="mt-1 text-xl font-bold leading-snug text-gray-900 group-hover:underline sm:text-2xl">
                {lead.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                {lead.excerpt}
              </p>
              <p className="mt-2 text-[11px] text-gray-500">
                {lead.author} · {formatDate(lead.date)}
              </p>
            </div>
          </Link>

          {/* 4 chamadas — fill remaining 2×2 grid */}
          {rest.map((a) => (
            <Link
              key={a.id}
              href={`/${a.category}/${a.slug}`}
              className="group flex flex-col"
            >
              <div
                className="ph-img aspect-[16/9] w-full"
                data-label={a.imagePlaceholder}
              />
              <div className="mt-2">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                  {a.subcategory}
                </span>
                <h3 className="mt-1 line-clamp-3 text-sm font-semibold leading-snug text-gray-900 group-hover:underline">
                  {a.title}
                </h3>
                <p className="mt-1 text-[11px] text-gray-500">
                  {formatDate(a.date)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
