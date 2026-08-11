import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const NAV_ITEMS = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map(item => item.href.substring(1)));

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-primary tracking-tighter">LJM</span>
          <span className="text-xl font-bold text-foreground">Calixto</span>
        </div>
        
        <div className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeId === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden p-4 border-t border-border bg-background">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
