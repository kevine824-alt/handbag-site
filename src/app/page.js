import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-0">

      {/* Split Hero - Full Width */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-b">
        <div className="grid h-[clamp(480px,62vh,680px)] lg:grid-cols-2 overflow-hidden">

          {/* Text panel */}
          <div className="flex h-full items-center bg-stone-50 px-6 sm:px-10 lg:px-16">
            <div className="max-w-xl space-y-6 py-10 lg:py-0">

              <p className="text-xs font-semibold tracking-widest text-orange-600 uppercase">
                Handcrafted &nbsp;·&nbsp; One of one &nbsp;·&nbsp; Unapologetically nerdy
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl leading-tight">
                Every stitch<br />tells a story.
              </h1>

              <p className="text-sm leading-relaxed text-gray-600 border-l-2 border-orange-500 pl-4 italic">
                "Your bag should be as unique as your collection. So we make sure it is."
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700 transition"
                >
                  View Gallery
                </Link>
                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900 transition"
                >
                  Our Story →
                </Link>
              </div>

            </div>
          </div>

          {/* Image panel */}
          <div className="relative h-full bg-stone-50 flex items-center justify-center p-8">
            <Image
              src="/images/hero-logo.png"
              alt="Sew Nerdy Bags"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

        </div>
      </div>

      {/* Stats bar */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-3 divide-x divide-gray-700">
            <div className="py-7 text-center">
              <div className="text-2xl font-semibold text-orange-500">30+</div>
              <div className="text-xs text-gray-400 mt-1 tracking-wide uppercase">Years of craft experience</div>
            </div>
            <div className="py-7 text-center">
              <div className="text-2xl font-semibold text-orange-500">1 of 1</div>
              <div className="text-xs text-gray-400 mt-1 tracking-wide uppercase">Every bag is unique</div>
            </div>
            <div className="py-7 text-center">
              <div className="text-2xl font-semibold text-orange-500">Family</div>
              <div className="text-xs text-gray-400 mt-1 tracking-wide uppercase">Mother &amp; daughter studio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16 pt-14 pb-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">
              Made in small batches
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Each piece is designed and constructed with care — no mass
              production, no shortcuts.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">
              Built for real life
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Practical shapes, durable stitching, and details that hold up to
              daily use.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">
              One-of-a-kind fabrics
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Patterns and materials chosen to feel elevated, playful, and a
              little nerdy — in the best way.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16 pb-10">
        <div className="flex flex-col items-start justify-between gap-4 border-t pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-600">
            Ready to find your one-of-one piece?
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700 transition"
          >
            Browse the Gallery
          </Link>
        </div>
      </div>

    </section>
  );
}
