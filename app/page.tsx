import HeroMain from "@/components/blocks/HeroMain";
import CategorySection from "@/components/blocks/CategorySection";
import EditorsChoice from "@/components/blocks/EditorsChoice";
import VideocastBlock from "@/components/blocks/VideocastBlock";
import MagazineSubscribeCTA from "@/components/blocks/MagazineSubscribeCTA";
import EventBanner from "@/components/blocks/EventBanner";
import LatestNewsList from "@/components/blocks/LatestNewsList";
import {
  getArticlesByCategory,
  getEditorsChoice,
  getLatest,
  getMostRead,
} from "@/lib/mock-articles";
import { VERTICALS } from "@/lib/sitemap";

export default function HomePage() {
  const latestAll = getLatest(20);
  const lead = latestAll[0];
  const secondary = latestAll.slice(1, 9);

  const cabin = getArticlesByCategory("cabin", 5);
  const cargo = getArticlesByCategory("cargo", 5);
  const mro = getArticlesByCategory("mro", 5);
  const regional = getArticlesByCategory("regional", 5);

  const cabinV = VERTICALS.find((v) => v.slug === "cabin")!;
  const cargoV = VERTICALS.find((v) => v.slug === "cargo")!;
  const mroV = VERTICALS.find((v) => v.slug === "mro")!;
  const regionalV = VERTICALS.find((v) => v.slug === "regional")!;

  return (
    <>
      <HeroMain lead={lead} secondary={secondary} />

      <CategorySection
        columns={[
          { vertical: cabinV, articles: cabin },
          { vertical: cargoV, articles: cargo },
          { vertical: mroV, articles: mro },
          { vertical: regionalV, articles: regional },
        ]}
      />

      <EditorsChoice articles={getEditorsChoice(4)} />

      <EventBanner />

      <LatestNewsList title="Most Read" articles={getMostRead(8)} />

      <VideocastBlock />

      <MagazineSubscribeCTA />
    </>
  );
}
