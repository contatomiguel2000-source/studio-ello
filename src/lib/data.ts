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
  { label: "Sobre", href: "#sobre" },
  { label: "Ambientes", href: "#ambientes" },
  { label: "Tours 3D", href: "#tours" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Clientes", href: "#clientes" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export const heroServices = ["Projetos residenciais", "Projetos comerciais", "Consultórios e clínicas", "Fachadas"];

export const stats = [
  { value: "5 mil+", label: "Projetos entregues" },
  { value: "5,0", label: "Nota no Google (47 avaliações)" },
  { value: "100%", label: "Online para todo o Brasil" },
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

// Cartões de ambientes (seção no estilo "amenities" da referência)
export const roomCards = [
  { title: "Salas de estar", text: "Aconchego, iluminação e marcenaria sob medida.", image: "/img/sala-tv.webp" },
  { title: "Cozinhas", text: "Funcionais, bonitas e prontas para receber.", image: "/img/cozinha-ilha.webp" },
  { title: "Dormitórios", text: "Do quarto do casal ao quarto das crianças.", image: "/img/quarto-casal.webp" },
  { title: "Áreas gourmet", text: "Espaços para reunir quem você ama.", image: "/img/area-gourmet.webp" },
  { title: "Lojas e showrooms", text: "Ambientes que vendem pela sua marca.", image: "/img/joalheria-unity.webp" },
  { title: "Studios e consultórios", text: "Beleza, saúde e bem-estar com identidade.", image: "/img/salao-beleza.webp" },
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
    title: "Projeto Residencial",
    text: "Salas, cozinhas, dormitórios, banheiros, áreas gourmet e de serviço. Projetos pensados para o seu estilo e para a rotina de quem vive ali.",
    items: ["Imagens 3D realistas", "Marcenaria planejada", "Projeto de iluminação", "Detalhamentos para execução", "Reaproveitamento do que você já tem"],
    image: "/img/sala-integrada.webp",
  },
  {
    title: "Projeto Comercial",
    text: "Lojas, showrooms, escritórios, cafeterias e studios de beleza. Ambientes estratégicos, funcionais e marcantes, que fortalecem a identidade da sua marca.",
    items: ["Layout inteligente e funcional", "Imagens 3D realistas", "Identidade da marca no espaço", "Detalhamentos técnicos para a obra"],
    image: "/img/joalheria-unity.webp",
  },
  {
    title: "Consultórios e Clínicas",
    text: "Consultórios odontológicos, salas de psicologia, clínicas e salas de atendimento infantil, com uma equipe que lida todos os dias com as regras desse segmento.",
    items: ["Projeto dentro das normas", "Fluxo pensado para o atendimento", "Conforto para pacientes e equipe"],
    image: "/img/consultorio.webp",
  },
  {
    title: "Fachadas",
    text: "Fachadas residenciais e comerciais que valorizam o imóvel e convidam a entrar, do primeiro esboço à imagem final.",
    items: ["Fachadas residenciais", "Fachadas comerciais e de lojas", "Imagens finais realistas"],
    image: "/img/fachada-casa.webp",
  },
];

export const steps = [
  { title: "Orçamento", text: "Você chama no WhatsApp, conta qual ambiente quer transformar e recebe o orçamento." },
  { title: "Briefing", text: "Entendemos seu estilo, suas necessidades e o que você já tem, tudo online, de onde você estiver." },
  { title: "Projeto 3D", text: "Desenvolvemos o projeto com imagens 3D realistas, ajustando com você até ficar do jeito que sonhou." },
  { title: "Detalhamento", text: "Entregamos o projeto completo para execução, com marcenaria, iluminação e detalhamentos para evitar erros na obra." },
];

// Avaliações reais do Google Maps (todas 5 estrelas). Onde o Google corta o texto, encerramos na última frase completa.
export const testimonials = [
  {
    name: "Milena Santana",
    tag: "Projeto residencial",
    text: "Amei o projeto e também todo o processo, o cuidado com o cliente, o retorno, as sugestões, enfim, foi tão bom que vou contratar novamente para outros ambientes e indicar para amigas.",
  },
  {
    name: "Adriana Aragão de Assis",
    tag: "Quarto infantil",
    text: "Fiz o projeto do quarto da minha filha com a Studio E, ficou lindo! As arquitetas foram muito atenciosas e sensíveis com as minhas preferências. Inclusive já quero projetar outro ambiente.",
  },
  {
    name: "Andréa Lima",
    tag: "Projeto comercial",
    text: "Precisava reaproveitar mobiliário que já possuía, em outra loja, e deu muito certo. Um custo baixo e benefício excepcional, além de conseguirem captar o que queríamos.",
  },
  {
    name: "Diego Silva",
    tag: "Cliente recorrente",
    text: "Meu segundo projeto com a empresa, estou indo para o terceiro. Eles são perfeitos, o profissional que me atende é muito compreensivo. Vou fechar a casa inteira com eles!",
  },
  {
    name: "Ana Carolina Amaral",
    tag: "Cozinha",
    text: "As meninas são ótimas, atenciosas. O projeto da minha cozinha ficou lindo e já até executei, agora estou seguindo para o projeto do quarto. Recomendo!",
  },
  {
    name: "Gislene Borges",
    tag: "Projeto residencial",
    text: "Ótima experiência, a equipe é extremamente profissional e atenciosa, iniciei com 1 ambiente e vou fechar outros. Super recomendo.",
  },
];

export const faqs = [
  {
    q: "Vocês atendem fora de São Paulo?",
    a: "Sim. O Studio Ello trabalha 100% online e atende clientes de todo o Brasil.",
  },
  {
    q: "Posso fazer o projeto de um só ambiente?",
    a: "Pode. O orçamento é feito por ambiente: muitos clientes começam com um cômodo e depois seguem para os outros.",
  },
  {
    q: "O que vem no projeto?",
    a: "Imagens 3D realistas, layout, marcenaria planejada, iluminação e os detalhamentos para executar a obra sem erros.",
  },
  {
    q: "Dá para reaproveitar os móveis que eu já tenho?",
    a: "Sim. O projeto considera o que você já possui e pensa em como aproveitar cada peça da melhor forma.",
  },
  {
    q: "Vocês fazem projetos comerciais e de consultórios?",
    a: "Sim: lojas, showrooms, escritórios, cafeterias, studios de beleza, consultórios odontológicos, clínicas e fachadas.",
  },
  {
    q: "Como peço um orçamento?",
    a: "É só chamar no WhatsApp contando qual ambiente você quer transformar. A equipe responde com o orçamento.",
  },
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
