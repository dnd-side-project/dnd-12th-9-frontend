import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 랜덤 이미지 허용하기 위해 임시로 설정
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
