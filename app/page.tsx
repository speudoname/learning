'use client';

import { useEffect } from 'react';

export default function Home() {
  console.log("🏠 STEP 3: Home page component is rendering");
  console.log("📍 Location: app/page.tsx");
  console.log("🎯 Purpose: This is the content for the '/' route");
  
  useEffect(() => {
    console.log("✅ STEP 4: Home page mounted in browser");
    console.log("🌐 The page is now interactive!");
  }, []);

  return (
    <div className="min-h-screen p-8 font-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">🎓 Learning Journey: How Next.js Works</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">📋 What happens when you visit this page?</h2>
          
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">1.</span>
              <div>
                <strong>Browser Request:</strong> You type learning-nine-rho.vercel.app
                <div className="text-sm text-gray-600 mt-1">
                  Your browser sends an HTTP request to Vercel's servers
                </div>
              </div>
            </li>
            
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">2.</span>
              <div>
                <strong>Vercel Routing:</strong> Vercel receives the request
                <div className="text-sm text-gray-600 mt-1">
                  Vercel knows this domain points to your Next.js app
                </div>
              </div>
            </li>
            
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">3.</span>
              <div>
                <strong>Next.js Server:</strong> Request reaches Next.js
                <div className="text-sm text-gray-600 mt-1">
                  Next.js looks at the URL path (/) and finds app/page.tsx
                </div>
              </div>
            </li>
            
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">4.</span>
              <div>
                <strong>Layout Wrapping:</strong> app/layout.tsx wraps the page
                <div className="text-sm text-gray-600 mt-1">
                  Provides the HTML structure, fonts, and global styles
                </div>
              </div>
            </li>
            
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">5.</span>
              <div>
                <strong>Page Rendering:</strong> app/page.tsx renders
                <div className="text-sm text-gray-600 mt-1">
                  This component becomes the {`<body>`} content
                </div>
              </div>
            </li>
            
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">6.</span>
              <div>
                <strong>HTML Response:</strong> Server sends HTML to browser
                <div className="text-sm text-gray-600 mt-1">
                  Browser receives and displays the page
                </div>
              </div>
            </li>
            
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">7.</span>
              <div>
                <strong>Hydration:</strong> React makes page interactive
                <div className="text-sm text-gray-600 mt-1">
                  JavaScript loads and React takes over for interactivity
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">📁 File Structure Explained</h2>
          
          <div className="space-y-3 font-mono text-sm">
            <div className="p-3 bg-white rounded">
              <strong>app/layout.tsx</strong> → Root layout (wraps ALL pages)
            </div>
            <div className="p-3 bg-white rounded">
              <strong>app/page.tsx</strong> → Home page (/) content
            </div>
            <div className="p-3 bg-white rounded">
              <strong>app/globals.css</strong> → Global styles (Tailwind CSS)
            </div>
            <div className="p-3 bg-white rounded">
              <strong>public/</strong> → Static files (images, fonts)
            </div>
            <div className="p-3 bg-white rounded">
              <strong>next.config.ts</strong> → Next.js configuration
            </div>
            <div className="p-3 bg-white rounded">
              <strong>package.json</strong> → Dependencies and scripts
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">🚀 Check the Console!</h2>
          <p className="mb-2">Open your browser's Developer Tools (F12) and check the Console tab.</p>
          <p className="text-sm text-gray-600">You'll see the logs showing the exact order of execution!</p>
        </div>
      </main>
    </div>
  );
}