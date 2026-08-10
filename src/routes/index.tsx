import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
    </main>
  );
}
