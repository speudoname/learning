import { NextRequest } from 'next/server';

const APP1_URL = process.env.APP1_URL || 'http://localhost:3001';

export async function GET(req: NextRequest) {
  const targetUrl = `${APP1_URL}/app1${req.nextUrl.search}`;
  
  // Simple fetch and return - let Next.js handle encoding
  const response = await fetch(targetUrl, {
    headers: {
      'x-proxied-from': 'learning-main',
      'cookie': req.headers.get('cookie') || '',
    },
  });
  
  return response;
}

export async function POST(req: NextRequest) {
  const targetUrl = `${APP1_URL}/app1${req.nextUrl.search}`;
  
  const response = await fetch(targetUrl, {
    method: 'POST',
    headers: {
      'x-proxied-from': 'learning-main',
      'cookie': req.headers.get('cookie') || '',
      'content-type': req.headers.get('content-type') || '',
    },
    body: req.body,
  });
  
  return response;
}