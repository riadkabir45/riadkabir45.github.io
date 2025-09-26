import getH2Headings from "@/utils/h2Headings";
import { scanMarkdowns } from "@/utils/mdFiles";
import WikiPageClient from "@/components/WikiPageClient";

export function generateStaticParams() {
    const wikiFiles = scanMarkdowns('./wiki', true);
    const posts = wikiFiles.getAllPosts();

    const paths = posts.map(post => {
        let relativePath = post.filePath.replace(process.cwd() + '/wiki/', '');
        if(relativePath.endsWith('.md'))
            relativePath = relativePath.slice(0, -3);
        if(relativePath.endsWith('/page'))
            relativePath = relativePath.slice(0, -5);
        
        const segments = relativePath.split('/').filter(Boolean);
        return { wikiPath: segments };
    });

    return paths;
}

async function WikiPage({ 
  params 
}: { 
  params: Promise<{ wikiPath: string[] }> 
}) {
    const wikiFiles = scanMarkdowns('wiki', true);
    const { wikiPath } = await params;

    // Convert array to path string
    const currentPath = Array.isArray(wikiPath) ? wikiPath.join('/') : wikiPath;
    const posts = wikiFiles.getAllPosts();

    const [landCrit, childCrit] = [
        `wiki/${currentPath}/page.md`.replace('//', '/'),
        `wiki/${currentPath}.md`.replace('//', '/')
    ];

    const foundPost = posts.find(p => p.filePath.endsWith(landCrit) || p.filePath.endsWith(childCrit));

    if (!foundPost) {
        return <div className="text-center text-5xl text-gray-900 dark:text-gray-100">Wiki page not found for path: {currentPath}</div>;
    }

    const h2Headings = getH2Headings(foundPost.content);

    // Process posts for client-side usage - clean the file paths
    const processedPosts = posts.map(post => ({
        ...post,
        filePath: post.filePath
            .replace(process.cwd() + '/wiki/', '')
            .replace(/\.md$/, '')
            .replace(/\/page$/, '')
    }));

    // Extract just the paths for the tree structure
    const wikiPaths = processedPosts.map(post => post.filePath);

    return (
        <WikiPageClient 
            foundPost={foundPost}
            wikiPaths={wikiPaths}
            h2Headings={h2Headings}
            posts={processedPosts}
        />
    );
}

export default WikiPage;