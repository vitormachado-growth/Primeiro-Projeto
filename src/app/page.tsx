"use client";
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
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-green-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-black italic tracking-tighter">
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
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-2xl">
              ELEVE O NÍVEL DA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">SUA GAMEPLAY</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light">
              Transformo horas de gravação e lives em vídeos dinâmicos, com cortes precisos, memes nos momentos certos e qualidade absurda.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services" className="h-14 px-8 bg-green-500 hover:bg-green-400 text-black font-bold flex items-center justify-center rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                Ver Serviços
              </a>
              <a href="#contact" className="h-14 px-8 bg-zinc-900 border border-zinc-800 hover:border-green-500/50 text-white font-bold flex items-center justify-center rounded-xl transition-all hover:bg-zinc-800">
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
            <h2 className="text-3xl md:text-5xl font-black mb-4">O QUE EU FAÇO</h2>
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

      {/* Footer / CTA Section */}
      <section className="py-24 px-6 bg-green-500 text-black border-t-8 border-green-400 relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">PRONTO PARA CRESCER?</h2>
          <p className="text-xl font-medium mb-10 opacity-90">
            A qualidade do seu vídeo diz tudo sobre o seu conteúdo. Vamos transformar suas ideias num bagulho insano.
          </p>
          <div className="flex justify-center gap-4">
            <button className="h-14 px-8 bg-black text-white hover:bg-zinc-900 font-bold flex items-center gap-2 rounded-xl transition-all hover:scale-105 shadow-xl">
              <MessageSquare className="w-5 h-5" />
              Chamar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Floating Bottom Right Contacts */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a 
          href="#" 
          className="w-10 h-10 bg-zinc-800 hover:bg-green-500 hover:text-black border border-zinc-700 text-zinc-300 rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a 
          href="#" 
          className="w-10 h-10 bg-zinc-800 hover:bg-green-500 hover:text-black border border-zinc-700 text-zinc-300 rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110"
          aria-label="Discord"
        >
          <MonitorPlay className="w-4 h-4" />
        </a>
        <a 
          href="#" 
          className="w-10 h-10 bg-zinc-800 hover:bg-green-500 hover:text-black border border-zinc-700 text-zinc-300 rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a 
          href="#" 
          className="w-12 h-12 bg-green-500 text-black rounded-full flex items-center justify-center transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:scale-110 font-bold"
          aria-label="WhatsApp Principal"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
