import { Card } from "@/components/ui/Card";

interface ValueItem {
  readonly title: string;
  readonly description: string;
}

interface ValuesSectionProps {
  headline: string;
  items: readonly ValueItem[];
}

/** Small dust-pink flower icon for "how i work" section — 5-petal design */
function SmallFlowerIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 5 petals rotated around center */}
      <ellipse cx="12" cy="6.5" rx="3" ry="4.5" fill="#c88a8a" opacity="0.55" />
      <ellipse cx="12" cy="6.5" rx="3" ry="4.5" fill="#c88a8a" opacity="0.55" transform="rotate(72 12 12)" />
      <ellipse cx="12" cy="6.5" rx="3" ry="4.5" fill="#c88a8a" opacity="0.55" transform="rotate(144 12 12)" />
      <ellipse cx="12" cy="6.5" rx="3" ry="4.5" fill="#c88a8a" opacity="0.55" transform="rotate(216 12 12)" />
      <ellipse cx="12" cy="6.5" rx="3" ry="4.5" fill="#c88a8a" opacity="0.55" transform="rotate(288 12 12)" />
      <circle cx="12" cy="12" r="2.5" fill="#b07070" />
    </svg>
  );
}

/**
 * Values / How I Work — with small pink flower icons.
 */
export function ValuesSection({ headline, items }: ValuesSectionProps) {
  return (
    <div className="mt-3xl">
      <h3 className="text-h3 font-heading font-semibold text-primary-dark mb-lg">
        {headline}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-lg">
        {items.map((item, i) => (
          <Card key={i}>
            <SmallFlowerIcon className="mb-sm" />
            <h4 className="text-h4 font-heading font-medium text-text mb-xs">
              {item.title}
            </h4>
            <p className="text-body font-light text-text-muted">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
