/**
 * Magazine catalog — shared between `LatestMagazines` (full strip block) and
 * `VideocastBlock` (compact 2×2 column). Kept outside `components/blocks/` so
 * it doesn't count toward the 28-block cap.
 */

export interface MagazineIssue {
  /** Vertical slug used to anchor /magazines#<slug>. */
  slug: "cabin" | "cargo" | "mro" | "regional";
  /** Eyebrow label, all-caps in the design (e.g. "Aircraft Cabin Management"). */
  title: string;
  /** Display issue name (e.g. "Aircraft Cabin Management April / May 2026"). */
  issue: string;
  /** Placeholder label rendered on the gray .ph-img cover. */
  coverLabel: string;
}

export const DEFAULT_ISSUES: MagazineIssue[] = [
  {
    slug: "cabin",
    title: "Aircraft Cabin Management",
    issue: "Aircraft Cabin Management April / May 2026",
    coverLabel: "CABIN #82",
  },
  {
    slug: "cargo",
    title: "Air Cargo Business",
    issue: "Air Cargo Business April 2026",
    coverLabel: "CARGO #74",
  },
  {
    slug: "mro",
    title: "MRO Management",
    issue: "MRO Management March 2026",
    coverLabel: "MRO #91",
  },
  {
    slug: "regional",
    title: "Low Cost & Regional Airline Business",
    issue: "Low Cost & Regional Airline Business January / February 2026",
    coverLabel: "REGIONAL #66",
  },
];
