import { NextRequest, NextResponse } from 'next/server';

const APP1_URL = process.env.APP1_URL || 'http://localhost:3001';

async function handler(req: NextRequest) {
  const targetUrl = `${APP1_URL}/app1${req.nextUrl.search}`;

  try {
    // Get headers from the main app
    const headers = new Headers(req.headers);
    
    // Add proxy identification header
    headers.set('x-proxied-from', 'learning-main');
    
    // Forward the request to app1
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
      body: req.body,
      // @ts-expect-error - duplex is needed for streaming
      duplex: 'half',
    });

    // Create response with the fetched data
    const responseHeaders = new Headers(response.headers);
    
    // Remove Vercel-specific headers that might cause issues
    responseHeaders.delete('x-vercel-id');
    responseHeaders.delete('x-vercel-deployment-url');
    
    return new NextResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to proxy request' },
      { status: 500 }
    );
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;