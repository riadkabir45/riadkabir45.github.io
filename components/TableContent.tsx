import Link from "next/link";

function TableContent( { content, className }: { content: { id: string; text: string }[]; className?: string } ) {
    if (content.length === 0) {
        return null;
    }

    return (
        <div className={className}>
            <div className="sticky top-8">
                <div className="mb-6">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                        Table of Contents
                    </h3>
                    <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                </div>
                
                <nav className="space-y-1">
                    {content.map((heading, index) => (
                        <Link 
                            key={`${heading.id}-${index}`} 
                            href={`#${heading.id}`}
                            className="group flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-3 rounded-lg border-l-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                        >
                            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 mr-3 flex-shrink-0 transition-colors">
                                {index + 1}
                            </span>
                            <span className="line-clamp-2 leading-snug">{heading.text}</span>
                        </Link>
                    ))}
                </nav>
                
                {/* Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Reading Progress</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300" style={{width: '0%'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableContent;