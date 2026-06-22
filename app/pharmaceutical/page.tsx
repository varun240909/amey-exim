import Image from 'next/image';
import { DivisionHero } from '@/components/division-hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pharmaceutical Products | FDA/WHO Certified | AMEY EXIM Exporter',
  description: 'Premium pharmaceutical products with FDA/WHO certifications, GMP quality assurance, complete regulatory compliance, and international healthcare standards.',
  keywords: 'pharmaceutical exports, FDA certified, WHO approved, pharmaceutical products, healthcare exports, quality pharmaceuticals, AMEY EXIM pharma',
  openGraph: {
    title: 'Pharmaceutical Division | AMEY EXIM',
    description: 'Premium pharmaceutical products with FDA/WHO certifications and pharmaceutical-grade quality',
    url: 'https://amey-exim.com/pharmaceutical',
    type: 'website',
  },
};

export default function PharmaceuticalPage() {
  const categories = [
    {
      name: 'Active Pharmaceutical Ingredients (APIs)',
      description: 'High-purity chemical compounds used in pharmaceutical manufacturing',
    },
    {
      name: 'Finished Dosage Forms',
      description: 'Tablets, capsules, liquids, and injectables ready for distribution',
    },
    {
      name: 'Herbal & Ayurvedic Products',
      description: 'Traditional remedies with modern quality standards and certifications',
    },
    {
      name: 'Nutraceuticals',
      description: 'Vitamins, minerals, supplements, and nutritional products',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <DivisionHero
        title="Pharmaceutical Division"
        subtitle="Precision. Compliance. Excellence."
        description="Global leader in pharmaceutical exports with FDA, EMA, and WHO certifications. Delivering quality-assured products that meet the highest international healthcare standards."
        image="/images/pharma-division.png"
        badge="Pharmaceutical"
      />

      {/* Overview */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Our Pharmaceutical Division specializes in exporting world-class pharmaceutical products to healthcare providers, distributors, and medical facilities across 50+ countries. With decades of expertise, rigorous quality control, and unwavering compliance standards, we ensure every product meets the most stringent international healthcare requirements.
          </p>
        </div>
      </section>

      {/* Key Certifications */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Our Certifications & Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                cert: 'FDA Certification',
                details: 'US Food & Drug Administration approval for export to United States market',
              },
              {
                cert: 'EMA Certification',
                details: 'European Medicines Agency compliance for European Union countries',
              },
              {
                cert: 'WHO Certification',
                details: 'World Health Organization standards and prequalification status',
              },
              {
                cert: 'GMP Certification',
                details: 'Good Manufacturing Practice compliance for international pharmaceutical standards',
              },
              {
                cert: 'ISO 9001:2015',
                details: 'Quality management system certification for continuous improvement',
              },
              {
                cert: 'FSSC 22000',
                details: 'Food Safety System Certification for pharmaceutical and nutraceutical products',
              },
            ].map((cert, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {cert.cert}
                </h3>
                <p className="text-muted-foreground">{cert.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Product Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-secondary rounded-xl p-8 border-l-4 border-accent hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {category.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Our Quality Assurance Process
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Supplier Verification',
                description: 'All suppliers are audited and certified pharmaceutical manufacturers meeting international standards.',
              },
              {
                step: '02',
                title: 'Raw Material Testing',
                description: 'Each batch of raw materials undergoes comprehensive laboratory testing before processing.',
              },
              {
                step: '03',
                title: 'In-Process Monitoring',
                description: 'Manufacturing processes are closely monitored with quality checks at multiple stages.',
              },
              {
                step: '04',
                title: 'Final Product Testing',
                description: 'Finished products undergo rigorous testing for potency, purity, safety, and sterility.',
              },
              {
                step: '05',
                title: 'Regulatory Documentation',
                description: 'Complete documentation prepared including COAs, certificates, and compliance records.',
              },
              {
                step: '06',
                title: 'Cold Chain Management',
                description: 'Temperature-controlled packaging and shipping ensures product integrity during transit.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 bg-background rounded-xl p-8">
                <div className="text-3xl font-bold text-accent/30 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
            Regulatory Compliance
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We maintain full compliance with pharmaceutical regulations across all major markets:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'US FDA Import Requirements',
              'European Commission Regulations',
              'WHO Prequalification Standards',
              'Japanese MHLW Requirements',
              'Australian TGA Approvals',
              'Canadian Health Canada Compliance',
              'Indian Pharmaceutical Standards',
              'GMP Certification Maintenance',
            ].map((compliance, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <span className="text-accent font-bold text-lg">✓</span>
                <span className="text-muted-foreground">{compliance}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Countries' },
              { number: '500+', label: 'Products' },
              { number: '100%', label: 'Compliance' },
              { number: '99.9%', label: 'Quality Rate' },
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
            Pharmaceutical Excellence Awaits
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contact our Pharmaceutical Division to discuss your specific needs and discover quality-assured products.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
