import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden bg-background dark">
      {/* Background Drone Video Placeholder / Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-20 pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="inline-block p-2 bg-primary/10 rounded-lg">
            <span className="text-primary font-bold tracking-tighter text-2xl">LJM Calixto</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Construímos mais do que obras. <span className="text-primary">Realizamos sonhos.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Empresa de construção e reformas em Cotia e Granja Viana. Executamos obras residenciais e comerciais com planejamento técnico, equipe própria e cumprimento rigoroso de prazos.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://wa.me/5511930859850?text=Olá! Tudo bem? Meu nome é ____________. Gostaria de solicitar um orçamento para uma obra, reforma ou ampliação." className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
              Solicitar Orçamento
            </a>
            <a href="#projetos" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-colors">
              Ver projetos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
