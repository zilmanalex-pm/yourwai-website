"use client";

import { useDrawIn } from "@/hooks/useDrawIn";

/**
 * Subtle botanical section divider — design-rules.md §6.
 * A delicate horizontal vine/leaf flourish between sections.
 * Default color: dusty rose (#c88a8a) for "medium presence" pink accents.
 * Sage green variant available via color prop.
 *
 * Scroll-triggered stroke draw-in animation — design-rules.md §7 (LOCKED).
 * Vine draws outward from center; leaves follow via shorter path lengths.
 */
export function BotanicalDivider({
  className,
  color = "rose",
}: {
  className?: string;
  color?: "rose" | "sage";
}) {
  const stroke = color === "rose" ? "#c88a8a" : "#7a9e8e";
  const { ref, isDrawn } = useDrawIn();

  return (
    <div ref={ref} className={className} aria-hidden="true" data-drawn={isDrawn}>
      <svg
        width="200"
        height="24"
        viewBox="0 0 200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        {/* Central dot — not a path, fades in with opacity transition */}
        <circle
          cx="100"
          cy="12"
          r="2"
          fill={stroke}
          style={{
            opacity: isDrawn ? 0.25 : 0,
            transition: "opacity 300ms ease",
          }}
        />
        {/* Left vine — stem duration 800ms */}
        <path
          d="M96 12 C80 12, 65 8, 40 12 C25 15, 15 10, 5 12"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.22"
          style={{ "--draw-duration": "800ms" } as React.CSSProperties}
        />
        {/* Left small leaves — leaf duration 600ms */}
        <path
          d="M60 11 C55 6, 48 7, 46 10"
          stroke={stroke}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.18"
          style={{ "--draw-duration": "600ms" } as React.CSSProperties}
        />
        <path
          d="M35 13 C32 17, 26 16, 25 13"
          stroke={stroke}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.15"
          style={{ "--draw-duration": "600ms" } as React.CSSProperties}
        />
        {/* Right vine — stem duration 800ms */}
        <path
          d="M104 12 C120 12, 135 8, 160 12 C175 15, 185 10, 195 12"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.22"
          style={{ "--draw-duration": "800ms" } as React.CSSProperties}
        />
        {/* Right small leaves — leaf duration 600ms */}
        <path
          d="M140 11 C145 6, 152 7, 154 10"
          stroke={stroke}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.18"
          style={{ "--draw-duration": "600ms" } as React.CSSProperties}
        />
        <path
          d="M165 13 C168 17, 174 16, 175 13"
          stroke={stroke}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.15"
          style={{ "--draw-duration": "600ms" } as React.CSSProperties}
        />
      </svg>
    </div>
  );
}
