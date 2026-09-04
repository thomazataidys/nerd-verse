import { Users, Award, HeartHandshake, Code, Terminal, Sparkles } from "lucide-react";

export function About() {
  const pilares = [
    {
      icon: Terminal,
      title: "Cultura Geek Raiz",
      desc: "Nascemos de noites em claro jogando RPG de mesa, calibrando emuladores e zerando clássicos de 8 a 64 bits.",
    },
    {
      icon: Award,
      title: "Análises Sem Filtro",
      desc: "Zero lobby de distribuidoras. Testamos desempenho real, frametimes, otimização e a gameplay autêntica.",
    },
    {
      icon: HeartHandshake,
      title: "Comunidade Cooperativa",
      desc: "Um espaço seguro para trocar dicas de montagem de PC, lore obscura de jogos e organizar jogatinas.",
    },
    {
      icon: Code,
      title: "Paixão por Hardware",
      desc: "De microcontroladores retrô a bancadas com GPUs de ponta refrigeradas a água. Arquitetura pura.",
    },
  ];

  return (
    <section id="quem-somos" className="py-20 border-b border-white/[0.08] relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-nerd-orange/40 text-nerd-orange font-mono text-xs mb-3 shadow-sm">
            <Users className="w-3.5 h-3.5" />
            <span>EDITORIAL // HISTÓRIA DA REDAÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
            QUEM SOMOS NÓS?
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl text-sm sm:text-base">
            Uma redação independente de entusiastas apaixonados pela intersecção entre tecnologia,
            ciência da computação, cultura pop e a arte dos videogames.
          </p>
        </div>

        {/* Conteúdo Principal com Imagem e História */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl font-bold font-mono text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-nerd-orange" />
              Da Bancada de Testes ao Portal
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              O <strong className="text-white">NerdVerse</strong> começou em 2014 entre amigos programadores e gamers que queriam debater mecânica de engines, física de colisão e arquitetura de hardware sem jargões corporativos. Com os anos, nos tornamos referência para quem busca informação transparente, sem patrocínios ocultos.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Acreditamos que jogos eletrônicos são a forma mais sofisticada de arte moderna — combinando narrativa interativa, engenharia de software de ponta, música orquestrada e design visual de última geração.
            </p>

            {/* Badges de Conquistas Nerd */}
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-nerd-orange/30 text-nerd-orange">
                [EXPERIÊNCIA: 12 ANOS]
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-300">
                [FILOSOFIA: 100% INDEPENDENTE]
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-300">
                [FOCO: FRAME-PACING REAL]
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 group hover:border-nerd-orange/60 transition-all duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80"
                alt="Comunidade Gamer e Setup Retrô"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-xl p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-nerd-orange font-bold">REDAÇÃO NERDVERSE // SÃO PAULO</span>
                  <span className="text-gray-400">DESDE 2014</span>
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  Espaço independente de jornalismo gamer, preservação digital e hardware de bancada.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pilares Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-nerd-orange/50 hover:shadow-neon-orange transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-nerd-orange mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-mono font-bold text-white text-base mb-2">
                  {p.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
