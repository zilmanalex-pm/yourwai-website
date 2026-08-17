import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/ui/FadeInSection";

interface BioSectionProps {
  eyebrow: string;
  headline: string;
  paragraphs: readonly string[];
  ctaLabel: string;
  ctaHref: string;
}

/**
 * Homepage bio teaser — clean section, no decorative image.
 */
export function BioSection({
  eyebrow,
  headline,
  paragraphs,
  ctaLabel,
  ctaHref,
}: BioSectionProps) {
  return (
    <section className="py-3xl lg:py-4xl px-xl">
      <FadeInSection>
        <div className="max-w-[800px] mx-auto flex flex-col gap-lg">
          {eyebrow && (
            <span className="text-caption font-normal text-text-muted uppercase tracking-[0.08em]">
              {eyebrow}
            </span>
          )}
          {headline && (
            <h2 className="text-h2 font-heading font-semibold text-primary">
              {headline}
            </h2>
          )}
          {paragraphs.map((p, i) => (
            <p key={i} className="text-body font-light text-text">
              {p}
            </p>
          ))}
          <div className="mt-md">
            <Link href={ctaHref}>
              <Button variant="secondary">{ctaLabel}</Button>
            </Link>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
