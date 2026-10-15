"use client";

import { useEffect, useState } from "react";
import { nav, studio, whatsappLink } from "@/lib/data";

/** Barra fina no topo (como na referência) com menu em tela cheia. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.8);
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

  const light = !solid && !open;

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${light ? "text-white" : "bg-white text-night"}`}>
        <div className="mx-auto flex h-14 max-w-[calc(1160px+2rem)] items-center justify-between px-4 text-[0.82rem] md:max-w-[calc(1160px+4rem)] md:px-8">
          <a href="#inicio" className="text-[1.05rem] font-semibold tracking-[-0.04em]">
            {studio.name}®
          </a>
          <span className="hidden opacity-80 md:block">Online para todo o Brasil</span>
          <span className="hidden opacity-80 lg:block">{studio.address}, São Paulo</span>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex items-center gap-2 font-medium">
            {open ? "Fechar" : "Menu"}
            <span className="relative flex h-4 w-4 items-center justify-center border border-current" aria-hidden>
              <span className="absolute h-px w-2 bg-current" />
              <span className={`absolute h-2 w-px bg-current transition-transform ${open ? "scale-y-0" : ""}`} />
            </span>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-white pt-14 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="mx-auto flex h-full max-w-[calc(1160px+2rem)] flex-col justify-between px-4 pb-8 pt-10 md:max-w-[calc(1160px+4rem)] md:px-8">
          <nav aria-label="Menu principal">
            {nav.map((n, i) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 border-b border-line py-3 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight tracking-[-0.04em] hover:text-clay">
                <span className="text-[0.85rem] font-medium text-gray">{String(i + 1).padStart(2, "0")}</span>
                {n.label}
              </a>
            ))}
          </nav>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="cta mt-8 w-fit">
            <span className="bg-night text-white">Solicitar orçamento</span>
            <span className="bg-night text-white">→</span>
          </a>
        </div>
      </div>
    </>
  );
}
