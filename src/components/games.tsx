"use client";

import { useState } from "react";
import { Gamepad2, Star, Play, X, Monitor, Flame, Search, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

interface GameItem {
  id: string;
  title: string;
  genre: string;
  category: "all" | "pc" | "ps5" | "xbox" | "switch" | "retro";
  score: number;
  steamRating: string;
  platforms: string[];
  image: string;
  fallbackImage: string;
  youtubeId: string;
  verdict: string;
  tag: string;
}

export function Games() {
  const [activePlatform, setActivePlatform] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);

  const gamesList: GameItem[] = [
    {
      id: "elden-ring",
      title: "Elden Ring: Shadow of the Erdtree",
      genre: "Action RPG // Soulslike",
      category: "pc",
      score: 95,
      steamRating: "Muito Positivas",
      platforms: ["PC / Steam", "PS5", "XSX"],
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      youtubeId: "qLZenOn7WUo",
      verdict: "O Reino das Sombras eleva o patamar de chefes e exploração vertical na obra-prima da FromSoftware.",
      tag: "GOTY CANDIDATE",
    },
    {
      id: "cyberpunk-2077",
      title: "Cyberpunk 2077: Phantom Liberty",
      genre: "RPG Sci-Fi // Ray Tracing",
      category: "pc",
      score: 92,
      steamRating: "Extremamente Positivas",
      platforms: ["PC / Steam", "PS5", "XSX"],
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      youtubeId: "8X2kIfS6fb8",
      verdict: "Espionagem e alta voltagem em Dogtown. O ápice gráfico em iluminação de tempo real e narrativa madura.",
      tag: "OVERDRIVE 4K",
    },
    {
      id: "zelda-totk",
      title: "The Legend of Zelda: Tears of the Kingdom",
      genre: "Aventura Sandbox // Física Real",
      category: "switch",
      score: 96,
      steamRating: "Exclusivo Nintendo",
      platforms: ["Nintendo Switch"],
      image: "https://i.ytimg.com/vi/uHGShqcAHlQ/maxresdefault.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
      youtubeId: "uHGShqcAHlQ",
      verdict: "A mecânica Ultrahand transforma Hyrule num gigantesco laboratório criativo sem limites.",
      tag: "MASTERPIECE",
    },
    {
      id: "black-myth-wukong",
      title: "Black Myth: Wukong",
      genre: "Action RPG // Mitologia Chinesa",
      category: "pc",
      score: 91,
      steamRating: "Extremamente Positivas",
      platforms: ["PC / Steam", "PS5"],
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      youtubeId: "pnSyg230VHQ",
      verdict: "Incrível combate baseado em artes marciais e mitologia clássica chinesa com Unreal Engine 5.",
      tag: "RECORD DE PLAYERS",
    },
    {
      id: "hollow-knight-silksong",
      title: "Hollow Knight: Silksong",
      genre: "Metroidvania // 2D Pintado",
      category: "pc",
      score: 98,
      steamRating: "Mais Desejado",
      platforms: ["PC", "Switch", "PS5", "XSX"],
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/header.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80",
      youtubeId: "pFAknD_WO4s",
      verdict: "A aguardada sequência da Team Cherry com Hornet dominando combates aéreos dinâmicos.",
      tag: "INDIE SUPREMO",
    },
    {
      id: "doom-eternal",
      title: "DOOM Eternal",
      genre: "Fast FPS // Metal Puro",
      category: "pc",
      score: 90,
      steamRating: "Muito Positivas",
      platforms: ["PC / Steam", "PS5", "XSX"],
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      youtubeId: "r2Y33t-x-b0",
      verdict: "Combate rápido, precisão cirúrgica e adrenalina pura com trilha sonora esmagadora.",
      tag: "144 FPS PURO",
    },
    {
      id: "chrono-trigger",
      title: "Chrono Trigger: Steam Edition",
      genre: "JRPG Imortal // Viagem Temporal",
      category: "retro",
      score: 99,
      steamRating: "Extremamente Positivas",
      platforms: ["PC / Steam", "SNES"],
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/613830/header.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      youtubeId: "2fl-AylaHY8",
      verdict: "O clássico do Dream Team da Square com 13 finais e arte de Akira Toriyama.",
      tag: "LENDA DO RETRÔ",
    },
    {
      id: "baldurs-gate-3",
      title: "Baldur's Gate 3",
      genre: "CRPG // Narrativa Profunda",
      category: "pc",
      score: 96,
      steamRating: "Extremamente Positivas",
      platforms: ["PC / Steam", "PS5", "XSX"],
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      youtubeId: "1T22wN1Pt48",
      verdict: "O divisor de águas nos RPGs com liberdade de escolhas táticas sem precedentes da Larian Studios.",
      tag: "GOTY ABSOLUTO",
    },
  ];

  // Filtros combinados: plataforma e busca textual
  const filteredGames = gamesList.filter((game) => {
    const matchesCategory =
      activePlatform === "all" ||
      game.category === activePlatform ||
      game.platforms.some((p) => p.toLowerCase().includes(activePlatform));

    const matchesSearch =
      searchQuery.trim() === "" ||
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const platforms = [
    { key: "all", label: "Todos os Jogos" },
    { key: "pc", label: "PC / Steam" },
    { key: "ps5", label: "PlayStation 5" },
    { key: "xbox", label: "Xbox Series" },
    { key: "switch", label: "Nintendo Switch" },
    { key: "retro", label: "Clássicos Retrô" },
  ];

  return (
    <section id="jogos" className="py-20 border-b border-white/[0.08] relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho no Estilo Instant Gaming */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-nerd-orange/40 text-nerd-orange font-mono text-xs mb-3">
              <Gamepad2 className="w-3.5 h-3.5 text-nerd-orange" />
              <span>CATÁLOGO ATUALIZADO // TRAILERS OFICIAIS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight flex items-center gap-2">
              JOGOS EM DESTAQUE
              <span className="text-xs px-2.5 py-0.5 rounded bg-nerd-orange/20 text-nerd-orange font-bold font-mono">
                {filteredGames.length} TÍTULOS
              </span>
            </h2>
            <p className="mt-2 text-gray-400 text-sm max-w-xl">
              Selecione sua plataforma ou use a barra de busca rápida para assistir aos trailers e conferir o veredito da redação.
            </p>
          </div>

          {/* Barra de Busca Instantânea */}
          <div className="w-full md:w-80 relative">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por título ou gênero..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 font-mono text-xs focus:outline-none focus:border-nerd-orange focus:ring-1 focus:ring-nerd-orange transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white text-xs font-mono"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Barra de Abas de Plataforma Estilo Instant Gaming */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none font-mono text-xs">
          {platforms.map((p) => (
            <button
              key={p.key}
              onClick={() => setActivePlatform(p.key)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap border transition-all duration-200 ${
                activePlatform === p.key
                  ? "bg-gradient-to-r from-nerd-orange to-amber-600 text-white border-nerd-orange font-bold shadow-neon-orange"
                  : "bg-white/[0.03] text-gray-300 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Grid de Cards de Jogos Estilo Instant Gaming */}
        {filteredGames.length === 0 ? (
          <div className="text-center py-16 bg-white/[0.02] rounded-2xl border border-white/10 font-mono text-sm text-gray-400">
            Nenhum jogo encontrado para o termo de busca informado.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-nerd-orange/70 hover:shadow-neon-orange transition-all duration-300 flex flex-col group"
              >
                {/* Imagem do Jogo com Badges Estilo Instant Gaming */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={game.image}
                    alt={game.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== game.fallbackImage) {
                        target.src = game.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

                  {/* Tag Instant Gaming (canto superior esquerdo) */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-nerd-orange text-white font-mono font-black text-[10px] uppercase tracking-wider shadow-sm">
                    {game.tag}
                  </div>

                  {/* Score Pill (canto superior direito) */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded bg-black/80 border border-amber-400/50 text-amber-400 font-mono font-black text-xs">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{game.score}</span>
                  </div>

                  {/* Botão de Trailer no Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs gap-2 p-3">
                    <button
                      onClick={() => setSelectedVideo({ id: game.youtubeId, title: game.title })}
                      className="px-3 py-2 rounded-xl bg-nerd-orange hover:bg-amber-600 text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-neon-orange transition-transform transform translate-y-2 group-hover:translate-y-0"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      TRAILER
                    </button>
                    <a
                      href={`https://www.youtube.com/watch?v=${game.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-black/80 hover:bg-white/10 text-gray-200 border border-white/10 transition-transform transform translate-y-2 group-hover:translate-y-0"
                      title="Abrir diretamente no YouTube"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Informações e Detalhes */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Plataformas suportadas */}
                    <div className="flex flex-wrap gap-1 mb-2 font-mono text-[9px]">
                      {game.platforms.map((p) => (
                        <span
                          key={p}
                          className="px-1.5 py-0.5 rounded bg-white/[0.04] text-gray-300 border border-white/10"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-mono font-bold text-base text-white group-hover:text-nerd-orange transition-colors line-clamp-1">
                      {game.title}
                    </h3>

                    <p className="text-gray-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {game.verdict}
                    </p>
                  </div>

                  {/* Rodapé do Card com Ação Dupla */}
                  <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between font-mono text-xs">
                    <button
                      onClick={() => setSelectedVideo({ id: game.youtubeId, title: game.title })}
                      className="text-nerd-orange hover:text-amber-400 flex items-center gap-1 font-bold text-[11px]"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      Trailer Rápido
                    </button>

                    <a
                      href={`https://www.youtube.com/watch?v=${game.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white flex items-center gap-1 text-[11px]"
                      title="Abrir no YouTube oficial"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Resiliente com Embed e Link Externo no YouTube */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl border-2 border-nerd-orange shadow-neon-orange overflow-hidden">
            {/* Barra de Título do Modal */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 font-mono text-sm bg-black">
              <div className="flex items-center gap-2 truncate">
                <Monitor className="w-4 h-4 text-nerd-orange" />
                <span className="text-white font-bold truncate">{selectedVideo.title} — Trailer Oficial</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-nerd-orange/20 hover:bg-nerd-orange text-nerd-orange hover:text-white border border-nerd-orange/40 font-mono text-xs flex items-center gap-1 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Abrir no YouTube</span>
                </a>
                <button
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Fechar trailer"
                  className="p-1 rounded-lg bg-black border border-white/10 text-gray-300 hover:text-white hover:border-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Iframe com Player do YouTube */}
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0&enablejsapi=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Barra de Ajuda / Fallback */}
            <div className="p-3 bg-black border-t border-white/10 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-gray-400 gap-2">
              <span>Se o seu navegador ou bloqueador de anúncios impedir o vídeo de reproduzir:</span>
              <a
                href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nerd-orange hover:underline font-bold flex items-center gap-1"
              >
                Clique aqui para assistir diretamente no YouTube &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
