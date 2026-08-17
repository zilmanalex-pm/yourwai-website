import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/ui/FadeInSection";

interface ServiceItem {
  readonly title: string;
  readonly description: string;
}

interface ServicesPreviewProps {
  eyebrow: string;
  headline: string;
  items: readonly ServiceItem[];
  ctaLabel: string;
  ctaHref: string;
  alt?: boolean;
}

/** Inline dust-pink flower icon */
function FlowerIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="4" fill="#c88a8a" />
      <ellipse cx="14" cy="6" rx="3.5" ry="5" fill="#c88a8a" opacity="0.6" />
      <ellipse cx="14" cy="22" rx="3.5" ry="5" fill="#c88a8a" opacity="0.6" />
      <ellipse cx="6" cy="14" rx="5" ry="3.5" fill="#c88a8a" opacity="0.6" />
      <ellipse cx="22" cy="14" rx="5" ry="3.5" fill="#c88a8a" opacity="0.6" />
      <ellipse cx="8.3" cy="8.3" rx="3.5" ry="5" fill="#c88a8a" opacity="0.5" transform="rotate(-45 8.3 8.3)" />
      <ellipse cx="19.7" cy="19.7" rx="3.5" ry="5" fill="#c88a8a" opacity="0.5" transform="rotate(-45 19.7 19.7)" />
      <ellipse cx="19.7" cy="8.3" rx="3.5" ry="5" fill="#c88a8a" opacity="0.5" transform="rotate(45 19.7 8.3)" />
      <ellipse cx="8.3" cy="19.7" rx="3.5" ry="5" fill="#c88a8a" opacity="0.5" transform="rotate(45 8.3 19.7)" />
    </svg>
  );
}

/**
 * Homepage services overview — all services in a single row.
 * Botanical illustration floats behind the card grid.
 */
export function ServicesPreview({
  eyebrow,
  headline,
  items,
  ctaLabel,
  ctaHref,
  alt,
}: ServicesPreviewProps) {
  return (
    <section className={`py-3xl lg:py-4xl px-xl relative overflow-hidden${alt ? " section-alt" : ""}`}>
      {/* Botanical illustration — potted plant */}
      <div
        className="hidden lg:block absolute bottom-4 end-0 -me-4 z-0 pointer-events-none select-none opacity-85"
        aria-hidden="true"
        style={{ animation: "gentle-drift 6s ease-in-out infinite" }}
      >
        <Image
          src="/images/visuals/botanical-plant-pot.png"
          alt=""
          width={340}
          height={340}
          className="w-auto h-auto"
          style={{ maxWidth: 340 }}
          unoptimized
        />
      </div>

      <FadeInSection>
      <div className="max-w-[1200px] mx-auto relative z-10">
        {eyebrow && (
          <span className="text-caption font-normal text-text-muted uppercase tracking-[0.08em]">
            {eyebrow}
          </span>
        )}
        <h2 className="text-h2 font-heading font-semibold text-primary mt-xs mb-xl">
          {headline}
        </h2>

        {/* All services in one row on desktop, narrower boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-lg justify-items-center">
          {items.map((item, i) => (
            <Card key={i} className="w-full relative z-10">
              <FlowerIcon className="mb-sm" />
              <h3 className="text-body font-heading font-medium text-text mb-xs">
                {item.title}
              </h3>
              <p className="text-caption font-light text-text">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-xl text-center">
          <Link href={ctaHref}>
            <Button variant="secondary">{ctaLabel}</Button>
          </Link>
        </div>
      </div>
      </FadeInSection>
    </section>
  );
}
