import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import TeamGrid from "@/components/blocks/TeamGrid";
import RichTextContent from "@/components/blocks/RichTextContent";

export const metadata: Metadata = {
  title: "People & Workplaces — ABN",
  description:
    "ABN's commercial, operations, events and design teams across our London, New York and Singapore offices.",
};

export default function PeopleWorkplacesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About ABN", href: "/about" },
          { label: "People & Workplaces" },
        ]}
      />
      <PageHeader
        eyebrow="About ABN"
        title="People & Workplaces"
        description="The commercial, operations, events and design teams behind ABN — across our London, New York and Singapore offices."
      />
      <RichTextContent
        sections={[
          {
            heading: "How we work",
            body: "ABN operates a hybrid model with hubs in London, New York and Singapore. Editorial works in a separate reporting line from commercial to protect the independence of our coverage.",
          },
        ]}
      />
      <TeamGrid
        members={[
          { name: "Olivia Carter", role: "Commercial Director", bio: "Leads partnerships, advertising and events sales globally." },
          { name: "Matt Lambert", role: "Head of Events", bio: "Runs the PAM Conference and partner event programme." },
          { name: "Naomi Ito", role: "Head of Operations", bio: "Subscriptions, distribution and audience operations." },
          { name: "Liam Foster", role: "Design Director", bio: "Print and digital design across ABN's titles." },
          { name: "Sara Almeida", role: "Audience Lead", bio: "Newsletter, podcast and on-platform audience growth." },
          { name: "Jonas Berg", role: "Engineering Lead", bio: "Editorial tooling, CMS and the public-facing portal." },
        ]}
      />
    </>
  );
}
