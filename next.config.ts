import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/app1',
        destination: 'https://learning-app1-7hercsz5v-levans-projects-84ff839c.vercel.app',
      },
      {
        source: '/app1/:path*',
        destination: 'https://learning-app1-7hercsz5v-levans-projects-84ff839c.vercel.app/:path*',
      },
      {
        source: '/app2',
        destination: 'https://app2-51aupy55g-levans-projects-84ff839c.vercel.app',
      },
      {
        source: '/app2/:path*',
        destination: 'https://app2-51aupy55g-levans-projects-84ff839c.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;

/* 
How this works:
1. User visits: learning.vercel.app/app1
2. Next.js sees the /app1 path
3. Proxies the request to the actual Vercel deployment URL
4. Returns the response from app1
5. User's browser still shows learning.vercel.app/app1

Note: We need both rules - one for the base path and one for sub-paths
*/