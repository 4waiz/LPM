import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type StatsCounterProps = {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

const StatsCounter = ({
  value,
  label,
  suffix = "",
  prefix = "",
  duration = 1200
}: StatsCounterProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-10% 0px" });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);
  const [hasRun, setHasRun] = useState(false);

  const finalValue = useMemo(() => Math.round(value), [value]);

  useEffect(() => {
    if (!isInView || hasRun) return;
    if (reduced) {
      setDisplay(finalValue);
      setHasRun(true);
      return;
    }

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(progress * finalValue));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setHasRun(true);
      }
    };

    requestAnimationFrame(step);
  }, [duration, finalValue, hasRun, isInView, reduced]);

  return (
    <div ref={ref} className="space-y-2">
      <p className="text-3xl sm:text-4xl font-semibold text-navy-900 dark:text-white">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="text-sm text-charcoal/70 dark:text-stone/70">{label}</p>
    </div>
  );
};

export default StatsCounter;
