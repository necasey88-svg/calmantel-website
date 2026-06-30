import Link from "next/link";

const posts = [
  {
    title: "Gas vs. Electric Fireplaces: Which Is Right for Your Home?",
    excerpt:
      "We break down the key differences between gas and electric fireplaces to help you make the best choice for your lifestyle and home.",
    date: "May 2025",
    category: "Buying Guide",
  },
  {
    title: "How to Choose a Fireplace Mantel Style",
    excerpt:
      "From contemporary to traditional, beams to ornate carved surrounds — here's how to match a mantel to your home's architecture.",
    date: "April 2025",
    category: "Design Tips",
  },
  {
    title: "Converting a Wood-Burning Fireplace to Gas",
    excerpt:
      "Everything you need to know about converting your existing wood-burning fireplace to a cleaner, more efficient gas insert.",
    date: "March 2025",
    category: "Installation",
  },
  {
    title: "Top Fireplace Trends for 2025",
    excerpt:
      "Linear designs, outdoor fireplaces, and two-sided installations are leading the way this year. Here's what's hot.",
    date: "January 2025",
    category: "Trends",
  },
  {
    title: "Caring for Your Precast Concrete Mantel",
    excerpt:
      "Simple maintenance tips to keep your precast concrete mantel looking beautiful for years to come.",
    date: "December 2024",
    category: "Maintenance",
  },
  {
    title: "Outdoor Fireplace Ideas for California Homes",
    excerpt:
      "California's mild climate is perfect for outdoor fireplaces. Get inspired with these stunning backyard and patio designs.",
    date: "October 2024",
    category: "Outdoor",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Tips, Trends & Guides
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Insights
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            Expert advice on fireplaces, mantels, installation, and design — from
            the California Mantel &amp; Fireplace team.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-stone-100 flex items-center justify-center text-4xl">
                📰
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold bg-amber-100 text-amber-800 rounded-full px-3 py-0.5">
                    {post.category}
                  </span>
                  <span className="text-xs text-stone-400">{post.date}</span>
                </div>
                <h2
                  className="text-lg font-bold text-stone-900 mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-amber-700 text-sm font-semibold hover:underline cursor-pointer">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-14 text-center">
        <h2
          className="text-2xl font-bold text-stone-900 mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Have a question about your fireplace?
        </h2>
        <p className="text-stone-500 mb-6">
          Our experts are happy to help — request a free estimate today.
        </p>
        <Link
          href="/estimate"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3.5 rounded font-semibold transition-colors"
        >
          Request Estimate
        </Link>
      </section>
    </>
  );
}
