"use client";

import { useEffect, useState } from "react";
import { nav, studio, whatsappLink } from "@/lib/data";

export function Logo() {
  return <span className="font-serif text-[1.6rem] leading-none tracking-[-0.01em] text-ink">Studio Ello</span>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "border-b border-line bg-cream" : ""}`}>
      <div className="mx-auto flex h-16 max-w-[calc(1160px+2rem)] items-center justify-between gap-6 px-4 md:max-w-[calc(1160px+4rem)] md:px-8">
        <a href="#inicio" aria-label={studio.name}>
          <Logo />
        </a>
        <nav className="hidden lg:block" aria-label="Menu principal">
          <ul className="flex items-center gap-6 text-[0.9rem]">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-bronze">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-dark hidden !py-2 lg:inline-flex">
          Pedir orçamento
        </a>
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="text-[0.95rem] font-medium lg:hidden">
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-cream px-4 pb-6 lg:hidden" aria-label="Menu principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-3.5 text-[1.05rem]">
              {n.label}
            </a>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-5 w-full justify-center">
            Pedir orçamento no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
