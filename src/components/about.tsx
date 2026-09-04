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
      desc: "Zero lobby de grandes produtoras. Testamos desempenho real, frametimes, otimização e a essência da gameplay.",
    },
    {
      icon: HeartHandshake,
      title: "Comunidade Cooperativa",
      desc: "Um espaço seguro para trocar dicas de montagem de PC, lore obscura de jogos e organizar partidas competitivas.",
    },
    {
      icon: Code,
      title: "Paixão por Hardware",
      desc: "De microcontroladores retrô a rigs refrigerados a água com GPUs de ponta. Discutimos arquitetura pura.",
    },
  ];

  return (
    <section id="quem-somos" className="py-20 border-b border-nerd-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-nerd-card border border-nerd-purple/40 text-nerd-purple font-mono text-xs mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>LORE_DO_PROJETO // ORIGEM_0x01</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
            QUEM SOMOS NÓS?
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl text-sm sm:text-base">
            Uma guilda de entusiastas apaixonados pela intersecção entre tecnologia,
            ciência da computação, cultura pop e a arte dos videogames.
          </p>
        </div>

        {/* Conteúdo Principal com Imagem e História */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl font-bold font-mono text-nerd-cyan flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-nerd-accent" />
              Da Garagem para o Multiverso Digital
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              O <strong className="text-white">NerdVerse</strong> começou como um fórum discreto criado em 2014 por três amigos programadores que queriam debater a física de engines como Havok e Source. Com os anos, nos transformamos em um ponto de encontro diário para milhares de pessoas que vibram com cada trailer, com cada patch note e com cada frame por segundo extra conquistado no overclock.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Acreditamos que jogos eletrônicos são a forma mais sofisticada de arte moderna — combinando narrativa interativa, engenharia de software avançada, música orquestrada e design visual complexo.
            </p>

            {/* Badges de Conquistas Nerd */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-nerd-card border border-nerd-border font-mono text-xs text-nerd-accent">
                [XP_MAXIMO: 99]
              </span>
              <span className="px-2.5 py-1 rounded bg-nerd-card border border-nerd-border font-mono text-xs text-nerd-cyan">
                [ALINHAMENTO: CHAOTIC_GOOD]
              </span>
              <span className="px-2.5 py-1 rounded bg-nerd-card border border-nerd-border font-mono text-xs text-nerd-purple">
                [MANA: 100%]
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-nerd-border group hover:border-nerd-accent transition-all duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80"
                alt="Comunidade Gamer e Setup Retrô"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nerd-bg via-nerd-bg/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-nerd-card/90 backdrop-blur-md p-4 rounded-xl border border-nerd-border">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-nerd-accent font-bold">REDAÇÃO NERDVERSE // SÃO PAULO</span>
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
                className="p-6 rounded-xl bg-nerd-card/80 border border-nerd-border hover:border-nerd-cyan/50 hover:shadow-neon-cyan transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-nerd-surface border border-nerd-border flex items-center justify-center text-nerd-cyan mb-4">
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
