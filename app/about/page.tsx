import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import RichTextContent from "@/components/blocks/RichTextContent";
import MagazineSubscribeCTA from "@/components/blocks/MagazineSubscribeCTA";

export const metadata: Metadata = {
  title: "About ABN — Aviation Business News",
  description:
    "About Aviation Business News (ABN): our mission, our four verticals and the editorial team behind the coverage.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About ABN" }]} />
      <PageHeader
        eyebrow="About"
        title="Independent B2B aviation journalism"
        description="Aviation Business News is the publishing home for four specialist titles — Cabin, Cargo, MRO and Regional — read by industry executives in over 90 countries."
      />
      <RichTextContent
        sections={[
          {
            heading: "Who we are",
            body: "ABN is an independent media group focused on commercial aviation's business side. Our newsroom covers the strategic, financial and operational decisions that shape airlines, OEMs, MROs, airports, forwarders and integrators worldwide.",
          },
          {
            heading: "Our four verticals",
            body: "Cabin covers airline product, interiors, IFE & connectivity and the broader passenger experience. Cargo covers the air-freight ecosystem end-to-end. MRO covers maintenance, repair, overhaul, parts and engines. Regional covers regional airlines, OEMs, low-cost and short-haul markets.",
          },
          {
            heading: "Editorial standards",
            body: "We separate news from comment, disclose sponsored content clearly, and verify primary sources before publishing. Our reporters do not accept gifts, travel or other compensation from companies they cover, beyond standard press access at industry events.",
          },
          {
            heading: "Contact the newsroom",
            body: "To pitch a story, request a correction or contact a specific reporter, visit our Contact Us page or email the newsroom directly.",
          },
        ]}
      />
      <MagazineSubscribeCTA />
    </>
  );
}
