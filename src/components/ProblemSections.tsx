import { AlertTriangle, Clock, Layers, Zap, DollarSign, Calendar, TrendingDown } from "lucide-react";
import { CountUp } from "./CountUp";
import { AnimatedBar } from "./AnimatedBar";
import ComplexityGraphic from "./ComplexityGraphic";
import CostScatterAnimated from "./CostScatterAnimated";
import chatVideo from "@/assets/chat.mp4";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs font-medium text-primary tracking-widest uppercase mb-4">{children}</span>
);

const WhyNowSection = () => (
  <section className="py-16 sm:py-24 md:py-32 relative z-10">
    <div className="container min-w-0">
      <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
        <SectionLabel>Why now</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
          Decision complexity has exploded
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Modern decisions require expertise across many domains — technical risk, regulatory exposure, financial uncertainty, operational trade-offs. But companies still rely on meetings and documents.
        </p>
      </div>
      <div className="flex justify-center mt-8 sm:mt-10 overflow-x-auto">
        <div className="p-4 sm:p-8 rounded-2xl border border-border bg-card/50 min-w-0">
          <ComplexityGraphic />
        </div>
      </div>
    </div>
  </section>
);

const problemPersonas = [
  { name: "Legal", percent: 68, color: "bg-blue-400" },
  { name: "Financial", percent: 55, color: "bg-emerald-400" },
  { name: "Technical", percent: 72, color: "bg-violet-400" },
  { name: "Business", percent: 61, color: "bg-amber-400" },
  { name: "Tax", percent: 64, color: "bg-cyan-400" },
];

const ProblemSection = () => (
  <section id="problem" className="py-16 sm:py-24 md:py-32 relative z-10">
    <div className="container min-w-0">
      <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
        <SectionLabel>The problem</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
          Important decisions are broken
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
          Trade-offs remain hidden. Teams argue opinions instead of structured reasoning. Analysis lives across scattered tools.
        </p>
      </div>
      <div className="max-w-2xl mx-auto mb-12">
        <div className="p-6 rounded-xl border border-border bg-card">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Expertise fragmented by perspective</h3>
          <div className="space-y-4">
            {problemPersonas.map((p) => (
              <div key={p.name} className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-20">{p.name}</span>
                <div className="flex-1 min-w-0">
                  <AnimatedBar percent={p.percent} barClassName={p.color} duration={1200} />
                </div>
                <span className="text-sm font-mono text-muted-foreground w-10 tabular-nums text-right">
                  <CountUp end={p.percent} startOnView duration={1000} />%
                </span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground/80 mt-3">Each perspective underused when decisions lack structure.</p>
        </div>
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

const costStats = [
  {
    icon: DollarSign,
    value: 122,
    prefix: "$",
    suffix: "B",
    label: "Lost annually to failed strategic decisions",
  },
  {
    icon: Calendar,
    value: 40,
    suffix: "+",
    label: "Hours spent in meetings per major decision",
  },
  {
    icon: TrendingDown,
    value: 67,
    suffix: "%",
    label: "Of strategic initiatives that underperform or fail",
  },
  {
    icon: Clock,
    value: 6,
    suffix: "+ mo",
    label: "Average delay from analysis paralysis",
  },
];

const CostSection = () => (
  <section id="cost" className="py-16 sm:py-24 md:py-32 relative z-10">
    <div className="container min-w-0">
      <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
        <SectionLabel>The cost</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
          The cost of bad decisions
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 sm:mb-12">
          Failed launches. Strategy mistakes. Legal exposure. Technical debt. Lost market timing. Even with months of analysis, companies still move forward with uncertainty.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-8 overflow-x-auto">
        <div className="rounded-xl border border-border bg-card p-4 md:p-6 text-muted-foreground min-w-0">
          <CostScatterAnimated />
          <p className="text-center text-xs text-muted-foreground mt-2">
            Impact vs scale of cost across key metrics
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            The loss.
          </p>
          <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
            Money, time, and opportunity — compounded when decisions lack structure and multi-perspective analysis.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {costStats.map((stat) => (
          <div key={stat.label} className="p-5 rounded-xl border border-border bg-card text-center">
            <stat.icon className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground tabular-nums">
              <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} startOnView duration={1200} />
            </div>
            <p className="text-[11px] text-muted-foreground mt-1 leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ToolsFailSection = () => (
  <section className="py-16 sm:py-24 md:py-32 relative z-10 border-t border-border">
    <div className="container min-w-0">
      <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
        <SectionLabel>Why current tools fail</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
          Chatbots generate answers.
          <br />
          <span className="text-muted-foreground">Decisions require reasoning.</span>
        </h2>
      </div>
      <div className="rounded-xl border border-border bg-card overflow-hidden max-w-3xl mx-auto mb-12">
        <video
          src={chatVideo}
          className="w-full aspect-video object-cover"
          playsInline
          muted
          loop
          autoPlay
        />
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
