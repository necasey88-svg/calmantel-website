import { notFound } from "next/navigation";
import Link from "next/link";
import { insightPosts, getInsightPost } from "@/lib/insights-data";
import ConsultationCTA from "@/components/ConsultationCTA";

export function generateStaticParams() {
  return insightPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsightPost(slug);
  if (!post) return {};
  return {
    title: `${post.title}`,
    description: post.excerpt,
  };
}

export default async function InsightPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsightPost(slug);
  if (!post) notFound();

  const otherPosts = insightPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F9F7F3] border-b border-[color:var(--sand-deep)] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[color:var(--ink)]/55 mb-4">
            <Link href="/insights" className="hover:text-[color:var(--accent)] transition-colors">Insights</Link>
            <span className="mx-2">›</span>
            <span className="text-[color:var(--ink)]/80">{post.category}</span>
          </nav>
          <span className="inline-block bg-[#EFE7DA] text-[color:var(--accent)] text-xs font-medium rounded-sm px-3 py-0.5 mb-4">
            {post.category}
          </span>
          <h1
            className="text-3xl md:text-4xl font-medium mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-[color:var(--ink)]/55 text-sm">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-stone prose-lg max-w-none">
          {post.content.map((block, i) => (
            <div key={i} className="mb-6">
              {block.heading && (
                <h2
                  className="text-xl font-medium text-stone-900 mb-3 mt-8"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {block.heading}
                </h2>
              )}
              <p className="text-stone-600 leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>

        {/* Author strip */}
        <div className="mt-12 pt-8 border-t border-stone-200 flex items-center gap-4">
          <div className="w-10 h-10 rounded-sm bg-[#EFE7DA] flex items-center justify-center text-[color:var(--accent)] font-medium text-sm flex-shrink-0">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium text-stone-900">{post.author}</p>
            <p className="text-xs text-[color:var(--ink)]/55">California Mantel &amp; Fireplace</p>
          </div>
          <span className="ml-auto text-xs text-[color:var(--ink)]/55">{post.date}</span>
        </div>
      </section>

      {/* More articles */}
      {otherPosts.length > 0 && (
        <section className="bg-stone-50 border-t border-stone-100 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-xl font-medium text-stone-900 mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              More from Our Blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group border border-stone-200 rounded-sm p-5 bg-white hover:border-[color:var(--accent)] hover:shadow-sm transition-all block"
                >
                  <span className="text-xs font-medium bg-[#EFE7DA] text-[color:var(--accent)] rounded-sm px-2.5 py-0.5 mb-3 inline-block">
                    {p.category}
                  </span>
                  <h3
                    className="text-base font-medium text-stone-900 leading-snug group-hover:text-[color:var(--accent)] transition-colors mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[color:var(--ink)]/55 text-xs">{p.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultationCTA />
    </>
  );
}
