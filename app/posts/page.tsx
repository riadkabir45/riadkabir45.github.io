import PostCard from "@/components/PostCard";
import { scanMarkdowns } from "@/utils/mdFiles";
import React from "react";

function Posts() {
    const mdFiles = scanMarkdowns('posts');
    const allPosts = mdFiles.getAllPosts();
    const featuredPosts = mdFiles.getFeaturedPosts();
    const regularPosts = mdFiles.getNonFeaturedPosts();

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
                    All Posts
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Explore all articles, tutorials, and insights from the coding journey.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                        {allPosts.length}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Total Posts</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
                    <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                        {featuredPosts.length}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Featured</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {new Set(allPosts.map(p => p.meta.category)).size}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">Categories</div>
                </div>
            </div>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
                <section className="mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-8 bg-gradient-to-b from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 rounded-full"></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Featured Posts</h2>
                            <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 rounded-full"></div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {featuredPosts.map(post => (
                            <PostCard key={post.meta.id} {...post.meta} />
                        ))}
                    </div>
                </section>
            )}

            {/* All Posts */}
            <section>
                <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                            {featuredPosts.length > 0 ? 'Recent Posts' : 'All Posts'}
                        </h2>
                        <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 rounded-full"></div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {(allPosts).map(post => (
                        <PostCard key={post.meta.id} {...post.meta} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Posts;