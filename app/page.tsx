import HeroSection from "@/components/recruitment/HeroSection";
import ServicesAndPlatform from "@/components/recruitment/ServicesAndPlatform";
import { MetricsDisplay } from "@/components/recruitment/MetricsDisplay";
import { Pointer } from "@/components/magicui/pointer";
import { CTASection } from "@/components/recruitment/CTASection";
import { FAQSection } from "@/components/recruitment/FAQSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Pointer className="fill-primary" />

      <HeroSection
        title="Recruiting Without Limits"
        subtitle="Speed and Scale"
        body="Connect with top recruiters who only get paid when they deliver results. No retainers, no excuses, no mediocre candidates."
        valueProp="Ready to fill critical roles in days, not months?"
        socialProof=""
        primaryCTA={{ href: "/contact", label: "Find Your Next Hire" }}
        secondaryCTA={{ href: "/services", label: "See How It Works" }}
        rightVisual={
          <div className="relative">
            {/* Professional Dashboard Mockup */}
            <div className="bg-card border border-border/50 rounded-2xl shadow-lg overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-muted/30 px-6 py-4 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">⚡</span>
                    </div>
                    <span className="font-semibold text-sm">
                      Recruitment Dashboard
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-muted-foreground">
                      Live Matching
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Active Searches Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium">Active Searches</h3>
                    <span className="text-xs text-muted-foreground">
                      5 brokers competing
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <span className="text-xs">👨‍💻</span>
                        </div>
                        <span className="text-sm font-medium">
                          Senior React Developer
                        </span>
                      </div>
                      <span className="text-xs bg-green-500/20 text-green-700 px-2 py-1 rounded">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <span className="text-xs">👔</span>
                        </div>
                        <span className="text-sm font-medium">
                          VP of Marketing
                        </span>
                      </div>
                      <span className="text-xs bg-orange-500/20 text-orange-700 px-2 py-1 rounded">
                        Screening
                      </span>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-muted/10 rounded-lg">
                    <div className="text-lg font-bold text-foreground">12</div>
                    <div className="text-xs text-muted-foreground">
                      Candidates
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted/10 rounded-lg">
                    <div className="text-lg font-bold text-foreground">
                      3.2d
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Avg Fill
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted/10 rounded-lg">
                    <div className="text-lg font-bold text-foreground">96%</div>
                    <div className="text-xs text-muted-foreground">Success</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle background elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-muted/20 to-muted/5 rounded-3xl blur-2xl" />
          </div>
        }
      />

      <div className="py-12">
        <MetricsDisplay />
      </div>

      <div className="py-12">
        <ServicesAndPlatform />
      </div>

      <div className="py-16">
        <CTASection
          headline="Ready to hire with speed and certainty?"
          subtext="Talk to our team and see how revenue sharing and AI can transform your recruiting."
          cta={{ href: "/contact", label: "Get Started" }}
        />
      </div>

      <div className="py-16 bg-muted/5">
        <FAQSection />
      </div>
    </main>
  );
}
