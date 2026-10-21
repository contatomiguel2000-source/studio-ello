"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";
import { asset } from "@/lib/base-path";

const DURATION = 6500;

/** Topo em slideshow: troca sozinho, com zoom lento na foto e texto subindo. */
export function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setI((v) => (v + 1) % heroSlides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, DURATION);
    return () => clearTimeout(t);
  }, [i, paused, next]);

  const s = heroSlides[i];
  const n = (i + 1) % heroSlides.length;

  return (
    <section
      id="inicio"
      className="relative h-[100svh] min-h-[38rem] overflow-hidden bg-night"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrossel"
    >
      {heroSlides.map((sl, k) => (
        <div key={sl.image} className={`absolute inset-0 transition-opacity duration-[1200ms] ${k === i ? "opacity-100" : "opacity-0"}`} aria-hidden={k !== i}>
          <Image
            key={k === i ? `on-${i}` : `off-${k}`}
            src={asset(sl.image)}
            alt=""
            fill
            priority={k === 0}
            quality={90}
            sizes="100vw"
            className={`object-cover ${k === i ? "kenburns" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/40 to-night/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-coal to-transparent" />

      <div className="relative mx-auto flex h-full max-w-[calc(1160px+2rem)] flex-col justify-center px-4 md:max-w-[calc(1160px+4rem)] md:px-8">
        <div key={i}>
          <p className="kicker rise">{s.kind} · Projeto do Studio Ello</p>
          <h1 className="t-hero rise mt-5" style={{ animationDelay: "120ms" }}>
            {s.title[0]}
            <br />
            <em className="text-gold-light">{s.title[1]}</em>
          </h1>
          <a href="#projetos" className="rise group mt-8 inline-flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.16em]" style={{ animationDelay: "240ms" }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/50 transition-colors group-hover:border-gold group-hover:bg-gold">→</span>
            Ver projetos
          </a>
        </div>

        <p className="mt-10 max-w-[26rem] text-[0.98rem] leading-relaxed text-cream/85">
          Projetos de interiores online, para todo o Brasil. Já são mais de 5 mil entregues.
        </p>

        {/* próximo slide */}
        <button
          type="button"
          onClick={next}
          aria-label={`Próximo projeto: ${heroSlides[n].title.join(" ")}`}
          className="group absolute bottom-24 right-4 hidden md:right-8 h-20 overflow-hidden md:flex"
        >
          <span className="relative flex w-24 items-center justify-center bg-gold font-serif text-xl text-night">
            {String(n + 1).padStart(2, "0")}
            {!paused && <span key={i} className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-night" style={{ animation: `progress ${DURATION}ms linear forwards` }} />}
          </span>
          <span className="flex w-24 items-center justify-center bg-cream text-xl text-night transition-transform group-hover:translate-x-1">→</span>
        </button>

      </div>

      {/* pontos */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((sl, k) => (
          <button key={sl.image} type="button" onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className={`h-1 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-3 bg-cream/40"}`} />
        ))}
      </div>
    </section>
  );
}
