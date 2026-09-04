import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "NerdVerse Games — O Hub Definitivo da Cultura Nerd & Gamer",
  description: "Portal gamer com trailers em 4K, análises técnicas de consoles, catálogo de jogos lendários, notícias e cobertura dos maiores eventos geek.",
  keywords: ["jogos", "games", "consoles", "ps5 pro", "xbox", "nintendo switch", "notícias gamer", "nerd", "eventos geek", "bgs"],
  openGraph: {
    title: "NerdVerse Games — O Hub Definitivo da Cultura Nerd & Gamer",
    description: "Portal com notícias, trailers e análises completas do mundo dos games.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased selection:bg-nerd-accent selection:text-nerd-bg bg-nerd-bg text-gray-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
