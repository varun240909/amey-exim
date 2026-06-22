"use client";

const stats = [
  { label: "Countries", value: "50+" },
  { label: "Products", value: "1000+" },
  { label: "Certifications", value: "100%" },
  { label: "Quality Rate", value: "99.8%" },
];

export function EditorialSection() {
  return (
    <section className="bg-foreground">
      {/* CTA Section */}
      <div className="px-6 py-12 text-center md:px-12 md:py-16 lg:px-20 lg:py-20">
        <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
          Let&apos;s Build Something Together.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Partner with AMEY EXIM for premium exports with complete transparency, rigorous quality control, and global reach.
        </p>
        <button className="mt-8 px-8 py-3 bg-accent text-foreground font-medium rounded-full hover:bg-accent/90 transition-colors">
          Get in Touch
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4 bg-foreground">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-r border-white/10 p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-white/60">
              {stat.label}
            </p>
            <p className="font-medium text-white text-4xl">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
