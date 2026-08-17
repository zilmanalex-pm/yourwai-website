import {
  FileText,
  MessageSquare,
  Bot,
  Palette,
  Megaphone,
  ClipboardCheck,
  Presentation,
  BarChart3,
  Users,
  Search,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";

const icons = [
  FileText,
  MessageSquare,
  Bot,
  Palette,
  Megaphone,
  ClipboardCheck,
  Presentation,
  BarChart3,
  Users,
  Search,
  ClipboardList,
  Sparkles,
];

interface AiUseCasesGridProps {
  headline: string;
  subtitle: string;
  items: readonly string[];
}

/**
 * Grid of AI use cases with icons — shows what's possible with AI.
 * Each item gets a distinct icon and a card-style tile.
 */
export function AiUseCasesGrid({
  headline,
  subtitle,
  items,
}: AiUseCasesGridProps) {
  return (
    <section className="py-3xl lg:py-4xl px-xl">
      <FadeInSection>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-h2 font-heading font-semibold text-primary-dark mb-sm text-center">
            {headline}
          </h2>
          <p className="text-body font-light text-text-muted text-center mb-2xl max-w-[600px] mx-auto">
            {subtitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-lg">
            {items.map((item, i) => {
              const Icon = icons[i] ?? Sparkles;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-xl bg-white border border-border rounded-lg shadow-subtle hover:shadow-rose-lg hover:-translate-y-[3px] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-md">
                    <Icon className="w-6 h-6" style={{ color: "#b07070" }} strokeWidth={1.5} />
                  </div>
                  <p className="text-body font-medium text-text leading-snug">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
