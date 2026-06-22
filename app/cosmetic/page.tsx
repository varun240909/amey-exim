import Image from 'next/image';
import { DivisionHero } from '@/components/division-hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cosmetic Products | Luxury Beauty Exporter | AMEY EXIM',
  description: 'Luxury cosmetic and beauty products with international safety certifications, dermatology-tested formulations, innovative beauty solutions, and premium skincare.',
  keywords: 'cosmetic exports, beauty products, luxury cosmetics, skincare exporter, beauty formulations, cosmetic supplier, AMEY EXIM cosmetics',
  openGraph: {
    title: 'Cosmetic Division | AMEY EXIM',
    description: 'Luxury cosmetic and beauty products with international certifications and dermatology-tested formulations',
    url: 'https://amey-exim.com/cosmetic',
    type: 'website',
  },
};

export default function CosmeticPage() {
  const categories = [
    {
      name: 'Skincare Products',
      description: 'Premium serums, creams, masks, and treatments for all skin types',
    },
    {
      name: 'Makeup & Color Cosmetics',
      description: 'Foundation, lipstick, eyeshadow, and professional makeup products',
    },
    {
      name: 'Haircare Solutions',
      description: 'Shampoos, conditioners, treatments, and specialized hair care products',
    },
    {
      name: 'Personal Care Items',
      description: 'Body care, fragrances, and premium personal hygiene products',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <DivisionHero
        title="Cosmetic Division"
        subtitle="Beauty Innovation. Global Excellence."
        description="Luxury cosmetic and beauty products with cutting-edge formulations, international safety standards, and dermatology-tested innovation. Serving beauty enthusiasts worldwide."
        image="/images/cosmetic-division.png"
        badge="Cosmetic"
      />

      {/* Overview */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Our Cosmetic Division partners with premium beauty brands and manufacturers to deliver innovative cosmetic and personal care products to global markets. Every formulation undergoes rigorous safety testing, dermatological evaluation, and compliance certification to meet international beauty standards.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Our Beauty Industry Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                cert: 'EU Cosmetics Regulation',
                details: 'Full compliance with EC 1223/2009 for European Union cosmetics market',
              },
              {
                cert: 'FDA Cosmetics Compliance',
                details: 'US FDA registration and listing for safe US market distribution',
              },
              {
                cert: 'ISO 22716:2007 GMP',
                details: 'Cosmetics Good Manufacturing Practice certification for safety',
              },
              {
                cert: 'Dermatologist Tested',
                details: 'All products undergo dermatological testing for safety and efficacy',
              },
              {
                cert: 'Cruelty-Free Certified',
                description: 'No animal testing certifications meeting international ethical standards',
              },
              {
                cert: 'CPNP Registration',
                details: 'Cosmetic Products Notification Portal registration for European products',
              },
            ].map((cert, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {cert.cert}
                </h3>
                <p className="text-muted-foreground">{cert.details || cert.description}</p>
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

      {/* Beauty Innovation */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Our Beauty Innovation Standards
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'Advanced Formulations',
                description: 'Cutting-edge ingredients and technology for superior cosmetic performance',
              },
              {
                title: 'Safety & Stability Testing',
                description: 'Comprehensive testing for stability, compatibility, and long-term safety',
              },
              {
                title: 'Ingredient Transparency',
                description: 'Complete disclosure of all ingredients meeting international standards',
              },
              {
                title: 'Efficacy Validation',
                description: 'Scientific studies and consumer testing validating product effectiveness',
              },
              {
                title: 'Eco-Friendly Packaging',
                description: 'Sustainable and recyclable packaging with minimal environmental impact',
              },
              {
                title: 'Trend-Forward Products',
                description: 'Innovation focusing on latest beauty trends and consumer preferences',
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

      {/* Ingredient Standards */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
            Our Ingredient Commitment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Natural & Organic Options',
                description: 'Certified natural and organic ingredients where applicable and beneficial',
              },
              {
                title: 'GMO-Free Ingredients',
                description: 'Non-genetically modified ingredients used throughout formulations',
              },
              {
                title: 'Hypoallergenic Formulas',
                description: 'Specially formulated products minimizing allergenic reactions',
              },
              {
                title: 'Paraben-Free Options',
                description: 'Products free from parabens meeting clean beauty standards',
              },
              {
                title: 'Sulfate-Free Formulations',
                description: 'Gentle formulas without harsh sulfates for sensitive skin care',
              },
              {
                title: 'Third-Party Tested',
                description: 'Independent laboratory testing verifying safety and quality',
              },
            ].map((ingredient, idx) => (
              <div key={idx} className="bg-secondary rounded-xl p-8">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {ingredient.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {ingredient.description}
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
              { number: '45+', label: 'Countries' },
              { number: '600+', label: 'Products' },
              { number: '100%', label: 'Tested' },
              { number: '99.6%', label: 'Satisfaction' },
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
            Elevate Your Beauty Product Range
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Partner with our Cosmetic Division to access premium beauty and personal care products.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Explore Our Range
          </a>
        </div>
      </section>
    </main>
  );
}
