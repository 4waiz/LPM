import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const ParallaxDivider = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [20, -20]);

  return (
    <div ref={ref} className="relative h-24 sm:h-32 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,118,110,0.18),rgba(184,140,74,0.12))]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.6),rgba(255,255,255,0))]" />
    </div>
  );
};

export default ParallaxDivider;
