"use client";

import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="rounded-2xl overflow-hidden bg-stone-100 aspect-[4/3]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[active]}
          alt={`${alt} — photo ${active + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
          key={active}
        />
      </div>

      {/* Thumbnails — only show when there's more than one image */}
      {images.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-lg overflow-hidden border-2 transition-all ${
                i === active
                  ? "border-amber-700 shadow-md"
                  : "border-stone-200 hover:border-amber-400 opacity-70 hover:opacity-100"
              }`}
              style={{ width: 72, height: 54, flexShrink: 0 }}
              aria-label={`View photo ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${alt} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
