export function Footer() {
  return (
    <footer id="contato" className="py-12 bg-secondary/80 border-t border-border">
      <div className="container mx-auto px-4 text-center space-y-6">
        <div className="text-2xl font-bold">LJM Calixto</div>
        <p className="max-w-md mx-auto text-muted-foreground">
          Av. João Paulo Ablas, 1430, Jardim da Glória, Cotia - SP, CEP 06711-250
        </p>
        <div className="flex justify-center gap-6">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} LJM Calixto Construções e Reformas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
