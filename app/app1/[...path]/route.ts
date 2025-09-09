import { NextRequest } from 'next/server';

const APP1_URL = process.env.APP1_URL || 'http://localhost:3001';

export async function GET(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const params = await context.params;
  const path = params.path?.join('/') || '';
  const targetUrl = `${APP1_URL}/app1/${path}${req.nextUrl.search}`;
  
  const response = await fetch(targetUrl, {
    headers: {
      'x-proxied-from': 'learning-main',
      'cookie': req.headers.get('cookie') || '',
    },
  });
  
  return response;
}