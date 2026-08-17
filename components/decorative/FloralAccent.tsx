/**
 * Decorative floral illustration accent — design-rules.md §6.
 *
 * Places a floral line-art image as a subtle, absolutely-positioned
 * decorative element. Never competes with content or overlaps text/CTAs.
 * Used at corners or edges of sections.
 *
 * The parent element MUST have `position: relative` and `overflow: hidden`.
 */
import Image from "next/image";
import { cn } from "@/lib/utils";

type Position =
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "center-start"
  | "center-end";

interface FloralAccentProps {
  /** Path to the image in /public (e.g. "/images/visuals/vine-trailing.png") */
  src: string;
  /** Semantic alt is empty — these are purely decorative */
  position: Position;
  /** Max width in px (default 200) */
  size?: number;
  /** Opacity 0–100 (default 18) */
  opacity?: number;
  /** Extra Tailwind classes */
  className?: string;
}

const positionClasses: Record<Position, string> = {
  "top-start": "top-0 start-0",
  "top-end": "top-0 end-0",
  "bottom-start": "bottom-0 start-0",
  "bottom-end": "bottom-0 end-0",
  "center-start": "top-1/2 start-0 -translate-y-1/2",
  "center-end": "top-1/2 end-0 -translate-y-1/2",
};

export function FloralAccent({
  src,
  position,
  size = 200,
  opacity = 18,
  className,
}: FloralAccentProps) {
  return (
    <div
      className={cn(
        "absolute pointer-events-none select-none z-0",
        positionClasses[position],
        className
      )}
      aria-hidden="true"
      style={{
        opacity: opacity / 100,
        animation: "gentle-drift 5s ease-in-out infinite",
      }}
    >
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        className="w-auto h-auto"
        style={{ maxWidth: size, maxHeight: size * 1.5 }}
        unoptimized
      />
    </div>
  );
}
