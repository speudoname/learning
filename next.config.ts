import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === 'development';

// Use environment variables for production domains
const APP1_DOMAIN = process.env.APP1_DOMAIN || 'https://learning-app1-2kuscihzg-levans-projects-84ff839c.vercel.app';
const APP2_DOMAIN = process.env.APP2_DOMAIN || 'https://app2-lcqge066f-levans-projects-84ff839c.vercel.app';

const nextConfig: NextConfig = {
  async rewrites() {
    if (isDevelopment) {
      return [
        {
          source: '/app1',
          destination: 'http://localhost:3001/app1',
        },
        {
          source: '/app1/:path*',
          destination: 'http://localhost:3001/app1/:path*',
        },
        {
          source: '/app2',
          destination: 'http://localhost:3002/app2',
        },
        {
          source: '/app2/:path*',
          destination: 'http://localhost:3002/app2/:path*',
        },
      ];
    }
    
    // Production rewrites using environment variables
    return [
      {
        source: '/app1',
        destination: `${APP1_DOMAIN}/app1`,
      },
      {
        source: '/app1/:path*',
        destination: `${APP1_DOMAIN}/app1/:path*`,
      },
      {
        source: '/app2',
        destination: `${APP2_DOMAIN}/app2`,
      },
      {
        source: '/app2/:path*',
        destination: `${APP2_DOMAIN}/app2/:path*`,
      },
    ];
  },
};

export default nextConfig;