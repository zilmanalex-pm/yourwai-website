"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

interface FAQSectionProps {
  headline: string;
  items: readonly FAQItem[];
}

/**
 * FAQ accordion — product-brain.md §8:
 * Focus on the hesitations clients actually have:
 * "Is AI safe?" / "Is it complex?" / "I tried and failed" / "No time"
 */
export function FAQSection({ headline, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-3xl">
      <h3 className="text-h3 font-heading font-semibold text-primary-dark mb-xl">
        {headline}
      </h3>
      <div className="flex flex-col gap-sm max-w-[800px]">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border border-border rounded-sm overflow-hidden">
              <button
                className={cn(
                  "w-full flex items-center justify-between px-lg py-md text-start",
                  "text-body font-medium text-text hover:bg-surface transition-colors duration-200"
                )}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <svg
                  className={cn(
                    "w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="px-lg pb-md">
                  <p className="text-body font-light text-text-muted">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
