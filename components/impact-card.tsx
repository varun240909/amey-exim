'use client';

import Image from 'next/image';

interface ImpactCardProps {
  title: string;
  metric: string;
  description: string;
  image: string;
}

export function ImpactCard({
  title,
  metric,
  description,
  image,
}: ImpactCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {metric}
      </div>
      <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
