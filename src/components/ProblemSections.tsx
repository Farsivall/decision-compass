import { AlertTriangle, Clock, Layers, Zap } from "lucide-react";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs font-medium text-primary tracking-widest uppercase mb-4">{children}</span>
);

const WhyNowSection = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <SectionLabel>Why now</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Decision complexity has exploded
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Modern decisions require expertise across many domains — technical risk, regulatory exposure, financial uncertainty, operational trade-offs. But companies still rely on meetings and documents.
        </p>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <SectionLabel>The problem</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Important decisions are broken
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Trade-offs remain hidden. Teams argue opinions instead of structured reasoning. Analysis lives across scattered tools.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {[
          { icon: AlertTriangle, text: "Trade-offs unclear" },
          { icon: Layers, text: "Expertise fragmented" },
          { icon: Zap, text: "Analysis scattered" },
          { icon: Clock, text: "Decisions slow" },
        ].map((item) => (
          <div key={item.text} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card">
            <item.icon className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground text-center">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CostSection = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <SectionLabel>The cost</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          The cost of bad decisions
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Failed launches. Strategy mistakes. Legal exposure. Technical debt. Lost market timing. Even with months of analysis, companies still move forward with uncertainty.
        </p>
      </div>
    </div>
  </section>
);

const ToolsFailSection = () => (
  <section className="py-24 md:py-32 relative z-10 border-t border-border">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <SectionLabel>Why current tools fail</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Chatbots generate answers.
          <br />
          <span className="text-muted-foreground">Decisions require reasoning.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {[
          { tool: "Chatbots", issue: "Single perspective, no structure" },
          { tool: "Documents", issue: "Static, no scenario exploration" },
          { tool: "Consulting", issue: "Slow, expensive, not scalable" },
          { tool: "Spreadsheets", issue: "Data-focused, not strategy-focused" },
        ].map((item) => (
          <div key={item.tool} className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card">
            <span className="text-sm font-medium text-foreground w-28">{item.tool}</span>
            <span className="text-sm text-muted-foreground">{item.issue}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { WhyNowSection, ProblemSection, CostSection, ToolsFailSection, SectionLabel };
