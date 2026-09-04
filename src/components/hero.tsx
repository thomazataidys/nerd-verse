"use client";

import { useState } from "react";
import { Play, Flame, Shield, Terminal, Volume2, VolumeX, Eye } from "lucide-react";

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-nerd-border">
      {/* Vídeo de Fundo Dinâmico com Efeito Cyberpunk */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-25 filter contrast-125 saturate-150 scale-105"
          src="https://assets.mixkit.co/videos/preview/mixkit-tunnel-of-futuristic-neon-lights-41540-large.mp4"
        />
        {/* Camada de Gradientes para Legibilidade Perfeita */}
        <div className="absolute inset-0 bg-gradient-to-r from-nerd-bg via-nerd-bg/90 to-nerd-bg/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-nerd-bg via-transparent to-nerd-bg/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-nerd-cyan/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Texto — Tom Editorial Real e Autêntico */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-nerd-card/90 border border-nerd-cyan/40 text-nerd-cyan font-mono text-xs shadow-sm">
              <span className="w-2 h-2 rounded-full bg-nerd-accent animate-pulse" />
              <span>REDAÇÃO NERDVERSE // EDIÇÃO DE 2025</span>
              <span className="text-gray-500">|</span>
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
                title={isMuted ? "Ativar som do fundo" : "Mutar som do fundo"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-nerd-accent" />}
                <span className="text-[10px]">{isMuted ? "MUTADO" : "ÁUDIO ON"}</span>
              </button>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-mono leading-none">
              JORNALISMO GAMER, HARDWARE E{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nerd-cyan via-nerd-accent to-nerd-purple">
                CULTURA GEEK
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Análises técnicas sem rabo preso com distribuidora, comparativos reais de silício e frametime na prática. De cartuchos de Mega Drive a placas com Ray Tracing.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#jogos"
                className="px-6 py-3 rounded-lg bg-nerd-accent hover:bg-emerald-400 text-nerd-bg font-mono font-bold text-sm tracking-wide shadow-neon-green transition-all duration-300 flex items-center gap-2"
              >
                <Flame className="w-4 h-4" />
                EXPLORAR CATÁLOGO DE JOGOS
              </a>
              <a
                href="#consoles"
                className="px-6 py-3 rounded-lg bg-nerd-card hover:bg-nerd-surface text-gray-200 border border-nerd-border hover:border-nerd-cyan font-mono font-medium text-sm transition-all duration-200 flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-nerd-cyan" />
                COMPARATIVO DE CONSOLES
              </a>
            </div>

            {/* Métricas Autênticas */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-nerd-border/60">
              <div className="bg-nerd-surface/80 backdrop-blur-sm border border-nerd-border p-3.5 rounded-lg">
                <div className="text-xl sm:text-2xl font-black font-mono text-nerd-cyan">+120 mil</div>
                <div className="text-xs text-gray-400 font-mono">Leitores Mensais</div>
              </div>
              <div className="bg-nerd-surface/80 backdrop-blur-sm border border-nerd-border p-3.5 rounded-lg">
                <div className="text-xl sm:text-2xl font-black font-mono text-nerd-accent">0% Jabá</div>
                <div className="text-xs text-gray-400 font-mono">Reviews 100% Honestos</div>
              </div>
              <div className="bg-nerd-surface/80 backdrop-blur-sm border border-nerd-border p-3.5 rounded-lg">
                <div className="text-xl sm:text-2xl font-black font-mono text-nerd-purple">12 Anos</div>
                <div className="text-xs text-gray-400 font-mono">Estrada na Comunidade</div>
              </div>
            </div>
          </div>

          {/* Coluna Vídeo Embed da Internet */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-nerd-card border-2 border-nerd-border hover:border-nerd-cyan/60 p-2 shadow-2xl transition-all duration-300 group">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-nerd-border font-mono text-xs text-gray-400 bg-nerd-surface rounded-t-xl">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-gray-300 font-semibold">FEED: GTA_VI_TRAILER_01.mp4</span>
                </div>
                <span className="text-nerd-cyan text-[10px] uppercase tracking-wider flex items-center gap-1">
                  <Eye className="w-3 h-3 text-nerd-accent" />
                  250M VIEWS
                </span>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full overflow-hidden rounded-b-xl bg-black">
                {isPlaying ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/QdBZY2fkU-0?autoplay=1&rel=0&modestbranding=1"
                    title="Grand Theft Auto VI Trailer Oficial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer group/screen"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* Imagem com Fallback Garantido */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://i.ytimg.com/vi/QdBZY2fkU-0/maxresdefault.jpg"
                      alt="Grand Theft Auto VI Trailer Oficial Rockstar Games"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80";
                      }}
                      className="w-full h-full object-cover group-hover/screen:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nerd-bg via-nerd-bg/40 to-transparent" />
                    
                    {/* Botão de Play */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-nerd-cyan/20 border-2 border-nerd-cyan flex items-center justify-center text-white group-hover/screen:scale-110 group-hover/screen:shadow-neon-cyan transition-all duration-300 backdrop-blur-md">
                        <Play className="w-8 h-8 fill-nerd-cyan text-nerd-cyan ml-1" />
                      </div>
                      <span className="font-mono text-xs font-bold tracking-widest text-nerd-cyan uppercase bg-nerd-bg/85 px-3 py-1 rounded border border-nerd-cyan/40">
                        RODAR TRAILER OFICIAL
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[11px] font-mono text-gray-300">
                      <span className="flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5 text-nerd-accent" />
                        Rockstar Games // Vice City 2025
                      </span>
                      <span className="text-nerd-accent font-bold">4K 60FPS</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
