/**
 * MagazineArchive — grid of magazine cover placeholders for the "Latest
 * Magazine Editions" page, grouped by title (Cabin / Cargo / MRO / Regional).
 */
export interface MagazineGroup {
  title: string;
  issues: { label: string; date: string }[];
}

export default function MagazineArchive({ groups }: { groups: MagazineGroup[] }) {
  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="space-y-14">
          {groups.map((g) => (
            <div key={g.title} id={g.title.toLowerCase()}>
              <h2 className="mb-5 border-b-2 border-gray-900 pb-2 text-2xl font-extrabold uppercase tracking-tight text-gray-900">
                {g.title}
              </h2>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {g.issues.map((iss) => (
                  <div key={iss.label} className="group">
                    <div
                      className="ph-img aspect-[3/4] shadow-sm transition-transform group-hover:scale-[1.02]"
                      data-label={iss.label}
                    />
                    <p className="mt-2 text-center text-xs font-semibold uppercase tracking-widest text-gray-700">
                      {iss.label}
                    </p>
                    <p className="text-center text-[11px] text-gray-500">{iss.date}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
