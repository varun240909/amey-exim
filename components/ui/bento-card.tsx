"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ─── Explicit span maps (never use template literals — Tailwind JIT will purge) ─
const colSpanMap: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
};

const rowSpanMap: Record<number, string> = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
};

// The initial hidden transform for each reveal direction
const revealInitialClass: Record<string, string> = {
  up:    "opacity-0 translate-y-10",
  down:  "opacity-0 -translate-y-10",
  left:  "opacity-0 translate-x-10",
  right: "opacity-0 -translate-x-10",
  scale: "opacity-0 scale-95",
  none:  "opacity-0",
};

interface BentoCardProps extends React.ComponentProps<"div"> {
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
  bgImage?: string;
  altText?: string;
  /** CSS fallback gradient shown while the image loads or if image is missing */
  fallbackGradient?: string;
  /** Tailwind classes for the overlay gradient on top of bgImage */
  gradientOverlay?: string;
  /** Delay before the scroll-reveal fires, in ms */
  revealDelay?: number;
  /** Direction the card animates in from */
  revealFrom?: "up" | "down" | "left" | "right" | "scale" | "none";
}

export function BentoCard({
  className,
  colSpan = 1,
  rowSpan = 1,
  bgImage,
  altText,
  fallbackGradient = "linear-gradient(135deg, var(--card) 0%, var(--muted) 100%)",
  gradientOverlay = "bg-gradient-to-t from-background/90 via-background/40 to-transparent",
  revealDelay = 0,
  revealFrom = "up",
  children,
  ...props
}: BentoCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), revealDelay);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [revealDelay]);

  const colClass = colSpanMap[colSpan] || "col-span-1";
  const rowClass = rowSpanMap[rowSpan] || "row-span-1";
  const hiddenClass = revealInitialClass[revealFrom] ?? "opacity-0 translate-y-10";

  return (
    <div
      ref={ref}
      className={cn(
        // Layout & base styling
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card text-card-foreground p-6 shadow-sm",
        // Hover micro-interactions
        "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg",
        // Span classes (explicit map — JIT-safe)
        colClass,
        rowClass,
        // Scroll-reveal: toggle between hidden and visible state
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0"
          : hiddenClass,
        // Smooth entrance transition (separate from hover)
        "motion-safe:[transition:opacity_0.7s_cubic-bezier(0.22,1,0.36,1),transform_0.7s_cubic-bezier(0.22,1,0.36,1),box-shadow_0.4s_ease,border-color_0.4s_ease]",
        className
      )}
      style={{
        // Fallback gradient is visible during image load or if image fails
        background: bgImage ? fallbackGradient : undefined,
      }}
      {...props}
    >
      {/* ── Background Image with Fallback ── */}
      {bgImage && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={bgImage}
            alt={altText || "Card background image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority={false}
          />
          {/* Acrylic gradient overlay — ensures text is always readable */}
          {gradientOverlay && (
            <div className={cn("absolute inset-0 z-10", gradientOverlay)} />
          )}
        </div>
      )}

      {/* ── Card Content ── */}
      <div
        className={cn(
          "relative z-20 flex h-full w-full flex-col justify-between",
          bgImage && "text-white"
        )}
      >
        {children}
      </div>
    </div>
  );
}
