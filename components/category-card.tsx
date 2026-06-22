'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  href: string;
}

export function CategoryCard({
  title,
  description,
  image,
  badge,
  href,
}: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="group cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          <span className="absolute bottom-4 left-4 px-3 py-1 bg-accent text-foreground text-xs font-medium rounded-full">
            {badge}
          </span>
        </div>
        <h3 className="text-2xl font-medium text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
