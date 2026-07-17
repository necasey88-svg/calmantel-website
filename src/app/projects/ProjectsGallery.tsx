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
  comparisonImage?: boolean;
};

const projects: Project[] = [
  {
    title: "Ballarat Mantel & Heat & Glo Supreme 30 Gas Insert",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description:
      "Before-and-after transformation featuring a Ballarat mantel and Heat & Glo Supreme 30 gas insert.",
    after: "/projects/ballarat-mantel-heat-and-glo-supreme-30.png",
    categories: ["gas", "mantel"],
    comparisonImage: true,
  },
  {
    title: "29073 Heat & Glo Supreme 25 Gas Insert",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 29073 Heat & Glo Supreme 25 Gas Insert.",
    before: "/projects/audited-before-after/01-29073-heat-and-glo-supreme-25-gas-insert-before.webp",
    after: "/projects/audited-before-after/01-29073-heat-and-glo-supreme-25-gas-insert-after.webp",
    categories: ["gas"],
  },
  {
    title: "30715 – Osburn 3500 WOOD INSERT W/5.5\" X 25\"#3\"; FOREVER FLEX LINER KIT",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    description: "Before-and-after project featuring 30715 – Osburn 3500 WOOD INSERT W/5.5\" X 25\"#3\"; FOREVER FLEX LINER KIT.",
    before: "/projects/audited-before-after/02-30715-osburn-3500-wood-insert-w-5-5-x-25-3-forever-flex-liner-kit-before.webp",
    after: "/projects/audited-before-after/02-30715-osburn-3500-wood-insert-w-5-5-x-25-3-forever-flex-liner-kit-after.webp",
    categories: ["custom"],
  },
  {
    title: "29164 Heat & Glo Supreme 30 with Tranquil Greige Herringbone Refractory",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 29164 Heat & Glo Supreme 30 with Tranquil Greige Herringbone Refractory.",
    before: "/projects/audited-before-after/03-29164-heat-and-glo-supreme-30-with-tranquil-greige-herringbone-refra-before.webp",
    after: "/projects/audited-before-after/03-29164-heat-and-glo-supreme-30-with-tranquil-greige-herringbone-refra-after.webp",
    categories: ["gas"],
  },
  {
    title: "28548 Grand Canyon 3BRN-30-NG-MVKEI-GCRK & AWOC30LOGS",
    fireplace: { label: "Gas Log Sets", href: "/fireplaces" },
    description: "Before-and-after project featuring 28548 Grand Canyon 3BRN-30-NG-MVKEI-GCRK & AWOC30LOGS.",
    before: "/projects/audited-before-after/04-28548-grand-canyon-3brn-30-ng-mvkei-gcrk-and-awoc30logs-before.webp",
    after: "/projects/audited-before-after/04-28548-grand-canyon-3brn-30-ng-mvkei-gcrk-and-awoc30logs-after.webp",
    categories: ["logset"],
  },
  {
    title: "28524 Grand Canyon 2 BRN-18 with AWOC18LOGS",
    fireplace: { label: "Gas Log Sets", href: "/fireplaces" },
    description: "Before-and-after project featuring 28524 Grand Canyon 2 BRN-18 with AWOC18LOGS.",
    before: "/projects/audited-before-after/05-28524-grand-canyon-2-brn-18-with-awoc18logs-before.webp",
    after: "/projects/audited-before-after/05-28524-grand-canyon-2-brn-18-with-awoc18logs-after.webp",
    categories: ["logset"],
  },
  {
    title: "28724 Heat & Glo Supreme 30 with Brick-TR",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 28724 Heat & Glo Supreme 30 with Brick-TR.",
    before: "/projects/audited-before-after/06-28724-heat-and-glo-supreme-30-with-brick-tr-before.webp",
    after: "/projects/audited-before-after/06-28724-heat-and-glo-supreme-30-with-brick-tr-after.webp",
    categories: ["gas"],
  },
  {
    title: "28147 Heat & Glo Supreme 35 with Brick-TR",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 28147 Heat & Glo Supreme 35 with Brick-TR.",
    before: "/projects/audited-before-after/07-28147-heat-and-glo-supreme-35-with-brick-tr-before.webp",
    after: "/projects/audited-before-after/07-28147-heat-and-glo-supreme-35-with-brick-tr-after.webp",
    categories: ["gas"],
  },
  {
    title: "29038 Barossa Old World Bianco",
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Before-and-after project featuring 29038 Barossa Old World Bianco.",
    before: "/projects/audited-before-after/08-29038-barossa-old-world-bianco-before.webp",
    after: "/projects/audited-before-after/08-29038-barossa-old-world-bianco-after.webp",
    categories: ["mantel"],
  },
  {
    title: "28 171 Pitcairn Travertine Kingsbury",
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Before-and-after project featuring 28 171 Pitcairn Travertine Kingsbury.",
    before: "/projects/audited-before-after/09-28-171-pitcairn-travertine-kingsbury-before.webp",
    after: "/projects/audited-before-after/09-28-171-pitcairn-travertine-kingsbury-after.webp",
    categories: ["mantel"],
  },
  {
    title: "28982 Modern Flames Orion Traditional 30",
    fireplace: { label: "Modern Flames Electric", href: "/fireplaces/modern-flames" },
    description: "Before-and-after project featuring 28982 Modern Flames Orion Traditional 30.",
    before: "/projects/audited-before-after/10-28982-modern-flames-orion-traditional-30-before.webp",
    after: "/projects/audited-before-after/10-28982-modern-flames-orion-traditional-30-after.webp",
    categories: ["electric"],
  },
  {
    title: "28529 Heat & Glo Supreme 30 with Birch Logs",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 28529 Heat & Glo Supreme 30 with Birch Logs.",
    before: "/projects/audited-before-after/11-28529-heat-and-glo-supreme-30-with-birch-logs-before.webp",
    after: "/projects/audited-before-after/11-28529-heat-and-glo-supreme-30-with-birch-logs-after.webp",
    categories: ["logset", "gas"],
  },
  {
    title: "28357 Heat & Glo Supreme 35 with Birch Logs",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 28357 Heat & Glo Supreme 35 with Birch Logs.",
    before: "/projects/audited-before-after/12-28357-heat-and-glo-supreme-35-with-birch-logs-before.webp",
    after: "/projects/audited-before-after/12-28357-heat-and-glo-supreme-35-with-birch-logs-after.webp",
    categories: ["logset", "gas"],
  },
  {
    title: "28929 Heat & Glo Supreme 35 with Woomera Old World",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Before-and-after project featuring 28929 Heat & Glo Supreme 35 with Woomera Old World.",
    before: "/projects/audited-before-after/13-28929-heat-and-glo-supreme-35-with-woomera-old-world-before.webp",
    after: "/projects/audited-before-after/13-28929-heat-and-glo-supreme-35-with-woomera-old-world-after.webp",
    categories: ["gas", "mantel"],
  },
  {
    title: "29014 Modern Flames Redstone 3626",
    fireplace: { label: "Modern Flames Electric", href: "/fireplaces/modern-flames" },
    description: "Before-and-after project featuring 29014 Modern Flames Redstone 3626.",
    before: "/projects/audited-before-after/14-29014-modern-flames-redstone-3626-before.webp",
    after: "/projects/audited-before-after/14-29014-modern-flames-redstone-3626-after.webp",
    categories: ["electric"],
  },
  {
    title: "27650 Heat & Glo Supreme 30 and Bolte Smooth Bianco",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Before-and-after project featuring 27650 Heat & Glo Supreme 30 and Bolte Smooth Bianco.",
    before: "/projects/audited-before-after/15-27650-heat-and-glo-supreme-30-and-bolte-smooth-bianco-before.webp",
    after: "/projects/audited-before-after/15-27650-heat-and-glo-supreme-30-and-bolte-smooth-bianco-after.webp",
    categories: ["gas", "mantel"],
  },
  {
    title: "28558 Heat & Glo Supreme-I30-BIR with Brick-MI30-TR",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 28558 Heat & Glo Supreme-I30-BIR with Brick-MI30-TR.",
    before: "/projects/audited-before-after/16-28558-heat-and-glo-supreme-i30-bir-with-brick-mi30-tr-before.webp",
    after: "/projects/audited-before-after/16-28558-heat-and-glo-supreme-i30-bir-with-brick-mi30-tr-after.webp",
    categories: ["gas"],
  },
  {
    title: "27960 Heat & Glo Supreme 35 with Iron Age Front New Bronze",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 27960 Heat & Glo Supreme 35 with Iron Age Front New Bronze.",
    before: "/projects/audited-before-after/17-27960-heat-and-glo-supreme-35-with-iron-age-front-new-bronze-before.webp",
    after: "/projects/audited-before-after/17-27960-heat-and-glo-supreme-35-with-iron-age-front-new-bronze-after.webp",
    categories: ["gas"],
  },
  {
    title: "2 8788 Reclaimed Beam and Masonry",
    description: "Before-and-after project featuring 2 8788 Reclaimed Beam and Masonry.",
    before: "/projects/audited-before-after/18-2-8788-reclaimed-beam-and-masonry-before.webp",
    after: "/projects/audited-before-after/18-2-8788-reclaimed-beam-and-masonry-after.webp",
    categories: ["custom"],
  },
  {
    title: "2 Heat & Glo 8163 Supreme 30",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 2 Heat & Glo 8163 Supreme 30.",
    before: "/projects/audited-before-after/19-2-heat-and-glo-8163-supreme-30-before.webp",
    after: "/projects/audited-before-after/19-2-heat-and-glo-8163-supreme-30-after.webp",
    categories: ["gas"],
  },
  {
    title: "27445 Bondi Smooth Le Marais",
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Before-and-after project featuring 27445 Bondi Smooth Le Marais.",
    before: "/projects/audited-before-after/20-27650-heat-and-glo-supreme-30-and-bolte-smooth-bianco-before.webp",
    after: "/projects/audited-before-after/20-27650-heat-and-glo-supreme-30-and-bolte-smooth-bianco-after.webp",
    categories: ["mantel"],
  },
  {
    title: "27964 Heat & Glo 6KX-TG with St. Tropez Smooth Kingsbury",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Before-and-after project featuring 27964 Heat & Glo 6KX-TG with St. Tropez Smooth Kingsbury.",
    before: "/projects/audited-before-after/23-28224-heat-and-glo-supreme-30-before.webp",
    after: "/projects/audited-before-after/23-28224-heat-and-glo-supreme-30-after.webp",
    categories: ["gas", "mantel"],
  },
  {
    title: "27971 Heat & Glo Supreme 35",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 27971 Heat & Glo Supreme 35.",
    before: "/projects/audited-before-after/25-27971-heat-and-glo-supreme-35-before.webp",
    after: "/projects/audited-before-after/25-27971-heat-and-glo-supreme-35-after.webp",
    categories: ["gas"],
  },
  {
    title: "28390 Sydney Mantel Cap Paint Grade",
    mantel: { label: "All Mantels", href: "/mantels" },
    description: "Before-and-after project featuring 28390 Sydney Mantel Cap Paint Grade.",
    before: "/projects/audited-before-after/26-28390-sydney-mantel-cap-paint-grade-before.webp",
    after: "/projects/audited-before-after/26-28390-sydney-mantel-cap-paint-grade-after.webp",
    categories: ["mantel"],
  },
  {
    title: "28407 Heat & Glo Supreme 30",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 28407 Heat & Glo Supreme 30.",
    before: "/projects/audited-before-after/27-28407-heat-and-glo-supreme-30-before.webp",
    after: "/projects/audited-before-after/27-28407-heat-and-glo-supreme-30-after.webp",
    categories: ["gas"],
  },
  {
    title: "26678 Heat & Glo 6KX-TG with Cannon Balls and Bolte Smooth London Fog",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Before-and-after project featuring 26678 Heat & Glo 6KX-TG with Cannon Balls and Bolte Smooth London Fog.",
    before: "/projects/audited-before-after/28-28527-grand-canyon-21-az-weathered-oak-logs-with-2brn-21-ng-mvei-gcr-before.webp",
    after: "/projects/audited-before-after/28-28527-grand-canyon-21-az-weathered-oak-logs-with-2brn-21-ng-mvei-gcr-after.webp",
    categories: ["gas", "mantel"],
  },
  {
    title: "26363 Heat & Glo 8KX-TG with Custom Precast Surround Paint Grade",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "All Mantels", href: "/mantels" },
    description: "Before-and-after project featuring 26363 Heat & Glo 8KX-TG with Custom Precast Surround Paint Grade.",
    before: "/projects/audited-before-after/30-26363-heat-and-glo-8kx-tg-with-custom-precast-surround-paint-grade-before.webp",
    after: "/projects/audited-before-after/30-26363-heat-and-glo-8kx-tg-with-custom-precast-surround-paint-grade-after.webp",
    categories: ["gas", "mantel", "custom"],
  },
  {
    title: "26743 Bolte Smooth Kingsbury – See-through FP installed by others",
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Before-and-after project featuring 26743 Bolte Smooth Kingsbury – See-through FP installed by others.",
    before: "/projects/audited-before-after/31-26743-bolte-smooth-kingsbury-see-through-fp-installed-by-others-before.webp",
    after: "/projects/audited-before-after/31-26743-bolte-smooth-kingsbury-see-through-fp-installed-by-others-after.webp",
    categories: ["mantel", "custom"],
  },
  {
    title: "26743 Bolte Smooth Kingsbury – See-through FP installed by others",
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Before-and-after project featuring 26743 Bolte Smooth Kingsbury – See-through FP installed by others.",
    before: "/projects/audited-before-after/32-26743-bolte-smooth-kingsbury-see-through-fp-installed-by-others-before.webp",
    after: "/projects/audited-before-after/32-26743-bolte-smooth-kingsbury-see-through-fp-installed-by-others-after.webp",
    categories: ["mantel", "custom"],
  },
  {
    title: "26008 Gosford Picture Frame Stone World Limestone - FP installed by others",
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Before-and-after project featuring 26008 Gosford Picture Frame Stone World Limestone - FP installed by others.",
    before: "/projects/audited-before-after/33-26008-gosford-picture-frame-stone-world-limestone-fp-installed-by-ot-before.webp",
    after: "/projects/audited-before-after/33-26008-gosford-picture-frame-stone-world-limestone-fp-installed-by-ot-after.webp",
    categories: ["mantel"],
  },
  {
    title: "25864 Clare Old World Kingsbury",
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Before-and-after project featuring 25864 Clare Old World Kingsbury.",
    before: "/projects/audited-before-after/34-25864-clare-old-world-kingsbury-before.webp",
    after: "/projects/audited-before-after/34-25864-clare-old-world-kingsbury-after.webp",
    categories: ["mantel"],
  },
  {
    title: "25761 Manly Smooth Bianco",
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Before-and-after project featuring 25761 Manly Smooth Bianco.",
    before: "/projects/audited-before-after/35-25761-manly-smooth-bianco-before.webp",
    after: "/projects/audited-before-after/35-25761-manly-smooth-bianco-after.webp",
    categories: ["mantel"],
  },
  {
    title: "27965 SimpliFire 36 inch and Mornington Smooth Kingsbury",
    fireplace: { label: "Electric Fireplaces", href: "/fireplaces/electric" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Before-and-after project featuring 27965 SimpliFire 36 inch and Mornington Smooth Kingsbury.",
    before: "/projects/audited-before-after/36-25466-barossa-travertine-milano-before.webp",
    after: "/projects/audited-before-after/36-25466-barossa-travertine-milano-after.webp",
    categories: ["electric", "mantel"],
  },
  {
    title: "2 7836 Bolte Smooth Kingsbury",
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "Before-and-after project featuring 2 7836 Bolte Smooth Kingsbury.",
    before: "/projects/audited-before-after/37-2-7836-bolte-smooth-kingsbury-before.webp",
    after: "/projects/audited-before-after/37-2-7836-bolte-smooth-kingsbury-after.webp",
    categories: ["mantel"],
  },
  {
    title: "2 Heat & Glo 8218 Supreme 30",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 2 Heat & Glo 8218 Supreme 30.",
    before: "/projects/audited-before-after/38-2-heat-and-glo-8218-supreme-30-before.webp",
    after: "/projects/audited-before-after/38-2-heat-and-glo-8218-supreme-30-after.webp",
    categories: ["gas"],
  },
  {
    title: "2 Heat & Glo 8112 Cosmo 30",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 2 Heat & Glo 8112 Cosmo 30.",
    before: "/projects/audited-before-after/39-2-heat-and-glo-8112-cosmo-30-before.webp",
    after: "/projects/audited-before-after/39-2-heat-and-glo-8112-cosmo-30-after.webp",
    categories: ["gas"],
  },
  {
    title: "2 Heat & Glo 7334 Supreme 30",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 2 Heat & Glo 7334 Supreme 30.",
    before: "/projects/audited-before-after/40-2-heat-and-glo-7334-supreme-30-before.webp",
    after: "/projects/audited-before-after/40-2-heat-and-glo-7334-supreme-30-after.webp",
    categories: ["gas"],
  },
  {
    title: "2 Heat & Glo 7818 Provident 30",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 2 Heat & Glo 7818 Provident 30.",
    before: "/projects/audited-before-after/41-2-heat-and-glo-7818-provident-30-before.webp",
    after: "/projects/audited-before-after/41-2-heat-and-glo-7818-provident-30-after.webp",
    categories: ["gas"],
  },
  {
    title: "27821 SimpliFire 25” Electric Insert",
    fireplace: { label: "Electric Fireplaces", href: "/fireplaces/electric" },
    description: "Before-and-after project featuring 27821 SimpliFire 25” Electric Insert.",
    before: "/projects/audited-before-after/42-27821-simplifire-25-electric-insert-before.webp",
    after: "/projects/audited-before-after/42-27821-simplifire-25-electric-insert-after.webp",
    categories: ["electric"],
  },
  {
    title: "27780 Heat & Glo Escape 35",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 27780 Heat & Glo Escape 35.",
    before: "/projects/audited-before-after/43-27780-heat-and-glo-escape-35-before.webp",
    after: "/projects/audited-before-after/43-27780-heat-and-glo-escape-35-after.webp",
    categories: ["gas"],
  },
  {
    title: "27670 Heat & Glo Supreme 35",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 27670 Heat & Glo Supreme 35.",
    before: "/projects/audited-before-after/44-27670-heat-and-glo-supreme-35-before.webp",
    after: "/projects/audited-before-after/44-27670-heat-and-glo-supreme-35-after.webp",
    categories: ["gas"],
  },
  {
    title: "27766 Heat & Glo Supreme 30",
    fireplace: { label: "Heat & Glo Gas Inserts", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 27766 Heat & Glo Supreme 30.",
    before: "/projects/audited-before-after/45-27766-heat-and-glo-supreme-30-before.webp",
    after: "/projects/audited-before-after/45-27766-heat-and-glo-supreme-30-after.webp",
    categories: ["gas"],
  },
  {
    title: "27779 Heat & Glo Escape 30 with Wood Beam and Masonry",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "Before-and-after project featuring 27779 Heat & Glo Escape 30 with Wood Beam and Masonry.",
    before: "/projects/audited-before-after/46-27779-heat-and-glo-escape-30-with-wood-beam-and-masonry-before.webp",
    after: "/projects/audited-before-after/46-27779-heat-and-glo-escape-30-with-wood-beam-and-masonry-after.webp",
    categories: ["gas", "custom"],
  },
  {
    title: "Heat & Glo Gas Insert Service & Repair",
    fireplace: { label: "Heat & Glo Service", href: "/fireplaces/heat-and-glo" },
    description: "Full service call with cleaning, inspection, and component replacement restoring the insert to like-new condition.",
    before: "/projects/service/service-28191-before.jpg",
    after: "/projects/service/service-28191-after.jpg",
    categories: ["gas"],
  },
  {
    title: "Superior DRT3540 Gas Fireplace + Clare Smooth Seaside Mantel",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "Complete fireplace replacement with a Superior DRT3540 gas fireplace and Clare Smooth Seaside precast mantel surround.",
    before: "/projects/service/superior-drt3540-before.jpg",
    after: "/projects/service/superior-drt3540-after.jpg",
    categories: ["gas", "mantel"],
  },
  {
    title: "28065 Napoleon NEFBD50HE – Clearion Elite 50 See-Through",
    fireplace: { label: "Napoleon Fireplaces", href: "/fireplaces/napoleon" },
    description: "New construction project featuring 28065 Napoleon NEFBD50HE – Clearion Elite 50 See-Through.",
    after: "/projects/audited-new-construction/01-28065-napoleon-nefbd50he-clearion-elite-50-see-through.webp",
    categories: ["newbuild", "electric", "gas", "custom"],
  },
  {
    title: "28065 Modern Flames OR52-MULTI – Orion 52” Multi Virtual Electric Fireplace",
    fireplace: { label: "Modern Flames Electric", href: "/fireplaces/modern-flames" },
    description: "New construction project featuring 28065 Modern Flames OR52-MULTI – Orion 52” Multi Virtual Electric Fireplace.",
    after: "/projects/audited-new-construction/02-28065-modern-flames-or52-multi-orion-52-multi-virtual-electric-firep.webp",
    categories: ["newbuild", "electric"],
  },
  {
    title: "26560 Heat & Glo PRIMO-II-60 See-Through",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "New construction project featuring 26560 Heat & Glo PRIMO-II-60 See-Through.",
    after: "/projects/audited-new-construction/03-26560-heat-and-glo-primo-ii-60-see-through.webp",
    categories: ["newbuild", "gas", "custom"],
  },
  {
    title: "26560 Heat & Glo PRIMO-II-60 See-Through",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "New construction project featuring 26560 Heat & Glo PRIMO-II-60 See-Through.",
    after: "/projects/audited-new-construction/04-26560-heat-and-glo-primo-ii-60-see-through.webp",
    categories: ["newbuild", "gas", "custom"],
  },
  {
    title: "29124 Pitcairn Old World Kingsbury",
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "New construction project featuring 29124 Pitcairn Old World Kingsbury.",
    after: "/projects/audited-new-construction/05-29124-pitcairn-old-world-kingsbury.webp",
    categories: ["newbuild", "mantel"],
  },
  {
    title: "29124 Pitcairn Old World Kingsbury",
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "New construction project featuring 29124 Pitcairn Old World Kingsbury.",
    after: "/projects/audited-new-construction/06-29124-pitcairn-old-world-kingsbury.webp",
    categories: ["newbuild", "mantel"],
  },
  {
    title: "NDV4236 with Woomera Paint Grade",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "New construction project featuring NDV4236 with Woomera Paint Grade.",
    after: "/projects/audited-new-construction/07-ndv4236-with-woomera-paint-grade.webp",
    categories: ["newbuild", "gas", "mantel"],
  },
  {
    title: "Ortal WTR42",
    fireplace: { label: "Ortal Fireplaces", href: "/fireplaces/ortal" },
    description: "New construction project featuring Ortal WTR42.",
    after: "/projects/audited-new-construction/08-ortal-wtr42.webp",
    categories: ["newbuild", "gas"],
  },
  {
    title: "Ortal WTR42",
    fireplace: { label: "Ortal Fireplaces", href: "/fireplaces/ortal" },
    description: "New construction project featuring Ortal WTR42.",
    after: "/projects/audited-new-construction/09-ortal-wtr42.webp",
    categories: ["newbuild", "gas"],
  },
  {
    title: "Napoleon LUXURIA 62 See-Through – LVX62N2N-1",
    fireplace: { label: "Napoleon Fireplaces", href: "/fireplaces/napoleon" },
    description: "New construction project featuring Napoleon LUXURIA 62 See-Through – LVX62N2N-1.",
    after: "/projects/audited-new-construction/10-napoleon-luxuria-62-see-through-lvx62n2n-1.webp",
    categories: ["newbuild", "gas", "custom"],
  },
  {
    title: "Flare Front Facing 60”",
    fireplace: { label: "Flare Fireplaces", href: "/fireplaces/flare" },
    description: "New construction project featuring Flare Front Facing 60”.",
    after: "/projects/audited-new-construction/11-flare-front-facing-60.webp",
    categories: ["newbuild", "gas"],
  },
  {
    title: "COSMO36-IFT-B - View 1",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "New construction project featuring COSMO36-IFT-B - View 1.",
    after: "/projects/audited-new-construction/12-1-cosmo36-ift-b-view-1.webp",
    categories: ["newbuild", "gas"],
  },
  {
    title: "COSMO36-IFT-B - View 2",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "New construction project featuring COSMO36-IFT-B - View 2.",
    after: "/projects/audited-new-construction/12-2-cosmo36-ift-b-view-2.webp",
    categories: ["newbuild", "gas"],
  },
  {
    title: "COSMO36-IFT-B - View 3",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "New construction project featuring COSMO36-IFT-B - View 3.",
    after: "/projects/audited-new-construction/12-3-cosmo36-ift-b-view-3.webp",
    categories: ["newbuild", "gas"],
  },
  {
    title: "25396 Heat & Glo True 42” Tranquil Greige with Padthaway Stone World Milano",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 25396 Heat & Glo True 42” Tranquil Greige with Padthaway Stone World Milano.",
    after: "/projects/audited-new-construction/13-25396-heat-and-glo-true-42-tranquil-greige-with-padthaway-stone-worl.webp",
    categories: ["newbuild", "gas", "mantel"],
  },
  {
    title: "25725 Flare 60 High Double Glass",
    fireplace: { label: "Flare Fireplaces", href: "/fireplaces/flare" },
    description: "New construction project featuring 25725 Flare 60 High Double Glass.",
    after: "/projects/audited-new-construction/14-25725-flare-60-high-double-glass.webp",
    categories: ["newbuild", "gas"],
  },
  {
    title: "25725 Flare 60 High Double Glass",
    fireplace: { label: "Flare Fireplaces", href: "/fireplaces/flare" },
    description: "New construction project featuring 25725 Flare 60 High Double Glass.",
    after: "/projects/audited-new-construction/15-25725-flare-60-high-double-glass.webp",
    categories: ["newbuild", "gas"],
  },
  {
    title: "28194 MEZZO36-C with Quattro Front",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "New construction project featuring 28194 MEZZO36-C with Quattro Front.",
    after: "/projects/audited-new-construction/16-28194-mezzo36-c-with-quattro-front.webp",
    categories: ["newbuild", "gas"],
  },
  {
    title: "28194 MEZZO36-C with Quattro Front",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "New construction project featuring 28194 MEZZO36-C with Quattro Front.",
    after: "/projects/audited-new-construction/17-28194-mezzo36-c-with-quattro-front.webp",
    categories: ["newbuild", "gas"],
  },
  {
    title: "28341 Heat & Glo SL-9-IFT",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    description: "New construction project featuring 28341 Heat & Glo SL-9-IFT.",
    after: "/projects/audited-new-construction/18-28341-heat-and-glo-sl-9-ift.webp",
    categories: ["newbuild", "gas"],
  },
  {
    title: "28195 Modern Flames Orion 60” Slim",
    fireplace: { label: "Modern Flames Electric", href: "/fireplaces/modern-flames" },
    description: "New construction project featuring 28195 Modern Flames Orion 60” Slim.",
    after: "/projects/audited-new-construction/19-28195-modern-flames-orion-60-slim.webp",
    categories: ["newbuild", "electric"],
  },
  {
    title: "27702 ODCOUG-42TS and Nullarbor with Darlinghurst Beam Stone World London Fog",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 27702 ODCOUG-42TS and Nullarbor with Darlinghurst Beam Stone World London Fog.",
    after: "/projects/audited-new-construction/20-27702-odcoug-42ts-and-nullarbor-with-darlinghurst-beam-stone-world-l.webp",
    categories: ["newbuild", "gas", "mantel", "custom"],
  },
  {
    title: "27704 ODCOUG-42TS and Bolte with Darlinghurst Beam Stone World London Fog",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 27704 ODCOUG-42TS and Bolte with Darlinghurst Beam Stone World London Fog.",
    after: "/projects/audited-new-construction/21-27704-odcoug-42ts-and-bolte-with-darlinghurst-beam-stone-world-londo.webp",
    categories: ["newbuild", "gas", "mantel", "custom"],
  },
  {
    title: "26310 ODCOUG-42TS with HD Logs and Barossa Picture Frame Smooth GFRC",
    fireplace: { label: "Gas Log Sets", href: "/fireplaces" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 26310 ODCOUG-42TS with HD Logs and Barossa Picture Frame Smooth GFRC.",
    after: "/projects/audited-new-construction/22-26310-odcoug-42ts-with-hd-logs-and-barossa-picture-frame-smooth-gfrc.webp",
    categories: ["newbuild", "logset", "gas", "mantel"],
  },
  {
    title: "24664 Napoleon Element and Turin Paint Grade",
    fireplace: { label: "Napoleon Fireplaces", href: "/fireplaces/napoleon" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "New construction project featuring 24664 Napoleon Element and Turin Paint Grade.",
    after: "/projects/audited-new-construction/23-24664-napoleon-element-and-turin-paint-grade.webp",
    categories: ["newbuild", "gas", "mantel"],
  },
  {
    title: "23853 Covington Paint Grade",
    mantel: { label: "All Mantels", href: "/mantels" },
    description: "New construction project featuring 23853 Covington Paint Grade.",
    after: "/projects/audited-new-construction/24-23853-covington-paint-grade.webp",
    categories: ["newbuild", "mantel"],
  },
  {
    title: "23230 ST-DV36IN and Bolte Paint Grade",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 23230 ST-DV36IN and Bolte Paint Grade.",
    after: "/projects/audited-new-construction/25-23230-st-dv36in-and-bolte-paint-grade.webp",
    categories: ["newbuild", "gas", "mantel"],
  },
  {
    title: "24272 Napoleon Vector 50” and Darlinghurst Smooth Le Marais",
    fireplace: { label: "Napoleon Fireplaces", href: "/fireplaces/napoleon" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 24272 Napoleon Vector 50” and Darlinghurst Smooth Le Marais.",
    after: "/projects/audited-new-construction/26-24272-napoleon-vector-50-and-darlinghurst-smooth-le-marais.webp",
    categories: ["newbuild", "gas", "mantel"],
  },
  {
    title: "24272 Napoleon Vector 50 ” and Hackney Old World Le Marais",
    fireplace: { label: "Napoleon Fireplaces", href: "/fireplaces/napoleon" },
    mantel: { label: "Traditional Mantels", href: "/mantels/traditional" },
    description: "New construction project featuring 24272 Napoleon Vector 50 ” and Hackney Old World Le Marais.",
    after: "/projects/audited-new-construction/27-24272-napoleon-vector-50-and-hackney-old-world-le-marais.webp",
    categories: ["newbuild", "gas", "mantel"],
  },
  {
    title: "23974 NDV4842I-B and Bolte Smooth Seaside",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 23974 NDV4842I-B and Bolte Smooth Seaside.",
    after: "/projects/audited-new-construction/28-23974-ndv4842i-b-and-bolte-smooth-seaside.webp",
    categories: ["newbuild", "gas", "mantel"],
  },
  {
    title: "23974 NDV4842I-B with WTB42 and Bolte Smooth Seaside",
    fireplace: { label: "Gas Fireplaces", href: "/fireplaces/gas-inserts" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 23974 NDV4842I-B with WTB42 and Bolte Smooth Seaside.",
    after: "/projects/audited-new-construction/29-23974-ndv4842i-b-with-wtb42-and-bolte-smooth-seaside.webp",
    categories: ["newbuild", "gas", "mantel"],
  },
  {
    title: "24664 Napoleon Element and Turin Smooth GFRC",
    fireplace: { label: "Napoleon Fireplaces", href: "/fireplaces/napoleon" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 24664 Napoleon Element and Turin Smooth GFRC.",
    after: "/projects/audited-new-construction/30-24664-napoleon-element-and-turin-smooth-gfrc.webp",
    categories: ["newbuild", "gas", "mantel"],
  },
  {
    title: "26077 Padthaway Smooth Pebble Beach",
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 26077 Padthaway Smooth Pebble Beach.",
    after: "/projects/audited-new-construction/31-26077-padthaway-smooth-pebble-beach.webp",
    categories: ["newbuild", "mantel"],
  },
  {
    title: "26077 Tonso Smooth Bianco",
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 26077 Tonso Smooth Bianco.",
    after: "/projects/audited-new-construction/32-26077-tonso-smooth-bianco.webp",
    categories: ["newbuild", "mantel"],
  },
  {
    title: "24828 Napoleon Element and Bolte Smooth GFRC",
    fireplace: { label: "Napoleon Fireplaces", href: "/fireplaces/napoleon" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 24828 Napoleon Element and Bolte Smooth GFRC.",
    after: "/projects/audited-new-construction/33-24828-napoleon-element-and-bolte-smooth-gfrc.webp",
    categories: ["newbuild", "gas", "mantel"],
  },
  {
    title: "22871 SL-9X-IFT-S and Darlinghurst Beam Paint Grade",
    fireplace: { label: "Heat & Glo Fireplaces", href: "/fireplaces/heat-and-glo" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 22871 SL-9X-IFT-S and Darlinghurst Beam Paint Grade.",
    after: "/projects/audited-new-construction/34-22871-sl-9x-ift-s-and-darlinghurst-beam-paint-grade.webp",
    categories: ["newbuild", "gas", "mantel", "custom"],
  },
  {
    title: "22871 ODCOUG-42PT with HD Logs and Darlinghurst Beam Paint Grade",
    fireplace: { label: "Gas Log Sets", href: "/fireplaces" },
    mantel: { label: "Contemporary Mantels", href: "/mantels/contemporary" },
    description: "New construction project featuring 22871 ODCOUG-42PT with HD Logs and Darlinghurst Beam Paint Grade.",
    after: "/projects/audited-new-construction/35-22871-odcoug-42pt-with-hd-logs-and-darlinghurst-beam-paint-grade.webp",
    categories: ["newbuild", "logset", "gas", "mantel", "custom"],
  }
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
      {project.comparisonImage ? (
        <div className="relative aspect-[1200/620] bg-stone-50">
          <Image
            src={project.after}
            alt={`${project.title} — Before and after`}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      ) : isBeforeAfter ? (
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
