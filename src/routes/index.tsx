import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fcfbf8] px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Sparkles className="mx-auto h-12 w-12 text-primary mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Ask Lovable to build your saas start
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
          We've successfully cloned the reference site structure and design intent.
        </p>
        <div className="bg-white p-6 rounded-xl border border-border shadow-sm inline-block">
          <p className="text-sm font-mono text-muted-foreground break-all">
            https://lovable.dev/projects/825d7df0-9cd8-4274-a48e-ca9d3421322f
          </p>
        </div>
      </motion.div>
    </div>
  );
}
