export type VerticalSlug = "cabin" | "cargo" | "mro" | "regional";

export interface Vertical {
  slug: VerticalSlug;
  name: string;
  tagline: string;
  description: string;
  subcategories: string[];
}

export const VERTICALS: Vertical[] = [
  {
    slug: "cabin",
    name: "Cabin",
    tagline: "Interiors, IFE, materials and the passenger experience.",
    description:
      "Coverage of aircraft interiors, in-flight entertainment & connectivity, cabin materials, operations, training and sustainability across the world's airlines and OEMs.",
    subcategories: [
      "Latest News",
      "Magazine",
      "Airlines",
      "Cabins",
      "IFE & Connectivity",
      "Materials",
      "Operations & Training",
      "Sustainability",
    ],
  },
  {
    slug: "cargo",
    name: "Cargo",
    tagline: "Freight, forwarders, handlers and the data behind the chain.",
    description:
      "News, interviews and analysis from the air-cargo ecosystem: airlines, airports, GSA/GSSA, handling, forwarders, conversions, trade lanes, training and sustainability.",
    subcategories: [
      "Latest News",
      "Magazine",
      "Interviews / Comments / Articles",
      "Videos",
      "Aircraft & Airlines",
      "Airports",
      "Cargo Handling",
      "GSA / GSSA",
      "Forwarders & Logistics",
      "Tech & Digitisation",
      "Passenger-to-Freighter Conversions",
      "Trade Lanes / Routes",
      "Training & Development",
      "Sustainability",
    ],
  },
  {
    slug: "mro",
    name: "MRO",
    tagline: "Maintenance, repair, overhaul and aftermarket intelligence.",
    description:
      "Reporting on the aftermarket: airlines, teardown, parts, engines/APUs, facilities, digitisation, training, PAM Conference and sustainability for the global MRO industry.",
    subcategories: [
      "Latest News",
      "Magazine",
      "Interviews / Comments / Articles",
      "Videos",
      "Aircraft & Airlines",
      "Teardown & Disassembly",
      "Parts & Components",
      "Engines / APUs",
      "Facilities / Hangars",
      "Tech & Digitisation",
      "Training & Development",
      "PAM Conference",
      "Sustainability",
    ],
  },
  {
    slug: "regional",
    name: "Regional",
    tagline: "Regional airlines, OEMs, low-cost and the routes between.",
    description:
      "The regional aviation beat: low-cost news, regional carriers, OEMs, engines & maintenance, technology, training and sustainability across short-haul markets.",
    subcategories: [
      "Latest News",
      "Magazine",
      "Low Cost News",
      "Regional News",
      "Aircraft & OEMs",
      "Airlines & Airports",
      "Engines & Maintenance",
      "Regional Review",
      "Technology",
      "Training",
      "Sustainability",
    ],
  },
];

export function getVertical(slug: string): Vertical | undefined {
  return VERTICALS.find((v) => v.slug === slug);
}

export type MegaSectionSlug = "about" | "magazines" | "events";

export interface MegaSection {
  slug: MegaSectionSlug;
  name: string;
  href: string;
  tagline: string;
  description: string;
  items: { label: string; href: string }[];
  secondary: {
    eyebrow: string;
    title: string;
    body: string;
    href: string;
    cta: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    excerpt: string;
    meta: string;
    href: string;
    imagePlaceholder: string;
  };
}

export const MEGAMENU_SECTIONS: MegaSection[] = [
  {
    slug: "magazines",
    name: "Magazines",
    href: "/magazines",
    tagline: "Four titles. One global aviation beat.",
    description:
      "Long-form reporting, interviews and analysis across our four print and digital titles — read the latest issues or dive into the archive.",
    items: [
      { label: "Cabin", href: "/magazines#cabin" },
      { label: "Cargo", href: "/magazines#cargo" },
      { label: "MRO", href: "/magazines#mro" },
      { label: "Regional", href: "/magazines#regional" },
    ],
    secondary: {
      eyebrow: "Subscribe",
      title: "Get every new edition",
      body: "Print and digital subscriptions for Cabin, Cargo, MRO and Regional — delivered globally to operators, OEMs and the wider aviation industry.",
      href: "/subscribe",
      cta: "Subscribe to a title →",
    },
    featured: {
      eyebrow: "Featured in Magazines",
      title: "Latest editions — April / May 2026",
      excerpt:
        "Cabin's IFE special, Cargo's trade-lane outlook, MRO's engine teardown report and Regional's low-cost review.",
      meta: "Editors' picks · 2026",
      href: "/magazines",
      imagePlaceholder: "Magazine covers",
    },
  },
  {
    slug: "events",
    name: "Events & Webinars",
    href: "/events",
    tagline: "PAM Conference, partner events and webinars.",
    description:
      "Live and on-demand — the PAM Conference, our 2026 partner events calendar, the ABN Videocast and upcoming webinars from across aviation.",
    items: [
      { label: "Partner Events 2026", href: "/events#partner" },
      { label: "PAM Conference", href: "/events#pam" },
      { label: "Videocast", href: "/videocast" },
      { label: "Webinars", href: "/events#webinars" },
    ],
    secondary: {
      eyebrow: "Newsletter",
      title: "Never miss an event",
      body: "Get the ABN newsletter — agenda updates, PAM Conference programme drops and webinar invites delivered every week.",
      href: "/newsletter",
      cta: "Sign up free →",
    },
    featured: {
      eyebrow: "Featured in Events & Webinars",
      title: "PAM Conference 2026 — programme highlights",
      excerpt:
        "The PAM Conference returns with sessions on parts, asset management and aftermarket strategy.",
      meta: "ABN Events · 2026",
      href: "/events#pam",
      imagePlaceholder: "PAM Conference stage",
    },
  },
  {
    slug: "about",
    name: "About Us",
    href: "/about",
    tagline: "Who we are and how to reach us.",
    description:
      "Aviation Business News is the global B2B publisher behind Cabin, Cargo, MRO and Regional. Meet the team, work with us or get in touch.",
    items: [
      { label: "People & Workplaces", href: "/about/people-workplaces" },
      { label: "Contact Us", href: "/contact" },
      { label: "Meet the Team", href: "/about/team" },
      { label: "Advertise With Us", href: "/advertise" },
      { label: "Jobs Board", href: "/jobs" },
    ],
    secondary: {
      eyebrow: "Work with us",
      title: "Advertise on ABN",
      body: "Reach decision-makers across cabin, cargo, MRO and regional — talk to our team about partnerships, sponsorship and editorial collaborations.",
      href: "/advertise",
      cta: "Talk to the team →",
    },
    featured: {
      eyebrow: "Featured in About ABN",
      title: "Meet the editors behind the four magazines",
      excerpt:
        "From cabin interiors to cargo trade lanes — the people, beats and workplaces driving ABN's coverage.",
      meta: "ABN Team · May 2026",
      href: "/about/team",
      imagePlaceholder: "ABN team photo",
    },
  },
];

export function getMegaSection(slug: string): MegaSection | undefined {
  return MEGAMENU_SECTIONS.find((s) => s.slug === slug);
}

export const FOOTER_LINKS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Verticals",
    links: [
      { label: "Cabin", href: "/cabin" },
      { label: "Cargo", href: "/cargo" },
      { label: "MRO", href: "/mro" },
      { label: "Regional", href: "/regional" },
    ],
  },
  {
    title: "About ABN",
    links: [
      { label: "About", href: "/about" },
      { label: "People & Workplaces", href: "/about/people-workplaces" },
      { label: "Meet the Team", href: "/about/team" },
      { label: "Advertise With Us", href: "/advertise" },
      { label: "Jobs Board", href: "/jobs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Magazines",
    links: [
      { label: "Latest Editions", href: "/magazines" },
      { label: "Cabin Magazine", href: "/magazines#cabin" },
      { label: "Cargo Magazine", href: "/magazines#cargo" },
      { label: "MRO Magazine", href: "/magazines#mro" },
      { label: "Regional Magazine", href: "/magazines#regional" },
    ],
  },
  {
    title: "Events & More",
    links: [
      { label: "Next Event", href: "/events" },
      { label: "Partner Events 2026", href: "/events#partner" },
      { label: "PAM Conference", href: "/events#pam" },
      { label: "Videocast", href: "/videocast" },
      { label: "Subscribe Magazine", href: "/subscribe" },
    ],
  },
 
];
