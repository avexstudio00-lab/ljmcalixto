export function Process() {
  const steps = [
    { n: "01", t: "SOLICITAÇÃO", d: "Você nos chama no WhatsApp." },
    { n: "02", t: "VISITA TÉCNICA", d: "Avaliamos o local e o escopo." },
    { n: "03", t: "PLANEJAMENTO", d: "Orçamento e cronograma detalhados." },
    { n: "04", t: "EXECUÇÃO", d: "Obra conduzida por equipe própria." },
    { n: "05", t: "ENTREGA", d: "Limpeza e entrega no prazo." },
  ];
  return (
    <section id="processo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Como conduzimos a sua obra</h3>
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map(s => (
            <div key={s.n} className="space-y-4">
              <div className="text-4xl font-bold text-primary">{s.n}</div>
              <h4 className="font-bold">{s.t}</h4>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
