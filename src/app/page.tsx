import Image from "next/image";
import { Header, Logo } from "@/components/Header";
import { ServicesTabs } from "@/components/ServicesTabs";
import { ContactForm } from "@/components/ContactForm";
import { Gallery } from "@/components/Gallery";
import { TourVideo } from "@/components/Tours";
import { IconInstagram, IconPin, IconStar, IconWhatsapp } from "@/components/Icons";
import { faqs, featured, nav, rooms, steps, studio, testimonials, tours, whatsappLink } from "@/lib/data";
import { asset } from "@/lib/base-path";

// Conteúdo limitado a 1160px (o padding fica fora dessa largura)
const wrap = "mx-auto w-full max-w-[calc(1160px+2rem)] px-4 md:max-w-[calc(1160px+4rem)] md:px-8";

const usedInFeatured = new Set(featured.map((f) => f.video).filter(Boolean));
const otherTours = tours.filter((t) => !usedInFeatured.has(t.slug));

function Stars() {
  return (
    <span className="flex gap-0.5 text-bronze" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="h-3.5 w-3.5" />
      ))}
    </span>
  );
}

export default function Home() {
  const [first, ...rest] = featured;

  return (
    <>
      <Header />

      <main>
        {/* Topo */}
        <section id="inicio" className="pt-24 md:pt-28">
          <div className={wrap}>
            <div className="grid gap-8 md:grid-cols-[1fr_1.35fr] md:items-end">
              <div className="pb-2">
                <h1 className="t-hero">Projetos de interiores online, para todo o Brasil.</h1>
                <p className="mt-5 max-w-[27rem] text-[1.05rem] leading-relaxed text-muted">
                  Somos o Studio Ello. Fazemos o projeto da sua casa, loja ou consultório com imagens 3D e o detalhamento para a obra. Já são mais de 5 mil projetos entregues.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                    Pedir orçamento no WhatsApp
                  </a>
                  <a href="#projetos" className="text-[0.95rem] font-medium underline decoration-bronze underline-offset-4">
                    Ver projetos
                  </a>
                </div>
                <a href={studio.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center gap-2 text-[0.9rem] text-muted">
                  <Stars /> {studio.rating} no Google, {studio.reviewCount} avaliações
                </a>
              </div>
              <figure>
                <div className="relative aspect-[1440/990] overflow-hidden bg-sand md:-mr-8">
                  <Image src={asset("/img/hero-sala.webp")} alt="Sala de estar com sofá curvo e cozinha integrada" fill priority unoptimized sizes="(min-width: 768px) 680px, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-[0.82rem] text-muted">Sala com cozinha integrada, imagem 3D do projeto.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Projetos reais */}
        <section id="projetos" className="pt-24 md:pt-32">
          <div className={wrap}>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="t-h2">Alguns projetos nossos</h2>
              <a href={studio.instagram} target="_blank" rel="noopener noreferrer" className="text-[0.92rem] text-muted hover:text-ink">
                Tem mais no Instagram, {studio.instagramHandle}
              </a>
            </div>

            {/* destaque */}
            <article className="mt-10 grid gap-6 md:grid-cols-[1.6fr_1fr] md:items-end">
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                {first.video ? <TourVideo slug={first.video} title={first.title} /> : null}
              </div>
              <div>
                <p className="text-[0.85rem] text-muted">{first.kind}</p>
                <h3 className="t-h3 mt-1">{first.title}</h3>
                <blockquote className="mt-4 border-l-2 border-bronze pl-4 text-[1rem] leading-relaxed">“{first.note}”</blockquote>
                <p className="mt-2 pl-[1.1rem] text-[0.82rem] text-muted">Comentário da equipe no post do projeto</p>
              </div>
            </article>

            {/* demais projetos em grade irregular */}
            <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-12">
              {rest.map((p, i) => {
                const layout = ["md:col-span-7", "md:col-span-5 md:mt-24", "md:col-span-5", "md:col-span-7 md:-mt-20", "md:col-span-6", "md:col-span-6 md:mt-16", "md:col-span-8 md:col-start-3"][i] ?? "md:col-span-6";
                const ratio = p.image === "/img/lavanderia.webp" ? "aspect-[4/5]" : "aspect-[16/10]";
                return (
                  <article key={p.title} className={layout}>
                    <div className={`relative overflow-hidden bg-sand ${ratio}`}>
                      {p.video ? (
                        <TourVideo slug={p.video} title={p.title} />
                      ) : (
                        <Image src={asset(p.image!)} alt={p.title} fill quality={90} sizes="(min-width: 768px) 640px, 100vw" className="object-cover" />
                      )}
                    </div>
                    <div className="mt-3 flex items-baseline justify-between gap-4">
                      <h3 className="text-[1.05rem] font-medium">{p.title}</h3>
                      <span className="shrink-0 text-[0.82rem] text-muted">{p.kind}</span>
                    </div>
                    <p className="mt-1.5 max-w-[34rem] text-[0.95rem] leading-relaxed text-muted">“{p.note}”</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quem somos */}
        <section id="quem-somos" className="mt-28 bg-sand py-20 md:mt-36 md:py-24">
          <div className={`${wrap} grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16`}>
            <figure>
              <div className="relative aspect-[7/10] overflow-hidden">
                <Image src={asset("/img/emily-caroline.webp")} alt="Emily Caroline" fill unoptimized sizes="(min-width: 768px) 360px, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-[0.85rem] text-muted">Emily Caroline, CEO do Studio Ello</figcaption>
            </figure>
            <div className="md:pt-6">
              <h2 className="t-h2">Quem somos</h2>
              <div className="mt-6 max-w-[34rem] space-y-4 text-[1.02rem] leading-relaxed">
                <p>
                  O Studio Ello nasceu online e continua assim: a equipe de arquitetas e designers de interiores atende clientes do Brasil inteiro sem precisar de visita presencial.
                </p>
                <p>
                  À frente do studio está a Emily Caroline, formada em Marketing, escritora e palestrante. Ela costuma dizer que a jornada de um studio totalmente online é árdua, mas que cada etapa vale a pena.
                </p>
              </div>
              <blockquote className="mt-8 max-w-[34rem] font-serif text-[1.6rem] leading-snug">
                “Entendo que o lar é o nosso refúgio e que o design de interiores precisa ser acessível a todos.”
              </blockquote>
              <p className="mt-3 text-[0.9rem] text-muted">Emily Caroline</p>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["/img/cozinha.webp", "/img/quarto-soccer.webp", "/img/espaco-gourmet.webp"].map((src, i) => (
                  <div key={src} className={`relative aspect-[4/3] overflow-hidden ${i === 2 ? "max-sm:hidden" : ""}`}>
                    <Image src={asset(src)} alt="" fill quality={90} sizes="220px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-24 md:py-32">
          <div className={wrap}>
            <h2 className="t-h2">O que a gente projeta</h2>
            <p className="mt-4 max-w-[36rem] leading-relaxed text-muted">
              {rooms[0]}, {rooms.slice(1, -1).map((r) => r.toLowerCase()).join(", ")} e {rooms[rooms.length - 1].toLowerCase()}. Alguns exemplos por tipo de projeto:
            </p>
            <div className="mt-10">
              <ServicesTabs />
            </div>
          </div>
        </section>

        {/* Mais vídeos */}
        {otherTours.length > 0 && (
          <section className="pb-24 md:pb-32">
            <div className={wrap}>
              <h2 className="t-h3">Mais vídeos de projetos</h2>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                {otherTours.map((t) => (
                  <figure key={t.slug}>
                    <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                      <TourVideo slug={t.slug} title={t.title} />
                    </div>
                    <figcaption className="mt-2 text-[0.88rem]">{t.title}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Galeria */}
        <section id="galeria" className="border-t border-line py-24 md:py-32">
          <div className={wrap}>
            <h2 className="t-h2">Galeria</h2>
            <p className="mt-4 max-w-[36rem] leading-relaxed text-muted">
              Imagens tiradas dos nossos projetos. Em “Detalhamento” estão algumas plantas técnicas que vão junto com o projeto.
            </p>
            <div className="mt-8">
              <Gallery />
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="bg-ink py-20 text-white md:py-24">
          <div className={`${wrap} grid gap-10 md:grid-cols-[0.8fr_1.2fr]`}>
            <div>
              <h2 className="t-h2">Como funciona</h2>
              <p className="mt-4 max-w-[22rem] leading-relaxed text-white/80">Tudo acontece pelo WhatsApp e por chamada, então não importa em que cidade você está.</p>
            </div>
            <ol className="space-y-8">
              {steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="font-serif text-[1.5rem] leading-none text-bronze-light">{i + 1}.</span>
                  <span>
                    <span className="block text-[1.1rem] font-medium">{s.title}</span>
                    <span className="mt-1 block leading-relaxed text-white/80">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-24 md:py-32">
          <div className={wrap}>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="t-h2">O que os clientes escreveram no Google</h2>
              <a href={studio.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[0.92rem] text-muted hover:text-ink">
                <Stars /> {studio.rating}, {studio.reviewCount} avaliações
              </a>
            </div>
            <div className="mt-10 columns-1 gap-8 sm:columns-2 lg:columns-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="mb-8 break-inside-avoid border-t border-line pt-5">
                  <blockquote className="leading-relaxed">{t.text}</blockquote>
                  <figcaption className="mt-4 text-[0.88rem]">
                    <span className="font-medium">{t.name}</span>
                    {"when" in t && t.when ? <span className="text-muted">, {t.when}</span> : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Dúvidas */}
        <section id="duvidas" className="border-t border-line py-24 md:py-28">
          <div className={`${wrap} grid gap-10 md:grid-cols-[0.8fr_1.2fr]`}>
            <h2 className="t-h2">Dúvidas comuns</h2>
            <div>
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line py-5 first:pt-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1.02rem] font-medium">
                    {f.q}
                    <span className="text-xl leading-none text-bronze transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="bg-sand py-20 md:py-28">
          <div className={`${wrap} grid gap-10 md:grid-cols-[0.8fr_1.2fr]`}>
            <div>
              <h2 className="t-h2">Vamos conversar?</h2>
              <p className="mt-4 max-w-[24rem] leading-relaxed text-muted">O jeito mais rápido é o WhatsApp. Se preferir, preencha ao lado que a mensagem já vai pronta.</p>
              <ul className="mt-8 space-y-3 text-[0.95rem]">
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bronze">
                    <IconWhatsapp className="h-4 w-4" /> {studio.phone}
                  </a>
                </li>
                <li>
                  <a href={studio.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bronze">
                    <IconInstagram className="h-4 w-4" /> {studio.instagramHandle}
                  </a>
                </li>
                <li className="flex gap-2 text-muted">
                  <IconPin className="mt-1 h-4 w-4 shrink-0" />
                  <span>
                    {studio.address}, {studio.city}
                  </span>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="py-12">
        <div className={`${wrap} flex flex-col gap-6 md:flex-row md:items-end md:justify-between`}>
          <div>
            <Logo />
            <p className="mt-2 text-[0.88rem] text-muted">{studio.legal} · projetos de interiores online</p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[0.88rem] text-muted">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={wrap}>
          <p className="mt-8 border-t border-line pt-5 text-[0.82rem] text-muted">© {new Date().getFullYear()} {studio.name}</p>
        </div>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
      >
        <IconWhatsapp className="h-6 w-6" />
      </a>
    </>
  );
}
