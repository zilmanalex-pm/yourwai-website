import { Heebo } from "next/font/google";

/**
 * Heebo — primary font for both Hebrew and Latin text.
 * Weights: 300 (Light/body), 400 (Regular/nav/caption), 500 (Medium/buttons/H4), 600 (SemiBold/headings)
 * Design-rules.md §2
 */
export const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-heebo",
});
