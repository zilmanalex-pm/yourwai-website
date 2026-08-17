"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Scroll-triggered fade-in-up animation — design-rules.md §7:
 * Distance: 16px. Duration: 400ms. Ease: ease-out.
 * Trigger: once, when 20% visible.
 */
export function FadeInSection({ children, className }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-[400ms] ease-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[16px]",
        className
      )}
    >
      {children}
    </div>
  );
}
