/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/portfolio/',
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? '/my-portfolio' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;