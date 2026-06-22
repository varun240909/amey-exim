import Image from 'next/image';
import { CategoryCard } from '@/components/category-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Divisions | Pharmaceutical, Agricultural, Cosmetic | AMEY EXIM',
  description: 'Explore AMEY EXIM three expert divisions: pharmaceutical products, agricultural exports, and cosmetic suppliers. Each with world-class quality standards and international certifications.',
  keywords: 'pharmaceutical division, agricultural products, cosmetic division, export divisions, AMEY EXIM divisions',
  openGraph: {
    title: 'Our Divisions | AMEY EXIM',
    description: 'Three expert divisions specializing in pharmaceutical, agricultural, and cosmetic exports',
    url: 'https://amey-exim.com/divisions',
    type: 'website',
  },
};

export default function DivisionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-video-poster.png"
            alt="Divisions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
        </div>

        <div className="relative z-10 flex h-screen flex-col items-start justify-center px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium uppercase tracking-widest">
              Our Divisions
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tighter text-white mb-4">
              Three Expert Divisions
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-6">
              Premium products across pharmaceutical, agricultural, and cosmetic sectors
            </p>
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              Each division maintains the highest international standards with specialized expertise and rigorous quality control processes.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6 text-center">
            Our Product Portfolio
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            AMEY EXIM serves global markets with three specialized divisions, each expertly managed with dedicated teams, advanced facilities, and unwavering commitment to quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard
              title="Pharmaceutical"
              description="Rigorous compliance, pharmaceutical-grade quality assurance, and FDA/WHO certified manufacturing processes."
              image="/images/pharma-division.png"
              badge="Precision"
              href="/pharmaceutical"
            />
            <CategoryCard
              title="Agricultural"
              description="Organic and premium crops sourced from verified farms worldwide with complete traceability and sustainability certification."
              image="/images/agri-division.png"
              badge="Excellence"
              href="/agricultural"
            />
            <CategoryCard
              title="Cosmetic"
              description="Luxury cosmetic and beauty products with innovative formulations, safety testing, and international beauty standards compliance."
              image="/images/cosmetic-division.png"
              badge="Innovation"
              href="/cosmetic"
            />
          </div>
        </div>
      </section>

      {/* Division Comparison */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Division Highlights
          </h2>

          <div className="space-y-12">
            {[
              {
                name: 'Pharmaceutical',
                highlights: [
                  'FDA, EMA, and WHO certifications',
                  'Pharmaceutical-grade manufacturing',
                  'Full regulatory compliance',
                  'Quality control at every step',
                  'Global pharma standards adherence',
                ],
              },
              {
                name: 'Agricultural',
                highlights: [
                  'Organic and conventional crops',
                  'Farm-to-table traceability',
                  'Sustainability certifications',
                  'Seasonal and specialty products',
                  'Climate-controlled storage',
                ],
              },
              {
                name: 'Cosmetic',
                highlights: [
                  'Beauty industry innovations',
                  'Dermatology-tested formulations',
                  'Safety compliance certifications',
                  'Luxury and premium brands',
                  'International beauty standards',
                ],
              },
            ].map((division, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12 border-b border-border last:border-b-0 last:pb-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={
                      division.name === 'Pharmaceutical'
                        ? '/images/pharma-division.png'
                        : division.name === 'Agricultural'
                        ? '/images/agri-division.png'
                        : '/images/cosmetic-division.png'
                    }
                    alt={division.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-medium text-foreground mb-6">
                    {division.name} Division
                  </h3>
                  <ul className="space-y-3">
                    {division.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-3 text-muted-foreground">
                        <span className="text-accent font-medium">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Divisions */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Explore Each Division
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Pharmaceutical Division',
                description: 'Discover our pharmaceutical products and expertise in global healthcare exports.',
                href: '/pharmaceutical',
                icon: '💊',
              },
              {
                title: 'Agricultural Division',
                description: 'Explore our premium organic and conventional agricultural products worldwide.',
                href: '/agricultural',
                icon: '��',
              },
              {
                title: 'Cosmetic Division',
                description: 'Experience our luxury cosmetic and beauty product range with global reach.',
                href: '/cosmetic',
                icon: '💄',
              },
            ].map((division, idx) => (
              <a
                key={idx}
                href={division.href}
                className="group bg-secondary rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{division.icon}</div>
                <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                  {division.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {division.description}
                </p>
                <span className="inline-flex items-center text-accent font-medium">
                  Learn More →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-foreground text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Find Your Perfect Products
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contact us to discuss your specific needs and discover which division is right for your business.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
