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

          <div className="flex gap-3 flex-wrap">
            <a
              href={`/order-request?bag=${encodeURIComponent(bag.name)}`}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-white"
              style={{ background: "#111827" }}
            >
              Request to Order
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md border px-4 py-2"
            >
              Back to Gallery
            </a>
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