"use client";

import { useState } from "react";
import { Terminal, Gamepad2, Menu, X, Cpu, Calendar, MessageSquare, Newspaper, Users } from "lucide-react";

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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-nerd-bg/85 border-b border-nerd-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Nerd */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-nerd-card border border-nerd-cyan/40 flex items-center justify-center text-nerd-cyan group-hover:border-nerd-cyan group-hover:shadow-neon-cyan transition-all duration-300">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-black text-lg tracking-wider text-white group-hover:text-nerd-cyan transition-colors">
                NERD<span className="text-nerd-accent">_VERSE</span>
              </span>
              <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
                v2.0.4 // ARCADE_NET
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-md text-gray-300 hover:text-nerd-cyan hover:bg-nerd-surface/80 border border-transparent hover:border-nerd-border transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5 text-nerd-accent" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Status Badge & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-nerd-surface border border-nerd-border text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-nerd-accent animate-pulse" />
              <span className="text-gray-400">SERVER:</span>
              <span className="text-nerd-accent font-semibold">ONLINE</span>
            </div>
            <a
              href="#jogos"
              className="px-4 py-2 rounded-md bg-nerd-accent text-nerd-bg font-mono font-bold text-xs hover:bg-emerald-400 hover:shadow-neon-green transition-all duration-200"
            >
              EXPLORAR
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
            className="md:hidden p-2 rounded-md bg-nerd-surface border border-nerd-border text-gray-300 hover:text-nerd-cyan"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-nerd-border bg-nerd-surface/95 backdrop-blur-lg px-4 py-4 space-y-2 font-mono text-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-200 hover:bg-nerd-card hover:text-nerd-cyan border border-transparent hover:border-nerd-border"
              >
                <Icon className="w-4 h-4 text-nerd-accent" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
