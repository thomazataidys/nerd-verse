"use client";

import { useState } from "react";
import { Play, Flame, Shield, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-nerd-border">
      {/* Background Neon Orbs */}
      <div className="absolute top-10 left-1/4 -z-10 w-96 h-96 bg-nerd-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 -z-10 w-96 h-96 bg-nerd-purple/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Texto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-nerd-card border border-nerd-cyan/30 text-nerd-cyan font-mono text-xs">
              <Sparkles className="w-4 h-4 text-nerd-accent animate-spin" />
              <span>SISTEMA PRONTO // PROTOCOLO_GAMER_ATIVO</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-mono leading-none">
              O HUB DEFINITIVO DA CULTURA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nerd-cyan via-nerd-accent to-nerd-purple">
                NERD & GAMING
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Reviews profundas, benchmarks de consoles de última geração,
              cobertura de eventos globais e transmissões em 4K. De cartuchos
              de 8-bits ao Ray Tracing em tempo real.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#jogos"
                className="px-6 py-3 rounded-lg bg-nerd-accent hover:bg-emerald-400 text-nerd-bg font-mono font-bold text-sm tracking-wide shadow-neon-green transition-all duration-300 flex items-center gap-2"
              >
                <Flame className="w-4 h-4" />
                VER JOGOS DO MOMENTO
              </a>
              <a
                href="#consoles"
                className="px-6 py-3 rounded-lg bg-nerd-card hover:bg-nerd-surface text-gray-200 border border-nerd-border hover:border-nerd-cyan font-mono font-medium text-sm transition-all duration-200 flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-nerd-cyan" />
                COMPARAR CONSOLES
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-nerd-border/60">
              <div className="bg-nerd-surface/60 border border-nerd-border p-3 rounded-lg">
                <div className="text-xl sm:text-2xl font-black font-mono text-nerd-cyan">+50K</div>
                <div className="text-xs text-gray-400 font-mono">Jogadores Conectados</div>
              </div>
              <div className="bg-nerd-surface/60 border border-nerd-border p-3 rounded-lg">
                <div className="text-xl sm:text-2xl font-black font-mono text-nerd-accent">144Hz</div>
                <div className="text-xs text-gray-400 font-mono">Taxa de Atualização</div>
              </div>
              <div className="bg-nerd-surface/60 border border-nerd-border p-3 rounded-lg">
                <div className="text-xl sm:text-2xl font-black font-mono text-nerd-purple">100%</div>
                <div className="text-xs text-gray-400 font-mono">Livre de Toxicidade</div>
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
                  <span className="ml-2 text-gray-300 font-semibold">STREAM_FEED: TRAILER_4K.mp4</span>
                </div>
                <span className="text-nerd-cyan text-[10px] uppercase tracking-wider">LIVE_FEED</span>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video w-full overflow-hidden rounded-b-xl bg-black">
                {isPlaying ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/QdBZY2fkU-0?autoplay=1&rel=0&modestbranding=1"
                    title="GTA VI Trailer Oficial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer group/screen"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* Imagem de preview de jogo de alta qualidade da internet */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
                      alt="Cyberpunk Gaming Setup & Trailer"
                      className="w-full h-full object-cover group-hover/screen:scale-105 transition-transform duration-500 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nerd-bg via-nerd-bg/40 to-transparent" />
                    
                    {/* Botão de Play Nerd */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-nerd-cyan/20 border-2 border-nerd-cyan flex items-center justify-center text-white group-hover/screen:scale-110 group-hover/screen:shadow-neon-cyan transition-all duration-300 backdrop-blur-md">
                        <Play className="w-8 h-8 fill-nerd-cyan text-nerd-cyan ml-1" />
                      </div>
                      <span className="font-mono text-xs font-bold tracking-widest text-nerd-cyan uppercase bg-nerd-bg/80 px-3 py-1 rounded border border-nerd-cyan/40">
                        RODAR TRAILER OFICIAL
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[11px] font-mono text-gray-300">
                      <span className="flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5 text-nerd-accent" />
                        Grand Theft Auto VI // Trailer 1
                      </span>
                      <span className="text-nerd-accent">4K HDR</span>
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
