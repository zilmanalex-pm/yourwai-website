import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { FloralAccent } from "@/components/decorative/FloralAccent";

interface ContactCTAProps {
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  alt?: boolean;
}

/**
 * Bottom-of-page CTA strip — product-brain.md §7 pillar 4:
 * "Not a form. Not a purchase. A conversation where we figure out
 *  together if this makes sense for you."
 *
 * Low pressure, clear next step.
 */
export function ContactCTA({
  headline,
  description,
  ctaLabel,
  ctaHref,
  alt,
}: ContactCTAProps) {
  return (
    <section className={`py-3xl lg:py-4xl px-xl relative overflow-hidden${alt ? " section-alt" : ""}`}>
      {/* Decorative floral accent — design-rules.md §6 */}
      <FloralAccent
        src="/images/visuals/web-plant-tall.png"
        position="center-end"
        size={220}
        opacity={80}
        className="hidden lg:block -end-6"
      />

      <FadeInSection>
        <div className="max-w-[720px] mx-auto text-center flex flex-col items-center gap-md relative z-10">
          <h2 className="text-h2 font-heading font-semibold text-primary-dark">
            {headline}
          </h2>
          <p className="text-body-lg font-light text-text">
            {description}
          </p>
          <div className="mt-md">
            <Link href={ctaHref}>
              <Button variant="primary">{ctaLabel}</Button>
            </Link>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
