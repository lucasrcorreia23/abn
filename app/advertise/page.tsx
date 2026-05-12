import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import RichTextContent from "@/components/blocks/RichTextContent";
import ContactForm from "@/components/blocks/ContactForm";

export const metadata: Metadata = {
  title: "Advertise With Us — ABN",
  description:
    "Reach senior B2B aviation decision-makers through ABN's magazines, newsletter, events and digital portal.",
};

export default function AdvertisePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About ABN", href: "/about" },
          { label: "Advertise With Us" },
        ]}
      />
      <PageHeader
        eyebrow="Advertise With Us"
        title="Reach 90,000+ aviation decision-makers"
        description="ABN delivers focused B2B reach across four verticals through print magazines, newsletters, the portal, video and our events programme."
      />
      <RichTextContent
        sections={[
          {
            heading: "Audience",
            body: "ABN's audience is composed of airline executives, OEM and supplier leaders, MRO operators, forwarders, integrators, lessors and regulators across more than 90 countries.",
          },
          {
            heading: "Channels",
            body: "Print and digital magazines (Cabin, Cargo, MRO, Regional), targeted newsletters, the ABN portal (this site), the ABN Videocast and the PAM Conference and Partner Events programme.",
          },
          {
            heading: "Get a media kit",
            body: "Submit the form below or email partnerships@abn.example — we'll send back the 2026 media kit with rates, audience data and lead times.",
          },
        ]}
      />
      <ContactForm />
    </>
  );
}
