"use client";

import {
  Sun,
  Recycle,
  Droplets,
  PackageOpen,
  TreePine,
  Ship,
  Users,
  GraduationCap,
  HeartPulse,
  TrendingUp,
  Sprout,
  Goal,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { BentoCard } from "@/components/ui/bento-card";
import { useParallax, useInView, useAnimatedCounter } from "@/hooks/use-animations";

// ─── Animated progress bar ────────────────────────────────────────────────────
function ProgressBar({ label, value, unit = "%", delay = 0 }: { label: string; value: number; unit?: string; delay?: number }) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const { ref: cRef, count } = useAnimatedCounter(value, 1600);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-foreground">{label}</span>
        <span
          ref={cRef}
          className="text-xs font-bold text-accent"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {count}{unit}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full bg-accent"
          style={{
            width: isInView ? `${value}%` : "0%",
            transition: `width 1.5s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

// ─── Parallax image tile ──────────────────────────────────────────────────────
function ParallaxImageTile({
  src,
  alt,
  fallback,
  children,
}: {
  src: string;
  alt: string;
  fallback: string;
  children: React.ReactNode;
}) {
  const { ref, offsetY } = useParallax(0.08);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-3xl border border-border min-h-[280px] flex flex-col justify-end"
      style={{ background: fallback }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          style={{ transform: `translateY(${offsetY}px)`, willChange: "transform" }}
          className="absolute inset-[-10%] h-[120%]"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent" />
      <div className="relative z-20 p-6 text-white">{children}</div>
    </div>
  );
}

// ─── Animated stat counter tile ───────────────────────────────────────────────
function ImpactStat({ value, suffix, label, delay = 0 }: { value: number; suffix: string; label: string; delay?: number }) {
  const { ref, count } = useAnimatedCounter(value, 2000);
  return (
    <BentoCard colSpan={1} rowSpan={1} revealFrom="scale" revealDelay={delay} className="bg-secondary text-center items-center">
      <div ref={ref} className="flex flex-col items-center gap-2 py-2 w-full">
        <span className="text-4xl font-bold text-accent md:text-5xl" style={{ fontVariantNumeric: "tabular-nums" }}>
          {count}{suffix}
        </span>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      </div>
    </BentoCard>
  );
}

const environmentalItems = [
  { title: "Renewable Energy", description: "Solar & renewable sources reducing carbon footprint by 40%.", Icon: Sun },
  { title: "Waste Reduction", description: "90% waste diversion through recycling and composting.", Icon: Recycle },
  { title: "Water Conservation", description: "Advanced water management reducing consumption by 35%.", Icon: Droplets },
  { title: "Sustainable Packaging", description: "Biodegradable & recyclable materials for 100% of packaging.", Icon: PackageOpen },
  { title: "Carbon Offset", description: "Reforestation and renewable energy project investments.", Icon: TreePine },
  { title: "Green Logistics", description: "Eco-friendly shipping partnerships and optimized routing.", Icon: Ship },
];

const socialItems = [
  { title: "Farmer Support", description: "Training, resources, and market access for agricultural partners.", Icon: Sprout },
  { title: "Women Empowerment", description: "Leadership and financing programs for women farmers.", Icon: Users },
  { title: "Community Education", description: "Scholarships and skill development for local communities.", Icon: GraduationCap },
  { title: "Healthcare Access", description: "Wellness programs for workers and their families.", Icon: HeartPulse },
];

const goals2030 = [
  "Carbon Neutrality in Operations",
  "100% Sustainable Sourcing",
  "Zero Waste to Landfill",
  "Complete Renewable Energy",
  "Gender Parity in Leadership",
  "Zero Human Rights Violations",
];

const supplyChainSteps = [
  { step: "01", title: "Supplier Sustainability Audits", description: "Regular assessments of environmental and social practices." },
  { step: "02", title: "Traceability & Transparency", description: "Complete supply chain visibility ensuring ethical sourcing." },
  { step: "03", title: "Capacity Building", description: "Helping suppliers implement sustainable practices." },
  { step: "04", title: "Responsible Procurement", description: "Prioritizing suppliers meeting our ethical standards." },
];

const certifications = ["ISO 14001", "ISO 26000", "Fair Trade Certified", "Global Organic", "Carbon Trust", "B Corp (in progress)"];

export default function SustainabilityPage() {
  return (
    <main>
      {/* ─── Intro ─────────────────────────────────────────────────────── */}
      <section className="px-6 pt-32 pb-12 md:px-12 md:pt-40 lg:px-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground animate-text-reveal" style={{ animationDelay: "0.1s" }}>
            Sustainability
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-accent animate-line-draw" style={{ animationDelay: "0.35s" }} />
        </div>
        <h1 className="max-w-3xl text-4xl font-medium tracking-tighter md:text-5xl lg:text-6xl animate-text-reveal" style={{ animationDelay: "0.2s" }}>
          Responsibility. Planet. Future.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground animate-reveal-up opacity-0" style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}>
          Environmental stewardship and social responsibility woven into every operation. By 2030, carbon neutrality and 100% sustainable sourcing.
        </p>
      </section>

      {/* ─── Primary Grid: 2030 Goals + Parallax tiles ───────────────────── */}
      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 auto-rows-[minmax(280px,auto)]">

          {/* 2030 Goals — 2×2 */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            bgImage="/images/sustainability-eco.png"
            altText="AMEY EXIM 2030 sustainability goals — carbon neutral operations and 100% sustainable sourcing"
            fallbackGradient="linear-gradient(135deg, #14532D 0%, #166534 100%)"
            gradientOverlay="bg-gradient-to-t from-foreground/95 via-foreground/60 to-transparent"
            revealFrom="left"
            revealDelay={0}
            className="min-h-[400px]"
          >
            <div className="flex flex-col justify-end h-full gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                <Goal size={18} className="text-accent" strokeWidth={1.5} />
              </div>
              <span className="self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                2030 Roadmap
              </span>
              <h2 className="text-2xl font-semibold tracking-tighter md:text-3xl">Our Sustainability Goals</h2>
              <p className="text-sm leading-relaxed text-white/70">Measurable commitments across environmental and social dimensions.</p>
              <ul className="grid grid-cols-1 gap-2">
                {goals2030.map((goal) => (
                  <li key={goal} className="flex gap-2 items-center text-xs text-white/70">
                    <span className="text-accent font-bold flex-shrink-0">✓</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BentoCard>

          {/* Parallax — Energy metrics (2×1) */}
          <div className="md:col-span-2">
            <BentoCard colSpan={2} rowSpan={1} revealFrom="right" revealDelay={80} className="bg-secondary h-full">
              <div className="flex flex-col gap-5 h-full">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 mb-3">
                    <Sun size={18} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Clean Energy & Environment</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Solar-powered facilities and advanced water management reducing our environmental footprint.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <ProgressBar label="Carbon Reduction" value={40} delay={0} />
                  <ProgressBar label="Water Saved" value={35} delay={150} />
                  <ProgressBar label="Waste Diverted" value={90} delay={300} />
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Parallax social impact image tile (2×1) */}
          <div className="md:col-span-2">
            <ParallaxImageTile
              src="/images/agri-division.png"
              alt="AMEY EXIM social impact — farmer support and community development programs"
              fallback="linear-gradient(135deg, #0F1729 0%, #1E3A5F 100%)"
            >
              <span className="self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent mb-3 inline-block">
                Social Impact
              </span>
              <h3 className="text-lg font-semibold tracking-tighter mb-3">5000+ Lives Impacted</h3>
              <div className="grid grid-cols-2 gap-2">
                {socialItems.map((item) => (
                  <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <item.Icon size={12} className="text-accent" strokeWidth={1.5} />
                      <p className="text-xs font-semibold text-white">{item.title}</p>
                    </div>
                    <p className="text-xs text-white/50 line-clamp-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </ParallaxImageTile>
          </div>
        </div>
      </section>

      {/* ─── Environmental Initiatives Grid ────────────────────────────────── */}
      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {environmentalItems.map((item, idx) => (
            <BentoCard
              key={item.title}
              colSpan={1}
              rowSpan={1}
              revealFrom={idx % 2 === 0 ? "up" : "scale"}
              revealDelay={idx * 60}
              className="bg-secondary md:col-span-1 lg:col-span-2"
            >
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10">
                  <item.Icon size={18} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* ─── Supply Chain + Certifications Bento ─────────────────────────── */}
      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Supply Chain (2×1) */}
          <BentoCard colSpan={2} rowSpan={1} revealFrom="left" revealDelay={0} className="bg-secondary">
            <div className="flex flex-col gap-4 h-full">
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-accent" strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-foreground">Sustainable Supply Chain</h3>
              </div>
              <div className="flex flex-col gap-3">
                {supplyChainSteps.map((item, idx) => (
                  <div
                    key={item.step}
                    className="flex gap-3 items-start opacity-0 animate-reveal-up"
                    style={{ animationDelay: `${0.1 + idx * 0.12}s`, animationFillMode: "forwards" }}
                  >
                    <span className="text-xs font-bold text-accent flex-shrink-0 mt-0.5">{item.step}</span>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Certifications (2×1) */}
          <BentoCard colSpan={2} rowSpan={1} revealFrom="right" revealDelay={100} className="bg-foreground text-white">
            <div className="flex flex-col gap-4 h-full justify-between">
              <h3 className="text-base font-semibold">Sustainability Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span key={cert} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
                    {cert}
                  </span>
                ))}
              </div>
              <a href="/contact" className="mt-auto inline-flex items-center gap-1.5 self-start rounded-full bg-accent px-4 py-2 text-xs font-medium text-foreground hover:bg-accent/90 transition-colors">
                Join Our Journey <ArrowRight size={12} />
              </a>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ─── Impact Stats Row ─────────────────────────────────────────────── */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <ImpactStat value={40} suffix="%" label="Carbon Reduction" delay={0} />
          <ImpactStat value={90} suffix="%" label="Waste Diverted" delay={100} />
          <ImpactStat value={35} suffix="%" label="Water Saved" delay={200} />
          <ImpactStat value={5000} suffix="+" label="Lives Impacted" delay={300} />
        </div>
      </section>
    </main>
  );
}
