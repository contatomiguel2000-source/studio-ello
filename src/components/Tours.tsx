"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/base-path";

/** Vídeo que só baixa e toca quando aparece na tela. */
export function TourVideo({ slug, title, className = "" }: { slug: string; title: string; className?: string }) {
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
      className={`h-full w-full object-cover ${className}`}
      src={asset(`/video/tour-${slug}.mp4`)}
      poster={asset(`/img/tour-${slug}.webp`)}
      muted
      loop
      playsInline
      preload="none"
      aria-label={`Vídeo do projeto: ${title}`}
    />
  );
}
