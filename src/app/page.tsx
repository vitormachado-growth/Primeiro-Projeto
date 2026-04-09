"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Play, 
  Scissors, 
  Zap, 
  Mail, 
  Gamepad2,
  Video,
  MonitorPlay,
  MessageSquare
} from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-transparent text-zinc-50 font-sans selection:bg-green-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-display italic tracking-tighter">
            <Video className="w-8 h-8 text-green-500" />
            <span className="text-white">VT</span>
            <span className="text-green-500">EDITS</span>
          </div>
          <a
            href="#portfolio"
            className="text-sm font-semibold text-zinc-300 hover:text-green-400 transition-colors"
          >
            Portfólio
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="flex flex-col items-center text-center space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Edição Profissional de Vídeo</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display uppercase tracking-tight drop-shadow-2xl">
              ELEVE O NÍVEL DA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">SUA GAMEPLAY</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light">
              Transformo horas de gravação e lives em vídeos dinâmicos, com cortes precisos, memes nos momentos certos e qualidade absurda.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services" className="h-14 px-8 bg-green-500 hover:bg-green-400 text-black font-bold flex items-center justify-center rounded-xl transition-all duration-150 hover:scale-105 hover:shadow-neon-strong">
                Ver Serviços
              </a>
              <a href="#contact" className="h-14 px-8 bg-zinc-900 border border-zinc-800 hover:border-green-500/50 hover:shadow-neon text-white font-bold flex items-center justify-center rounded-xl transition-all duration-150 hover:bg-zinc-800">
                Fazer Orçamento
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Proof */}
      <section className="bg-zinc-900/50 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-800">
            <div className="px-4">
              <div className="text-3xl font-black text-green-400">4K/60fps</div>
              <div className="text-zinc-500 text-sm mt-1">Qualidade Máxima</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-black text-green-400">24/48h</div>
              <div className="text-zinc-500 text-sm mt-1">Entrega Rápida</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-black text-green-400">+500</div>
              <div className="text-zinc-500 text-sm mt-1">Vídeos Editados</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-black text-green-400">100%</div>
              <div className="text-zinc-500 text-sm mt-1">Foco na Retenção</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display mb-4">O QUE EU FAÇO</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="group bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 p-8 rounded-2xl transition-colors cursor-default">
              <div className="w-14 h-14 bg-green-500/10 text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Highlights de Stream</h3>
              <p className="text-zinc-400 leading-relaxed">
                Reúno os melhores momentos da sua live, cortando partes ociosas e adicionando memes/efeitos para o YouTube.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 p-8 rounded-2xl transition-colors cursor-default">
              <div className="w-14 h-14 bg-green-500/10 text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scissors className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">TikToks e Shorts</h3>
              <p className="text-zinc-400 leading-relaxed">
                Edição super dinâmica com legendas animadas em formato vertical. O segredo para viralizar e atrair público novo.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 p-8 rounded-2xl transition-colors cursor-default">
              <div className="w-14 h-14 bg-green-500/10 text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gamepad2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Montages / Fragmovies</h3>
              <p className="text-zinc-400 leading-relaxed">
                Edição cinematográfica e focada na sincronia perfeita com a música para destacar suas melhores jogadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 relative border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display mb-4">O QUE A GALERA DIZ</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative hover:border-green-500/30 transition-colors">
              <div className="text-green-500 text-6xl font-serif absolute -top-2 right-6 opacity-20">"</div>
              <p className="text-zinc-400 italic mb-8 relative z-10 text-sm leading-relaxed">
                "Mano, o vídeo ficou muito além do que eu esperava! A sincronia daquela play de AWP com a batida da música ficou insana. Entregou no prazo certinho."
              </p>
              <div className="flex items-center gap-4">
                <Image 
                  src="/avatar-helio.jpg" 
                  alt="HelioGames avatar" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 rounded-full object-cover shadow-inner"
                />
                <div>
                  <div className="font-bold text-zinc-100">HelioGames</div>
                  <div className="text-xs text-green-500 font-bold uppercase tracking-wider">Streamer da Twitch</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative hover:border-green-500/30 transition-colors">
              <div className="text-green-500 text-6xl font-serif absolute -top-2 right-6 opacity-20">"</div>
              <p className="text-zinc-400 italic mb-8 relative z-10 text-sm leading-relaxed">
                "Desde que comecei a postar os cortes que você edita, meu canal no TikTok dobrou de tamanho. As legendas prendem muito a atenção da galera. Brabo demais!"
              </p>
              <div className="flex items-center gap-4">
                <Image 
                  src="/avatar-davi.jpg" 
                  alt="DaviJogos avatar" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 rounded-full object-cover shadow-inner"
                />
                <div>
                  <div className="font-bold text-zinc-100">DaviJogos</div>
                  <div className="text-xs text-green-500 font-bold uppercase tracking-wider">Criador de Conteúdo</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative hover:border-green-500/30 transition-colors">
              <div className="text-green-500 text-6xl font-serif absolute -top-2 right-6 opacity-20">"</div>
              <p className="text-zinc-400 italic mb-8 relative z-10 text-sm leading-relaxed">
                "O melhor editor com quem já trampei. O cara tem feeling pra meme, sabe exatamente a hora de cortar e o flow do vídeo nunca fica cansativo."
              </p>
              <div className="flex items-center gap-4">
                <Image 
                  src="/avatar-gabriel.jpg" 
                  alt="GabrielGamePlays avatar" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 rounded-full object-cover shadow-inner"
                />
                <div>
                  <div className="font-bold text-zinc-100">GabrielGamePlays</div>
                  <div className="text-xs text-green-500 font-bold uppercase tracking-wider">Youtuber (100k)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 relative bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display mb-4">PLANOS & VALORES</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
              Valores base para os estilos mais procurados. Para projetos longos ou mensais, ajustamos o orçamento de acordo com a sua necessidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan 1 */}
            <div className="flex flex-col bg-zinc-950/80 border border-zinc-800 hover:border-green-500/50 p-8 rounded-2xl transition-colors">
              <h3 className="text-xl font-bold text-zinc-300 mb-2">Shorts & TikTok</h3>
              <div className="text-4xl font-black text-green-400 mb-6">R$ 40<span className="text-lg text-zinc-500 font-normal">/vídeo</span></div>
              <ul className="space-y-4 mb-8 flex-1 text-zinc-400 text-sm">
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-green-500" /> Até 1 minuto de duração</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-green-500" /> Legendas Animadas (estilo gringo)</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-green-500" /> Zoom, Efeitos Sonoros e Memes</li>
              </ul>
              <a href="https://api.whatsapp.com/send/?phone=5521997227400&text=Ol%C3%A1!%20Estou%20interessado%20no%20pacote%20%22Shorts%20e%20Tiktok%22." target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-zinc-900 hover:bg-green-500 hover:text-black text-white font-bold rounded-xl text-center transition-colors border border-zinc-800 hover:border-transparent">Quero Este</a>
            </div>

            {/* Plan 2 */}
            <div className="flex flex-col bg-zinc-900 border-2 border-green-500 p-8 rounded-2xl relative transform hover:-translate-y-2 transition-transform shadow-neon">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
                Preferido
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Highlights YouTube</h3>
              <div className="text-4xl font-display text-green-400 mb-6">R$ 120<span className="text-lg text-zinc-500 font-normal">/vídeo</span></div>
              <ul className="space-y-4 mb-8 flex-1 text-zinc-300 text-sm">
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-green-500" /> Vídeos de 8 a 15 minutos</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-green-500" /> Cortes dinâmicos da Live / VOD</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-green-500" /> Sincronia musical e Color Grading</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-green-500" /> Retenção Máxima</li>
              </ul>
              <a href="https://api.whatsapp.com/send/?phone=5521997227400&text=Ol%C3%A1!%20Estou%20interessado%20no%20pacote%20%22Highlights%20Youtube%22." target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-black rounded-xl text-center transition-colors shadow-neon-strong">Quero Este</a>
            </div>

            {/* Plan 3 */}
            <div className="flex flex-col bg-zinc-950/80 border border-zinc-800 hover:border-green-500/50 p-8 rounded-2xl transition-colors">
              <h3 className="text-xl font-bold text-zinc-300 mb-2">Fragmovie / Montage</h3>
              <div className="text-4xl font-black text-green-400 mb-6">R$ 180<span className="text-lg text-zinc-500 font-normal">/vídeo</span></div>
              <ul className="space-y-4 mb-8 flex-1 text-zinc-400 text-sm">
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-green-500" /> Edição Cinematográfica</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-green-500" /> Sincronia avançada de tiros/batidas</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-green-500" /> Efeitos Visuais (VFX / RSMB / Glow)</li>
              </ul>
              <a href="https://api.whatsapp.com/send/?phone=5521997227400&text=Ol%C3%A1!%20Estou%20interessado%20no%20pacote%20%22Fragmove%20e%20Montage%22." target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-zinc-900 hover:bg-green-500 hover:text-black text-white font-bold rounded-xl text-center transition-colors border border-zinc-800 hover:border-transparent">Quero Este</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA Section */}
      <section className="py-24 px-6 bg-green-500 text-black border-t-8 border-green-400 relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display mb-6">PRONTO PARA CRESCER?</h2>
          <p className="text-xl font-medium mb-10 opacity-90">
            A qualidade do seu vídeo diz tudo sobre o seu conteúdo. Vamos transformar suas ideias num bagulho insano.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://api.whatsapp.com/send/?phone=5521997227400&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-14 px-8 bg-black text-white hover:bg-zinc-900 font-bold flex items-center gap-2 rounded-xl transition-all duration-150 hover:scale-105 shadow-xl hover:shadow-neon"
            >
              <MessageSquare className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Floating Bottom Right Socials */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a 
          href="https://www.tiktok.com/@vtzzz20" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl transition-all duration-300 hover:border-green-500/50 hover:shadow-neon hover:-translate-y-1"
          aria-label="TikTok"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-zinc-300 group-hover:text-green-500 transition-colors"
          >
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/vitor-da-silva-machado-1188971b4/" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl transition-all duration-300 hover:border-green-500/50 hover:shadow-neon hover:-translate-y-1"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-zinc-300 group-hover:text-green-500 transition-colors"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a 
          href="https://www.instagram.com/vt.axe/" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl transition-all duration-300 hover:border-green-500/50 hover:shadow-neon hover:-translate-y-1"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-zinc-300 group-hover:text-green-500 transition-colors"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      </div>
    </div>
  );
}
