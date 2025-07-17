import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
    useCache: true,
    // nodeMiddleware: true
  },
  redirects: async () => {
    return [
      {
        source: '/google',
        destination: 'https://www.google.com/',
        permanent: true,
      },
    ]
  },

};



export default nextConfig;
