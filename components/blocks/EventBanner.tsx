import Link from "next/link";

/**
 * EventBanner — promotional banner for the next ABN event (e.g. PAM Conference).
 * Strong contrast block in the home & events pages.
 */
export default function EventBanner({
  eyebrow = "Next Event",
  name = "PAM Conference 2026",
  location = "Singapore",
  date = "21–23 October 2026",
  href = "/events",
}: {
  eyebrow?: string;
  name?: string;
  location?: string;
  date?: string;
  href?: string;
}) {
  return (
    <section className="bg-gray-900 text-white  ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 py-24 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-400">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{name}</h2>
          <p className="mt-2 text-sm text-gray-300">
            {date} · {location}
          </p>
          <p className="mt-3 max-w-xl text-sm text-gray-300">
            Join 600+ executives from the parts, aftermarket and MRO ecosystem for three days
            of analysis, networking and live deal-making.
          </p>
          <Link
            href={href}
            className="mt-5 inline-block border border-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-gray-900"
          >
            View agenda & register
          </Link>
        </div>
        <div className="ph-img aspect-[16/9]" data-label="EVENT HERO" />
      </div>
    </section>
  );
}
