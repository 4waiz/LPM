import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: SectionHeadingProps) => (
  <div
    className={clsx(
      "space-y-3",
      align === "center" ? "text-center mx-auto" : "text-left"
    )}
  >
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 dark:text-white text-balance">
      {title}
    </h2>
    {subtitle && (
      <p
        className={clsx(
          "text-base sm:text-lg text-charcoal/70 dark:text-stone/70 max-w-2xl",
          align === "center" && "mx-auto"
        )}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
