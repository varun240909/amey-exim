'use client';

import Image from 'next/image';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  details: string[];
  image: string;
  isEven?: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  details,
  image,
  isEven = false,
}: ProcessStepProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-20 md:py-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      <div className={isEven ? 'md:order-2' : ''}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className={isEven ? 'md:order-1' : ''}>
        <span className="inline-block mb-4 text-5xl font-bold text-accent/30">
          {String(number).padStart(2, '0')}
        </span>
        <h3 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
          {title}
        </h3>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {details.map((detail, idx) => (
            <li key={idx} className="flex gap-3 text-muted-foreground">
              <span className="text-accent font-medium">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
