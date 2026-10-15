"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/lib/data";
import { asset } from "@/lib/base-path";

/** Seletor de serviços no estilo do seletor de plantas da referência. */
export function ServicesTabs() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div role="tablist" aria-label="Serviços" className="flex flex-col gap-2">
        {services.map((sv, i) => {
          const on = i === active;
          return (
            <button
              key={sv.title}
              role="tab"
              type="button"
              aria-selected={on}
              onClick={() => setActive(i)}
              className={`flex items-center justify-between rounded-xl px-5 py-4 text-left text-[0.92rem] transition-colors ${
                on ? "bg-ink text-white" : "bg-white/60 hover:bg-white"
              }`}
            >
              <span>
                <span className={`mr-3 font-serif text-[1.1rem] ${on ? "text-bronze" : "text-bronze"}`}>{String(i + 1).padStart(2, "0")}</span>
                {sv.title}
              </span>
              <span aria-hidden>→</span>
            </button>
          );
        })}
      </div>

      <div className="glass grid gap-6 p-5 md:grid-cols-2 md:p-6" role="tabpanel">
        <div className="flex flex-col">
          <h3 className="t-h3">{s.title}</h3>
          <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">{s.text}</p>
          <ul className="mt-5 space-y-2.5 text-[0.88rem]">
            {s.items.map((it) => (
              <li key={it} className="flex items-center gap-3 border-b border-line pb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                {it}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[16rem] overflow-hidden rounded-xl bg-sand">
          {services.map((sv, i) => (
            <Image
              key={sv.title}
              src={asset(sv.image)}
              alt={sv.title}
              fill
              sizes="(min-width: 1024px) 340px, 100vw"
              className={`object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
