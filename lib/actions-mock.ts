"use client"

import { createBlogPost as createBlogPostStore, updateBlogPost as updateBlogPostStore, deleteBlogPost as deleteBlogPostStore } from "./stores/blog-store"

export function signIn(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const password = formData.get("password")

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  // Simple mock authentication for demo
  if (email === "admin@iinventure.com" && password === "admin123") {
    return { success: true }
  }

  return { error: "Invalid email or password" }
}

export function signOut() {
  // Simple sign out - in a real app this would clear session/tokens
  window.location.href = "/admin/login"
}

export function createBlogPost(prevState: any, formData: FormData) {
  const title = formData.get("title")
  const content = formData.get("content")
  const excerpt = formData.get("excerpt")
  const status = formData.get("status") || "draft"
  const tags =
    formData
      .get("tags")
      ?.toString()
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean) || []

  if (!title || !content) {
    return { error: "Title and content are required" }
  }

  try {
    const result = createBlogPostStore({
      title: title.toString(),
      content: content.toString(),
      excerpt: excerpt?.toString() || "",
      status: status.toString() as any,
      tags,
      categories: [], // You can extend this to handle categories
    })

    return result
  } catch (error) {
    console.error("Error creating blog post:", error)
    return { error: "Failed to create blog post" }
  }
}

export function updateBlogPost(id: string, prevState: any, formData: FormData) {
  const title = formData.get("title")
  const content = formData.get("content")
  const excerpt = formData.get("excerpt")
  const status = formData.get("status") || "draft"
  const tags =
    formData
      .get("tags")
      ?.toString()
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean) || []

  if (!title || !content) {
    return { error: "Title and content are required" }
  }

  try {
    const result = updateBlogPostStore(id, {
      title: title.toString(),
      content: content.toString(),
      excerpt: excerpt?.toString() || "",
      status: status.toString() as any,
      tags,
    })

    return result
  } catch (error) {
    console.error("Error updating blog post:", error)
    return { error: "Failed to update blog post" }
  }
}

export function deleteBlogPost(id: string) {
  try {
    const result = deleteBlogPostStore(id)
    return result
  } catch (error) {
    console.error("Error deleting blog post:", error)
    throw error
  }
}
