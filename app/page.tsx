import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Show this to signed-out users */}
      <SignedOut>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Learning App! 👋
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Please sign in to access your dashboard
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold mb-3">How Authentication Works:</h2>
            <ol className="text-left list-decimal list-inside space-y-2 text-sm">
              <li>Click "Sign In" or "Sign Up" in the header</li>
              <li>Clerk shows a beautiful modal (no coding needed!)</li>
              <li>Enter your email or use Google/GitHub</li>
              <li>Clerk handles everything (passwords, sessions, cookies)</li>
              <li>You&apos;re logged in! 🎉</li>
            </ol>
          </div>
        </div>
      </SignedOut>
      
      {/* Show this to signed-in users */}
      <SignedIn>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome Back! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            You&apos;re successfully authenticated
          </p>
          
          <div className="flex gap-4 justify-center mb-8">
            <Link 
              href="/dashboard"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Protected Dashboard →
            </Link>
            <Link 
              href="/gateway"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Gateway Demo →
            </Link>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold mb-3">What&apos;s Happening:</h2>
            <ul className="text-left list-disc list-inside space-y-2 text-sm">
              <li>Clerk middleware checked your authentication</li>
              <li>Found valid session cookie</li>
              <li>ClerkProvider made your user info available</li>
              <li>SignedIn/SignedOut components show different content</li>
              <li>You can now access protected routes!</li>
            </ul>
          </div>
        </div>
      </SignedIn>
      
      {/* Always visible - explains the flow */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">🏗️ Authentication Flow:</h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
            <div>
              <strong>Middleware (middleware.ts):</strong> Runs on every request, checks cookies
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
            <div>
              <strong>ClerkProvider (layout.tsx):</strong> Wraps app, provides auth context
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
            <div>
              <strong>Auth Components:</strong> SignedIn/Out show different content
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">4</span>
            <div>
              <strong>Protected Routes:</strong> Use auth() to check server-side
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}