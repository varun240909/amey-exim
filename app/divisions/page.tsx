"use client";

import Link from "next/link";
import { FlaskConical, Wheat, Sparkles, Globe2, Award, ArrowUpRight } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { useInView } from "@/hooks/use-animations";
import { useEffect, useRef, useState } from "react";

// ─── Marquee-style scrolling ticker for certification badges ─────────────────
function CertificationTicker({ certs }: { certs: string[] }) {
  const doubled = [...certs, ...certs]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-3 w-max"
        style={{
          animation: "marquee 20s linear infinite",
        }}
      >
        {doubled.map((cert, i) => (
          <span
            key={i}
            className="flex-shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70"
          >
            {cert}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ─── Slide-up label with stagger ─────────────────────────────────────────────
function AnimatedLabel({ text, delay = 0 }: { text: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <span
      ref={ref}
      className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {text}
    </span>
  );
}

const divisions = [
  {
    title: "Pharmaceutical",
    badge: "Precision",
    description:
      "Rigorous compliance, pharmaceutical-grade quality assurance, and FDA/WHO certified manufacturing processes.",
    highlights: [
      "FDA, EMA & WHO certifications",
      "Pharmaceutical-grade manufacturing",
      "Full regulatory compliance",
      "Quality control at every step",
    ],
    image: "/images/pharma-division.png",
    href: "/pharmaceutical",
    fallbackGradient: "linear-gradient(135deg, #0F1729 0%, #1E3A5F 100%)",
    Icon: FlaskConical,
    revealFrom: "left" as const,
  },
  {
    title: "Agricultural",
    badge: "Excellence",
    description:
      "Organic and premium crops sourced from verified farms worldwide with complete traceability and sustainability certification.",
    highlights: [
      "Organic & conventional crops",
      "Farm-to-table traceability",
      "Sustainability certifications",
      "Climate-controlled storage",
    ],
    image: "/images/agri-division.png",
    href: "/agricultural",
    fallbackGradient: "linear-gradient(135deg, #14532D 0%, #166534 100%)",
    Icon: Wheat,
    revealFrom: "up" as const,
  },
  {
    title: "Cosmetic",
    badge: "Innovation",
    description:
      "Luxury cosmetic and beauty products with innovative formulations, safety testing, and international beauty standards compliance.",
    highlights: [
      "Dermatology-tested formulations",
      "Safety compliance certifications",
      "Luxury & premium brands",
      "International beauty standards",
    ],
    image: "/images/cosmetic-division.png",
    href: "/cosmetic",
    fallbackGradient: "linear-gradient(135deg, #4C1D95 0%, #6D28D9 100%)",
    Icon: Sparkles,
    revealFrom: "right" as const,
  },
];

const certs = ["FDA", "WHO", "ISO 9001", "GMP", "Fair Trade", "ISO 22000", "EMA Compliant", "FSSC 22000"];

export default function DivisionsPage() {
  // ── Extract Icon components into uppercase variables so JSX can render them ──
  const PharmaIcon = divisions[0].Icon;
  const AgriIcon = divisions[1].Icon;
  const CosmeticIcon = divisions[2].Icon;

  return (
    <main>
      {/* ─── Intro ─────────────────────────────────────────────────────── */}
      <section className="px-6 pt-32 pb-12 md:px-12 md:pt-40 lg:px-20">
        <div className="flex items-center gap-3 mb-6">
          <AnimatedLabel text="Our Divisions" delay={0} />
          <div
            className="h-px flex-1 max-w-[60px] bg-accent animate-line-draw"
            style={{ animationDelay: "0.3s" }}
          />
        </div>

        <h1
          className="max-w-3xl text-4xl font-medium tracking-tighter md:text-5xl lg:text-6xl animate-text-reveal"
          style={{ animationDelay: "0.2s" }}
        >
          Three Expert Divisions.
        </h1>
        <p
          className="mt-4 max-w-xl text-lg text-muted-foreground animate-reveal-up opacity-0"
          style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
        >
          Each division maintains the highest international standards with specialized expertise
          and rigorous quality control.
        </p>
      </section>

      {/* ─── Division Portfolio Bento ────────────────────────────────────── */}
      <section className="px-6 pb-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 auto-rows-[minmax(300px,auto)]">

          {/* Pharmaceutical — 2×2, left slide */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            bgImage={divisions[0].image}
            altText="AMEY EXIM Pharmaceutical manufacturing facility with FDA-certified labs"
            fallbackGradient={divisions[0].fallbackGradient}
            gradientOverlay="bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent"
            revealFrom={divisions[0].revealFrom}
            revealDelay={0}
          >
            <div className="flex flex-col justify-end h-full gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                <PharmaIcon size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <span className="self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                {divisions[0].badge}
              </span>
              <h2 className="text-2xl font-semibold tracking-tighter md:text-3xl">
                {divisions[0].title} Division
              </h2>
              <p className="text-sm leading-relaxed text-white/70">{divisions[0].description}</p>
              <ul className="space-y-1">
                {divisions[0].highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-xs text-white/60">
                    <span className="text-accent">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={divisions[0].href}
                className="mt-2 inline-flex items-center gap-1.5 self-start rounded-full bg-accent px-4 py-2 text-xs font-medium text-foreground hover:bg-accent/90 transition-colors"
              >
                Explore Division
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </BentoCard>

          {/* Agricultural — 2×1, up slide */}
          <BentoCard
            colSpan={2}
            rowSpan={1}
            bgImage={divisions[1].image}
            altText="AMEY EXIM premium agricultural products sourced from verified organic farms"
            fallbackGradient={divisions[1].fallbackGradient}
            gradientOverlay="bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent"
            revealFrom={divisions[1].revealFrom}
            revealDelay={100}
          >
            <div className="flex flex-col justify-end h-full gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                <AgriIcon size={18} className="text-accent" strokeWidth={1.5} />
              </div>
              <span className="self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                {divisions[1].badge}
              </span>
              <h2 className="text-xl font-semibold tracking-tighter">{divisions[1].title} Division</h2>
              <p className="text-xs leading-relaxed text-white/70 max-w-xs">{divisions[1].description}</p>
              <Link
                href={divisions[1].href}
                className="inline-flex items-center gap-1.5 self-start rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-medium text-white hover:bg-white/20 transition-colors"
              >
                Explore Division <ArrowUpRight size={11} />
              </Link>
            </div>
          </BentoCard>

          {/* Cosmetic — 2×1, right slide */}
          <BentoCard
            colSpan={2}
            rowSpan={1}
            bgImage={divisions[2].image}
            altText="AMEY EXIM luxury cosmetic and beauty product range with innovative formulations"
            fallbackGradient={divisions[2].fallbackGradient}
            gradientOverlay="bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent"
            revealFrom={divisions[2].revealFrom}
            revealDelay={200}
          >
            <div className="flex flex-col justify-end h-full gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                <CosmeticIcon size={18} className="text-accent" strokeWidth={1.5} />
              </div>
              <span className="self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                {divisions[2].badge}
              </span>
              <h2 className="text-xl font-semibold tracking-tighter">{divisions[2].title} Division</h2>
              <p className="text-xs leading-relaxed text-white/70 max-w-xs">{divisions[2].description}</p>
              <Link
                href={divisions[2].href}
                className="inline-flex items-center gap-1.5 self-start rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-medium text-white hover:bg-white/20 transition-colors"
              >
                Explore Division <ArrowUpRight size={11} />
              </Link>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ─── Stats + Compliance Bento ─────────────────────────────────────── */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

          {/* Stats */}
          {[
            { stat: "1000+", label: "Export Products" },
            { stat: "50+", label: "Countries Served" },
          ].map((tile, idx) => (
            <BentoCard
              key={tile.label}
              colSpan={1}
              rowSpan={1}
              revealFrom="scale"
              revealDelay={idx * 80}
              className="bg-secondary text-center items-center"
            >
              <div className="flex flex-col items-center gap-2 py-2 w-full">
                <span className="text-4xl font-bold text-accent">{tile.stat}</span>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {tile.label}
                </p>
              </div>
            </BentoCard>
          ))}

          {/* Certification ticker tile — 2 cols */}
          <BentoCard
            colSpan={2}
            rowSpan={1}
            revealFrom="up"
            revealDelay={160}
            className="bg-foreground text-white overflow-hidden"
          >
            <div className="flex flex-col h-full gap-4 justify-between">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-accent" strokeWidth={1.5} />
                <h3 className="text-base font-semibold">Global Compliance Standards</h3>
              </div>
              <CertificationTicker certs={certs} />
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 self-start rounded-full bg-accent px-4 py-2 text-xs font-medium text-foreground hover:bg-accent/90 transition-colors"
              >
                Find Your Products <ArrowUpRight size={11} />
              </Link>
            </div>
          </BentoCard>
        </div>
      </section>
    </main>
  );
}