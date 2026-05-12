import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import HeroCategory from "@/components/blocks/HeroCategory";
import CategoryTabs from "@/components/blocks/CategoryTabs";
import FeaturedGrid from "@/components/blocks/FeaturedGrid";
import ArticleListRow from "@/components/blocks/ArticleListRow";
import NewsletterCTA from "@/components/blocks/NewsletterCTA";
import RelatedArticles from "@/components/blocks/RelatedArticles";
import { VERTICALS, getVertical } from "@/lib/sitemap";
import { getArticlesByCategory } from "@/lib/mock-articles";

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ category: v.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await props.params;
  const v = getVertical(category);
  if (!v) return { title: "Not found" };
  return {
    title: `${v.name} — ABN`,
    description: v.description,
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await props.params;
  const vertical = getVertical(category);
  if (!vertical) notFound();

  const all = getArticlesByCategory(category);
  const featured = all.slice(0, 6);
  const list = all.slice(6);
  const related = all.slice(0, 4);

  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: vertical.name }]}
      />
      <HeroCategory
        eyebrow={`${vertical.name} · ${vertical.tagline}`}
        title={vertical.name}
        description={vertical.description}
      />
      <CategoryTabs tabs={vertical.subcategories} />

      <FeaturedGrid
        title={`Top stories in ${vertical.name}`}
        articles={featured}
        columns={3}
      />

      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900">
            All {vertical.name} stories
          </h2>
          <p className="mb-4 text-sm text-gray-500">
            Filter by subcategory using the tabs above. Showing latest first.
          </p>
          <div>
            {list.length > 0 ? (
              list.map((a) => <ArticleListRow key={a.id} article={a} />)
            ) : (
              <p className="py-6 text-sm text-gray-500">
                No additional stories at the moment. Check the top stories above.
              </p>
            )}
          </div>
        </div>
      </section>

      <NewsletterCTA />
      <RelatedArticles title={`More from ${vertical.name}`} articles={related} />
    </>
  );
}
