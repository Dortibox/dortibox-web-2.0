import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark"; // dark = on dark bg (white text)
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className={cn("section-label block mb-3", isDark && "text-amber")}>
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-heading font-bold text-display-sm leading-tight text-balance",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed font-body",
            isDark ? "text-sage" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
