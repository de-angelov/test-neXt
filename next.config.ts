import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
    useCache: true,
  },

    output: 'standalone',
};

export default nextConfig;
