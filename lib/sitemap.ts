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
      { label: "Newsletter", href: "/newsletter" },
      { label: "Subscribe Magazine", href: "/subscribe" },
      { label: "Editor's Choice", href: "/editors-choice" },
    ],
  },
 
];
