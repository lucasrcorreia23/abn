import Link from "next/link";
import type { Article } from "@/lib/mock-articles";
import { formatDate } from "@/lib/mock-articles";

/**
 * ArticleCardSmall — compact card for sidebars and dense grids.
 * Square thumbnail above tight metadata + title.
 */
export default function ArticleCardSmall({ article }: { article: Article }) {
  return (
    <Link href={`/${article.category}/${article.slug}`} className="group flex flex-col">
      <div className="ph-img aspect-square w-full" data-label={article.imagePlaceholder} />
      <div className="mt-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
          {article.category}
        </span>
        <h4 className="mt-1 text-sm font-semibold leading-snug text-gray-900 group-hover:underline">
          {article.title}
        </h4>
        <p className="mt-1 text-[11px] text-gray-500">{formatDate(article.date)}</p>
      </div>
    </Link>
  );
}
