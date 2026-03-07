import { SectionLabel } from "./ProblemSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Compass, TrendingUp, Users, Rocket, Scale, Star, Globe, Lightbulb, CheckCircle2, Sparkles } from "lucide-react";

const ExampleSection = () => {
  const personas = [
    { name: "Legal", score: 72, color: "bg-blue-400", icon: Scale },
    { name: "Financial", score: 85, color: "bg-emerald-400", icon: TrendingUp },
    { name: "Technical", score: 68, color: "bg-violet-400", icon: Lightbulb },
    { name: "Business", score: 91, color: "bg-amber-400", icon: Rocket },
    { name: "Tax", score: 56, color: "bg-cyan-400", icon: CheckCircle2 },
  ];

  return (
    <section id="example" className="py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(160_84%_39%/0.06)_0%,_transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Example decision</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              "Should we expand to the EU?"
            </h2>
            <p className="text-muted-foreground">See how Aql evaluates a real strategic question.</p>
          </div>
          
          {/* Side-by-side layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Persona scores with icons */}
            <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm">
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-5">Persona Scores</h3>
              <div className="space-y-4">
                {personas.map((p) => (
                  <div key={p.name} className="flex items-center gap-3">
                    <div className={`h-8 w-8 rounded-lg ${p.color}/10 flex items-center justify-center shrink-0`}>
                      <p.icon className={`h-4 w-4 ${p.color.replace('bg-', 'text-')}`} />
                    </div>
                    <span className="text-xs text-muted-foreground w-16">{p.name}</span>
                    <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                      <div className={`h-full rounded-full ${p.color} transition-all duration-1000`} style={{ width: `${p.score}%` }} />
                    </div>
                    <span className="text-xs font-mono text-foreground w-8 text-right">{p.score}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Paths */}
            <div className="space-y-3">
              {[
                { path: "A", label: "Full EU expansion", desc: "Comprehensive market entry across major EU economies", recommended: true, icon: Globe },
                { path: "B", label: "Phased market entry", desc: "Start with 2-3 key markets, expand based on results", recommended: false, icon: Target },
                { path: "C", label: "Strategic partnership", desc: "Partner with local firms to reduce risk and cost", recommended: false, icon: Users },
              ].map((p) => (
                <div
                  key={p.path}
                  className={`p-5 rounded-2xl border flex items-start gap-4 transition-all ${
                    p.recommended ? "border-primary/40 bg-primary/5" : "border-border bg-card/60 backdrop-blur-sm"
                  }`}
                >
                  <div className={`h-10 w-10 rounded-xl shrink-0 flex items-center justify-center ${p.recommended ? "bg-primary/10" : "bg-muted"}`}>
                    <p.icon className={`h-5 w-5 ${p.recommended ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono block mb-0.5 ${p.recommended ? "text-primary" : "text-muted-foreground"}`}>
                      Path {p.path}
                    </span>
                    <span className={`text-sm font-medium block ${p.recommended ? "text-primary" : "text-foreground"}`}>
                      {p.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{p.desc}</span>
                    {p.recommended && <span className="block text-[10px] text-primary/60 mt-1 font-medium">★ Recommended</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoSection = () => {
  const audiences = [
    { icon: Rocket, title: "Founders", desc: "Evaluating strategic moves with structured analysis.", color: "text-amber-400", bg: "bg-amber-400/10" },
    { icon: Compass, title: "Product leaders", desc: "Planning roadmaps with multi-perspective insight.", color: "text-blue-400", bg: "bg-blue-400/10" },
    { icon: TrendingUp, title: "Investors", desc: "Exploring scenarios before committing capital.", color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { icon: Star, title: "Consultants", desc: "Analyzing complex decisions for their clients.", color: "text-violet-400", bg: "bg-violet-400/10" },
  ];

  return (
    <section className="py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Alternating gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent_0%,_hsl(240_6%_8%)_30%,_hsl(240_6%_8%)_70%,_transparent_100%)]" />
      
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionLabel>Who it's for</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            For people who make high-stakes decisions
          </h2>
        </div>
        {/* Horizontal cards with large icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {audiences.map((a) => (
            <div key={a.title} className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm flex items-start gap-4 group hover:border-primary/20 transition-all">
              <div className={`h-12 w-12 rounded-xl ${a.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <a.icon className={`h-6 w-6 ${a.color}`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{a.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisionSection = () => (
  <section className="py-24 md:py-32 relative z-10 overflow-hidden">
    {/* Dramatic top-down glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_hsl(160_84%_39%/0.1)_0%,_transparent_50%)]" />
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    
    <div className="container relative">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Vision</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          The future of decision-making
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Decisions should not rely on fragmented expertise. They should be structured, transparent, and explorable. Aql aims to become the operating system for strategic decisions.
        </p>
        {/* Vision pillars */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { icon: Sparkles, label: "Structured" },
            { icon: Globe, label: "Transparent" },
            { icon: Compass, label: "Explorable" },
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-xl border border-primary/15 bg-primary/5 flex flex-col items-center gap-2">
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium text-primary">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section id="cta" className="py-24 md:py-32 relative z-10 overflow-hidden">
    {/* Rich CTA background */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(160_84%_39%/0.12)_0%,_transparent_60%)]" />
    
    <div className="container relative">
      <div className="max-w-2xl mx-auto text-center p-12 md:p-16 rounded-3xl border border-primary/20 bg-card/60 backdrop-blur-xl relative overflow-hidden">
        {/* Inner glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 blur-[80px] rounded-full" />
        
        <div className="relative">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Make your next decision with clarity.
          </h2>
          <p className="text-muted-foreground mb-8">
            Start your first project and see how five specialists evaluate your decision.
          </p>
          <Button variant="hero" size="xl">
            Start your first project <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-border relative z-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-[10px]">A</span>
        </div>
        <span className="text-sm font-medium text-foreground">Aql</span>
      </div>
      <span className="text-xs text-muted-foreground">AI Decision Simulation</span>
    </div>
  </footer>
);

export { ExampleSection, WhoSection, VisionSection, CTASection, Footer };
