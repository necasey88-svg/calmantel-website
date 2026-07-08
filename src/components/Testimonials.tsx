import Link from "next/link";

type Review = { name: string; meta: string; quote: string };

// Real 5-star Google reviews for California Mantel & Fireplace.
const reviews: Review[] = [
  {
    name: "Don Gonsalves",
    meta: "Local Guide · 20 reviews",
    quote:
      "A few years ago, I used California Mantel & Fireplace to repair my 20+ year old gas fireplace insert. The technician was excellent. This year I decided to replace that old insert with a more efficient unit — I spoke with Marcus, who provided a few great options. Ryan and Semi were the install team and did a fantastic job. Ryan came out a week before and reviewed the whole job with me. The installation went perfectly from start to finish, and Ryan walked me through the new remote afterward. Working with CMF has been a great experience. I will definitely recommend them to my friends!",
  },
  {
    name: "James Bair",
    meta: "11 reviews · 2 photos",
    quote:
      "California Mantel & Fireplace did a great job with install of two fireplace inserts in our 1940 SF building. It turns out there's a lot to think about when inserting a new gas unit into an old building, and we felt like we got great counsel the whole way through the process from Chris and team. Highly recommend them!",
  },
  {
    name: "Carissa Talmadge",
    meta: "Local Guide · 12 reviews",
    quote:
      "Very prompt and professional! Serviced and replaced our fireplace mechanism. Good communication with the office. I like that you get text updates. All in all, great company!",
  },
  {
    name: "Keith Durkin",
    meta: "1 review",
    quote:
      "Our new fireplace and mantel from California Mantel & Fireplace look fantastic! Our old wood-burning fireplace needed updating and we wanted to convert it to gas with an insert. Andrew and Melanie were very helpful and patient in the showroom, answering dozens of questions. We are so thankful for all the design assistance and support Melanie provided for our new mantel and hearth. CM&F demo'ed our entire existing fireplace and did the complete install. The installation crew was professional, courteous, efficient, and careful — special thanks to Ryan, Jose, and Buck. We highly recommend them!",
  },
  {
    name: "Ravi Oswal",
    meta: "8 reviews",
    quote:
      "Was looking for a gas fireplace insert. Cal Mantel had the best price for Heat n Glo. Troy came out to our house to help decide the model and size of the insert and educate the contractor on how to prep for installation. Their installation team, Ryan and Jason, installed the insert in a very smooth and quick process. Overall, very pleased with their service and professionalism. Highly recommended!",
  },
  {
    name: "Sharon Arnold",
    meta: "7 reviews",
    quote:
      "Very professional from start to finish, from the scheduler to the two technicians who checked and cleaned my gas fireplace. The technician was very knowledgeable, informative, protected my hardwood floors, and wore booties. The older gentleman had a young assistant with him, and I noticed how generous he was in sharing his extensive knowledge — it speaks volumes about his character. I highly recommend California Mantel & Fireplace.",
  },
  {
    name: "Andrew Hoffmann",
    meta: "1 review",
    quote:
      "When doing a remodel, things happen and setbacks occur. The team at Cal Mantel solved every issue and was more than gracious in doing so. My wife and I could not be happier — from the assessment, to install, to clean up. Could not be happier.",
  },
  {
    name: "Robert Assini",
    meta: "4 reviews",
    quote: "A great team of people. We had a special need and they came through.",
  },
  {
    name: "Reem Balat",
    meta: "2 reviews",
    quote:
      "My mom recently had a new mantel installed and she was very happy with the service — from the sales team to the installation team. Excellent service.",
  },
  {
    name: "Parimal Sheth",
    meta: "8 reviews",
    quote: "Very conscientious. Answered all questions. Great patience.",
  },
];

function Stars() {
  return (
    <span className="inline-flex text-[color:var(--accent)]" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.958a1 1 0 00-.363-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
        {/* Intro */}
        <div className="lg:col-span-1">
          <p className="uppercase tracking-[0.28em] text-[color:var(--accent)] text-xs mb-4">
            Reviews
          </p>
          <h2
            className="text-4xl md:text-5xl font-medium text-[color:var(--ink)] tracking-tight leading-[1.1] mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our Clients Are Saying
          </h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            Rated <span className="font-semibold text-[color:var(--ink)]">4.6 ★</span> across
            226+ Google reviews from homeowners, designers, and builders across California.
          </p>
          <Link
            href="https://www.google.com/search?q=California+Mantel+%26+Fireplace+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white px-7 py-3 rounded-full font-medium tracking-wide transition-colors"
          >
            Read More on Google →
          </Link>
        </div>

        {/* Masonry of reviews */}
        <div className="lg:col-span-2 columns-1 md:columns-2 gap-6 [column-fill:_balance]">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="mb-6 break-inside-avoid rounded-2xl border border-stone-200/80 bg-[#F9F7F3] p-7"
            >
              <div className="flex items-center justify-between mb-4">
                <Stars />
                <span className="text-[11px] uppercase tracking-widest text-stone-400">Google</span>
              </div>
              <blockquote className="text-stone-600 leading-relaxed text-[15px]">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-stone-200/70 pt-4">
                <p className="font-semibold text-[color:var(--ink)]">{r.name}</p>
                <p className="text-xs text-stone-400">{r.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
