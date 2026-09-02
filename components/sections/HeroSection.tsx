import Image from "next/image";

interface HeroSectionProps {
  name: string;
  headline: string;
  subheadline: string;
  locale: "he" | "en";
}

/**
 * Homepage hero — text + portrait, no botanical.
 * Name is the prominent element; headline is secondary.
 */
export function HeroSection({
  name,
  headline,
  subheadline,
  locale,
}: HeroSectionProps) {
  return (
    <section className="py-3xl lg:py-4xl px-xl relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-3xl relative z-10">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-xl">
          <h1 className="text-h1 font-heading font-semibold text-primary leading-[1.2] tracking-[-0.02em]">
            {name}
          </h1>
          <p className="text-h3 font-heading font-medium text-primary-dark leading-snug">
            {headline}
          </p>
          <p className="text-body-lg font-light text-text max-w-[540px]">
            {subheadline}
          </p>
        </div>

        {/* Hero portrait */}
        <div className="flex-shrink-0 w-[280px] h-[350px] lg:w-[360px] lg:h-[450px] rounded-lg overflow-hidden">
          <Image
            src="/images/avatar5.png"
            alt={
              locale === "he"
                ? "אלכסנדרה זילמן, יועצת אימוץ AI"
                : "Alexandra Zilman, AI adoption consultant"
            }
            width={360}
            height={450}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
