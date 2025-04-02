/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use the repository name as the base path in production
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '',
  // Use the repository name as the asset prefix in production
  assetPrefix: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH || '' : '',
  // Disable trailing slashes to avoid double slashes in paths
  trailingSlash: false,
};

export default nextConfig;

