import Image from 'next/image';
import { DivisionHero } from '@/components/division-hero';
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

export default function QualityPage() {
  return (
    <main>
      {/* Hero Section */}
      <DivisionHero
        title="Quality Assurance"
        subtitle="Excellence in Every Product"
        description="Uncompromising commitment to quality through rigorous testing, international certifications, and continuous improvement. Our quality standards exceed industry requirements."
        image="/images/pain-points-quality.png"
        badge="Quality"
      />

      {/* Our Quality Philosophy */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8">
            Quality Philosophy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At AMEY EXIM, quality is not a department—it's our culture. Every product bearing our name undergoes meticulous testing and verification, ensuring it meets or exceeds international standards. We believe that exceptional quality builds trust, protects health, and creates lasting partnerships.
          </p>
        </div>
      </section>

      {/* Quality Dimensions */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Our Six Dimensions of Quality
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Performance',
                description: 'Products deliver the intended benefits and function as designed and promised',
              },
              {
                title: 'Reliability',
                description: 'Consistent performance and durability with minimal defects or failures',
              },
              {
                title: 'Durability',
                description: 'Long shelf life, stability, and resistance to degradation over time',
              },
              {
                title: 'Conformance',
                description: 'Complete adherence to specifications and regulatory requirements',
              },
              {
                title: 'Safety',
                description: 'Zero harmful substances, rigorous contamination prevention, health assurance',
              },
              {
                title: 'Support',
                description: 'Post-purchase support, documentation, and resolution of any concerns',
              },
            ].map((dimension, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border-l-4 border-accent">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {dimension.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {dimension.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Protocols */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Comprehensive Testing Protocols
          </h2>

          <div className="space-y-8">
            {[
              {
                test: 'Physical Testing',
                description: 'Visual inspection, size/weight verification, packaging integrity, and appearance assessment',
              },
              {
                test: 'Chemical Testing',
                description: 'Composition analysis, purity verification, contaminant screening, and ingredient validation',
              },
              {
                test: 'Microbiological Testing',
                description: 'Bacterial count analysis, pathogen screening, sterility testing, and contamination detection',
              },
              {
                test: 'Stability Testing',
                description: 'Long-term stability assessment, shelf-life validation, and degradation monitoring',
              },
              {
                test: 'Performance Testing',
                description: 'Efficacy validation, functional testing, and user safety assessment',
              },
              {
                test: 'Environmental Testing',
                description: 'Temperature and humidity resistance, transportation condition simulation, and durability evaluation',
              },
              {
                test: 'Regulatory Compliance Testing',
                description: 'Meeting FDA, EMA, WHO, and local regulatory requirements for international markets',
              },
              {
                test: 'Documentation Review',
                description: 'Certification verification, compliance documentation audit, and traceability confirmation',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-secondary rounded-xl p-8 border border-border">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {item.test}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Facilities */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
            Our Testing Facilities
          </h2>

          <div className="bg-background rounded-xl p-8 border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AMEY EXIM operates state-of-the-art testing laboratories equipped with advanced analytical instruments and staffed by certified quality professionals. Our facilities are accredited by leading international certification bodies and maintain strict quality control procedures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'ISO/IEC 17025 Accreditation',
                'Advanced Analytical Equipment',
                'Pharmaceutical Lab Certifications',
                'Microbiology Testing Capabilities',
                'Chemical Analysis Equipment',
                'Climate Control Chambers',
              ].map((facility, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-muted-foreground">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Quality Certifications & Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'ISO 9001:2015 Quality Management',
              'ISO 14001:2015 Environmental Management',
              'ISO 45001:2018 Occupational Health & Safety',
              'FSSC 22000 Food Safety Certification',
              'ISO 22000:2018 Food Safety Management',
              'GMP (Good Manufacturing Practice)',
              'FDA Registration & Listing',
              'EMA (European Medicines Agency) Compliance',
              'WHO Prequalification Status',
              'ISO/IEC 17025 Laboratory Accreditation',
              'CE Marking Compliance',
              'Supplier Audits & Approvals',
            ].map((cert, idx) => (
              <div key={idx} className="bg-secondary rounded-xl p-6 flex gap-3 items-start">
                <span className="text-accent font-bold flex-shrink-0">●</span>
                <span className="text-muted-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
            Continuous Improvement Culture
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Regular Audits',
                description: 'Internal and external audits ensuring ongoing compliance and identifying improvement opportunities',
              },
              {
                title: 'Customer Feedback',
                description: 'Active feedback collection and analysis driving product improvements and quality enhancements',
              },
              {
                title: 'Supplier Collaboration',
                description: 'Working closely with suppliers to maintain and improve quality at the source',
              },
              {
                title: 'Technology Adoption',
                description: 'Investing in advanced testing equipment and automation for superior quality assurance',
              },
              {
                title: 'Team Training',
                description: 'Continuous professional development ensuring quality staff maintains highest expertise',
              },
              {
                title: 'Root Cause Analysis',
                description: 'Systematic investigation of any issues with corrective actions preventing recurrence',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-all">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Stats */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '99.8%', label: 'Quality Rating' },
              { number: '100%', label: 'Tested Products' },
              { number: '0', label: 'Critical Defects' },
              { number: '15+', label: 'Certifications' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-foreground text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Quality You Can Trust
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Experience the AMEY EXIM difference with products tested to the highest international standards.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Request Quality Documentation
          </a>
        </div>
      </section>
    </main>
  );
}
