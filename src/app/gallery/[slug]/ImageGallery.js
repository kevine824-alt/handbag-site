"use client";

import { useState } from "react";

export default function ImageGallery({ images, name }) {
  const safeImages = Array.isArray(images) ? images : [];
  const [active, setActive] = useState(safeImages[0]);

  if (safeImages.length === 0) {
    return (
      <div className="rounded-lg border bg-gray-50 p-8 text-sm text-gray-600">
        No images available for this bag yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-square w-full overflow-hidden rounded-lg border bg-gray-50">
        <img src={active} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Thumbnails */}
      {safeImages.length > 1 && (
        <div className="flex gap-3">
          {safeImages.map((src, idx) => (
            <button
              key={`${src}-${idx}`}
              type="button"
              onClick={() => setActive(src)}
              className={`h-20 w-20 overflow-hidden rounded-md border ${
                active === src ? "ring-2 ring-black" : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`View image ${idx + 1} for ${name}`}
            >
              <img
                src={src}
                alt={`${name} thumbnail ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}