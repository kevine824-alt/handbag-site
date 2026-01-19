import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            One-of-a-kind handcrafted handbags—made with intention.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            A family-run studio creating 1-of-1 bags using premium materials and
            serious craftsmanship. Each piece is designed to feel personal, lasting,
            and unlike anything else.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/commission"
              className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white font-medium hover:opacity-90"
            >
              Commission a Bag
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 font-medium hover:bg-gray-50"
            >
              Browse the Gallery
            </Link>
          </div>

          <div className="text-sm text-gray-600 pt-2">
            No online shop (yet). We design and price commissions through a free
            consultation.
          </div>
        </div>

        {/* Image placeholder */}
        <div className="rounded-xl border bg-gray-50 h-72 md:h-96 flex items-center justify-center text-gray-500">
          Hero image placeholder
        </div>
      </section>

      {/* Value props */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6 space-y-2">
          <h2 className="text-lg font-semibold">Truly one-of-one</h2>
          <p className="text-gray-700">
            Every bag is unique—crafted as a single piece, not a repeated design.
          </p>
        </div>

        <div className="rounded-xl border p-6 space-y-2">
          <h2 className="text-lg font-semibold">Studio craftsmanship</h2>
          <p className="text-gray-700">
            Built with premium materials, careful construction, and a finish you can
            feel.
          </p>
        </div>

        <div className="rounded-xl border p-6 space-y-2">
          <h2 className="text-lg font-semibold">Made by a family team</h2>
          <p className="text-gray-700">
            A mother/daughter studio with 10+ years of experience and a loyal
            following from major shows.
          </p>
        </div>
      </section>

      {/* Featured work */}
      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Featured pieces</h2>
          <Link href="/gallery" className="text-sm underline underline-offset-4">
            View full gallery
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Piece One", "Piece Two", "Piece Three"].map((label) => (
            <div
              key={label}
              className="rounded-xl border overflow-hidden bg-white"
            >
              <div className="h-48 bg-gray-50 flex items-center justify-center text-gray-500">
                Photo placeholder
              </div>
              <div className="p-4">
                <div className="font-medium">{label}</div>
                <div className="text-sm text-gray-600">
                  Handcrafted • Premium materials • One-of-one
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story teaser + CTA */}
      <section className="rounded-2xl border p-8 md:p-10 grid gap-8 md:grid-cols-2 items-center bg-white">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Our studio story</h2>
          <p className="text-gray-700 leading-relaxed">
            We’re a small studio, not a factory. Each bag is designed, built, and
            finished by hand—with attention to details that mass-market brands skip.
          </p>
          <Link href="/our-story" className="underline underline-offset-4">
            Meet the makers
          </Link>
        </div>

        <div className="rounded-xl border bg-gray-50 h-56 flex items-center justify-center text-gray-500">
          Studio photo placeholder
        </div>
      </section>

      {/* Testimonials / social proof */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">What customers say</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            "“The craftsmanship is unreal. It feels like art you can carry.”",
            "“I’ve never owned anything like it—people stop me constantly.”",
            "“They nailed the vibe. The consultation made it easy and fun.”",
          ].map((quote) => (
            <div key={quote} className="rounded-xl border p-6 text-gray-700">
              {quote}
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-600">
          (We can add a “Notable clients” section here later if you want it on the
          homepage.)
        </div>
      </section>

      {/* Mailing list CTA */}
      <section className="rounded-2xl border p-8 md:p-10 bg-gray-50">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Stay in the loop</h2>
            <p className="text-gray-700">
              Get updates on new work and upcoming shows. Starting simple—always
              tasteful.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/mailing-list"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 font-medium hover:bg-gray-100"
            >
              Join the Mailing List
            </Link>
            <Link
              href="/shows"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium underline underline-offset-4"
            >
              See upcoming shows
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="rounded-2xl border p-8 md:p-10 bg-white">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Ready for something made for you?</h2>
          <p className="text-gray-700 max-w-2xl">
            Tell us what you’re drawn to—style, color, vibe, or occasion—and we’ll
            follow up to schedule a free consultation.
          </p>
          <Link
            href="/commission"
            className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white font-medium hover:opacity-90"
          >
            Start a Commission
          </Link>
        </div>
      </section>
    </div>
  );
}
