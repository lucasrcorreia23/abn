import Link from "next/link";
import type { Article } from "@/lib/mock-articles";
import { formatDate } from "@/lib/mock-articles";

/**
 * CategorySection — home-page section for one vertical: title bar + a tight
 * row of 4 equally-sized story cards + "View all" link.
 *
 * Pass 4 articles — additional articles are ignored.
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
  const cards = articles.slice(0, 4);
  if (cards.length === 0) return null;

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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((a) => (
            <Link
              key={a.id}
              href={`/${a.category}/${a.slug}`}
              className="group flex flex-col"
            >
              <div
                className="ph-img aspect-[16/9] w-full"
                data-label={a.imagePlaceholder}
              />
              <div className="mt-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                  {a.subcategory}
                </span>
                <h3 className="mt-1 text-sm font-semibold leading-snug text-gray-900 group-hover:underline">
                  {a.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs text-gray-600">
                  {a.excerpt}
                </p>
                <p className="mt-2 text-[11px] text-gray-500">
                  {a.author} · {formatDate(a.date)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
