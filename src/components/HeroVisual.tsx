import { Scale, TrendingUp, Code, Briefcase, Calculator } from "lucide-react";

const personas = [
  { icon: Scale, label: "Legal", color: "text-blue-400" },
  { icon: TrendingUp, label: "Financial", color: "text-emerald-400" },
  { icon: Code, label: "Technical", color: "text-violet-400" },
  { icon: Briefcase, label: "Business", color: "text-amber-400" },
  { icon: Calculator, label: "Tax", color: "text-cyan-400" },
];

const paths = ["Path A: Full expansion", "Path B: Phased rollout", "Path C: Strategic pause"];

const HeroVisual = () => {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Personas */}
      <div className="flex justify-center gap-3 md:gap-6 mb-8">
        {personas.map((p) => (
          <div key={p.label} className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl border border-border bg-card flex items-center justify-center">
              <p.icon className={`h-5 w-5 md:h-6 md:w-6 ${p.color}`} />
            </div>
            <span className="text-[10px] md:text-xs text-muted-foreground font-medium">{p.label}</span>
          </div>
        ))}
      </div>

      {/* Connecting lines */}
      <div className="flex justify-center mb-4">
        <div className="w-px h-8 bg-gradient-to-b from-border to-primary/40" />
      </div>

      {/* Decision node */}
      <div className="flex justify-center mb-4">
        <div className="px-6 py-3 rounded-xl border border-primary/30 bg-primary/5 text-sm font-medium text-primary">
          Decision Analysis
        </div>
      </div>

      {/* Branching lines */}
      <div className="flex justify-center mb-4">
        <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-border" />
      </div>

      {/* Paths */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {paths.map((path, i) => (
          <div
            key={i}
            className={`px-4 py-3 rounded-lg border bg-card text-xs text-muted-foreground text-center ${
              i === 0 ? "border-primary/30 text-primary" : "border-border"
            }`}
          >
            {path}
            {i === 0 && <span className="block text-[10px] mt-1 text-primary/60">Recommended</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroVisual;
