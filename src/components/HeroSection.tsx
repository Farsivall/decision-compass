import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-grid">
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
            Aql uses your company’s context and domain-specific knowledge to simulate how legal, financial, technical, tax, and business experts evaluate your decision. Get recommendations and suggested paths — then make your own decision, branch out, or follow the path you choose.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#cta">
                Sign up for the waitlist <ArrowRight className="h-4 w-4" />
              </a>
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
