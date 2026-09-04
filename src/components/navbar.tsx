"use client";

import { useState } from "react";
import { Terminal, Gamepad2, Menu, X, Cpu, Calendar, MessageSquare, Newspaper, Users, Sparkles } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Quem Somos", href: "#quem-somos", icon: Users },
    { name: "Jogos", href: "#jogos", icon: Gamepad2 },
    { name: "Consoles", href: "#consoles", icon: Cpu },
    { name: "Notícias", href: "#noticias", icon: Newspaper },
    { name: "Eventos", href: "#eventos", icon: Calendar },
    { name: "Contato", href: "#contato", icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b0e14]/90 border-b border-gray-800/80">
      {/* Top Banner de Telemetria Nerd */}
      <div className="bg-gradient-to-r from-nerd-orange/15 via-nerd-cyan/15 to-nerd-purple/15 border-b border-gray-800/40 text-[11px] font-mono py-1 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-nerd-orange font-bold">
              <Sparkles className="w-3 h-3 text-nerd-orange" />
              PORTAL NERDVERSE GAMING
            </span>
            <span>//</span>
            <span>COBERTURA 4K, HARDWARE & REVIEWS</span>
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-nerd-accent animate-pulse" />
              STATUS: SERVIDORES 100% OPERACIONAIS
            </span>
            <span>PING: 12ms</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Estilo Instant Gaming + Nerd */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nerd-orange to-amber-600 p-0.5 shadow-neon-orange group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-[#0e121a] rounded-[10px] flex items-center justify-center text-nerd-orange group-hover:text-white transition-colors">
                <Terminal className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-black text-xl tracking-tight text-white flex items-center gap-1">
                NERD<span className="text-nerd-orange">VERSE</span>
              </span>
              <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase -mt-1">
                GAMING ARCHIVE & HUB
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#161c28] border border-transparent hover:border-gray-700/70 transition-all duration-150"
                >
                  <Icon className="w-3.5 h-3.5 text-nerd-orange" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Quick Instant Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#jogos"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-nerd-orange to-amber-600 hover:from-amber-600 hover:to-nerd-orange text-white font-mono font-bold text-xs shadow-neon-orange transition-all duration-200 flex items-center gap-1.5"
            >
              <Gamepad2 className="w-4 h-4" />
              VER TRAILERS
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
            className="lg:hidden p-2 rounded-xl bg-[#141a24] border border-gray-700 text-gray-300 hover:text-nerd-orange"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-gray-800 bg-[#0d121b]/98 backdrop-blur-2xl px-4 py-4 space-y-1.5 font-mono text-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-200 hover:bg-[#1a2130] hover:text-nerd-orange border border-transparent hover:border-gray-700 transition-colors"
              >
                <Icon className="w-4 h-4 text-nerd-orange" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
