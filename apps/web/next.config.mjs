import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  webpack(config) {
    const __dirname = path.resolve();
    config.resolve.alias['@repo/ui/components'] = path.resolve(
      __dirname,
      '../../packages/ui/src/components'
    );
    return config;
  },
};

export default nextConfig;
