"use client";

import { useState } from "react";
import { Terminal, Gamepad2, Menu, X, Cpu, Calendar, MessageSquare, Newspaper, Users, ArrowRight } from "lucide-react";

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
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/80 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo Moderno */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-nerd-orange to-amber-500 p-[1.5px] shadow-neon-orange transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center text-nerd-orange group-hover:text-white transition-colors">
                <Terminal className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-mono font-black text-xl tracking-tight text-white">
                  NERD<span className="text-nerd-orange">VERSE</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-nerd-orange animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase -mt-0.5">
                GAMING & HARDWARE
              </span>
            </div>
          </a>

          {/* Menu Central Desktop */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 font-mono text-xs shadow-inner">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5 text-nerd-orange opacity-80" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Botão de Ação Direita */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#jogos"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-nerd-orange via-orange-600 to-amber-500 hover:brightness-110 text-white font-mono font-bold text-xs shadow-neon-orange transition-all duration-200 flex items-center gap-2 group"
            >
              <span>EXPLORAR JOGOS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu de navegação"
            className="lg:hidden p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-gray-200 hover:text-nerd-orange hover:bg-white/[0.08] transition-all"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Drawer Mobile */}
      {isOpen && (
        <div className="lg:hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl px-4 py-4 space-y-2 font-mono text-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:bg-white/[0.06] hover:text-nerd-orange transition-all"
              >
                <Icon className="w-4 h-4 text-nerd-orange" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#jogos"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-nerd-orange to-amber-500 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-neon-orange"
            >
              <Gamepad2 className="w-4 h-4" />
              EXPLORAR JOGOS
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
