import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import RichTextContent from "@/components/blocks/RichTextContent";

export const metadata: Metadata = {
  title: "Terms & Conditions — ABN",
  description: "Terms & Conditions for the Aviation Business News portal and subscriptions.",
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />
      <RichTextContent
        sections={[
          { heading: "1. Introduction", body: "These terms govern your use of the ABN portal and the products available through it, including newsletters, magazines and events." },
          { heading: "2. Accounts and subscriptions", body: "Subscriptions are personal and non-transferable. Corporate and team subscriptions are governed by separate written agreements." },
          { heading: "3. Editorial policy", body: "ABN's editorial content is produced independently. Sponsored content and partner posts are clearly labelled as such." },
          { heading: "4. Intellectual property", body: "All content on the portal is the property of ABN or its licensors. You may share links and short excerpts with attribution; commercial republication requires written permission." },
          { heading: "5. Disclaimer", body: "ABN's reporting is general industry information and is not investment, legal, regulatory or operational advice." },
          { heading: "6. Changes to these terms", body: "We may update these terms periodically. Material changes will be communicated to subscribers by email." },
        ]}
      />
    </>
  );
}
