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
                Obra de grande porte — mais de 500m de muro
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { label: "Início da construção", src: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786692489/come%C3%A7odomuro_sedwwd.jpg", alt: "Início da construção do muro pela LJM Calixto" },
                { label: "Processo de construção", src: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786692490/processodomuro_w9i54b.jpg", alt: "Processo de construção do muro pela LJM Calixto" },
                { label: "Processo de construção", src: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786692489/processodomuro2_sok6ya.jpg", alt: "Intermediário da construção do muro pela LJM Calixto" },
                { label: "Muro finalizado", src: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786692489/finaldomuro_bz7yoq.jpg", alt: "Muro finalizado pela LJM Calixto" },
                { label: "Muro finalizado", src: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786692489/finaldomuro2_p4lahw.jpg", alt: "Muro finalizado vista 2 pela LJM Calixto" },
              ].map((img, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="aspect-[4/3] bg-muted rounded-xl border border-white/10 hover:border-primary/50 transition-colors overflow-hidden group">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
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
                { label: "Antes da reforma", src: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786692491/antestelhado_banrnv.jpg", alt: "Telhado antes da reforma pela LJM Calixto" },
                { label: "Colocação das telhas", src: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786692489/pondo_as_telhas_nyth8g.jpg", alt: "Processo de colocação das telhas pela LJM Calixto" },
                { label: "Entrega de materiais com caminhão munk", src: "https://res.cloudinary.com/emqxcgxp/image/upload/v1786692490/caminh%C3%A3omunkdastelhas_tnqyos.jpg", alt: "Entrega de materiais com caminhão munk pela LJM Calixto" },
              ].map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="aspect-video bg-muted rounded-xl border border-white/10 hover:border-primary/50 transition-colors overflow-hidden group">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
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
                  <div className="aspect-video bg-muted/50 rounded-xl border border-white/5 overflow-hidden group">
                    <img 
                      src="https://res.cloudinary.com/emqxcgxp/image/upload/v1786692490/frentedabarbeariaantes_ucgo2f.jpg" 
                      alt="Frente da barbearia antes da reforma" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-center font-medium uppercase tracking-wider">Frente — antes</p>
                </div>
                <div className="space-y-3">
                  <div className="aspect-video bg-muted rounded-xl border border-primary/30 overflow-hidden group">
                    <img 
                      src="https://res.cloudinary.com/emqxcgxp/image/upload/v1786692490/frentedepois_u5eynz.jpg" 
                      alt="Frente da barbearia depois da reforma" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs text-primary text-center font-bold uppercase tracking-wider">Frente — depois</p>
                </div>
              </div>

              {/* Par 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="aspect-video bg-muted/50 rounded-xl border border-white/5 overflow-hidden group">
                    <img 
                      src="https://res.cloudinary.com/emqxcgxp/image/upload/v1786692490/lateralbarbeariaantes_crtzdo.jpg" 
                      alt="Lateral da barbearia antes da reforma" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-center font-medium uppercase tracking-wider">Lateral — antes</p>
                </div>
                <div className="space-y-3">
                  <div className="aspect-video bg-muted rounded-xl border border-primary/30 overflow-hidden group">
                    <img 
                      src="https://res.cloudinary.com/emqxcgxp/image/upload/v1786692490/lateralbarbeariadepois_mi4hyg.jpg" 
                      alt="Lateral da barbearia depois da reforma" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
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