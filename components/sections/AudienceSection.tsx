import { FadeInSection } from "@/components/ui/FadeInSection";

interface AudienceSectionProps {
  heading: string;
  body: string;
}

/**
 * "Who this is for" — short paragraph section between Hero and TrustBar.
 * Visually lighter than the hero, uses surface background for differentiation.
 * No cards or lists — a single direct address to the visitor.
 */
export function AudienceSection({ heading, body }: AudienceSectionProps) {
  return (
    <section className="section-alt py-3xl lg:py-4xl px-xl">
      <FadeInSection>
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-h3 font-heading font-semibold text-primary-dark mb-md">
            {heading}
          </h2>
          <p className="text-body-lg font-light text-text leading-relaxed">
            {body}
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
