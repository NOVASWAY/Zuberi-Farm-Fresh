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
    // Note: Image optimization is disabled, so Next.js cache vulnerability doesn't apply
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  output: 'export', // Ensures static export for GitHub Pages deployment
  trailingSlash: true, // Enable trailing slashes for GitHub Pages compatibility
  assetPrefix: '',
  basePath: '',
  // Security: Static export prevents server-side vulnerabilities
  poweredByHeader: false, // Remove X-Powered-By header
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
