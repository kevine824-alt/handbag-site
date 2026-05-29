import "./globals.css";
import Nav from "./Nav";

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
  <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <header
          className="border-b"
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

        <footer className="border-t p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sew Nerdy Bags. All rights reserved.
        </footer>
      </body>
    </html>
  );
}