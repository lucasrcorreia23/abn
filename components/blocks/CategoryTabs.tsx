"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * CategoryTabs — horizontal subcategory filter at the top of each vertical
 * landing page (e.g. inside /cabin: Latest News / Airlines / IFE & Connectivity / …).
 *
 * Pills wrap across multiple rows when they don't fit — no scroll, no fade.
 * Filter visibility should never require horizontal discovery.
 */
export default function CategoryTabs({
  tabs,
  initial,
  onChange,
}: {
  tabs: string[];
  initial?: string;
  onChange?: (tab: string) => void;
}) {
  const [active, setActive] = useState(initial ?? tabs[0]);

  return (
    <div className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setActive(t);
                  onChange?.(t);
                }}
                className={cn(
                  "whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors",
                  isActive
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-500"
                )}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
