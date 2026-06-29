import { BentoCard } from '@/components/ui/bento-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality Assurance | International Standards | AMEY EXIM',
  description: 'AMEY EXIM comprehensive quality assurance standards, testing protocols, international certifications, and 99.8% quality rating across pharmaceutical, agricultural, and cosmetic products.',
  keywords: 'quality assurance, testing protocols, certifications, quality control, international standards, GMP, FDA approval, AMEY EXIM quality',
  openGraph: {
    title: 'Quality Assurance | AMEY EXIM',
    description: 'Comprehensive quality assurance standards and certifications ensuring 99.8% quality rating',
    url: 'https://amey-exim.com/quality',
    type: 'website',
  },
};

const qualityDimensions = [
  { title: 'Performance', description: 'Products deliver intended benefits and function exactly as designed and promised.', icon: '⚡' },
  { title: 'Reliability', description: 'Consistent performance and durability with minimal defects or failures.', icon: '🔒' },
  { title: 'Durability', description: 'Long shelf life, stability, and resistance to degradation over time.', icon: '⏳' },
  { title: 'Conformance', description: 'Complete adherence to specifications and regulatory requirements.', icon: '✓' },
  { title: 'Safety', description: 'Zero harmful substances, rigorous contamination prevention, health assurance.', icon: '🛡️' },
  { title: 'Support', description: 'Post-purchase support, full documentation, and resolution of any concerns.', icon: '🤝' },
];

const testingProtocols = [
  { test: 'Physical Testing', description: 'Visual inspection, size/weight verification, packaging integrity, appearance assessment.' },
  { test: 'Chemical Testing', description: 'Composition analysis, purity verification, contaminant screening, ingredient validation.' },
  { test: 'Microbiological Testing', description: 'Bacterial count analysis, pathogen screening, sterility testing, contamination detection.' },
  { test: 'Stability Testing', description: 'Long-term stability assessment, shelf-life validation, degradation monitoring.' },
  { test: 'Performance Testing', description: 'Efficacy validation, functional testing, and user safety assessment.' },
  { test: 'Environmental Testing', description: 'Temperature/humidity resistance, transportation condition simulation, durability evaluation.' },
  { test: 'Regulatory Compliance', description: 'FDA, EMA, WHO, and local regulatory requirements for international markets.' },
  { test: 'Documentation Review', description: 'Certification verification, compliance documentation audit, traceability confirmation.' },
];

const certifications = [
  'ISO 9001:2015 Quality Management',
  'ISO 14001:2015 Environmental Management',
  'ISO 45001:2018 Health & Safety',
  'FSSC 22000 Food Safety',
  'GMP (Good Manufacturing Practice)',
  'FDA Registration & Listing',
  'EMA Compliance',
  'WHO Prequalification',
  'ISO/IEC 17025 Lab Accreditation',
  'CE Marking Compliance',
];

const continuousImprovements = [
  { title: 'Regular Audits', description: 'Internal and external audits ensuring ongoing compliance and identifying improvements.' },
  { title: 'Customer Feedback', description: 'Active feedback collection driving product improvements and quality enhancements.' },
  { title: 'Supplier Collaboration', description: 'Working closely with suppliers to maintain and improve quality at the source.' },
  { title: 'Technology Adoption', description: 'Investing in advanced testing equipment and automation for superior quality.' },
  { title: 'Team Training', description: 'Continuous professional development ensuring highest expertise in quality standards.' },
  { title: 'Root Cause Analysis', description: 'Systematic investigation of any issues with corrective actions preventing recurrence.' },
];

const qualityStats = [
  { number: '99.8%', label: 'Quality Rating' },
  { number: '100%', label: 'Tested Products' },
  { number: '0', label: 'Critical Defects' },
  { number: '15+', label: 'Certifications' },
];

export default function QualityPage() {
  return (
    <main>
      {/* ─── Intro ──────────────────────────────────────────────────── */}
      <section className="px-6 pt-32 pb-12 md:px-12 md:pt-40 lg:px-20">
        <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Quality Assurance
        </p>
        <h1 className="max-w-3xl text-4xl font-medium tracking-tighter md:text-5xl lg:text-6xl">
          Excellence in Every Product.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Uncompromising commitment to quality through rigorous testing, international certifications,
          and continuous improvement. Our standards exceed industry requirements.
        </p>
      </section>

      {/* ─── Primary Control Panel Bento ────────────────────────────── */}
      <section className="px-6 pb-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 auto-rows-[minmax(280px,auto)]">

          {/* Testing Protocols — Large 2×2 */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            bgImage="/images/pain-points-quality.png"
            altText="AMEY EXIM comprehensive quality testing protocols — laboratory and compliance verification"
            fallbackGradient="linear-gradient(135deg, #0F1729 0%, #1E3A5F 100%)"
            gradientOverlay="bg-gradient-to-t from-foreground/98 via-foreground/70 to-foreground/20"
            revealDelay={0}
          >
            <div className="flex flex-col justify-end h-full gap-4">
              <span className="self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                Testing Protocols
              </span>
              <h2 className="text-2xl font-semibold tracking-tighter">8 Comprehensive Testing Layers</h2>
              <div className="flex flex-col gap-2">
                {testingProtocols.map((item) => (
                  <div key={item.test} className="flex gap-3 items-start p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-accent text-xs font-bold flex-shrink-0 mt-0.5">●</span>
                    <div>
                      <p className="text-xs font-semibold text-white">{item.test}</p>
                      <p className="text-xs text-white/50 mt-0.5 line-clamp-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Six Dimensions — 2×2 sub-grid */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            revealDelay={80}
            className="bg-secondary"
          >
            <div className="flex flex-col gap-4 h-full">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Six Dimensions of Quality</h2>
                <p className="text-sm text-muted-foreground mt-1">The pillars of our quality philosophy.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 flex-1">
                {qualityDimensions.map((dimension, idx) => (
                  <div
                    key={dimension.title}
                    className="flex flex-col gap-2 rounded-2xl bg-card border border-border p-4 hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    <span className="text-xl">{dimension.icon}</span>
                    <h3 className="text-sm font-semibold text-foreground">{dimension.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{dimension.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ─── Stats Row ──────────────────────────────────────────────── */}
      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {qualityStats.map((stat, idx) => (
            <BentoCard
              key={stat.label}
              colSpan={1}
              rowSpan={1}
              revealDelay={idx * 80}
              className="bg-secondary text-center items-center"
            >
              <div className="flex flex-col items-center gap-2 py-2 w-full">
                <span className="text-4xl font-bold text-accent md:text-5xl">{stat.number}</span>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* ─── Facilities + Certifications Bento ──────────────────────── */}
      <section className="px-6 pb-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 auto-rows-[minmax(220px,auto)]">

          {/* Testing Facilities — 2×1 */}
          <BentoCard
            colSpan={2}
            rowSpan={1}
            bgImage="/images/pharma-division.png"
            altText="AMEY EXIM state-of-the-art testing facilities with ISO/IEC 17025 accreditation"
            fallbackGradient="linear-gradient(135deg, #0F1729 0%, #1E3A5F 100%)"
            gradientOverlay="bg-gradient-to-r from-foreground/95 via-foreground/70 to-transparent"
            revealDelay={0}
          >
            <div className="flex flex-col justify-end h-full gap-3">
              <h3 className="text-xl font-semibold tracking-tighter">Accredited Testing Facilities</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                State-of-the-art laboratories equipped with advanced analytical instruments, accredited
                by leading international certification bodies with strict quality control procedures.
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {['ISO/IEC 17025', 'Advanced Analytics', 'Pharma Lab Certified', 'Microbiology Suite', 'Climate Chambers'].map((f) => (
                  <span key={f} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Certifications — 2×1 */}
          <BentoCard
            colSpan={2}
            rowSpan={1}
            revealDelay={100}
            className="bg-foreground text-white"
          >
            <div className="flex flex-col gap-4 h-full justify-between">
              <h3 className="text-xl font-semibold">Quality Certifications & Standards</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span key={cert} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70">
                    {cert}
                  </span>
                ))}
              </div>
              <a
                href="/contact"
                className="mt-auto self-start rounded-full bg-accent px-4 py-2 text-xs font-medium text-foreground hover:bg-accent/90 transition-colors"
              >
                Request Documentation →
              </a>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ─── Continuous Improvement Bento ───────────────────────────── */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Continuous Improvement
        </p>
        <h2 className="mb-10 max-w-xl text-2xl font-medium tracking-tighter md:text-3xl">
          Quality is a culture, not a department.
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {continuousImprovements.map((item, idx) => (
            <BentoCard
              key={item.title}
              colSpan={1}
              rowSpan={1}
              revealDelay={idx * 70}
              className="bg-secondary"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>
    </main>
  );
}
