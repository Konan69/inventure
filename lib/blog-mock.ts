import { mockBlogOperations, mockCategories, type MockBlogPost, type MockCategory } from "./mock-data"

// Re-export types for compatibility
export type { MockBlogPost as BlogPost, MockCategory as Category } from "./mock-data"

export async function getBlogPosts(limit?: number): Promise<MockBlogPost[]> {
  // Simulate async operation
  return mockBlogOperations.getPublishedPosts(limit)
}

export async function getBlogPost(slug: string): Promise<MockBlogPost | null> {
  // Simulate async operation
  return mockBlogOperations.getPostBySlug(slug)
}

export async function getCategories(): Promise<MockCategory[]> {
  // Simulate async operation
  return [...mockCategories]
}

export async function getFeaturedPosts(limit = 3): Promise<MockBlogPost[]> {
  // Simulate async operation
  return mockBlogOperations.getFeaturedPosts(limit)
}

// Admin functions
export async function getAllBlogPosts(): Promise<MockBlogPost[]> {
  // Simulate async operation
  return mockBlogOperations.getAllPosts()
}

export async function getBlogPostById(id: string): Promise<MockBlogPost | null> {
  // Simulate async operation
  return mockBlogOperations.getAllPosts().find((post) => post.id === id) || null
}
