import Link from "next/link";
import type { Article } from "@/lib/mock-articles";
import { formatDate } from "@/lib/mock-articles";

/**
 * EditorsChoice — curated highlight strip with 3–4 articles.
 * Light background to keep the wireframe airy; the editorial signal comes
 * from the eyebrow, top rule and `View all` CTA, not from a heavy dark fill.
 */
export default function EditorsChoice({ articles }: { articles: Article[] }) {
  return (
    <section className="border-y border-gray-200 bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-8 flex items-end justify-between border-b border-gray-300 pb-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-500">
              Curated by our newsroom
            </p>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight">
              Editor&rsquo;s Choice
            </h2>
          </div>
          <Link
            href="/editors-choice"
            className="hidden text-xs font-semibold uppercase tracking-widest text-gray-700 hover:text-gray-900 sm:inline-block"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => (
            <Link key={a.id} href={`/${a.category}/${a.slug}`} className="group">
              <div className="ph-img aspect-[4/3]" data-label={a.imagePlaceholder} />
              <div className="mt-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                  {a.category}
                </span>
                <h3 className="mt-1.5 text-base font-semibold leading-snug text-gray-900 group-hover:underline">
                  {a.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
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
