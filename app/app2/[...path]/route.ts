import { NextRequest } from 'next/server';

const APP2_URL = process.env.APP2_URL || 'http://localhost:3002';

export async function GET(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const params = await context.params;
  const path = params.path?.join('/') || '';
  const targetUrl = `${APP2_URL}/app2/${path}${req.nextUrl.search}`;
  
  const response = await fetch(targetUrl, {
    headers: {
      'x-proxied-from': 'learning-main',
      'cookie': req.headers.get('cookie') || '',
    },
  });
  
  return response;
}