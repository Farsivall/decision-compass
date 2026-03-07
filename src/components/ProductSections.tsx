import { SectionLabel } from "./ProblemSections";
import { Sparkles, GitBranch, BarChart3, MessageSquare, FileText, Users, ArrowDown, CheckCircle2, Workflow, Brain, Eye, Network } from "lucide-react";

const IntroducingSection = () => (
  <section className="py-24 md:py-32 relative z-10 overflow-hidden">
    {/* Emerald radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(160_84%_39%/0.08)_0%,_transparent_60%)]" />
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    
    <div className="container relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Introducing Aql</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            AI Decision Simulation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Aql evaluates a decision through five specialist perspectives simultaneously and synthesizes the results into structured strategic options.
          </p>
        </div>
        {/* Bento grid of outputs */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {[
            { icon: FileText, label: "Decision summary" },
            { icon: Sparkles, label: "Core tensions" },
            { icon: GitBranch, label: "Three paths forward" },
            { icon: BarChart3, label: "Ranking" },
            { icon: CheckCircle2, label: "Next steps" },
            { icon: Network, label: "Decision tree" },
          ].map((item) => (
            <div key={item.label} className="px-4 py-4 rounded-xl border border-primary/15 bg-primary/5 flex items-center gap-3 group hover:border-primary/30 transition-all">
              <item.icon className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm text-foreground font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => {
  const steps = [
    { num: "01", title: "Create a project", desc: "Add context, documents, or a codebase.", icon: FileText, color: "text-blue-400", bg: "bg-blue-400/10" },
    { num: "02", title: "Submit a decision", desc: "Describe the strategic question.", icon: MessageSquare, color: "text-amber-400", bg: "bg-amber-400/10" },
    { num: "03", title: "Specialists evaluate", desc: "Five expert perspectives analyze the decision.", icon: Brain, color: "text-violet-400", bg: "bg-violet-400/10" },
    { num: "04", title: "Explore paths forward", desc: "Aql produces strategic options and a visual decision tree.", icon: Workflow, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Diagonal stripe overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,_transparent,_transparent_60px,_hsl(0_0%_100%/0.01)_60px,_hsl(0_0%_100%/0.01)_61px)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Four steps to clarity
          </h2>
        </div>
        {/* Vertical timeline layout */}
        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="flex gap-6 items-start p-6">
                {/* Timeline dot & line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className={`h-14 w-14 rounded-2xl ${step.bg} flex items-center justify-center`}>
                    <step.icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                </div>
                {/* Content */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-primary tracking-wider">{step.num}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-start ml-[2.85rem] -mt-1 mb-1">
                  <ArrowDown className="h-4 w-4 text-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { icon: MessageSquare, title: "Chat with specialists", desc: "Have group conversations with multiple AI personas simultaneously.", span: "md:col-span-2", color: "text-blue-400", bg: "bg-blue-400/10" },
    { icon: Sparkles, title: "Decision evaluation", desc: "Submit a decision and receive structured analysis from five perspectives.", span: "md:col-span-1", color: "text-amber-400", bg: "bg-amber-400/10" },
    { icon: GitBranch, title: "Decision tree", desc: "Visualize decisions and branch them to explore alternative paths.", span: "md:col-span-1", color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { icon: BarChart3, title: "Persona scoring", desc: "See how each specialist evaluates the decision with detailed scoring.", span: "md:col-span-2", color: "text-violet-400", bg: "bg-violet-400/10" },
    { icon: Eye, title: "Context ingestion", desc: "Upload documents or connect a GitHub repository for deeper analysis.", span: "md:col-span-1", color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { icon: Users, title: "Multi-persona analysis", desc: "Legal, financial, technical, business, and tax perspectives in one place.", span: "md:col-span-1", color: "text-rose-400", bg: "bg-rose-400/10" },
    { icon: Network, title: "Branch exploration", desc: "Fork any path to explore deeper variations and outcomes.", span: "md:col-span-1", color: "text-amber-400", bg: "bg-amber-400/10" },
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(160_84%_39%/0.05)_0%,_transparent_40%),_radial-gradient(circle_at_70%_80%,_hsl(240_84%_60%/0.04)_0%,_transparent_40%)]" />
      
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionLabel>Features</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built for strategic thinking
          </h2>
        </div>
        {/* Bento grid — varying sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className={`${f.span} p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm group hover:border-primary/20 transition-all`}>
              <div className={`h-10 w-10 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon className={`h-5 w-5 ${f.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { IntroducingSection, HowItWorksSection, FeaturesSection };
