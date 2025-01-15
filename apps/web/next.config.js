import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  webpack(config) {
    config.resolve.alias['@repo/ui'] = path.resolve(__dirname, '../../packages/ui');
    return config;
  },
};

export default nextConfig;
