"use client";

import {
  Bot,
  Handshake,
  Users,
  TrendingUp,
  Target,
  CheckCircle,
  Database,
  DollarSign,
  Headphones,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const FEATURES = [
  {
    Icon: Bot,
    name: "AI-Powered Matching",
    description:
      "Intelligent candidate-job matching that accelerates hiring without sacrificing quality.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 grayscale"
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy"
        alt="AI neural network visualization"
      />
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Handshake,
    name: "Revenue Sharing",
    description: "Aligned incentives—pay when hires succeed, not before.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 grayscale"
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center"
        alt="Business handshake partnership"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Users,
    name: "Community Network",
    description:
      "A competitive broker community that scales your reach and results.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 grayscale"
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center"
        alt="Team collaboration network"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: TrendingUp,
    name: "Predictive Analytics",
    description:
      "Forecast hire success using data-driven models and performance signals.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 grayscale"
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
        alt="Data analytics dashboard"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Target,
    name: "Unified Pipeline",
    description: "Visibility across roles, candidates, and teams in one place.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 grayscale"
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
        alt="Workflow management system"
      />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CheckCircle,
    name: "Quality Controls",
    description: "Retention milestones and QA guardrails built in by default.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 grayscale"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center"
        alt="Quality assurance checklist"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5",
  },
  {
    Icon: Database,
    name: "ATS Friendly",
    description: "Works alongside your existing systems and workflows.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 grayscale"
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center"
        alt="Technology integration systems"
      />
    ),
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-4 lg:row-end-5",
  },
  {
    Icon: DollarSign,
    name: "Transparent Pricing",
    description: "Simple, outcome-based pricing with no surprises.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 grayscale"
        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&crop=center"
        alt="Financial transparency concept"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-5 lg:row-end-6",
  },
  {
    Icon: Headphones,
    name: "24/7 Support",
    description: "Always-on access to our recruiting operations team.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500 grayscale"
        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop&crop=center"
        alt="Customer support team"
      />
    ),
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-5 lg:row-end-6",
  },
];

export function ServicesAndPlatform() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">
        What we do and how our platform powers it.
      </h2>

      <BentoGrid className="lg:grid-cols-3 lg:grid-rows-5">
        {FEATURES.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}

export default ServicesAndPlatform;
