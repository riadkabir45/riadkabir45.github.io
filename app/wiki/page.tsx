import { scanMarkdowns } from "@/utils/mdFiles";
import Link from "next/link";

export default function WikiPage() {
  const wikiFiles = scanMarkdowns('wiki');
  const allWikiPages = wikiFiles.getAllPosts();

  // Group pages by category/folder structure
  const groupedPages = allWikiPages.reduce((acc, page) => {
    const category = page.meta.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(page);
    return acc;
  }, {} as Record<string, typeof allWikiPages>);

  const categoryIcons: Record<string, string> = {
    'General': '📄',
    'Programming': '💻',
    'Web Development': '🌐',
    'Data Structures': '📊',
    'Algorithms': '⚡',
    'Tools': '🛠️',
    'Languages': '🔤',
    'Frameworks': '🏗️',
    'Best Practices': '✨',
    'Tutorials': '📚',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Knowledge Wiki
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive collection of programming knowledge, tutorials, and reference materials organized for easy navigation.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {allWikiPages.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">Total Articles</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {Object.keys(groupedPages).length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">Categories</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            100%
          </div>
          <div className="text-gray-600 dark:text-gray-400">Free & Open</div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-12">
        {Object.entries(groupedPages).map(([category, pages]) => (
          <section key={category} className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">{categoryIcons[category] || '📁'}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                {category}
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                {pages.length} {pages.length === 1 ? 'article' : 'articles'}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pages.map((page) => (
                <Link 
                  key={page.meta.id} 
                  href={`/wiki/${page.meta.id}`}
                  className="group block bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg dark:hover:shadow-gray-800/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {page.meta.title}
                    </h3>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {page.meta.description}
                  </p>
                  
                  {page.meta.tags && page.meta.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {page.meta.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Quick Navigation */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Quick Navigation
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(groupedPages).map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replace(' ', '-')}`}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              {categoryIcons[category] || '📁'} {category}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}