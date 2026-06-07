'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ALL_BAGS = [
  {
    slug: "pensacola-pride-2026",
    name: "Pensacola Pride Bag 2026",
    category: "event-series",
    featured: true,
    event: "PensaPride 2026",
    style: "Messenger",
    description: "Black vegan leather messenger with a richly embroidered Pride panel. A Pensacola dragon rises over the lighthouse and water tower surrounded by fireworks and rainbow light. Love Wins in every stitch. Made for PensaPride 2026.",
    images: ["/images/pensacola-pride-2026.jpg"],
  },
  {
    slug: "pensacola-air-2026",
    name: "Pensacola Air 2026",
    category: "event-series",
    featured: false,
    event: "PensaPride 2026",
    style: "Messenger",
    description: "Black vegan leather messenger celebrating Pensacola's aviation legacy. Blue Angels jets streak over the bay bridge, lighthouse, and water tower in full embroidered detail. A tribute to the city from above.",
    images: ["/images/pensacola-air-2026.jpg"],
  },
  {
    slug: "pensacola-fox",
    name: "Pensacola Fox",
    category: "event-series",
    event: "PensaPride 2025",
    style: "Crossbody",
    description: "A love letter to Pensacola on cream vegan leather. Hand-illustrated anime kitsune surrounded by downtown scenes — the Saenger Theatre, lanterns, ramen shops, and city life in full bloom.",
    images: ["/images/pensacola-fox.jpg"],
  },
  {
    slug: "pensacola-historic",
    name: "Pensacola Historic",
    category: "event-series",
    event: "Pensacon 2025",
    style: "Messenger",
    description: "Cream vegan leather with a richly embroidered scene drawn from Pensacola's oldest stories — a dragon on the 1559 fort, cannons, lighthouse, and tall ships in the harbor.",
    images: ["/images/pensacola-historic.jpg"],
  },
  {
    slug: "dragon-con-40-atlanta",
    name: "Dragon Con 40: Atlanta",
    category: "event-series",
    event: "Dragon Con 40",
    style: "Crossbody",
    description: "Quilted burgundy with a cream front panel: an embroidered dragon shield rising over a gold-spiked crest with the Atlanta skyline below. A convention exclusive built to mark the occasion.",
    images: ["/images/dragon-con-40-cream.jpg"],
  },
  {
    slug: "dragon-con-40-night",
    name: "Dragon Con 40: Night Edition",
    category: "event-series",
    event: "Dragon Con 40",
    style: "Crossbody",
    description: "The darker counterpart — deep quilted burgundy throughout, dragon shield rendered in crimson and gold thread against a black panel. Same convention, different energy.",
    images: ["/images/dragon-con-40-dark.jpg"],
  },
  {
    slug: "dragon-con-pouch",
    name: "Dragon Con: City Skyline Pouch",
    category: "event-series",
    event: "Dragon Con 40",
    style: "Pouch",
    description: "Black structured pouch with a dragon sweeping low over the Atlanta skyline at dusk. Compact and convention-ready. Part of the Dragon Con 40 collection.",
    images: ["/images/dragon-con-pouch.jpg"],
  },
  {
    slug: "hyrule-tapestry",
    name: "Hyrule Tapestry",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "Cream and black tapestry print crossbody with scenes from Hyrule across every panel. Temples, triforces, and heroes woven into the fabric. Brown vegan leather base.",
    images: ["/images/hyrule-tapestry.jpg"],
  },
  {
    slug: "hyrule-tapestry-teal",
    name: "Hyrule Tapestry: Teal",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "The Hyrule tapestry print on a bold teal vegan leather base. Same iconic scenes, different energy.",
    images: ["/images/hyrule-tapestry-teal.jpg"],
  },
  {
    slug: "the-one-ring",
    name: "The One Ring",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "Green vegan leather crossbody with the One Ring inscription embossed across the entire flap. The script that rules them all, now on something you can carry. Brown leather base.",
    images: ["/images/the-one-ring.jpg"],
  },
  {
    slug: "middle-earth",
    name: "Middle Earth",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "Tan vegan leather crossbody with a full Middle Earth map embossed into the flap. Every region named, every mountain range traced. Brown leather base.",
    images: ["/images/middle-earth.jpg"],
  },
  {
    slug: "ghost-garden",
    name: "Ghost Garden",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "Colorful ghosts drifting through a field of wildflowers on a gold vegan leather base. Bright, playful, and impossible to look away from.",
    images: ["/images/ghost-garden.jpg"],
  },
  {
    slug: "spirit-garden",
    name: "Spirit Garden",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "Pale ghost women in lavender robes surrounded by purple blooms. Ethereal and elegant on a gold vegan leather base.",
    images: ["/images/spirit-garden.jpg"],
  },
  {
    slug: "spooky-season",
    name: "Spooky Season",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "A warm autumn crossbody covered in skulls, ghosts, sunflowers, and Saturn rings. Gold base. The bag that makes Halloween last all year.",
    images: ["/images/spooky-season.jpg"],
  },
  {
    slug: "the-ouija",
    name: "The Ouija",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "Dark navy crossbody covered in Ouija board imagery — planchettes, letters, moons, and hands. For those who like their bags with a little mystery.",
    images: ["/images/the-ouija.jpg"],
  },
  {
    slug: "ghost-cats",
    name: "Ghost Cats",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "Translucent ghost cats and skeleton fish drift through dark fern fronds on a gold vegan leather base. Spooky, but make it cute.",
    images: ["/images/ghost-cats.jpg"],
  },
  {
    slug: "midnight-garden",
    name: "Midnight Garden",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "Dark navy crossbody with cats, flowers, geometric gold lines, and hummingbirds. Rich detail at every angle.",
    images: ["/images/midnight-garden.jpg"],
  },
  {
    slug: "stay-foxy",
    name: "Stay Foxy",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "Bold red crossbody covered in illustrated foxes in every pose and colorway. Playful, bright, and unapologetically fun. Teal vegan leather base.",
    images: ["/images/stay-foxy.jpg"],
  },
  {
    slug: "player-one",
    name: "Player One",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "A love letter to retro gaming. Game Boy cartridges, classic titles, and 8-bit nostalgia cover every inch of this blue carbon fiber crossbody.",
    images: ["/images/player-one.jpg"],
  },
  {
    slug: "hyrule-heroes",
    name: "Hyrule Heroes",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "Dark crossbody featuring Link, Zelda, and characters from across the Zelda universe. Richly illustrated print on a teal vegan leather base.",
    images: ["/images/hyrule-heroes.jpg"],
  },
  {
    slug: "stained-glass",
    name: "Stained Glass",
    category: "one-of-a-kind",
    style: "Crossbody",
    description: "Bold blue geometric mosaic print crossbody with vivid color-blocked circles and gold accents. Like carrying a cathedral window on your shoulder.",
    images: ["/images/stained-glass.jpg"],
  },
  {
    slug: "the-librarian",
    name: "The Librarian",
    category: "one-of-a-kind",
    style: "Backpack",
    description: "Brown vegan leather backpack with an embroidered raccoon in a button-up, reading the newspaper. A companion for anyone who takes their books seriously.",
    images: ["/images/the-librarian.jpg"],
  },
  {
    slug: "bag-of-holding-brown",
    name: "Bag of Holding: Brown",
    category: "one-of-a-kind",
    style: "Messenger",
    description: "Brown canvas messenger with Bag of Holding embroidered in gold celtic script. For adventurers who carry everything. Includes a matching velvet dice pouch.",
    images: ["/images/bag-of-holding-brown.jpg"],
  },
  {
    slug: "bag-of-holding-green",
    name: "Bag of Holding: Green",
    category: "one-of-a-kind",
    style: "Messenger",
    description: "Olive green canvas messenger with Bag of Holding in warm gold embroidery. Same legendary capacity, different colorway. Includes a matching velvet dice pouch.",
    images: ["/images/bag-of-holding-green.jpg"],
  },
  {
    slug: "bag-of-holding-pouches",
    name: "Bag of Holding Dice Pouches",
    category: "one-of-a-kind",
    style: "Pouch",
    description: "Velvet drawstring dice pouches embroidered with Bag of Holding in gold celtic script. Available in burgundy, teal, and black. The perfect companion to any tabletop session.",
    images: ["/images/bag-of-holding-pouches.jpg"],
  },
  {
    slug: "dragon-eye-messenger",
    name: "Dragon Eye Messenger",
    category: "one-of-a-kind",
    style: "Messenger",
    description: "Messenger bags featuring a richly embroidered dragon eye on the flap, available in brown and teal leather. A matching velvet pouch completes the set.",
    images: ["/images/dragon-eye-messenger.jpg"],
  },
  {
    slug: "dragon-dice-bag",
    name: "Dragon Dice Bag",
    category: "one-of-a-kind",
    style: "Pouch",
    description: "Hand-crocheted drawstring dice bags with dragon figural decorations. Available in forest green and earth tones. Built for the table, tough enough for the dungeon.",
    images: ["/images/dragon-dice-bag.jpg"],
  },
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
    images: ["/images/hero-bag.jpg"],
  },
];

const FILTERS = [
  { label: "All Pieces", value: "all" },
  { label: "Featured", value: "featured" },
  { label: "One of a Kind", value: "one-of-a-kind" },
  { label: "Event Series", value: "event-series" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? ALL_BAGS :
    active === "featured" ? ALL_BAGS.filter((b) => b.featured) :
    ALL_BAGS.filter((b) => b.category === active);

  return (
    <div style={{ background: "#111827", minHeight: "100vh", margin: "-1.5rem" }}>

      {/* Hero */}
      <div style={{
        backgroundImage: "url('/images/parchment-hero.jpg')",
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
        {active === "all" ? (
          <>
            <SectionHeader label="Event Series" sub="Convention exclusives and location pieces — each tied to a specific moment in time." />
            {ALL_BAGS.filter(b => b.category === "event-series").map(bag => (
              <BagCard key={bag.slug} bag={bag} />
            ))}
            <SectionHeader label="One of a Kind" sub="Original designs. Every bag is handcrafted and built to stand on its own." />
            {ALL_BAGS.filter(b => b.category === "one-of-a-kind").map(bag => (
              <BagCard key={bag.slug} bag={bag} />
            ))}
          </>
        ) : (
          filtered.map((bag) => (
            <BagCard key={bag.slug} bag={bag} />
          ))
        )}
      </div>
    </div>
  );
}

function BagCard({ bag }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/gallery/${bag.slug}`}
      style={{
        textDecoration: "none",
        display: "block",
        position: "relative",
        border: bag.featured ? "3px solid #d97706" : "none",
      }}
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
        {/* Featured badge */}
        {bag.featured && (
          <div style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            zIndex: 10,
            background: "#d97706",
            color: "#fff",
            fontSize: "0.58rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "3px 8px",
          }}>
            Featured
          </div>
        )}

        {/* Image */}
        <Image
          src={bag.images?.[0]}
          alt={bag.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
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

function SectionHeader({ label, sub }) {
  return (
    <div style={{
      gridColumn: "1 / -1",
      padding: "1.5rem 1.5rem 1rem",
      borderBottom: "1px solid #374151",
      display: "flex",
      alignItems: "baseline",
      gap: "1rem",
      flexWrap: "wrap",
    }}>
      <span style={{
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#d97706",
      }}>{label}</span>
      <span style={{
        fontSize: "0.75rem",
        color: "#6b7280",
        lineHeight: 1.5,
      }}>{sub}</span>
    </div>
  );
}
