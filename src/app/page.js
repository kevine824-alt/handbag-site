export default function HomePage() {
  return (
    <section className="space-y-8">
      {/* Hero */}
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Sew Nerdy Bags
          </h1>

          <p className="text-lg text-gray-700">
            One-of-a-kind, handcrafted bags—made with care, personality, and
            details you won’t find twice.
          </p>

          <div className="flex gap-3">
            <a
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white"
            >
              View Gallery
            </a>
            <a
              href="/commission"
              className="inline-flex items-center justify-center rounded-md border px-4 py-2"
            >
              Commission a Bag
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <img
            src="/images/hero-bag.png"
            alt="Featured Sew Nerdy bag"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Quick highlights */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <div className="font-semibold">Handcrafted</div>
          <p className="mt-1 text-sm text-gray-600">
            Built with care and attention to every stitch.
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <div className="font-semibold">One-of-a-kind</div>
          <p className="mt-1 text-sm text-gray-600">
            No mass production—each piece is its own thing.
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <div className="font-semibold">Made to be used</div>
          <p className="mt-1 text-sm text-gray-600">
            Beautiful, practical, and designed to hold up.
          </p>
        </div>
      </div>
    </section>
  );
}