import { Calendar, MapPin, Ticket, ExternalLink, Flame, Trophy } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  location: string;
  date: string;
  badge: string;
  status: "open" | "live" | "soon";
  image: string;
  description: string;
  highlights: string[];
}

export function Events() {
  const events: EventItem[] = [
    {
      id: "bgs-expo",
      title: "Brasil Game Show (BGS)",
      location: "Expo Center Norte — São Paulo, SP",
      date: "08 a 12 de Outubro",
      badge: "MAIOR DA AMÉRICA LATINA",
      status: "open",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      description: "Mais de 300 stands com lançamentos jogáveis em primeira mão, arenas de eSports, presença de lendas da indústria e campeonatos de cosplay.",
      highlights: ["Demos exclusivas", "Meet & Greet com Devs", "Pavilhão Indie"],
    },
    {
      id: "ccxp-pop",
      title: "CCXP — Comic Con Experience",
      location: "São Paulo Expo — São Paulo, SP",
      date: "04 a 07 de Dezembro",
      badge: "EPICENTRO POP & GEEK",
      status: "soon",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      description: "Painéis de estúdios internacionais, Artists' Valley com mais de 500 quadrinistas, ativações épicas de cinema, streaming e colecionáveis raros.",
      highlights: ["Painéis Hollywood", "Artists' Valley", "Concurso Master Cosplay"],
    },
    {
      id: "the-game-awards",
      title: "The Game Awards (TGA)",
      location: "Peacock Theater — Los Angeles & Global Stream",
      date: "11 de Dezembro",
      badge: "O OSCAR DOS GAMES",
      status: "live",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      description: "A noite máxima que premia o Jogo do Ano (GOTY), acompanhada de revelações inéditas de trailers mundiais e orquestra sinfônica ao vivo.",
      highlights: ["GOTY 2025", "World Premieres", "Orquestra ao Vivo"],
    },
    {
      id: "gamescom-global",
      title: "Gamescom Europe",
      location: "Koelnmesse — Colônia, Alemanha",
      date: "20 a 24 de Agosto",
      badge: "GLOBAL SHOWCASE",
      status: "open",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      description: "A feira mais visitada do planeta, conectando estúdios AAA e a indústria global com anúncios em tempo real na Opening Night Live.",
      highlights: ["Opening Night Live", "Hardware Zone", "B2B Developer Hub"],
    },
  ];

  return (
    <section id="eventos" className="py-20 border-b border-nerd-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-nerd-card border border-nerd-amber/40 text-nerd-amber font-mono text-xs mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>CALENDÁRIO_OFICIAL // ROADMAP_DE_EVENTOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
            CONVENÇÕES & CAMPEONATOS
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Planeje sua rota para os maiores encontros presenciais e transmissões da comunidade nerd mundial.
          </p>
        </div>

        {/* Grid de Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="rounded-2xl bg-nerd-card border border-nerd-border hover:border-nerd-amber/60 hover:shadow-neon-green transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nerd-card via-black/40 to-transparent" />

                  {/* Badge de Destaque */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 border border-nerd-amber/50 font-mono text-xs font-bold text-nerd-amber">
                    {ev.badge}
                  </div>

                  {/* Data Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-nerd-bg/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-nerd-border font-mono text-xs text-white">
                    <Calendar className="w-4 h-4 text-nerd-accent" />
                    <span>{ev.date}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 font-mono text-xs mb-2">
                    <MapPin className="w-4 h-4 text-nerd-cyan" />
                    <span>{ev.location}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-mono text-white group-hover:text-nerd-amber transition-colors mb-3">
                    {ev.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {ev.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {ev.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 rounded bg-nerd-surface border border-nerd-border font-mono text-[11px] text-gray-300 flex items-center gap-1"
                      >
                        <Trophy className="w-3 h-3 text-nerd-amber" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-nerd-border/60 mt-4 flex items-center justify-between font-mono text-xs">
                <span className="flex items-center gap-1.5 text-nerd-accent font-semibold">
                  <Flame className="w-3.5 h-3.5" />
                  CONFIRMADO NA AGENDA
                </span>
                <a
                  href="#contato"
                  className="px-4 py-2 rounded-lg bg-nerd-surface hover:bg-nerd-border text-white border border-nerd-border flex items-center gap-2 transition-colors"
                >
                  <Ticket className="w-3.5 h-3.5 text-nerd-amber" />
                  Notificar Ingressos
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
