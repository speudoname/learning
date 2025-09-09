import { clerkMiddleware } from "@clerk/nextjs/server";

// This is Clerk's middleware - it runs BEFORE every request
export default clerkMiddleware();

// Configuration: Which routes should middleware check?
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

/* 
What this does:
1. Runs on EVERY request (except static files)
2. Checks if user is authenticated
3. Sets up authentication cookies
4. Makes auth info available to your pages

The matcher regex means:
- YES: Run on pages like /, /about, /dashboard
- NO: Skip images, CSS, fonts, etc.
- YES: Always run on API routes
*/