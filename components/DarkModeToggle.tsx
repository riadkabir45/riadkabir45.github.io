'use client';

import { useTheme } from '../contexts/ThemeContext';

interface DarkModeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function DarkModeToggle({ className = '', size = 'md' }: DarkModeToggleProps) {
  const { theme, toggleTheme, isHydrated } = useTheme();

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  const buttonSizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  };

  if (!isHydrated) {
    // Return a placeholder during SSR to prevent hydration mismatch
    return (
      <button 
        className={`${buttonSizeClasses[size]} rounded-lg bg-gray-100 text-gray-600 transition-colors duration-200 ${className}`}
        disabled
        aria-label="Toggle theme"
      >
        <svg className={`${sizeClasses[size]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
    );
  }

  return (
    <button 
      onClick={toggleTheme}
      className={`${buttonSizeClasses[size]} rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun Icon - visible in dark mode */}
      <svg 
        className={`${sizeClasses[size]} transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'} absolute`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
        />
      </svg>
      
      {/* Moon Icon - visible in light mode */}
      <svg 
        className={`${sizeClasses[size]} transition-all duration-300 ${theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'} absolute`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
        />
      </svg>
    </button>
  );
}