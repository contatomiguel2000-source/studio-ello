"use client";

import { useState } from "react";
import { rooms, whatsappLink } from "@/lib/data";

/** Sem backend: monta a mensagem e abre o WhatsApp do studio. */
export function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", room: "", city: "", msg: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Olá! Vim pelo site do Studio Ello e gostaria de um orçamento.",
      `Nome: ${f.name}`,
      f.phone && `Telefone: ${f.phone}`,
      f.room && `Ambiente: ${f.room}`,
      f.city && `Cidade: ${f.city}`,
      f.msg,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full border border-line bg-cream px-3.5 py-3 text-[0.88rem] text-ink placeholder:text-muted focus:border-bronze focus:outline-none";

  return (
    <form onSubmit={submit} className="grid gap-3 bg-white p-5 sm:grid-cols-2 md:p-7">
      <div className="sm:col-span-2">
        <p className="t-h3">Conta pra gente o que você quer mudar</p>
        <p className="mt-1 text-[0.85rem] text-muted">Ao enviar, a conversa continua no WhatsApp.</p>
      </div>
      <input required value={f.name} onChange={set("name")} placeholder="Nome *" aria-label="Nome" className={field} />
      <input type="tel" value={f.phone} onChange={set("phone")} placeholder="Telefone" aria-label="Telefone" className={field} />
      <select value={f.room} onChange={set("room")} aria-label="Ambiente" className={field}>
        <option value="">Ambiente</option>
        {rooms.map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>
      <input value={f.city} onChange={set("city")} placeholder="Cidade" aria-label="Cidade" className={field} />
      <textarea
        value={f.msg}
        onChange={set("msg")}
        rows={4}
        placeholder="Ex.: quero mudar a cozinha, ela tem 3 x 4 m"
        aria-label="Mensagem"
        className={`${field} resize-none sm:col-span-2`}
      />
      <button type="submit" className="btn btn-dark justify-center sm:col-span-2">
        Enviar
      </button>
    </form>
  );
}
