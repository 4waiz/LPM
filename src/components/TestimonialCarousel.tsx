import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import Badge from "./Badge";
import { Button } from "./Button";

const testimonials = [
  {
    quote:
      "Lando turned our rental into a calm, profitable asset. The reporting is clear and the team is proactive.",
    name: "Maya R.",
    role: "Owner, Harbor District"
  },
  {
    quote:
      "Fast responses, thoughtful updates, and a maintenance system that actually works. Exactly what we needed.",
    name: "Daniel K.",
    role: "Tenant, Cedar Heights"
  },
  {
    quote:
      "They filled our vacancy in days and kept us informed at every step. The difference is night and day.",
    name: "Lena P.",
    role: "Owner, North Grove"
  }
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [reduced]);

  const current = testimonials[index];

  return (
    <div className="rounded-3xl border border-stone/60 dark:border-navy-700 bg-white dark:bg-navy-800 p-8 shadow-soft transition-colors duration-300">
      <div className="flex items-center justify-between gap-4">
        <Badge variant="gold">Client Notes</Badge>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() =>
              setIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
            aria-label="Previous testimonial"
          >
            Prev
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            Next
          </Button>
        </div>
      </div>

      <div className="mt-6 min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -12 }}
            transition={{ duration: reduced ? 0.1 : 0.25 }}
            className="space-y-4"
          >
            <p className="text-lg text-charcoal/80 dark:text-stone/80">"{current.quote}"</p>
            <div>
              <p className="text-sm font-semibold text-navy-900 dark:text-white">
                {current.name}
              </p>
              <p className="text-xs text-charcoal/60 dark:text-stone/60">{current.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setIndex(idx)}
            className={`h-2 w-2 rounded-full transition ${
              idx === index ? "bg-emerald" : "bg-stone/70 dark:bg-navy-700"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
