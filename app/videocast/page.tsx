import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import VideocastBlock from "@/components/blocks/VideocastBlock";
import MagazineSubscribeCTA from "@/components/blocks/MagazineSubscribeCTA";

export const metadata: Metadata = {
  title: "Videocast — ABN",
  description: "ABN's video podcast with industry executives across cabin, cargo, MRO and regional.",
};

const archive = Array.from({ length: 12 }).map((_, i) => ({
  ep: 24 - i,
  title: [
    "The future of premium economy",
    "Why GTF shop visits are still keeping airlines awake",
    "Regional aviation's hybrid bet, one year in",
    "What's actually inside ANA's A380 Honu refit",
    "Inside the Cargolux SAF playbook",
    "Why the seat-back screen is quietly dying",
    "Lufthansa Allegris — six months in",
    "How DHL plans its next freighter wave",
    "PAM 2025 — three takeaways that will stick",
    "Inside Lufthansa Technik's Manila build-out",
    "Why digital records still aren't winning",
    "Trans-Pacific cargo — what comes after the boom",
  ][i],
  duration: ["42 min", "36 min", "29 min", "55 min", "31 min", "47 min", "39 min", "44 min", "33 min", "41 min", "37 min", "46 min"][i],
}));

export default function VideocastPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Videocast" }]} />
      <PageHeader
        eyebrow="Videocast"
        title="ABN Videocast"
        description="Long-form, on-camera conversations with the executives shaping cabin, cargo, MRO and regional aviation."
      />
      <VideocastBlock />

      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="mb-5 border-b border-gray-200 pb-3 text-2xl font-extrabold tracking-tight text-gray-900">
            Episode archive
          </h2>
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {archive.map((ep) => (
              <li
                key={ep.ep}
                className="grid cursor-pointer gap-2 py-4 hover:bg-gray-50 sm:grid-cols-[80px_1fr_auto] sm:items-center"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Ep. {ep.ep}
                </span>
                <h3 className="text-base font-semibold text-gray-900">{ep.title}</h3>
                <span className="text-xs text-gray-500">{ep.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MagazineSubscribeCTA />
    </>
  );
}
