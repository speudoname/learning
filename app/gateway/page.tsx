import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function GatewayPage() {
  const { userId } = await auth();
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">🌐 Gateway App - SSO Demo</h1>
        <p className="text-xl text-gray-600">
          Single Sign-On across multiple microservices
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works:</h2>
        <ol className="space-y-3 text-lg">
          <li>✅ All apps use the SAME Clerk instance</li>
          <li>✅ Same session cookie works everywhere</li>
          <li>✅ Sign in once, access all apps</li>
          <li>✅ Proxy rewrites hide the real URLs</li>
        </ol>
      </div>

      <SignedOut>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-2">👆 Please sign in first</h3>
          <p>Use the Sign In button in the header to authenticate</p>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-2">✅ You&apos;re Logged In!</h3>
          <p>User ID: <code className="bg-gray-100 px-2 py-1 rounded">{userId}</code></p>
          <p className="mt-2 text-sm text-gray-600">This same user ID will appear in ALL apps</p>
        </div>
      </SignedIn>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-blue-600 mb-4">🚀 App1 (Blue Theme)</h3>
          <p className="text-gray-600 mb-4">First microservice application</p>
          
          <div className="space-y-3">
            <Link 
              href="/app1"
              className="block px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
            >
              Visit via Proxy (/app1)
            </Link>
            
            <a 
              href="https://learning-app1.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-center"
            >
              Visit Directly (New Tab)
            </a>
          </div>
          
          <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
            <p><strong>Proxy:</strong> /app1 → learning-app1.vercel.app</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-green-600 mb-4">🌟 App2 (Green Theme)</h3>
          <p className="text-gray-600 mb-4">Second microservice application</p>
          
          <div className="space-y-3">
            <Link 
              href="/app2"
              className="block px-4 py-3 bg-green-600 text-white rounded hover:bg-green-700 text-center"
            >
              Visit via Proxy (/app2)
            </Link>
            
            <a 
              href="https://app2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 border border-green-600 text-green-600 rounded hover:bg-green-50 text-center"
            >
              Visit Directly (New Tab)
            </a>
          </div>
          
          <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
            <p><strong>Proxy:</strong> /app2 → app2.vercel.app</p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">🔍 What&apos;s Happening:</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">1. Same Cookie Domain</h4>
            <p className="text-sm text-gray-600">All apps accessed via learning.vercel.app share cookies</p>
          </div>
          
          <div>
            <h4 className="font-semibold">2. Proxy Rewrites</h4>
            <p className="text-sm text-gray-600">next.config.ts rewrites /app1 and /app2 to their real URLs</p>
          </div>
          
          <div>
            <h4 className="font-semibold">3. Clerk SSO</h4>
            <p className="text-sm text-gray-600">Same Clerk instance = same authentication everywhere</p>
          </div>
        </div>
      </div>
    </div>
  );
}