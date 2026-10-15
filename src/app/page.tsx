import Image from "next/image";
import { Header, Logo } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { ServicesTabs } from "@/components/ServicesTabs";
import { ContactForm } from "@/components/ContactForm";
import { IconInstagram, IconPhone, IconPin, IconStar, IconWhatsapp } from "@/components/Icons";
import { faqs, nav, roomCards, rooms, steps, studio, testimonials, whatsappLink } from "@/lib/data";
import { asset } from "@/lib/base-path";

// Conteúdo limitado a 1160px (o padding fica fora dessa largura)
const wrap = "mx-auto w-full max-w-[calc(1160px+2rem)] px-4 md:max-w-[calc(1160px+4rem)] md:px-8";

function Stars({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-bronze">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className={className} />
      ))}
    </span>
  );
}

const why = [
  { title: "Projeto completo", text: "Layout, marcenaria planejada, iluminação e detalhamentos: tudo pronto para executar, sem erros na obra." },
  { title: "Imagens 3D realistas", text: "Você vê o ambiente pronto antes de começar, e ajustamos juntos até ficar do jeito que sonhou." },
  { title: "Aproveitamento do que você tem", text: "O projeto considera os móveis e peças que você já possui, com custo baixo e benefício excepcional." },
  { title: "Online para todo o Brasil", text: "Atendimento rápido e próximo, de onde você estiver, com uma equipe de arquitetos e designers." },
];

const stepIcons = [
  <path key="a" d="M4 5h16v11H8l-4 4zM8 9h8M8 12h5" />,
  <path key="b" d="M4 20l4-1 11-11-3-3L5 16zM14 6l3 3" />,
  <path key="c" d="M12 3 3 8v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8" />,
  <path key="d" d="M5 3h10l4 4v14H5zM15 3v4h4M8 12h8M8 16h8" />,
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden pb-14 pt-28 md:min-h-[100svh] md:pb-10 md:pt-0">
          <div className="absolute inset-y-0 right-0 hidden w-[68%] md:block">
            <Image src={asset("/img/hero-sala.webp")} alt="Sala de estar com sofá orgânico, projeto do Studio Ello" fill priority unoptimized sizes="68vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream from-0% via-cream/35 via-30% to-transparent to-60%" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />
          </div>
          <div className={`${wrap} relative flex flex-col justify-center md:min-h-[100svh] md:pt-24`}>
            <Reveal className="max-w-[34rem]">
              <span className="eyebrow">Projetos de interiores · Online para todo o Brasil</span>
              <h1 className="t-hero mt-5">Ambientes pensados para o jeito que você vive</h1>
              <p className="mt-5 max-w-[26rem] leading-relaxed text-muted">
                Projetos residenciais e comerciais com imagens 3D realistas, marcenaria, iluminação e detalhamento para a obra.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                  Solicitar orçamento ↗
                </a>
                <a href="#ambientes" className="btn btn-light">
                  Ver projetos →
                </a>
              </div>
            </Reveal>

            {/* imagem no celular */}
            <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl md:hidden">
              <Image src={asset("/img/hero-sala.webp")} alt="" fill unoptimized sizes="100vw" className="object-cover" />
            </div>

            <Reveal delay={150} className="mt-8 grid max-w-[36rem] grid-cols-3 gap-3 md:mt-12">
              {[
                { v: "5 mil+", l: "Projetos entregues", s: "Desde o primeiro ambiente" },
                { v: studio.rating, l: "Nota no Google", s: `${studio.reviewCount} avaliações` },
                { v: "100%", l: "Online", s: "Para todo o Brasil" },
              ].map((c) => (
                <div key={c.l} className="glass p-4">
                  <p className="font-serif text-[clamp(1.6rem,3vw,2.1rem)] leading-none">{c.v}</p>
                  <p className="mt-2 text-[0.75rem] font-medium">{c.l}</p>
                  <p className="mt-2 border-t border-line pt-2 text-[0.7rem] text-muted">{c.s}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={250} className="glass absolute right-4 top-28 hidden w-52 p-4 md:right-8 md:block">
              <div className="flex -space-x-2">
                {["/img/quarto-casal.webp", "/img/cozinha-ilha.webp", "/img/showroom-flora.webp"].map((src) => (
                  <span key={src} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                    <Image src={asset(src)} alt="" fill sizes="32px" className="object-cover" />
                  </span>
                ))}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-bronze text-[0.6rem] font-semibold text-white">5k+</span>
              </div>
              <p className="mt-3 font-serif text-[1.6rem] leading-none">5 mil+</p>
              <p className="mt-1 text-[0.75rem] text-muted">Projetos entregues</p>
              <div className="mt-3 flex items-center gap-2 border-t border-line pt-3">
                <Stars className="h-3 w-3" />
                <span className="text-[0.7rem] text-muted">{studio.rating} no Google</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-20 md:py-28">
          <div className={`${wrap} grid items-center gap-10 md:grid-cols-[1fr_1.05fr] md:gap-14`}>
            <Reveal>
              <span className="eyebrow">Sobre o Studio Ello</span>
              <h2 className="t-h2 mt-5">Um lar é o nosso refúgio</h2>
              <p className="mt-5 max-w-[28rem] leading-relaxed text-muted">
                O Studio Ello cria projetos de interiores residenciais e comerciais, 100% online, para clientes de todo o Brasil. Uma equipe de arquitetos e designers de interiores que entrega projetos completos, bonitos e prontos para executar.
              </p>
              <a href="#ambientes" className="btn btn-dark mt-7">
                Ver ambientes ↗
              </a>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["/img/cozinha.webp", "/img/espaco-gourmet.webp"].map((src) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image src={asset(src)} alt="" fill sizes="(min-width: 768px) 260px, 50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="relative">
              <div className="relative aspect-[4/4.4] overflow-hidden rounded-2xl">
                <Image src={asset("/img/sala-tv.webp")} alt="Sala de estar e TV, projeto do Studio Ello" fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
              </div>
              <div className="relative z-10 -mt-12 grid grid-cols-3 gap-3 px-3 md:px-6">
                {[
                  ["3D", "Imagens realistas"],
                  ["Sob medida", "Marcenaria e luz"],
                  ["Pronto", "Para executar"],
                ].map(([a, b]) => (
                  <div key={a} className="glass p-3 text-center">
                    <p className="font-serif text-[1.3rem] leading-none">{a}</p>
                    <p className="mt-1 text-[0.7rem] text-muted">{b}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Por que escolher */}
        <section className="py-10 md:py-16">
          <div className={`${wrap} grid gap-12 md:grid-cols-2`}>
            <Reveal>
              <span className="eyebrow">Por que escolher</span>
              <h2 className="t-h2 mt-5">Por que escolher o Studio Ello?</h2>
              <div className="mt-8 grid grid-cols-[1.2fr_1fr] gap-3">
                <div className="relative row-span-2 aspect-[3/4] overflow-hidden rounded-xl">
                  <Image src={asset("/img/emily-caroline.webp")} alt="Emily Caroline, CEO do Studio Ello" fill unoptimized sizes="(min-width: 768px) 300px, 55vw" className="object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <Image src={asset("/img/sala-verde.webp")} alt="" fill sizes="(min-width: 768px) 240px, 45vw" className="object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <Image src={asset("/img/quarto-soccer.webp")} alt="" fill sizes="(min-width: 768px) 240px, 45vw" className="object-cover" />
                </div>
              </div>
              <figure className="glass relative z-10 -mt-16 ml-6 max-w-[24rem] p-5 md:ml-10">
                <blockquote className="font-serif text-[1.15rem] leading-snug">
                  “Entendo que o lar é o nosso refúgio e que o design de interiores precisa ser acessível a todos.”
                </blockquote>
                <figcaption className="mt-3 text-[0.78rem] text-muted">
                  <strong className="font-medium text-ink">Emily Caroline</strong> · CEO do Studio Ello, escritora e palestrante
                </figcaption>
              </figure>
            </Reveal>
            <div className="md:pt-24">
              {why.map((w, i) => (
                <Reveal key={w.title} delay={i * 90} className="flex gap-6 border-b border-line py-7 first:pt-0">
                  <span className="w-12 shrink-0 border-r border-bronze/40 font-serif text-[2.4rem] leading-none text-bronze">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-serif text-[1.45rem] leading-tight">{w.title}</span>
                    <span className="mt-2 block text-[0.9rem] leading-relaxed text-muted">{w.text}</span>
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ambientes */}
        <section id="ambientes" className="py-20 md:py-28">
          <div className={wrap}>
            <Reveal className="max-w-[40rem]">
              <span className="eyebrow">Ambientes</span>
              <h2 className="t-h2 mt-5">Ambientes pensados para o dia a dia</h2>
              <p className="mt-4 leading-relaxed text-muted">Projetos residenciais e comerciais que unem beleza, funcionalidade e a identidade de quem vive ou trabalha ali.</p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {roomCards.map((r, i) => (
                <Reveal key={r.title} delay={(i % 3) * 90} className="group relative aspect-[4/3.4] overflow-hidden rounded-2xl">
                  <Image src={asset(r.image)} alt={r.title} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="glass absolute inset-x-3 bottom-3 p-4">
                    <p className="text-[0.95rem] font-medium">{r.title}</p>
                    <p className="text-[0.78rem] text-muted">{r.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10">
              <p className="text-[0.8rem] font-medium uppercase tracking-[0.14em] text-bronze">Todos os ambientes que projetamos</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {rooms.map((r) => (
                  <li key={r} className="rounded-full border border-line bg-white/70 px-4 py-1.5 text-[0.82rem]">
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-10 md:py-16">
          <div className={wrap}>
            <div className="grid gap-6 md:grid-cols-2 md:items-end">
              <Reveal>
                <span className="eyebrow">Serviços</span>
                <h2 className="t-h2 mt-5">Projetos completos, do conceito ao detalhe</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="leading-relaxed text-muted">Escolha o tipo de projeto e veja o que está incluído. Todos são feitos online, com imagens 3D realistas.</p>
              </Reveal>
            </div>
            <Reveal delay={150} className="mt-10">
              <ServicesTabs />
            </Reveal>
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes" className="py-20 md:py-28">
          <div className={wrap}>
            <Reveal className="mx-auto max-w-[40rem] text-center">
              <span className="eyebrow">Depoimentos</span>
              <h2 className="t-h2 mt-5">Amado por quem já transformou seu espaço</h2>
              <a href={studio.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-3 text-[0.9rem] text-muted hover:text-ink">
                <Stars /> <span><strong className="text-ink">{studio.rating}</strong> no Google · {studio.reviewCount} avaliações</span>
              </a>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={(i % 3) * 90} className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(18,24,32,0.05)]">
                  <span className="font-serif text-[2.6rem] leading-none text-bronze/50" aria-hidden>“</span>
                  <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-muted">{t.text}</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand font-serif text-lg text-bronze-dark">{t.name.charAt(0)}</span>
                    <span>
                      <span className="block text-[0.88rem] font-medium">{t.name}</span>
                      <span className="block text-[0.75rem] text-muted">{t.tag} · Google Maps</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Processo */}
        <section id="processo" className="py-10 md:py-16">
          <div className={`${wrap} grid gap-10 md:grid-cols-2`}>
            <Reveal>
              <span className="eyebrow">Como trabalhamos</span>
              <h2 className="t-h2 mt-5">De onde você estiver. Do jeito que você sonhou.</h2>
              <p className="mt-5 max-w-[28rem] leading-relaxed text-muted">
                Todo o processo acontece online, com atenção em cada etapa: da primeira mensagem ao projeto pronto para a obra.
              </p>
              <a href={studio.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-7 flex items-start gap-3 text-[0.88rem]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-bronze">
                  <IconPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-medium">Studio na Av. Paulista</span>
                  <span className="text-muted">{studio.address}, {studio.city}</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={120} className="relative min-h-[18rem] overflow-hidden rounded-2xl">
              <Image src={asset("/img/home-office.webp")} alt="Home office projetado pelo Studio Ello" fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
            </Reveal>
          </div>
          <div className={`${wrap} mt-8`}>
            <div className="grid rounded-2xl bg-white sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 90} className="flex flex-col items-center px-5 py-7 text-center sm:border-l sm:border-line sm:first:border-l-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" className="h-7 w-7 text-bronze" aria-hidden>
                    {stepIcons[i]}
                  </svg>
                  <p className="mt-3 font-serif text-[1.45rem] leading-none">
                    <span className="mr-1 text-[0.8em] text-bronze">{String(i + 1).padStart(2, "0")}</span> {s.title}
                  </p>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Dúvidas */}
        <section id="duvidas" className="py-20 md:py-28">
          <div className={wrap}>
            <Reveal className="mx-auto max-w-[36rem] text-center">
              <span className="eyebrow">Dúvidas</span>
              <h2 className="t-h2 mt-5">Perguntas frequentes</h2>
              <p className="mt-3 text-muted">Tudo o que você precisa saber antes de começar o seu projeto.</p>
            </Reveal>
            <div className="mx-auto mt-10 max-w-[40rem] space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-xl bg-white px-5 py-4 shadow-[0_6px_24px_rgba(18,24,32,0.04)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.95rem] font-medium">
                    {f.q}
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bronze text-white transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="pb-20 md:pb-28">
          <div className={`${wrap} grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr]`}>
            <Reveal>
              <span className="eyebrow">Fale com a gente</span>
              <h2 className="t-h2 mt-5">Vamos criar o ambiente dos seus sonhos?</h2>
              <p className="mt-4 max-w-[24rem] leading-relaxed text-muted">Conte qual ambiente você quer transformar. A equipe responde pelo WhatsApp com o orçamento.</p>
              <ul className="mt-8 space-y-4 text-[0.88rem]">
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-bronze">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-bronze"><IconWhatsapp className="h-4 w-4" /></span>
                    <span><span className="block text-[0.72rem] text-muted">WhatsApp</span>{studio.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={studio.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-bronze">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-bronze"><IconInstagram className="h-4 w-4" /></span>
                    <span><span className="block text-[0.72rem] text-muted">Instagram</span>{studio.instagramHandle}</span>
                  </a>
                </li>
                <li>
                  <a href={studio.phoneHref} className="flex items-center gap-3 hover:text-bronze">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-bronze"><IconPhone className="h-4 w-4" /></span>
                    <span><span className="block text-[0.72rem] text-muted">Ligar</span>{studio.phone}</span>
                  </a>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={120} className="relative overflow-hidden rounded-2xl p-4 pt-40 sm:p-6 sm:pt-48">
              <Image src={asset("/img/fachada-casa.webp")} alt="" fill sizes="(min-width: 768px) 660px, 100vw" className="object-cover" aria-hidden />
              <div className="relative">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line pb-8 pt-14">
        <div className={`${wrap} grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]`}>
          <div>
            <Logo />
            <p className="mt-4 max-w-[20rem] text-[0.85rem] leading-relaxed text-muted">
              {studio.legal}: projetos de interiores residenciais e comerciais, online para todo o Brasil.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: studio.instagram, label: "Instagram", icon: <IconInstagram className="h-4 w-4" /> },
                { href: whatsappLink(), label: "WhatsApp", icon: <IconWhatsapp className="h-4 w-4" /> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-bronze hover:bg-bronze hover:text-white">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-serif text-[1.3rem]">Explorar</p>
            <ul className="mt-3 space-y-2 text-[0.85rem] text-muted">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-ink">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-serif text-[1.3rem]">Contato</p>
            <ul className="mt-3 space-y-3 text-[0.85rem] text-muted">
              <li className="flex items-center gap-2"><IconWhatsapp className="h-4 w-4 text-bronze" /> {studio.phone}</li>
              <li className="flex items-center gap-2"><IconInstagram className="h-4 w-4 text-bronze" /> {studio.instagramHandle}</li>
              <li className="flex gap-2"><IconPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze" /> <span>{studio.address}<br />{studio.city}</span></li>
            </ul>
          </div>
        </div>
        <div className={`${wrap} mt-12`}>
          <p className="border-t border-line pt-6 text-[0.75rem] text-muted">© {new Date().getFullYear()} {studio.name}. Todos os direitos reservados.</p>
        </div>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5"
      >
        <IconWhatsapp className="h-6 w-6" />
      </a>
    </>
  );
}
