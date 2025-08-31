"use client";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Users,
  Cpu,
  Handshake,
  BarChart3,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  Calendar,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useBlogStore } from "@/lib/stores/blog-store";

const features = [
  {
    icon: Users,
    title: "Elite Network",
    description: "Connect with top 1% of recruiters and industry leaders",
    color: "",
    stats: "2,500+ members",
  },
  {
    icon: Cpu,
    title: "AI Intelligence",
    description: "Smart matching with 94% placement accuracy",
    color: "",
    stats: "50K+ matches",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Exclusive insights and proven strategies",
    color: "",
    stats: "1,200+ resources",
  },
  {
    icon: Handshake,
    title: "Deal Sharing",
    description: "Collaborate on high-value opportunities",
    color: "from-orange-500 to-red-500",
    stats: "$50M+ shared",
  },
  {
    icon: BarChart3,
    title: "Market Analytics",
    description: "Real-time industry trends and salary data",
    color: "from-indigo-500 to-purple-500",
    stats: "Live updates",
  },
  {
    icon: MessageSquare,
    title: "Daily Discussions",
    description: "Active debates on sourcing and strategy",
    color: "from-pink-500 to-rose-500",
    stats: "500+ daily",
  },
];

export interface CommunitySectionProps {
  header?: string;
  subheader?: string;
}

export function CommunitySection({}: CommunitySectionProps) {
  const { getPublishedPosts } = useBlogStore();
  const posts = getPublishedPosts();
  const topThree = posts.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* Features Grid */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">
            Everything You Need to
            <span className="text-primary"> Scale Your Practice</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the most exclusive recruiting community designed for ambitious
            professionals who demand excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-card to-card/50 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                    <Icon className="h-7 w-7 filter grayscale" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-3">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <TrendingUp className="h-4 w-4 filter grayscale" />
                      <span>{feature.stats}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Latest Insights */}
      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Insights</h2>
            <p className="text-muted-foreground">
              Fresh perspectives from our community leaders
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/community/blog" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform filter grayscale" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topThree.map((post, index) => (
            <article
              key={post.id}
              className="group relative overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.featured_image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    {post.categories?.slice(0, 2).map((category, catIndex) => (
                      <Badge
                        key={catIndex}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {category.name}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 filter grayscale" />
                      <span>
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 " />
                      <span>{Math.floor(Math.random() * 50) + 10}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {topThree.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-4">
              <BookOpen className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
            <p className="text-muted-foreground mb-6">
              Be the first to share insights with our community
            </p>
            <Button asChild>
              <Link href="/admin/blog/new">Create First Post</Link>
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 text-center">
        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">
            Ready to Accelerate Your Success?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the most powerful recruiting community and transform your
            practice with cutting-edge tools and exclusive insights.
          </p>
          <Button size="lg" className="group">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform filter grayscale" />
          </Button>
        </div>

        <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent" />
      </div>
    </section>
  );
}

export default CommunitySection;
