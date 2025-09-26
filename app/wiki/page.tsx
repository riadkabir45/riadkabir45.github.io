import { scanMarkdowns } from "@/utils/mdFiles";
import Link from "next/link";
import fs from 'fs';
import path from 'path';

export default function WikiPage() {
  const wikiFiles = scanMarkdowns('wiki', true); // Add recursive parameter
  const allWikiPages = wikiFiles.getAllPosts();

  // Get actual folder structure
  const wikiDir = path.join(process.cwd(), 'wiki');
  const folders = fs.readdirSync(wikiDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // Group pages by their actual folder structure
  const groupedByFolder = folders.reduce((acc, folder) => {
    const folderPages = allWikiPages.filter(page => page.meta.id.startsWith(folder + '/'));
    if (folderPages.length > 0) {
      acc[folder] = folderPages;
    }
    return acc;
  }, {} as Record<string, typeof allWikiPages>);

  // Add any root-level pages to a 'General' category
  const rootPages = allWikiPages.filter(page => !page.meta.id.includes('/'));
  if (rootPages.length > 0) {
    groupedByFolder['general'] = rootPages;
  }

  const folderIcons: Record<string, string> = {
    'intro': '�',
    'advanced': '�',
    'reference': '📚',
    'general': '�',
    'tutorials': '🎓',
    'tools': '🛠️',
    'languages': '🔤',
    'frameworks': '🏗️',
  };

  const folderDescriptions: Record<string, string> = {
    'intro': 'Getting started with basics and fundamentals',
    'advanced': 'Deep dive into complex topics and advanced techniques',
    'reference': 'Quick reference guides and complete syntax documentation',
    'general': 'Miscellaneous articles and general information',
    'tutorials': 'Step-by-step guides and hands-on learning',
    'tools': 'Development tools, utilities, and software guides',
    'languages': 'Programming languages syntax and concepts',
    'frameworks': 'Framework-specific guides and documentation',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Knowledge Wiki
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive collection of programming knowledge, tutorials, and reference materials organized for easy navigation.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {allWikiPages.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">Total Articles</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {folders.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">Sections</div>
        </div>
      </div>

      {/* Folder Structure Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {folders.map((folder) => {
          const folderPages = allWikiPages.filter(page => page.meta.id.startsWith(folder + '/'));
          return (
            <Link 
              key={folder}
              href={`/wiki/${folder}`}
              className="group block bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg dark:hover:shadow-gray-800/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors capitalize mb-4">
                {folder.replace('-', ' ')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {folderDescriptions[folder] || 'Collection of related articles and guides'}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                  {folderPages.length} {folderPages.length === 1 ? 'article' : 'articles'}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}