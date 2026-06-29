"use client";

import {
  MessageSquare,
  SearchCheck,
  PackageSearch,
  FlaskConical,
  FileCheck2,
  ClipboardCheck,
  Package,
  Warehouse,
  Ship,
  HeartHandshake,
  Shield,
  CheckCircle2,
  Star,
  ArrowRight,
} from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { useEffect, useRef, useState } from "react";

// ─── Sequential step reveal inside a phase card ───────────────────────────────
function PhaseStepList({
  steps,
  inView,
}: {
  steps: { number: string; title: string; detail: string; Icon: React.ElementType }[];
  inView: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      {steps.map((step, idx) => (
        <div
          key={step.number}
          className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/10"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-20px)",
            transition: `opacity 0.5s ease ${0.3 + idx * 0.12}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${0.3 + idx * 0.12}s`,
          }}
        >
          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
            <step.Icon size={13} className="text-accent" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">{step.title}</p>
            <p className="text-xs text-white/50 mt-0.5 line-clamp-2">{step.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Phase card (observes its own visibility to trigger step list reveals) ────
function PhaseCard({
  phase,
  title,
  description,
  steps,
  image,
  fallbackGradient,
  revealDelay,
  colSpan,
  rowSpan,
  revealFrom,
}: {
  phase: string;
  title: string;
  description: string;
  steps: { number: string; title: string; detail: string; Icon: React.ElementType }[];
  image: string;
  fallbackGradient: string;
  revealDelay: number;
  colSpan: 1 | 2 | 3 | 4;
  rowSpan: 1 | 2 | 3;
  revealFrom: "up" | "down" | "left" | "right" | "scale" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setInView(true), revealDelay + 100); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [revealDelay]);

  return (
    <div ref={ref}>
      <BentoCard
        colSpan={colSpan}
        rowSpan={rowSpan}
        bgImage={image}
        altText={`AMEY EXIM ${title} phase`}
        fallbackGradient={fallbackGradient}
        gradientOverlay={colSpan === 2 && rowSpan === 1
          ? "bg-gradient-to-r from-foreground/95 via-foreground/70 to-foreground/20"
          : "bg-gradient-to-t from-foreground/98 via-foreground/65 to-transparent"}
        revealFrom={revealFrom}
        revealDelay={revealDelay}
      >
        {colSpan >= 2 && rowSpan === 1 ? (
          // Wide layout — horizontal split
          <div className="flex flex-col md:flex-row gap-6 h-full justify-between">
            <div className="flex flex-col justify-end gap-3 md:max-w-sm">
              <span className="self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                {phase}
              </span>
              <h2 className="text-2xl font-semibold tracking-tighter md:text-3xl">{title}</h2>
              <p className="text-sm leading-relaxed text-white/70">{description}</p>
            </div>
            <div className="flex flex-col justify-end md:max-w-xs w-full">
              <PhaseStepList steps={steps} inView={inView} />
            </div>
          </div>
        ) : (
          // Tall layout — vertical stack
          <div className="flex flex-col justify-end h-full gap-4">
            <span className="self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
              {phase}
            </span>
            <h2 className="text-xl font-semibold tracking-tighter md:text-2xl">{title}</h2>
            <p className="text-sm leading-relaxed text-white/70">{description}</p>
            <PhaseStepList steps={steps} inView={inView} />
          </div>
        )}
      </BentoCard>
    </div>
  );
}

const phases = [
  {
    phase: "Phase 01",
    title: "Sourcing & Consulting",
    description: "Deep consultation, supplier audits, and premium product selection.",
    steps: [
      { number: "01", title: "Partnership Consultation", detail: "Requirement gathering, market analysis, feasibility, and agreement finalization.", Icon: MessageSquare },
      { number: "02", title: "Supplier Verification", detail: "Facility audits, certification checks, and production capacity assessments.", Icon: SearchCheck },
      { number: "03", title: "Product Selection", detail: "Premium sourcing, batch grading, sample evaluation, specification confirmation.", Icon: PackageSearch },
    ],
    image: "/images/promise-timeline-step1.png",
    fallbackGradient: "linear-gradient(135deg, #0F1729 0%, #1E3A5F 100%)",
    colSpan: 2 as const,
    rowSpan: 1 as const,
    revealFrom: "left" as const,
    revealDelay: 0,
  },
  {
    phase: "Phase 02",
    title: "Quality & Compliance",
    description: "Comprehensive laboratory testing, full certifications, and final QA review.",
    steps: [
      { number: "04", title: "Laboratory Testing", detail: "Quality testing, contamination screening, safety compliance, performance validation.", Icon: FlaskConical },
      { number: "05", title: "Certification Process", detail: "ISO & international certifications, regulatory compliance, export permits.", Icon: FileCheck2 },
      { number: "06", title: "Quality Assurance Review", detail: "Final quality inspection, documentation completeness, packaging integrity.", Icon: ClipboardCheck },
    ],
    image: "/images/pain-points-quality.png",
    fallbackGradient: "linear-gradient(135deg, #1E3A5F 0%, #0F1729 100%)",
    colSpan: 1 as const,
    rowSpan: 1 as const,
    revealFrom: "up" as const,
    revealDelay: 100,
  },
  {
    phase: "Phase 03",
    title: "Secure Fulfillment",
    description: "Professional packaging, climate warehousing, international shipping, and post-delivery support.",
    steps: [
      { number: "07", title: "Packaging & Labeling", detail: "Secure packaging, traceability codes, multilingual labeling, tamper sealing.", Icon: Package },
      { number: "08", title: "Warehouse Management", detail: "Climate control, inventory tracking systems, storage condition monitoring.", Icon: Warehouse },
      { number: "09", title: "Shipping & Logistics", detail: "Carrier selection, real-time tracking, customs documentation, insurance.", Icon: Ship },
      { number: "10", title: "Post-Delivery Support", detail: "Delivery confirmation, feedback collection, issue resolution, loyalty program.", Icon: HeartHandshake },
    ],
    image: "/images/global-shipping.png",
    fallbackGradient: "linear-gradient(135deg, #0F1729 0%, #1a2e4a 100%)",
    colSpan: 1 as const,
    rowSpan: 1 as const,
    revealFrom: "right" as const,
    revealDelay: 200,
  },
];

const badges = [
  { Icon: Shield, title: "Zero Counterfeit Guarantee", description: "Every product traced from source to delivery with verification at each step." },
  { Icon: CheckCircle2, title: "Complete Compliance", description: "All international standards, certifications, and regulations met without exception." },
  { Icon: Star, title: "99.8% Quality Rating", description: "Multiple testing phases ensuring our industry-leading quality benchmark." },
];

export default function ProcessPage() {
  return (
    <main>
      {/* ─── Intro ─────────────────────────────────────────────────────── */}
      <section className="px-6 pt-32 pb-12 md:px-12 md:pt-40 lg:px-20">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground animate-text-reveal"
            style={{ animationDelay: "0.1s" }}
          >
            Our Process
          </span>
          <div
            className="h-px flex-1 max-w-[60px] bg-accent animate-line-draw"
            style={{ animationDelay: "0.35s" }}
          />
        </div>

        <h1
          className="max-w-3xl text-4xl font-medium tracking-tighter md:text-5xl lg:text-6xl animate-text-reveal"
          style={{ animationDelay: "0.2s" }}
        >
          10 Steps. Zero Compromise.
        </h1>
        <p
          className="mt-4 max-w-xl text-lg text-muted-foreground animate-reveal-up opacity-0"
          style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
        >
          From initial consultation to post-delivery support — a comprehensive three-phase process
          delivering excellence at every stage of your export journey.
        </p>

        {/* Phase progress indicator */}
        <div
          className="mt-8 flex items-center gap-0 animate-reveal-up opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          {["Sourcing", "Quality", "Fulfillment"].map((label, idx) => (
            <div key={label} className="flex items-center gap-0">
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 border border-accent/40 text-xs font-bold text-accent">
                  {idx + 1}
                </div>
                <span className="text-xs text-muted-foreground hidden md:block">{label}</span>
              </div>
              {idx < 2 && (
                <div
                  className="h-px w-16 bg-border mx-2 animate-line-draw"
                  style={{ animationDelay: `${0.8 + idx * 0.2}s` }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── Phase Bento Grid ────────────────────────────────────────────── */}
      <section className="px-6 pb-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 auto-rows-[minmax(380px,auto)]">
          {phases.map((phase) => (
            <PhaseCard key={phase.phase} {...phase} />
          ))}
        </div>
      </section>

      {/* ─── Promise Badges ───────────────────────────────────────────────── */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {badges.map((badge, idx) => (
            <BentoCard
              key={badge.title}
              colSpan={1}
              rowSpan={1}
              revealFrom="scale"
              revealDelay={idx * 100}
              className="bg-secondary"
            >
              <div className="flex flex-col gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10">
                  <badge.Icon size={20} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{badge.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{badge.description}</p>
              </div>
            </BentoCard>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-4">
          <BentoCard
            colSpan={1}
            rowSpan={1}
            revealFrom="up"
            revealDelay={350}
            className="bg-foreground text-white text-center items-center animate-border-glow"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              <h3 className="text-xl font-medium">Ready to Experience Our Process?</h3>
              <p className="text-sm text-white/70 max-w-md">
                Start your partnership today and discover the difference quality and transparency make.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2 text-sm font-medium text-foreground hover:bg-accent/90 transition-colors"
              >
                Begin Your Journey <ArrowRight size={14} />
              </a>
            </div>
          </BentoCard>
        </div>
      </section>
    </main>
  );
}
