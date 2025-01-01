const nextConfig = {
  webpack: (config: { externals: string[] }) => {
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
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
