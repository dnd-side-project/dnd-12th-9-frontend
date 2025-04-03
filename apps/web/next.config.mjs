import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 't1.daumcdn.net',
      },
    ],
  },
  experimental: {
    externalDir: true,
  },
  webpack(config) {
    const __dirname = path.resolve();
    config.resolve.alias['@sbooky/ui/components'] = path.resolve(
      __dirname,
      '../../packages/ui/src/components'
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
