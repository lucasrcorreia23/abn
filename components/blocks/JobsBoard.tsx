export interface Job {
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  posted: string;
  category: "Editorial" | "Sales" | "Events" | "Operations" | "Design";
}

/**
 * JobsBoard — job-board listing layout used on the /jobs page.
 * Each row is a tappable card with company, role, location, type and a date.
 */
export default function JobsBoard({ jobs }: { jobs: Job[] }) {
  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-b border-gray-200 pb-3">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Open roles</h2>
            <p className="text-sm text-gray-500">
              Open positions across editorial, events, advertising and design.
            </p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            {jobs.length} role{jobs.length === 1 ? "" : "s"}
          </span>
        </div>

        <ul className="divide-y divide-gray-200 border-y border-gray-200">
          {jobs.map((j, i) => (
            <li
              key={`${j.title}-${i}`}
              className="grid cursor-pointer gap-2 py-5 hover:bg-gray-50 sm:grid-cols-[2fr_1.2fr_0.8fr_0.6fr_auto] sm:items-center sm:gap-6"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                  {j.category}
                </span>
                <h3 className="text-base font-semibold text-gray-900">{j.title}</h3>
              </div>
              <p className="text-sm text-gray-700">{j.company}</p>
              <p className="text-sm text-gray-600">{j.location}</p>
              <p className="text-xs text-gray-500">{j.type}</p>
              <p className="text-xs text-gray-500 sm:text-right">Posted {j.posted}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
