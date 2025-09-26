import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Enable static export for GitHub Pages
  distDir: 'out',
  // If your repository is named something other than <username>.github.io,
  // you'll need to add basePath and assetPrefix for GitHub Pages
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
};

export default nextConfig;
