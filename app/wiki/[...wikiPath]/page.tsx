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
        return <div className="text-center text-5xl text-gray-900 dark:text-gray-100">Wiki page not found for path: {currentPath}</div>;
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
        <div className="flex flex-row max-w-full min-h-screen justify-around bg-white dark:bg-gray-900 transition-colors">
            <TreeContent paths={wikiPaths} className="w-80 flex-shrink-0 pl-8" />
            <article className="markdown-content container max-w-5xl px-4 py-8 mx-auto text-gray-900 dark:text-gray-100">
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
            <TableContent className='w-80 flex-shrink-0 pl-8' content={h2Headings} />
        </div>
    );
}

export default WikiPage;