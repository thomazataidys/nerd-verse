import { Cpu, HardDrive, Zap, Tv, CheckCircle2 } from "lucide-react";

interface ConsoleSpec {
  id: string;
  name: string;
  maker: string;
  generation: string;
  image: string;
  cpu: string;
  gpu: string;
  storage: string;
  resolution: string;
  highlight: string;
  nerdRating: string;
  features: string[];
}

export function Consoles() {
  const consoles: ConsoleSpec[] = [
    {
      id: "ps5-pro",
      name: "PlayStation 5 Pro",
      maker: "Sony Interactive Entertainment",
      generation: "9ª Geração Pro",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
      cpu: "AMD Zen 2 8-Core 3.5GHz",
      gpu: "RDNA 3 Refined (16.7 TFLOPs + PSSR AI)",
      storage: "2TB NVMe SSD Ultrarrápido",
      resolution: "4K a 60/120 FPS c/ Ray Tracing Avançado",
      highlight: "PlayStation Spectral Super Resolution (PSSR)",
      nerdRating: "9.6 / 10",
      features: ["Tempest 3D Audio", "DualSense Haptic", "Wi-Fi 7 Ready"],
    },
    {
      id: "xbox-series-x",
      name: "Xbox Series X",
      maker: "Microsoft Gaming",
      generation: "9ª Geração",
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80",
      cpu: "Custom AMD Zen 2 8-Core 3.8GHz",
      gpu: "Custom RDNA 2 (12.15 TFLOPs)",
      storage: "1TB Custom NVMe SSD",
      resolution: "True 4K Gaming até 120 FPS",
      highlight: "Xbox Velocity Architecture & Quick Resume",
      nerdRating: "9.4 / 10",
      features: ["Quick Resume Instantâneo", "Dolby Vision & Atmos", "Retrocompatibilidade Total"],
    },
    {
      id: "steam-deck-oled",
      name: "Steam Deck OLED",
      maker: "Valve Corporation",
      generation: "PC Portátil / Linux Handheld",
      image: "https://images.unsplash.com/photo-1592840496073-e72bbe61301a?auto=format&fit=crop&w=800&q=80",
      cpu: "Custom AMD APU Sephiroth 6nm",
      gpu: "RDNA 2 8 CUs (1.6 TFLOPs)",
      storage: "512GB / 1TB NVMe High-Speed",
      resolution: "1280x800 HDR OLED 90Hz",
      highlight: "SteamOS Nativo & Liberdade Open Source",
      nerdRating: "9.8 / 10",
      features: ["Tela HDR de 1000 nits", "Compatibilidade Proton", "Emulação Retrô Completa"],
    },
    {
      id: "switch-oled",
      name: "Nintendo Switch OLED",
      maker: "Nintendo",
      generation: "Híbrido Portátil / Mesa",
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80",
      cpu: "NVIDIA Tegra X1 Custom",
      gpu: "NVIDIA Maxwell Custom",
      storage: "64GB Interno + Suporte MicroSDXC",
      resolution: "720p Portátil / 1080p Dock",
      highlight: "Tela OLED de 7 polegadas com pretos perfeitos",
      nerdRating: "9.0 / 10",
      features: ["Jogatina Híbrida Sem Fio", "Catálogo Lendário First-Party", "Joy-Cons c/ HD Rumble"],
    },
  ];

  return (
    <section id="consoles" className="py-20 border-b border-nerd-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131926] border border-nerd-orange/40 text-nerd-orange font-mono text-xs mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>LABORATÓRIO DE HARDWARE // ESPECIFICAÇÕES TÉCNICAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
            CONSOLES & PLATAFORMAS
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Métricas de silício, poder de processamento e análise técnica dos consoles da geração atual e portáteis.
          </p>
        </div>

        {/* Grid de Hardware */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {consoles.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl bg-[#101522] border border-gray-800 hover:border-nerd-orange/60 hover:shadow-neon-orange transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="font-mono text-xs text-nerd-orange font-semibold uppercase">
                      {c.generation}
                    </span>
                    <h3 className="text-2xl font-bold font-mono text-white group-hover:text-nerd-cyan transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">{c.maker}</p>
                  </div>
                  <div className="px-3 py-1 rounded bg-nerd-surface border border-nerd-cyan/30 text-right">
                    <span className="font-mono text-[10px] text-gray-400 block">BENCHMARK</span>
                    <span className="font-mono text-sm font-bold text-nerd-cyan">{c.nerdRating}</span>
                  </div>
                </div>

                {/* Imagem do Console da Internet */}
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-black border border-nerd-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nerd-card via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-nerd-bg/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-nerd-border flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-nerd-accent" />
                    <span className="font-mono text-xs text-gray-200 truncate">{c.highlight}</span>
                  </div>
                </div>

                {/* Tabela de Especificações */}
                <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-nerd-surface/80 border border-nerd-border">
                    <span className="text-[10px] text-gray-400 block mb-0.5 flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-nerd-cyan" /> PROCESSADOR
                    </span>
                    <span className="text-gray-200 font-medium truncate block">{c.cpu}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-nerd-surface/80 border border-nerd-border">
                    <span className="text-[10px] text-gray-400 block mb-0.5 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-nerd-accent" /> GRÁFICOS (GPU)
                    </span>
                    <span className="text-gray-200 font-medium truncate block">{c.gpu}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-nerd-surface/80 border border-nerd-border">
                    <span className="text-[10px] text-gray-400 block mb-0.5 flex items-center gap-1">
                      <HardDrive className="w-3 h-3 text-nerd-purple" /> ARMAZENAMENTO
                    </span>
                    <span className="text-gray-200 font-medium truncate block">{c.storage}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-nerd-surface/80 border border-nerd-border">
                    <span className="text-[10px] text-gray-400 block mb-0.5 flex items-center gap-1">
                      <Tv className="w-3 h-3 text-nerd-amber" /> SAÍDA DE VÍDEO
                    </span>
                    <span className="text-gray-200 font-medium truncate block">{c.resolution}</span>
                  </div>
                </div>
              </div>

              {/* Badges de Destaques */}
              <div className="pt-4 border-t border-nerd-border flex flex-wrap gap-2">
                {c.features.map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-gray-300 bg-nerd-surface px-2.5 py-1 rounded-md border border-nerd-border"
                  >
                    <CheckCircle2 className="w-3 h-3 text-nerd-accent" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
