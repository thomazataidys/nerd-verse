import { Terminal, Github, Twitch, Youtube, Disc as Discord, Heart, Gamepad2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-nerd-border bg-nerd-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Identidade */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-nerd-card border border-nerd-cyan/40 flex items-center justify-center text-nerd-cyan">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono font-black text-lg tracking-wider text-white">
                NERD<span className="text-nerd-accent">_VERSE</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 font-mono max-w-md leading-relaxed">
              O portal de referência para quem vive de linhas de comando, horas épicas de jogatina, debates sobre microarquitetura e a cultura nerd em sua plenitude.
            </p>
            <div className="font-mono text-[11px] text-nerd-cyan flex items-center gap-2">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>KONAMI CODE: &uarr; &uarr; &darr; &darr; &larr; &rarr; &larr; &rarr; B A [START]</span>
            </div>
          </div>

          {/* Coluna 2 - Navegação */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#quem-somos" className="hover:text-nerd-cyan transition-colors">
                  &gt; Quem Somos
                </a>
              </li>
              <li>
                <a href="#jogos" className="hover:text-nerd-cyan transition-colors">
                  &gt; Catálogo de Jogos
                </a>
              </li>
              <li>
                <a href="#consoles" className="hover:text-nerd-cyan transition-colors">
                  &gt; Consoles & Hardware
                </a>
              </li>
              <li>
                <a href="#noticias" className="hover:text-nerd-cyan transition-colors">
                  &gt; Feed de Notícias
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-nerd-cyan transition-colors">
                  &gt; Calendário de Eventos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-nerd-cyan transition-colors">
                  &gt; Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Redes da Guilda */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider">
              Redes & Streams
            </h4>
            <div className="flex flex-col gap-2 text-gray-400">
              <a
                href="https://twitch.tv"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-nerd-purple transition-colors"
              >
                <Twitch className="w-4 h-4" />
                <span>Twitch TV / Streams 4K</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube / Trailers & Lore</span>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-nerd-cyan transition-colors"
              >
                <Discord className="w-4 h-4" />
                <span>Discord / Base da Guilda</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub / Código & Projetos</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="pt-8 border-t border-nerd-border flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-gray-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} NerdVerse Games. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            Feito com <Heart className="w-3.5 h-3.5 text-nerd-fuchsia fill-nerd-fuchsia" /> por e para a comunidade gamer.
          </div>
        </div>
      </div>
    </footer>
  );
}
