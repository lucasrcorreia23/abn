"use client";

import Link from "next/link";

/**
 * EventBanner — promotional banner for the next ABN event (e.g. PAM Conference).
 * variant="slim"  → compact horizontal strip, light background, no form
 * variant="full"  → full dark section with two columns and registration form
 */
export default function EventBanner({
  eyebrow = "Next Event",
  name = "PAM Conference 2026",
  location = "Singapore",
  date = "21–23 October 2026",
  href = "/events",
  variant = "full",
}: {
  eyebrow?: string;
  name?: string;
  location?: string;
  date?: string;
  href?: string;
  variant?: "full" | "slim";
}) {
  if (variant === "slim") {
    return (
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="shrink-0 border border-white/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
              {eyebrow}
            </span>
            <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-extrabold tracking-tight text-white">
                {name}
              </span>
              <span className="text-xs text-white/50">
                {date} · {location}
              </span>
            </div>
            <Link
              href={href}
              className="shrink-0 border border-white/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-white hover:border-white hover:bg-white hover:text-black"
            >
              View agenda →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-gray-900 text-white">
   
      <div className="absolute inset-0 -z-10 bg-black" aria-hidden />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:py-24">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-300">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {name}
          </h2>
          <p className="mt-2 text-sm text-gray-200">
            {date} · {location}
          </p>
          <p className="mt-3 max-w-xl text-sm text-gray-200">
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Wireframe demo — form submission disabled.");
          }}
          className="rounded-sm bg-white p-6 text-gray-900 shadow-xl sm:p-8"
        >
          <h3 className="text-center text-xl font-extrabold tracking-tight">
            REQUEST INFO
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-semibold">
                First Name <span className="text-gray-400 font-normal">(required)</span>
              </span>
              <input
                type="text"
                required
                className="mt-1 w-full border border-gray-200 bg-gray-50 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </label>
            <label className="block text-sm">
              <span className="font-semibold">
                Last Name <span className="text-gray-400 font-normal">(required)</span>
              </span>
              <input
                type="text"
                required
                className="mt-1 w-full border border-gray-200 bg-gray-50 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </label>
            <label className="block text-sm">
              <span className="font-semibold">Company Name</span>
              <input
                type="text"
                className="mt-1 w-full border border-gray-200 bg-gray-50 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </label>
            <label className="block text-sm">
              <span className="font-semibold">
                Email Address <span className="text-gray-400 font-normal">(required)</span>
              </span>
              <input
                type="email"
                required
                className="mt-1 w-full border border-gray-200 bg-gray-50 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </label>
          </div>
          <label className="mt-4 flex items-start gap-2 bg-gray-50 p-3 text-xs text-gray-700">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 border-gray-300"
            />
            <span>
              I agree to receiving marketing comms from Aviation Business News.
            </span>
          </label>
          <button
            type="submit"
            className="mt-4 w-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-gray-900"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
