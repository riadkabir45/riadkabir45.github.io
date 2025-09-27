import getH2Headings from "@/utils/h2Headings";
import { scanMarkdowns } from "@/utils/mdFiles";
import WikiPageClient from "@/components/WikiPageClient";

export async function generateStaticParams() {
    const wikiFiles = scanMarkdowns('wiki', true);
    const posts = wikiFiles.getAllPosts();
    
    const paths: { wikiPath: string[] }[] = [];
    const folderPaths = new Set<string>();

    // Add individual page paths and collect folder paths
    posts.forEach((post) => {
        const relativePath = post.filePath
            .replace(process.cwd() + '/wiki/', '')
            .replace(/\.md$/, '');

        const segments = relativePath.split('/').filter(Boolean);
        
        if (segments.length > 0) {
            if (segments[segments.length - 1] === 'page') {
                segments.pop();
            }
            // Only add if we have segments (not empty array)
            if (segments.length > 0) {
                paths.push({ wikiPath: segments });
            }
            
            // Add parent folder paths
            for (let i = 1; i < segments.length; i++) {
                const folderPath = segments.slice(0, i).join('/');
                folderPaths.add(folderPath);
            }
        }
    });

    // Add unique folder-level paths (for section navigation)
    folderPaths.forEach((folderPath) => {
        const segments = folderPath.split('/').filter(Boolean);
        if (segments.length > 0) {
            paths.push({ wikiPath: segments });
        }
    });

    return paths;
}async function WikiPage({ 
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

    let foundPost = posts.find(p => p.filePath.endsWith(landCrit) || p.filePath.endsWith(childCrit));

    // If no direct page.md or section.md found, try to find the first available file in that section
    if (!foundPost) {
        // Look for any .md file in the current section
        const sectionPattern = `wiki/${currentPath}/`;
        const sectionFiles = posts.filter(p => 
            p.filePath.includes(sectionPattern) && 
            !p.filePath.endsWith('/page.md') // Exclude page.md files since we already checked
        );
        
        if (sectionFiles.length > 0) {
            // Sort by filename to get consistent ordering and take the first one
            foundPost = sectionFiles.sort((a, b) => a.filePath.localeCompare(b.filePath))[0];
        }
    }

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