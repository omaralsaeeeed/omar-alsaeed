"use client";
import { useState } from "react";

const links = [
  { label: "نبذة عني", href: "#about" },
  { label: "مجالات الخبرة", href: "#expertise" },
  { label: "تواصل معي", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between md:px-12">
        <span className="text-white font-bold text-base tracking-widest uppercase">
          Omar Alsaeed
        </span>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/50 text-sm tracking-wide transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white/70 p-1"
          onClick={() => setOpen(!open)}
          aria-label="القائمة"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-[#0a0a0a] border-t border-white/5 px-6 pb-4 flex flex-col">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/50 text-sm tracking-wide block py-3 border-b border-white/5 hover:text-white transition-colors"
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
