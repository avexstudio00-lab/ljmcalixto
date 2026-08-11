import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background dark">
      {/* Background Drone Video Placeholder / Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=72ad57a58da2cae31de3a0d9247659dae930797f&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="inline-block p-2 bg-primary/10 rounded-lg mx-auto">
            <span className="text-primary font-bold tracking-tighter text-2xl">LJM Calixto</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
            Construímos mais do que obras. <br className="hidden md:block" />
            <span className="text-primary">Realizamos sonhos.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium">
            Empresa de construção e reformas em Cotia e Granja Viana. Executamos obras residenciais e comerciais com planejamento técnico, equipe própria e cumprimento rigoroso de prazos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <a 
              href="https://wa.me/5511930859850?text=Olá! Tudo bem? Meu nome é ____________. Gostaria de solicitar um orçamento para uma obra, reforma ou ampliação." 
              className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/20"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="#projetos" 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-colors"
            >
              Ver projetos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
