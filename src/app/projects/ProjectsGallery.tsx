"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Category = "gas" | "electric" | "mantel" | "logset" | "newbuild" | "commercial" | "custom";

type Project = {
  title: string;
  fireplace?: { label: string; href: string };
  mantel?: { label: string; href: string };
  description: string;
  before?: string;
  after: string;
  categories: Category[];
};

const BA = "/projects/before-after/";
const NC = "/projects/new-construction/";
const SVC = "/projects/service/";

const projects: Project[] = [
  // ── GAS INSERTS – Before / After ─────────────────────────────────────────
  {
    title: "Heat & Glo Supreme 25 Gas Insert",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Dated plaster surround with exposed wiring converted to a clean white precast mantel and gas insert with TV above.",
    before: `${BA}supreme-25-before.jpg`,
    after:  `${BA}supreme-25-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Heat & Glo Supreme 30 with Tranquil Greige Herringbone Refractory",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "New construction framing finished with a gas insert and herringbone refractory interior — beige precast surround installed.",
    before: `${BA}supreme-30-herringbone-before.jpg`,
    after:  `${BA}supreme-30-herringbone-after.jpg`,
    categories: ["gas", "newbuild"],
  },
  {
    title: "Heat & Glo Supreme 30 with Brick-TR",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Existing brick fireplace upgraded with a direct-vent gas insert and traditional brick face trim.",
    before: `${BA}supreme-30-brick-before.jpg`,
    after:  `${BA}supreme-30-brick-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Heat & Glo Supreme 35 with Brick-TR",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Full brick surround with direct-vent gas insert — dramatic before/after transformation with realistic ember logs.",
    before: `${BA}supreme-35-brick-before.jpg`,
    after:  `${BA}supreme-35-brick-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Heat & Glo Supreme 30 with Birch Logs",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Classic brick fireplace converted to gas with premium birch log set for a clean, natural look.",
    before: `${BA}supreme-30-birch-before.jpg`,
    after:  `${BA}supreme-30-birch-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Heat & Glo Supreme 35 with Birch Logs",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Fireplace refresh with birch log set gas insert — high efficiency meets classic warmth.",
    before: `${BA}supreme-35-birch-before.jpg`,
    after:  `${BA}supreme-35-birch-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Heat & Glo Supreme 35 with Woomera Old World",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Classic Mantels", href: "/mantels/traditional" },
    description: "Charred brick fireplace fully rebuilt with a direct-vent gas insert and bold white precast traditional surround.",
    before: `${BA}supreme-35-woomera-before.jpg`,
    after:  `${BA}supreme-35-woomera-after.jpg`,
    categories: ["gas", "mantel"],
  },
  {
    title: "Heat & Glo Supreme 30 + Bolte Smooth Bianco",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Contemporary precast surround in Bianco finish paired with gas insert — clean minimalist result below a mounted TV.",
    before: `${BA}supreme-30-bolte-bianco-before.jpg`,
    after:  `${BA}supreme-30-bolte-bianco-after.jpg`,
    categories: ["gas", "mantel"],
  },
  {
    title: "Heat & Glo Supreme-I30-BIR with Brick-MI30-TR",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Gas insert with birch logs and a brick refractory trim front for an authentic traditional look.",
    before: `${BA}supreme-30-brick-mi30-before.jpg`,
    after:  `${BA}supreme-30-brick-mi30-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Heat & Glo Supreme 35 with Iron Age Front - New Bronze",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Gas insert with a dark bronze decorative front — dramatic finish elevating a traditional surround.",
    before: `${BA}supreme-35-iron-age-before.jpg`,
    after:  `${BA}supreme-35-iron-age-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Heat & Glo Supreme 30",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Standard gas insert conversion — from old brick to clean modern gas flames.",
    before: `${BA}supreme-30-c-before.jpg`,
    after:  `${BA}supreme-30-c-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Heat & Glo Supreme 30",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "IntelliFire Touch gas insert — smart ignition, variable flame, and ember bed in a refreshed surround.",
    before: `${BA}supreme-30-ift-before.jpg`,
    after:  `${BA}supreme-30-ift-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Heat & Glo 6KX-TG with St. Tropez Smooth Kingsbury",
    fireplace: { label: "Heat & Glo Gas Fireplaces", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Direct vent gas fireplace paired with a classic precast surround — a striking combination for a living room focal point.",
    before: `${BA}st-tropez-6kx-before.jpg`,
    after:  `${BA}st-tropez-6kx-after.jpg`,
    categories: ["gas", "mantel"],
  },
  {
    title: "Heat & Glo Supreme 35",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Smart-control gas insert — glowing embers, efficient performance, and renovated fireplace surround.",
    before: `${BA}supreme-35-ift-b-before.jpg`,
    after:  `${BA}supreme-35-ift-b-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Heat & Glo Supreme 30",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Bare brick refreshed with IntelliFire ignition and classic gas logs.",
    before: `${BA}supreme-30-ift-b-before.jpg`,
    after:  `${BA}supreme-30-ift-b-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Heat & Glo 6KX-TG with Cannon Balls and Bolte Smooth London Fog",
    fireplace: { label: "Heat & Glo Gas Fireplaces", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Direct vent gas with cannon ball media and a sleek contemporary precast surround.",
    before: `${BA}bolte-london-fog-6kx-before.jpg`,
    after:  `${BA}bolte-london-fog-6kx-after.jpg`,
    categories: ["gas", "mantel", "custom"],
  },

  // ── ELECTRIC – Before / After ────────────────────────────────────────────
  {
    title: "Modern Flames Orion Traditional 30",
    fireplace: { label: "Modern Flames Electric", href: "/fireplaces/modern-flames" },
    description: "Empty stone fireplace transformed with realistic HELIOVISION flames, multi-color embers, and app-controlled heat.",
    before: `${BA}orion-30-electric-before.jpg`,
    after:  `${BA}orion-30-electric-after.jpg`,
    categories: ["electric"],
  },
  {
    title: "Modern Flames Redstone 3626",
    fireplace: { label: "Modern Flames Electric", href: "/fireplaces/modern-flames" },
    description: "Brick fireplace upgraded to Hybrid-FX electric flames with RGB accent lighting and thermostatic heat.",
    before: `${BA}redstone-3626-before.jpg`,
    after:  `${BA}redstone-3626-after.jpg`,
    categories: ["electric"],
  },
  {
    title: "SimpliFire 36 + Mornington Smooth Kingsbury",
    fireplace: { label: "Electric Fireplaces", href: "/fireplaces/electric" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Vintage green-tiled brass-trim fireplace replaced with realistic LED flames and a fresh white precast surround.",
    before: `${BA}simplifire-36-mornington-before.jpg`,
    after:  `${BA}simplifire-36-mornington-after.jpg`,
    categories: ["electric", "mantel"],
  },

  // ── MANTELS – Before / After ─────────────────────────────────────────────
  {
    title: "Barossa Old World Bianco",
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Open brick arch fireplace given a complete mantel makeover with a classic precast surround.",
    before: `${BA}barossa-old-world-bianco-before.jpg`,
    after:  `${BA}barossa-old-world-bianco-after.jpg`,
    categories: ["mantel"],
  },
  {
    title: "Pitcairn Travertine Kingsbury",
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Classic precast surround in Travertine Kingsbury finish — timeless detailing replacing a dated fireplace.",
    before: `${BA}pitcairn-travertine-before.jpg`,
    after:  `${BA}pitcairn-travertine-after.jpg`,
    categories: ["mantel"],
  },
  {
    title: "Bondi Smooth Le Marais",
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Contemporary precast surround — refined result installed during construction phase.",
    before: `${BA}bondi-le-marais-before.jpg`,
    after:  `${BA}bondi-le-marais-after.jpg`,
    categories: ["mantel"],
  },
  {
    title: "Sydney Mantel Cap Paint Grade",
    mantel: { label: "All Mantels", href: "/mantels" },
    description: "Clean paint-grade mantel cap — minimal, modern profile that transforms the fireplace wall.",
    before: `${BA}sydney-mantel-cap-before.jpg`,
    after:  `${BA}sydney-mantel-cap-after.jpg`,
    categories: ["mantel"],
  },

  // ── LOG SETS – Before / After ────────────────────────────────────────────
  {
    title: "Grand Canyon 3BRN-30-NG-MVKEI-GCRK + AWOC30LOGS",
    fireplace: { label: "Gas Log Sets", href: "/fireplaces" },
    description: "30\" gas log set with Arizona Weathered Oak charred logs — hand-painted cement logs with authentic realism.",
    before: `${BA}gas-logs-3brn-30-before.jpg`,
    after:  `${BA}gas-logs-3brn-30-after.jpg`,
    categories: ["logset"],
  },
  {
    title: "Grand Canyon 2BRN-18 with AWOC18LOGS",
    fireplace: { label: "Gas Log Sets", href: "/fireplaces" },
    description: "18\" log set — native detail with authentic charred realism in a compact masonry fireplace.",
    before: `${BA}gas-logs-2brn-18-before.jpg`,
    after:  `${BA}gas-logs-2brn-18-after.jpg`,
    categories: ["logset"],
  },
  {
    title: "Grand Canyon 21\" AZ Weathered Oak Logs with 2BRN-21-NG-MVEI-GCRK",
    fireplace: { label: "Gas Log Sets", href: "/fireplaces" },
    description: "21\" Arizona Weathered Oak charred log set — realistic warmth in minutes.",
    before: `${BA}az-logs-21-before.jpg`,
    after:  `${BA}az-logs-21-after.jpg`,
    categories: ["logset"],
  },

  // ── CUSTOM ────────────────────────────────────────────────────────────────
  {
    title: "Osburn 3500 Wood Insert + Forever Flex Liner Kit",
    description: "Wood-burning insert with stainless flex liner kit — efficient wood-burning restoration.",
    before: `${BA}wood-insert-3500-before.jpg`,
    after:  `${BA}wood-insert-3500-after.jpg`,
    categories: ["custom"],
  },
  {
    title: "Reclaimed Beam + Masonry",
    description: "Custom reclaimed wood beam mantel combined with hand-laid masonry surround — one-of-a-kind focal point.",
    before: `${BA}beam-masonry-before.jpg`,
    after:  `${BA}beam-masonry-after.jpg`,
    categories: ["custom", "mantel"],
  },

  // ── SERVICE ───────────────────────────────────────────────────────────────
  {
    title: "Heat & Glo Gas Insert Service & Repair",
    fireplace: { label: "Heat & Glo Service", href: "/fireplaces/heat-and-glo" },
    description: "Full service call — cleaning, inspection, and component replacement restoring the insert to like-new condition.",
    before: `${SVC}service-28191-before.jpg`,
    after:  `${SVC}service-28191-after.jpg`,
    categories: ["gas"],
  },
  {
    title: "Superior DRT3540 Gas Fireplace + Clare Smooth Seaside Mantel",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Complete fireplace replacement — existing unit fully removed down to the studs and rebuilt with a Superior DRT3540 gas fireplace and an ornate white Clare Smooth Seaside precast mantel surround.",
    before: `${SVC}superior-drt3540-before.jpg`,
    after:  `${SVC}superior-drt3540-after.jpg`,
    categories: ["gas", "mantel"],
  },

  // ── NEW CONSTRUCTION ──────────────────────────────────────────────────────
  {
    title: "Napoleon Clearion Elite 50 See-Through Electric Fireplace",
    fireplace: { label: "Napoleon Fireplaces", href: "/fireplaces/napoleon" },
    description: "See-through electric fireplace with glass media installed in new construction — panoramic blue and orange flame view.",
    after: `${NC}clearion-elite-50.jpg`,
    categories: ["electric", "newbuild"],
  },
  {
    title: "Stellar 4-ST-24-G",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    description: "Traditional gas insert installed in a dramatic dark stacked stone surround — new construction feature wall.",
    after: `${NC}4-st-24-g.jpg`,
    categories: ["gas", "newbuild"],
  },
  {
    title: "Modern Flames Orion 52 Multi Virtual Electric Fireplace",
    fireplace: { label: "Modern Flames Electric", href: "/fireplaces/modern-flames" },
    description: "Long-format electric fireplace installed in new construction — wide ribbon flames with multi-color accents.",
    after: `${NC}orion-52-multi.jpg`,
    categories: ["electric", "newbuild"],
  },
  {
    title: "Heat & Glo PRIMO-II-60 See-Through",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "See-through gas fireplace installed in an outdoor living area — elegant white frame visible from both sides.",
    after: `${NC}primo-ii-60st.jpg`,
    categories: ["gas", "newbuild", "custom"],
  },
  {
    title: "NDV4236 with Pitcairn Old World",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    description: "Large see-through direct vent gas fireplace framed in during new construction.",
    after: `${NC}ndv4236-pitcairn-wo.jpg`,
    categories: ["gas", "newbuild"],
  },
  {
    title: "Pitcairn Old World Kingsbury",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Ornate carved traditional precast mantel paired with a gas fireplace in new construction.",
    after: `${NC}pitcairn-okw-29124.jpg`,
    categories: ["gas", "newbuild", "mantel"],
  },
  {
    title: "Stellar 4-ST-24-G",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Clean contemporary precast surround with wide gas insert — minimal and elegant in a new build.",
    after: `${NC}4-st-24-g-b.jpg`,
    categories: ["gas", "newbuild", "mantel"],
  },
  {
    title: "NDV4236 with Woomera Paint Grade",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Classic white traditional precast mantel with gas fireplace and wood log set — timeless new build result.",
    after: `${NC}ndv4236-woomera.jpg`,
    categories: ["gas", "newbuild", "mantel"],
  },
  {
    title: "Ortal WTR42",
    fireplace: { label: "Ortal Fireplaces", href: "/fireplaces/ortal" },
    description: "Ortal WTR42 fireplace installed as a clean new-construction focal point.",
    after: `${NC}wtr42.jpg`,
    categories: ["gas", "newbuild"],
  },
  {
    title: "Napoleon Luxuria 62 See-Through Gas Fireplace",
    fireplace: { label: "Napoleon Fireplaces", href: "/fireplaces/napoleon" },
    description: "Linear gas fireplace set into a stone wall with a wood beam mantel — dramatic new build feature.",
    after: `${NC}luxuria-62-see-through.jpg`,
    categories: ["gas", "newbuild", "custom"],
  },
  {
    title: "Flare Front Facing 60\"",
    fireplace: { label: "Flare Fireplaces", href: "/fireplaces/flare" },
    description: "Long linear gas fireplace installed in a brick wall with reclaimed wood beam above — stunning new construction.",
    after: `${NC}flare-ff-60.jpg`,
    categories: ["gas", "newbuild"],
  },
  {
    title: "Heat & Glo COSMO36-IFT-B",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "Contemporary angled precast surround with gas ribbon flames — clean lines in a new build.",
    after: `${NC}cosmo36-ift-b.jpg`,
    categories: ["gas", "newbuild"],
  },
  {
    title: "Isokern 80S36",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    description: "Gas fireplace with clean white surround installed in a custom wood-paneled living room.",
    after: `${NC}isokern-80s36.jpg`,
    categories: ["gas", "newbuild", "custom"],
  },
  {
    title: "Flare 60 High Double Glass",
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Ornate white traditional precast mantel surround installed in a new construction home — ready for use.",
    after: `${NC}flare-60hh.jpg`,
    categories: ["mantel", "newbuild"],
  },
  {
    title: "Heat & Glo TRUE 42\" Stratford with Nullarbor Paint Grade",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Gas fireplace with arched white precast surround — classic arch detail in a new build.",
    after: `${NC}true-42s-nullarbor.jpg`,
    categories: ["gas", "newbuild", "mantel"],
  },
  {
    title: "Heat & Glo TRUE 42\" Tranquil Greige with Padthaway Stone World Milano",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Wide gas fireplace with contemporary precast mantel surround and classic log set — new build living room centerpiece.",
    after: `${NC}true-42tg-padthaway.jpg`,
    categories: ["gas", "newbuild", "mantel"],
  },
  {
    title: "Heat & Glo MEZZO36-C with Quattro Front",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "Contemporary gas fireplace in a clean white precast surround — new construction ready for the homeowner.",
    after: `${NC}mezzo36-c.jpg`,
    categories: ["gas", "newbuild"],
  },
  {
    title: "Heat & Glo SL-9-IFT",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "Traditional gas insert with active flames installed in a bold dark stacked stone feature wall.",
    after: `${NC}sl-9-ift.jpg`,
    categories: ["gas", "newbuild"],
  },
  {
    title: "Modern Flames Orion 60\" Slim",
    fireplace: { label: "Modern Flames Electric", href: "/fireplaces/modern-flames" },
    description: "Long-format electric fireplace installed during new construction — clean linear flame view in a slim profile.",
    after: `${NC}orion-60-slim.jpg`,
    categories: ["electric", "newbuild", "custom"],
  },
  {
    title: "ODCOUG-42TS and Nullarbor with Darlinghurst Beam Stone World London Fog",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Classic ornate precast mantel surround with gas fireplace and black log set — traditional elegance in a new home.",
    after: `${NC}odcoug-42ts-nullarbor.jpg`,
    categories: ["gas", "newbuild", "mantel"],
  },
];

type Tab = "all" | "gas" | "electric" | "mantel" | "logset" | "newbuild" | "commercial" | "custom";

const tabs: { id: Tab; label: string }[] = [
  { id: "all",        label: "All Projects" },
  { id: "gas",        label: "Gas Inserts" },
  { id: "electric",   label: "Electric" },
  { id: "mantel",     label: "Mantels" },
  { id: "logset",     label: "Log Sets" },
  { id: "newbuild",   label: "New Builds" },
  { id: "custom",     label: "Custom" },
  { id: "commercial", label: "Commercial" },
];

const COMING_SOON: Record<string, { heading: string; body: string }> = {
  commercial: {
    heading: "Commercial Projects Coming Soon",
    body: "We've completed fireplace and masonry installations for restaurants, retail chains, hotels, and multi-unit developments across California and Nevada. Photos coming soon — contact us to discuss your commercial project.",
  },
};

function ProductTags({ project }: { project: Project }) {
  if (!project.fireplace && !project.mantel) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {project.fireplace && (
        <Link
          href={project.fireplace.href}
          className="inline-flex items-center gap-1.5 bg-stone-100 hover:bg-[#F9F7F3] hover:text-[color:var(--accent)] text-stone-700 text-xs font-medium px-3 py-1.5 rounded-sm transition-colors"
        >
          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          </svg>
          {project.fireplace.label}
        </Link>
      )}
      {project.mantel && (
        <Link
          href={project.mantel.href}
          className="inline-flex items-center gap-1.5 bg-[#F9F7F3] hover:bg-[#EFE7DA] text-[color:var(--accent)] text-xs font-medium px-3 py-1.5 rounded-sm transition-colors"
        >
          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          {project.mantel.label}
        </Link>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isBeforeAfter = !!project.before;

  return (
    <div className="border border-stone-200 rounded-sm overflow-hidden hover:shadow-sm transition-shadow">
      {isBeforeAfter ? (
        <div className="grid grid-cols-2">
          <div className="relative aspect-[4/3]">
            <Image src={project.before!} alt={`${project.title} — Before`} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            <span className="absolute top-3 left-3 bg-stone-900/80 text-white text-xs font-medium uppercase tracking-[0.2em] px-2.5 py-1 rounded">Before</span>
          </div>
          <div className="relative aspect-[4/3]">
            <Image src={project.after} alt={`${project.title} — After`} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            <span className="absolute top-3 left-3 bg-[color:var(--accent)]/90 text-white text-xs font-medium uppercase tracking-[0.2em] px-2.5 py-1 rounded">After</span>
          </div>
        </div>
      ) : (
        <div className="relative aspect-[16/9]">
          <Image src={project.after} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <span className="absolute top-3 left-3 bg-[color:var(--accent)]/90 text-white text-xs font-medium uppercase tracking-[0.2em] px-2.5 py-1 rounded">New Build</span>
        </div>
      )}
      <div className="p-6">
        <h3 className="font-medium text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{project.title}</h3>
        <p className="text-stone-500 text-sm leading-relaxed">{project.description}</p>
        <ProductTags project={project} />
      </div>
    </div>
  );
}

export default function ProjectsGallery() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeTab as Category));

  const getCount = (tab: Tab) =>
    tab === "all" ? projects.length : projects.filter((p) => p.categories.includes(tab as Category)).length;

  const comingSoon = COMING_SOON[activeTab];

  return (
    <>
      {/* Sticky tabs */}
      <div className="border-b border-stone-200 sticky top-16 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const count = getCount(tab.id);
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-colors ${
                    activeTab === tab.id
                      ? "border-[color:var(--accent)] text-[color:var(--accent)]"
                      : "border-transparent text-stone-500 hover:text-stone-800"
                  }`}
                >
                  {tab.label}
                  {count > 0 && <span className="ml-1.5 text-xs font-normal opacity-60">({count})</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {comingSoon ? (
          <div className="text-center py-24 max-w-xl mx-auto">
            <div className="w-16 h-16 bg-[#EFE7DA] rounded-sm flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[color:var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              {comingSoon.heading}
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8">{comingSoon.body}</p>
            <Link href="/contact" className="inline-block bg-[color:var(--ink)] hover:bg-[color:var(--accent)] text-white px-8 py-3.5 rounded-sm font-medium transition-colors">
              Contact Us About Your Project
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filtered.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
