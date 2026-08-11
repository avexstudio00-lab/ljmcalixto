import { motion } from "framer-motion";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-primary font-semibold uppercase tracking-wider">Sobre a empresa</h2>
            <h3 className="text-4xl font-bold text-foreground">Engenharia, cuidado e transparência em cada etapa da obra</h3>
            <p className="text-muted-foreground text-lg">
              A LJM Calixto Construções e Reformas é uma empresa sediada em Cotia - SP, especializada em reformas, ampliações e construções residenciais e comerciais. Nascemos da convicção de que uma obra bem feita começa muito antes do primeiro tijolo: começa no planejamento, na escuta e no respeito ao orçamento do cliente.
            </p>
            <p className="text-muted-foreground text-lg">
              Atuamos com equipe própria e profissionais qualificados, materiais selecionados e acompanhamento técnico contínuo.
            </p>
            <a href="https://wa.me/5511930859850?text=Olá! Gostaria de um orçamento." className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Solicitar Orçamento
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
              <div className="text-3xl font-bold text-primary">+10</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Acompanhamento técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
