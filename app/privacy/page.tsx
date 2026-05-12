import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import RichTextContent from "@/components/blocks/RichTextContent";

export const metadata: Metadata = {
  title: "Privacy Policy — ABN",
  description: "Privacy Policy for the Aviation Business News portal and subscriptions.",
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <RichTextContent
        sections={[
          { heading: "Data we collect", body: "Account information (name, email, employer), subscription preferences, and standard analytics signals from your use of the portal." },
          { heading: "How we use it", body: "To deliver subscriptions and newsletters, to improve the portal and editorial product, and to communicate about events and offers you've opted into." },
          { heading: "Third parties", body: "We use a small number of vendors for hosting, email delivery, analytics and payments. Each is bound by a data-processing agreement." },
          { heading: "Your rights", body: "You can access, correct, export or delete your personal data at any time by contacting privacy@abn.example." },
          { heading: "Cookies", body: "We use a minimal set of first-party cookies for authentication and analytics. Non-essential cookies are loaded only with your consent." },
        ]}
      />
    </>
  );
}
