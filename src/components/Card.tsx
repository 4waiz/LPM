import clsx from "clsx";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  withHover?: boolean;
};

const Card = ({ className, withHover, ...props }: CardProps) => (
  <div
    className={clsx(
      "rounded-2xl border border-stone/60 dark:border-navy-700 bg-white dark:bg-navy-800 shadow-sm transition-all duration-300",
      withHover && "hover:-translate-y-1.5 hover:shadow-lift hover:border-emerald/30 dark:hover:border-emerald/30 cursor-pointer",
      className
    )}
    {...props}
  />
);

export default Card;
