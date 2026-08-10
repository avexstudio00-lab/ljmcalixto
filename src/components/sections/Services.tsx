import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SERVICES = [
  { title: "Reformas", description: "Reformas completas ou parciais de casas, apartamentos e salas comerciais." },
  { title: "Ampliações", description: "Ampliação de área construída com estrutura segura e integração perfeita." },
  { title: "Construção Residencial", description: "Construção de residências do zero, da fundação ao acabamento." },
  { title: "Construção Comercial", description: "Lojas, escritórios e galpões executados para operar." },
  { title: "Gerenciamento de Obras", description: "Coordenação de equipes, fornecedores e cronograma." },
];

export function Services() {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-semibold uppercase tracking-wider">Serviços</h2>
          <h3 className="text-4xl font-bold">Soluções completas em construção e reforma</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Card key={s.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <h4 className="text-xl font-bold">{s.title}</h4>
                <p className="text-muted-foreground text-sm">{s.description}</p>
                <Button className="w-full" variant="outline">Solicitar Orçamento</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
