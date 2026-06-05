'use client';

import Link from "next/link";
import { useState } from "react";

const ALL_BAGS = [
  {
    slug: "bag-2",
    name: "Cherry Blossom Crossbody",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "A one-of-a-kind crossbody messenger built on a teal carbon-fiber base with a hand-selected cherry blossom fabric flap featuring whimsical blue cats.",
    images: ["/images/bag-2.jpg"],
  },
  {
    slug: "bag-3",
    name: "The Mystic Cat",
    category: "one-of-a-kind",
    style: "Backpack",
    description: "Black and purple vegan leather backpack with a hand-embroidered mystic cat — golden eyes, stitched fur texture, and a tail that curls off the panel edge.",
    images: ["/images/bag-3.jpg"],
  },
  {
    slug: "bag-4",
    name: "Stay Trashy",
    category: "one-of-a-kind",
    style: "Backpack",
    description: "Tan pebbled vegan leather with a boldly embroidered \"Stay Trashy\" scene — two raccoons in sunglasses, trash can throne included. Antique brass hardware.",
    images: ["/images/bag-4.jpg"],
  },
  {
    slug: "bag-5",
    name: "Biker Bunny",
    category: "one-of-a-kind",
    style: "Backpack",
    description: "All-black vegan leather with a chrome-threaded embroidered biker rabbit. Bandana, jacket, handlebars and all. Clean, bold, and impossible to miss.",
    images: ["/images/bag-5.jpg"],
  },
  {
    slug: "bag-6",
    name: "The All-Seeing Eye",
    category: "one-of-a-kind",
    style: "Backpack",
    description: "Navy and gold frame a holographic iridescent front panel with a hand-embroidered circuit board eye. Part tech, part mystical, entirely one of a kind.",
    images: ["/images/bag-6.jpg"],
  },
  {
    slug: "featured-bag",
    name: "The Scholar",
    category: "one-of-a-kind",
    style: "Backpack",
    description: "Blue and cream vegan leather with a richly embroidered scene: a badger in a jacket, reading beneath an oak tree at dusk. Quiet personality, serious craft.",
    images: ["/images/hero-bag.png"],
  },
  {
    slug: "pensacola-fox",
    name: "Pensacola Fox",
    category: "event-series",
    event: "PensaPride 2025",
    style: "Crossbody",
    description: "A love letter to Pensacola on cream vegan leather. Hand-illustrated anime kitsune surrounded by downtown scenes — the Saenger Theatre, lanterns, ramen shops, and city life in full bloom.",
    images: ["/images/pensacola-fox.png"],
  },
  {
    slug: "pensacola-historic",
    name: "Pensacola Historic",
    category: "event-series",
    event: "Pensacon 2025",
    style: "Messenger",
    description: "Cream vegan leather with a richly embroidered scene drawn from Pensacola's oldest stories — a dragon on the 1559 fort, cannons, lighthouse, and tall ships in the harbor.",
    images: ["/images/pensacola-historic.png"],
  },
  {
    slug: "dragon-con-40-atlanta",
    name: "Dragon Con 40: Atlanta",
    category: "event-series",
    event: "Dragon Con 40",
    style: "Crossbody",
    description: "Quilted burgundy with a cream front panel: an embroidered dragon shield rising over a gold-spiked crest with the Atlanta skyline below. A convention exclusive built to mark the occasion.",
    images: ["/images/dragon-con-40-cream.png"],
  },
  {
    slug: "dragon-con-40-night",
    name: "Dragon Con 40: Night Edition",
    category: "event-series",
    event: "Dragon Con 40",
    style: "Crossbody",
    description: "The darker counterpart — deep quilted burgundy throughout, dragon shield rendered in crimson and gold thread against a black panel. Same convention, different energy.",
    images: ["/images/dragon-con-40-dark.png"],
  },
  {
    slug: "dragon-con-pouch",
    name: "Dragon Con: City Skyline Pouch",
    category: "event-series",
    event: "Dragon Con 40",
    style: "Pouch",
    description: "Black structured pouch with a dragon sweeping low over the Atlanta skyline at dusk. Compact and convention-ready. Part of the Dragon Con 40 collection.",
    images: ["/images/dragon-con-pouch.png"],
  },
];

const FILTERS = [
  { label: "All Pieces", value: "all" },
  { label: "One of a Kind", value: "one-of-a-kind" },
  { label: "Event Series", value: "event-series" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? ALL_BAGS : ALL_BAGS.filter((b) => b.category === active);

  return (
    <div style={{ background: "#111827", minHeight: "100vh", margin: "-1.5rem" }}>

      {/* Hero */}
      <div style={{
        backgroundImage: "url('/images/parchment-hero.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        borderBottom: "3px solid #d97706",
        height: "220px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "1rem 15%",
      }}>
        <p style={{
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#92400e",
          marginBottom: "0.5rem",
          textShadow: "0 1px 2px rgba(255,255,255,0.4)",
        }}>The Collection</p>
        <h1 style={{
          color: "#1c1917",
          fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: "0.6rem",
          textShadow: "0 1px 4px rgba(255,255,255,0.5)",
        }}>Handcrafted. Every Single One.</h1>
        <p style={{
          color: "#44332a",
          fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
          lineHeight: 1.6,
          maxWidth: "480px",
          textShadow: "0 1px 2px rgba(255,255,255,0.4)",
        }}>
          Every bag is built by hand. Browse the full collection.
        </p>
      </div>

      {/* Filter bar */}
      <div style={{
        display: "flex",
        gap: "0.5rem",
        padding: "1rem 2rem",
        background: "#111827",
        borderBottom: "1px solid #1f2937",
        flexWrap: "wrap",
      }}>
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "6px 16px",
              cursor: "pointer",
              border: "none",
              background: active === f.value ? "#d97706" : "transparent",
              color: active === f.value ? "#ffffff" : "#9ca3af",
              outline: active === f.value ? "none" : "1px solid #374151",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "2px",
        background: "#1f2937",
        padding: "2px",
      }}>
        {filtered.map((bag) => (
          <BagCard key={bag.slug} bag={bag} />
        ))}
      </div>
    </div>
  );
}

function BagCard({ bag }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/gallery/${bag.slug}`}
      style={{ textDecoration: "none", display: "block", position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: "relative",
        aspectRatio: "3 / 4",
        overflow: "hidden",
        background: "#1a1a2e",
        cursor: "pointer",
      }}>
        {/* Image */}
        <img
          src={bag.images?.[0]}
          alt={bag.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />

        {/* Always-visible name bar */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "2rem 1rem 0.75rem",
          background: "linear-gradient(transparent, rgba(17,24,39,0.9))",
          transition: "opacity 0.3s ease",
          opacity: hovered ? 0 : 1,
        }}>
          <div style={{
            fontSize: "0.58rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#d97706",
            marginBottom: "0.25rem",
          }}>
            {bag.category === "event-series" ? bag.event : bag.style}
          </div>
          <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.9rem" }}>
            {bag.name}
          </div>
        </div>

        {/* Hover overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(17,24,39,0.88)",
          padding: "1.5rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          transition: "opacity 0.3s ease",
          opacity: hovered ? 1 : 0,
        }}>
          <div style={{
            fontSize: "0.58rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#d97706",
            marginBottom: "0.4rem",
          }}>
            {bag.category === "event-series"
              ? `Event Series · ${bag.event}`
              : `One of a Kind · ${bag.style}`}
          </div>
          <div style={{
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "1rem",
            lineHeight: 1.2,
            marginBottom: "0.5rem",
          }}>
            {bag.name}
          </div>
          <div style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "0.78rem",
            lineHeight: 1.6,
            marginBottom: "0.85rem",
          }}>
            {bag.description}
          </div>
          <div style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#d97706",
            borderBottom: "1px solid #d97706",
            paddingBottom: "2px",
            display: "inline-block",
          }}>
            View piece →
          </div>
        </div>
      </div>
    </Link>
  );
}
