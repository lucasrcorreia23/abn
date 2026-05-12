import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Breadcrumb — used on every internal page (category, article, institutional).
 * Last item is rendered as the current page (no link).
 */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-gray-100 bg-gray-50"
    >
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-4 py-2 text-xs text-gray-500 sm:px-6">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1">
              {!isLast && c.href ? (
                <Link href={c.href} className="uppercase tracking-wide hover:text-gray-900">
                  {c.label}
                </Link>
              ) : (
                <span className="uppercase tracking-wide text-gray-900" aria-current={isLast ? "page" : undefined}>
                  {c.label}
                </span>
              )}
              {!isLast && <span aria-hidden className="text-gray-300">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
