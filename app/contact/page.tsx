"use client";

import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/inquiry-form";
import { BentoCard } from "@/components/ui/bento-card";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowUpRight,
  FlaskConical,
  Wheat,
  Sparkles,
  Globe2,
  ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Metadata } from "next";

// ─── Slide-up label (identical to divisions page) ────────────────────────────
function AnimatedLabel({ text, delay = 0 }: { text: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
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

// ─── Accordion FAQ item ───────────────────────────────────────────────────────
function FaqItem({ question, answer, delay = 0 }: { question: string; answer: string; delay?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-border last:border-0"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-medium text-foreground">{question}</span>
        <ChevronDown
          size={16}
          className="flex-shrink-0 text-muted-foreground transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className="overflow-hidden text-sm text-muted-foreground leading-relaxed"
        style={{
          maxHeight: open ? "200px" : "0",
          opacity: open ? 1 : 0,
          paddingBottom: open ? "20px" : "0",
          transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease, padding-bottom 0.3s ease",
        }}
      >
        {answer}
      </div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const contactTiles = [
  {
    Icon: MapPin,
    title: "Headquarters",
    lines: ["AMEY EXIM Company", "New Delhi, India"],
    revealFrom: "left" as const,
  },
  {
    Icon: Mail,
    title: "Email",
    lines: ["info@ameyexim.com", "sales@ameyexim.com"],
    revealFrom: "up" as const,
  },
  {
    Icon: Phone,
    title: "Phone",
    lines: ["+91 (11) XXXX-XXXX", "+1-800-AMEY-EXP"],
    revealFrom: "up" as const,
  },
  {
    Icon: Clock,
    title: "Office Hours",
    lines: ["Mon–Fri  9 AM – 6 PM IST", "Sat  10 AM – 4 PM IST"],
    revealFrom: "right" as const,
  },
];

const divisionContacts = [
  {
    Icon: FlaskConical,
    division: "Pharmaceutical",
    email: "pharma@ameyexim.com",
    focus: "APIs, finished dosages, nutraceuticals",
    gradient: "linear-gradient(135deg, #0F1729 0%, #1E3A5F 100%)",
  },
  {
    Icon: Wheat,
    division: "Agricultural",
    email: "agri@ameyexim.com",
    focus: "Crops, spices, organic products",
    gradient: "linear-gradient(135deg, #14532D 0%, #166534 100%)",
  },
  {
    Icon: Sparkles,
    division: "Cosmetic",
    email: "cosmetic@ameyexim.com",
    focus: "Beauty, skincare, personal care",
    gradient: "linear-gradient(135deg, #4C1D95 0%, #6D28D9 100%)",
  },
];

const reasons = [
  "Decades of export expertise",
  "Global network and reach",
  "99.8% quality rating",
  "Complete transparency",
  "Fair pricing and terms",
  "24/7 dedicated support",
  "Customised solutions",
  "Fast response times",
];

const faqs = [
  {
    question: "What is your minimum order quantity?",
    answer: "MOQs vary by product and division. Contact us with specific product interests for customised quotes tailored to your requirements.",
  },
  {
    question: "How long is your lead time?",
    answer: "Standard lead time is 30–45 days. Expedited orders may be available for additional fees depending on stock availability.",
  },
  {
    question: "Do you offer samples?",
    answer: "Yes, we provide samples for qualified inquiries. Contact our sales team for a sample request and we'll respond within 48 hours.",
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment options including L/C, T/T, and other arrangements based on credit history and order volume.",
  },
  {
    question: "Do you provide certifications?",
    answer: "All products come with complete certifications including COA, compliance documents, and full traceability records.",
  },
  {
    question: "Can you customise products?",
    answer: "Yes, we offer customisation services for packaging, labelling, and formulations where applicable across all three divisions.",
  },
];

export default function ContactPage() {
  // Extract division icons into uppercase vars for JSX
  const PharmaIcon = divisionContacts[0].Icon;
  const AgriIcon = divisionContacts[1].Icon;
  const CosmeticIcon = divisionContacts[2].Icon;
  const divisionIcons = [PharmaIcon, AgriIcon, CosmeticIcon];

  return (
    <main>
      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pain-points-communication.png"
            alt="Contact AMEY EXIM"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />
        </div>

        <div className="relative z-10 flex h-[60vh] flex-col items-start justify-center px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium uppercase tracking-widest text-white/50">
                Get in Touch
              </span>
              <div className="h-px w-[60px] bg-accent" />
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tighter text-white mb-4 animate-text-reveal"
              style={{ animationDelay: "0.2s" }}
            >
              Contact AMEY EXIM
            </h1>
            <p
              className="text-lg text-white/70 max-w-md animate-reveal-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Ready to discuss your sourcing needs or partnership opportunities? Our team responds within 24 hours.
            </p>
            <a
              href="#contact-form"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-foreground hover:bg-accent/90 transition-colors animate-reveal-up opacity-0"
              style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
            >
              Send Inquiry <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Contact Info Bento ────────────────────────────────────────────── */}
      <section className="px-6 pt-20 pb-8 md:px-12 lg:px-20">
        <div className="flex items-center gap-3 mb-10">
          <AnimatedLabel text="Reach Us" delay={0} />
          <div className="h-px flex-1 max-w-[60px] bg-accent" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {contactTiles.map((tile, idx) => {
            const TileIcon = tile.Icon;
            return (
              <BentoCard
                key={tile.title}
                colSpan={1}
                rowSpan={1}
                revealFrom={tile.revealFrom}
                revealDelay={idx * 80}
                className="bg-secondary"
              >
                <div className="flex flex-col gap-4 h-full justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-foreground/10 border border-foreground/10">
                    <TileIcon size={18} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                      {tile.title}
                    </p>
                    {tile.lines.map((line) => (
                      <p key={line} className="text-sm text-foreground leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </section>

      {/* ─── Division Contacts Bento ───────────────────────────────────────── */}
      <section className="px-6 py-8 md:px-12 lg:px-20">
        <div className="flex items-center gap-3 mb-10">
          <AnimatedLabel text="Division Contacts" delay={0} />
          <div className="h-px flex-1 max-w-[60px] bg-accent" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Large left tile — globe / regions */}
          <BentoCard
            colSpan={1}
            rowSpan={1}
            revealFrom="left"
            revealDelay={0}
            className="bg-foreground text-white"
          >
            <div className="flex flex-col gap-4 h-full justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                <Globe2 size={18} className="text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-2">
                  Regional Offices
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  North America · Europe · Middle East · Asia-Pacific · Africa
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 self-start rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-medium text-white hover:bg-white/20 transition-colors"
              >
                Our Reach <ArrowUpRight size={11} />
              </Link>
            </div>
          </BentoCard>

          {/* Three division cards */}
          {divisionContacts.map((div, idx) => {
            const DivIcon = divisionIcons[idx];
            return (
              <BentoCard
                key={div.division}
                colSpan={1}
                rowSpan={1}
                fallbackGradient={div.gradient}
                gradientOverlay="bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent"
                revealFrom="up"
                revealDelay={(idx + 1) * 90}
              >
                <div className="flex flex-col gap-4 h-full justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                    <DivIcon size={18} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1">{div.division}</h3>
                    <p className="text-xs text-black/70 mb-1">{div.focus}</p>
                    <p className="text-xs text-accent/80">{div.email}</p>
                  </div>
                  <a
                    href={`mailto:${div.email}`}
                    className="inline-flex items-center gap-1.5 self-start rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-medium text-white hover:bg-white/20 transition-colors"
                  >
                    Email Division <ArrowUpRight size={11} />
                  </a>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </section>

      {/* ─── Inquiry Form + Why Us Bento ──────────────────────────────────── */}
      <section id="contact-form" className="px-6 py-8 md:px-12 lg:px-20">
        <div className="flex items-center gap-3 mb-10">
          <AnimatedLabel text="Send Inquiry" delay={0} />
          <div className="h-px flex-1 max-w-[60px] bg-accent" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 auto-rows-[minmax(0,auto)]">
          {/* Form — 3 cols */}
          <BentoCard
            colSpan={3}
            rowSpan={1}
            revealFrom="left"
            revealDelay={0}
            className="bg-secondary"
          >
            <div className="flex flex-col gap-6 w-full">
              <div>
                <h2 className="text-xl font-semibold tracking-tighter text-foreground">
                  Send us Your Inquiry
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  We'll respond with a personalised quote within 24 hours.
                </p>
              </div>
              <InquiryForm />
            </div>
          </BentoCard>

          {/* Why us — 1 col */}
          <BentoCard
            colSpan={1}
            rowSpan={1}
            revealFrom="right"
            revealDelay={100}
            className="bg-foreground text-white"
          >
            <div className="flex flex-col gap-5 h-full">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-1">
                  Why Choose Us
                </p>
                <h3 className="text-base font-semibold text-white">
                  Why Partner With AMEY EXIM?
                </h3>
              </div>
              <ul className="flex flex-col gap-3 flex-1">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-xs text-white/70">
                    <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ─── FAQ Bento ────────────────────────────────────────────────────── */}
      <section className="px-6 py-8 pb-24 md:px-12 lg:px-20">
        <div className="flex items-center gap-3 mb-10">
          <AnimatedLabel text="Common Questions" delay={0} />
          <div className="h-px flex-1 max-w-[60px] bg-accent" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Heading tile — 2 cols */}
          <BentoCard
            colSpan={2}
            rowSpan={1}
            revealFrom="left"
            revealDelay={0}
            className="bg-foreground text-white"
          >
            <div className="flex flex-col justify-between h-full gap-6">
              <div>
                <span className="self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent mb-4 inline-block">
                  FAQ
                </span>
                <h2 className="text-2xl font-semibold tracking-tighter md:text-3xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-sm text-white/60">
                  Can't find your answer? Contact our team directly and we'll get back to you.
                </p>
              </div>
              <a
                href="mailto:info@ameyexim.com"
                className="inline-flex items-center gap-1.5 self-start rounded-full bg-accent px-4 py-2 text-xs font-medium text-foreground hover:bg-accent/90 transition-colors"
              >
                Ask Us Directly <ArrowUpRight size={11} />
              </a>
            </div>
          </BentoCard>

          {/* FAQ accordion — 2 cols */}
          <BentoCard
            colSpan={2}
            rowSpan={1}
            revealFrom="right"
            revealDelay={100}
            className="bg-secondary"
          >
            <div className="w-full divide-y divide-border">
              {faqs.map((faq, idx) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  delay={idx * 60}
                />
              ))}
            </div>
          </BentoCard>
        </div>
      </section>
    </main>
  );
}