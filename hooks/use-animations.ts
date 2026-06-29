"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── useInView ────────────────────────────────────────────────────────────────
// Returns true once the element has entered the viewport.
// Mirrors the IntersectionObserver approach used in HeroSection / fade-image.tsx
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

// ─── useAnimatedCounter ──────────────────────────────────────────────────────
// Counts from 0 → target using requestAnimationFrame (ease-out cubic).
// Only starts when the element is visible.
export function useAnimatedCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let raf: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);

  return { ref, count };
}

// ─── useParallax ─────────────────────────────────────────────────────────────
// Returns a Y-offset value driven by scroll position relative to the element.
// Lightweight alternative to full parallax libraries.
export function useParallax(speed = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const rafRef = useRef<number | null>(null);

  const update = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowH = window.innerHeight;
    const center = rect.top + rect.height / 2 - windowH / 2;
    setOffsetY(center * speed);
  }, [speed]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  return { ref, offsetY };
}
