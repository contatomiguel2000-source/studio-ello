"use client";

import { useEffect, useState } from "react";
import { nav, studio, whatsappLink } from "@/lib/data";

export function Logo() {
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-serif text-[1.45rem] leading-none text-cream">Studio Ello</span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled && !open ? "bg-night/90 backdrop-blur" : ""}`}>
        <div className="mx-auto flex h-16 max-w-[calc(1160px+2rem)] items-center justify-between px-4 md:max-w-[calc(1160px+4rem)] md:px-8">
          <a href="#inicio" aria-label={studio.name}>
            <Logo />
          </a>
          <div className="flex items-center gap-6">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hidden border border-gold px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-gold-light transition-colors hover:bg-gold hover:text-night md:inline-block">
              Pedir orçamento
            </a>
            <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"} className="relative h-6 w-8">
              <span className={`absolute right-0 h-px bg-cream transition-all duration-300 ${open ? "top-3 w-8 rotate-45" : "top-1 w-8"}`} />
              <span className={`absolute right-0 top-3 h-px bg-cream transition-all duration-300 ${open ? "w-0 opacity-0" : "w-6"}`} />
              <span className={`absolute right-0 h-px bg-cream transition-all duration-300 ${open ? "top-3 w-8 -rotate-45" : "top-5 w-4"}`} />
            </button>
          </div>
        </div>
        <span className="absolute bottom-0 left-0 h-px origin-left bg-gold" style={{ width: "100%", transform: `scaleX(${progress})` }} aria-hidden />
      </header>

      {/* menu em tela cheia */}
      <div className={`fixed inset-0 z-40 bg-night transition-[clip-path] duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] ${open ? "[clip-path:circle(150%_at_100%_0)]" : "pointer-events-none [clip-path:circle(0%_at_100%_0)]"}`}>
        <nav className="mx-auto flex h-full max-w-[calc(1160px+2rem)] flex-col justify-center px-4 md:max-w-[calc(1160px+4rem)] md:px-8" aria-label="Menu principal">
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline gap-5 py-2 font-serif text-[clamp(2.2rem,6vw,4.2rem)] leading-tight transition-all duration-700 hover:text-gold-light ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: open ? `${200 + i * 60}ms` : "0ms" }}
            >
              <span className="font-sans text-[0.85rem] text-gold-light">{String(i + 1).padStart(2, "0")}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-3 group-hover:italic">{n.label}</span>
            </a>
          ))}
          <p className="mt-10 text-sand">
            {studio.phone} · {studio.instagramHandle}
          </p>
        </nav>
      </div>
    </>
  );
}
