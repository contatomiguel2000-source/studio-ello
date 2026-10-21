import Image from "next/image";
import { Header, Logo } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { Counter, Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Gallery } from "@/components/Gallery";
import { TourVideo } from "@/components/Tours";
import { ProjectList, RotatingBadge, ServicesCarousel, Spotlight, TestimonialSlider, VideoPlay } from "@/components/Interactive";
import { IconInstagram, IconPin, IconWhatsapp } from "@/components/Icons";
import { arches, faqs, featured, nav, steps, studio, tours, whatsappLink } from "@/lib/data";
import { asset } from "@/lib/base-path";

// Conteúdo limitado a 1160px (o padding fica fora dessa largura)
const wrap = "mx-auto w-full max-w-[calc(1160px+2rem)] px-4 md:max-w-[calc(1160px+4rem)] md:px-8";

const usedVideos = new Set(featured.map((f) => f.video).filter(Boolean));
const moreTours = tours.filter((t) => !usedVideos.has(t.slug));

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSlider />

        {/* Apresentação */}
        <section id="quem-somos" className="py-24 md:py-32">
          <div className={`${wrap} text-center`}>
            <Reveal>
              <p className="kicker">Studio Ello · Projetos e Interiores</p>
              <p className="mt-6 font-serif text-[clamp(4rem,9vw,6.5rem)] leading-none text-gold-light">
                <Counter value={5000} />+
              </p>
              <p className="kicker mt-3 !text-sand">projetos entregues</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="t-h2 mx-auto mt-10 max-w-[44rem]">
                Fazemos o projeto da sua casa, loja ou consultório <em className="text-gold-light">sem você sair de onde está.</em>
              </h2>
              <p className="mx-auto mt-6 max-w-[36rem] leading-relaxed text-sand">
                A equipe de arquitetas e designers de interiores atende o Brasil inteiro pelo WhatsApp. Você recebe o ambiente em imagens 3D e o detalhamento para a obra.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <span className="relative h-16 w-16 overflow-hidden rounded-full border border-gold/60">
                  <Image src={asset("/img/emily-caroline.webp")} alt="Emily Caroline" fill unoptimized sizes="64px" className="object-cover object-top" />
                </span>
                <span className="text-left">
                  <span className="block font-script text-[2.4rem] leading-none text-gold-light">Emily Caroline</span>
                  <span className="block text-[0.85rem] text-sand">CEO do Studio Ello</span>
                </span>
              </div>
            </Reveal>

            <div className="mx-auto mt-16 grid max-w-[52rem] grid-cols-3 gap-4 border-t border-line pt-10">
              {[
                { v: <Counter value={5} decimals={1} />, l: "nota no Google" },
                { v: <Counter value={47} />, l: "avaliações" },
                { v: <Counter value={13} />, l: "tipos de ambiente" },
              ].map((c, i) => (
                <Reveal key={c.l} delay={i * 100}>
                  <p className="font-serif text-[clamp(2rem,4vw,3rem)] leading-none">{c.v}</p>
                  <p className="kicker mt-3 !text-[0.68rem] !text-sand">{c.l}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Foto + vídeo */}
        <section className="pb-24 md:pb-32">
          <div className={`${wrap} grid md:grid-cols-[1.4fr_1fr]`}>
            <Reveal className="relative aspect-[16/11] overflow-hidden">
              <Image src={asset("/img/tour-sala.webp")} alt="Sala com vista para o jardim, imagem 3D do projeto" fill quality={90} sizes="(min-width: 768px) 660px, 100vw" className="object-cover" />
            </Reveal>
            <Reveal delay={120} className="flex items-center justify-center bg-umber px-6 py-14">
              <VideoPlay slug="sala" label="Vídeo do projeto: sala com vista para o jardim" />
            </Reveal>
          </div>
        </section>

        {/* Ambientes em arcos */}
        <section className="pb-24 md:pb-32">
          <div className={`${wrap} text-center`}>
            <Reveal>
              <p className="kicker">O que a gente projeta</p>
              <h2 className="t-h2 mt-4">
                Do quarto à loja, <em className="text-gold-light">cada ambiente</em> tem seu projeto
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {arches.map((a, i) => (
                <Reveal key={a.title} delay={i * 80}>
                  <div className="group relative aspect-[3/4.4] overflow-hidden rounded-t-full border border-gold/40 transition-transform duration-500 hover:-translate-y-3">
                    <Image src={asset(a.image)} alt={a.title} fill quality={90} sizes="(min-width: 1024px) 180px, 45vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="font-serif text-[0.95rem] italic text-gold-light">{String(i + 1).padStart(2, "0")}</p>
                      <p className="mt-1 text-[0.95rem] font-medium">{a.title}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mx-auto mt-6 h-px max-w-[60rem] bg-gold/40" aria-hidden />
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="bg-umber py-24 md:py-32">
          <div className={wrap}>
            <div className="grid gap-6 md:grid-cols-2 md:items-end">
              <Reveal>
                <p className="kicker">Serviços</p>
                <h2 className="t-h2 mt-4">
                  Projeto completo, <em className="text-gold-light">pronto para a obra.</em>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="leading-relaxed text-sand">Imagens 3D, marcenaria planejada, iluminação e o detalhamento que o marceneiro e o pedreiro precisam. Arraste para o lado para ver todos.</p>
              </Reveal>
            </div>
            <Reveal delay={150} className="mt-12">
              <ServicesCarousel />
            </Reveal>
          </div>
        </section>

        {/* letreiro */}
        <div className="overflow-hidden border-y border-line py-6" aria-hidden>
          <div className="marquee gap-10 whitespace-nowrap font-serif text-[clamp(2rem,4vw,3.4rem)] text-cream/20">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex gap-10">
                {["Salas", "Cozinhas", "Quartos", "Banheiros", "Lojas", "Consultórios", "Fachadas", "Áreas gourmet"].map((t) => (
                  <span key={t} className="flex items-center gap-10">
                    <em>{t}</em> <span className="text-gold/60">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* Projetos */}
        <section id="projetos" className="py-24 md:py-32">
          <div className={wrap}>
            <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-end">
              <Reveal>
                <p className="kicker">Projetos recentes</p>
                <h2 className="t-h2 mt-4">
                  Alguns projetos <em className="text-gold-light">nossos</em>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="leading-relaxed text-sand"><span className="max-md:hidden">Passe o mouse em cada linha para ver o projeto. </span>As frases são os comentários que a equipe escreveu no Instagram.</p>
              </Reveal>
            </div>
            <Reveal delay={150} className="mt-12">
              <ProjectList />
            </Reveal>
          </div>
        </section>

        {/* Destaque */}
        <section className="pb-24 md:pb-32">
          <div className={wrap}>
            <Reveal>
              <Spotlight />
            </Reveal>
          </div>
        </section>

        {/* Mais vídeos */}
        <section className="pb-24 md:pb-32">
          <div className={wrap}>
            <Reveal>
              <h2 className="t-h3">Mais vídeos de projetos</h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
              {moreTours.map((t, i) => (
                <Reveal key={t.slug} delay={(i % 3) * 90}>
                  <div className="group relative aspect-[16/10] overflow-hidden bg-night">
                    <TourVideo slug={t.slug} title={t.title} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="mt-2 text-[0.9rem]">{t.title}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos + selo */}
        <section id="depoimentos" className="relative overflow-hidden bg-night py-24 md:py-32">
          <div className={wrap}>
            <Reveal className="text-center">
              <p className="kicker">Depoimentos do Google · {studio.rating} com {studio.reviewCount} avaliações</p>
            </Reveal>
            <Reveal delay={100} className="mt-10">
              <TestimonialSlider />
            </Reveal>
          </div>
          <div className="relative mt-20">
            <div className="overflow-hidden" aria-hidden>
              <div className="marquee gap-16 whitespace-nowrap font-serif text-[clamp(4rem,10vw,8rem)] leading-none text-cream/[0.06]">
                {Array.from({ length: 4 }).map((_, k) => (
                  <span key={k}>interiores · projetos · </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <RotatingBadge />
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section id="galeria" className="py-24 md:py-32">
          <div className={wrap}>
            <Reveal className="text-center">
              <p className="kicker">Galeria</p>
              <h2 className="t-h2 mt-4">
                Mais <em className="text-gold-light">imagens</em> dos projetos
              </h2>
            </Reveal>
            <div className="mt-10">
              <Gallery />
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="bg-umber py-24 md:py-28">
          <div className={`${wrap} grid gap-10 md:grid-cols-[0.8fr_1.2fr]`}>
            <Reveal>
              <p className="kicker">Como funciona</p>
              <h2 className="t-h2 mt-4">
                Tudo pelo WhatsApp, <em className="text-gold-light">de onde você estiver.</em>
              </h2>
            </Reveal>
            <ol className="border-t border-line">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <li className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-6">
                    <span className="font-serif text-[1.6rem] italic leading-none text-gold-light transition-transform duration-300 group-hover:-translate-y-1">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-[1.1rem] font-medium">{s.title}</span>
                      <span className="mt-1 block leading-relaxed text-sand">{s.text}</span>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Dúvidas */}
        <section id="duvidas" className="py-24 md:py-28">
          <div className={`${wrap} grid gap-10 md:grid-cols-[0.8fr_1.2fr]`}>
            <Reveal>
              <p className="kicker">Dúvidas</p>
              <h2 className="t-h2 mt-4">Perguntas comuns</h2>
            </Reveal>
            <div>
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line py-5 first:pt-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1.02rem] font-medium transition-colors hover:text-gold-light">
                    {f.q}
                    <span className="text-xl leading-none text-gold-light transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-sand">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="bg-night py-24 md:py-28">
          <div className={wrap}>
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <Reveal>
                <p className="kicker">Contato</p>
                <h2 className="t-h2 mt-4 max-w-[30rem]">
                  Todo projeto começa com uma <em className="text-gold-light">conversa.</em>
                </h2>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-serif text-[1.4rem] underline decoration-gold underline-offset-8 hover:text-gold-light">
                  {studio.phone}
                </a>
              </Reveal>
              <div className="hidden md:block">
                <RotatingBadge />
              </div>
            </div>

            <Reveal delay={100} className="mt-12 border border-line">
              <div className="flex justify-between border-b border-line px-5 py-3 text-[0.78rem] uppercase tracking-[0.14em] text-sand">
                <span>Studio Ello · contatos</span>
                <span>{studio.legal}</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { k: "01 · WhatsApp", t: studio.phone, href: whatsappLink(), icon: <IconWhatsapp className="h-4 w-4" /> },
                  { k: "02 · Instagram", t: studio.instagramHandle, href: studio.instagram, icon: <IconInstagram className="h-4 w-4" /> },
                  { k: "03 · Endereço", t: `${studio.address}, ${studio.city}`, href: studio.mapsUrl, icon: <IconPin className="h-4 w-4" /> },
                  { k: "04 · Atendimento", t: "Online, para todo o Brasil", href: "#como-funciona", icon: null },
                ].map((c) => (
                  <a key={c.k} href={c.href} {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group border-line p-5 transition-colors hover:bg-umber sm:border-l sm:[&:nth-child(odd)]:border-l-0 lg:[&:nth-child(odd)]:border-l lg:first:border-l-0 max-sm:border-t max-sm:first:border-t-0">
                    <p className="text-[0.75rem] uppercase tracking-[0.14em] text-gold-light">{c.k}</p>
                    <p className="mt-3 flex items-start gap-2 leading-relaxed">
                      {c.icon ? <span className="mt-1 text-sand">{c.icon}</span> : null}
                      <span className="transition-colors group-hover:text-gold-light">{c.t}</span>
                    </p>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150} className="mt-10">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-night py-10">
        <div className={`${wrap} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
          <Logo />
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.88rem] text-sand">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-gold-light">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[0.82rem] text-sand">© {new Date().getFullYear()} {studio.name}</p>
        </div>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition-transform hover:scale-110"
      >
        <IconWhatsapp className="h-6 w-6" />
      </a>
    </>
  );
}
