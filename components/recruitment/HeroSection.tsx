"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import { TextEffect } from "@/components/core/text-effect";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Highlighter } from "@/components/magicui/highlighter";
import type { ReactNode } from "react";

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  body: string;
  valueProp: string;
  socialProof: string;
  primaryCTA: { href: string; label: string };
  secondaryCTA: { href: string; label: string };
  className?: string;
  rightVisual?: ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  body,
  valueProp,
  socialProof,
  primaryCTA,
  secondaryCTA,
  className,
  rightVisual,
}: HeroSectionProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground">
                  Recruiting{" "}
                  <Highlighter color="hsl(var(--primary))" action="highlight">
                    Without Limits
                  </Highlighter>
                </h1>

                <div className="text-xl lg:text-2xl text-muted-foreground font-normal">
                  <WordRotate
                    words={[
                      "Speed and Scale",
                      "Results Guaranteed",
                      "Elite Talent Only",
                      "Pay for Performance",
                    ]}
                    className="text-xl lg:text-2xl text-muted-foreground font-normal"
                    duration={3000}
                  />
                </div>
              </div>

              {/* Social Proof - Better Placement */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <NumberTicker
                    value={500}
                    className="font-semibold text-foreground"
                  />
                  <span className="text-muted-foreground ml-[-8px]">
                    + companies trust us
                  </span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground/40 rounded-full" />
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">
                    Average fill time:
                  </span>
                  <span className="font-semibold text-foreground">
                    3.2 days
                  </span>
                </div>
              </div>
            </div>

            {/* Body Content */}
            <div className="space-y-8">
              <p className="text-xl lg:text-2xl font-normal text-foreground leading-relaxed">
                Connect with top recruiters who{" "}
                <Highlighter color="hsl(var(--primary))" action="underline">
                  only get paid when they deliver results
                </Highlighter>
                . No retainers, no excuses, no mediocre candidates.
              </p>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground font-medium">
                  {valueProp}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg border border-border/50">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      Revenue sharing
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg border border-border/50">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      Elite brokers
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg border border-border/50">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      AI matching
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link
                    href={primaryCTA.href}
                    className="flex items-center justify-center"
                  >
                    {primaryCTA.label}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-muted-foreground/20"
                  asChild
                >
                  <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted/5  border-muted/20">
              {rightVisual ?? (
                <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-muted/30 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-16 h-16 mx-auto bg-muted/20 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground/80">
                        AI-Powered Matching
                      </p>
                      <p className="text-xs text-muted-foreground max-w-[200px]">
                        Connect with elite recruiters instantly
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Subtle background elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-muted/5 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-muted/5 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
