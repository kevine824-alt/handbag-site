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
        <header
          className="border-b relative z-50"
          style={{
            backgroundImage: "url('/images/bag-pattern.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "120px 120px",
          }}
        >
          <div className="mx-auto max-w-6xl p-4">
            <div className="flex items-center justify-between rounded-md bg-gray-900/92 px-4 py-3 text-white backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="Sew Nerdy Bags logo"
                  className="h-20 w-auto"
                />
                <div className="font-extrabold text-2xl tracking-tight">Sew Nerdy Bags</div>
              </div>
              <Nav />
            </div>
          </div>
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