import type { Metadata } from "next";
import { Manrope, Mrs_Saint_Delafield, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const script = Mrs_Saint_Delafield({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Studio Ello | Projetos de Interiores online para todo o Brasil",
  description:
    "Projetos de interiores residenciais e comerciais com imagens 3D, marcenaria, iluminação e detalhamento para a obra. Mais de 5 mil projetos entregues, 100% online. Nota 5,0 no Google.",
  openGraph: {
    title: "Studio Ello · E Projetos e Interiores",
    description: "Projetos de interiores online, para todo o Brasil. Mais de 5 mil projetos entregues.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${manrope.variable} ${script.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
