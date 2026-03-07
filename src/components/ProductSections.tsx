import { SectionLabel } from "./ProblemSections";
import { Sparkles, GitBranch, BarChart3, MessageSquare, FileText, Users } from "lucide-react";

const IntroducingSection = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Introducing Aql</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          AI Decision Simulation
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Aql evaluates a decision through five specialist perspectives simultaneously and synthesizes the results into structured strategic options.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-xl mx-auto">
          {["Decision summary", "Core tensions", "Three paths forward", "Ranking", "Next steps", "Decision tree"].map((item) => (
            <div key={item} className="px-4 py-3 rounded-lg border border-border bg-card text-sm text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => {
  const steps = [
    { num: "01", title: "Create a project", desc: "Add context, documents, or a codebase.", icon: FileText },
    { num: "02", title: "Submit a decision", desc: "Describe the strategic question.", icon: MessageSquare },
    { num: "03", title: "Specialists evaluate", desc: "Five expert perspectives analyze the decision.", icon: Users },
    { num: "04", title: "Explore paths forward", desc: "Aql produces strategic options and a visual decision tree.", icon: GitBranch },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative z-10 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Four steps to clarity
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="relative p-6 rounded-xl border border-border bg-card group hover:border-primary/30 transition-colors">
              <span className="text-xs font-mono text-primary mb-4 block">{step.num}</span>
              <step.icon className="h-5 w-5 text-muted-foreground mb-3 group-hover:text-primary transition-colors" />
              <h3 className="text-sm font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { icon: MessageSquare, title: "Chat with specialists", desc: "Have group conversations with multiple AI personas simultaneously." },
    { icon: Sparkles, title: "Decision evaluation", desc: "Submit a decision and receive structured analysis from five perspectives." },
    { icon: GitBranch, title: "Decision tree", desc: "Visualize decisions and branch them to explore alternative paths." },
    { icon: BarChart3, title: "Persona scoring", desc: "See how each specialist evaluates the decision with detailed scoring." },
    { icon: FileText, title: "Context ingestion", desc: "Upload documents or connect a GitHub repository for deeper analysis." },
    { icon: Users, title: "Multi-persona analysis", desc: "Legal, financial, technical, business, and tax perspectives in one place." },
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative z-10">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionLabel>Features</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built for strategic thinking
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-border bg-card group hover:border-primary/30 transition-all">
              <f.icon className="h-5 w-5 text-muted-foreground mb-4 group-hover:text-primary transition-colors" />
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
