/**
 * Subtle botanical section divider — design-rules.md §6.
 * A delicate horizontal vine/leaf flourish between sections.
 * Default color: dusty rose (#c88a8a) for "medium presence" pink accents.
 * Sage green variant available via color prop.
 */
export function BotanicalDivider({
  className,
  color = "rose",
}: {
  className?: string;
  color?: "rose" | "sage";
}) {
  const stroke = color === "rose" ? "#c88a8a" : "#7a9e8e";

  return (
    <div className={className} aria-hidden="true">
      <svg
        width="200"
        height="24"
        viewBox="0 0 200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        {/* Central dot */}
        <circle cx="100" cy="12" r="2" fill={stroke} opacity="0.25" />
        {/* Left vine */}
        <path
          d="M96 12 C80 12, 65 8, 40 12 C25 15, 15 10, 5 12"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.22"
        />
        {/* Left small leaves */}
        <path
          d="M60 11 C55 6, 48 7, 46 10"
          stroke={stroke}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.18"
        />
        <path
          d="M35 13 C32 17, 26 16, 25 13"
          stroke={stroke}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.15"
        />
        {/* Right vine */}
        <path
          d="M104 12 C120 12, 135 8, 160 12 C175 15, 185 10, 195 12"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.22"
        />
        {/* Right small leaves */}
        <path
          d="M140 11 C145 6, 152 7, 154 10"
          stroke={stroke}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.18"
        />
        <path
          d="M165 13 C168 17, 174 16, 175 13"
          stroke={stroke}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.15"
        />
      </svg>
    </div>
  );
}
