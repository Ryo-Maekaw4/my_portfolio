/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? '/your-repo-name' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;