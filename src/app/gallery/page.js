import Link from "next/link";
import { getAllBags } from "../../lib/bags";

export default function GalleryPage() {
  const bags = getAllBags();

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Gallery</h1>
        <p className="text-gray-700">
          A selection of one-of-a-kind Sew Nerdy Bags. Click a piece to view details.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bags.map((bag) => (
          <Link
            key={bag.slug}
            href={`/gallery/${bag.slug}`}
            className="group rounded-lg border overflow-hidden hover:shadow-sm transition"
          >
            <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
              <img
                src={bag.images?.[0]}
                alt={bag.name}
                className="h-full w-full object-cover group-hover:scale-[1.02] transition"
              />
            </div>

            <div className="p-4">
              <div className="font-semibold">{bag.name}</div>
              <div className="mt-1 text-sm text-gray-600 line-clamp-2">
                {bag.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}