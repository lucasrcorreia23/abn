import type { Metadata } from "next";
import Breadcrumb from "@/components/blocks/Breadcrumb";
import PageHeader from "@/components/blocks/PageHeader";
import LatestMagazines from "@/components/blocks/LatestMagazines";

export const metadata: Metadata = {
  title: "Subscribe to ABN Magazines",
  description:
    "Subscribe to ABN's four magazines: Cabin, Cargo, MRO and Regional. Print, digital and bundle options.",
};

const tiers = [
  {
    name: "Single Title — Digital",
    price: "$149/yr",
    perks: [
      "1 magazine of your choice",
      "Digital editions, mobile + tablet",
      "Full ABN portal access",
      "Weekly newsletter",
    ],
  },
  {
    name: "Single Title — Print + Digital",
    price: "$249/yr",
    perks: [
      "1 magazine of your choice",
      "Print edition, posted worldwide",
      "Digital editions, mobile + tablet",
      "Full ABN portal access",
    ],
  },
  {
    name: "ABN Bundle — All Four",
    price: "$549/yr",
    perks: [
      "All four magazines (Cabin, Cargo, MRO, Regional)",
      "Print + digital editions",
      "Full ABN portal access",
      "20% off PAM Conference",
    ],
  },
];

export default function SubscribePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Subscribe Magazine" }]} />
      <PageHeader
        eyebrow="Subscribe Magazine"
        title="Pick your ABN subscription"
        description="Choose a single title or save with the all-four bundle. Cancel anytime — corporate and team rates available on request."
      />

      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <div
                key={t.name}
                className={`flex flex-col border ${
                  i === 2 ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white"
                } p-6`}
              >
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="mt-2 text-4xl font-extrabold tracking-tight">{t.price}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span aria-hidden>✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`mt-6 w-full px-4 py-3 text-xs font-semibold uppercase tracking-widest ${
                    i === 2
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-black"
                  }`}
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LatestMagazines />
    </>
  );
}
