"use client";
import { useState } from "react";

const links = [
  { label: "الرئيسية", href: "#hero" },
  { label: "نبذة عني", href: "#about" },
  { label: "مجالات الخبرة", href: "#expertise" },
  { label: "تواصل معي", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white border-b border-black/10">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between md:px-12">
        <span className="text-black font-bold text-xl tracking-tight">عمر السعيد</span>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#555] text-sm font-medium transition-colors hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-black p-2"
          onClick={() => setOpen(!open)}
          aria-label="القائمة"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-white border-t border-black/10 px-6 pb-4 flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[#555] text-base font-medium block py-3 border-b border-black/5 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
