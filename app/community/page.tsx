import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

import { CommunitySection } from "@/components/recruitment/CommunitySection";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Pointer } from "@/components/magicui/pointer";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Button } from "@/components/ui/button";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Pointer className="fill-primary" />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Join 2,500+ Recruiting Professionals</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-none tracking-tight">
              Community That Moves{" "}
              <WordRotate
                className=""
                words={["Forward", "Ahead", "Together", "Onward", "Beyond"]}
                duration={3500}
              />
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              Connect with top recruiters, share insights, and discover
              opportunities in our exclusive network built for growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                Join Community
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Discussion
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <div className="w-20 h-20 rounded-full bg-primary/20 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-32 hidden lg:block">
          <div className="w-12 h-12 rounded-full bg-primary/10 animate-bounce" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary flex items-center justify-center">
                <NumberTicker value={2.5} delay={0} />
                <span>K+</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Active Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary flex items-center justify-center">
                <NumberTicker value={15} delay={0.2} />
                <span>K+</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Placements Made
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary flex items-center justify-center">
                <NumberTicker value={500} delay={0.4} />
                <span>+</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Daily Discussions
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary flex items-center justify-center">
                <NumberTicker value={98} delay={0.6} />
                <span>%</span>
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <CommunitySection />
    </main>
  );
}
