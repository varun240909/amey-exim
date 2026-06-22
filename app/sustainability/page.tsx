import Image from 'next/image';
import { DivisionHero } from '@/components/division-hero';
import { ImpactCard } from '@/components/impact-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustainability & CSR | AMEY EXIM | Environmental Responsibility',
  description: 'AMEY EXIM commitment to environmental responsibility, sustainable farming, eco-friendly manufacturing, renewable energy, and positive social impact.',
  keywords: 'sustainability, environmental responsibility, green manufacturing, sustainable farming, CSR, carbon neutral, AMEY EXIM sustainability',
  openGraph: {
    title: 'Sustainability | AMEY EXIM',
    description: 'Our commitment to environmental responsibility and sustainable practices across all operations',
    url: 'https://amey-exim.com/sustainability',
    type: 'website',
  },
};

export default function SustainabilityPage() {
  return (
    <main>
      {/* Hero Section */}
      <DivisionHero
        title="Sustainability & Impact"
        subtitle="Responsibility. Planet. Future."
        description="AMEY EXIM commits to environmental stewardship and social responsibility across all operations. We believe sustainable business creates lasting value for communities, our planet, and our partners."
        image="/images/sustainability-eco.png"
        badge="Sustainability"
      />

      {/* Our Commitment */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8">
            Our Sustainability Commitment
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Sustainability is not just a corporate responsibility for AMEY EXIM—it's fundamental to our mission. We integrate environmental protection and social responsibility into every aspect of our operations, from sourcing to delivery.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            By 2030, we aim to achieve carbon neutrality in our operations and ensure 100% sustainable sourcing across all product categories.
          </p>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Environmental Initiatives
          </h2>

          <div className="space-y-12">
            {[
              {
                title: 'Renewable Energy',
                description: 'Our facilities utilize solar panels and renewable energy sources, reducing carbon footprint by 40%.',
              },
              {
                title: 'Waste Reduction',
                description: '90% waste diversion through recycling, composting, and responsible disposal programs.',
              },
              {
                title: 'Water Conservation',
                description: 'Advanced water management systems reducing consumption by 35% and treating wastewater.',
              },
              {
                title: 'Sustainable Packaging',
                description: 'Biodegradable and recyclable materials for 100% of our packaging by 2025.',
              },
              {
                title: 'Carbon Offset Programs',
                description: 'Investment in reforestation and renewable energy projects offsetting operational emissions.',
              },
              {
                title: 'Green Logistics',
                description: 'Partnership with eco-friendly shipping companies and optimized routing reducing emissions.',
              },
            ].map((initiative, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border-l-4 border-accent">
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Social Impact & Community Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Fair Trade Practices',
                description: 'Ensuring fair wages, safe working conditions, and dignity for all suppliers and workers across our supply chain.',
              },
              {
                title: 'Farmer Support Programs',
                description: 'Training, resources, and market access programs supporting agricultural partners in developing regions.',
              },
              {
                title: 'Women Empowerment',
                description: 'Creating opportunities for women farmers and workers through training, financing, and leadership programs.',
              },
              {
                title: 'Community Education',
                description: 'Investment in local education programs, scholarships, and skill development for communities we work with.',
              },
              {
                title: 'Healthcare Access',
                description: 'Supporting healthcare initiatives and wellness programs for workers and their families.',
              },
              {
                title: 'Local Economic Growth',
                description: 'Prioritizing local suppliers and contractors, contributing to regional economic development.',
              },
            ].map((impact, idx) => (
              <div key={idx} className="bg-secondary rounded-xl p-8 border border-border">
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

      {/* Supply Chain Sustainability */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
            Sustainable Supply Chain Management
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Supplier Sustainability Audits',
                description: 'Regular assessments of supplier environmental and social practices',
              },
              {
                step: '02',
                title: 'Traceability & Transparency',
                description: 'Complete supply chain visibility ensuring ethical sourcing and sustainability',
              },
              {
                step: '03',
                title: 'Capacity Building',
                description: 'Helping suppliers implement sustainable practices and improve efficiency',
              },
              {
                step: '04',
                title: 'Responsible Procurement',
                description: 'Prioritizing suppliers meeting our sustainability and ethical standards',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border flex gap-6">
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

      {/* Impact Metrics */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Our Impact by Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '40%', label: 'Carbon Reduction' },
              { number: '90%', label: 'Waste Diverted' },
              { number: '35%', label: 'Water Saved' },
              { number: '5000+', label: 'Lives Impacted' },
            ].map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {metric.number}
                </div>
                <p className="text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Sustainability Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'ISO 14001 (Environmental Management)',
              'ISO 26000 (Social Responsibility)',
              'Fair Trade Certified',
              'Global Organic Certified',
              'Carbon Trust Standard',
              'B Corp Certification (in progress)',
            ].map((cert, idx) => (
              <div key={idx} className="bg-background rounded-xl p-6 text-center border border-border">
                <p className="text-muted-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2030 Goals */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            Our 2030 Sustainability Goals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              'Carbon Neutrality in Operations',
              '100% Sustainable Sourcing',
              'Zero Waste to Landfill',
              'Complete Renewable Energy',
              'Gender Parity in Leadership',
              'Zero Human Rights Violations',
            ].map((goal, idx) => (
              <div key={idx} className="bg-secondary rounded-xl p-6 flex gap-3 items-start">
                <span className="text-accent text-xl flex-shrink-0">✓</span>
                <span className="text-muted-foreground">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-foreground text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Join Our Sustainable Journey
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Partner with AMEY EXIM and be part of a movement towards responsible, ethical, and sustainable global trade.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </section>
    </main>
  );
}
