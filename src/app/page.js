import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-0">

      {/* Hero - Full Width */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-b">

        {/* Mobile hero — text first, logo below */}
        <div className="flex flex-col items-center px-6 pt-8 pb-10 lg:hidden" style={{ backgroundImage: "url('/images/parchment.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <p className="text-sm font-semibold tracking-widest uppercase text-center mb-4" style={{ color: "#92400e", textShadow: "0 1px 2px rgba(255,255,255,0.6)" }}>
            Family-made &nbsp;·&nbsp; One of one &nbsp;·&nbsp; Uniquely nerdy
          </p>
          <h1 className="text-3xl font-semibold tracking-tight leading-tight text-center mb-4" style={{ color: "#1c1917", textShadow: "0 1px 3px rgba(255,255,255,0.7)" }}>
            Bags worth carrying.
          </h1>
          <p className="w-full text-sm leading-relaxed border-l-2 border-orange-600 pl-4 italic mb-6" style={{ color: "#292524", textShadow: "0 1px 2px rgba(255,255,255,0.6)" }}>
            You deserve a bag as original as you are.
          </p>
          <div className="flex flex-wrap gap-4 w-full mb-8">
            <Link href="/gallery" className="flex-1 text-center bg-amber-600 px-6 py-3 text-sm font-semibold text-white">
              View Gallery
            </Link>
            <Link href="/our-story" className="flex-1 text-center border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-700">
              Our Story →
            </Link>
          </div>
          <Image
            src="/images/hero-logo.png"
            alt="Sew Nerdy Bags"
            width={220}
            height={220}
            priority
          />
        </div>

        {/* Desktop hero — split layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:h-[clamp(480px,62vh,680px)] overflow-hidden">

          {/* Text panel */}
          <div className="flex h-full items-center px-16" style={{ backgroundImage: "url('/images/parchment.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="max-w-xl space-y-6">
              <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#92400e", textShadow: "0 1px 2px rgba(255,255,255,0.6)" }}>
                Family-made &nbsp;·&nbsp; One of one &nbsp;·&nbsp; Uniquely nerdy
              </p>
              <h1 className="text-5xl font-semibold tracking-tight leading-tight" style={{ color: "#1c1917", textShadow: "0 1px 3px rgba(255,255,255,0.7)" }}>
                Bags worth<br />carrying.
              </h1>
              <p className="text-sm leading-relaxed border-l-2 border-orange-600 pl-4 italic" style={{ color: "#292524", textShadow: "0 1px 2px rgba(255,255,255,0.6)" }}>
                You deserve a bag as original as you are.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/gallery" className="inline-flex items-center justify-center bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700 transition">
                  View Gallery
                </Link>
                <Link href="/our-story" className="inline-flex items-center justify-center border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900 transition">
                  Our Story →
                </Link>
              </div>
            </div>
          </div>

          {/* Image panel */}
          <div
            className="flex items-center justify-center"
            style={{
              backgroundImage: "url('/images/parchment.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderLeft: "1px solid rgba(146,64,14,0.15)",
            }}
          >
            <Image
              src="/images/hero-logo.png"
              alt="Sew Nerdy Bags"
              width={480}
              height={480}
              priority
              className="w-full max-w-[420px] h-auto drop-shadow-md"
            />
          </div>

        </div>
      </div>

      {/* Shows strip */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen" style={{ background: "#111827", borderBottom: "3px solid #d97706" }}>
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d97706" }}>On the convention circuit</span>
            <Link href="/shows" style={{ fontSize: "0.7rem", fontWeight: 700, color: "#9ca3af", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>See all shows →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Next up", name: "PensaPride 2026", dates: "June 13, 2026", location: "Pensacola, FL" },
              { label: "Coming up", name: "Dragon Con 2026", dates: "Sep 3–7, 2026", location: "Atlanta, GA" },
              { label: "On the horizon", name: "HizashiCon 2026", dates: "Oct 31–Nov 1, 2026", location: "Pensacola, FL" },
              { label: "On the horizon", name: "Pensacon 2027", dates: "Feb 19–21, 2027", location: "Pensacola, FL" },
            ].map((show) => (
              <div key={show.name} style={{ borderLeft: "2px solid #d97706", paddingLeft: "0.75rem" }}>
                <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d97706", marginBottom: "0.2rem" }}>{show.label}</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.15rem" }}>{show.name}</div>
                <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{show.dates} · {show.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery preview */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen" style={{ background: "#111827" }}>
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 pt-10 pb-2">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem" }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d97706" }}>From the collection</span>
            <Link href="/gallery" style={{ fontSize: "0.72rem", color: "#9ca3af", textDecoration: "none", fontWeight: 600 }}>View all →</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px]" style={{ background: "#1f2937" }}>
            {[
              { src: "/images/bag-4.jpg", name: "Stay Trashy" },
              { src: "/images/bag-6.jpg", name: "The All-Seeing Eye" },
              { src: "/images/bag-5.jpg", name: "Biker Bunny" },
              { src: "/images/hero-bag.png", name: "The Scholar" },
            ].map((bag) => (
              <Link key={bag.name} href="/gallery" style={{ textDecoration: "none", display: "block", position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                <img src={bag.src} alt={bag.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.6rem 0.75rem", background: "rgba(17,24,39,0.78)" }}>
                  <div style={{ color: "#ffffff", fontSize: "0.72rem", fontWeight: 700 }}>{bag.name}</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", padding: "1.25rem 0" }}>
            <Link href="/gallery" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d97706", textDecoration: "none", borderBottom: "1px solid #d97706", paddingBottom: "2px" }}>Browse the full collection →</Link>
          </div>
        </div>
      </div>

      {/* Meet the makers */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen" style={{ background: "#fafaf9", borderTop: "3px solid #d97706" }}>
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div style={{ order: 1 }}>
              <img src="/images/shows/booth.jpg" alt="Megan and Elaine at their convention booth" style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ order: 2 }}>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d97706", marginBottom: "0.6rem" }}>The makers</p>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#111827", lineHeight: 1.15, marginBottom: "0.75rem" }}>Elaine and Megan.<br />A mother, a daughter, and a sewing machine.</h2>
              <p style={{ fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.7, marginBottom: "1.25rem" }}>Based in Pensacola, FL and making bags for over a decade. Every piece is built by hand — no shortcuts, no assembly line. Just two people who love what they make and the people who carry it.</p>
              <Link href="/our-story" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d97706", textDecoration: "none", borderBottom: "1px solid #d97706", paddingBottom: "2px" }}>Our story →</Link>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
