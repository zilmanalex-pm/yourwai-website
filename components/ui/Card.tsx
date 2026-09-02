import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Testimonial variant adds left rose border — design-rules.md §5 */
  variant?: "default" | "testimonial";
}

/**
 * Card component — design-rules.md §5
 *
 * Default: white bg, 1px border, 16px radius, 32px padding,
 * 3px start-side rose accent border for visual consistency.
 * Hover: lift -4px + enhanced rose shadow (300ms).
 */
export function Card({
  className,
  variant = "default",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative bg-white border border-border rounded-lg p-xl",
        "border-s-[3px] border-s-accent",
        "shadow-subtle hover:shadow-rose-lg hover:-translate-y-1",
        "transition-all duration-300 ease-out",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
