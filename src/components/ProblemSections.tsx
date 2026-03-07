import { AlertTriangle, Clock, Layers, Zap, TrendingDown, ShieldAlert, Bomb, Timer, MessageCircleWarning, FileSpreadsheet, Bot, BookOpen } from "lucide-react";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs font-medium text-primary tracking-widest uppercase mb-4">{children}</span>
);

const WhyNowSection = () => (
  <section className="py-24 md:py-32 relative z-10 overflow-hidden">
    {/* Diagonal background overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(135deg,_hsl(240_7%_8%)_0%,_transparent_50%,_hsl(160_84%_39%/0.03)_100%)]" />
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
    
    <div className="container relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        {/* Left: Text */}
        <div>
          <SectionLabel>Why now</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Decision complexity has exploded
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Modern decisions require expertise across many domains — technical risk, regulatory exposure, financial uncertainty, operational trade-offs. But companies still rely on meetings and documents.
          </p>
        </div>
        {/* Right: Icon grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: ShieldAlert, label: "Regulatory risk", color: "text-red-400" },
            { icon: TrendingDown, label: "Financial uncertainty", color: "text-amber-400" },
            { icon: Bomb, label: "Technical risk", color: "text-violet-400" },
            { icon: Timer, label: "Operational trade-offs", color: "text-cyan-400" },
          ].map((item) => (
            <div key={item.label} className="p-5 rounded-2xl border border-border bg-card/50 backdrop-blur-sm flex flex-col items-center gap-3 group hover:border-primary/30 transition-all hover:bg-card/80">
              <div className="h-12 w-12 rounded-xl bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <span className="text-xs text-muted-foreground text-center font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 md:py-32 relative z-10 overflow-hidden">
    {/* Mesh gradient overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_hsl(240_84%_60%/0.05)_0%,_transparent_50%),_radial-gradient(circle_at_80%_50%,_hsl(160_84%_39%/0.04)_0%,_transparent_50%)]" />
    
    <div className="container relative">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <SectionLabel>The problem</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Important decisions are broken
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Trade-offs remain hidden. Teams argue opinions instead of structured reasoning. Analysis lives across scattered tools.
        </p>
      </div>
      {/* Staggered cards — alternating sizes */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        {[
          { icon: AlertTriangle, text: "Trade-offs unclear", desc: "Hidden risks surface too late in the process", span: "md:col-span-7" },
          { icon: Layers, text: "Expertise fragmented", desc: "Knowledge scattered across teams and silos", span: "md:col-span-5" },
          { icon: Zap, text: "Analysis scattered", desc: "Insights buried in docs, slides, and threads", span: "md:col-span-5" },
          { icon: Clock, text: "Decisions slow", desc: "Months of meetings without clear resolution", span: "md:col-span-7" },
        ].map((item) => (
          <div key={item.text} className={`${item.span} flex items-start gap-4 p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm group hover:border-primary/20 transition-all`}>
            <div className="h-10 w-10 shrink-0 rounded-xl bg-destructive/10 flex items-center justify-center">
              <item.icon className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{item.text}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CostSection = () => (
  <section className="py-24 md:py-32 relative z-10 overflow-hidden">
    {/* Dramatic red-tinted overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(0_84%_60%/0.06)_0%,_transparent_60%)]" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-destructive/20 to-transparent" />
    
    <div className="container relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>The cost</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The cost of bad decisions
          </h2>
        </div>
        {/* Horizontal scroll cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { icon: Bomb, label: "Failed launches" },
            { icon: TrendingDown, label: "Strategy mistakes" },
            { icon: ShieldAlert, label: "Legal exposure" },
            { icon: Layers, label: "Technical debt" },
            { icon: Timer, label: "Lost timing" },
          ].map((item) => (
            <div key={item.label} className="p-5 rounded-2xl border border-destructive/10 bg-destructive/5 flex flex-col items-center gap-3 text-center group hover:border-destructive/30 transition-all">
              <item.icon className="h-6 w-6 text-destructive/60 group-hover:text-destructive transition-colors" />
              <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-center text-lg leading-relaxed mt-12 max-w-2xl mx-auto">
          Even with months of analysis, companies still move forward with uncertainty.
        </p>
      </div>
    </div>
  </section>
);

const ToolsFailSection = () => (
  <section className="py-24 md:py-32 relative z-10 overflow-hidden">
    {/* Split background */}
    <div className="absolute inset-0 bg-[linear-gradient(180deg,_hsl(240_6%_8%)_0%,_hsl(240_7%_5%)_100%)]" />
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    
    <div className="container relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Why current tools fail</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Chatbots generate answers.
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground">
            Decisions require reasoning.
          </h2>
        </div>
        {/* 2x2 comparison grid with icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Bot, tool: "Chatbots", issue: "Single perspective, no structure", verdict: "No multi-angle analysis" },
            { icon: BookOpen, tool: "Documents", issue: "Static, no scenario exploration", verdict: "Can't explore what-ifs" },
            { icon: MessageCircleWarning, tool: "Consulting", issue: "Slow, expensive, not scalable", verdict: "Weeks of waiting" },
            { icon: FileSpreadsheet, tool: "Spreadsheets", issue: "Data-focused, not strategy-focused", verdict: "Numbers without narrative" },
          ].map((item) => (
            <div key={item.tool} className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm group hover:border-muted-foreground/20 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.tool}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{item.issue}</p>
              <span className="text-[11px] text-destructive/70 font-medium">{item.verdict}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export { WhyNowSection, ProblemSection, CostSection, ToolsFailSection, SectionLabel };
