import {
  Mail,
  MessageCircle,
  Users,
  ArrowUpRight,
  Briefcase,
  Clock,
  Target,
  Zap,
  Sparkles,
} from "lucide-react";
import { Pointer } from "@/components/magicui/pointer";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
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
              <span>Connect with Elite Recruiters</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-none tracking-tight">
              Let's Build Your
              <WordRotate
                className="text-primary"
                words={["Team", "Network", "Future", "Vision", "Success"]}
                duration={3500}
              />
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              Ready to transform your hiring process? Get access to elite
              recruiters and top-tier talent faster than traditional agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Hiring Inquiry */}
            <Card className="group border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-black">
                      Hiring Needs
                    </CardTitle>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-lg font-medium text-muted-foreground">
                  Get matched with elite recruiters who deliver results. 3x
                  faster hiring with guaranteed quality.
                </CardDescription>
                <Button
                  className="w-full font-bold text-lg py-6 bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href="mailto:hiring@inventure.com">Start Hiring Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Partnership Inquiry */}
            <Card className="group border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-black">
                      Join Network
                    </CardTitle>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-lg font-medium text-muted-foreground">
                  Become part of our elite recruiter network. Access premium
                  clients and transparent commission sharing.
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full font-bold text-lg py-6 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="mailto:partners@inventure.com">Apply to Join</a>
                </Button>
              </CardContent>
            </Card>

            {/* General Inquiry */}
            <Card className="group border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MessageCircle className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-black">
                      Questions
                    </CardTitle>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-lg font-medium text-muted-foreground">
                  Have questions about our platform, pricing, or how we work?
                  We're here to help.
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full font-bold text-lg py-6 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="mailto:hello@inventure.com">Get in Touch</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 border-b bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border">
              <CardContent className="pt-6 text-center space-y-3">
                <Clock className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-bold text-lg">24-48 Hour Response</h4>
                <p className="text-sm text-muted-foreground">
                  Fast turnaround on all inquiries
                </p>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="pt-6 text-center space-y-3">
                <Target className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-bold text-lg">95% Success Rate</h4>
                <p className="text-sm text-muted-foreground">
                  Proven track record of quality matches
                </p>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="pt-6 text-center space-y-3">
                <Zap className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-bold text-lg">3x Faster Hiring</h4>
                <p className="text-sm text-muted-foreground">
                  Accelerated recruitment process
                </p>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="pt-6 text-center space-y-3">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-bold text-lg">500+ Companies</h4>
                <p className="text-sm text-muted-foreground">
                  Trusted by growing businesses
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-primary/50 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-12 lg:p-16">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-foreground">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                Join 500+ companies who've accelerated their hiring with our
                AI-powered recruitment network. Get matched with elite
                recruiters who deliver results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                  size="lg"
                  className="font-bold text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                  asChild
                >
                  <a href="mailto:hiring@inventure.com">Start Hiring Today</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-bold text-lg px-8 py-6 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="/services">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
