export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

/**
 * TeamGrid — staff grid used for "Meet the Team" and "People & Workplaces".
 * Each card is a circular photo placeholder + name + role + (optional) bio.
 */
export default function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <div className="ph-img aspect-square w-32 rounded-full" data-label="PORTRAIT" />
              <h3 className="mt-4 text-base font-semibold text-gray-900">{m.name}</h3>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
                {m.role}
              </p>
              {m.bio && <p className="mt-2 text-sm text-gray-600">{m.bio}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
