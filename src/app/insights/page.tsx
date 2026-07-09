import Link from "next/link";
import Image from "next/image";
import EditorialPageHero from "@/components/EditorialPageHero";

export const metadata = {
  title: "Insights | California Mantel & Fireplace",
  description:
    "Expert advice on fireplaces, mantels, installation, and design from the California Mantel & Fireplace team.",
};

const posts = [
  {
    slug: "modern-fireplace-design-trends-2026",
    title: "Modern Fireplace Design Trends: 2026 Edition",
    excerpt:
      "Linear fireplaces, smart home integration, eco-conscious options, and bold new materials — here's what's shaping contemporary hearth design this year.",
    date: "April 28, 2026",
    author: "Natalie Casey",
    category: "Design Trends",
    image: "/brands/ortal/wilderness-44h-room.png",
  },
  {
    slug: "how-to-prep-your-fireplace-for-winter",
    title: "How to Prep Your Fireplace for Winter: A California Homeowner's Guide",
    excerpt:
      "Before you light that first spark of the season, your fireplace deserves a little attention. Here's your step-by-step winter-ready checklist.",
    date: "October 22, 2025",
    author: "April Anne Abundo",
    category: "Maintenance",
    image: "/brands/ortal/room-mountain-cabin.jpg",
  },
  {
    slug: "5-fireplace-design-trends-for-california-homes",
    title: "5 Fireplace Design Trends for California Homes",
    excerpt:
      "From minimalist linear designs and bold stone surrounds to eco-friendly electric and ventless options — what's hot in California right now.",
    date: "October 1, 2025",
    author: "April Anne Abundo",
    category: "Design Trends",
    image: "/brands/ortal/room-boho.jpg",
  },
  {
    slug: "gas-vs-wood-fireplaces",
    title: "Gas vs. Wood Fireplaces: Which One Is Right for Your Home?",
    excerpt:
      "Gas fireplaces offer push-button convenience and efficiency. Wood delivers crackling authenticity. Here's how to decide which is right for you.",
    date: "May 28, 2019",
    author: "Justin Japhet Devera",
    category: "Buying Guide",
    image: "/brands/ortal/room-brick-rustic.jpg",
  },
  {
    slug: "how-to-maintain-your-gas-fireplace",
    title: "How to Maintain Your Gas Fireplace for Safe and Efficient Use",
    excerpt:
      "Routine maintenance keeps your fireplace operating safely and extends its lifespan. Here's what to clean, inspect, and when to call a professional.",
    date: "May 28, 2019",
    author: "Justin Japhet Devera",
    category: "Maintenance",
    image: "/brands/ortal/room-green-traditional.jpg",
  },
];

export default function InsightsPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Journal"
        title="Notes on fireplaces, mantels, and home design."
        description="Guidance from the California Mantel & Fireplace team on fireplace planning, design direction, maintenance, and material choices."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group border border-[color:var(--sand-deep)] overflow-hidden hover:border-[color:var(--accent)] transition-all block"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium bg-[color:var(--sand-deep)] text-[color:var(--accent-dark)] px-3 py-0.5">
                    {post.category}
                  </span>
                  <span className="text-xs text-stone-400">{post.date}</span>
                </div>
                <h2
                  className="text-lg font-medium text-stone-900 mb-2 leading-snug group-hover:text-[color:var(--accent)] transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400">{post.author}</span>
                  <span className="text-[color:var(--accent)] text-sm font-medium group-hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#F9F7F3] py-14 text-center border-t border-[color:var(--sand-deep)]">
        <h2
          className="text-2xl font-medium text-stone-900 mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Have a question about your fireplace?
        </h2>
        <p className="text-stone-500 mb-6">
          Our experts are happy to help — request a project guidance today.
        </p>
        <Link
          href="/estimate"
          className="inline-block bg-[color:var(--ink)] hover:bg-black text-white px-8 py-3.5 font-medium transition-colors"
        >
          Request Project Estimate
        </Link>
      </section>
    </>
  );
}
