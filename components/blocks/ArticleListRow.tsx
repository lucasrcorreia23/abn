import Link from "next/link";
import type { Article } from "@/lib/mock-articles";
import { formatDate } from "@/lib/mock-articles";

/**
 * ArticleListRow — horizontal row (thumbnail + text). Used for long listings
 * on category pages where many stories need to fit in one view.
 */
export default function ArticleListRow({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="group grid grid-cols-[140px_1fr] gap-4 border-b border-gray-200 py-5 sm:grid-cols-[200px_1fr] sm:gap-6"
    >
      <div className="ph-img aspect-[4/3]" data-label={article.imagePlaceholder} />
      <div className="flex flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
          {article.subcategory}
        </span>
        <h3 className="mt-1.5 text-lg font-semibold leading-snug text-gray-900 group-hover:underline sm:text-xl">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{article.excerpt}</p>
        <p className="mt-auto pt-3 text-xs text-gray-500">
          {article.author} · {formatDate(article.date)} · {article.readTime} min
        </p>
      </div>
    </Link>
  );
}
