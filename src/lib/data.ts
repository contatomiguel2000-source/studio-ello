// Conteúdo real: Instagram @e_projetos_interiores (posts e destaques) e Google Maps "Studio ELLO projetos" (coletado em out/2026).

export const studio = {
  name: "Studio Ello",
  legal: "E Projetos e Interiores",
  instagram: "https://www.instagram.com/e_projetos_interiores/",
  instagramHandle: "@e_projetos_interiores",
  phone: "(11) 96966-3686",
  phoneHref: "tel:+5511969663686",
  whatsapp: "5511969663686",
  address: "Av. Paulista, 1636 - Bela Vista",
  city: "São Paulo - SP, 01310-200",
  mapsUrl:
    "https://www.google.com/maps/place/Studio+ELLO+projetos/@-23.560896,-46.6562393,17z/data=!4m6!3m5!1s0x94ce59b0e6913641:0x26647d1dc20bb2f2!8m2!3d-23.560896!4d-46.6562393!16s%2Fg%2F11myty0qtw",
  rating: "5,0",
  reviewCount: 47,
};

export function whatsappLink(msg = "Olá! Vim pelo site do Studio Ello e gostaria de um orçamento para o meu projeto.") {
  return `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const nav = [
  { label: "Projetos", href: "#projetos" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

// Categorias dos destaques do Instagram
export const rooms = [
  "Sala",
  "Cozinha",
  "Sala de jantar",
  "Área gourmet",
  "Dormitório casal",
  "Dormitório solteiro",
  "Banheiro",
  "Área de serviço",
  "Escritório",
  "Lojas",
  "Studio de beleza",
  "Consultório",
  "Fachada",
];

// Projetos reais do Instagram, com o comentário que o próprio studio escreveu no post
export const featured = [
  {
    title: "Tortaria da Léia",
    kind: "Comercial",
    video: "tortaria",
    note: "Eu estou muito apaixonada na tortaria da Léia, que ainda por cima é verde. Ou seja, ganhou meu coração duas vezes.",
  },
  {
    title: "Clínica veterinária Pata Amar",
    kind: "Comercial",
    video: "clinica-veterinaria",
    note: "É muito amor por nossos pets: uma clínica veterinária linda, equipada e preparada para receber nossos amiguinhos.",
  },
  {
    title: "Dormitório da Cecília",
    kind: "Residencial",
    video: "dormitorio-cecilia",
    note: "Olha esse guarda-roupa! É uma marcenaria com valor mais elevado, por conta da riqueza de detalhes, mas vale super a pena.",
  },
  {
    title: "Joalheria Unity",
    kind: "Comercial",
    image: "/img/joalheria-unity.webp",
    note: "Ficou muito linda, cada detalhe de acordo com o gosto do cliente.",
  },
  {
    title: "Lavanderia",
    kind: "Residencial",
    image: "/img/lavanderia.webp",
    note: "A cliente queria apenas deixar o ambiente organizado e com bom acabamento, usando o que ela já tinha no espaço.",
  },
  {
    title: "Sala com vista para o jardim",
    kind: "Residencial",
    video: "sala",
    note: "Eu não sei explicar a atmosfera dessa sala!",
  },
  {
    title: "Showroom de fábrica",
    kind: "Comercial · Fachada",
    image: "/img/showroom-flora.webp",
    note: "Showroom de fábrica com uma fachada lindíssima.",
  },
  {
    title: "Dormitório com rede",
    kind: "Residencial",
    video: "dormitorio-rede",
    note: "Com essa rede à disposição, é simplesmente tudo.",
  },
];

export const projects = [
  { name: "Sala de estar e TV", type: "Residencial", image: "/img/sala-tv.webp", ratio: "aspect-[1440/923]" },
  { name: "Showroom Flora", type: "Comercial · Fachada", image: "/img/showroom-flora.webp", ratio: "aspect-square" },
  { name: "Área gourmet", type: "Residencial", image: "/img/area-gourmet.webp", ratio: "aspect-[1440/1284]" },
  { name: "Joalheria Unity", type: "Comercial", image: "/img/joalheria-unity.webp", ratio: "aspect-[1439/1150]" },
  { name: "Cozinha com ilha", type: "Residencial", image: "/img/cozinha-ilha.webp", ratio: "aspect-[1440/754]" },
  { name: "Salão de beleza", type: "Comercial", image: "/img/salao-beleza.webp", ratio: "aspect-[1440/1690]" },
  { name: "Suíte do casal", type: "Residencial", image: "/img/quarto-casal.webp", ratio: "aspect-[1440/1080]" },
  { name: "Sala em verde", type: "Residencial", image: "/img/sala-verde.webp", ratio: "aspect-[1440/1919]" },
];

export const services = [
  {
    title: "Casa e apartamento",
    text: "Sala, cozinha, quartos, banheiro, área gourmet, lavanderia. Dá para fazer um ambiente só ou a casa inteira, e a gente aproveita o que você já tem quando faz sentido.",
    items: ["Imagens 3D do ambiente pronto", "Marcenaria planejada", "Iluminação", "Detalhamento para a obra"],
    image: "/img/sala-integrada.webp",
  },
  {
    title: "Lojas e escritórios",
    text: "Lojas, showrooms, cafeterias, studios de beleza e escritórios. O layout é pensado para o seu cliente circular bem e para o espaço ter a cara da sua marca.",
    items: ["Layout e circulação", "Imagens 3D", "Marca aplicada no espaço", "Detalhamento técnico"],
    image: "/img/joalheria-unity.webp",
  },
  {
    title: "Consultórios e clínicas",
    text: "Consultórios odontológicos, salas de psicologia e clínicas. Fazemos isso todo dia, então o projeto já sai seguindo as regras do segmento.",
    items: ["Projeto dentro das normas", "Fluxo do atendimento", "Conforto para paciente e equipe"],
    image: "/img/consultorio.webp",
  },
  {
    title: "Fachadas",
    text: "Fachada de casa ou de comércio, da primeira ideia até a imagem final.",
    items: ["Residencial", "Comercial", "Imagem final em 3D"],
    image: "/img/fachada-casa.webp",
  },
];

export const steps = [
  { title: "Você chama no WhatsApp", text: "Conta qual ambiente quer mudar e manda fotos e medidas, se tiver. A gente responde com o orçamento." },
  { title: "Conversa sobre o projeto", text: "Entendemos o seu gosto, a sua rotina e o que dá para aproveitar. Tudo online, de onde você estiver." },
  { title: "Imagens 3D", text: "Você recebe o ambiente em 3D e pede os ajustes que quiser antes de fechar." },
  { title: "Projeto para a obra", text: "Entregamos o detalhamento com marcenaria e iluminação, pronto para o marceneiro e o pedreiro." },
];

// Avaliações reais do Google Maps (todas 5 estrelas). Onde o Google corta o texto, encerramos na última frase completa.
export const testimonials = [
  {
    name: "Diego Silva",
    when: "há 3 meses",
    text: "Meu segundo projeto com a empresa, estou indo para o terceiro. Eles são perfeitos, o profissional que me atende é muito compreensivo. Vou fechar a casa inteira com eles!",
  },
  {
    name: "Adriana Aragão de Assis",
    text: "Fiz o projeto do quarto da minha filha com a Studio E, ficou lindo! As arquitetas foram muito atenciosas e sensíveis com as minhas preferências. Inclusive já quero projetar outro ambiente.",
  },
  {
    name: "Andréa Lima",
    text: "Experiência excelente, precisava reaproveitar mobiliário que já possuía, em outra loja, e deu muito certo. Um custo baixo e benefício excepcional, além de conseguirem captar o que queríamos. Adorei.",
  },
  {
    name: "Ana Carolina Amaral",
    text: "As meninas são ótimas, atenciosas. O projeto da minha cozinha ficou lindo e já até executei, agora estou seguindo para o projeto do quarto. Recomendo!",
  },
  {
    name: "Milena Santana",
    text: "Amei o projeto e também todo o processo, o cuidado com o cliente, o retorno, as sugestões, enfim, foi tão bom que vou contratar novamente para outros ambientes e indicar para amigas.",
  },
  {
    name: "André Alves",
    when: "há 4 meses",
    text: "Profissionais muito bons. Fiz meu projeto de um ambiente e superou minhas expectativas. Recomendo.",
  },
  {
    name: "Gislene Borges",
    text: "Ótima experiência, a equipe é extremamente profissional e atenciosa, iniciei com 1 ambiente e vou fechar outros. Super recomendo.",
  },
  {
    name: "Kelly Karinne",
    text: "São maravilhosos, foram os únicos que conseguiram fazer do jeito que sempre sonhei. Amei, vou fazer todos os cômodos com eles.",
  },
];

export const faqs = [
  { q: "Vocês atendem fora de São Paulo?", a: "Atendemos. O studio é todo online, então trabalhamos com clientes do Brasil inteiro." },
  { q: "Dá para fazer só um ambiente?", a: "Dá, o orçamento é por ambiente. Muita gente começa por um cômodo e depois volta para fazer os outros." },
  { q: "O que eu recebo no final?", a: "As imagens 3D do ambiente e o detalhamento para a obra: marcenaria, iluminação e o que mais o projeto precisar." },
  { q: "Posso aproveitar os móveis que já tenho?", a: "Pode. Contando o que você já tem, o projeto encaixa essas peças onde ficarem melhor." },
  { q: "Como peço um orçamento?", a: "Chama no WhatsApp contando qual ambiente você quer mudar. Se tiver fotos e medidas, já ajuda." },
];

// Galeria: slides extras dos carrosséis do Instagram (imagens 3D em 1440px) e plantas técnicas
export const galleryTags = ["Todos", "Sala", "Cozinha", "Quarto", "Comercial", "Detalhamento"] as const;

export const gallery: { src: string; tag: (typeof galleryTags)[number]; alt: string; w: number; h: number }[] = [
  { src: "/img/g-cozinha-integrada.webp", tag: "Cozinha", alt: "Cozinha, projeto do Studio Ello", w: 1440, h: 1136 },
  { src: "/img/g-sala-sofa-curvo.webp", tag: "Sala", alt: "Sala, projeto do Studio Ello", w: 1440, h: 881 },
  { src: "/img/g-sala-verde-2.webp", tag: "Sala", alt: "Sala, projeto do Studio Ello", w: 1440, h: 1920 },
  { src: "/img/g-quarto-casal-2.webp", tag: "Quarto", alt: "Dormitório, projeto do Studio Ello", w: 1440, h: 1117 },
  { src: "/img/g-cozinha-2.webp", tag: "Cozinha", alt: "Cozinha, projeto do Studio Ello", w: 1440, h: 800 },
  { src: "/img/g-jantar-pergolado.webp", tag: "Sala", alt: "Sala, projeto do Studio Ello", w: 1440, h: 1419 },
  { src: "/img/g-quarto-madeira.webp", tag: "Quarto", alt: "Dormitório, projeto do Studio Ello", w: 1440, h: 1080 },
  { src: "/img/g-cozinha-3.webp", tag: "Cozinha", alt: "Cozinha, projeto do Studio Ello", w: 1440, h: 1080 },
  { src: "/img/g-quarto-meninas.webp", tag: "Quarto", alt: "Dormitório, projeto do Studio Ello", w: 1440, h: 1692 },
  { src: "/img/g-sala-tv-2.webp", tag: "Sala", alt: "Sala, projeto do Studio Ello", w: 1440, h: 923 },
  { src: "/img/g-sala-estar.webp", tag: "Sala", alt: "Sala, projeto do Studio Ello", w: 1440, h: 1921 },
  { src: "/img/g-quarto-rosa.webp", tag: "Quarto", alt: "Dormitório, projeto do Studio Ello", w: 1440, h: 1152 },
  { src: "/img/g-sala-3.webp", tag: "Sala", alt: "Sala, projeto do Studio Ello", w: 1440, h: 901 },
  { src: "/img/g-jantar-2.webp", tag: "Sala", alt: "Sala, projeto do Studio Ello", w: 1438, h: 1151 },
  { src: "/img/g-adega.webp", tag: "Cozinha", alt: "Cozinha, projeto do Studio Ello", w: 1438, h: 1278 },
  { src: "/img/g-quarto-4.webp", tag: "Quarto", alt: "Dormitório, projeto do Studio Ello", w: 1440, h: 1139 },
  { src: "/img/g-quarto-infantil.webp", tag: "Quarto", alt: "Dormitório, projeto do Studio Ello", w: 1440, h: 1690 },
  { src: "/img/g-showroom.webp", tag: "Comercial", alt: "Projeto comercial, projeto do Studio Ello", w: 1440, h: 1440 },
  { src: "/img/g-recepcao.webp", tag: "Comercial", alt: "Projeto comercial, projeto do Studio Ello", w: 1440, h: 893 },
  { src: "/img/g-loja-verde.webp", tag: "Comercial", alt: "Projeto comercial, projeto do Studio Ello", w: 1440, h: 1087 },
  { src: "/img/g-escritorio-2.webp", tag: "Comercial", alt: "Projeto comercial, projeto do Studio Ello", w: 1440, h: 1692 },
  { src: "/img/g-consultorio-2.webp", tag: "Comercial", alt: "Projeto comercial, projeto do Studio Ello", w: 1440, h: 1692 },
  { src: "/img/g-estetica-2.webp", tag: "Comercial", alt: "Projeto comercial, projeto do Studio Ello", w: 1440, h: 1152 },
  { src: "/img/g-joalheria-2.webp", tag: "Comercial", alt: "Projeto comercial, projeto do Studio Ello", w: 1439, h: 1150 },
  { src: "/img/g-pilates-2.webp", tag: "Comercial", alt: "Projeto comercial, projeto do Studio Ello", w: 1440, h: 1692 },
  { src: "/img/g-cafeteria.webp", tag: "Comercial", alt: "Projeto comercial, projeto do Studio Ello", w: 1440, h: 960 },
  { src: "/img/g-planta-1.webp", tag: "Detalhamento", alt: "Planta técnica com detalhamento, projeto do Studio Ello", w: 1440, h: 1012 },
  { src: "/img/g-planta-2.webp", tag: "Detalhamento", alt: "Planta técnica com detalhamento, projeto do Studio Ello", w: 1440, h: 1043 },
  { src: "/img/g-planta-3.webp", tag: "Detalhamento", alt: "Planta técnica com detalhamento, projeto do Studio Ello", w: 1440, h: 1280 },
];

// Vídeos de tour 3D (posts do Instagram em 1120px, sem áudio)
export const tours = [
  { slug: "sala", title: "Sala integrada ao jardim", type: "Residencial" },
  { slug: "cafeteria", title: "Cafeteria", type: "Comercial" },
  { slug: "tortaria", title: "Tortaria", type: "Comercial" },
  { slug: "clinica-veterinaria", title: "Clínica veterinária", type: "Comercial" },
  { slug: "projeto", title: "Mercado e café", type: "Comercial" },
  { slug: "sanitario-feminino", title: "Sanitário feminino", type: "Comercial" },
  { slug: "dormitorio-rede", title: "Dormitório com rede", type: "Residencial" },
  { slug: "quarto-bebe", title: "Quarto do bebê", type: "Residencial" },
  { slug: "dormitorio-cecilia", title: "Dormitório da Cecília", type: "Residencial" },
  { slug: "consultorio", title: "Consultório de estética", type: "Comercial" },
  { slug: "dormitorio-treliche", title: "Dormitório com treliche", type: "Residencial" },
];
