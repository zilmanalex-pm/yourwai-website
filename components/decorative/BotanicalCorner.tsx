"use client";

import { useDrawIn } from "@/hooks/useDrawIn";

/**
 * Subtle botanical corner accent — design-rules.md §6.
 * A delicate leaf cluster for page corners.
 * Use with CSS transform to rotate/flip for different corners.
 * Color: sage green (#7a9e8e) at reduced opacity.
 *
 * Scroll-triggered stroke draw-in animation — design-rules.md §7 (LOCKED).
 * Stem draws from corner, leaves follow via shorter paths.
 */
export function BotanicalCorner({ className }: { className?: string }) {
  const { ref, isDrawn } = useDrawIn();

  return (
    <div ref={ref} data-drawn={isDrawn} className={className}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Curved stem from corner — 800ms */}
        <path
          d="M5 75 C10 55, 20 35, 40 20 C55 10, 65 8, 75 5"
          stroke="#7a9e8e"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.2"
          style={{ "--draw-duration": "800ms" } as React.CSSProperties}
        />
        {/* Small leaf 1 — 600ms */}
        <path
          d="M20 50 C15 42, 18 35, 25 38 C20 42, 20 47, 20 50"
          stroke="#7a9e8e"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.15"
          style={{ "--draw-duration": "600ms" } as React.CSSProperties}
        />
        {/* Small leaf 2 — 600ms */}
        <path
          d="M35 30 C28 25, 30 18, 38 20 C34 24, 34 27, 35 30"
          stroke="#7a9e8e"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.15"
          style={{ "--draw-duration": "600ms" } as React.CSSProperties}
        />
        {/* Small leaf 3 — 600ms */}
        <path
          d="M55 15 C50 8, 55 3, 60 8 C56 10, 55 13, 55 15"
          stroke="#7a9e8e"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.12"
          style={{ "--draw-duration": "600ms" } as React.CSSProperties}
        />
      </svg>
    </div>
  );
}
