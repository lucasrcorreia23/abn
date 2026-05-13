import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import JobsBoard from "@/components/blocks/JobsBoard";
import MagazineSubscribeCTA from "@/components/blocks/MagazineSubscribeCTA";

export const metadata: Metadata = {
  title: "Jobs Board — ABN",
  description: "Open editorial, commercial, events and design roles at ABN.",
};

export default function JobsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About ABN", href: "/about" },
          { label: "Jobs Board" },
        ]}
      />
      <PageHeader
        eyebrow="Careers"
        title="Jobs Board"
        description="We are growing across editorial, events, advertising and operations. Browse open positions below."
      />
      <JobsBoard
        jobs={[
          { title: "Senior Reporter — Cabin", company: "ABN", location: "London, UK", type: "Full-time", posted: "May 10", category: "Editorial" },
          { title: "MRO Reporter (Asia-Pacific)", company: "ABN", location: "Singapore", type: "Full-time", posted: "May 06", category: "Editorial" },
          { title: "Cargo Reporter (Americas)", company: "ABN", location: "New York, USA", type: "Full-time", posted: "May 03", category: "Editorial" },
          { title: "Events Programme Manager", company: "ABN Events", location: "London, UK", type: "Full-time", posted: "May 01", category: "Events" },
          { title: "Account Director — Advertising", company: "ABN", location: "London, UK", type: "Full-time", posted: "Apr 28", category: "Sales" },
          { title: "Audience & Newsletter Lead", company: "ABN", location: "Remote (EU)", type: "Full-time", posted: "Apr 25", category: "Operations" },
          { title: "Junior Designer", company: "ABN", location: "London, UK", type: "Full-time", posted: "Apr 22", category: "Design" },
          { title: "Editorial Intern — Regional", company: "ABN", location: "New York, USA", type: "Internship", posted: "Apr 19", category: "Editorial" },
        ]}
      />
      <MagazineSubscribeCTA
        heading="Get hiring updates"
        description="Subscribe and we'll let you know when new ABN roles open."
        ctaLabel="Sign up for alerts"
        href="/newsletter"
      />
    </>
  );
}
