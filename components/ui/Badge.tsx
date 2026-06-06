import { cn } from "@/lib/utils";

type BadgeVariant = "forest" | "amber" | "navy" | "sage" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  forest: "bg-forest-light text-forest font-semibold",
  amber: "bg-amber-light text-amber-dark font-semibold",
  navy: "bg-offwhite text-navy font-semibold",
  sage: "bg-sage text-navy",
  muted: "bg-gray-100 text-muted",
};

export function Badge({ children, variant = "forest", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-body",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
