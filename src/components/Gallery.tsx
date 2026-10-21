"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery, galleryTags } from "@/lib/data";
import { asset } from "@/lib/base-path";

export function Gallery() {
  const [tag, setTag] = useState<(typeof galleryTags)[number]>("Todos");
  const [zoom, setZoom] = useState<number | null>(null);
  const items = tag === "Todos" ? gallery : gallery.filter((g) => g.tag === tag);

  useEffect(() => {
    if (zoom === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
      if (e.key === "ArrowRight") setZoom((z) => (z === null ? z : (z + 1) % items.length));
      if (e.key === "ArrowLeft") setZoom((z) => (z === null ? z : (z - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom, items.length]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar galeria">
        {galleryTags.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={tag === t}
            onClick={() => setTag(t)}
            className={`px-3 py-1.5 text-[0.85rem] font-medium transition-colors ${
              tag === t ? "bg-ink text-white" : "border border-line bg-white text-ink hover:border-bronze"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-2 gap-3 md:columns-3 md:gap-4">
        {items.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setZoom(i)}
            className="group mb-3 block w-full overflow-hidden bg-sand md:mb-4"
            aria-label={`Ampliar: ${g.alt}`}
          >
            <Image
              src={asset(g.src)}
              alt={g.alt}
              width={g.w}
              height={g.h}
              quality={90}
              sizes="(min-width: 1024px) 380px, (min-width: 768px) 33vw, 50vw"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {zoom !== null && items[zoom] && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4" onClick={() => setZoom(null)} role="dialog" aria-modal="true" aria-label={items[zoom].alt}>
          <div className="relative h-[86vh] w-full max-w-6xl">
            <Image src={asset(items[zoom].src)} alt={items[zoom].alt} fill quality={90} sizes="100vw" className="object-contain" />
          </div>
          <button type="button" className="absolute right-5 top-5 text-3xl text-white" aria-label="Fechar">
            ×
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[0.85rem] text-white/80">
            {zoom + 1} / {items.length} · use as setas do teclado
          </p>
        </div>
      )}
    </div>
  );
}
