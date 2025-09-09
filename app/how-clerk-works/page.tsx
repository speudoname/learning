export default function HowClerkWorks() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">🔍 How Clerk ACTUALLY Works</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">The "Simple" Middleware Line:</h2>
        <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
          <code>{`import { clerkMiddleware } from "@clerk/nextjs/server";
export default clerkMiddleware();`}</code>
        </pre>
        
        <div className="mt-4 bg-white p-4 rounded">
          <p className="font-bold mb-2">What clerkMiddleware() ACTUALLY returns:</p>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            <code>{`function(request) {
  // 1. Check cookies for __session token
  const sessionToken = request.cookies.get('__session');
  
  // 2. If no token, user is not logged in
  if (!sessionToken) {
    return NextResponse.next(); // Continue as guest
  }
  
  // 3. Verify the token with Clerk's servers
  const isValid = await verifyWithClerkAPI(sessionToken, YOUR_SECRET_KEY);
  
  // 4. If valid, decode user info
  if (isValid) {
    const userData = decodeJWT(sessionToken);
    // Attach user data to request
    request.headers.set('x-clerk-user-id', userData.userId);
  }
  
  return NextResponse.next();
}`}</code>
          </pre>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">📦 What's Inside @clerk/nextjs Package:</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded">
            <h3 className="font-bold text-blue-600">1. Authentication Functions</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• <code>auth()</code> - Gets current user on server</li>
              <li>• <code>currentUser()</code> - Gets full user object</li>
              <li>• <code>clerkMiddleware()</code> - The middleware function</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded">
            <h3 className="font-bold text-blue-600">2. React Components</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• <code>&lt;SignInButton /&gt;</code> - Renders sign in UI</li>
              <li>• <code>&lt;UserButton /&gt;</code> - Shows user avatar menu</li>
              <li>• <code>&lt;SignedIn /&gt;</code> - Conditional rendering</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded">
            <h3 className="font-bold text-blue-600">3. API Communication</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Talks to api.clerk.com</li>
              <li>• Verifies tokens</li>
              <li>• Fetches user data</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">🔄 The Complete Flow:</h2>
        
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
            <div>
              <strong>User visits any page</strong>
              <p className="text-sm text-gray-600">Browser sends cookies automatically</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
            <div>
              <strong>middleware.ts runs</strong>
              <p className="text-sm text-gray-600">clerkMiddleware() executes its internal function</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
            <div>
              <strong>Clerk checks for __session cookie</strong>
              <p className="text-sm text-gray-600">This cookie contains encrypted user data</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">4</span>
            <div>
              <strong>Verifies with Clerk API</strong>
              <p className="text-sm text-gray-600">Uses your CLERK_SECRET_KEY to verify</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">5</span>
            <div>
              <strong>Adds auth info to request</strong>
              <p className="text-sm text-gray-600">Now your pages can access user data</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">🍪 The Cookie Magic:</h2>
        
        <div className="bg-white p-4 rounded">
          <p className="font-bold mb-2">When you sign in, Clerk creates:</p>
          <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
            <code>{`__session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
__client_uat=1735983983
__cf_bm=security_token_here`}</code>
          </pre>
          
          <p className="mt-4 text-sm">The __session cookie contains:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Your user ID</li>
            <li>• Session ID</li>
            <li>• Expiration time</li>
            <li>• Permissions</li>
          </ul>
          
          <p className="mt-4 text-sm font-bold">This cookie is:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>✅ httpOnly (JavaScript can't read it)</li>
            <li>✅ Secure (HTTPS only)</li>
            <li>✅ SameSite (CSRF protection)</li>
            <li>✅ Encrypted (can't be tampered)</li>
          </ul>
        </div>
      </div>

      <div className="bg-red-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">⚡ Why Just 3 Lines?</h2>
        
        <div className="space-y-3">
          <p><strong>Those 3 lines trigger a whole system:</strong></p>
          
          <ol className="space-y-2 text-sm">
            <li><strong>1. Import statement:</strong> Loads ~50KB of code</li>
            <li><strong>2. clerkMiddleware():</strong> Returns a complex function</li>
            <li><strong>3. export default:</strong> Next.js calls this on EVERY request</li>
          </ol>
          
          <div className="mt-4 p-4 bg-white rounded">
            <p className="font-bold">The @clerk/nextjs package contains:</p>
            <ul className="mt-2 text-sm space-y-1">
              <li>• 30+ React components</li>
              <li>• 20+ utility functions</li>
              <li>• API client code</li>
              <li>• JWT verification logic</li>
              <li>• Cookie management</li>
              <li>• Session handling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}