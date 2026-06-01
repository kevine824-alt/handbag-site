import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-0">

      {/* Hero - Full Width */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-b">

        {/* Mobile hero — logo on top, text below */}
        <div className="flex flex-col items-center px-6 pt-8 pb-10 lg:hidden" style={{ backgroundImage: "url('/images/parchment.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <Image
            src="/images/hero-logo.png"
            alt="Sew Nerdy Bags"
            width={220}
            height={220}
            priority
            className="mb-6"
          />
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-4" style={{ color: "#92400e", textShadow: "0 1px 2px rgba(255,255,255,0.6)" }}>
            Handcrafted &nbsp;·&nbsp; One of one &nbsp;·&nbsp; Unapologetically nerdy
          </p>
          <h1 className="text-3xl font-semibold tracking-tight leading-tight text-center mb-4" style={{ color: "#1c1917", textShadow: "0 1px 3px rgba(255,255,255,0.7)" }}>
            Every stitch tells a story.
          </h1>
          <p className="w-full text-sm leading-relaxed border-l-2 border-orange-600 pl-4 italic mb-6" style={{ color: "#292524", textShadow: "0 1px 2px rgba(255,255,255,0.6)" }}>
            "Your bag should be as unique as your collection. So we make sure it is."
          </p>
          <div className="flex flex-wrap gap-4 w-full">
            <Link href="/gallery" className="flex-1 text-center bg-gray-900 px-6 py-3 text-sm font-semibold text-white">
              View Gallery
            </Link>
            <Link href="/our-story" className="flex-1 text-center border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-700">
              Our Story →
            </Link>
          </div>
        </div>

        {/* Desktop hero — split layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:h-[clamp(480px,62vh,680px)] overflow-hidden">

          {/* Text panel */}
          <div className="flex h-full items-center px-16" style={{ backgroundImage: "url('/images/parchment.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="max-w-xl space-y-6">
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#92400e", textShadow: "0 1px 2px rgba(255,255,255,0.6)" }}>
                Handcrafted &nbsp;·&nbsp; One of one &nbsp;·&nbsp; Unapologetically nerdy
              </p>
              <h1 className="text-5xl font-semibold tracking-tight leading-tight" style={{ color: "#1c1917", textShadow: "0 1px 3px rgba(255,255,255,0.7)" }}>
                Every stitch<br />tells a story.
              </h1>
              <p className="text-sm leading-relaxed border-l-2 border-orange-600 pl-4 italic" style={{ color: "#292524", textShadow: "0 1px 2px rgba(255,255,255,0.6)" }}>
                "Your bag should be as unique as your collection. So we make sure it is."
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/gallery" className="inline-flex items-center justify-center bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700 transition">
                  View Gallery
                </Link>
                <Link href="/our-story" className="inline-flex items-center justify-center border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900 transition">
                  Our Story →
                </Link>
              </div>
            </div>
          </div>

          {/* Image panel */}
          <div className="bg-stone-50 flex items-center justify-center px-8 pt-8 pb-12">
            <Image
              src="/images/hero-logo.png"
              alt="Sew Nerdy Bags"
              width={480}
              height={480}
              priority
              className="w-full max-w-[380px] h-auto"
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
