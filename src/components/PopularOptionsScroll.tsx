"use client";

import type { PopularOption } from "@/lib/gas-inserts-data";

type Props = {
  options: PopularOption[];
  brandConfigUrl?: string;
  fallbackImage: string;
};

export default function PopularOptionsScroll({ options, brandConfigUrl, fallbackImage }: Props) {
  return (
    <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-0 sm:px-0 snap-x snap-mandatory">
      {options.map((opt) => (
        <div
          key={opt.name}
          className="flex-shrink-0 w-64 snap-start rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="h-44 bg-stone-100 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={opt.image}
              alt={opt.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = fallbackImage;
              }}
            />
          </div>
          <div className="p-4">
            <p className="font-semibold text-stone-900 text-sm leading-snug mb-1">{opt.name}</p>
            <p className="text-stone-500 text-xs leading-relaxed">{opt.subtitle}</p>
          </div>
        </div>
      ))}

      {brandConfigUrl && (
        <a
          href={brandConfigUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-64 snap-start rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 hover:border-amber-500 hover:bg-amber-100 transition-colors flex flex-col items-center justify-center gap-3 p-6 text-center"
        >
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <p className="font-semibold text-amber-800 text-sm">Design Your Own</p>
          <p className="text-amber-700 text-xs">Use Mendota&apos;s online configurator to explore all combinations</p>
        </a>
      )}
    </div>
  );
}
