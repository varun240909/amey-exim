import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { FooterSection } from '@/components/sections/footer-section'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0F1729',
}

export const metadata: Metadata = {
  title: 'AMEY EXIM | Global Export Company | Pharma, Agri, Cosmetic',
  description: 'AMEY EXIM is a premium global exporter of pharmaceutical, agricultural, and cosmetic products. International quality standards, complete transparency, and reliable supply chain.',
  keywords: 'pharmaceutical exporter, agricultural products export, cosmetic supplier, international export, quality assurance, global trade, AMEY EXIM',
  authors: [{ name: 'AMEY EXIM Company' }],
  creator: 'AMEY EXIM',
  publisher: 'AMEY EXIM',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: '/amey-exim-logo.png',
    apple: '/amey-exim-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amey-exim.com',
    siteName: 'AMEY EXIM',
    title: 'AMEY EXIM | Global Export Company',
    description: 'Premium global exporter of pharmaceutical, agricultural, and cosmetic products with complete transparency and quality assurance.',
    images: [
      {
        url: '/images/hero-video-poster.png',
        width: 1200,
        height: 630,
        alt: 'AMEY EXIM Manufacturing Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMEY EXIM | Global Export Company',
    description: 'Premium pharmaceutical, agricultural, and cosmetic products exporter',
    images: ['/images/hero-video-poster.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://amey-exim.com',
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AMEY EXIM",
  "url": "https://amey-exim.com",
  "logo": "https://amey-exim.com/amey-exim-logo.png",
  "description": "Global exporter of pharmaceutical, agricultural, and cosmetic products",
  "sameAs": [
    "https://www.linkedin.com/company/amey-exim",
    "https://www.facebook.com/ameyexim",
    "https://www.twitter.com/ameyexim"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "availableLanguage": "en"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "250"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background`}>
        <Header />
        <main>
          {children}
        </main>
        <FooterSection />
        <Analytics />
      </body>
    </html>
  )
}
