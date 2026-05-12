import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import ContactForm from "@/components/blocks/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — ABN",
  description: "Get in touch with the ABN newsroom, advertising, events or subscriptions teams.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      <PageHeader
        eyebrow="Contact Us"
        title="Get in touch"
        description="Editorial pitches, advertising, events sponsorship or subscription queries — pick the right topic below and we'll route your message to the right team."
      />
      <ContactForm />
    </>
  );
}
