"use client";
import AdminHeader from "@/components/admin/admin-header";
import BlogPostForm from "@/components/admin/blog-post-form";

export default function NewBlogPostPage() {
  return (
    <>
      <AdminHeader
        title="New Blog Post"
        description="Create a new blog post or article"
      />

      <div className="flex-1 overflow-auto p-6">
        <BlogPostForm />
      </div>
    </>
  );
}
