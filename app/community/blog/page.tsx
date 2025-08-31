import Link from "next/link";
import BlogContent from "../../blog/blog-content";

export default function CommunityBlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-background border-b border-border pb-16 pt-2.5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Link
              href="/community"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Community
            </Link>
          </div>
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-none">
              Community Blog
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
              All posts from the network, in one place.
            </p>
          </div>
        </div>
      </div>

      <BlogContent />
    </main>
  );
}
