'use client';

import Image from 'next/image';

interface DivisionHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

export function DivisionHero({
  title,
  subtitle,
  description,
  image,
  badge,
}: DivisionHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      <div className="relative z-10 flex h-screen flex-col items-start justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <span className="inline-block mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium uppercase tracking-widest">
            {badge}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tighter text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-6">
            {subtitle}
          </p>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
