import { SectionLabel } from "./ProblemSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Compass, TrendingUp, Users } from "lucide-react";

const ExampleSection = () => {
  const personas = [
    { name: "Legal", score: 72, color: "bg-blue-400" },
    { name: "Financial", score: 85, color: "bg-emerald-400" },
    { name: "Technical", score: 68, color: "bg-violet-400" },
    { name: "Business", score: 91, color: "bg-amber-400" },
    { name: "Tax", score: 56, color: "bg-cyan-400" },
  ];

  return (
    <section id="example" className="py-24 md:py-32 relative z-10 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionLabel>Example decision</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            "Should we expand to the EU?"
          </h2>
          <p className="text-muted-foreground">See how Aql evaluates a real strategic question.</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Persona scores */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Persona Scores</h3>
            <div className="space-y-3">
              {personas.map((p) => (
                <div key={p.name} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-20">{p.name}</span>
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full rounded-full ${p.color}`} style={{ width: `${p.score}%` }} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground w-8">{p.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Paths */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { path: "A", label: "Full EU expansion", recommended: true },
              { path: "B", label: "Phased market entry", recommended: false },
              { path: "C", label: "Strategic partnership", recommended: false },
            ].map((p) => (
              <div
                key={p.path}
                className={`p-4 rounded-xl border text-center ${
                  p.recommended ? "border-primary/40 bg-primary/5" : "border-border bg-card"
                }`}
              >
                <span className={`text-xs font-mono block mb-1 ${p.recommended ? "text-primary" : "text-muted-foreground"}`}>
                  Path {p.path}
                </span>
                <span className={`text-sm ${p.recommended ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  {p.label}
                </span>
                {p.recommended && <span className="block text-[10px] text-primary/60 mt-1">Recommended</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoSection = () => {
  const audiences = [
    { icon: Target, title: "Founders", desc: "Evaluating strategic moves with structured analysis." },
    { icon: Compass, title: "Product leaders", desc: "Planning roadmaps with multi-perspective insight." },
    { icon: TrendingUp, title: "Investors", desc: "Exploring scenarios before committing capital." },
    { icon: Users, title: "Consultants", desc: "Analyzing complex decisions for their clients." },
  ];

  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionLabel>Who it's for</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            For people who make high-stakes decisions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {audiences.map((a) => (
            <div key={a.title} className="p-6 rounded-xl border border-border bg-card text-center">
              <a.icon className="h-5 w-5 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisionSection = () => (
  <section className="py-24 md:py-32 relative z-10 border-t border-border">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center">
        <SectionLabel>Vision</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          The future of decision-making
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Decisions should not rely on fragmented expertise. They should be structured, transparent, and explorable. Aql aims to become the operating system for strategic decisions.
        </p>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section id="cta" className="py-24 md:py-32 relative z-10">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center p-12 rounded-2xl border border-primary/20 bg-primary/5">
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
