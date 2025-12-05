"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#76e4c3] to-[#5bb2ff] shadow-[0_12px_45px_rgba(91,178,255,0.3)]" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">UniBrain</p>
            <h1 className="font-heading text-lg font-semibold">UniBrain Digital</h1>
          </div>
        </div>
        <nav className="hidden items-center gap-3 text-sm text-white/80 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#contact" className="btn btn-primary text-sm">
            Hire Us
          </Link>
          <button className="md:hidden text-2xl" onClick={() => setOpen((v) => !v)}>
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-black/80 px-6 pb-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm text-white/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
