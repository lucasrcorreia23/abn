import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import TeamGrid from "@/components/blocks/TeamGrid";
import NewsletterCTA from "@/components/blocks/NewsletterCTA";

export const metadata: Metadata = {
  title: "Meet the Team — ABN",
  description: "Editorial and commercial team behind Aviation Business News.",
};

export default function TeamPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About ABN", href: "/about" },
          { label: "Meet the Team" },
        ]}
      />
      <PageHeader
        eyebrow="About ABN"
        title="Meet the Team"
        description="The editors, reporters and commercial leaders behind ABN's four titles."
      />
      <TeamGrid
        members={[
          { name: "Alex Whitfield", role: "Editor-in-Chief", bio: "Twenty years covering commercial aviation across Europe, North America and the Middle East." },
          { name: "Hannah Brookes", role: "Senior Editor, Cabin", bio: "Leads cabin coverage with a focus on airline product, IFE and materials." },
          { name: "Sofia Reyes", role: "Senior Editor, Cargo", bio: "Specialist in freighter fleets, trade lanes and the air-cargo value chain." },
          { name: "Chen Wei", role: "Senior Editor, MRO", bio: "Reports on facilities, engines and components from Asia-Pacific bases." },
          { name: "Megan Phillips", role: "Senior Editor, Regional", bio: "Covers the regional, low-cost and short-haul markets in the Americas." },
          { name: "Priya Anand", role: "Sustainability Editor", bio: "Cross-vertical reporting on SAF, materials and decarbonisation." },
          { name: "David Okonkwo", role: "Features Writer", bio: "Long-form analysis on industry strategy and structural change." },
          { name: "Caitlin Park", role: "Contributing Editor", bio: "Former operations director at a tier-1 MRO; contributes commentary across the verticals." },
        ]}
      />
      <NewsletterCTA />
    </>
  );
}
