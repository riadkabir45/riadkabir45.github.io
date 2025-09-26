import Page from "@/components/Page";
import { scanMarkdowns } from "@/utils/mdFiles";
import Image from "next/image";
import PostCard from "@/components/PostCard";

export default function Home() {

  const mdFiles = scanMarkdowns('posts');

  return (
    <div className="container mx-auto px-4 py-8">
      <Page className="flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Image 
            className="rounded-full mx-auto shadow-lg border-4 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors" 
            priority={true} 
            src="/profile.png" 
            alt="Profile Picture" 
            width={120} 
            height={120} 
          />
          <div className="mt-8 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Welcome to RK Logs
            </h1>
            <div className="max-w-2xl mx-auto space-y-3 text-lg text-gray-600 dark:text-gray-400">
              <p className="text-xl">Your personal knowledge base and blog!</p>
              <p>A unique combination of wikipedia-style documentation and insightful blog posts.</p>
              <p>Documenting everything learned throughout the coding journey.</p>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="mt-8 flex gap-4 justify-center">
            <a 
              href="/posts" 
              className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Explore Posts
            </a>
            <a 
              href="/wiki" 
              className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Browse Wiki
            </a>
          </div>
        </div>

        {/* Featured Posts Section */}
        <section className="w-full max-w-6xl mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Featured Posts</h2>
              <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 rounded-full"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mdFiles.getFeaturedPosts().slice(0, 2).map(post => (
              <PostCard key={post.meta.id} {...post.meta} />
            ))}
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="w-full max-w-6xl">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Recent Posts</h2>
              <div className="w-1 h-8 bg-gradient-to-b from-teal-600 to-green-600 dark:from-teal-400 dark:to-green-400 rounded-full"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mdFiles.getPostsByDate(false).slice(0, 5).map(post => (
              <PostCard key={post.meta.id} {...post.meta} />
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-8">
            <a 
              href="/posts" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 font-medium"
            >
              View All Posts
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </Page>
    </div>
  );
}
