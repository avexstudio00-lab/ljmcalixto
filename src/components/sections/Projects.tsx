export function Projects() {
  return (
    <section id="projetos" className="py-24 bg-background dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-primary font-semibold uppercase mb-4">Projetos</h2>
        <h3 className="text-4xl font-bold mb-12">Obras entregues pela LJM Calixto</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              Obra {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
