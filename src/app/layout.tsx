import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Studio Ello | Projetos de Interiores online para todo o Brasil",
  description:
    "Projetos de interiores residenciais e comerciais com imagens 3D realistas, marcenaria, iluminação e detalhamento para a obra. Mais de 5 mil projetos entregues, 100% online. Nota 5,0 no Google.",
  openGraph: {
    title: "Studio Ello · E Projetos e Interiores",
    description: "Projetos incríveis, online para todo o Brasil. Mais de 5 mil projetos entregues.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
