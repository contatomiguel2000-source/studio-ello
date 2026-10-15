"use client";

import { useEffect, useState } from "react";
import { nav, studio, whatsappLink } from "@/lib/data";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-bronze" aria-hidden>
        <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M11 9h10M11 16h8M11 23h10M11 9v14" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span className="leading-none">
        <span className={`block font-serif text-[1.35rem] tracking-[0.12em] ${light ? "text-white" : "text-ink"}`}>STUDIO ELLO</span>
        <span className="mt-1 block text-[0.68rem] font-semibold tracking-[0.18em] text-bronze">PROJETOS E INTERIORES</span>
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4">
      <div className="glass mx-auto flex max-w-[1160px] items-center justify-between gap-4 !rounded-full py-2 pl-4 pr-2">
        <a href="#inicio" aria-label={studio.name}>
          <Logo />
        </a>
        <nav className="hidden lg:block" aria-label="Menu principal">
          <ul className="flex items-center gap-7 text-[0.82rem] font-medium">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-bronze">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-bronze hidden !py-2.5 lg:inline-flex">
          Solicitar orçamento ↗
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="relative h-10 w-10 rounded-full bg-ink lg:hidden"
        >
          <span className={`absolute left-3 right-3 h-px bg-white transition-transform ${open ? "top-1/2 rotate-45" : "top-[calc(50%-3px)]"}`} />
          <span className={`absolute left-3 right-3 h-px bg-white transition-transform ${open ? "top-1/2 -rotate-45" : "top-[calc(50%+3px)]"}`} />
        </button>
      </div>
      {open && (
        <nav className="glass mx-auto mt-2 max-w-[1160px] p-3 lg:hidden" aria-label="Menu principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium hover:bg-sand">
              {n.label}
            </a>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-bronze mt-2 w-full justify-center">
            Solicitar orçamento ↗
          </a>
        </nav>
      )}
    </header>
  );
}
