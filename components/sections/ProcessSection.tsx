import { FadeInSection } from "@/components/ui/FadeInSection";

interface ProcessStep {
  readonly label: string;
  readonly description: string;
}

interface ProcessSectionProps {
  headline: string;
  steps: readonly ProcessStep[];
  alt?: boolean;
}

/**
 * Process flow — visual step indicator with connecting line.
 * Enlarged circles and fonts for prominence.
 */
export function ProcessSection({ headline, steps, alt }: ProcessSectionProps) {
  return (
    <section className={`py-3xl lg:py-4xl px-xl${alt ? " section-alt" : ""}`}>
      <FadeInSection>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-h2 font-heading font-semibold text-primary-dark mb-2xl text-center">
          {headline}
        </h2>
        <div className="flex flex-col lg:flex-row gap-xl lg:gap-md">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative">
              {/* Step number circle — enlarged */}
              <div className="w-14 h-14 rounded-full bg-primary-dark text-white flex items-center justify-center text-h4 font-semibold mb-lg shadow-rose">
                {i + 1}
              </div>
              {/* Connector line (desktop only, between circles) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 start-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px] bg-accent/30" />
              )}
              <p className="text-body font-medium text-text">{step.label}</p>
              <p className="text-body font-light text-text-muted mt-xs max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </FadeInSection>
    </section>
  );
}
