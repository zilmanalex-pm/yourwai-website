/**
 * Dusty rose divider between sections.
 * Provides visual rhythm — consistent pink line.
 */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      className={`max-w-[1200px] mx-auto px-xl ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="h-[1.5px] bg-accent/60" />
    </div>
  );
}
