"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * CategoryTabs — horizontal subcategory filter at the top of each vertical
 * landing page (e.g. inside /cabin: Latest News / Airlines / IFE & Connectivity / …).
 *
 * Full-bleed rail: spans the viewport width, no max-width container. Native
 * scrollbar is hidden (`.no-scrollbar`) and edges fade with `.tabs-edge-fade`
 * so overflowing pills are clearly hinted at without an ugly scroll track.
 *
 * Client component so it can manage active tab state without a full route.
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
      <div className="no-scrollbar tabs-edge-fade w-full overflow-x-auto">
        <div className="flex w-max gap-2 py-3 pl-4 pr-8 sm:pl-6">
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
          {/* Trailing spacer so the last pill is fully visible past the fade */}
          <span aria-hidden className="w-4 shrink-0" />
        </div>
      </div>
    </div>
  );
}
