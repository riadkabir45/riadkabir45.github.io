'use client';

import TableContent from "@/components/TableContent";
import TreeContent from "@/components/TreeContent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";

import { type MarkdownPost } from "@/utils/mdFiles";

interface WikiPageClientProps {
    foundPost: {
        content: string;
        meta: {
            title: string;
            [key: string]: any;
        };
    };
    wikiPaths: string[];
    h2Headings: { id: string; text: string }[];
    posts: MarkdownPost[];
}

export default function WikiPageClient({ foundPost, wikiPaths, h2Headings, posts }: WikiPageClientProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row max-w-full min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {/* Mobile Header with Sidebar Toggle */}
            <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {foundPost.meta.title}
                </h1>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle navigation"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h7"} 
                        />
                    </svg>
                </button>
            </div>

            <div className="flex flex-1">
                {/* Sidebar - TreeContent */}
                <div className={`
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                    lg:translate-x-0 
                    fixed lg:static 
                    top-0 lg:top-auto
                    left-0 lg:left-auto
                    z-40 lg:z-auto
                    w-80 
                    h-full lg:h-auto
                    bg-white dark:bg-gray-900 
                    border-r border-gray-200 dark:border-gray-800 
                    transform transition-transform duration-300 ease-in-out
                    lg:transform-none
                    flex-shrink-0
                    overflow-y-auto
                `}>
                    {/* Mobile Close Button */}
                    <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Navigation</h2>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Close navigation"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <TreeContent 
                        paths={wikiPaths} 
                        className="p-4 lg:pl-8" 
                        onItemClick={() => setSidebarOpen(false)}
                        posts={posts}
                    />
                </div>

                {/* Overlay for mobile */}
                {sidebarOpen && (
                    <div 
                        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main content */}
                <div className="flex-1 flex flex-col lg:flex-row">
                    <article className="markdown-content flex-1 max-w-none lg:max-w-5xl px-4 py-8 mx-auto text-gray-900 dark:text-gray-100 min-w-0">
                        <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h2: ({ children, ...props }) => {
                            const text = children?.toString() || '';
                            const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
                            return (
                                <h2 
                                id={id} 
                                className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4"
                                {...props}
                                >
                                {children}
                                </h2>
                            );
                            },
                            h3: ({ children, ...props }) => (
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3" {...props}>
                                    {children}
                                </h3>
                            ),
                            p: ({ children, ...props }) => (
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed" {...props}>
                                    {children}
                                </p>
                            ),
                            code: ({ children, ...props }) => (
                                <code className="bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-1 py-0.5 rounded text-sm font-mono" {...props}>
                                    {children}
                                </code>
                            ),
                            pre: ({ children, ...props }) => (
                                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4" {...props}>
                                    {children}
                                </pre>
                            ),
                            blockquote: ({ children, ...props }) => (
                                <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 my-4 bg-blue-50 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300 italic" {...props}>
                                    {children}
                                </blockquote>
                            ),
                            ul: ({ children, ...props }) => (
                                <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props}>
                                    {children}
                                </ul>
                            ),
                            ol: ({ children, ...props }) => (
                                <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props}>
                                    {children}
                                </ol>
                            ),
                            li: ({ children, ...props }) => (
                                <li className="text-gray-700 dark:text-gray-300" {...props}>
                                    {children}
                                </li>
                            )
                        }}
                        >
                        {foundPost.content}
                        </ReactMarkdown>
                    </article>
                    
                    {/* Table of Contents - Desktop only or when sidebar closed on mobile */}
                    <div className={`
                        w-80 flex-shrink-0 hidden lg:block
                        ${sidebarOpen ? 'lg:hidden' : 'lg:block'}
                    `}>
                        <TableContent className='pl-8' content={h2Headings} />
                    </div>
                </div>
            </div>
        </div>
    );
}