"use client";

import { useState } from "react";
import { Send, Terminal, Mail, CheckCircle2, MessageSquare, Shield, HelpCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    gamertag: "",
    email: "",
    platform: "pc",
    subject: "review",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulação de transmissão de pacote nerd com delay
    setTimeout(() => {
      setStatus("sent");
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      gamertag: "",
      email: "",
      platform: "pc",
      subject: "review",
      message: "",
    });
    setStatus("idle");
  };

  return (
    <section id="contato" className="py-20 border-b border-white/[0.08] relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-nerd-orange/40 text-nerd-orange font-mono text-xs mb-3 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>FALE COM A REDAÇÃO // CANAL DE COMUNICAÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
            ENTRE EM CONTATO
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Envie sugestões de pautas, dúvidas técnicas sobre hardware ou propostas editoriais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Painel Lateral Nerd / Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-black/60 border border-white/[0.08] p-6 font-mono text-xs space-y-4">
              <div className="flex items-center gap-2 text-nerd-orange font-bold pb-3 border-b border-white/10">
                <Terminal className="w-4 h-4" />
                <span>TERMINAL DE COMUNICAÇÃO // CANAL DIRETO</span>
              </div>

              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-500">CANAL:</span>
                  <span className="text-nerd-orange">ENCRYPTED TLS v1.3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">FREQUÊNCIA:</span>
                  <span className="text-white">142.850 MHz [VHF]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">DISCORD:</span>
                  <span className="text-nerd-orange hover:underline cursor-pointer">discord.gg/nerdverse</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">RESPOSTA:</span>
                  <span className="text-nerd-orange">&lt; 24h úteis</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-gray-400 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Shield className="w-4 h-4 text-nerd-orange" />
                  Privacidade Garantida
                </div>
                <p>
                  Sua mensagem não é compartilhada com terceiros. Tratamento direto com os operadores do portal.
                </p>
              </div>
            </div>

            {/* Dúvidas Frequentes Rápidas */}
            <div className="rounded-2xl bg-black/60 border border-white/[0.08] p-6 space-y-3">
              <h4 className="font-mono font-bold text-white text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-nerd-orange" />
                Dúvidas Rápidas
              </h4>
              <div className="text-xs text-gray-400 space-y-2 font-mono">
                <p>
                  <strong className="text-gray-200">Aceitam jogos indies para review?</strong> Sim! Enviamos feedback técnico sobre jogabilidade e performance.
                </p>
                <p>
                  <strong className="text-gray-200">Como enviar pautas?</strong> Preencha o formulário com o link da notícia ou o assunto desejado.
                </p>
              </div>
            </div>
          </div>

          {/* Formulário Principal */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-black/60 border-2 border-white/[0.08] hover:border-nerd-orange/40 p-6 sm:p-8 transition-colors">
              {status === "sent" ? (
                <div className="text-center py-12 space-y-4 font-mono">
                  <div className="w-16 h-16 rounded-full bg-nerd-orange/20 border-2 border-nerd-orange mx-auto flex items-center justify-center text-nerd-orange shadow-neon-orange">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    MENSAGEM TRANSMITIDA COM SUCESSO!
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
                    Recebemos seus dados. Responderemos no seu endereço eletrônico o mais breve possível.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-nerd-orange text-white text-xs font-bold transition-all"
                    >
                      ENVIAR OUTRA MENSAGEM
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Gamertag / Nome */}
                    <div className="space-y-1.5 font-mono text-xs">
                      <label htmlFor="gamertag" className="text-gray-300 flex items-center justify-between">
                        <span>GAMERTAG // NOME</span>
                        <span className="text-nerd-orange text-[10px]">*OBRIGATÓRIO</span>
                      </label>
                      <input
                        id="gamertag"
                        type="text"
                        required
                        value={formData.gamertag}
                        onChange={(e) => setFormData({ ...formData, gamertag: e.target.value })}
                        placeholder="Ex: Neo_PlayerOne"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-nerd-orange focus:ring-1 focus:ring-nerd-orange transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 font-mono text-xs">
                      <label htmlFor="email" className="text-gray-300 flex items-center justify-between">
                        <span>ENDEREÇO DE E-MAIL</span>
                        <span className="text-nerd-orange text-[10px]">*OBRIGATÓRIO</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="player@nerdverse.io"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-nerd-orange focus:ring-1 focus:ring-nerd-orange transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Plataforma Favorita */}
                    <div className="space-y-1.5 font-mono text-xs">
                      <label htmlFor="platform" className="text-gray-300">
                        PLATAFORMA PRINCIPAL
                      </label>
                      <select
                        id="platform"
                        value={formData.platform}
                        onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-nerd-orange focus:ring-1 focus:ring-nerd-orange transition-all"
                      >
                        <option value="pc">PC Master Race (Windows / Linux)</option>
                        <option value="ps5">PlayStation 5 / PS5 Pro</option>
                        <option value="xbox">Xbox Series X / Series S</option>
                        <option value="switch">Nintendo Switch</option>
                        <option value="retro">Emuladores & Retrogaming</option>
                        <option value="steamdeck">Steam Deck / Handheld</option>
                      </select>
                    </div>

                    {/* Assunto */}
                    <div className="space-y-1.5 font-mono text-xs">
                      <label htmlFor="subject" className="text-gray-300">
                        MOTIVO DO CONTATO
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-nerd-orange focus:ring-1 focus:ring-nerd-orange transition-all"
                      >
                        <option value="review">Sugestão de Análise de Jogo</option>
                        <option value="hardware">Dúvida sobre Montagem / Hardware</option>
                        <option value="guild">Recrutamento / Parceria</option>
                        <option value="event">Cobertura de Evento</option>
                        <option value="other">Outro Assunto</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between items-center">
                      <label htmlFor="message" className="text-gray-300">
                        MENSAGEM
                      </label>
                      <span className="text-gray-500 text-[10px]">
                        {formData.message.length} / 1000 caracteres
                      </span>
                    </div>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      maxLength={1000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva sua mensagem para a equipe do portal..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-nerd-orange focus:ring-1 focus:ring-nerd-orange transition-all resize-none"
                    />
                  </div>

                  {/* Botão de Envio */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-nerd-orange to-amber-600 hover:from-amber-600 hover:to-nerd-orange text-white font-mono font-bold text-sm tracking-wider shadow-neon-orange transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        TRANSMITINDO MENSAGEM...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        ENVIAR MENSAGEM PARA A REDAÇÃO
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
