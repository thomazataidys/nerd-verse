import { Newspaper, Clock, User, ArrowUpRight, Tag } from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  category: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export function News() {
  const articles: NewsArticle[] = [
    {
      id: "patch-notes-unreal-5-5",
      title: "Unreal Engine 5.5 revoluciona iluminação Lumen e física de partículas em tempo real",
      category: "Engines & Dev",
      summary: "Nova atualização da Epic Games reduz custo de computação do Ray Tracing em até 40% em placas de vídeo de entrada e consoles.",
      author: "dev_null@nerdverse",
      date: "Hoje às 18:42",
      readTime: "4 min de leitura",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      tags: ["Unreal Engine", "Ray Tracing", "C++"],
    },
    {
      id: "esports-championship",
      title: "Grande Final do Torneio Global de FPS atinge 3.8 milhões de espectadores simultâneos",
      category: "eSports",
      summary: "Partida decidida na prorrogação no mapa de desempate consagra equipe brasileira como campeã mundial de táticas virtuais.",
      author: "frag_master",
      date: "Ontem às 21:15",
      readTime: "3 min de leitura",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      tags: ["Competitivo", "Major", "Clutch"],
    },
    {
      id: "retro-preservation",
      title: "Comunidade de engenharia reversa recupera código-fonte perdido de clássico de 1997",
      category: "Preservação Retrô",
      summary: "Após 2 anos de descompilação de cartuchos japoneses, fãs conseguem compilar binário nativo para Linux e PC em 60 FPS limpos.",
      author: "assembly_wizard",
      date: "2 dias atrás",
      readTime: "6 min de leitura",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      tags: ["Open Source", "Retrogaming", "ASM"],
    },
    {
      id: "hardware-gpu-nextgen",
      title: "Novas arquiteturas de silício prometem eliminar completamente o gargalo de VRAM",
      category: "Hardware",
      summary: "Testes laboratoriais comprovam taxas de transferência de memória acima de 1.8 TB/s utilizando barramentos HBM3e integrados.",
      author: "silicon_nerd",
      date: "3 dias atrás",
      readTime: "5 min de leitura",
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
      tags: ["Hardware", "VRAM", "Benchmarks"],
    },
  ];

  return (
    <section id="noticias" className="py-20 border-b border-nerd-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-nerd-card border border-nerd-fuchsia/40 text-nerd-fuchsia font-mono text-xs mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>FEED_DE_NOTÍCIAS // TRANSMISSÕES_RECENTES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
              NOTÍCIAS DO MUNDO GAMER
            </h2>
            <p className="mt-2 text-gray-400 text-sm max-w-xl">
              Fatos apurados, atualizações de tecnologia e os momentos cruciais do universo nerd.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-nerd-cyan">
            <span className="w-2 h-2 rounded-full bg-nerd-cyan animate-ping" />
            <span>ATUALIZADO A CADA HORA</span>
          </div>
        </div>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-nerd-card border border-nerd-border hover:border-nerd-fuchsia/50 hover:shadow-neon-purple transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 relative aspect-video sm:aspect-auto overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 border border-nerd-border text-[10px] font-mono text-nerd-fuchsia font-bold">
                  {item.category}
                </div>
              </div>

              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-gray-400 font-mono text-[11px] mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-nerd-accent" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="font-mono font-bold text-base text-white group-hover:text-nerd-cyan transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-nerd-border flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
                    <User className="w-3 h-3 text-nerd-purple" />
                    <span>{item.author}</span>
                  </div>

                  <div className="flex items-center gap-1 text-nerd-cyan font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Ler</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
