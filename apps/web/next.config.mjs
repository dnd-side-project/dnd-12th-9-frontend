import path from 'path';

// eslint-disable-next-line turbo/no-undeclared-env-vars
const shouldAnalyzeBundles = process.env.ANALYZE === 'true';

/** @type {import('next').NextConfig} */
let nextConfig = {
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
    optimizePackageImports: ['motion'],
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

if (shouldAnalyzeBundles) {
  const { default: withBundleAnalyzer } = await import('@next/bundle-analyzer');
  nextConfig = withBundleAnalyzer({
    enabled: true,
    openAnalyzer: true,
  })(nextConfig);
}

export default nextConfig;
