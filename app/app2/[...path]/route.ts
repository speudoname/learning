import { NextRequest, NextResponse } from 'next/server';

const APP2_URL = process.env.APP2_URL || 'http://localhost:3002';

export async function GET(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const params = await context.params;
  const path = params.path?.join('/') || '';
  const targetUrl = `${APP2_URL}/app2/${path}${req.nextUrl.search}`;
  
  try {
    const response = await fetch(targetUrl, {
      headers: {
        'x-proxied-from': 'learning-main',
        'cookie': req.headers.get('cookie') || '',
        'accept': req.headers.get('accept') || '',
        'accept-encoding': 'identity', // Disable compression to avoid double-encoding
      },
    });
    
    // For static assets, stream them directly
    if (path.startsWith('_next/') || path.endsWith('.ico') || path.includes('.')) {
      const contentType = response.headers.get('content-type');
      const body = await response.arrayBuffer();
      
      return new NextResponse(body, {
        status: response.status,
        headers: {
          'content-type': contentType || 'application/octet-stream',
          'cache-control': response.headers.get('cache-control') || 'public, max-age=31536000',
        },
      });
    }
    
    // For HTML/RSC content, return directly
    return response;
  } catch (error) {
    console.error('Proxy error for path:', path, error);
    return NextResponse.json(
      { error: 'Proxy failed', path, details: error instanceof Error ? error.message : 'Unknown' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const params = await context.params;
  const path = params.path?.join('/') || '';
  const targetUrl = `${APP2_URL}/app2/${path}${req.nextUrl.search}`;
  
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