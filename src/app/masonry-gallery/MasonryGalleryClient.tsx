"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PricingCTA from "@/components/PricingCTA";

const BASE = "https://images.squarespace-cdn.com/content/v1/6898bc1516ea8a1fd077995f";

const residential = [
  {
    src: `${BASE}/180d8e52-9754-4a75-ab98-1d21b76879a7/`,
    alt: "Residential home with landscaped garden and flower beds",
    caption: "Residential Exterior",
  },
  {
    src: `${BASE}/1fee6c1c-57d4-43d0-94a6-f5d3646105e9/`,
    alt: "Row of contemporary white homes with dark roofs",
    caption: "Residential Development",
  },
  {
    src: `${BASE}/e839b1e6-2450-4a91-91df-ae5c72bb71d6/`,
    alt: "Two-story home with lit windows and landscaped front yard at dusk",
    caption: "Single Family Residence",
  },
  {
    src: `${BASE}/f9eae93a-830f-4d2c-9c69-23341e1db930/`,
    alt: "Multi-story residential building with balconies and outdoor seating",
    caption: "Multi-Unit Residential",
  },
  {
    src: `${BASE}/673bc382-353e-46c6-a60a-ec02a3c5c039/`,
    alt: "Apartment complex with trees and parking area",
    caption: "Apartment Complex",
  },
];

const commercial = [
  {
    src: `${BASE}/2eb435ce-15b2-41b1-8fa0-bc96450253a7/Masonry+Project`,
    alt: "Cal Mantel mason laying herringbone tile on fireplace surround",
    caption: "Fireplace Tile Installation",
  },
  {
    src: `${BASE}/1d921cf6-0a69-4f6a-9248-4c398b0c20ae/Masonry+Project`,
    alt: "Cal Mantel masonry crew working on commercial exterior",
    caption: "Commercial Exterior Masonry",
  },
  {
    src: `${BASE}/3df0e529-20e2-4e56-958b-1afbf5980855/`,
    alt: "In-N-Out Burger entrance with customers",
    caption: "In-N-Out Burger",
  },
  {
    src: `${BASE}/a8f6f783-cc7f-4013-b514-008ad3d09204/`,
    alt: "In-N-Out Burger exterior with yellow and red signage",
    caption: "In-N-Out Burger — Exterior",
  },
  {
    src: `${BASE}/0062bbaa-eae6-4f2f-8c22-38fa09bb3022/`,
    alt: "In-N-Out Burger customers inside and outside",
    caption: "In-N-Out Burger — Entry",
  },
  {
    src: `${BASE}/219128e7-e569-4c47-a900-48d735a108d4/`,
    alt: "Burger King restaurant at sunset with illuminated logo",
    caption: "Burger King",
  },
  {
    src: `${BASE}/d60c1825-a103-4d09-89e2-049818cd9815/`,
    alt: "Chase Bank branch with brick and white facade",
    caption: "Chase Bank",
  },
  {
    src: `${BASE}/0c6f59b9-7608-4c68-a0b0-a88f264dba1b/`,
    alt: "7-Eleven convenience store with gas station pumps",
    caption: "7-Eleven",
  },
  {
    src: `${BASE}/f43c8ee5-383f-4055-97e5-6e1d608c8a26/`,
    alt: "Outdoor courtyard with red umbrellas and seating at sunset",
    caption: "Commercial Courtyard",
  },
];

type Tab = "all" | "residential" | "commercial";

export default function MasonryGalleryClient() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const photos =
    activeTab === "residential"
      ? residential
      : activeTab === "commercial"
      ? commercial
      : [...residential, ...commercial];

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Our Work · Southern California
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Masonry Project Gallery
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            From custom home fireplaces to large-scale commercial installations, our masonry
            team has delivered high-quality work across Southern California for over 35 years.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-sm text-stone-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Masonry installation services available in <span className="text-white font-semibold ml-1">Southern California only</span>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="flex gap-2 border-b border-stone-200">
          {(["all", "residential", "commercial"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 text-sm font-semibold capitalize transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? "border-amber-700 text-amber-700"
                  : "border-transparent text-stone-500 hover:text-stone-800"
              }`}
            >
              {tab === "all"
                ? `All Projects (${residential.length + commercial.length})`
                : tab === "residential"
                ? `Residential (${residential.length})`
                : `Commercial (${commercial.length})`}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl bg-stone-100 aspect-[4/3]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white text-sm font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      <PricingCTA />
    </>
  );
}
