"use client";

import { FadeImage } from "@/components/fade-image";

const timelineSteps = [
  {
    id: 1,
    step: "Step 1",
    name: "Initial Consultation",
    description: "Understanding your sourcing needs and requirements with personalized attention",
    image: "/images/promise-timeline-step1.png",
  },
  {
    id: 2,
    step: "Step 2",
    name: "Product Selection & Quality Check",
    description: "Rigorous inspection and testing of all products to meet international standards",
    image: "/images/promise-timeline-step2.png",
  },
  {
    id: 3,
    step: "Step 3",
    name: "Certification & Compliance",
    description: "Complete documentation and certification for regulatory compliance worldwide",
    image: "/images/promise-timeline-step3.png",
  },
  {
    id: 4,
    step: "Step 4",
    name: "Packaging & Preparation",
    description: "Professional packaging with full traceability codes and brand integrity",
    image: "/images/promise-timeline-step4.png",
  },
  {
    id: 5,
    step: "Step 5",
    name: "Global Delivery",
    description: "Secure shipping to your location with complete transparency tracking",
    image: "/images/promise-timeline-step5.png",
  },
];

export function CollectionSection() {
  return (
    <section id="promise" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          The AMEY Promise
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Our five-step process ensures quality, transparency, and reliability at every stage
        </p>
      </div>

      {/* Timeline Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {timelineSteps.map((step) => (
            <div key={step.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={step.image || "/placeholder.svg"}
                  alt={step.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-accent uppercase tracking-widest">
                    {step.step}
                  </p>
                  <h3 className="text-lg font-medium leading-snug text-foreground">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-5 gap-6 md:px-12 lg:px-20">
          {timelineSteps.map((step) => (
            <div key={step.id} className="group">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={step.image || "/placeholder.svg"}
                  alt={step.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium text-accent uppercase tracking-widest">
                    {step.step}
                  </p>
                  <h3 className="text-base font-medium leading-snug text-foreground">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
