import { FadeInSection } from "@/components/ui/FadeInSection";

interface AudienceSectionProps {
  heading: string;
  body1: string;
  body2: string;
}

/**
 * "Who this is for" — two-paragraph section between Hero and TrustBar.
 * Visually lighter than the hero, uses surface background for differentiation.
 */
export function AudienceSection({ heading, body1, body2 }: AudienceSectionProps) {
  return (
    <section className="section-alt py-3xl lg:py-4xl px-xl">
      <FadeInSection>
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-h3 font-heading font-semibold text-primary-dark mb-md">
            {heading}
          </h2>
          <p className="text-body-lg font-light text-text leading-relaxed">
            {body1}
          </p>
          <p className="text-body-lg font-light text-text leading-relaxed mt-md">
            {body2}
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
