"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const BlogContent = dynamic(() => import("./blog-content"), {
  ssr: false,
  loading: () => (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="animate-pulse space-y-8">
        <div className="h-96 bg-muted rounded-lg"></div>
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-64 bg-muted rounded-lg"></div>
              <div className="space-y-2">
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-background border-b border-border pb-16 pt-2.5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-none">
              Latest Insights
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
              Research and ideas on talent acquisition, performance-based
              pricing, and building high-performing recruiting organizations.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-background border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search articles..."
              className="pl-12 py-4 text-lg bg-background border-border focus:border-foreground font-medium transition-all"
            />
          </div>
        </div>
      </div>

      <BlogContent />
    </main>
  );
}
