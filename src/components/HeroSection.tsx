import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Brain, Eye, Layers } from "lucide-react";
import HeroVisual from "./HeroVisual";

const floatingIcons = [
  { icon: Zap, className: "absolute top-20 left-[10%] text-amber-400/20 animate-blob" },
  { icon: Shield, className: "absolute top-40 right-[15%] text-blue-400/20 animate-blob-delay-2" },
  { icon: Brain, className: "absolute bottom-32 left-[20%] text-violet-400/15 animate-blob-delay-4" },
  { icon: Eye, className: "absolute top-28 right-[30%] text-cyan-400/15 animate-blob" },
  { icon: Layers, className: "absolute bottom-20 right-[20%] text-emerald-400/15 animate-blob-delay-2" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-grid overflow-hidden">
      {/* Radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(160_84%_39%/0.08)_0%,_transparent_70%)]" />
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
      
      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <item.icon key={i} className={`h-8 w-8 md:h-12 md:w-12 ${item.className}`} />
      ))}

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/50 text-xs text-muted-foreground mb-8 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            AI Decision Simulation
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 animate-fade-in-up">
            Five AI specialists.
            <br />
            <span className="text-primary">One decision.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200 leading-relaxed text-balance">
            Aql simulates how legal, financial, technical, tax, and business experts evaluate your decision — and turns it into clear paths forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl">
              Start a project <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="hero-secondary" size="xl">
              See an example decision
            </Button>
          </div>
        </div>
        <div className="mt-20 animate-fade-in-up animation-delay-400">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
