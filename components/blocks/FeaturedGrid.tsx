import Link from "next/link";
import type { Article } from "@/lib/mock-articles";
import { formatDate } from "@/lib/mock-articles";

/**
 * FeaturedGrid — a flexible 2×2 / 3×3 grid of feature cards used as a secondary
 * editorial block on the home page and on vertical landing pages.
 */
export default function FeaturedGrid({
  title,
  articles,
  columns = 3,
}: {
  title?: string;
  articles: Article[];
  columns?: 2 | 3;
}) {
  const colClass = columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        {title && (
          <div className="mb-6 flex items-end justify-between border-b border-gray-200 pb-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h2>
          </div>
        )}
        <div className={`grid gap-6 sm:grid-cols-2 ${colClass}`}>
          {articles.map((a) => (
            <Link
              key={a.id}
              href={`/${a.category}/${a.slug}`}
              className="group flex flex-col"
            >
              <div className="ph-img aspect-[4/3] w-full" data-label={a.imagePlaceholder} />
              <div className="mt-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                  {a.category} · {a.subcategory}
                </span>
                <h3 className="mt-1.5 text-lg font-semibold leading-snug text-gray-900 group-hover:underline">
                  {a.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                  {a.excerpt}
                </p>
                <p className="mt-2 text-xs text-gray-500">
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
