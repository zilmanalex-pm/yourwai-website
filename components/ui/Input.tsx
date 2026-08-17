import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/**
 * Input component — design-rules.md §5
 *
 * White bg, 1.5px border #e8e4e0, 8px radius
 * Focus: border #6c8ea4, ring at 40% opacity
 * Error: border #c75050
 * Label: 14px Medium, #1e293b, 6px margin-bottom
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");

    return (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={inputId}
            className="text-caption font-medium text-text mb-[6px]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "bg-white border-[1.5px] border-border rounded-sm",
            "px-md py-[12px] text-body font-light text-text",
            "placeholder:text-text-muted",
            "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40",
            error && "border-error focus:border-error focus:ring-error/40",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-caption text-error mt-xs">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };
