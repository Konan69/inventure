"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Save, Eye } from "lucide-react";
import { createBlogPost } from "@/lib/actions-mock";
import { RichTextEditor } from "@/components/tiptap";

function SubmitButton() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="flex gap-2">
      <Button
        type="submit"
        name="status"
        value="draft"
        disabled={isSubmitting}
        variant="outline"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          <>
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </>
        )}
      </Button>
      <Button
        type="submit"
        name="status"
        value="published"
        disabled={isSubmitting}
        className="bg-[#C41E3A] hover:bg-[#A01729] text-foreground"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Publishing...
          </>
        ) : (
          <>
            <Eye className="mr-2 h-4 w-4" />
            Publish
          </>
        )}
      </Button>
    </div>
  );
}

export default function BlogPostForm() {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = createBlogPost(null, formData);

    if (result && "error" in result) {
      setMessage({ type: "error", text: result.error });
    } else if (result && "success" in result) {
      setMessage({ type: "success", text: result.success });

      // Clear the form after successful submission
      const form = document.querySelector("form") as HTMLFormElement;
      if (form) {
        form.reset();
        setContent("");
      }
    }
  };

  return (
    <form action={handleSubmit} className="max-w-4xl mx-auto space-y-6">
      {message && (
        <div
          className={`border px-4 py-3 rounded ${
            message.type === "error"
              ? "bg-red-50 border-red-200 text-red-700"
              : "bg-green-50 border-green-200 text-green-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Post Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              required
              placeholder="Enter post title..."
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              name="excerpt"
              placeholder="Brief description of the post..."
              className="mt-1"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div className="mt-1">
              <RichTextEditor onContentChange={setContent} />
            </div>
            <Textarea
              id="content"
              name="content"
              value={content}
              className="hidden"
              readOnly
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}
