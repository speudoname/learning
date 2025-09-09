import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/app1/:path*',
        destination: 'https://learning-app1.vercel.app/:path*',
      },
      {
        source: '/app2/:path*',
        destination: 'https://app2.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;

/* 
How this works:
1. User visits: learning.vercel.app/app1
2. Next.js sees the /app1 path
3. Proxies the request to learning-app1.vercel.app
4. Returns the response from app1
5. User's browser still shows learning.vercel.app/app1

Benefits:
- Single domain for all apps
- SSO works seamlessly (same cookie domain)
- User doesn't know they're accessing different apps
- Can add/remove microservices easily
*/