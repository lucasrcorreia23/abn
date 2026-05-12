import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import MagazineArchive from "@/components/blocks/MagazineArchive";
import LatestMagazines from "@/components/blocks/LatestMagazines";

export const metadata: Metadata = {
  title: "Latest Magazine Editions — ABN",
  description:
    "Browse the latest editions of ABN's four magazines: Cabin, Cargo, MRO and Regional.",
};

const recentMonths = ["May 2026", "Apr 2026", "Mar 2026", "Feb 2026", "Jan 2026"];

export default function MagazinesPage() {
  const groups = (["Cabin", "Cargo", "MRO", "Regional"] as const).map((t) => ({
    title: t,
    issues: recentMonths.map((m, i) => ({
      label: `${t.toUpperCase()} #${(80 - i).toString().padStart(2, "0")}`,
      date: m,
    })),
  }));

  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Magazines" }]} />
      <PageHeader
        eyebrow="Magazines"
        title="Latest Magazine Editions"
        description="Browse the most recent editions of ABN's four magazines. Click any cover to read the digital edition (placeholder)."
      />
      <LatestMagazines />
      <MagazineArchive groups={groups} />
    </>
  );
}
