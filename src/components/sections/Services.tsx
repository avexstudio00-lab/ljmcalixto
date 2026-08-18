import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WA = "https://wa.me/5511930859850?text=";

const SERVICES = [
  {
    title: "Reformas",
    description: "Reformas completas ou parciais de casas, apartamentos e salas comerciais.",
    message:
      "Olá! Tudo bem? Encontrei o site da LJM Calixto Construções e Reformas e gostaria de solicitar um orçamento para uma reforma. Poderiam me informar como funciona o atendimento e quais informações são necessárias para iniciar um orçamento? Fico no aguardo. Muito obrigado!",
  },
  {
    title: "Ampliações",
    description: "Ampliação de área construída com estrutura segura e integração perfeita.",
    message:
      "Olá! Tudo bem? Encontrei o site da LJM Calixto Construções e Reformas e gostaria de solicitar um orçamento para uma ampliação de imóvel. Gostaria de saber como funciona o processo e quais informações vocês precisam para elaborar um orçamento. Muito obrigado!",
  },
  {
    title: "Construção Residencial",
    description: "Construção de residências do zero, da fundação ao acabamento.",
    message:
      "Olá! Tudo bem? Encontrei o site da LJM Calixto Construções e Reformas e gostaria de solicitar um orçamento para uma construção residencial. Poderiam me orientar sobre os próximos passos para iniciar o orçamento? Desde já agradeço pela atenção.",
  },
  {
    title: "Construção Comercial",
    description: "Lojas, escritórios e galpões executados para operar.",
    message:
      "Olá! Tudo bem? Encontrei o site da LJM Calixto Construções e Reformas e gostaria de solicitar um orçamento para uma construção comercial. Gostaria de receber mais informações sobre como funciona o atendimento e o processo de orçamento. Muito obrigado!",
  },
  {
    title: "Gerenciamento de Obras",
    description: "Coordenação de equipes, fornecedores e cronograma.",
    message:
      "Olá! Tudo bem? Encontrei o site da LJM Calixto Construções e Reformas e tenho interesse no serviço de gerenciamento de obras. Gostaria de solicitar um orçamento e entender melhor como funciona esse serviço. Agradeço pela atenção!",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-background">
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
                <Button asChild className="w-full" variant="outline">
                  <a
                    href={`${WA}${encodeURIComponent(s.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Solicitar orçamento de ${s.title} pelo WhatsApp`}
                  >
                    Solicitar Orçamento
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
