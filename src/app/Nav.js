"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/commission", label: "Commission" },
  { href: "/shows", label: "Shows" },
  { href: "/faq", label: "FAQ" },
  { href: "/mailing-list", label: "Mailing List" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 flex-wrap justify-end">
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
                ? "font-semibold underline underline-offset-8"
                : "hover:underline underline-offset-8"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}