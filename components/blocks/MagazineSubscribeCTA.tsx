import Link from "next/link";

/**
 * MagazineSubscribeCTA — CTA band that promotes the paid magazine
 * subscription (Cabin / Cargo / MRO / Regional). Companion to the free
 * newsletter signup that lives inline in the footer.
 */
export default function MagazineSubscribeCTA({
  heading = "Quarterly print + digital — the depth no newsletter can deliver",
  description = "Long-form reporting, exclusive interviews and full archive access across Cabin, Cargo, MRO and Regional. Subscribe to one or all four titles.",
  ctaLabel = "Subscribe now",
  href = "/subscribe",
}: {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  href?: string;
}) {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
        <div className="grid items-center gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
              Subscribe to the magazine
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {heading}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-gray-600">{description}</p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <Link
              href={href}
              className="inline-block bg-gray-900 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-black"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
