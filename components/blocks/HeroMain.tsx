import Link from "next/link";
import type { Article } from "@/lib/mock-articles";
import { formatDate } from "@/lib/mock-articles";

/**
 * HeroMain — home hub hero, BBC/Globo style.
 *
 * Three columns on desktop:
 *   ┌──────────────┬──────────────────────┬───────────────┐
 *   │ 2 articles   │   LEAD (big image +  │  N headlines  │
 *   │ with image   │   headline + excerpt)│  (text only)  │
 *   └──────────────┴──────────────────────┴───────────────┘
 *
 * Pass the secondary articles in this order:
 *   - first 2 → left column (cards with image)
 *   - the rest → right column (text-only headline list)
 */
export default function HeroMain({
  lead,
  secondary,
}: {
  lead: Article;
  secondary: Article[];
}) {
  const left = secondary.slice(0, 2);
  const right = secondary.slice(2);

  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_2fr_1fr] lg:gap-8">
        {/* Left column — 2 stacked cards with image */}
        <aside className="order-2 flex flex-col divide-y divide-gray-200 lg:order-1 lg:border-r lg:border-gray-200 lg:pr-6">
          {left.map((a) => (
            <SideCard key={a.id} article={a} />
          ))}
        </aside>

        {/* Centre column — lead story with big image */}
        <article className="order-1 lg:order-2">
          <Link href={`/${lead.category}/${lead.slug}`} className="group block">
            <div
              className="ph-img aspect-[16/9] w-full"
              data-label={lead.imagePlaceholder}
            />
            <div className="mt-4">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
                {lead.category} · {lead.subcategory}
              </span>
              <h1 className="mt-2 text-xl font-extrabold leading-tight text-gray-900 group-hover:underline sm:text-2xl lg:text-3xl">
                {lead.title}
              </h1>
              <p className="mt-3 max-w-3xl text-base text-gray-600 sm:text-lg">
                {lead.excerpt}
              </p>
              <p className="mt-3 text-xs text-gray-500">
                {lead.author} · {formatDate(lead.date)} · {lead.readTime} min read
              </p>
            </div>
          </Link>
        </article>

        {/* Right column — text-only headlines list */}
        <aside className="order-3 flex flex-col lg:border-l lg:border-gray-200 lg:pl-6">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            More headlines
          </p>
          <ol className="divide-y divide-gray-200 border-y border-gray-200">
            {right.map((a) => (
              <li key={a.id}>
                <HeadlineRow article={a} />
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}

function HeadlineRow({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="group block py-3"
    >
      <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
        {article.category} · {article.subcategory}
      </span>
      <h3 className="mt-1 text-sm font-semibold leading-snug text-gray-900 group-hover:underline">
        {article.title}
      </h3>
      <p className="mt-1 text-[11px] text-gray-500">{formatDate(article.date)}</p>
    </Link>
  );
}

function SideCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="group block py-4 first:pt-0 last:pb-0"
    >
      <div
        className="ph-img aspect-[16/9] w-full"
        data-label={article.imagePlaceholder}
      />
      <div className="mt-3">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
          {article.category} · {article.subcategory}
        </span>
        <h2 className="mt-1 text-base font-semibold leading-snug text-gray-900 group-hover:underline">
          {article.title}
        </h2>
        <p className="mt-1 text-[11px] text-gray-500">{formatDate(article.date)}</p>
      </div>
    </Link>
  );
}
