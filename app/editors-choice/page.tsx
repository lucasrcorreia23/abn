import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import EditorsChoice from "@/components/blocks/EditorsChoice";
import FeaturedGrid from "@/components/blocks/FeaturedGrid";
import NewsletterCTA from "@/components/blocks/NewsletterCTA";
import { ARTICLES, getEditorsChoice } from "@/lib/mock-articles";

export const metadata: Metadata = {
  title: "Editor's Choice — ABN",
  description: "The most important stories of the week, hand-picked by the ABN editors.",
};

export default function EditorsChoicePage() {
  const featured = getEditorsChoice(4);
  const additional = ARTICLES.filter((a) => a.featured).slice(0, 6);

  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Editor's Choice" }]} />
      <PageHeader
        eyebrow="Editor's Choice"
        title="The stories we'd put on the front page"
        description="A weekly selection of the four to six stories ABN's editors think every executive in aviation should read this week."
      />
      <EditorsChoice articles={featured} />
      <FeaturedGrid title="More long reads to bookmark" articles={additional} columns={3} />
      <NewsletterCTA />
    </>
  );
}
