import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import EventBanner from "@/components/blocks/EventBanner";
import NewsletterCTA from "@/components/blocks/NewsletterCTA";

export const metadata: Metadata = {
  title: "Events & Webinars — ABN",
  description:
    "ABN's events programme: the PAM Conference, Partner Events 2026 and the next ABN event.",
};

const partnerEvents = [
  { date: "Jun 14–16, 2026", name: "Aircraft Interiors Connect", location: "Hamburg, Germany" },
  { date: "Jul 02, 2026", name: "ABN Cargo Forum", location: "Amsterdam, Netherlands" },
  { date: "Sep 18, 2026", name: "Regional Aviation Outlook", location: "Atlanta, USA" },
  { date: "Oct 21–23, 2026", name: "PAM Conference 2026", location: "Singapore" },
  { date: "Nov 09, 2026", name: "MRO Sustainability Summit", location: "Dublin, Ireland" },
];

export default function EventsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Events & Webinars" }]} />
      <PageHeader
        eyebrow="Events & Webinars"
        title="The ABN events programme"
        description="From the flagship PAM Conference to focused partner events across the four verticals — meet the industry in person."
      />

      <div id="pam">
        <EventBanner
          eyebrow="Flagship Conference"
          name="PAM Conference 2026"
          date="21–23 October 2026"
          location="Marina Bay Sands, Singapore"
          href="#pam"
        />
      </div>

      <section id="partner" className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900">
            Partner Events 2026
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            ABN supports and co-curates the following partner events through 2026.
          </p>
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {partnerEvents.map((e) => (
              <li
                key={e.name}
                className="grid gap-2 py-5 hover:bg-gray-50 sm:grid-cols-[180px_2fr_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  {e.date}
                </span>
                <h3 className="text-base font-semibold text-gray-900">{e.name}</h3>
                <span className="text-sm text-gray-600">{e.location}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 sm:text-right">
                  Details →
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <NewsletterCTA
        heading="Events updates in your inbox"
        description="Subscribe to receive agenda, speakers and registration updates for the PAM Conference and ABN partner events."
      />
    </>
  );
}
