import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AMEY EXIM | Premium Global Export Company | Pharma, Agri, Cosmetic',
  description: 'AMEY EXIM is your trusted global exporter specializing in pharmaceutical, agricultural, and cosmetic products. Quality assurance, complete transparency, and reliable worldwide delivery.',
  keywords: 'pharmaceutical export, agricultural products, cosmetic supplier, global exporter, quality assurance, international trade',
  openGraph: {
    title: 'AMEY EXIM | Global Export Company',
    description: 'Premium pharmaceutical, agricultural, and cosmetic products with complete transparency and quality assurance',
    url: 'https://amey-exim.com',
    siteName: 'AMEY EXIM',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <FeaturedProductsSection />
      <TechnologySection />
      <GallerySection />
      <CollectionSection />
      <EditorialSection />
      <TestimonialsSection />
    </>
  );
}
