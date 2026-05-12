import type { ReactNode } from "react";

/**
 * RichTextContent — generic long-form text block used for Terms, Privacy and
 * sections of the About page. Accepts arbitrary React children, but provides
 * a sensible default content shape for institutional pages.
 */
export default function RichTextContent({
  children,
  sections,
}: {
  children?: ReactNode;
  sections?: { heading: string; body: string }[];
}) {
  return (
    <section className="border-b border-gray-200">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="prose-editorial">
          {sections?.map((s) => (
            <div key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </div>
          ))}
          {children}
        </div>
      </div>
    </section>
  );
}
