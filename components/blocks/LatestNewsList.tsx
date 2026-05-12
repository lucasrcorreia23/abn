import Link from "next/link";
import type { Article } from "@/lib/mock-articles";
import { formatDate } from "@/lib/mock-articles";

/**
 * LatestNewsList — vertical "Most read / Latest" list with small thumbnails.
 * Numbered, dense layout inspired by Globo's "mais lidas" rail. Used on the home.
 */
export default function LatestNewsList({
  title = "Latest News",
  articles,
}: {
  title?: string;
  articles: Article[];
}) {
  return (
    <section className="border-b border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        <h2 className="mb-5 border-b border-gray-300 pb-2 text-2xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        <ol className="grid gap-x-8 gap-y-4 md:grid-cols-2">
          {articles.map((a, i) => (
            <li key={a.id}>
              <Link
                href={`/${a.category}/${a.slug}`}
                className="group grid grid-cols-[24px_72px_1fr] items-start gap-3 border-b border-gray-200 py-3"
              >
                <span className="text-2xl font-extrabold leading-none text-gray-300">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <div className="ph-img aspect-square" data-label={a.imagePlaceholder} />
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                    {a.category}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold leading-snug text-gray-900 group-hover:underline">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{formatDate(a.date)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
