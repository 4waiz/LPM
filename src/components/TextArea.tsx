import { useId } from "react";
import clsx from "clsx";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  hint?: string;
  error?: string;
};

const TextArea = ({ label, hint, error, id, className, ...props }: TextAreaProps) => {
  const fallbackId = useId();
  const areaId = id ?? fallbackId;
  const hintId = hint ? `${areaId}-hint` : undefined;
  const errorId = error ? `${areaId}-error` : undefined;

  return (
    <div className="space-y-2">
      <label htmlFor={areaId} className="text-sm font-semibold text-charcoal dark:text-stone">
        {label}
      </label>
      <textarea
        id={areaId}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : hintId}
        className={clsx(
          "w-full rounded-xl border border-stone/70 dark:border-navy-700 bg-white dark:bg-navy-800 px-4 py-3 text-sm text-charcoal dark:text-stone shadow-sm transition focus:border-emerald focus:ring-2 focus:ring-emerald/20",
          error && "border-rose-400 focus:border-rose-400 focus:ring-rose-200",
          className
        )}
        {...props}
      />
      {hint && !error && (
        <p id={hintId} className="text-xs text-charcoal/60 dark:text-stone/60">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-xs text-rose-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;
