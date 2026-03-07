import { useState } from "react";
import { SectionLabel } from "./ProblemSections";
import { Sparkles, GitBranch, BarChart3, MessageSquare, FileText, Users, ChevronDown } from "lucide-react";
import chatVideo from "@/assets/chat.mp4";
import decisionTreeVideo from "@/assets/decisiontree.mp4";
import evalVideo from "@/assets/eval.mp4";
const IntroducingSection = () => (
  <section id="introducing" className="py-24 md:py-32 relative z-10">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <SectionLabel>Introducing Aql</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            AI Decision Simulation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Aql uses your company’s context and domain-specific knowledge to evaluate a decision through five specialist perspectives simultaneously, then synthesizes the results into structured strategic options.
          </p>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto mb-4">
            The AI recommends; you decide. Create your own branches, explore alternatives, or take the suggested path — the decision is always yours.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Aql uncovers risks, surfaces tradeoffs across departments, and shows where the specialists align — so you see the full picture and the consensus in one place.
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
    </div>
  </section>
);

const HowItWorksSection = () => {
  const steps = [
    { num: "01", title: "Create a project", desc: "Add context, documents, or a codebase.", icon: FileText },
    { num: "02", title: "Submit a decision", desc: "Describe the strategic question.", icon: MessageSquare },
    { num: "03", title: "Specialists evaluate", desc: "Five expert perspectives analyze the decision.", icon: Users },
    { num: "04", title: "Explore paths forward", desc: "See recommended paths or create your own branches. You decide; Aql recommends.", icon: GitBranch },
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const features = [
    { icon: MessageSquare, title: "Chat with specialists", desc: "Have group conversations with multiple AI personas simultaneously or individually and get domain specific insights.", video: chatVideo },
    { icon: Sparkles, title: "Decision evaluation", desc: "Submit a decision and get structured recommendations from five perspectives. You choose the path or branch your own.", video: evalVideo },
    { icon: GitBranch, title: "Decision tree", desc: "Visualize paths, create your own branches, and explore alternatives. The AI recommends — you choose.", video: decisionTreeVideo },
    { icon: BarChart3, title: "Persona scoring", desc: "See how each specialist evaluates the decision with detailed scoring.", video: null },
    { icon: FileText, title: "Your context + domain knowledge", desc: "Upload your company’s documents or connect a repo. Aql uses this with legal, financial, technical, and tax expertise for analysis.", video: null },
    { icon: Users, title: "Multi-persona analysis", desc: "Legal, financial, technical, business, and tax perspectives in one place.", video: null },
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
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
          {/* First three: wide vstack */}
          <div className="flex flex-col gap-5">
            {features.slice(0, 3).map((f, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <div
                  key={f.title}
                  className={`rounded-xl border bg-card transition-all overflow-hidden w-full cursor-pointer p-6 md:p-8 ${
                    isExpanded ? "border-primary/40 ring-1 ring-primary/20" : "border-border hover:border-primary/30 md:min-h-0"
                  }`}
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <f.icon className="h-6 w-6 text-muted-foreground mb-4 transition-colors" />
                      <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 leading-tight">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </div>
                  <div
                    className={`grid transition-all duration-300 ease-out ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-t border-border bg-muted/30 p-4 mt-4 flex justify-center">
                        {f.video ? (
                          <div className="rounded-lg overflow-hidden aspect-video w-full max-w-2xl mx-auto">
                            <video
                              src={f.video}
                              className="w-full h-full object-cover"
                              playsInline
                              muted
                              loop
                              autoPlay
                            />
                          </div>
                        ) : (
                          <div className="aspect-video rounded-lg border border-dashed border-border flex items-center justify-center bg-card/50 w-full max-w-2xl mx-auto">
                            <p className="text-xs text-muted-foreground">Video coming soon</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Last three: hstack at bottom */}
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            {features.slice(3, 6).map((f) => (
              <div
                key={f.title}
                className="flex-1 min-w-0 rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all"
              >
                <f.icon className="h-5 w-5 text-muted-foreground mb-4" />
                <h3 className="text-sm font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { IntroducingSection, HowItWorksSection, FeaturesSection };
