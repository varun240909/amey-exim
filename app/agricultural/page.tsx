import Image from 'next/image';
import { DivisionHero } from '@/components/division-hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agricultural Products | Organic Certified | AMEY EXIM Exporter',
  description: 'Premium agricultural products with farm-to-table traceability, organic certifications, sustainable farming, and international quality standards for global markets.',
  keywords: 'agricultural exports, organic products, farm products, agri exports, agricultural commodities, sustainable farming, AMEY EXIM agriculture',
  openGraph: {
    title: 'Agricultural Division | AMEY EXIM',
    description: 'Premium agricultural products with complete farm-to-table traceability and organic certifications',
    url: 'https://amey-exim.com/agricultural',
    type: 'website',
  },
};

export default function AgriculturalPage() {
  const productLines = [
    {
      name: 'Organic Crops',
      description: 'Certified organic vegetables, grains, and pulses with zero pesticide residues',
    },
    {
      name: 'Spices & Seasonings',
      description: 'Premium quality spices with authentic flavor and international food safety standards',
    },
    {
      name: 'Dry Fruits & Nuts',
      description: 'Premium quality almonds, cashews, dates, and other nutritious dry fruits',
    },
    {
      name: 'Specialty Products',
      description: 'Honey, herbal extracts, tea, coffee, and other specialty agricultural products',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <DivisionHero
        title="Agricultural Division"
        subtitle="From Farm to Global Table"
        description="Premium agricultural exports with complete traceability, organic certifications, and sustainable farming practices. Connecting farmers worldwide with global markets."
        image="/images/agri-division.png"
        badge="Agricultural"
      />

      {/* Overview */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Our Agricultural Division sources premium quality crops, spices, dry fruits, and specialty products from verified farms across multiple regions. Every product carries complete farm-to-table traceability, organic certifications where applicable, and rigorous food safety standards compliance.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Our Agricultural Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                cert: 'USDA Organic Certified',
                details: 'US Department of Agriculture certification for organic agricultural products',
              },
              {
                cert: 'EU Organic Certification',
                details: 'European Union organic standards for European export markets',
              },
              {
                cert: 'GlobalGAP Certification',
                details: 'Good Agricultural Practices certification for food safety and sustainability',
              },
              {
                cert: 'Fair Trade Certified',
                details: 'Fair trade certifications for ethical and sustainable farming practices',
              },
              {
                cert: 'FSSC 22000',
                details: 'Food Safety System Certification for agricultural products',
              },
              {
                cert: 'ISO 22000:2018',
                details: 'Food safety management system certification for all agricultural operations',
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

      {/* Product Lines */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Product Lines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productLines.map((product, idx) => (
              <div
                key={idx}
                className="bg-secondary rounded-xl p-8 border-l-4 border-accent hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farming Excellence */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Our Farming Standards
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'Soil Quality Management',
                description: 'Regular soil testing and organic matter enrichment ensuring sustainable nutrient cycling',
              },
              {
                title: 'Water Conservation',
                description: 'Efficient irrigation systems and rainwater harvesting for sustainable resource management',
              },
              {
                title: 'Pest Management',
                description: 'Integrated pest management with minimal chemical use and biological alternatives',
              },
              {
                title: 'Crop Rotation',
                description: 'Strategic crop rotation practices to maintain soil health and biodiversity',
              },
              {
                title: 'Traceability Systems',
                description: 'Complete digital traceability from seed to harvest to delivery',
              },
              {
                title: 'Post-Harvest Handling',
                description: 'Proper storage, processing, and packaging maintaining quality and freshness',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-all">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
            Sustainability & Social Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Fair Trade Practices',
                description: 'Ensuring fair compensation and dignified working conditions for farmers and workers',
              },
              {
                title: 'Environmental Protection',
                description: 'Protecting ecosystems through organic practices and biodiversity conservation',
              },
              {
                title: 'Community Development',
                description: 'Supporting local communities with training, resources, and market access',
              },
              {
                title: 'Carbon Neutral Operations',
                description: 'Working towards carbon-neutral farming through renewable energy and offset programs',
              },
            ].map((impact, idx) => (
              <div key={idx} className="bg-secondary rounded-xl p-8">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {impact.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
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
              { number: '40+', label: 'Partner Farms' },
              { number: '500+', label: 'Products' },
              { number: '100%', label: 'Organic Cert' },
              { number: '99.7%', label: 'Quality Rate' },
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
            Discover Premium Agricultural Products
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Connect with our Agricultural Division to source quality certified products with complete traceability.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Start Sourcing Today
          </a>
        </div>
      </section>
    </main>
  );
}
