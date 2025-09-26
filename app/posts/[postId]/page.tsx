import { scanMarkdowns } from '@/utils/mdFiles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TableContent from '@/components/TableContent';
import getH2Headings from '@/utils/h2Headings';
import DarkModeToggle from '@/components/DarkModeToggle';
import React from 'react';

// Enhanced Post Navigation Component
function PostNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Home</span>
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Link
              href="/posts"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              All Posts
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

// Enhanced Post Header with Movie-like Design
function PostHeader({ post }: { post: any }) {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 rounded-3xl" />
      
      <div className="relative px-8 py-12">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {post.meta.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
          {post.meta.title}
        </h1>
        
        {/* Description */}
        <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
          {post.meta.description}
        </p>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-lg text-gray-500 dark:text-gray-400 mb-8">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{post.meta.author}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{new Date(post.meta.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          
          {post.meta.featured && (
            <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">Featured</span>
            </div>
          )}
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {post.meta.tags.map((tag: string) => (
            <span 
              key={tag}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ postId: string }> 
}) {
  const { postId } = await params;
  
  const mdFiles = scanMarkdowns('./posts');
  const post = mdFiles.getPostById(postId);
  
  if (!post) {
    notFound();
  }

  const h2Headings = getH2Headings(post.content);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Enhanced Navigation */}
      <PostNavigation />
      
      {/* Main Content Container */}
      <div className="pt-16">
        <div className="max-w-7xl mx-auto">
          {/* Movie-like Hero Section */}
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <PostHeader post={post} />
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 pb-16">
            {/* Table of Contents - Left Sidebar */}
            <aside className="lg:w-80 lg:flex-shrink-0">
              <div className="sticky top-24">
                <TableContent 
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6" 
                  content={h2Headings} 
                />
              </div>
            </aside>
            
            {/* Main Article Content */}
            <main className="flex-1 min-w-0">
              <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
                <div className="markdown-content prose prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ children, ...props }) => {
                        const text = children?.toString() || '';
                        const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
                        return (
                          <h2 
                            id={id} 
                            className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6 pb-3 border-b border-gray-200 dark:border-gray-700"
                            {...props}
                          >
                            {children}
                          </h2>
                        );
                      },
                      h3: ({ children, ...props }) => {
                        return (
                          <h3 
                            className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4"
                            {...props}
                          >
                            {children}
                          </h3>
                        );
                      },
                      code: ({ children, ...props }: any) => {
                        const isInline = !props.className;
                        if (isInline) {
                          return (
                            <code className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-sm font-mono" {...props}>
                              {children}
                            </code>
                          );
                        }
                        return (
                          <code className="block bg-gray-900 dark:bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto" {...props}>
                            {children}
                          </code>
                        );
                      },
                      blockquote: ({ children, ...props }) => {
                        return (
                          <blockquote className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4 my-6 rounded-r-lg" {...props}>
                            <div className="text-blue-800 dark:text-blue-200">
                              {children}
                            </div>
                          </blockquote>
                        );
                      }
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </article>
              
              {/* Enhanced Footer Navigation */}
              <footer className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <Link
                    href="/" 
                    className="group flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <span>Back to Home</span>
                  </Link>
                  
                  <Link
                    href="/posts"
                    className="group flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <span>View All Posts</span>
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const mdFiles = scanMarkdowns('./posts');
  const posts = mdFiles.getAllPosts();
  
  return posts.map((post) => ({
    postId: post.meta.id,
  }));
}
