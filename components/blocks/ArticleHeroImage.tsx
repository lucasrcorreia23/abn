/**
 * ArticleHeroImage — full-width image placeholder with caption used at the top
 * of article bodies, between the header and the article copy.
 */
export default function ArticleHeroImage({
  label,
  caption,
}: {
  label: string;
  caption?: string;
}) {
  return (
    <figure className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <div className="ph-img aspect-[16/9] w-full" data-label={label} />
      {caption && (
        <figcaption className="mt-2 text-xs text-gray-500">{caption}</figcaption>
      )}
    </figure>
  );
}
