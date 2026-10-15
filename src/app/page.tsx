import Image from "next/image";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { IconInstagram, IconPhone, IconPin, IconStar, IconWhatsapp } from "@/components/Icons";
import { faqs, heroServices, nav, projects, rooms, services, stats, steps, studio, testimonials, whatsappLink } from "@/lib/data";
import { asset } from "@/lib/base-path";

// Conteúdo limitado a 1160px (o padding fica fora dessa largura)
const wrap = "mx-auto w-full max-w-[calc(1160px+2rem)] px-4 md:max-w-[calc(1160px+4rem)] md:px-8";

/** Linhas verticais de fundo, como a grade de 4 colunas da referência. */
function GridLines({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${wrap}`} aria-hidden>
      <div className={`grid h-full grid-cols-2 border-x md:grid-cols-4 ${dark ? "border-white/10" : "border-line"}`}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`${i > 0 ? "border-l" : ""} ${i > 1 ? "max-md:hidden" : ""} ${dark ? "border-white/10" : "border-line"}`} />
        ))}
      </div>
    </div>
  );
}

function Cta({ href, children, dark = true, external = true }: { href: string; children: React.ReactNode; dark?: boolean; external?: boolean }) {
  const c = dark ? "bg-night text-white group-hover:bg-clay" : "bg-white text-night group-hover:bg-sand";
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="cta group w-fit">
      <span className={c}>{children}</span>
      <span className={c}>→</span>
    </a>
  );
}

function Stars() {
  return (
    <span className="flex gap-0.5 text-night">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="h-3 w-3" />
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section id="inicio" className="relative h-[100svh] min-h-[40rem] overflow-hidden bg-night text-white">
          <Image src={asset("/img/hero-sala.webp")} alt="Sala de estar com sofá orgânico, projeto do Studio Ello" fill priority unoptimized sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/60" />
          <div className={`${wrap} relative flex h-full flex-col justify-between pb-8 pt-20`}>
            <div className="grid gap-8 md:grid-cols-4">
              <Reveal className="md:col-span-3">
                <h1 className="t-mega">Studio Ello®</h1>
                <p className="mt-5 max-w-[26rem] text-[1.02rem] leading-snug text-white/90">
                  Projetos de interiores residenciais e comerciais com imagens 3D realistas, online para todo o Brasil.
                </p>
              </Reveal>
              <Reveal delay={150} className="flex flex-col gap-6 md:items-end md:pt-4">
                <ol className="space-y-1 text-[0.82rem] text-white/85">
                  {heroServices.map((s, i) => (
                    <li key={s}>
                      <span className="mr-2 text-white/55">{String(i + 1).padStart(2, "0")}</span>
                      {s}
                    </li>
                  ))}
                </ol>
                <Cta href={whatsappLink()} dark={false}>
                  Solicitar orçamento
                </Cta>
              </Reveal>
            </div>
            <Reveal delay={250} className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 rounded-sm bg-white/15 px-2 py-1 backdrop-blur">
                  <IconStar className="h-3.5 w-3.5" /> {studio.rating}
                </span>
                <p className="text-[0.82rem] leading-tight text-white/85">
                  Mais de 5 mil projetos entregues
                  <br />
                  {studio.reviewCount} avaliações no Google
                </p>
              </div>
              <div className="flex gap-2">
                {["/img/showroom-flora.webp", "/img/area-gourmet.webp", "/img/quarto-casal.webp"].map((src) => (
                  <a key={src} href="#projetos" className="relative h-14 w-20 overflow-hidden border border-white/40">
                    <Image src={asset(src)} alt="" fill sizes="80px" className="object-cover" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="relative">
          <GridLines />
          <div className={`${wrap} relative grid gap-8 pb-0 pt-24 md:grid-cols-4 md:pt-32`}>
            <Reveal className="text-[0.78rem]">
              <span className="label">Sobre</span>
            </Reveal>
            <Reveal delay={100} className="md:col-span-3">
              <h2 className="t-h1 max-w-[22ch]">
                O Studio Ello cria projetos de interiores residenciais e comerciais, 100% online, para clientes de todo o Brasil.
              </h2>
              <p className="mt-6 max-w-[34rem] leading-relaxed text-gray">
                Uma equipe de arquitetos e designers de interiores que entrega projetos completos e prontos para executar: imagens 3D realistas, marcenaria planejada, iluminação e detalhamentos pensados para evitar erros na obra.
              </p>
            </Reveal>
          </div>
          <div className={`${wrap} relative mt-16 grid md:grid-cols-4`}>
            <div className="hidden md:block" />
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="flex min-h-[11rem] flex-col justify-between border-t border-line bg-mist/70 p-5">
                <span className="text-[2.5rem] font-medium tracking-[-0.05em]">{s.value}</span>
                <span className="text-[0.85rem] text-gray">{s.label}</span>
              </Reveal>
            ))}
          </div>

          {/* CEO */}
          <div className={`${wrap} relative grid gap-8 py-20 md:grid-cols-4 md:py-28`}>
            <Reveal className="relative aspect-[7/10] overflow-hidden md:col-start-2">
              <Image src={asset("/img/emily-caroline.webp")} alt="Emily Caroline, CEO do Studio Ello" fill unoptimized sizes="(min-width: 768px) 290px, 100vw" className="object-cover" />
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-end md:col-span-2">
              <span className="label text-clay">Conheça nossa CEO</span>
              <blockquote className="t-h3 mt-5 max-w-[30rem] font-medium">
                “Entendo que o lar é o nosso refúgio e que o design de interiores precisa ser acessível a todos. Temos uma equipe incrível, com arquitetos e designers de interiores prontos para atender cada cliente com amor e dedicação.”
              </blockquote>
              <p className="mt-6 font-semibold">Emily Caroline</p>
              <p className="text-[0.9rem] text-gray">CEO do Studio Ello · Formada em Marketing, escritora e palestrante, autora do livro “Eu Entre Polos”.</p>
            </Reveal>
          </div>
        </section>

        {/* Faixa com imagem */}
        <section className="relative overflow-hidden bg-night" aria-label="Studio Ello">
          <div className="relative h-[60vh] min-h-[22rem]">
            <Image src={asset("/img/sala-jantar.webp")} alt="" fill sizes="100vw" className="object-cover opacity-90" aria-hidden />
          </div>
          <div className="absolute inset-x-0 bottom-6 overflow-hidden" aria-hidden>
            <div className="marquee gap-10 whitespace-nowrap text-[clamp(3rem,7vw,6rem)] font-semibold tracking-[-0.05em] text-white">
              {Array.from({ length: 2 }).map((_, k) => (
                <span key={k} className="flex gap-10">
                  {["Projetos incríveis", "Online para todo o Brasil", "Qualidade e segurança", "Studio Ello"].map((t) => (
                    <span key={t} className="flex items-center gap-10">
                      {t} <span className="text-[0.4em] text-clay">◆</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="relative pb-24">
          <GridLines />
          <div className={`${wrap} relative grid gap-6 pt-24 md:grid-cols-4 md:pt-32`}>
            <Reveal>
              <span className="label text-[0.78rem]">Portfólio</span>
            </Reveal>
            <Reveal delay={100} className="md:col-span-3">
              <h2 className="t-mega !text-[clamp(3rem,7vw,6rem)]">Projetos recentes</h2>
            </Reveal>
          </div>
          <div className={`${wrap} relative mt-14 grid gap-x-0 gap-y-10 md:grid-cols-4`}>
            {projects.map((p, i) => {
              const layout = [
                "md:col-span-2 md:col-start-2",
                "md:col-span-1 md:col-start-1 md:mt-8",
                "md:col-span-2 md:col-start-3",
                "md:col-span-1 md:col-start-2",
                "md:col-span-2 md:col-start-3 md:mt-24",
                "md:col-span-1 md:col-start-1",
                "md:col-span-2 md:col-start-2",
                "md:col-span-1 md:col-start-4 md:mt-20",
              ][i];
              return (
                <Reveal key={p.name} className={`${layout} md:px-0`}>
                  <div className={`relative overflow-hidden bg-mist ${p.ratio}`}>
                    <Image src={asset(p.image)} alt={p.name} fill sizes="(min-width: 768px) 580px, 100vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
                  </div>
                  <div className="mt-2 flex justify-between text-[0.8rem]">
                    <span className="font-medium">{p.name}</span>
                    <span className="text-gray">{p.type}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className={`${wrap} relative mt-16`}>
            <Reveal className="border-t border-line pt-6">
              <p className="text-[0.85rem] text-gray">Ambientes que projetamos</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {rooms.map((r) => (
                  <li key={r} className="border border-line bg-white px-3 py-1.5 text-[0.85rem]">
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Cta href={studio.instagram}>Ver mais no Instagram</Cta>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="relative bg-night text-white">
          <GridLines dark />
          <div className={`${wrap} relative grid gap-8 pb-16 pt-24 md:grid-cols-4 md:pt-32`}>
            <Reveal className="md:col-span-2">
              <span className="label text-[0.78rem] text-white/80">Serviços</span>
              <h2 className="t-mega mt-6 !text-[clamp(3rem,7vw,6rem)]">O que fazemos</h2>
              <p className="mt-5 max-w-[24rem] text-white/65">Do primeiro conceito ao detalhamento final, o Studio Ello cuida do projeto completo do seu ambiente.</p>
            </Reveal>
            <Reveal delay={100} className="flex items-end md:col-start-3">
              <Cta href={whatsappLink()} dark={false}>
                Começar um projeto
              </Cta>
            </Reveal>
            <Reveal delay={150} className="flex items-end text-[0.78rem] text-white/45 md:col-start-4">
              {studio.legal}®
            </Reveal>
          </div>
          <div className={`${wrap} relative pb-24`}>
            {services.map((s, i) => (
              <Reveal key={s.title} className="grid border-t border-white/10 md:grid-cols-4">
                <div className="py-10 pr-6 md:col-span-2 md:py-14">
                  <span className="text-[0.8rem] text-white/45">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="t-h2 mt-3 !text-[clamp(1.6rem,2.6vw,2.2rem)]">{s.title}</h3>
                  <p className="mt-4 max-w-[30rem] leading-relaxed text-white/65">{s.text}</p>
                  <ul className="mt-6 space-y-1.5 text-[0.88rem] text-white/85">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-1 w-1 bg-clay" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden md:col-span-2 md:aspect-auto md:min-h-[26rem]">
                  <Image src={asset(s.image)} alt={s.title} fill sizes="(min-width: 768px) 580px, 100vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Processo */}
          <div id="processo" className={`${wrap} relative grid gap-8 border-t border-white/10 pb-10 pt-24 md:grid-cols-4`}>
            <Reveal>
              <span className="label text-[0.78rem] text-white/80">Processo</span>
            </Reveal>
            <Reveal delay={100} className="md:col-span-2">
              <h2 className="t-h1">Como trabalhamos</h2>
              <p className="mt-4 max-w-[26rem] text-white/65">Um caminho claro, da primeira conversa ao projeto pronto para executar, tudo online.</p>
            </Reveal>
            <Reveal delay={150} className="flex items-end">
              <Cta href={whatsappLink()} dark={false}>
                Fale com a gente
              </Cta>
            </Reveal>
          </div>
          <div className={`${wrap} relative grid pb-28 sm:grid-cols-2 md:grid-cols-4`}>
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="flex min-h-[15rem] flex-col justify-between border-t border-white/10 p-5">
                <div className="flex justify-between">
                  <span className="text-[1.1rem] font-medium">{s.title}</span>
                  <span className="text-[0.75rem] text-white/45">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-[0.88rem] leading-relaxed text-white/60">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes" className="relative">
          <GridLines />
          <div className={`${wrap} relative grid gap-8 pt-24 md:grid-cols-4 md:pt-32`}>
            <Reveal>
              <span className="label text-[0.78rem]">Clientes</span>
            </Reveal>
            <Reveal delay={100} className="md:col-span-3">
              <h2 className="t-h1 max-w-[20ch]">Do primeiro contato ao projeto pronto: é assim que nossos clientes descrevem o Studio Ello.</h2>
              <a href={studio.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 text-[0.9rem] text-gray hover:text-night">
                <Stars /> <span><strong className="text-night">{studio.rating}</strong> no Google · {studio.reviewCount} avaliações</span>
              </a>
            </Reveal>
          </div>
          <div className={`${wrap} relative mt-14 grid pb-24 sm:grid-cols-2 lg:grid-cols-3`}>
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 90} className="flex min-h-[17rem] flex-col justify-between border-t border-line bg-mist/70 p-6 sm:border-l">
                <div>
                  <div className="flex items-center justify-between text-[0.78rem] text-gray">
                    <span>{t.tag}</span>
                    <Stars />
                  </div>
                  <p className="mt-5 leading-relaxed">{t.text}</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center bg-sand text-[0.85rem] font-semibold text-clay">{t.name.charAt(0)}</span>
                  <span>
                    <span className="block text-[0.9rem] font-medium">{t.name}</span>
                    <span className="block text-[0.75rem] text-gray">Google Maps</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Dúvidas */}
        <section id="duvidas" className="relative border-t border-line">
          <GridLines />
          <div className={`${wrap} relative grid gap-10 py-24 md:grid-cols-4 md:py-32`}>
            <Reveal className="md:col-span-2">
              <span className="label text-[0.78rem]">Dúvidas</span>
              <h2 className="t-mega mt-6 !text-[clamp(3rem,6vw,5.2rem)]">Perguntas frequentes</h2>
              <p className="mt-5 max-w-[22rem] text-gray">As perguntas que mais recebemos antes de começar um projeto. Não achou a sua? Chama no WhatsApp.</p>
              <a href={whatsappLink("Olá! Tenho uma dúvida sobre os projetos do Studio Ello.")} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-[0.9rem] font-medium underline underline-offset-4 hover:text-clay">
                Fazer uma pergunta →
              </a>
            </Reveal>
            <div className="md:col-span-2">
              {faqs.map((f, i) => (
                <details key={f.q} className="group border-t border-line bg-white py-4 last:border-b">
                  <summary className="flex cursor-pointer list-none items-start gap-4">
                    <span className="pt-0.5 text-[0.75rem] text-gray">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 font-medium">{f.q}</span>
                    <span className="text-xl leading-none text-gray transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pl-9 leading-relaxed text-gray">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-night text-white">
        <GridLines dark />
        <div className={`${wrap} relative grid gap-10 pb-8 pt-24 md:grid-cols-4`}>
          <div className="md:col-span-2">
            <h2 className="t-h1 !text-[clamp(2.5rem,5vw,4.2rem)]">Seu próximo ambiente começa aqui.</h2>
            <p className="mt-4 max-w-[22rem] text-white/60">Todo grande projeto começa com uma conversa. Chama a gente e vamos começar o seu.</p>
            <div className="mt-8">
              <Cta href={whatsappLink()} dark={false}>
                Solicitar orçamento
              </Cta>
            </div>
          </div>
          <div>
            <p className="text-[0.78rem] text-white/45">Páginas</p>
            <ul className="mt-3 space-y-1.5 text-[0.95rem]">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-clay">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.78rem] text-white/45">Contato</p>
            <ul className="mt-3 space-y-3 text-[0.9rem] text-white/85">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-clay">
                  <IconWhatsapp className="h-4 w-4" /> {studio.phone}
                </a>
              </li>
              <li>
                <a href={studio.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-clay">
                  <IconInstagram className="h-4 w-4" /> {studio.instagramHandle}
                </a>
              </li>
              <li>
                <a href={studio.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-clay">
                  <IconPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{studio.address}<br />{studio.city}</span>
                </a>
              </li>
              <li>
                <a href={studio.phoneHref} className="flex items-center gap-2 hover:text-clay">
                  <IconPhone className="h-4 w-4" /> Ligar
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${wrap} relative`}>
          <p className="t-mega select-none text-white/25" aria-hidden>Studio Ello®</p>
          <div className="mt-6 flex flex-col gap-2 border-t border-white/10 py-6 text-[0.78rem] text-white/50 md:flex-row md:justify-between">
            <p>{studio.legal} · Projetos de interiores online para todo o Brasil</p>
            <p>© {new Date().getFullYear()} {studio.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-4 z-30 flex h-12 w-12 items-center justify-center bg-[#25d366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5"
      >
        <IconWhatsapp className="h-6 w-6" />
      </a>
    </>
  );
}
