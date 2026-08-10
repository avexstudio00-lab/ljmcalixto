import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Construímos mais do que obras. Realizamos sonhos.
          </h1>
          <p className="text-lg text-muted-foreground">
            Empresa de construção e reformas em Cotia e Granja Viana. Executamos obras residenciais e comerciais com planejamento técnico, equipe própria e cumprimento rigoroso de prazos.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/5511930859850?text=Olá! Tudo bem? Meu nome é ____________. Gostaria de solicitar um orçamento para uma obra, reforma ou ampliação." className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium">
              Solicitar Orçamento
            </a>
            <a href="#projetos" className="border border-input px-8 py-3 rounded-lg font-medium">
              Ver projetos
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[500px] bg-muted rounded-2xl overflow-hidden"
        >
           {/* Placeholder para imagens */}
        </motion.div>
      </div>
    </section>
  );
}
