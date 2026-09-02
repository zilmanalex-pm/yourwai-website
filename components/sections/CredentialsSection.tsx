import { Brain, Package, Building2, GraduationCap } from "lucide-react";

const credentialIcons = [Brain, Package, Building2, GraduationCap];

interface CredentialItem {
  category: string;
  detail: string;
}

interface CredentialsSectionProps {
  headline: string;
  items: readonly CredentialItem[];
}

/**
 * Credentials — 4 white boxes in a 2×2 grid.
 * Each row has a lucide icon. Education detail uses " · " as a line-break separator.
 */
export function CredentialsSection({ headline, items }: CredentialsSectionProps) {
  return (
    <div className="mt-3xl">
      <h3 className="text-h3 font-heading font-semibold text-primary-dark mb-lg">
        {headline}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
        {items.map((item, i) => {
          const Icon = credentialIcons[i] ?? Brain;
          return (
          <div
            key={i}
            className="relative bg-white border border-border rounded-lg p-xl shadow-subtle hover:shadow-rose-lg hover:-translate-y-1 transition-all duration-300 border-s-[3px] border-s-accent"
          >
            <div className="flex items-center gap-sm mb-xs">
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-primary-dark" strokeWidth={1.5} />
              </div>
              <h4 className="text-body font-medium text-text">{item.category}</h4>
            </div>
            <p className="text-body font-light text-text text-start" dir="auto">
              {item.detail.includes(" · ")
                ? item.detail.split(" · ").map((line, j) => (
                    <span key={j}>
                      {j > 0 && <br />}
                      {line}
                    </span>
                  ))
                : item.detail}
            </p>
          </div>
          );
        })}
      </div>
    </div>
  );
}
