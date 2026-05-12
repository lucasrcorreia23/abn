import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import ArticleHeader from "@/components/blocks/ArticleHeader";
import ArticleHeroImage from "@/components/blocks/ArticleHeroImage";
import ArticleBody from "@/components/blocks/ArticleBody";
import AuthorBio from "@/components/blocks/AuthorBio";
import NewsletterCTA from "@/components/blocks/NewsletterCTA";
import RelatedArticles from "@/components/blocks/RelatedArticles";
import { getVertical } from "@/lib/sitemap";
import {
  ARTICLES,
  getArticleBySlug,
  getRelated,
} from "@/lib/mock-articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ category: a.category, article: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ category: string; article: string }>;
}): Promise<Metadata> {
  const { category, article } = await props.params;
  const a = getArticleBySlug(category, article);
  const v = getVertical(category);
  if (!a || !v) return { title: "Not found" };
  return {
    title: `${a.title} — ${v.name}`,
    description: a.excerpt,
  };
}

export default async function ArticlePage(props: {
  params: Promise<{ category: string; article: string }>;
}) {
  const { category, article } = await props.params;
  const vertical = getVertical(category);
  const a = getArticleBySlug(category, article);
  if (!vertical || !a) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: vertical.name, href: `/${vertical.slug}` },
          { label: a.subcategory },
        ]}
      />
      <ArticleHeader article={a} />
      <ArticleHeroImage
        label={a.imagePlaceholder}
        caption={`Illustration placeholder for: ${a.title}`}
      />
      <ArticleBody title={a.title} excerpt={a.excerpt} />
      <AuthorBio author={a.author} bio={a.authorBio} />
      <NewsletterCTA />
      <RelatedArticles
        title={`More from ${vertical.name}`}
        articles={getRelated(a, 4)}
      />
    </>
  );
}
