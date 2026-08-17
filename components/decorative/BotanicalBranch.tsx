/**
 * Subtle botanical branch accent — design-rules.md §6.
 * Hand-drawn one-line-art style. Used as corner/edge decoration.
 * Color: sage green (#7a9e8e) at reduced opacity.
 */
export function BotanicalBranch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="160"
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main stem */}
      <path
        d="M60 155 C58 130, 55 110, 58 85 C60 65, 62 45, 60 20"
        stroke="#7a9e8e"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.25"
      />
      {/* Left leaves */}
      <path
        d="M58 120 C45 115, 30 118, 25 110 C30 105, 45 102, 58 110"
        stroke="#7a9e8e"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.2"
      />
      <path
        d="M56 90 C42 82, 28 88, 22 78 C28 73, 42 72, 56 80"
        stroke="#7a9e8e"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.18"
      />
      <path
        d="M58 55 C48 48, 35 52, 30 44 C36 40, 48 40, 58 48"
        stroke="#7a9e8e"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.15"
      />
      {/* Right leaves */}
      <path
        d="M62 105 C75 100, 88 104, 93 95 C88 90, 75 88, 62 96"
        stroke="#7a9e8e"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.2"
      />
      <path
        d="M60 72 C72 65, 85 70, 90 62 C84 57, 72 55, 60 64"
        stroke="#7a9e8e"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.18"
      />
      <path
        d="M60 40 C70 34, 80 38, 84 30 C78 26, 70 26, 60 33"
        stroke="#7a9e8e"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.15"
      />
    </svg>
  );
}
