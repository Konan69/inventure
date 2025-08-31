import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Eye, Share2, Calendar } from "lucide-react";
import { getBlogPost, getBlogPosts } from "@/lib/blog-mock";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// export async function generateMetadata({ params }: BlogPostPageProps) {
//   const { slug } = params;
//   const post = await getBlogPost(slug);

//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }

//   return {
//     title: post.title,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       images: post.featured_image ? [post.featured_image] : [],
//     },
//   };
// }

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  const displayPost = post;

  if (!displayPost) {
    notFound();
  }

  // Get related posts
  const relatedPosts = await getBlogPosts(3);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="pt-24">
        {/* Header */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/blog">
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                {displayPost.categories?.map((category, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm font-medium"
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl lg:text-5xl font-black leading-tight">
                {displayPost.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {displayPost.excerpt}
              </p>

              <div className="flex items-center justify-between py-6 border-t border-b border-border">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(
                        displayPost.published_at || ""
                      ).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{displayPost.reading_time || 5} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{displayPost.views || 0} views</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {displayPost.featured_image && (
          <div className="relative h-96 lg:h-[500px] overflow-hidden mb-12">
            <Image
              src={displayPost.featured_image || "/placeholder.svg"}
              alt={displayPost.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div
              className="leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: displayPost.content.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="py-16 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-black mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="group overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={
                          relatedPost.featured_image ||
                          "/placeholder.svg?height=300&width=500"
                        }
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-extrabold group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" className="p-0">
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
