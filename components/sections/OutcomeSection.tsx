import { FadeInSection } from "@/components/ui/FadeInSection";

interface OutcomeSectionProps {
  heading: string;
  body: string;
  shift: string;
}

/**
 * "What changes after working together" — closing section on Services page.
 * Two visual beats: concrete wins (body) + emotional payoff (shift).
 * The shift text is set apart with more spacing above and slightly smaller type.
 */
export function OutcomeSection({ heading, body, shift }: OutcomeSectionProps) {
  return (
    <section className="py-3xl lg:py-4xl px-xl">
      <FadeInSection>
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-h2 font-heading font-semibold text-primary mb-lg">
            {heading}
          </h2>
          <p className="text-body-lg font-light text-text leading-relaxed">
            {body}
          </p>
          <p className="text-body font-light text-text-muted mt-xl leading-relaxed">
            {shift}
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
