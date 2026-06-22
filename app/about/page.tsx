import Image from 'next/image';
import { DivisionHero } from '@/components/division-hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About AMEY EXIM | Company Mission & Values | Global Exporter',
  description: 'Discover AMEY EXIM Company story, mission, core values, and commitment to quality in pharmaceutical, agricultural, and cosmetic exports worldwide.',
  keywords: 'about AMEY EXIM, company mission, export excellence, quality commitment, global trade',
  openGraph: {
    title: 'About AMEY EXIM | Global Export Company',
    description: 'Learn about our company mission, values, and commitment to export excellence',
    url: 'https://amey-exim.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <DivisionHero
        title="About AMEY EXIM"
        subtitle="Leading Global Exporter of Premium Products"
        description="Established with a vision to transform international trade through unwavering commitment to quality, transparency, and trust. We export pharmaceutical, agricultural, and cosmetic products to 50+ countries worldwide."
        image="/images/hero-video-poster.png"
        badge="Our Story"
      />

      {/* Mission & Vision */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To be the most trusted exporter of premium pharmaceutical, agricultural, and cosmetic products globally, delivering excellence through rigorous quality control, complete transparency, and lasting partnerships.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We solve critical challenges in international trade: counterfeit prevention, quality inconsistency, communication gaps, and lack of trust. Every product carries our commitment to integrity.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To create a global ecosystem where quality, sustainability, and fairness are non-negotiable. We envision a world where AMEY EXIM is synonymous with trust and excellence across all export categories.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By leveraging advanced technology, rigorous processes, and human expertise, we aim to set new standards in international commerce and build lasting value for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We operate with complete transparency and honesty in all dealings, building trust through consistent actions.',
              },
              {
                title: 'Excellence',
                description: 'Uncompromising commitment to quality at every step, exceeding international standards and customer expectations.',
              },
              {
                title: 'Sustainability',
                description: 'Environmental and social responsibility integrated into our operations, caring for our planet and communities.',
              },
              {
                title: 'Partnership',
                description: 'Building long-term relationships based on mutual respect, fair practices, and shared success with all partners.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-background rounded-2xl p-8">
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            By The Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Countries Served' },
              { number: '1000+', label: 'Products Available' },
              { number: '100%', label: 'Compliance Rate' },
              { number: '99.8%', label: 'Quality Rating' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6 text-center">
            Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Our expert team brings decades of combined experience in pharmaceutical, agricultural, and cosmetic exports, united by a passion for excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Raj Kumar',
                title: 'Founder & CEO',
                specialization: 'International Trade',
              },
              {
                name: 'Priya Sharma',
                title: 'Head of Quality',
                specialization: 'Compliance & Standards',
              },
              {
                name: 'Arjun Singh',
                title: 'Head of Operations',
                specialization: 'Logistics & Supply Chain',
              },
            ].map((member, idx) => (
              <div key={idx} className="bg-background rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-medium text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-2">{member.title}</p>
                <p className="text-sm text-muted-foreground">
                  {member.specialization}
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
            Partner With AMEY EXIM
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join hundreds of satisfied partners worldwide who trust us for premium quality exports.
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
