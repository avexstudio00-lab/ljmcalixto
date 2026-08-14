import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projetos" className="py-24 bg-background dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Nossas Obras</h2>
          <h3 className="text-4xl font-bold mb-4">Portfólio de Sucesso</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Registros reais de reformas, ampliações e construções executadas pela nossa equipe.
          </p>
        </div>

        <div className="space-y-24">
          {/* GRUPO 1 — CONSTRUÇÃO DE MURO */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <h4 className="text-3xl font-bold border-l-4 border-primary pl-4">Construção de Muro</h4>
              <Badge className="w-fit bg-primary text-primary-foreground font-bold px-3 py-1 text-sm uppercase">
                Obra de grande porte — Mais de 500m
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { label: "Início da construção", desc: "começo do muro" },
                { label: "Processo de construção", desc: "processo do muro" },
                { label: "Processo de construção", desc: "processo do muro 2" },
                { label: "Muro finalizado", desc: "final do muro" },
                { label: "Muro finalizado", desc: "final do muro 2" },
              ].map((img, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center text-muted-foreground border border-white/10 hover:border-primary/50 transition-colors overflow-hidden group">
                    <span className="group-hover:scale-110 transition-transform duration-500 uppercase text-[10px] tracking-widest">{img.desc}</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center font-medium uppercase tracking-wider">{img.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GRUPO 2 — REFORMA DE TELHADO */}
          <div className="space-y-8">
            <h4 className="text-3xl font-bold border-l-4 border-primary pl-4 mb-6">Reforma de Telhado</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Antes da reforma", desc: "antestelhado" },
                { label: "Colocação das telhas", desc: "pondo as telhas" },
                { label: "Entrega de materiais com caminhão munk", desc: "caminhão munk das telhas" },
              ].map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground border border-white/10 hover:border-primary/50 transition-colors overflow-hidden group">
                    <span className="group-hover:scale-110 transition-transform duration-500 uppercase text-[10px] tracking-widest">{img.desc}</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center font-medium uppercase tracking-wider">{img.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GRUPO 3 — REFORMA DE BARBEARIA */}
          <div className="space-y-8">
            <h4 className="text-3xl font-bold border-l-4 border-primary pl-4 mb-6">Reforma de Barbearia</h4>
            <div className="space-y-12">
              {/* Par 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="aspect-video bg-muted/50 rounded-xl flex items-center justify-center text-muted-foreground border border-white/5 overflow-hidden group">
                    <span className="group-hover:scale-110 transition-transform duration-500 uppercase text-[10px] tracking-widest">frente barbearia antes</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center font-medium uppercase tracking-wider">Frente — antes</p>
                </div>
                <div className="space-y-3">
                  <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground border border-primary/30 overflow-hidden group">
                    <span className="group-hover:scale-110 transition-transform duration-500 uppercase text-[10px] tracking-widest">frente depois</span>
                  </div>
                  <p className="text-xs text-primary text-center font-bold uppercase tracking-wider">Frente — depois</p>
                </div>
              </div>

              {/* Par 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="aspect-video bg-muted/50 rounded-xl flex items-center justify-center text-muted-foreground border border-white/5 overflow-hidden group">
                    <span className="group-hover:scale-110 transition-transform duration-500 uppercase text-[10px] tracking-widest">lateral barbearia antes</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center font-medium uppercase tracking-wider">Lateral — antes</p>
                </div>
                <div className="space-y-3">
                  <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground border border-primary/30 overflow-hidden group">
                    <span className="group-hover:scale-110 transition-transform duration-500 uppercase text-[10px] tracking-widest">lateral barbearia depois</span>
                  </div>
                  <p className="text-xs text-primary text-center font-bold uppercase tracking-wider">Lateral — depois</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}