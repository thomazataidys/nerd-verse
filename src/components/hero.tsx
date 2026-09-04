"use client";

import { useState } from "react";
import { Play, Flame, Shield, Terminal, Volume2, VolumeX, Eye, ExternalLink } from "lucide-react";

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative overflow-hidden py-14 sm:py-20 border-b border-white/[0.08] bg-black">
      {/* Vídeo de Fundo Dinâmico com Efeito Cyberpunk */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-20 filter contrast-125 saturate-150 scale-105"
          src="https://assets.mixkit.co/videos/preview/mixkit-tunnel-of-futuristic-neon-lights-41540-large.mp4"
        />
        {/* Camada de Gradientes Preto Puro */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Coluna Texto — Design Limpo e Impactante */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-nerd-orange/40 text-nerd-orange font-mono text-xs shadow-sm">
              <span className="w-2 h-2 rounded-full bg-nerd-orange animate-ping" />
              <span>DESTAQUE DA SEMANA // REDAÇÃO NERD</span>
              <span className="text-gray-600">|</span>
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                title={isMuted ? "Ativar som do fundo" : "Mutar som do fundo"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-nerd-orange" />}
                <span className="text-[10px]">{isMuted ? "MUTADO" : "SOM ATIVO"}</span>
              </button>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-mono leading-[1.05]">
              TODOS OS GRANDES JOGOS,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nerd-orange via-amber-400 to-nerd-cyan">
                TRAILERS & ANÁLISES
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Análises diretas, testes de performance em 4K e os trailers oficiais mais aguardados da indústria dos games. Sem filtros publicitários.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#jogos"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-nerd-orange to-amber-600 hover:from-amber-600 hover:to-nerd-orange text-white font-mono font-bold text-sm tracking-wide shadow-neon-orange transition-all duration-300 flex items-center gap-2"
              >
                <Flame className="w-4 h-4" />
                EXPLORAR CATÁLOGO DE JOGOS
              </a>
              <a
                href="#consoles"
                className="px-6 py-3.5 rounded-xl bg-[#131926] hover:bg-[#1a2334] text-gray-200 border border-gray-700 hover:border-nerd-orange font-mono font-medium text-sm transition-all duration-200 flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-nerd-orange" />
                COMPARATIVO DE CONSOLES
              </a>
            </div>

            {/* Badges Estilo Instant Gaming */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
              <div className="bg-white/[0.03] border border-white/[0.08] p-3.5 rounded-xl">
                <div className="text-xl sm:text-2xl font-black font-mono text-nerd-orange">+120 mil</div>
                <div className="text-xs text-gray-400 font-mono">Leitores Mensais</div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] p-3.5 rounded-xl">
                <div className="text-xl sm:text-2xl font-black font-mono text-nerd-orange">100% Isento</div>
                <div className="text-xs text-gray-400 font-mono">Reviews Honestos</div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] p-3.5 rounded-xl">
                <div className="text-xl sm:text-2xl font-black font-mono text-nerd-cyan">4K HDR</div>
                <div className="text-xs text-gray-400 font-mono">Vídeos em Alta Fidelidade</div>
              </div>
            </div>
          </div>

          {/* Coluna Vídeo Player — com suporte a Embed e Link Direto no YouTube */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-black border-2 border-white/10 hover:border-nerd-orange/70 p-2 shadow-2xl transition-all duration-300 group">
              {/* Header do Player */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 font-mono text-xs text-gray-400 bg-white/[0.02] rounded-t-xl">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-gray-200 font-semibold truncate">TRAILER: GTA VI (Trailer Mais Recente)</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=IpSDW3Mq-7E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nerd-orange hover:text-amber-400 text-[10px] flex items-center gap-1 font-bold"
                  title="Abrir no YouTube"
                >
                  YOUTUBE
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full overflow-hidden rounded-b-xl bg-black">
                {isPlaying ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/IpSDW3Mq-7E?autoplay=1&rel=0&enablejsapi=1"
                    title="Grand Theft Auto VI Trailer Oficial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer group/screen"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://i.ytimg.com/vi/IpSDW3Mq-7E/maxresdefault.jpg"
                      alt="Grand Theft Auto VI Trailer Oficial Mais Recente"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80";
                      }}
                      className="w-full h-full object-cover group-hover/screen:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Botão de Play */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
                      <div className="w-16 h-16 rounded-full bg-nerd-orange/30 border-2 border-nerd-orange flex items-center justify-center text-white group-hover/screen:scale-110 shadow-neon-orange transition-all duration-300 backdrop-blur-md">
                        <Play className="w-8 h-8 fill-nerd-orange text-nerd-orange ml-1" />
                      </div>
                      <span className="font-mono text-xs font-bold tracking-wider text-white uppercase bg-black/80 px-3 py-1 rounded-full border border-nerd-orange/40">
                        ASSISTIR TRAILER 4K
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[11px] font-mono text-gray-300">
                      <span className="flex items-center gap-1 truncate">
                        <Shield className="w-3.5 h-3.5 text-nerd-orange" />
                        Rockstar Games Oficial
                      </span>
                      <span className="text-nerd-orange font-bold">4K 60FPS</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Barra Inferior com Link Direto de Escape */}
              <div className="px-3 py-2 bg-black rounded-b-xl border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
                <span className="text-gray-400">Problemas para carregar o player?</span>
                <a
                  href="https://www.youtube.com/watch?v=IpSDW3Mq-7E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nerd-orange hover:underline font-bold flex items-center gap-1"
                >
                  Abrir direto no YouTube &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
