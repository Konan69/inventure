"use client";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { mockBlogPosts, mockCategories, type MockBlogPost, type MockCategory } from "../mock-data";

interface BlogStore {
	// State
	posts: MockBlogPost[];
	categories: MockCategory[];
	isLoading: boolean;
	error: string | null;

	// Actions
	setPosts: (posts: MockBlogPost[]) => void;
	addPost: (post: MockBlogPost) => void;
	updatePost: (id: string, updates: Partial<MockBlogPost>) => void;
	deletePost: (id: string) => void;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;

	// Computed getters
	getPublishedPosts: () => MockBlogPost[];
	getPostById: (id: string) => MockBlogPost | undefined;
	getPostBySlug: (slug: string) => MockBlogPost | undefined;
	getFeaturedPosts: (limit?: number) => MockBlogPost[];
	getPostsByCategory: (categorySlug: string) => MockBlogPost[];
	getPostsByStatus: (status: MockBlogPost['status']) => MockBlogPost[];
	getTotalPosts: () => number;
}

export const useBlogStore = create<BlogStore>()(
	immer(
		persist(
			(set, get) => ({
				// Initial state
				posts: mockBlogPosts,
				categories: mockCategories,
				isLoading: false,
				error: null,

				// Actions
				setPosts: (posts) =>
					set((state) => {
						state.posts = posts;
					}),

				addPost: (post) =>
					set((state) => {
						state.posts.push(post);
					}),

				updatePost: (id, updates) =>
					set((state) => {
						const postIndex = state.posts.findIndex((p) => p.id === id);
						if (postIndex !== -1) {
							state.posts[postIndex] = { ...state.posts[postIndex], ...updates };
						}
					}),

				deletePost: (id) =>
					set((state) => {
						state.posts = state.posts.filter((p) => p.id !== id);
					}),

				setLoading: (loading) =>
					set((state) => {
						state.isLoading = loading;
					}),

				setError: (error) =>
					set((state) => {
						state.error = error;
					}),

				// Computed getters
				getPublishedPosts: () => {
					const { posts } = get();
					return posts.filter((post) => post.status === "published");
				},

				getPostById: (id) => {
					const { posts } = get();
					return posts.find((post) => post.id === id);
				},

				getPostBySlug: (slug) => {
					const { posts } = get();
					return posts.find((post) => post.slug === slug);
				},

				getFeaturedPosts: (limit = 3) => {
					const { posts } = get();
					return posts
						.filter((post) => post.status === "published")
						.sort((a, b) => (b.views || 0) - (a.views || 0))
						.slice(0, limit);
				},

				getPostsByCategory: (categorySlug) => {
					const { posts } = get();
					return posts.filter((post) =>
						post.categories?.some((cat) => cat.slug === categorySlug)
					);
				},

				getPostsByStatus: (status) => {
					const { posts } = get();
					return posts.filter((post) => post.status === status);
				},

				getTotalPosts: () => {
					const { posts } = get();
					return posts.length;
				},
			}),
			{
				name: 'blog-store',
				partialize: (state: BlogStore) => ({
					posts: state.posts,
					categories: state.categories,
				}),
				skipHydration: typeof window === 'undefined',
			}
		)
	)
);

// Helper functions for creating/updating posts
export const createBlogPost = (postData: {
	title: string;
	content: string;
	excerpt: string;
	status: MockBlogPost['status'];
	tags: string[];
	categories?: MockCategory[];
	featured_image?: string;
}) => {
	const newPost: MockBlogPost = {
		id: Date.now().toString(),
		title: postData.title,
		slug: postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
		excerpt: postData.excerpt,
		content: postData.content,
		featured_image: postData.featured_image || null,
		author_id: "mock-admin-id", // Default admin author
		status: postData.status,
		tags: postData.tags,
		reading_time: Math.ceil(postData.content.split(' ').length / 200), // Rough estimate
		views: 0,
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		published_at: postData.status === "published" ? new Date().toISOString() : null,
		profiles: {
			full_name: "",
			avatar_url: null,
		},
		categories: postData.categories || [],
	};

	useBlogStore.getState().addPost(newPost);

	console.log(useBlogStore.getState().posts);
	return { success: "Blog post created successfully", post: newPost };
};

export const updateBlogPost = (id: string, postData: {
	title: string;
	content: string;
	excerpt: string;
	status: MockBlogPost['status'];
	tags: string[];
	categories?: MockCategory[];
	featured_image?: string;
}) => {
	const updates: Partial<MockBlogPost> = {
		title: postData.title,
		slug: postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
		excerpt: postData.excerpt,
		content: postData.content,
		featured_image: postData.featured_image || null,
		status: postData.status,
		tags: postData.tags,
		updated_at: new Date().toISOString(),
		published_at: postData.status === "published" ? new Date().toISOString() : null,
	};

	if (postData.categories) {
		updates.categories = postData.categories;
	}

	useBlogStore.getState().updatePost(id, updates);
	return { success: "Blog post updated successfully" };
};

export const deleteBlogPost = (id: string) => {
	useBlogStore.getState().deletePost(id);
	return { success: "Blog post deleted successfully" };
};
