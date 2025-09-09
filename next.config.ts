import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === 'development';

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
    
    // Production rewrites
    return [
      {
        source: '/app1',
        destination: 'https://learning-app1-2kuscihzg.vercel.app/app1',
      },
      {
        source: '/app1/:path*',
        destination: 'https://learning-app1-2kuscihzg.vercel.app/app1/:path*',
      },
      {
        source: '/app2',
        destination: 'https://app2-lcqge066f.vercel.app/app2',
      },
      {
        source: '/app2/:path*',
        destination: 'https://app2-lcqge066f.vercel.app/app2/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/app1/:path*',
        headers: [
          {
            key: 'x-forwarded-host',
            value: isDevelopment ? 'localhost:3000' : 'learning-mvj7wb3s6-levans-projects-84ff839c.vercel.app',
          },
          {
            key: 'x-forwarded-proto',
            value: isDevelopment ? 'http' : 'https',
          },
        ],
      },
      {
        source: '/app2/:path*',
        headers: [
          {
            key: 'x-forwarded-host',
            value: isDevelopment ? 'localhost:3000' : 'learning-mvj7wb3s6-levans-projects-84ff839c.vercel.app',
          },
          {
            key: 'x-forwarded-proto',
            value: isDevelopment ? 'http' : 'https',
          },
        ],
      },
    ];
  },
};

export default nextConfig;