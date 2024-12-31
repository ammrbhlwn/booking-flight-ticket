import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push('@node-rs/bcrypt');

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grynlzhmkoblsgifpdum.supabase.co',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
