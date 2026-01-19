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
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="border-b">
          <div className="mx-auto max-w-6xl p-4 flex justify-between items-center">
            <div className="font-bold text-xl">Studio Name</div>
            <Nav />
          </div>
        </header>

        <main className="flex-1 mx-auto w-full max-w-6xl p-6">{children}</main>

        <footer className="border-t p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Studio Name. All rights reserved.
        </footer>
      </body>
    </html>
  );
}