"use client";
import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
    const [searchState, setSearchState] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    function toggleSearch() {
        setSearchState(!searchState);
        console.log(searchState);
    }

    function toggleMobileMenu() {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <div className="shadow-md bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
            <nav className="container mx-auto py-4 px-4">
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="flex items-center space-x-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold">RK Logs</span>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <ul className="flex space-x-6 text-lg">
                            <li>
                                <Link 
                                    href="/posts" 
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                >
                                    Posts
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/wiki" 
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                >
                                    Wiki
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/contact" 
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        
                        {/* Desktop Action Buttons */}
                        <div className="flex items-center space-x-3 pl-6 border-l border-gray-200 dark:border-gray-700">
                            {/* Search Button */}
                            <button 
                                onClick={toggleSearch}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Search"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            
                            {/* Dark Mode Toggle */}
                            <DarkModeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <DarkModeToggle size="sm" />
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col space-y-2 mt-4">
                            <Link 
                                href="/posts" 
                                className="px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Posts
                            </Link>
                            <Link 
                                href="/wiki" 
                                className="px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Wiki
                            </Link>
                            <Link 
                                href="/contact" 
                                className="px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <button 
                                onClick={() => {
                                    toggleSearch();
                                    setMobileMenuOpen(false);
                                }}
                                className="px-4 py-3 text-left text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                )}
                
                {/* Search Overlay */}
                {searchState && (
                    <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg z-50">
                        <div className="container mx-auto px-4 py-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search posts and wiki..."
                                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                                    autoFocus
                                />
                                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}