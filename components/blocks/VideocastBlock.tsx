import Link from "next/link";
import { DEFAULT_ISSUES } from "@/lib/magazines";

/**
 * VideocastBlock — combo block: compact video player on the left + 4
 * latest magazine editions in a single row on the right. Bridges the
 * videocast (free) and magazine (paid) audiences in a single home slot.
 */
export default function VideocastBlock() {
  return (
    <section className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
            ABN Videocast
          </p>
         
          <div className="relative mt-3 ph-img aspect-[16/9]" data-label="VIDEO PLAYER">
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 text-2xl text-gray-900 shadow">
                ▶
              </span>
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Long-form conversations with the executives shaping aviation.
          </p>
          <Link
            href="/videocast"
            className="mt-3 inline-block text-xs font-semibold uppercase tracking-widest text-gray-900 underline-offset-4 hover:underline"
          >
            See all episodes →
          </Link>
        </div>

        <div>
          <div className="mb-3 flex items-end justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Latest magazine editions
            </h3>
            <Link
              href="/magazines"
              className="text-[11px] font-semibold uppercase tracking-widest text-gray-700 hover:text-black"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {DEFAULT_ISSUES.slice(0, 3).map((m) => (
              <Link
                key={m.slug}
                href={`/magazines#${m.slug}`}
                className="group block"
              >
                <div
                  className="ph-img aspect-[3/4] w-full shadow-sm transition-transform group-hover:scale-[1.01]"
                  data-label={m.coverLabel}
                />
                <p className="mt-2 line-clamp-2 text-xs font-semibold leading-snug text-gray-900 group-hover:underline">
                  {m.issue}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
