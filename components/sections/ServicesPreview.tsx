import Link from "next/link";
import Image from "next/image";
import { Search, Wrench, GraduationCap, Globe, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/ui/FadeInSection";

const serviceIcons = [Search, Wrench, GraduationCap, Globe, Linkedin];

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
          {items.map((item, i) => {
            const Icon = serviceIcons[i] ?? Search;
            return (
            <Card key={i} className="w-full relative z-10">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center mb-sm">
                <Icon className="w-5 h-5 text-primary-dark" strokeWidth={1.5} />
              </div>
              <h3 className="text-body font-heading font-medium text-text mb-xs">
                {item.title}
              </h3>
              <p className="text-caption font-light text-text">
                {item.description}
              </p>
            </Card>
            );
          })}
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
