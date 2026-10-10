"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8">
        {/* Circle logo */}
        <a
          href="#top"
          aria-label="Back to top"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-[11px] font-semibold tracking-[0.15em] text-white backdrop-blur transition-colors hover:border-white hover:bg-white hover:text-neutral-950"
        >
          NK
        </a>

        {/* Center pill nav */}
        <div className="hidden items-center rounded-full border border-white/15 bg-white/5 px-2 py-1.5 backdrop-blur-md md:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-4 py-2 text-[13px] transition-colors ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {l.label}
                {isActive && (
                  <span
                    className="absolute inset-x-4 -bottom-px h-px bg-white"
                    aria-hidden
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            className="hidden rounded-full border border-white/25 px-5 py-2.5 text-[13px] text-white backdrop-blur transition-colors hover:bg-white hover:text-neutral-950 sm:inline-block"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-neutral-950 transition-colors hover:bg-neutral-300 sm:inline-block"
          >
            Contact
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-y border-white/10 bg-neutral-950/95 backdrop-blur-md md:hidden">
          <ul className="px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3.5 text-sm text-neutral-300 transition-colors last:border-none hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3 pt-4">
              <a
                href={profile.resumeUrl}
                target="_blank"
                className="rounded-full border border-white/25 px-5 py-2.5 text-[13px] text-white"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-neutral-950"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
