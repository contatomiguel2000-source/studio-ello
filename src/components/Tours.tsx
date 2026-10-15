"use client";

import { useEffect, useRef, useState } from "react";
import { tours } from "@/lib/data";
import { asset } from "@/lib/base-path";

/** Vídeo que só baixa e toca quando aparece na tela (11 vídeos não pesam no carregamento). */
function TourVideo({ slug, title }: { slug: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      src={asset(`/video/tour-${slug}.mp4`)}
      poster={asset(`/img/tour-${slug}.webp`)}
      muted
      loop
      playsInline
      preload="none"
      aria-label={`Tour 3D: ${title}`}
    />
  );
}

export function Tours() {
  const [all, setAll] = useState(false);
  const list = all ? tours : tours.slice(0, 6);
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t, i) => (
          <figure key={t.slug} className={`overflow-hidden rounded-2xl bg-white ${i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}`}>
            <div className={`relative ${i === 0 ? "aspect-[16/10] lg:aspect-auto lg:h-[calc(100%-3.5rem)]" : "aspect-[16/10]"}`}>
              <TourVideo slug={t.slug} title={t.title} />
            </div>
            <figcaption className="flex h-14 items-center justify-between px-4 text-[0.88rem]">
              <span className="font-medium text-ink">{t.title}</span>
              <span className="text-[0.8rem] text-muted">{t.type}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {!all && (
        <div className="mt-8 text-center">
          <button type="button" onClick={() => setAll(true)} className="btn btn-light">
            Ver mais {tours.length - 6} tours →
          </button>
        </div>
      )}
    </div>
  );
}
