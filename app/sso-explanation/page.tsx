export default function SSOExplanation() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">🔐 Understanding SSO Limitations</h1>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-red-600 mb-4">⚠️ Current SSO Limitation</h2>
        <p className="mb-4">
          SSO works perfectly when accessing apps via proxy (/app1, /app2) but NOT when accessing directly.
        </p>
        <div className="bg-white p-4 rounded">
          <h3 className="font-bold mb-2">Why?</h3>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Cookies are domain-specific</strong></li>
            <li>• Cookie set on <code>learning-nine-rho.vercel.app</code> won&apos;t work on <code>learning-app1.vercel.app</code></li>
            <li>• Browser security prevents cross-domain cookie sharing</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-600 mb-4">✅ How SSO Works (Via Proxy)</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded">
            <p className="font-bold">Scenario: All via proxy</p>
            <ol className="mt-2 space-y-1 text-sm">
              <li>1. Sign in at <code>learning-nine-rho.vercel.app</code></li>
              <li>2. Cookie set for domain: <code>learning-nine-rho.vercel.app</code></li>
              <li>3. Visit <code>/app1</code> - same domain, cookie works ✅</li>
              <li>4. Visit <code>/app2</code> - same domain, cookie works ✅</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-yellow-700 mb-4">❌ Why Direct Access Doesn&apos;t Work</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded">
            <p className="font-bold">Scenario: Direct access</p>
            <ol className="mt-2 space-y-1 text-sm">
              <li>1. Sign in at <code>learning-nine-rho.vercel.app</code></li>
              <li>2. Cookie set for: <code>learning-nine-rho.vercel.app</code></li>
              <li>3. Visit <code>learning-app1.vercel.app</code> directly</li>
              <li>4. Different domain = no cookie access ❌</li>
              <li>5. Appears logged out (even though same Clerk instance)</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-green-600 mb-4">🛠️ Solutions</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded">
            <h3 className="font-bold">Option 1: Custom Domains (Best)</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Use subdomains: <code>app.yourdomain.com</code>, <code>app1.yourdomain.com</code></li>
              <li>• Configure Clerk to use <code>*.yourdomain.com</code></li>
              <li>• Cookies work across all subdomains</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded">
            <h3 className="font-bold">Option 2: Always Use Proxy</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Access everything via main domain</li>
              <li>• <code>/app1</code>, <code>/app2</code>, etc.</li>
              <li>• This is what we&apos;ve built!</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded">
            <h3 className="font-bold">Option 3: Clerk Organizations (Enterprise)</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Use Clerk&apos;s multi-domain SSO</li>
              <li>• Requires paid plan</li>
              <li>• More complex setup</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-purple-600 mb-4">📝 Development vs Production Keys</h2>
        <div className="bg-white p-4 rounded">
          <p className="font-bold mb-2">Your current keys:</p>
          <ul className="space-y-1 text-sm">
            <li>• <code>pk_test_*</code> = Development key</li>
            <li>• Limited to 500 users</li>
            <li>• Shows warning in console</li>
          </ul>
          <p className="mt-4 font-bold">For production:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Upgrade Clerk account</li>
            <li>• Get <code>pk_live_*</code> keys</li>
            <li>• No user limits</li>
          </ul>
        </div>
      </div>
    </div>
  );
}