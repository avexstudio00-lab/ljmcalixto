import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Clock, Hammer } from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

export function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      
      {/* Diferenciais Section (New based on instructions) */}
      <section className="py-24 bg-background dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Diferenciais</h2>
            <h3 className="text-4xl font-bold text-white">Por que escolher a LJM Calixto?</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, t: "Segurança Jurídica", d: "Contratos claros e equipe com seguro." },
              { icon: CheckCircle2, t: "Qualidade Premium", d: "Acabamento fino e materiais de primeira." },
              { icon: Clock, t: "Prazo Rigoroso", d: "Cronograma seguido à risca, sem surpresas." },
              { icon: Hammer, t: "Equipe Própria", d: "Profissionais de confiança e experientes." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-12 h-12 text-primary mx-auto" />
                <h4 className="text-xl font-bold text-white">{item.t}</h4>
                <p className="text-muted-foreground text-sm">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-background dark relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
            Pronto para começar sua transformação?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso e descubra como podemos ajudar a realizar sua obra com tranquilidade.
          </p>
          <a 
            href="https://wa.me/5511930859850?text=Olá! Gostaria de um orçamento." 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/20"
          >
            Falar no WhatsApp agora
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
