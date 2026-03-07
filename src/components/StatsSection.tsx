import { SectionLabel } from "./ProblemSections";
import { CountUp } from "./CountUp";
import { AnimatedBar } from "./AnimatedBar";
import { Users, GitBranch, Layers, Target } from "lucide-react";
import personaVideo from "@/assets/persona.mp4";

const stats = [
  {
    label: "AI specialists",
    value: 5,
    suffix: "",
    icon: Users,
    barPercent: 100,
  },
  {
    label: "Paths per decision",
    value: 3,
    suffix: "+",
    icon: GitBranch,
    barPercent: 85,
  },
  {
    label: "Evaluation dimensions",
    value: 25,
    suffix: "+",
    icon: Layers,
    barPercent: 75,
  },
  {
    label: "One decision",
    value: 1,
    suffix: "",
    icon: Target,
    barPercent: 100,
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 md:py-32 relative z-10 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <SectionLabel>By the numbers</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built for multi-perspective decisions
          </h2>
        </div>
        <div className="rounded-xl border border-border bg-card overflow-hidden max-w-3xl mx-auto mb-12">
          <video
            src={personaVideo}
            className="w-full aspect-video object-cover"
            playsInline
            muted
            loop
            autoPlay
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl border border-border bg-card group hover:border-primary/30 transition-colors"
            >
              <stat.icon className="h-5 w-5 text-muted-foreground mb-3 group-hover:text-primary transition-colors" />
              <div className="text-2xl md:text-3xl font-bold text-foreground tabular-nums">
                <CountUp end={stat.value} suffix={stat.suffix} startOnView duration={1200} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              <AnimatedBar percent={stat.barPercent} barClassName="bg-primary/80" className="mt-3" duration={1200} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
