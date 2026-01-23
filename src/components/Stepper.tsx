import clsx from "clsx";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Step = {
  title: string;
  description?: string;
};

type StepperProps = {
  steps: Step[];
  currentStep: number;
};

const Stepper = ({ steps, currentStep }: StepperProps) => {
  const reduced = usePrefersReducedMotion();
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center gap-3">
            <span
              className={clsx(
                "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold",
                index <= currentStep
                  ? "border-emerald bg-emerald text-white"
                  : "border-stone/70 dark:border-navy-700 text-charcoal/50 dark:text-stone/50"
              )}
            >
              {index + 1}
            </span>
            <div>
              <p
                className={clsx(
                  "text-sm font-semibold",
                  index <= currentStep ? "text-navy-900 dark:text-white" : "text-charcoal/60 dark:text-stone/60"
                )}
              >
                {step.title}
              </p>
              {step.description && (
                <p className="text-xs text-charcoal/60 dark:text-stone/60">{step.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-stone/60 dark:bg-navy-700">
        <motion.div
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: reduced ? 0.1 : 0.3 }}
          className="h-full rounded-full bg-emerald"
        />
      </div>
    </div>
  );
};

export default Stepper;
