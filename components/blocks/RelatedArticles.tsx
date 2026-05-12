import Link from "next/link";
import type { Article } from "@/lib/mock-articles";
import { formatDate } from "@/lib/mock-articles";

/**
 * RelatedArticles — 3–4 related stories from the same vertical, shown at the
 * end of article pages and at the bottom of vertical landing pages.
 */
export default function RelatedArticles({
  title = "Related stories",
  articles,
}: {
  title?: string;
  articles: Article[];
}) {
  return (
    <section className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <h2 className="mb-6 border-b border-gray-200 pb-3 text-xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => (
            <Link key={a.id} href={`/${a.category}/${a.slug}`} className="group">
              <div className="ph-img aspect-[4/3]" data-label={a.imagePlaceholder} />
              <div className="mt-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                  {a.category}
                </span>
                <h3 className="mt-1 text-sm font-semibold leading-snug text-gray-900 group-hover:underline">
                  {a.title}
                </h3>
                <p className="mt-1 text-[11px] text-gray-500">{formatDate(a.date)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
