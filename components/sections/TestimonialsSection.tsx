import { Card } from "@/components/ui/Card";
import { FadeInSection } from "@/components/ui/FadeInSection";

interface Testimonial {
  readonly quote: string;
  readonly name: string;
  readonly role?: string;
}

interface TestimonialsSectionProps {
  eyebrow: string;
  headline: string;
  items: readonly Testimonial[];
}

/**
 * Testimonials — product-brain.md §8:
 * "Short quotes with client name/role, placed on homepage and services page."
 *
 * Currently hidden — renders nothing when items array is empty.
 * Uses the testimonial Card variant (left rose border) from design-rules.md §5.
 * Ready to activate once testimonials are provided.
 */
export function TestimonialsSection({
  eyebrow,
  headline,
  items,
}: TestimonialsSectionProps) {
  // Don't render anything if no testimonials available
  if (items.length === 0) return null;

  return (
    <section className="py-3xl lg:py-4xl px-xl">
      <FadeInSection>
      <div className="max-w-[1200px] mx-auto">
        <span className="text-caption font-normal text-text-muted uppercase tracking-[0.08em]">
          {eyebrow}
        </span>
        <h2 className="text-h2 font-heading font-semibold text-primary mt-xs mb-xl">
          {headline}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
          {items.map((item, i) => (
            <Card key={i} variant="testimonial">
              <blockquote className="text-body-lg font-light italic text-text mb-md">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer>
                <p className="text-caption font-medium text-text">
                  {item.name}
                </p>
                {item.role && (
                  <p className="text-caption text-text-muted">{item.role}</p>
                )}
              </footer>
            </Card>
          ))}
        </div>
      </div>
      </FadeInSection>
    </section>
  );
}
