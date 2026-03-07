import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-44 md:pb-32 bg-grid overflow-hidden">
      <div className="container relative z-10 min-w-0">
        <div className="max-w-3xl mx-auto text-center min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/50 text-xs text-muted-foreground mb-6 sm:mb-8 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            AI Decision Simulation
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.15] mb-4 sm:mb-6 animate-fade-in-up px-1">
            Five AI specialists.
            <br />
            <span className="text-primary">One decision.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in-up animation-delay-200 leading-relaxed text-balance px-1">
            Aql uses your company’s context and domain-specific knowledge to simulate how legal, financial, technical, tax, and business experts evaluate your decision. Get recommendations and suggested paths — then make your own decision, branch out, or follow the path you choose.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" asChild className="touch-manipulation w-full sm:w-auto min-h-[48px]">
              <a href="#cta">
                Sign up for the waitlist <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-14 sm:mt-20 animate-fade-in-up animation-delay-400 min-w-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
