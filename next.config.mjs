let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores eslint during builds to speed up deployment
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during builds (optional)
  },
  images: {
    unoptimized: true, // Disable Next.js image optimization (important for GitHub Pages)
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  output: 'export', // Ensures static export for GitHub Pages deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Uses repo name as base path dynamically
  trailingSlash: true, // Ensures URLs are appended with trailing slashes for routing
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '', // Prefixes assets for GitHub Pages correctly
};

mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
