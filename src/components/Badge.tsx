import clsx from "clsx";

type BadgeVariant = "emerald" | "gold" | "neutral";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  emerald: "bg-emerald text-white",
  gold: "bg-gold text-navy-900",
  neutral: "bg-navy-800/90 text-white dark:bg-stone/90 dark:text-navy-900"
};

const Badge = ({ children, variant = "neutral", className }: BadgeProps) => (
  <span
    className={clsx(
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
      variantStyles[variant],
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
