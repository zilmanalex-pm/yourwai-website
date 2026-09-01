"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered SVG stroke draw-in animation — design-rules.md §7 (LOCKED).
 *
 * Mirrors FadeInSection's IntersectionObserver pattern:
 * - threshold: 0.15 (slightly before content's 0.2)
 * - plays once, observer disconnects after trigger
 * - respects prefers-reduced-motion
 *
 * On trigger, sets `data-drawn` on the SVG wrapper and computes
 * each path's total length as a CSS custom property (--path-length).
 * The actual animation is driven by the `botanical-draw` keyframe
 * in globals.css via the `[data-drawn] path` selector.
 */
export function useDrawIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Show final state immediately — no animation
      setIsDrawn(true);
      initPaths(el, true);
      return;
    }

    // Compute path lengths at mount so CSS can use them
    initPaths(el, false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDrawn(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isDrawn };
}

/**
 * Set --path-length and --target-opacity on each <path> inside the wrapper.
 * If `immediate` is true (reduced-motion), skip dasharray setup so paths
 * render at their final drawn state.
 */
function initPaths(el: HTMLElement, immediate: boolean) {
  const paths = el.querySelectorAll("path");
  paths.forEach((path) => {
    const length = path.getTotalLength();
    const opacity = path.getAttribute("opacity") || "0.2";

    path.style.setProperty("--path-length", String(length));
    path.style.setProperty("--target-opacity", opacity);

    if (immediate) {
      // Final state: fully drawn, at target opacity
      path.style.strokeDasharray = "none";
      path.style.strokeDashoffset = "0";
      path.style.opacity = opacity;
    } else {
      // Pre-draw state: path hidden via dashoffset
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = String(length);
      path.style.opacity = "0";
    }
  });
}
