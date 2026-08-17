import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

/**
 * Button component — design-rules.md §5
 *
 * Primary:   bg accent-dark (#b07070), text white, hover darker, subtle rose shadow
 * Secondary: transparent, border 1.5px accent-dark, text accent-dark
 * Ghost:     text only, no border
 *
 * All: 14px 28px padding, 12px radius, 200ms transitions
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          // Shared
          "inline-flex items-center justify-center",
          "text-button font-medium tracking-[0.03em]",
          "rounded-md px-[28px] py-[14px]",
          "transition-all duration-200",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/40",
          "disabled:opacity-50 disabled:cursor-not-allowed",

          // Variants
          variant === "primary" && [
            "bg-accent-dark text-white shadow-rose",
            "hover:bg-[#9a5f5f] hover:shadow-rose-lg active:bg-[#8a5252]",
          ],
          variant === "secondary" && [
            "bg-transparent border-[1.5px] border-accent-dark text-accent-dark",
            "hover:bg-accent-dark hover:text-white",
          ],
          variant === "ghost" && [
            "bg-transparent text-accent-dark",
            "hover:bg-accent-dark/8",
          ],

          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
export type { ButtonProps, ButtonVariant };
