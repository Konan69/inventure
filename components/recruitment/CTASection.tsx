"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface CTASectionProps {
  headline: string;
  subtext: string;
  cta: { href: string; label: string };
}

export function CTASection({ headline, subtext, cta }: CTASectionProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">{headline}</h2>
        <p className="text-lg mb-8">{subtext}</p>
        <Button asChild size="lg" variant="secondary">
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
      </div>
    </section>
  );
}

export default CTASection;
