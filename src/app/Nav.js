"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/commission", label: "Create a Bag" },
  { href: "/shows", label: "Shows" },
  { href: "/faq", label: "FAQ" },
  { href: "/mailing-list", label: "Mailing List" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const overlay = (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#111827" }}
      onClick={() => setOpen(false)}
    >
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(false); }}
        style={{ position: "absolute", top: "1.5rem", right: "1.5rem", color: "#fff", background: "none", border: "none", fontSize: "2rem", cursor: "pointer", lineHeight: 1 }}
        aria-label="Close menu"
      >
        ✕
      </button>
      <nav
        style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "2rem" }}
        onClick={(e) => e.stopPropagation()}
      >
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(link.href + "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                textDecoration: "none",
                color: isActive ? "#d97706" : "#ffffff",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden lg:flex gap-4 flex-wrap justify-end">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(link.href + "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? "font-semibold text-white underline underline-offset-8"
                  : "text-gray-400 hover:text-white hover:underline underline-offset-8 transition-colors"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile hamburger button */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu — rendered at body level via portal */}
      {mounted && open && createPortal(overlay, document.body)}
    </>
  );
}
