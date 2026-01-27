import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* Split Hero - Full Width */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-b">
        <div className="grid h-[clamp(440px,58vh,600px)] lg:h-[clamp(500px,60vh,680px)] lg:grid-cols-2 overflow-hidden">
          <div className="flex h-full items-center bg-stone-100 px-6 sm:px-10 lg:px-16">
            <div className="max-w-xl space-y-6 py-10 lg:py-0">
              <p className="text-base font-serif italic tracking-wide text-orange-600">
  One-of-One Handcrafted Experience
</p>

              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Handmade bags with personality.
              </h1>

              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Thoughtful details, durable construction, and fabrics that feel
                like you. Browse the gallery to see current pieces.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
                >
                  View Gallery
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center px-2 py-3 text-sm font-semibold text-orange-700 hover:text-orange-800 transition"
                >
                  See what’s new →
                </Link>
              </div>
            </div>
          </div>

          {/* Image panel */}
          <div className="relative h-full">
           <Image
  src="/images/hero-bag.png"
  alt="Handcrafted bag"
  fill
  priority
  className="object-cover scale-[1.08]"
  style={{ objectPosition: "50% 60%" }}
  sizes="(min-width: 1024px) 50vw, 100vw"
/>
          </div>
        </div>
      </div>

      {/* Supporting content (safe, minimal) */}
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">
              Made in small batches
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Each piece is designed and constructed with care—no mass
              production.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">
              Built for real life
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Practical shapes, durable stitching, and details that hold up to
              daily use.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">
              One-of-a-kind fabrics
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Patterns and materials chosen to feel calm, elevated, and a little
              nerdy—in the best way.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16 pb-6">
        <div className="flex flex-col items-start justify-between gap-4 border-t pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-700">
            Ready to browse current bags?
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            Go to Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}