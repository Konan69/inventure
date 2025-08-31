"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the revenue sharing model work?",
    answer:
      "Our revenue sharing model aligns everyone's incentives. Recruiters earn a percentage of successful placements, companies pay only for results, and our platform takes a small fee. This creates a performance-driven ecosystem where quality matches are prioritized over quantity.",
  },
  {
    question: "What makes your AI different from traditional recruiting?",
    answer:
      "Our AI learns from thousands of successful placements to understand not just skills, but cultural fit, growth potential, and long-term success indicators. It continuously improves by analyzing placement outcomes and recruiter feedback.",
  },
  {
    question: "How fast can you fill critical roles?",
    answer:
      "Most roles are filled within 7-14 days, compared to 45-60 days with traditional agencies. Our network of specialized recruiters and AI matching significantly accelerates the process while maintaining quality.",
  },
  {
    question: "What types of roles do you specialize in?",
    answer:
      "We excel in tech, sales, marketing, and executive roles across startups to enterprise companies. Our recruiter network includes specialists in every major industry and role type.",
  },
  {
    question: "How do you ensure candidate quality?",
    answer:
      "Quality is ensured through multiple layers: AI pre-screening, recruiter expertise, structured interviews, and our performance-based payment model. Recruiters only get paid for successful, long-term placements.",
  },
  {
    question: "What's the cost compared to traditional agencies?",
    answer:
      "Typically 30-50% less than traditional agencies due to our efficient model. You pay only for successful placements, with transparent pricing based on role level and complexity.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl mb-4">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about modern recruiting
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className=" px-6 data-[state=open]:bg-muted/30 transition-all"
            >
              <AccordionTrigger className="text-left font-normal hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
