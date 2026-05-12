/**
 * PageHeader — generic header for institutional pages (About, Contact, Terms,
 * Privacy, Advertise, Jobs, Magazines, Events, Newsletter, Subscribe).
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        {eyebrow && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
