import Link from "next/link";
import type { Article } from "@/lib/mock-articles";
import { formatDate } from "@/lib/mock-articles";

/**
 * ArticleCardLarge — large card variant with prominent image, headline, excerpt
 * and byline. Used inside grids where each story needs editorial weight.
 */
export default function ArticleCardLarge({ article }: { article: Article }) {
  return (
    <Link href={`/${article.category}/${article.slug}`} className="group flex flex-col">
      <div className="ph-img aspect-[16/9] w-full" data-label={article.imagePlaceholder} />
      <div className="mt-4">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
          {article.category} · {article.subcategory}
        </span>
        <h3 className="mt-2 text-xl font-bold leading-snug text-gray-900 group-hover:underline sm:text-2xl">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-gray-600">
          {article.excerpt}
        </p>
        <p className="mt-3 text-xs text-gray-500">
          {article.author} · {formatDate(article.date)} · {article.readTime} min read
        </p>
      </div>
    </Link>
  );
}
