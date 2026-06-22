"use client";

import Link from "next/link";

const footerLinks = {
  divisions: [
    { label: "Pharmaceutical", href: "#divisions" },
    { label: "Agricultural", href: "#divisions" },
    { label: "Cosmetics", href: "#divisions" },
    { label: "Our Promise", href: "#promise" },
  ],
  company: [
    { label: "About AMEY EXIM", href: "#" },
    { label: "Quality Standards", href: "#" },
    { label: "Certifications", href: "#" },
    { label: "Careers", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Compliance", href: "#" },
    { label: "Partners", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="inline-block h-12">
              <img src="/amey-exim-logo.png" alt="AMEY EXIM" className="h-full w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Global exporter of premium pharmaceutical, agricultural, and cosmetic products with complete transparency and quality assurance.
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Divisions</h4>
            <ul className="space-y-3">
              {footerLinks.divisions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 AMEY EXIM Company. All rights reserved. Committed to quality, trust, and global excellence.
          </p>

          

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
