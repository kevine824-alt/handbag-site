import { notFound } from "next/navigation";
import { getAllBags, getBagBySlug } from "@/lib/bags";
import ImageGallery from "./ImageGallery";

export default function BagDetailPage({ params }) {
  const { slug } = params;
  let bag;

  try {
    bag = getBagBySlug(slug);
  } catch (e) {
    return notFound();
  }

  // Safety: ensure we always pass an array into ImageGallery
  const images = Array.isArray(bag.images) ? bag.images : [];

  return (
    <section className="space-y-6">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        {/* Images */}
        <div className="space-y-3">
          <ImageGallery images={images} name={bag.name} />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              {bag.name}
            </h1>
            <p className="mt-3 text-gray-700">{bag.description}</p>
          </div>

          <div className="flex gap-3">
            <a
              href="/commission"
              className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white"
            >
              Commission Something Similar
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md border px-4 py-2"
            >
              Back to Gallery
            </a>
          </div>

          <div className="rounded-lg border p-4 text-sm text-gray-600">
            Want a variation of this piece? Use the commission page to share
            color ideas, size preferences, and any special details.
          </div>
        </div>
      </div>
    </section>
  );
}

// Optional but recommended for App Router static generation:
export function generateStaticParams() {
  return getAllBags().map((b) => ({ slug: b.slug }));
}