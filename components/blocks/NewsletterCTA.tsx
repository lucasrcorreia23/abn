"use client";

/**
 * NewsletterCTA — horizontal newsletter signup band reused on the home,
 * category pages, article pages and institutional pages.
 */
export default function NewsletterCTA({
  heading = "The week in aviation, in your inbox",
  description = "Subscribe to the ABN newsletter for analysis across Cabin, Cargo, MRO and Regional — delivered every Tuesday and Friday.",
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
        <div className="grid items-center gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
              ABN Newsletter
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {heading}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-gray-600">{description}</p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@company.com"
              className="flex-1 border border-gray-300 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
            <button
              type="submit"
              className="bg-gray-900 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
