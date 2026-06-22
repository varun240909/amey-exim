import Image from 'next/image';
import { DivisionHero } from '@/components/division-hero';
import { ProcessStep } from '@/components/process-step';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Export Process | 10-Step Quality Assurance | AMEY EXIM',
  description: 'Discover AMEY EXIM comprehensive 10-step export process ensuring quality, compliance, transparency, and reliability in every shipment worldwide.',
  keywords: 'export process, quality assurance, compliance, supply chain, international standards, AMEY EXIM process',
  openGraph: {
    title: 'Our Process | AMEY EXIM',
    description: 'Comprehensive 10-step process ensuring quality, compliance, and reliability',
    url: 'https://amey-exim.com/process',
    type: 'website',
  },
};

export default function ProcessPage() {
  const steps = [
    {
      number: 1,
      title: 'Partnership Consultation',
      description: 'We begin with an in-depth conversation to understand your sourcing needs, specifications, volume requirements, and timeline expectations.',
      details: [
        'Detailed requirement gathering',
        'Market analysis and feasibility',
        'Custom solution development',
        'Agreement finalization',
      ],
      image: '/images/promise-timeline-step1.png',
    },
    {
      number: 2,
      title: 'Supplier Verification',
      description: 'Our team conducts thorough verification of manufacturing facilities, checking certifications, compliance records, and production capacity.',
      details: [
        'Manufacturing facility audit',
        'Certification verification',
        'Production capacity assessment',
        'Compliance documentation review',
      ],
      image: '/images/pain-points-quality.png',
    },
    {
      number: 3,
      title: 'Product Selection',
      description: 'We curate the highest quality products from verified suppliers, ensuring every item meets our strict selection criteria.',
      details: [
        'Premium product sourcing',
        'Batch selection and grading',
        'Sample evaluation',
        'Specification confirmation',
      ],
      image: '/images/pharma-division.png',
    },
    {
      number: 4,
      title: 'Laboratory Testing',
      description: 'All products undergo rigorous laboratory testing for quality, purity, safety, and compliance with international standards.',
      details: [
        'Quality assurance testing',
        'Contamination screening',
        'Safety compliance verification',
        'Performance validation',
      ],
      image: '/images/pain-points-quality.png',
    },
    {
      number: 5,
      title: 'Certification Process',
      description: 'Complete documentation, certifications, and compliance paperwork prepared for international trade requirements.',
      details: [
        'ISO and international certifications',
        'Regulatory compliance documentation',
        'Export permits and licenses',
        'Certificate of origin preparation',
      ],
      image: '/images/promise-timeline-step3.png',
    },
    {
      number: 6,
      title: 'Quality Assurance Review',
      description: 'Final comprehensive review ensuring all quality metrics, documentation, and standards are met before proceeding.',
      details: [
        'Final quality inspection',
        'Documentation completeness check',
        'Standard compliance verification',
        'Packaging integrity assessment',
      ],
      image: '/images/pain-points-quality.png',
    },
    {
      number: 7,
      title: 'Packaging & Labeling',
      description: 'Professional packaging with complete traceability codes, proper labeling, and brand protection measures.',
      details: [
        'Secure packaging design',
        'Traceability codes application',
        'Multilingual labeling',
        'Tamper-evident sealing',
      ],
      image: '/images/promise-timeline-step4.png',
    },
    {
      number: 8,
      title: 'Warehouse Management',
      description: 'Climate-controlled warehouse storage with inventory management, monitoring, and organization systems in place.',
      details: [
        'Climate control maintenance',
        'Inventory tracking systems',
        'Organization and accessibility',
        'Storage condition monitoring',
      ],
      image: '/images/global-shipping.png',
    },
    {
      number: 9,
      title: 'Shipping & Logistics',
      description: 'Secure international shipping with real-time tracking, ensuring safe delivery to your destination.',
      details: [
        'Carrier selection and booking',
        'Real-time tracking setup',
        'Customs documentation preparation',
        'Insurance coverage',
      ],
      image: '/images/global-shipping.png',
    },
    {
      number: 10,
      title: 'Post-Delivery Support',
      description: 'Ongoing support and relationship management ensuring your complete satisfaction and future collaboration.',
      details: [
        'Delivery confirmation',
        'Quality feedback collection',
        'Issue resolution support',
        'Loyalty program benefits',
      ],
      image: '/images/promise-timeline-step5.png',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <DivisionHero
        title="Our 10-Step Process"
        subtitle="Ensuring Quality, Compliance & Reliability"
        description="From initial consultation to post-delivery support, we follow a comprehensive process designed to deliver excellence at every stage of your export journey."
        image="/images/hero-video-poster.png"
        badge="Our Process"
      />

      {/* Process Steps */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={idx !== steps.length - 1 ? 'border-b border-border pb-20 md:pb-24' : ''}
            >
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                details={step.details}
                image={step.image}
                isEven={step.number % 2 === 0}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Quality Promise */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            Why Our Process Matters
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our comprehensive 10-step process exists to protect you, ensure compliance, and deliver the highest quality products. Every step is designed to mitigate risks, ensure transparency, and build lasting partnerships based on trust and excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'Zero Counterfeit Guarantee',
                description: 'Every product is traced from source to delivery, with verification at each step.',
              },
              {
                title: 'Complete Compliance',
                description: 'All international standards, certifications, and regulations are met without exception.',
              },
              {
                title: 'Quality Assurance',
                description: 'Multiple testing phases ensure 99.8% quality rating and customer satisfaction.',
              },
            ].map((promise, idx) => (
              <div key={idx} className="bg-background rounded-xl p-6">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {promise.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-foreground text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Ready to Experience Our Process?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Start your partnership with AMEY EXIM today and discover the difference quality and transparency make.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Begin Your Journey
          </a>
        </div>
      </section>
    </main>
  );
}
