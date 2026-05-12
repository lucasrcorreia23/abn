import Link from "next/link";

/**
 * VideocastBlock — highlight block for video/podcast content with a "player"
 * placeholder (gray square with a play glyph) and a queue of upcoming episodes.
 */
export default function VideocastBlock({
  episodes = [
    {
      title: "Ep. 24 — The future of premium economy with three cabin heads",
      duration: "42 min",
    },
    {
      title: "Ep. 23 — Why GTF shop visits are still keeping airlines awake",
      duration: "36 min",
    },
    {
      title: "Ep. 22 — Regional aviation's hybrid bet, one year in",
      duration: "29 min",
    },
  ],
}: {
  episodes?: { title: string; duration: string }[];
}) {
  return (
    <section className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
            ABN Videocast
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            On-camera, on-record.
          </h2>
          <div className="relative mt-5 ph-img aspect-[16/9]" data-label="VIDEO PLAYER">
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 text-2xl text-gray-900 shadow">
                ▶
              </span>
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Long-form conversations with the executives shaping cabin, cargo, MRO and
            regional aviation. New episode every Thursday.
          </p>
          <Link
            href="/videocast"
            className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-gray-900 underline-offset-4 hover:underline"
          >
            See all episodes →
          </Link>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Up next
          </h3>
          <ol className="divide-y divide-gray-200 border-y border-gray-200">
            {episodes.map((ep, i) => (
              <li key={i} className="grid grid-cols-[40px_1fr_auto] items-center gap-3 py-3">
                <span className="text-xl font-extrabold text-gray-300">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-gray-900">{ep.title}</p>
                <span className="text-xs text-gray-500">{ep.duration}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
