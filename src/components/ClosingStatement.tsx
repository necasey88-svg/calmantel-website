import Link from "next/link";
import Image from "next/image";

export default function ClosingStatement() {
  return (
    <section className="relative min-h-[72vh] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/brands/ortal/room-mountain-cabin.jpg"
        alt="A custom fireplace as the centerpiece of a light-filled living room"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-medium leading-[1.12] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          The Heart of Every Home Starts Here
        </h2>
        <p className="text-white/85 leading-relaxed max-w-2xl mx-auto mb-10">
          For nearly four decades, California Mantel &amp; Fireplace has designed and built
          fireplaces that become the centerpiece of family gatherings, quiet evenings, and
          lasting memories.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/mantels"
            className="bg-white text-[color:var(--ink)] hover:bg-white/90 px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors"
          >
            Explore Collections
          </Link>
          <Link
            href="/booking"
            className="border border-white/70 text-white hover:bg-white hover:text-[color:var(--ink)] px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
