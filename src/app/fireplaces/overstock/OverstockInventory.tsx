"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { OverstockFireplace } from "./page";

type FilterKey = "All" | OverstockFireplace["category"];

const filters: { key: FilterKey; label: string }[] = [
  { key: "All", label: "All Types" },
  { key: "Luxury Linear", label: "Luxury Linear" },
  { key: "Gas", label: "Gas Fireplaces" },
  { key: "Gas Insert", label: "Gas Inserts" },
  { key: "Electric", label: "Electric Fireplaces" },
  { key: "Gas Log Set", label: "Gas Log Sets" },
  { key: "Heater", label: "Heaters" },
  { key: "Outdoor", label: "Outdoor Fireplaces" },
  { key: "Wood-Burning", label: "Wood-Burning" },
];

export default function OverstockInventory({
  fireplaces,
}: {
  fireplaces: OverstockFireplace[];
}) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const [manufacturer, setManufacturer] = useState("All Brands");
  const [location, setLocation] = useState("All Warehouses");
  const [search, setSearch] = useState("");

  const manufacturers = useMemo(
    () => [...new Set(fireplaces.map((fireplace) => fireplace.manufacturer))].sort(),
    [fireplaces],
  );

  const filteredFireplaces = useMemo(() => {
    const query = search.trim().toLowerCase();

    return fireplaces.filter((fireplace) => {
      const matchesType = activeFilter === "All" || fireplace.category === activeFilter;
      const matchesManufacturer = manufacturer === "All Brands" || fireplace.manufacturer === manufacturer;
      const matchesLocation = location === "All Warehouses" || fireplace.location === location;
      const matchesSearch =
        !query ||
        [fireplace.name, fireplace.sku, fireplace.manufacturer, fireplace.configuration].some((value) =>
          value.toLowerCase().includes(query),
        );

      return matchesType && matchesManufacturer && matchesLocation && matchesSearch;
    });
  }, [activeFilter, fireplaces, location, manufacturer, search]);

  const visibleUnits = filteredFireplaces.reduce((total, fireplace) => total + fireplace.quantity, 0);

  return (
    <>
      <div className="mb-8 border border-[color:var(--sand-deep)] bg-[#F9F7F3] p-5 sm:p-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2" aria-label="Filter inventory by fireplace type">
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                aria-pressed={activeFilter === filter.key}
                className={`border px-4 py-2 text-xs font-medium transition-colors ${
                  activeFilter === filter.key
                    ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white"
                    : "border-[color:var(--sand-deep)] bg-white text-[color:var(--ink)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <label className="block">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--ink)]/50">
                Warehouse
              </span>
              <select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className="w-full border border-[color:var(--sand-deep)] bg-white px-4 py-3 text-sm text-[color:var(--ink)] outline-none transition-colors focus:border-[color:var(--accent)]"
              >
                <option>All Warehouses</option>
                <option>Anaheim Warehouse</option>
                <option>Sacramento Warehouse</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--ink)]/50">
                Search model or SKU
              </span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Example: Flare, DRL2045, linear"
                className="w-full border border-[color:var(--sand-deep)] bg-white px-4 py-3 text-sm text-[color:var(--ink)] outline-none transition-colors placeholder:text-[color:var(--ink)]/35 focus:border-[color:var(--accent)]"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--ink)]/50">
                Brand
              </span>
              <select
                value={manufacturer}
                onChange={(event) => setManufacturer(event.target.value)}
                className="w-full border border-[color:var(--sand-deep)] bg-white px-4 py-3 text-sm text-[color:var(--ink)] outline-none transition-colors focus:border-[color:var(--accent)]"
              >
                <option>All Brands</option>
                {manufacturers.map((brand) => (
                  <option key={brand}>{brand}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--sand-deep)] pt-4 text-xs text-[color:var(--ink)]/55">
            <p aria-live="polite">
              Showing <strong className="font-medium text-[color:var(--ink)]">{filteredFireplaces.length}</strong> models /{" "}
              <strong className="font-medium text-[color:var(--ink)]">{visibleUnits}</strong> units
            </p>
            <p className="font-medium text-[color:var(--ink)]">Location: {location}</p>
          </div>
        </div>
      </div>

      {filteredFireplaces.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredFireplaces.map((fireplace) => (
            <article
              key={`${fireplace.location}-${fireplace.category}-${fireplace.sku}`}
              className="flex min-h-[410px] flex-col border border-[color:var(--sand-deep)] bg-white p-7 transition-colors hover:border-[color:var(--accent)]"
            >
              {fireplace.image && (
                <div className="relative -mx-7 -mt-7 mb-6 aspect-[4/3] overflow-hidden border-b border-[color:var(--sand-deep)] bg-[#F5F2EC]">
                  <Image
                    src={fireplace.image}
                    alt={`${fireplace.manufacturer} ${fireplace.name}`}
                    fill
                    sizes="(min-width: 1280px) 31vw, (min-width: 768px) 47vw, 100vw"
                    className="object-contain"
                  />
                </div>
              )}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[color:var(--accent)]">
                    {fireplace.manufacturer}
                  </p>
                  <p className="mt-2 font-mono text-xs text-[color:var(--ink)]/45">SKU {fireplace.sku}</p>
                </div>
                <div className="min-w-16 border border-[color:var(--sand-deep)] px-3 py-2 text-center">
                  <p className="text-xl font-medium leading-none text-[color:var(--ink)]">{fireplace.quantity}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[color:var(--ink)]/45">
                    {fireplace.quantity === 1 ? "Unit" : "Units"}
                  </p>
                </div>
              </div>

              <span className="mb-3 w-fit bg-[color:var(--sand)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)]/65">
                {fireplace.category}
              </span>
              <h3
                className="text-2xl font-medium leading-tight text-[color:var(--ink)]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {fireplace.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink)]/58">{fireplace.details}</p>

              <dl className="mt-6 space-y-2 border-t border-[color:var(--sand-deep)] pt-5 text-xs">
                <div className="flex justify-between gap-4">
                  <dt className="text-[color:var(--ink)]/40">Location</dt>
                  <dd className="text-right font-medium text-[color:var(--ink)]/70">{fireplace.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[color:var(--ink)]/40">Configuration</dt>
                  <dd className="text-right font-medium text-[color:var(--ink)]/70">{fireplace.configuration}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[color:var(--ink)]/40">Fuel</dt>
                  <dd className="text-right font-medium text-[color:var(--ink)]/70">{fireplace.fuel}</dd>
                </div>
              </dl>

              {fireplace.note && (
                <p className="mt-4 border-l-2 border-[color:var(--accent)] pl-3 text-[11px] leading-relaxed text-[color:var(--ink)]/50">
                  {fireplace.note}
                </p>
              )}

              <Link
                href={`/fireplaces/overstock/inquiry?product=${encodeURIComponent(fireplace.sku)}&location=${encodeURIComponent(fireplace.location)}`}
                className="mt-auto pt-6 text-sm font-medium text-[color:var(--accent)] hover:underline"
              >
                Ask About This Unit →
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="border border-[color:var(--sand-deep)] bg-[#F9F7F3] px-6 py-16 text-center">
          <p className="text-lg font-medium text-[color:var(--ink)]">No units match those filters.</p>
          <button
            type="button"
            onClick={() => {
              setActiveFilter("All");
              setManufacturer("All Brands");
              setLocation("All Warehouses");
              setSearch("");
            }}
            className="mt-4 text-sm font-medium text-[color:var(--accent)] hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </>
  );
}
