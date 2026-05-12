import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import NewsletterCTA from "@/components/blocks/NewsletterCTA";
import RichTextContent from "@/components/blocks/RichTextContent";

export const metadata: Metadata = {
  title: "Newsletter — ABN",
  description:
    "Subscribe to ABN's twice-weekly newsletter for analysis across Cabin, Cargo, MRO and Regional aviation.",
};

export default function NewsletterPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Newsletter" }]} />
      <PageHeader
        eyebrow="Newsletter"
        title="The ABN Briefing"
        description="Analysis and the stories that mattered, twice a week. Free for industry professionals — corporate-domain emails preferred."
      />
      <RichTextContent
        sections={[
          {
            heading: "What you'll get",
            body: "Tuesday and Friday emails curated by ABN's senior editors. Each briefing covers all four verticals, with a featured analysis piece and links to the week's most-read stories.",
          },
          {
            heading: "Reading time",
            body: "Approximately 6 minutes per edition. No clickbait. No filler. We respect your inbox.",
          },
        ]}
      />
      <NewsletterCTA />
    </>
  );
}
