import type { VerticalSlug } from "./sitemap";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: VerticalSlug;
  subcategory: string;
  author: string;
  authorBio: string;
  date: string; // ISO
  readTime: number; // minutes
  imagePlaceholder: string; // label shown on the gray placeholder
  featured?: boolean;
  editorsChoice?: boolean;
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

const RAW: Array<Omit<Article, "id" | "slug">> = [
  // ─────────── CABIN (12) ───────────
  {
    title: "Emirates unveils next-gen premium economy cabin with adaptive lighting",
    excerpt:
      "The Dubai-based carrier debuted a refreshed premium economy seat featuring circadian lighting, expanded IFE screens and recycled-content textiles on its A380 fleet.",
    category: "cabin",
    subcategory: "Airlines",
    author: "Hannah Brookes",
    authorBio: "Senior reporter covering airline product, interiors and the passenger experience.",
    date: "2026-05-08",
    readTime: 6,
    imagePlaceholder: "EMIRATES A380",
    featured: true,
    editorsChoice: true,
  },
  {
    title: "Singapore Airlines partners with Panasonic Avionics on next-gen IFE rollout",
    excerpt:
      "A multi-year agreement will see Panasonic's Astrova system deployed across SIA's widebody fleet, with 4K OLED displays and Bluetooth audio at every seat.",
    category: "cabin",
    subcategory: "IFE & Connectivity",
    author: "Marcus Tan",
    authorBio: "Asia-Pacific correspondent focused on connectivity and inflight tech.",
    date: "2026-05-06",
    readTime: 4,
    imagePlaceholder: "SIA IFE",
  },
  {
    title: "Recaro reveals lighter long-haul economy seat with recycled foam cushions",
    excerpt:
      "The German seatmaker says its CL3810 evolution drops 1.2kg per seat-pair while introducing bio-based foam and a modular trim swap kit for airlines.",
    category: "cabin",
    subcategory: "Materials",
    author: "Lena Hofmann",
    authorBio: "Reporter covering cabin interiors suppliers and certification.",
    date: "2026-05-05",
    readTime: 5,
    imagePlaceholder: "RECARO SEAT",
  },
  {
    title: "Cathay Pacific begins crew training program for new Aria Suite business cabin",
    excerpt:
      "Hong Kong's flag carrier started a six-week service-design course as it prepares to introduce its new A350-1000 business class to long-haul routes.",
    category: "cabin",
    subcategory: "Operations & Training",
    author: "Hannah Brookes",
    authorBio: "Senior reporter covering airline product, interiors and the passenger experience.",
    date: "2026-05-03",
    readTime: 5,
    imagePlaceholder: "CATHAY ARIA",
  },
  {
    title: "Diehl Aviation tests cabin air-quality sensors at OEM line-fit standard",
    excerpt:
      "A pilot with two undisclosed European carriers will validate continuous monitoring of CO2, particulates and humidity from cruise to taxi.",
    category: "cabin",
    subcategory: "Cabins",
    author: "Lena Hofmann",
    authorBio: "Reporter covering cabin interiors suppliers and certification.",
    date: "2026-04-30",
    readTime: 4,
    imagePlaceholder: "AIR QUALITY",
  },
  {
    title: "Why airlines are quietly killing the seat-back screen — and what replaces it",
    excerpt:
      "Several low-cost long-haul operators are betting on BYOD streaming. Veteran cabin designers warn the calculus is more complex than the spreadsheet suggests.",
    category: "cabin",
    subcategory: "IFE & Connectivity",
    author: "David Okonkwo",
    authorBio: "Features writer focused on long-form analysis and industry strategy.",
    date: "2026-04-28",
    readTime: 9,
    imagePlaceholder: "BYOD STREAMING",
    editorsChoice: true,
  },
  {
    title: "Lufthansa Allegris first-class suite enters revenue service across Atlantic",
    excerpt:
      "After regulatory delays, the carrier's much-watched first-class product is flying daily between Munich and select North American gateways.",
    category: "cabin",
    subcategory: "Airlines",
    author: "Hannah Brookes",
    authorBio: "Senior reporter covering airline product, interiors and the passenger experience.",
    date: "2026-04-25",
    readTime: 6,
    imagePlaceholder: "ALLEGRIS",
  },
  {
    title: "Bio-based composite panels move closer to widebody line-fit",
    excerpt:
      "An Airbus-led consortium reports successful burn-through and smoke-density results for flax-and-bio-resin sidewall panels in long-haul testing.",
    category: "cabin",
    subcategory: "Sustainability",
    author: "Priya Anand",
    authorBio: "Sustainability and materials reporter across the ABN verticals.",
    date: "2026-04-22",
    readTime: 7,
    imagePlaceholder: "BIO PANELS",
  },
  {
    title: "Anuvu lands fleet-wide IFE-as-a-service deal with Norse Atlantic",
    excerpt:
      "The connectivity provider will manage content, hardware refresh and ad-supported revenue for Norse's growing Boeing 787 fleet under a 7-year contract.",
    category: "cabin",
    subcategory: "IFE & Connectivity",
    author: "Marcus Tan",
    authorBio: "Asia-Pacific correspondent focused on connectivity and inflight tech.",
    date: "2026-04-20",
    readTime: 4,
    imagePlaceholder: "ANUVU NORSE",
  },
  {
    title: "Cabin crew unions push back on AI-driven roster optimisation tools",
    excerpt:
      "European unions argue that machine-learning rostering systems are eroding rest periods despite operating within legal duty-time limits.",
    category: "cabin",
    subcategory: "Operations & Training",
    author: "David Okonkwo",
    authorBio: "Features writer focused on long-form analysis and industry strategy.",
    date: "2026-04-17",
    readTime: 8,
    imagePlaceholder: "AI ROSTER",
  },
  {
    title: "Collins Aerospace certifies new economy seat with integrated wireless charging",
    excerpt:
      "The Meridian Atmosphere seat passed final 16g testing and is now available for line-fit on the A321XLR, with three launch customers in EMEA.",
    category: "cabin",
    subcategory: "Cabins",
    author: "Lena Hofmann",
    authorBio: "Reporter covering cabin interiors suppliers and certification.",
    date: "2026-04-15",
    readTime: 5,
    imagePlaceholder: "COLLINS SEAT",
  },
  {
    title: "Inside ANA's residence-grade A380 refit: a tour of Project Sora",
    excerpt:
      "ANA opens its hangar doors to ABN for a first look at the privacy-first redesign coming to its A380 Honu trio in 2027.",
    category: "cabin",
    subcategory: "Magazine",
    author: "Marcus Tan",
    authorBio: "Asia-Pacific correspondent focused on connectivity and inflight tech.",
    date: "2026-04-12",
    readTime: 11,
    imagePlaceholder: "ANA SORA",
    featured: true,
  },

  // ─────────── CARGO (12) ───────────
  {
    title: "DHL expands Asia-Pacific freighter fleet with six additional 777Fs",
    excerpt:
      "The integrator confirmed firm orders to support double-digit growth on intra-Asia and trans-Pacific lanes through the rest of the decade.",
    category: "cargo",
    subcategory: "Aircraft & Airlines",
    author: "Sofia Reyes",
    authorBio: "Senior cargo reporter covering freighter fleets and trade lanes.",
    date: "2026-05-09",
    readTime: 5,
    imagePlaceholder: "DHL 777F",
    featured: true,
    editorsChoice: true,
  },
  {
    title: "IAG Cargo opens dedicated pharma facility at London Heathrow Terminal 4",
    excerpt:
      "The CEIV Pharma-certified hub adds 1,800 sqm of temperature-controlled handling capacity, doubling the carrier's pharma throughput in the UK.",
    category: "cargo",
    subcategory: "Airports",
    author: "Tom Reilly",
    authorBio: "Europe cargo correspondent focused on airports and handling.",
    date: "2026-05-07",
    readTime: 4,
    imagePlaceholder: "IAG PHARMA",
  },
  {
    title: "Mammoth and IAI cross 100th 767-300BCF conversion milestone",
    excerpt:
      "Israel Aerospace Industries and Mammoth Freighters celebrate the 100th delivery of their joint 767-300 P2F program, with backlog stretching into 2029.",
    category: "cargo",
    subcategory: "Passenger-to-Freighter Conversions",
    author: "Sofia Reyes",
    authorBio: "Senior cargo reporter covering freighter fleets and trade lanes.",
    date: "2026-05-04",
    readTime: 5,
    imagePlaceholder: "767 P2F",
  },
  {
    title: "WebCargo by Freightos rolls out dynamic-pricing API across 20 new carriers",
    excerpt:
      "Forwarders will gain real-time rate availability with capacity guarantees, as the platform passes 50% of digitally bookable global cargo capacity.",
    category: "cargo",
    subcategory: "Tech & Digitisation",
    author: "Aditi Sharma",
    authorBio: "Reporter covering cargo digitisation, forwarders and logistics tech.",
    date: "2026-05-02",
    readTime: 6,
    imagePlaceholder: "WEBCARGO",
  },
  {
    title: "Why trans-Pacific e-commerce capacity is finally cooling — and what's next",
    excerpt:
      "After two years of triple-digit growth, China-to-North-America cargo yields are stabilising. ABN talks to four GSSAs about where demand goes next.",
    category: "cargo",
    subcategory: "Trade Lanes / Routes",
    author: "Sofia Reyes",
    authorBio: "Senior cargo reporter covering freighter fleets and trade lanes.",
    date: "2026-04-29",
    readTime: 8,
    imagePlaceholder: "TPAC YIELDS",
    editorsChoice: true,
  },
  {
    title: "Kuehne+Nagel pilots autonomous ULD movement at Frankfurt warehouse",
    excerpt:
      "The forwarder is testing AMRs for inter-bay ULD repositioning, with the goal of halving handling time on a key European tendering lane.",
    category: "cargo",
    subcategory: "Forwarders & Logistics",
    author: "Aditi Sharma",
    authorBio: "Reporter covering cargo digitisation, forwarders and logistics tech.",
    date: "2026-04-27",
    readTime: 5,
    imagePlaceholder: "KN AMR",
  },
  {
    title: "Cargolux signs SAF book-and-claim agreement with Neste through 2030",
    excerpt:
      "The Luxembourg-based all-cargo carrier locks in 100,000 tonnes of sustainable aviation fuel certificates to support customer Scope 3 reporting.",
    category: "cargo",
    subcategory: "Sustainability",
    author: "Priya Anand",
    authorBio: "Sustainability and materials reporter across the ABN verticals.",
    date: "2026-04-24",
    readTime: 4,
    imagePlaceholder: "CARGOLUX SAF",
  },
  {
    title: "Saudia Cargo opens new GSA appointments across Latin America",
    excerpt:
      "The carrier names regional GSAs in Brazil, Chile and Colombia as it begins direct freighter service from Jeddah to São Paulo via Madrid.",
    category: "cargo",
    subcategory: "GSA / GSSA",
    author: "Tom Reilly",
    authorBio: "Europe cargo correspondent focused on airports and handling.",
    date: "2026-04-22",
    readTime: 3,
    imagePlaceholder: "SAUDIA GSA",
  },
  {
    title: "dnata expands Dubai cool chain capacity ahead of new pharma corridors",
    excerpt:
      "A 4,500 sqm extension at DXB adds GDP-compliant +15/+25C, +2/+8C and -20C zones, ahead of expected demand from new India-Europe pharma routes.",
    category: "cargo",
    subcategory: "Cargo Handling",
    author: "Tom Reilly",
    authorBio: "Europe cargo correspondent focused on airports and handling.",
    date: "2026-04-19",
    readTime: 4,
    imagePlaceholder: "DNATA DXB",
  },
  {
    title: "Interview: Qatar Airways Cargo's new CCO on rebuilding the long-tail network",
    excerpt:
      "Following the carrier's network reshuffle, the new commercial chief tells ABN how QR Cargo is approaching mid-tier markets and emerging trade lanes.",
    category: "cargo",
    subcategory: "Interviews / Comments / Articles",
    author: "Sofia Reyes",
    authorBio: "Senior cargo reporter covering freighter fleets and trade lanes.",
    date: "2026-04-16",
    readTime: 9,
    imagePlaceholder: "QR CARGO CCO",
    featured: true,
  },
  {
    title: "Atlas Air launches dedicated training academy for new 777F crews",
    excerpt:
      "The US-based ACMI operator opens a Miami facility focused on long-haul freighter crews, supporting fleet growth and crew-shortage mitigation.",
    category: "cargo",
    subcategory: "Training & Development",
    author: "Aditi Sharma",
    authorBio: "Reporter covering cargo digitisation, forwarders and logistics tech.",
    date: "2026-04-13",
    readTime: 4,
    imagePlaceholder: "ATLAS ACADEMY",
  },
  {
    title: "Watch: Inside Maastricht's overnight push to certify a new mail corridor",
    excerpt:
      "Behind the scenes of MST's night-time operations as the airport handles its first dedicated trans-Atlantic mail service for a new e-commerce client.",
    category: "cargo",
    subcategory: "Videos",
    author: "Tom Reilly",
    authorBio: "Europe cargo correspondent focused on airports and handling.",
    date: "2026-04-10",
    readTime: 7,
    imagePlaceholder: "MST NIGHT",
  },

  // ─────────── MRO (12) ───────────
  {
    title: "Lufthansa Technik opens new MRO hangar in Manila to serve A350 operators",
    excerpt:
      "The new dual-bay facility will perform heavy checks on Airbus A350 and A330neo aircraft, expanding LHT's Philippines footprint by 40%.",
    category: "mro",
    subcategory: "Facilities / Hangars",
    author: "Chen Wei",
    authorBio: "Asia MRO correspondent covering facilities, engines and component services.",
    date: "2026-05-10",
    readTime: 5,
    imagePlaceholder: "LHT MANILA",
    featured: true,
    editorsChoice: true,
  },
  {
    title: "AAR signs $400m component support agreement with Allegiant Air",
    excerpt:
      "Under a multi-year deal, AAR will provide rotable management and repair services for Allegiant's A320-family fleet from US distribution hubs.",
    category: "mro",
    subcategory: "Parts & Components",
    author: "Rebecca Lin",
    authorBio: "Americas reporter focused on MRO networks, parts and aftermarket commercial deals.",
    date: "2026-05-08",
    readTime: 4,
    imagePlaceholder: "AAR ALLEGIANT",
  },
  {
    title: "GE Aerospace expands GEnx shop capacity in Wales as backlog stretches",
    excerpt:
      "A new test cell and assembly line at the Caerphilly site target a 25% throughput uplift, addressing engine-shop bottlenecks affecting 787 operators.",
    category: "mro",
    subcategory: "Engines / APUs",
    author: "Robert Kennedy",
    authorBio: "Engines and APUs specialist with two decades on the MRO beat.",
    date: "2026-05-05",
    readTime: 6,
    imagePlaceholder: "GENX WALES",
  },
  {
    title: "Why digital records are finally winning aircraft transitions — slowly",
    excerpt:
      "Despite years of promises, the dirty pickup-truck of paper records still dominates lease returns. ABN profiles three operators changing that.",
    category: "mro",
    subcategory: "Tech & Digitisation",
    author: "Priya Anand",
    authorBio: "Sustainability and materials reporter across the ABN verticals.",
    date: "2026-05-02",
    readTime: 10,
    imagePlaceholder: "DIGITAL RECORDS",
    editorsChoice: true,
  },
  {
    title: "PAM Conference 2026 to focus on next-generation engine shop visit economics",
    excerpt:
      "The annual Parts, Aftermarket & MRO conference returns to Singapore in October with a sharpened focus on LEAP and GTF shop-visit cost pressures.",
    category: "mro",
    subcategory: "PAM Conference",
    author: "Chen Wei",
    authorBio: "Asia MRO correspondent covering facilities, engines and component services.",
    date: "2026-04-30",
    readTime: 3,
    imagePlaceholder: "PAM 2026",
    featured: true,
  },
  {
    title: "Magnetic AirCargo Group teardown line passes 50th narrowbody disassembly",
    excerpt:
      "Estonia-based MAG MRO confirms 50 narrowbody airframes have moved through its dismantling operation, with growing demand for serviceable used material.",
    category: "mro",
    subcategory: "Teardown & Disassembly",
    author: "Rebecca Lin",
    authorBio: "Americas reporter focused on MRO networks, parts and aftermarket commercial deals.",
    date: "2026-04-27",
    readTime: 5,
    imagePlaceholder: "MAG TEARDOWN",
  },
  {
    title: "Comment: Why MRO training has a five-year window to fix the technician gap",
    excerpt:
      "Industry veteran Caitlin Park argues that today's apprenticeship pipelines are sized for a fleet that no longer exists — and the math gets worse from here.",
    category: "mro",
    subcategory: "Interviews / Comments / Articles",
    author: "Caitlin Park",
    authorBio: "Contributing editor and former operations director at a tier-1 MRO.",
    date: "2026-04-25",
    readTime: 8,
    imagePlaceholder: "TECH GAP",
  },
  {
    title: "ST Engineering wins long-term Boeing 787 line maintenance deal at Heathrow",
    excerpt:
      "The Singapore-headquartered group extends its UK footprint, taking over line activities for a major Asia-Pacific operator at LHR.",
    category: "mro",
    subcategory: "Aircraft & Airlines",
    author: "Chen Wei",
    authorBio: "Asia MRO correspondent covering facilities, engines and component services.",
    date: "2026-04-23",
    readTime: 4,
    imagePlaceholder: "ST LHR",
  },
  {
    title: "Pratt & Whitney rolls out GTF Advantage hardware kits to launch customers",
    excerpt:
      "The advantage standard targets longer on-wing time and more time on-wing for the troubled PW1100G fleet now in service worldwide.",
    category: "mro",
    subcategory: "Engines / APUs",
    author: "Robert Kennedy",
    authorBio: "Engines and APUs specialist with two decades on the MRO beat.",
    date: "2026-04-20",
    readTime: 5,
    imagePlaceholder: "GTF ADVANTAGE",
  },
  {
    title: "Inside MTU Aeroengines' Hannover sustainability roadmap",
    excerpt:
      "The German engine MRO group walks ABN through its scope-1 reduction plan, including high-temperature heat-pump retrofits at its largest shop.",
    category: "mro",
    subcategory: "Sustainability",
    author: "Priya Anand",
    authorBio: "Sustainability and materials reporter across the ABN verticals.",
    date: "2026-04-17",
    readTime: 6,
    imagePlaceholder: "MTU HEAT PUMP",
  },
  {
    title: "Watch: A walk-through of Joramco's new A320 base maintenance bay",
    excerpt:
      "Video tour of Amman-based Joramco's newly commissioned base maintenance hangar, with capacity for two simultaneous C-checks.",
    category: "mro",
    subcategory: "Videos",
    author: "Rebecca Lin",
    authorBio: "Americas reporter focused on MRO networks, parts and aftermarket commercial deals.",
    date: "2026-04-14",
    readTime: 7,
    imagePlaceholder: "JORAMCO BAY",
  },
  {
    title: "EASA Part-66 reforms enter consultation phase — what MROs need to know",
    excerpt:
      "The proposed Part-66 update could reshape European licensing structures, with implications for type ratings, OJT and cross-border crew use.",
    category: "mro",
    subcategory: "Training & Development",
    author: "Caitlin Park",
    authorBio: "Contributing editor and former operations director at a tier-1 MRO.",
    date: "2026-04-11",
    readTime: 7,
    imagePlaceholder: "PART-66",
  },

  // ─────────── REGIONAL (12) ───────────
  {
    title: "ATR delivers 100th turboprop to regional carrier in Brazil",
    excerpt:
      "The European turboprop manufacturer marked a milestone delivery to Azul Conecta, supporting the airline's interior network expansion.",
    category: "regional",
    subcategory: "Aircraft & OEMs",
    author: "Bruno Caetano",
    authorBio: "Latin America regional reporter covering operators, OEMs and route economics.",
    date: "2026-05-09",
    readTime: 5,
    imagePlaceholder: "ATR AZUL",
    featured: true,
    editorsChoice: true,
  },
  {
    title: "Embraer E175-E2 secures first North American firm order",
    excerpt:
      "After years of scope-clause limbo, a US regional has signed for the E175-E2 contingent on revised pilot agreements expected later this year.",
    category: "regional",
    subcategory: "Aircraft & OEMs",
    author: "Megan Phillips",
    authorBio: "North America regional aviation correspondent.",
    date: "2026-05-06",
    readTime: 5,
    imagePlaceholder: "E175-E2",
  },
  {
    title: "Wizz Air orders 50 additional A321neo aircraft for European expansion",
    excerpt:
      "The ultra-low-cost carrier confirms a top-up order to support further point-to-point expansion across Central, Eastern and Southern Europe.",
    category: "regional",
    subcategory: "Low Cost News",
    author: "Megan Phillips",
    authorBio: "North America regional aviation correspondent.",
    date: "2026-05-04",
    readTime: 4,
    imagePlaceholder: "WIZZ A321",
  },
  {
    title: "Skywest opens new ATP-CTP training centre in Denver",
    excerpt:
      "The US regional invests in a captain-pipeline facility, with simulator capacity for the CRJ700 and a planned expansion for the E175.",
    category: "regional",
    subcategory: "Training",
    author: "Megan Phillips",
    authorBio: "North America regional aviation correspondent.",
    date: "2026-05-01",
    readTime: 4,
    imagePlaceholder: "SKYWEST ATP",
  },
  {
    title: "Why regional fleets are the unexpected proving ground for hybrid-electric",
    excerpt:
      "Short stage lengths, lower utilisation and government-co-funded routes make regional carriers the most likely first adopters of hybrid propulsion.",
    category: "regional",
    subcategory: "Technology",
    author: "David Okonkwo",
    authorBio: "Features writer focused on long-form analysis and industry strategy.",
    date: "2026-04-28",
    readTime: 9,
    imagePlaceholder: "HYBRID REG",
    editorsChoice: true,
  },
  {
    title: "De Havilland confirms relaunched Dash 8-400 production line in Calgary",
    excerpt:
      "After years of pause, the Canadian OEM has tooled a new final assembly line to support sustained orders from Asia-Pacific and African operators.",
    category: "regional",
    subcategory: "Aircraft & OEMs",
    author: "Bruno Caetano",
    authorBio: "Latin America regional reporter covering operators, OEMs and route economics.",
    date: "2026-04-26",
    readTime: 6,
    imagePlaceholder: "DASH 8-400",
    featured: true,
  },
  {
    title: "Regional Review: How essential air service routes performed in Q1 2026",
    excerpt:
      "ABN's quarterly read of the US EAS network: load factors, subsidy economics and the carriers most likely to enter or exit the program this year.",
    category: "regional",
    subcategory: "Regional Review",
    author: "Megan Phillips",
    authorBio: "North America regional aviation correspondent.",
    date: "2026-04-23",
    readTime: 8,
    imagePlaceholder: "EAS Q1",
  },
  {
    title: "GE Catalyst engine completes high-altitude testing for new turboprop entrants",
    excerpt:
      "The advanced turboprop engine has finished a key phase of high-altitude trials, paving the way for entry into service on a clean-sheet 9-seater.",
    category: "regional",
    subcategory: "Engines & Maintenance",
    author: "Robert Kennedy",
    authorBio: "Engines and APUs specialist with two decades on the MRO beat.",
    date: "2026-04-20",
    readTime: 5,
    imagePlaceholder: "CATALYST",
  },
  {
    title: "Loganair adds three Saab 340s to support new UK PSO routes",
    excerpt:
      "Scotland's largest regional carrier reactivates additional Saab 340s as it expands public service obligation flying from Aberdeen and Inverness.",
    category: "regional",
    subcategory: "Regional News",
    author: "Tom Reilly",
    authorBio: "Europe cargo correspondent focused on airports and handling.",
    date: "2026-04-18",
    readTime: 4,
    imagePlaceholder: "LOGANAIR",
  },
  {
    title: "Cape Air converts Tecnam P2012 fleet to mixed-jet route planning",
    excerpt:
      "The US East Coast operator is using new flight-planning software to optimise its growing Tecnam fleet alongside legacy Cessna 402 operations.",
    category: "regional",
    subcategory: "Airlines & Airports",
    author: "Megan Phillips",
    authorBio: "North America regional aviation correspondent.",
    date: "2026-04-15",
    readTime: 5,
    imagePlaceholder: "CAPE AIR",
  },
  {
    title: "Sustainability beat: Why regional carriers are SAF's hardest customers",
    excerpt:
      "Lower margins, smaller volumes and dispersed fuelling networks make SAF adoption economically and operationally tough for regional operators.",
    category: "regional",
    subcategory: "Sustainability",
    author: "Priya Anand",
    authorBio: "Sustainability and materials reporter across the ABN verticals.",
    date: "2026-04-13",
    readTime: 7,
    imagePlaceholder: "REG SAF",
  },
  {
    title: "Avelo Airlines opens crew base at Manchester-Boston Regional Airport",
    excerpt:
      "The US low-cost carrier confirms its newest crew base, supporting expanded service into underserved leisure markets across the Northeast.",
    category: "regional",
    subcategory: "Low Cost News",
    author: "Megan Phillips",
    authorBio: "North America regional aviation correspondent.",
    date: "2026-04-10",
    readTime: 4,
    imagePlaceholder: "AVELO MHT",
  },
];

export const ARTICLES: Article[] = RAW.map((a, i) => ({
  ...a,
  id: `art-${(i + 1).toString().padStart(3, "0")}`,
  slug: slugify(a.title),
}));

export function getArticleBySlug(category: string, slug: string): Article | undefined {
  return ARTICLES.find((a) => a.category === category && a.slug === slug);
}

export function getArticlesByCategory(category: string, limit?: number): Article[] {
  const list = ARTICLES.filter((a) => a.category === category).sort((a, b) =>
    a.date < b.date ? 1 : -1
  );
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

export function getFeatured(category?: string): Article[] {
  const list = ARTICLES.filter((a) => a.featured && (!category || a.category === category));
  return list;
}

export function getEditorsChoice(limit = 4): Article[] {
  return ARTICLES.filter((a) => a.editorsChoice).slice(0, limit);
}

export function getLatest(limit = 8): Article[] {
  return [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, limit);
}

export function getRelated(article: Article, limit = 3): Article[] {
  return ARTICLES.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, limit);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
