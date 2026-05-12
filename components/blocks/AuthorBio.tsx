/**
 * AuthorBio — short author biography card rendered after the article body.
 */
export default function AuthorBio({
  author,
  bio,
}: {
  author: string;
  bio: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-10 sm:px-6">
      <div className="flex items-start gap-4 border-y border-gray-200 py-6">
        <div
          className="ph-img aspect-square w-20 shrink-0 rounded-full"
          data-label="AUTHOR"
        />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
            Written by
          </p>
          <h3 className="mt-1 text-lg font-bold text-gray-900">{author}</h3>
          <p className="mt-1 text-sm text-gray-600">{bio}</p>
        </div>
      </div>
    </section>
  );
}
