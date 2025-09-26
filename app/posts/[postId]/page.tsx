import { scanMarkdowns } from '@/utils/mdFiles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { get } from 'http';
import TableContent from '@/components/TableContent';
import getH2Headings from '@/utils/h2Headings';
import React from 'react';

export default async function PostPage({ params }: { params: { postId: string } }) {
  const { postId } = await params;
  
  const mdFiles = scanMarkdowns('./posts');
  const post = mdFiles.getPostById(postId);
  const breakPoint = 'lg';
  
  if (!post) {
    notFound();
  }

  const h2Headings = getH2Headings(post.content);
  
  return (
    <div className="max-w-full min-h-screen flex flex-row justify-around ">
      <TableContent className={`hidden ${breakPoint}:block invisible max-w-80 flex-shrink-0 pl-8`} content={h2Headings} />
      
      <div className='container max-w-5xl px-4 py-8 flex-grow'>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.meta.title}</h1>
          
          <div className="text-gray-600 mb-4">
            <p className="text-lg">{post.meta.description}</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By {post.meta.author}</span>
            <span>•</span>
            <span>{new Date(post.meta.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            <span>•</span>
            <span className="capitalize">{post.meta.category}</span>
            {post.meta.featured && (
              <>
                <span>•</span>
                <i className='nf nf-fa-star text-yellow-100 px-2 py-1 rounded text-xs' />
              </>
            )}
          </div>
          
          {/* Tags */}
          <div className="mt-2 flex flex-row gap-2 text-sm text-gray-500 flex-wrap items-center">
              <i className="nf nf-md-tag_multiple" />
              {post.meta.tags.map((tag, index) => (
                  <React.Fragment key={tag}>
                  {/* Render the span for the tag */}
                  <span className="">{tag}</span>
                  {index < post.meta.tags.length - 1 && '|'}
                  </React.Fragment>
              ))}
          </div>
        </header>
        
        {/* Markdown Content */}
        <article className="markdown-content">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children, ...props }) => {
                const text = children?.toString() || '';
                const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
                return (
                  <h2 
                    id={id} 
                    {...props}
                  >
                    {children}
                  </h2>
                );
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
        
        {/* Navigation */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between">
            <Link
              href="/" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </Link>
            <Link
              href="/posts"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              All Posts →
            </Link>
          </div>
        </footer>
      </div>

      <TableContent className={`hidden ${breakPoint}:block  max-w-80 flex-shrink-0 px-8`} content={h2Headings} />
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
