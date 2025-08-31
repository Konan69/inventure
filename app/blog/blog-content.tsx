"use client";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowUpRight } from "lucide-react";
import { useBlogStore } from "@/lib/stores/blog-store";
import { useMemo } from "react";

export default function BlogContent() {
  const posts = useBlogStore((state) => state.posts);

  // Memoize the published posts to prevent infinite re-renders
  const publishedPosts = useMemo(() => {
    return posts.filter((post) => post.status === "published");
  }, [posts]);

  const [featuredPost, ...regularPosts] = publishedPosts;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {featuredPost && (
        <article className="mb-24 group cursor-pointer">
          <Link href={`/blog/${featuredPost.slug}`} className="block">
            <div className="relative h-96 lg:h-[500px] overflow-hidden bg-muted mb-8">
              <Image
                src={
                  featuredPost.featured_image ||
                  "/placeholder.svg?height=500&width=1200"
                }
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-4">
                  {featuredPost.categories
                    ?.slice(0, 2)
                    .map((category, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-foreground/20 text-foreground border-foreground/30 font-bold"
                      >
                        {category.name}
                      </Badge>
                    ))}
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-foreground/90 text-lg font-medium max-w-2xl leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-muted-foreground font-bold">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.reading_time || 5} min read</span>
                </div>
                <span>
                  {new Date(featuredPost.published_at || "").toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>

              <div className="flex items-center gap-2 text-foreground font-black group-hover:gap-4 transition-all">
                <span>Read Article</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </div>
            </div>
          </Link>
        </article>
      )}

      <div className="grid gap-12 md:grid-cols-2">
        {regularPosts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-64 overflow-hidden bg-muted mb-6">
                <Image
                  src={
                    post.featured_image ||
                    "/placeholder.svg?height=300&width=500"
                  }
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {post.categories?.slice(0, 2).map((category, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="font-bold border-border"
                    >
                      {category.name}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-muted-foreground font-medium leading-relaxed text-base">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-bold">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.reading_time || 5} min</span>
                    </div>
                    <span>
                      {new Date(post.published_at || "").toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-foreground font-black group-hover:gap-4 transition-all">
                    <span className="text-sm">Read</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
