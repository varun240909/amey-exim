import Image from 'next/image';
import { InquiryForm } from '@/components/inquiry-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact AMEY EXIM | Get in Touch | Global Exporter',
  description: 'Contact AMEY EXIM for export inquiries, partnerships, or product information. Reach out to our team for pharmaceutical, agricultural, and cosmetic products.',
  keywords: 'contact AMEY EXIM, export inquiries, partnership, get in touch, global exporter contact',
  openGraph: {
    title: 'Contact AMEY EXIM',
    description: 'Get in touch with our team for inquiries and partnerships',
    url: 'https://amey-exim.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pain-points-communication.png"
            alt="Contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
        </div>

        <div className="relative z-10 flex h-[60vh] flex-col items-start justify-center px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium uppercase tracking-widest">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tighter text-white mb-4">
              Contact AMEY EXIM
            </h1>
            <p className="text-xl md:text-2xl text-white/80">
              We&apos;re ready to discuss your sourcing needs and partnership opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '📍',
                title: 'Headquarters',
                content: 'AMEY EXIM Company\nNew Delhi, India',
              },
              {
                icon: '📧',
                title: 'Email',
                content: 'info@ameyexim.com\nsales@ameyexim.com\nsupport@ameyexim.com',
              },
              {
                icon: '📞',
                title: 'Phone',
                content: '+91 (11) XXXX-XXXX\n+1-800-AMEY-EXP\nAvailable 24/7',
              },
            ].map((contact, idx) => (
              <div key={idx} className="bg-secondary rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {contact.title}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {contact.content}
                </p>
              </div>
            ))}
          </div>

          {/* Office Hours */}
          <div className="bg-secondary rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-medium text-foreground mb-6 text-center">
              Office Hours
            </h2>
            <div className="space-y-3 text-center">
              <p className="text-muted-foreground">
                <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM IST
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM IST
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Sunday:</span> Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6 text-center">
            Send us Your Inquiry
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Fill out the form below and we&apos;ll get back to you within 24 hours with a personalized response.
          </p>

          <div className="bg-background rounded-xl p-8 md:p-12 border border-border">
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Division Contacts */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Division Contacts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                division: 'Pharmaceutical Division',
                email: 'pharma@ameyexim.com',
                specialization: 'APIs, finished dosages, nutraceuticals',
              },
              {
                division: 'Agricultural Division',
                email: 'agri@ameyexim.com',
                specialization: 'Crops, spices, organic products',
              },
              {
                division: 'Cosmetic Division',
                email: 'cosmetic@ameyexim.com',
                specialization: 'Beauty, skincare, personal care',
              },
            ].map((div, idx) => (
              <div key={idx} className="bg-secondary rounded-xl p-8">
                <h3 className="text-xl font-medium text-foreground mb-4">
                  {div.division}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-medium">Email:</span> {div.email}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Focus:</span> {div.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12 text-center">
            Visit Our Facilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Headquarters
              </h3>
              <p className="text-muted-foreground mb-4">
                Our main office and operations center located in the heart of New Delhi.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">AMEY EXIM Company</p>
                <p className="text-muted-foreground">New Delhi, India</p>
                <p className="text-muted-foreground">+91 (11) XXXX-XXXX</p>
              </div>
            </div>

            <div className="bg-background rounded-xl p-8 border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Regional Offices
              </h3>
              <p className="text-muted-foreground mb-4">
                We have regional representatives across major markets globally.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">North America, Europe, Middle East</p>
                <p className="text-muted-foreground">Asia-Pacific, and Africa</p>
                <p className="text-muted-foreground">Contact us for nearest location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
            Why Partner With AMEY EXIM?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Decades of export expertise',
              'Global network and reach',
              '99.8% quality rating',
              'Complete transparency',
              'Fair pricing and terms',
              '24/7 dedicated support',
              'Customized solutions',
              'Fast response times',
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-3 items-start bg-secondary rounded-lg p-4">
                <span className="text-accent text-lg flex-shrink-0">✓</span>
                <span className="text-muted-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'What is your minimum order quantity?',
                answer: 'MOQs vary by product and division. Contact us with specific product interests for customized quotes.',
              },
              {
                question: 'How long is your lead time?',
                answer: 'Standard lead time is 30-45 days. Expedited orders may be available for additional fees.',
              },
              {
                question: 'Do you offer samples?',
                answer: 'Yes, we provide samples for qualified inquiries. Contact our sales team for sample requests.',
              },
              {
                question: 'What are your payment terms?',
                answer: 'We offer flexible payment options including L/C, T/T, and other arrangements based on credit history.',
              },
              {
                question: 'Do you provide certifications?',
                answer: 'All products come with complete certifications including COA, compliance documents, and traceability records.',
              },
              {
                question: 'Can you customize products?',
                answer: 'Yes, we offer customization services for packaging, labeling, and formulations where applicable.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 md:px-12 lg:px-20 md:py-32 bg-foreground text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Ready to Start?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Send us an inquiry today and discover how AMEY EXIM can meet your export needs with excellence and integrity.
          </p>
          <a
            href="#contact-form"
            className="inline-block px-8 py-3 bg-accent text-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Send Inquiry Now
          </a>
        </div>
      </section>
    </main>
  );
}
