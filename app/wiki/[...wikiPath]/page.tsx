import TableContent from "@/components/TableContent";
import TreeContent from "@/components/TreeContent";
import getH2Headings from "@/utils/h2Headings";
import { scanMarkdowns } from "@/utils/mdFiles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

async function WikiPage({ params }: { params: { wikiPath: string[] } }) {
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
        return <div className="text-center texr-5xl">Wiki page not found for path: {currentPath}</div>;
    }

    const h2Headings = getH2Headings(foundPost.content);

    //remove the process.cwd() part from the file paths
    const wikiPaths = posts.map(post => {
        post.filePath = post.filePath.replace(process.cwd() + '/wiki/', '');
        if(post.filePath.endsWith('.md'))
            post.filePath = post.filePath.slice(0, -3);
        if(post.filePath.endsWith('page'))
            post.filePath = post.filePath.slice(0, -4);
        return post.filePath;
    });

    return (
        <div className="flex flex-row max-w-full min-h-screen justify-around">
            <TreeContent paths={wikiPaths} className="w-80 flex-shrink-0 pl-8" />
            <article className="markdown-content container max-w-5xl px-4 py-8 mx-auto">
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
                {foundPost.content}
                </ReactMarkdown>
            </article>
            <TableContent className='w-80 flex-shrink-0 pl-8' content={h2Headings} />
        </div>
    );
}

export default WikiPage;