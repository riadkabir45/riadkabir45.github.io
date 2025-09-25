import { scanMarkdowns } from '@/utils/mdFiles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function PostPage({ params }: { params: { postId: string } }) {
  const { postId } = await params;
  
  const mdFiles = scanMarkdowns('./posts');
  const post = mdFiles.getPostById(postId);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
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
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                Featured
              </span>
            </>
          )}
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.meta.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>
      
      {/* Markdown Content */}
      <article className="markdown-content">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
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
  );
}

export async function generateStaticParams() {
  const mdFiles = scanMarkdowns('./posts');
  const posts = mdFiles.getAllPosts();
  
  return posts.map((post) => ({
    postId: post.meta.id,
  }));
}
