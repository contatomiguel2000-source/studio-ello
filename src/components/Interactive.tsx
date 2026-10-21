"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { featured, services, testimonials } from "@/lib/data";
import { asset } from "@/lib/base-path";
import { TourVideo } from "./Tours";

/* ---------- Carrossel de serviços: arrastar, rolar ou usar as setas ---------- */
export function ServicesCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 20), behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={track}
        className="no-scrollbar -mx-4 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto px-4 active:cursor-grabbing md:mx-0 md:px-0"
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse" || !track.current) return;
          drag.current = { x: e.clientX, left: track.current.scrollLeft };
        }}
        onPointerMove={(e) => {
          if (!drag.current || !track.current) return;
          track.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
        }}
        onPointerUp={() => (drag.current = null)}
        onPointerLeave={() => (drag.current = null)}
      >
        {services.map((s) => (
          <article key={s.title} data-card className="group relative h-[26rem] w-[78%] shrink-0 snap-start overflow-hidden sm:w-[46%] lg:w-[calc((100%-2.5rem)/3)]">
            <Image src={asset(s.image)} alt="" fill quality={90} draggable={false} sizes="(min-width: 1024px) 380px, 80vw" className="object-cover transition-transform duration-[900ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/10 transition-colors duration-500 group-hover:via-night/60" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="t-h3">{s.title}</h3>
              <p className="mt-2 max-h-0 overflow-hidden text-[0.92rem] leading-relaxed text-cream/85 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 max-md:max-h-40 max-md:opacity-100">
                {s.text}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        {([-1, 1] as const).map((d) => (
          <button key={d} type="button" onClick={() => go(d)} aria-label={d === -1 ? "Anterior" : "Próximo"} className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-lg transition-colors hover:border-gold hover:bg-gold hover:text-night">
            {d === -1 ? "←" : "→"}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Lista de projetos: a foto acompanha o mouse ---------- */
export function ProjectList() {
  const [hover, setHover] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const box = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={box}
      className="relative"
      onMouseMove={(e) => {
        const r = box.current?.getBoundingClientRect();
        if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setHover(null)}
    >
      <ul className="border-t border-line">
        {featured.map((p, i) => (
          <li key={p.title} onMouseEnter={() => setHover(i)} className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-line py-5 md:grid-cols-[3rem_1.3fr_1fr_8rem] md:items-center">
            <span className="font-serif text-[1.05rem] text-gold-light">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[1.15rem] transition-transform duration-300 group-hover:translate-x-2">{p.title}</span>
            <span className="col-start-2 mt-1 text-[0.9rem] text-sand md:col-start-auto md:mt-0">“{p.note.length > 70 ? p.note.slice(0, p.note.lastIndexOf(" ", 70)) + "…" : p.note}”</span>
            <span className="col-start-2 mt-1 text-[0.82rem] uppercase tracking-[0.12em] text-sand md:col-start-auto md:mt-0 md:text-right">{p.kind}</span>
          </li>
        ))}
      </ul>
      {/* imagem flutuante (só com mouse) */}
      <div
        className="pointer-events-none absolute left-0 top-0 hidden h-56 w-80 overflow-hidden transition-[opacity,transform] duration-300 ease-out md:block"
        style={{ transform: `translate(${pos.x + 24}px, ${pos.y - 112}px) rotate(${hover === null ? 0 : -3}deg)`, opacity: hover === null ? 0 : 1 }}
        aria-hidden
      >
        {featured.map((p, i) => (
          <div key={p.title} className={`absolute inset-0 transition-opacity duration-300 ${hover === i ? "opacity-100" : "opacity-0"}`}>
            <Image src={asset(p.video ? `/img/tour-${p.video}.webp` : p.image!)} alt="" fill quality={90} sizes="320px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Projeto em destaque com setas ---------- */
export function Spotlight() {
  const list = featured.filter((f) => f.video);
  const [i, setI] = useState(0);
  const p = list[i];
  return (
    <div className="relative grid md:grid-cols-[1.5fr_1fr]">
      <div className="relative aspect-[16/10] overflow-hidden bg-night md:aspect-auto md:min-h-[30rem]">
        <TourVideo key={p.video} slug={p.video!} title={p.title} />
      </div>
      <div className="relative bg-cream p-8 text-ink md:-ml-24 md:mt-16 md:self-end md:p-10">
        <p className="kicker !text-[#7a5a2e]">{p.kind}</p>
        <h3 key={p.title} className="t-h2 rise mt-3">{p.title}</h3>
        <p key={p.note} className="rise mt-4 leading-relaxed text-[#4a443b]">“{p.note}”</p>
        <p className="mt-2 text-[0.82rem] text-[#6b6358]">Comentário da equipe no post do projeto</p>
        <div className="mt-8 flex items-center gap-4">
          <button type="button" onClick={() => setI((v) => (v - 1 + list.length) % list.length)} aria-label="Projeto anterior" className="flex h-11 w-11 items-center justify-center bg-gold text-night transition-colors hover:bg-ink hover:text-cream">
            ←
          </button>
          <button type="button" onClick={() => setI((v) => (v + 1) % list.length)} aria-label="Próximo projeto" className="flex h-11 w-11 items-center justify-center bg-gold text-night transition-colors hover:bg-ink hover:text-cream">
            →
          </button>
          <span className="text-[0.85rem] text-[#6b6358]">
            {i + 1} / {list.length}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Depoimentos em carrossel ---------- */
export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % testimonials.length), 7000);
    return () => clearTimeout(t);
  }, [i, paused]);
  const t = testimonials[i];
  return (
    <div className="mx-auto max-w-[46rem] text-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative min-h-[11rem] md:min-h-[9rem]">
        <blockquote key={i} className="rise font-serif text-[clamp(1.15rem,2vw,1.45rem)] leading-relaxed text-cream/95">
          {t.text}
        </blockquote>
      </div>
      <p key={t.name} className="rise mt-5 text-gold-light">
        {t.name}
        {"when" in t && t.when ? <span className="text-sand">, {t.when}</span> : null}
      </p>
      <div className="mt-8 flex items-center justify-center gap-6">
        <button type="button" onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)} aria-label="Anterior" className="text-xl text-sand hover:text-gold-light">
          ←
        </button>
        <div className="flex gap-2">
          {testimonials.map((x, k) => (
            <button key={x.name} type="button" onClick={() => setI(k)} aria-label={`Depoimento ${k + 1}`} className={`h-1.5 rounded-full transition-all ${k === i ? "w-6 bg-gold" : "w-1.5 bg-cream/30"}`} />
          ))}
        </div>
        <button type="button" onClick={() => setI((v) => (v + 1) % testimonials.length)} aria-label="Próximo" className="text-xl text-sand hover:text-gold-light">
          →
        </button>
      </div>
    </div>
  );
}

/* ---------- Vídeo em tela cheia ao clicar no play ---------- */
export function VideoPlay({ slug, label }: { slug: string; label: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="group flex flex-col items-center gap-4" aria-label={`Assistir: ${label}`}>
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold-light">
          <span className="absolute inset-0 animate-ping rounded-full border border-gold/50" />
          <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-current" aria-hidden>
            <path d="M7 4v16l13-8z" />
          </svg>
        </span>
        <span className="font-serif text-[1.6rem] leading-tight">
          <em className="text-sand">a gente projeta</em>
          <br />
          online
        </span>
      </button>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-night/95 p-4" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label={label}>
          <video className="max-h-[85vh] w-full max-w-5xl" src={asset(`/video/tour-${slug}.mp4`)} autoPlay muted loop playsInline controls />
          <button type="button" className="absolute right-5 top-5 text-3xl" aria-label="Fechar">
            ×
          </button>
        </div>
      )}
    </>
  );
}

/* ---------- Selo circular girando ---------- */
export function RotatingBadge() {
  const text = "STUDIO ELLO · PROJETOS E INTERIORES · ONLINE PARA TODO O BRASIL · ";
  return (
    <div className="relative h-40 w-40 rounded-full border border-gold/60 bg-coal" aria-hidden>
      <svg viewBox="0 0 160 160" className="spin-slow absolute inset-0">
        <defs>
          <path id="circle" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" />
        </defs>
        <text className="fill-gold-light text-[10.4px] font-semibold tracking-[0.18em]">
          <textPath href="#circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-serif text-[2.6rem] text-cream">E</span>
    </div>
  );
}
