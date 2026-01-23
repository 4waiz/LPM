import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenId?: string;
};

const Accordion = ({ items, defaultOpenId }: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const reduced = usePrefersReducedMotion();

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="rounded-2xl border border-stone/60 dark:border-navy-700 bg-white dark:bg-navy-800 transition-colors duration-300">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="text-sm font-semibold text-navy-900 dark:text-white">{item.title}</span>
              <span
                className={clsx(
                  "text-lg font-semibold text-emerald transition",
                  isOpen && "rotate-45"
                )}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0.1 : 0.25 }}
                  className="overflow-hidden px-5 pb-4 text-sm text-charcoal/70 dark:text-stone/70"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
