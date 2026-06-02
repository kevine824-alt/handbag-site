import "./globals.css";
import Nav from "./Nav";
import Script from "next/script";

export const metadata = {
  title: "Handcrafted Bags Studio",
  description: "One-of-a-kind handcrafted handbags",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
        <Script
          src="https://static.klaviyo.com/onsite/js/TMcNs4/klaviyo.js?company_id=TMcNs4"
          strategy="afterInteractive"
        />
      </head>
  <body className="min-h-screen flex flex-col bg-white text-gray-900">

        {/* Promo Banner */}
        <div style={{
          background: "#d97706",
          padding: "0.6rem 1rem",
          textAlign: "center",
        }}>
          <a href="/shows" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            <span style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              color: "#fff",
              background: "rgba(0,0,0,0.2)",
              padding: "2px 8px",
            }}>Upcoming Show</span>
            <span style={{
              color: "#111827",
              fontSize: "0.88rem",
              fontWeight: 700,
            }}>Sew Nerdy Bags at PensaPride</span>
            <span style={{ color: "rgba(0,0,0,0.3)", fontSize: "0.8rem" }}>·</span>
            <span style={{
              color: "#111827",
              fontSize: "0.88rem",
              fontWeight: 600,
            }}>June 13 · Pensacola, FL</span>
            <span style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#111827",
              background: "#fff",
              padding: "3px 10px",
              marginLeft: "0.25rem",
            }}>See details →</span>
          </a>
        </div>

        <header className="relative z-50">
          {/* Plaid top stripe */}
          <div style={{
            height: "10px",
            background: "repeating-linear-gradient(90deg, #8b1a1a 0px, #8b1a1a 14px, #f5f0e8 14px, #f5f0e8 16px, #1a1a1a 16px, #1a1a1a 30px, #f5f0e8 30px, #f5f0e8 32px, #8b1a1a 32px, #8b1a1a 46px, #f5f0e8 46px, #f5f0e8 47px)",
          }} />

          {/* Main header bar */}
          <div style={{ background: "#f5f0e8" }}>
            <div className="mx-auto max-w-6xl px-4" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>

              {/* Logo + brand name */}
              <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", flexShrink: 0 }}>
                <img
                  src="/images/fox-mascot.jpg"
                  alt="Sew Nerdy Bags fox mascot"
                  style={{ height: "64px", width: "64px", objectFit: "cover", borderRadius: "4px" }}
                />
                <div>
                  <div style={{ fontSize: "1.25rem", fontWeight: 900, letterSpacing: "0.02em", lineHeight: 1, color: "#111" }}>
                    SEW<span style={{ color: "#d97706" }}>NERDY</span>BAGS
                  </div>
                  <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#6b5a3a", marginTop: "3px" }}>
                    Our bags are sew nerdy. Sew fun.
                  </div>
                </div>
              </a>

              <Nav />
            </div>
          </div>

          {/* Plaid bottom stripe */}
          <div style={{
            height: "10px",
            background: "repeating-linear-gradient(90deg, #8b1a1a 0px, #8b1a1a 14px, #f5f0e8 14px, #f5f0e8 16px, #1a1a1a 16px, #1a1a1a 30px, #f5f0e8 30px, #f5f0e8 32px, #8b1a1a 32px, #8b1a1a 46px, #f5f0e8 46px, #f5f0e8 47px)",
          }} />
        </header>

        <main className="flex-1 mx-auto w-full max-w-6xl p-6">{children}</main>

        <footer className="border-t p-6 text-center text-sm text-gray-500">
          <div className="flex justify-center gap-5 mb-3">
            <a href="https://www.instagram.com/sewnerdybags/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#6b7280" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/sewnerdybags/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "#6b7280" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
          © {new Date().getFullYear()} Sew Nerdy Bags. All rights reserved.
        </footer>
      </body>
    </html>
  );
}