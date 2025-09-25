import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MarkdownMeta {
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    category: string;
    featured: boolean;
    id: string;
}

export interface MarkdownPost {
    meta: MarkdownMeta;
    content: string;
    excerpt?: string;
}

export function scanMarkdowns(scanDir: string) {
    const absDir = path.resolve(scanDir);
    const filenames = fs.readdirSync(absDir)
        .filter(f => f.endsWith('.md'));
    
    const fileIds = filenames.map(f => f.replace(/\.md$/, ''));

    const posts: MarkdownPost[] = filenames.map(filename => {
        const filepath = path.join(absDir, filename);
        const fileContent = fs.readFileSync(filepath, 'utf8');
        
        const { data, content, excerpt } = matter(fileContent, {
            excerpt: true,
            excerpt_separator: '<!-- more -->'
        });


        const meta: MarkdownMeta = {
            title: data.title || 'Untitled',
            description: data.description || '',
            date: data.date || new Date().toISOString(),
            author: data.author || 'Anonymous',
            tags: data.tags || [],
            category: data.category || 'uncategorized',
            featured: data.featured || false,
            id: filename.replace(/\.(md|mdx)$/, '')
        };

        return {
            meta,
            content,
            excerpt: excerpt || data.description || content.substring(0, 200) + '...'
        };
    });

    return {
        getAllPosts: () => posts,
        getPostById: (id: string) => 
            posts.find(post => post.meta.id === id),

        getFeaturedPosts: () => 
            posts.filter(post => post.meta.featured),

        getNonFeaturedPosts: () => 
            posts.filter(post => !post.meta.featured),

        getPostsByCategory: (category: string) => 
            posts.filter(post => post.meta.category === category),
        
        getPostsByTag: (tag: string) => 
            posts.filter(post => post.meta.tags.includes(tag)),
        
        getAllTags: () => 
            [...new Set(posts.flatMap(post => post.meta.tags))],
        
        getAllCategories: () => 
            [...new Set(posts.map(post => post.meta.category))],

        getAllTagsWithCount: () => {
            const tagCount: Record<string, number> = {};
            posts.forEach(post => {
                post.meta.tags.forEach(tag => {
                    tagCount[tag] = (tagCount[tag] || 0) + 1;
                });
            });
            // return as array of [tag, count] tuples
            return Object.entries(tagCount).sort((a, b) => b[1] - a[1]);
        },
        
        getPostsByDate: (ascending = false) => 
            [...posts].sort((a, b) => {
                const dateA = new Date(a.meta.date).getTime();
                const dateB = new Date(b.meta.date).getTime();
                return ascending ? dateA - dateB : dateB - dateA;
            }),
        getFileContent: (id: string) => {
            const filename = `${id}.md`;
            const filepath = path.join(absDir, filename);
            return fs.readFileSync(filepath, 'utf8');
        }
    };
}