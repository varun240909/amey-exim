"use client";

import { useEffect, useRef, useState } from "react";
import {
  Scale,
  Star,
  Leaf,
  Handshake,
  Globe,
  Package,
  ShieldCheck,
  BarChart3,
  User,
  ArrowRight,
} from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { useAnimatedCounter } from "@/hooks/use-animations";

// ─── Animated stat tile (counter + label) ─────────────────────────────────────
function StatTile({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const { ref, count } = useAnimatedCounter(value, 2000);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <BentoCard
      colSpan={1}
      rowSpan={1}
      revealFrom="scale"
      revealDelay={delay}
      className="bg-secondary text-center items-center"
    >
      <div ref={ref} className="flex flex-col items-center gap-2 py-2 w-full">
        <span
          className="text-4xl font-bold text-accent md:text-5xl"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {count}
          {suffix}
        </span>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
      </div>
    </BentoCard>
  );
}

// ─── Animated heading (clip-path reveal per word) ─────────────────────────────
function RevealHeading({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInView(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <h1
      ref={ref}
      className={`overflow-hidden ${className}`}
    >
      {children.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            clipPath: inView ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
            opacity: inView ? 1 : 0,
            transition: `clip-path 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.12 + delay / 1000}s, opacity 0.5s ease ${i * 0.12 + delay / 1000}s`,
            marginRight: "0.3em",
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}

const coreValues = [
  { title: "Integrity", description: "Complete transparency and honesty in all dealings, building trust through consistent actions.", Icon: Scale },
  { title: "Excellence", description: "Uncompromising quality at every step, exceeding international standards.", Icon: Star },
  { title: "Sustainability", description: "Environmental and social responsibility integrated into every operation.", Icon: Leaf },
  { title: "Partnership", description: "Long-term relationships built on mutual respect, fair practices, and shared success.", Icon: Handshake },
];

const team = [
  { name: "Raj Kumar", title: "Founder & CEO", specialization: "International Trade", featured: true },
  { name: "Priya Sharma", title: "Head of Quality", specialization: "Compliance & Standards", featured: false },
  { name: "Arjun Singh", title: "Head of Operations", specialization: "Logistics & Supply Chain", featured: false },
];

export default function AboutPage() {
  return (
    <main>
      {/* ─── Intro ─────────────────────────────────────────────────────── */}
      <section className="px-6 pt-32 pb-12 md:px-12 md:pt-40 lg:px-20">
        {/* Animated page label with line draw */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground animate-text-reveal"
            style={{ animationDelay: "0.1s" }}
          >
            Our Story
          </span>
          <div
            className="h-px flex-1 max-w-[60px] bg-accent animate-line-draw"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        <RevealHeading className="max-w-3xl text-4xl font-medium tracking-tighter md:text-5xl lg:text-6xl">
          Redefining Global Export with Integrity
        </RevealHeading>

        <p
          className="mt-5 max-w-xl text-lg text-muted-foreground animate-reveal-up opacity-0"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          Established to transform international trade through unwavering commitment to quality,
          transparency, and trust — serving 50+ countries worldwide.
        </p>
      </section>

      {/* ─── Identity & Mission Bento ───────────────────────────────────── */}
      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 auto-rows-[minmax(220px,auto)]">

          {/* Mission tile — 2×2, slides from left */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            bgImage="/images/hero-video-poster.png"
            altText="AMEY EXIM global manufacturing and export operations"
            fallbackGradient="linear-gradient(135deg, #0F1729 0%, #1E3A5F 100%)"
            gradientOverlay="bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent"
            revealFrom="left"
            revealDelay={0}
            className="min-h-[400px]"
          >
            <div className="flex flex-col justify-end h-full gap-4">
              <span className="inline-block self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                Mission & Vision
              </span>
              <h2 className="text-3xl font-medium leading-tight tracking-tighter md:text-4xl">
                Built to solve the problems global trade ignores.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-white/70">
                We export pharmaceutical, agricultural, and cosmetic products to 50+ countries — each
                shipment backed by rigorous quality control, complete traceability, and documented
                compliance.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-white/70">
                Our vision is a world where AMEY EXIM is synonymous with excellence — leveraging
                advanced technology, rigorous processes, and human expertise.
              </p>
            </div>
          </BentoCard>

          {/* Core value tiles — 4 × 1×1, each slides from different direction */}
          {coreValues.map((value, idx) => {
            const directions = ["right", "up", "right", "up"] as const;
            return (
              <BentoCard
                key={value.title}
                colSpan={1}
                rowSpan={1}
                revealFrom={directions[idx]}
                revealDelay={idx * 90}
                className="bg-secondary group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                    <value.Icon size={18} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </section>

      {/* ─── Animated Stats ─────────────────────────────────────────────── */}
      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatTile value={50} suffix="+" label="Countries Served" delay={0} />
          <StatTile value={1000} suffix="+" label="Products Available" delay={100} />
          <StatTile value={100} suffix="%" label="Compliance Rate" delay={200} />
          <StatTile value={99} suffix=".8%" label="Quality Rating" delay={300} />
        </div>
      </section>

      {/* ─── Leadership Bento ───────────────────────────────────────────── */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground animate-text-reveal">
            Leadership Team
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-border animate-line-draw" />
        </div>
        <RevealHeading className="mb-10 max-w-xl text-2xl font-medium tracking-tighter md:text-3xl">
          Guided by decades of global trade expertise.
        </RevealHeading>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 auto-rows-[minmax(280px,auto)]">

          {/* Featured CEO — image tile, slides from bottom */}
          <BentoCard
            colSpan={2}
            rowSpan={1}
            bgImage="/images/hero-video-poster.png"
            altText="Raj Kumar, Founder and CEO of AMEY EXIM"
            fallbackGradient="linear-gradient(135deg, #0F1729 0%, #1E3A5F 100%)"
            gradientOverlay="bg-gradient-to-r from-foreground/95 via-foreground/60 to-transparent"
            revealFrom="up"
            revealDelay={0}
          >
            <div className="flex flex-col justify-end h-full gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 border border-accent/30 mb-2">
                <User size={24} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold">{team[0].name}</h3>
              <p className="text-sm font-medium text-accent">{team[0].title}</p>
              <p className="text-xs text-white/60">{team[0].specialization}</p>
            </div>
          </BentoCard>

          {/* Supporting leaders — 1×1 each */}
          {team.slice(1).map((member, idx) => (
            <BentoCard
              key={member.name}
              colSpan={1}
              rowSpan={1}
              revealFrom="up"
              revealDelay={(idx + 1) * 100}
              className="bg-secondary"
            >
              <div className="flex flex-col gap-3 h-full justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                  <User size={20} className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-accent mt-1">{member.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.specialization}</p>
                </div>
              </div>
            </BentoCard>
          ))}

          {/* CTA tile — border glow animation */}
          <BentoCard
            colSpan={1}
            rowSpan={1}
            revealFrom="scale"
            revealDelay={300}
            className="bg-foreground text-white animate-border-glow"
          >
            <div className="flex flex-col h-full justify-between">
              <Globe size={28} className="text-accent" strokeWidth={1.5} />
              <div className="w-full">
                <p className="text-sm leading-relaxed text-white/70">
                  Our team brings decades of combined experience united by a passion for excellence
                  in global trade.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-medium text-foreground hover:bg-accent/90 transition-colors"
                >
                  Partner With Us
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>
    </main>
  );
}
