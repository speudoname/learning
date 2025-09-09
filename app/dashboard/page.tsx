import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  // Check if user is authenticated (server-side)
  const { userId } = await auth();
  
  // If not logged in, redirect to home
  if (!userId) {
    redirect("/");
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-green-800 mb-4">
          🔒 Protected Dashboard
        </h1>
        <p className="text-green-700">
          You can only see this page because you&apos;re logged in!
        </p>
        <div className="mt-4 p-4 bg-white rounded-md">
          <p className="text-sm text-gray-600">Your User ID:</p>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">{userId}</code>
        </div>
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">How Protection Works:</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Middleware runs first (checks cookies)</li>
          <li>This page calls <code className="bg-gray-100 px-1">auth()</code> function</li>
          <li>If no userId, redirect to home</li>
          <li>If userId exists, show the page</li>
        </ol>
      </div>
    </div>
  );
}

/* 
Server-side Authentication:
- auth() runs on the server (not in browser)
- Returns { userId, sessionId, etc. } if logged in
- Returns { userId: null } if not logged in
- This check happens BEFORE the page renders
*/