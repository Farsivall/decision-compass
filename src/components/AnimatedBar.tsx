import { useState, useEffect, useRef } from "react";

interface AnimatedBarProps {
  percent: number;
  className?: string;
  barClassName?: string;
  duration?: number;
}

export const AnimatedBar = ({
  percent,
  className = "",
  barClassName = "",
  duration = 1200,
}: AnimatedBarProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWidth(percent);
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={ref} className={`h-1.5 rounded-full bg-muted overflow-hidden ${className}`}>
      <div
        className={`h-full rounded-full transition-all ease-out ${barClassName}`}
        style={{ width: `${width}%`, transitionDuration: `${duration}ms` }}
      />
    </div>
  );
};
