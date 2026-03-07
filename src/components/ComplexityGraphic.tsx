const DOMAINS = [
  { label: "Legal", angle: 0 },
  { label: "Financial", angle: 60 },
  { label: "Technical", angle: 120 },
  { label: "Regulatory", angle: 180 },
  { label: "Operational", angle: 240 },
  { label: "Market", angle: 300 },
];

const ComplexityGraphic = () => {
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const innerR = 28;
  const outerR = 100;
  const midR = 58;

  return (
    <div className="flex justify-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[280px] text-muted-foreground"
        aria-hidden
      >
        <defs>
          <linearGradient id="complexity-center" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.4)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Radiating branches */}
        {DOMAINS.map((d, i) => {
          const rad = (d.angle * Math.PI) / 180;
          const x1 = cx + innerR * Math.cos(rad);
          const y1 = cy + innerR * Math.sin(rad);
          const x2 = cx + outerR * Math.cos(rad);
          const y2 = cy + outerR * Math.sin(rad);
          const tx = cx + (outerR + 22) * Math.cos(rad);
          const ty = cy + (outerR + 22) * Math.sin(rad);
          return (
            <g key={d.label}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                className="transition-opacity duration-300"
              />
              <circle
                cx={x2}
                cy={y2}
                r="6"
                fill="hsl(var(--primary) / 0.5)"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
              />
              <text
                x={tx}
                y={ty}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-muted-foreground text-[10px] font-medium"
                style={{ fontSize: "10px" }}
              >
                {d.label}
              </text>
            </g>
          );
        })}
        {/* Secondary burst (explosion effect) */}
        {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = cx + innerR * Math.cos(rad);
          const y1 = cy + innerR * Math.sin(rad);
          const x2 = cx + midR * Math.cos(rad);
          const y2 = cy + midR * Math.sin(rad);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="0.75"
              strokeOpacity="0.2"
            />
          );
        })}
        {/* Center */}
        <circle cx={cx} cy={cy} r={innerR} fill="url(#complexity-center)" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1.5" />
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" className="fill-foreground font-semibold" style={{ fontSize: "11px" }}>
          Decision
        </text>
      </svg>
    </div>
  );
};

export default ComplexityGraphic;
