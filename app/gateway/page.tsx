import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function GatewayPage() {
  const { userId } = await auth();
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">🌐 Microservices Gateway</h1>
        <p className="text-xl text-gray-600">
          Access all applications with Single Sign-On
        </p>
      </div>

      <SignedOut>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-2">👆 Please sign in first</h3>
          <p>Use the Sign In button in the header to authenticate</p>
          <p className="text-sm text-gray-600 mt-2">Once signed in, you can access all microservices with the same login!</p>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-2">✅ You&apos;re Logged In!</h3>
          <p>User ID: <code className="bg-gray-100 px-2 py-1 rounded">{userId}</code></p>
          <p className="mt-2 text-sm text-gray-600">You can now access all microservices below with this same login</p>
        </div>
      </SignedIn>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Link 
          href="/app1"
          className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-4">🚀 Application 1</h3>
          <p className="text-gray-600 mb-4">First microservice with blue theme</p>
          <div className="px-4 py-3 bg-blue-600 text-white rounded text-center">
            Access App1 →
          </div>
        </Link>

        <Link 
          href="/app2"
          className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-bold text-green-600 mb-4">🌟 Application 2</h3>
          <p className="text-gray-600 mb-4">Second microservice with green theme</p>
          <div className="px-4 py-3 bg-green-600 text-white rounded text-center">
            Access App2 →
          </div>
        </Link>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">✨ How It Works:</h3>
        <ol className="space-y-2 text-lg">
          <li>1️⃣ Sign in once on this main application</li>
          <li>2️⃣ Click any microservice link above</li>
          <li>3️⃣ You&apos;re automatically authenticated there!</li>
          <li>4️⃣ Sign out from anywhere = signed out everywhere</li>
        </ol>
        <div className="mt-4 p-4 bg-white rounded">
          <p className="text-sm text-gray-600">
            <strong>Technical Note:</strong> All microservices are accessed through this gateway domain using proxy rewrites.
            This ensures cookies work correctly for Single Sign-On.
          </p>
        </div>
      </div>
    </div>
  );
}