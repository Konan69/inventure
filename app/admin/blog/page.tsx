"use client";
import Link from "next/link";
import AdminHeader from "@/components/admin/admin-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye, FileText } from "lucide-react";
import { deleteBlogPost } from "@/lib/stores/blog-store";
import { useBlogStore } from "@/lib/stores/blog-store";

export default function AdminBlogPage() {
  const posts = useBlogStore((state) => state.posts);
  const totalPosts = useBlogStore((state) => state.getTotalPosts());

  const handleDelete = (id: string) => {
    deleteBlogPost(id);
  };

  return (
    <>
      <AdminHeader
        title="Blog Posts"
        description="Manage your blog posts and articles"
      />

      <div className="flex-1 overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">All Posts</h2>
            <p className="text-sm text-muted-foreground">
              {totalPosts} total posts
            </p>
          </div>
          <Link href="/admin/blog/new">
            <Button className="bg-[#C41E3A] hover:bg-[#A01729] text-foreground">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </Link>
        </div>

        <div className="grid gap-4">
          {posts?.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {post.title}
                      </h3>
                      <Badge
                        variant={
                          post.status === "published"
                            ? "default"
                            : post.status === "draft"
                            ? "secondary"
                            : "destructive"
                        }
                        className={
                          post.status === "published"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                      >
                        {post.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>By {post.profiles?.full_name || "Unknown"}</span>
                      <span>•</span>
                      <span>
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views || 0} views
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Link href={`/blog/${post.slug}`} target="_blank">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={`/admin/blog/${post.id}/edit`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      onClick={() => handleDelete(post.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {(!posts || posts.length === 0) && (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No blog posts yet
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get started by creating your first blog post.
                </p>
                <Link href="/admin/blog/new">
                  <Button className="bg-[#C41E3A] hover:bg-[#A01729] text-foreground">
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Post
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
