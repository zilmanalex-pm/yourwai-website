import { FadeInSection } from "@/components/ui/FadeInSection";

interface OutcomeSectionProps {
  heading: string;
  intro: string;
  transition: string;
  items: string[];
  closing: string;
}

/**
 * "What changes after working together" — closing section on Services page.
 * Intro line, transition word, 3-item list of concrete wins, closing line.
 */
export function OutcomeSection({
  heading,
  intro,
  transition,
  items,
  closing,
}: OutcomeSectionProps) {
  return (
    <section className="py-3xl lg:py-4xl px-xl">
      <FadeInSection>
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-h2 font-heading font-semibold text-primary mb-lg">
            {heading}
          </h2>
          <p className="text-body-lg font-light text-text leading-relaxed">
            {intro}
          </p>
          <p className="text-body-lg font-heading font-medium text-primary-dark mt-lg mb-md">
            {transition}
          </p>
          <ul className="space-y-md">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-sm text-body font-light text-text leading-relaxed"
              >
                <span className="mt-[8px] w-2 h-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-body-lg font-light text-text mt-xl leading-relaxed">
            {closing}
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
