import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  experimental: {
    externalDir: true,
  },
  webpack(config) {
    const __dirname = path.resolve();
    config.resolve.alias['@repo/ui/components'] = path.resolve(
      __dirname,
      '../../packages/ui/src/components'
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
