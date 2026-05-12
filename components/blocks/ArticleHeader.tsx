import type { Article } from "@/lib/mock-articles";
import { formatDate } from "@/lib/mock-articles";

/**
 * ArticleHeader — header block at the top of an article page: eyebrow with
 * category & subcategory, H1 title, dek/excerpt, byline + meta, share row.
 */
export default function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
          {article.category} · {article.subcategory}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{article.excerpt}</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-gray-200 py-3 text-xs text-gray-500">
          <span>
            <span className="font-semibold text-gray-900">{article.author}</span>
            <span className="mx-2">·</span>
            {formatDate(article.date)}
            <span className="mx-2">·</span>
            {article.readTime} min read
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
              Share
            </span>
            <span className="border border-gray-300 px-2 py-1 text-[10px] font-semibold">LK</span>
            <span className="border border-gray-300 px-2 py-1 text-[10px] font-semibold">X</span>
            <span className="border border-gray-300 px-2 py-1 text-[10px] font-semibold">@</span>
            <span className="border border-gray-300 px-2 py-1 text-[10px] font-semibold">⎘</span>
          </div>
        </div>
      </div>
    </header>
  );
}
