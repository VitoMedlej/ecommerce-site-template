import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/studio',
        destination: '/404', // or another page
        permanent: false,
      },
    ];
  },
  typescript: {
    // Allow production builds to complete even if there are type errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
