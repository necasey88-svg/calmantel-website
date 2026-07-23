"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { OverstockFireplace } from "./page";

type FilterKey = "All" | OverstockFireplace["category"];
type PickupItem = OverstockFireplace & {
  requestedQuantity: number;
};

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
  const [pickupItems, setPickupItems] = useState<PickupItem[]>([]);

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
  const pickupUnitCount = pickupItems.reduce((total, item) => total + item.requestedQuantity, 0);
  const pickupSummary = pickupItems
    .map(
      (item) =>
        `${item.requestedQuantity} x ${item.manufacturer} ${item.name} (${item.sku}) - ${item.location}`,
    )
    .join("\n");

  function itemKey(item: OverstockFireplace) {
    return `${item.location}-${item.sku}`;
  }

  function addPickupItem(fireplace: OverstockFireplace) {
    setPickupItems((items) => {
      const key = itemKey(fireplace);
      const existing = items.find((item) => itemKey(item) === key);

      if (!existing) {
        return [...items, { ...fireplace, requestedQuantity: 1 }];
      }

      return items.map((item) =>
        itemKey(item) === key
          ? { ...item, requestedQuantity: Math.min(item.requestedQuantity + 1, item.quantity) }
          : item,
      );
    });
  }

  function updatePickupQuantity(key: string, quantity: number) {
    setPickupItems((items) =>
      items.map((item) =>
        itemKey(item) === key
          ? { ...item, requestedQuantity: Math.min(Math.max(quantity, 1), item.quantity) }
          : item,
      ),
    );
  }

  function removePickupItem(key: string) {
    setPickupItems((items) => items.filter((item) => itemKey(item) !== key));
  }

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

      <div className="mb-8 border border-[color:var(--ink)] bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[color:var(--accent)]">
              Pickup List
            </p>
            <h3
              className="mt-2 text-2xl font-medium text-[color:var(--ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Add will-call items for in-store pickup.
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[color:var(--ink)]/58">
              These items are pickup only. No shipping is offered. Our team will confirm
              current availability, condition, included components, and final pricing before
              payment.
            </p>
          </div>
          <div className="border border-[color:var(--sand-deep)] px-4 py-3 text-center">
            <p className="text-2xl font-medium leading-none text-[color:var(--ink)]">{pickupUnitCount}</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[color:var(--ink)]/45">
              Pickup Units
            </p>
          </div>
        </div>

        {pickupItems.length > 0 ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="space-y-3">
              {pickupItems.map((item) => {
                const key = itemKey(item);

                return (
                  <div
                    key={key}
                    className="grid gap-4 border border-[color:var(--sand-deep)] bg-[#F9F7F3] p-4 sm:grid-cols-[1fr_110px_auto] sm:items-center"
                  >
                    <div>
                      <p className="font-medium text-[color:var(--ink)]">
                        {item.manufacturer} {item.name}
                      </p>
                      <p className="mt-1 font-mono text-xs text-[color:var(--ink)]/45">
                        SKU {item.sku} / {item.location}
                      </p>
                    </div>
                    <label className="block">
                      <span className="mb-1 block text-[9px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink)]/45">
                        Quantity
                      </span>
                      <select
                        value={item.requestedQuantity}
                        onChange={(event) => updatePickupQuantity(key, Number(event.target.value))}
                        className="w-full border border-[color:var(--sand-deep)] bg-white px-3 py-2 text-sm"
                      >
                        {Array.from({ length: item.quantity }, (_, index) => index + 1).map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </label>
                    <button
                      type="button"
                      onClick={() => removePickupItem(key)}
                      className="text-left text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--ink)]/45 transition-colors hover:text-[color:var(--accent)] sm:text-right"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4 border border-[color:var(--sand-deep)] p-5">
              <input type="hidden" name="access_key" value="b1598619-2b9b-4e72-b8da-64815d1f9037" />
              <input type="hidden" name="subject" value="Will-Call Pickup Request" />
              <input type="hidden" name="from_name" value="California Mantel & Fireplace Website" />
              <input type="hidden" name="Pickup Items" value={pickupSummary} />
              <input
                type="hidden"
                name="redirect"
                value="https://www.calmantel.com/fireplaces/overstock/inquiry/thank-you"
              />
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[color:var(--ink)]">Name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full border border-[color:var(--sand-deep)] bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--accent)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[color:var(--ink)]">Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full border border-[color:var(--sand-deep)] bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--accent)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[color:var(--ink)]">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className="w-full border border-[color:var(--sand-deep)] bg-white px-4 py-3 text-sm outline-none focus:border-[color:var(--accent)]"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-[color:var(--ink)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent)]"
              >
                Request Pickup Confirmation
              </button>
            </form>
          </div>
        ) : (
          <div className="mt-6 border border-dashed border-[color:var(--sand-deep)] bg-[#F9F7F3] px-5 py-6 text-sm text-[color:var(--ink)]/55">
            Your pickup list is empty. Add a stocked item below to start a will-call request.
          </div>
        )}
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

              <button
                type="button"
                onClick={() => addPickupItem(fireplace)}
                className="mt-auto bg-[color:var(--ink)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent)]"
              >
                Add to Pickup List
              </button>

              <Link
                href={`/fireplaces/overstock/inquiry?product=${encodeURIComponent(fireplace.sku)}&location=${encodeURIComponent(fireplace.location)}`}
                className="pt-4 text-sm font-medium text-[color:var(--accent)] hover:underline"
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
