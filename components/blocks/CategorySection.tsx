import Link from "next/link";
import type { Article } from "@/lib/mock-articles";
import type { Vertical } from "@/lib/sitemap";

/**
 * CategorySection — four-up brand strip. One column per vertical (Cabin,
 * Cargo, MRO, Regional): a lead story with an in-image category chip,
 * followed by 4 headline-only rows. No excerpts, authors, or dates.
 *
 * Each column expects 5 articles — [0] is the lead, [1..4] are headlines.
 */
export default function CategorySection({
  columns,
}: {
  columns: { vertical: Vertical; articles: Article[] }[];
}) {
  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gray-200">
          {columns.map(({ vertical, articles }) => {
            const [lead, ...rest] = articles;
            if (!lead) return null;
            return (
              <div
                key={vertical.slug}
                id={vertical.slug}
                className="scroll-mt-24 flex flex-col lg:px-8 lg:first:pl-0 lg:last:pr-0"
              >
                <div className="mb-5">
                  <Link
                    href={`/${vertical.slug}`}
                    className="text-[11px] font-semibold uppercase tracking-widest text-gray-600 hover:text-black"
                  >
                    {vertical.name} →
                  </Link>
                </div>

                <Link
                  href={`/${vertical.slug}/${lead.slug}`}
                  className="group"
                >
                  <div
                    className="ph-img relative aspect-[16/9] w-full"
                    data-label={lead.imagePlaceholder}
                  >
                    <span className="absolute left-3 top-3 inline-block bg-gray-900 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      {lead.subcategory}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold leading-snug text-gray-900 group-hover:underline">
                    {lead.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                    {lead.excerpt}
                  </p>
                </Link>

                <ul className="mt-6 space-y-6">
                  {rest.slice(0, 4).map((a) => (
                    <li key={a.id}>
                      <Link
                        href={`/${a.category}/${a.slug}`}
                        className="block text-sm font-semibold leading-snug text-gray-800 hover:underline"
                      >
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
