export default function HomePage() {
  return (
   <section className="space-y-14 py-10 sm:py-14">
      {/* Hero */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-wide text-gray-600">
              Handcrafted • One of a kind • Made to be used
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
  Sew Nerdy Bags
</h1>
<div className="h-1 w-16 rounded bg-orange-600" />

            <p className="max-w-xl text-lg leading-relaxed text-gray-700">
              One-of-a-kind, handcrafted bags—made with care, personality, and
              details you won’t find twice.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-5 py-2.5 text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600/40"
            >
              View Gallery
            </a>

            <a
              href="/commission"
              className="inline-flex items-center justify-center rounded-md border px-5 py-2.5 transition hover:bg-black hover:text-white"
            >
              Commission a Bag
            </a>
          </div>

          <p className="text-sm text-gray-600">
            Looking for something specific? Commissions are welcome—share your
            colors, size, and any special details.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border bg-white shadow-md">
          <div className="aspect-[4/3] w-full">
            <img
              src="/images/hero-bag.png"
              alt="Featured Sew Nerdy bag"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-black/10" />

      {/* Quick highlights */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Handcrafted",
            text: "Built with care and attention to every stitch.",
          },
          {
            title: "One-of-a-kind",
            text: "No mass production—each piece is its own thing.",
          },
          {
            title: "Made to be used",
            text: "Beautiful, practical, and designed to hold up.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-sm font-semibold tracking-tight">
              {item.title}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}