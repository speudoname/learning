import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log("🚦 STEP 1: Middleware intercepted request");
  console.log("📍 Location: middleware.ts (runs on Vercel's Edge Network)");
  console.log("🔗 URL requested:", request.url);
  console.log("🎯 Purpose: Can redirect, rewrite, or add headers BEFORE page loads");
  
  // Continue to the requested page
  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};