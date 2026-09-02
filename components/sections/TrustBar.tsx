import { FadeInSection } from "@/components/ui/FadeInSection";

interface TrustItem {
  readonly value: string;
  readonly label: string;
}

interface TrustBarProps {
  items: readonly TrustItem[];
}

/**
 * Trust bar — product-brain.md §7 pillar 2:
 * "I've done this before — in harder environments."
 * Credentials as scannable chip/badges, not a wall of text.
 *
 * Items with an empty `value` are text-only badges — same visual
 * weight, just without the large numeral.
 */
export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="section-alt py-3xl lg:py-4xl px-xl">
      <FadeInSection>
        {/* Mobile: 2-col grid · Desktop: single row with dividers */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-lg sm:hidden">
          {items.map((item, i) => (
            <div key={i} className="text-center py-sm">
              {item.value ? (
                <>
                  <p className="text-h3 font-heading font-semibold text-primary-dark">
                    {item.value}
                  </p>
                  <p className="text-caption font-normal text-text-muted mt-xs">
                    {item.label}
                  </p>
                </>
              ) : (
                <p className="text-caption font-medium text-primary-dark">
                  {item.label}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="hidden sm:flex max-w-[1200px] mx-auto flex-nowrap justify-center divide-x divide-border">
          {items.map((item, i) => (
            <div key={i} className="text-center px-lg lg:px-xl py-sm flex-shrink-0">
              {item.value ? (
                <>
                  <p className="text-h3 lg:text-h2 font-heading font-semibold text-primary-dark">
                    {item.value}
                  </p>
                  <p className="text-caption lg:text-body font-normal text-text-muted mt-xs">
                    {item.label}
                  </p>
                </>
              ) : (
                <p className="text-caption lg:text-body font-medium text-primary-dark">
                  {item.label}
                </p>
              )}
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
