"use client";

import { useState } from "react";
import { Gamepad2, Star, Play, X, Monitor, ShieldCheck, Flame } from "lucide-react";

interface GameItem {
  id: string;
  title: string;
  genre: string;
  category: "rpg" | "action" | "indie" | "retro";
  score: number;
  platforms: string[];
  image: string;
  youtubeId: string;
  description: string;
}

export function Games() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);

  const gamesList: GameItem[] = [
    {
      id: "elden-ring",
      title: "Elden Ring: Shadow of the Erdtree",
      genre: "Action RPG // Soulslike",
      category: "rpg",
      score: 97,
      platforms: ["PC", "PS5", "XSX"],
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      youtubeId: "qLZenOn7WUo",
      description: "A expansão monumental de Miyazaki. Desafios impiedosos, lore densa e exploração no Reino das Sombras.",
    },
    {
      id: "cyberpunk-2077",
      title: "Cyberpunk 2077: Phantom Liberty",
      genre: "Sci-Fi RPG // Ray Tracing Overdrive",
      category: "rpg",
      score: 92,
      platforms: ["PC", "PS5", "XSX"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      youtubeId: "8X2kIfS6fb8",
      description: "Espionagem e conspiração política no coração de Dogtown com tecnologias de ponta em iluminação e IA.",
    },
    {
      id: "zelda-totk",
      title: "The Legend of Zelda: Tears of the Kingdom",
      genre: "Aventura Sandbox // Física Avançada",
      category: "action",
      score: 96,
      platforms: ["Switch"],
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
      youtubeId: "uHGShqcAHlQ",
      description: "Uma obra-prima de engenharia mecânica onde a criatividade do jogador redefine as leis de Hyrule.",
    },
    {
      id: "hollow-knight",
      title: "Hollow Knight: Silksong",
      genre: "Metroidvania // 2D Pintado à Mão",
      category: "indie",
      score: 95,
      platforms: ["PC", "Switch", "PS5", "XSX"],
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80",
      youtubeId: "pFAknD_WO4s",
      description: "O indie mais aguardado de toda a comunidade nerd. Combates frenéticos e trilha sonora hipnotizante.",
    },
    {
      id: "doom-eternal",
      title: "DOOM Eternal: The Ancient Gods",
      genre: "Fast-Paced FPS // Metal Puro",
      category: "action",
      score: 90,
      platforms: ["PC", "PS5", "XSX"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      youtubeId: "r2Y33t-x-b0",
      description: "Reflexos sobre-humanos e pura adrenalina a 144 FPS contra hordas colossais do submundo.",
    },
    {
      id: "chrono-trigger",
      title: "Chrono Trigger: Pixel Legacy",
      genre: "JRPG Retrô // Viagem no Tempo",
      category: "retro",
      score: 99,
      platforms: ["PC", "SNES", "Mobile"],
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
      youtubeId: "W7P_40Wz164",
      description: "A obra máxima da Square de 1995. Múltiplos finais, arte atemporal de Akira Toriyama e trilha de Yasunori Mitsuda.",
    },
  ];

  const filteredGames = activeCategory === "all"
    ? gamesList
    : gamesList.filter((g) => g.category === activeCategory);

  const categories = [
    { key: "all", label: "Todos os Títulos" },
    { key: "rpg", label: "RPGs & Sci-Fi" },
    { key: "action", label: "Ação & FPS" },
    { key: "indie", label: "Indies & Obras de Arte" },
    { key: "retro", label: "Clássicos Retrô" },
  ];

  return (
    <section id="jogos" className="py-20 border-b border-nerd-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-nerd-card border border-nerd-accent/40 text-nerd-accent font-mono text-xs mb-3">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>CATÁLOGO_OFICIAL // TITULOS_SELECIONADOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
              JOGOS EM DESTAQUE
            </h2>
            <p className="mt-2 text-gray-400 text-sm max-w-xl">
              Seleção curada de títulos que moldam a indústria dos games, com trailers em 4K e análises de desempenho.
            </p>
          </div>

          {/* Categorias / Filtros */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-2 rounded-lg border transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-nerd-accent text-nerd-bg border-nerd-accent font-bold shadow-neon-green"
                    : "bg-nerd-card text-gray-300 border-nerd-border hover:border-nerd-cyan hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Jogos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="rounded-xl overflow-hidden bg-nerd-card border border-nerd-border hover:border-nerd-cyan/60 hover:shadow-neon-cyan transition-all duration-300 flex flex-col group"
            >
              {/* Thumbnail com Overlay */}
              <div className="relative aspect-video overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nerd-card via-transparent to-black/50" />

                {/* Badge Score */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded bg-nerd-bg/90 border border-nerd-accent text-nerd-accent font-mono font-black text-xs">
                  <Star className="w-3 h-3 fill-nerd-accent" />
                  <span>{game.score}</span>
                </div>

                {/* Plataformas */}
                <div className="absolute top-3 left-3 flex gap-1 font-mono text-[10px]">
                  {game.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-2 py-0.5 rounded bg-black/70 border border-gray-700 text-gray-300 font-semibold"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* Botão Assistir Trailer */}
                <button
                  onClick={() => setSelectedVideo({ id: game.youtubeId, title: game.title })}
                  aria-label={`Assistir trailer de ${game.title}`}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs"
                >
                  <div className="px-4 py-2 rounded-lg bg-nerd-cyan text-nerd-bg font-mono font-bold text-xs flex items-center gap-2 shadow-neon-cyan transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Play className="w-4 h-4 fill-nerd-bg" />
                    VER TRAILER INTERNET
                  </div>
                </button>
              </div>

              {/* Informações */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[11px] text-nerd-cyan uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-nerd-fuchsia" />
                    {game.genre}
                  </div>
                  <h3 className="font-mono font-bold text-lg text-white group-hover:text-nerd-cyan transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    {game.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-nerd-border flex items-center justify-between font-mono text-xs">
                  <span className="flex items-center gap-1 text-gray-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-nerd-accent" />
                    Verificado em 60 FPS
                  </span>
                  <button
                    onClick={() => setSelectedVideo({ id: game.youtubeId, title: game.title })}
                    className="text-nerd-cyan hover:underline flex items-center gap-1"
                  >
                    Trailer Oficial &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Vídeo Trailer */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-nerd-surface rounded-2xl border-2 border-nerd-cyan shadow-neon-cyan overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-nerd-border font-mono text-sm">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-nerd-cyan" />
                <span className="text-white font-bold">{selectedVideo.title} — Trailer Oficial</span>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                aria-label="Fechar trailer"
                className="p-1 rounded-md bg-nerd-card border border-nerd-border text-gray-400 hover:text-white hover:border-red-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
