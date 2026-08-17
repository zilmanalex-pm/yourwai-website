import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Testimonial variant adds left rose border — design-rules.md §5 */
  variant?: "default" | "testimonial";
}

/**
 * Card component — design-rules.md §5
 *
 * Default: white bg, 1px border, 16px radius, 32px padding.
 * Right-side partial accent line via ::after pseudo-element (60% height).
 * Hover: lift -5px + enhanced rose shadow (300ms).
 * Testimonial: + 3px left border in dusty rose.
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
        "shadow-subtle hover:shadow-rose-lg hover:-translate-y-[5px]",
        "transition-all duration-300 ease-out",
        // Partial right accent line via pseudo-element
        "after:content-[''] after:absolute after:end-0 after:top-[20%] after:h-[40%] after:w-[4px] after:bg-accent after:rounded-full",
        variant === "testimonial" &&
          "border-s-[3px] border-s-accent",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
