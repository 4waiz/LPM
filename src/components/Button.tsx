import { forwardRef, type ButtonHTMLAttributes, type ComponentProps } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const baseStyles =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald/40 focus-visible:ring-offset-2 focus-visible:ring-offset-sand dark:focus-visible:ring-offset-navy-900 disabled:opacity-60 disabled:pointer-events-none";

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3"
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald text-white shadow-soft hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0 before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 overflow-hidden",
  secondary:
    "bg-white dark:bg-navy-800 text-charcoal dark:text-stone border border-stone/60 dark:border-navy-700 hover:border-emerald/40 dark:hover:border-emerald/40 hover:text-emerald shadow-sm",
  ghost: "bg-transparent text-charcoal dark:text-stone hover:bg-stone/30 dark:hover:bg-navy-700/50",
  outline:
    "bg-transparent border border-emerald text-emerald hover:bg-emerald/10"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    />
  )
);

Button.displayName = "Button";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const ButtonLink = ({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) => (
  <Link
    className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
    {...props}
  />
);
