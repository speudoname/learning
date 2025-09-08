import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learning Layout System",
  description: "Understanding how layout and pages work",
};

export default function RootLayout({
  children,  // 👈 THIS IS THE MAGIC! This is your page content!
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Let's see what 'children' actually is:
  console.log("🎯 LAYOUT: The 'children' prop contains:", children);
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ 
          border: '5px solid blue', 
          padding: '20px',
          minHeight: '100vh'
        }}
      >
        <div style={{ 
          backgroundColor: 'lightblue', 
          padding: '15px', 
          marginBottom: '20px',
          borderRadius: '10px'
        }}>
          <h1>🏗️ I am LAYOUT.TSX</h1>
          <p><strong>Current URL:</strong> Check your browser address bar!</p>
          <p><strong>How does Next.js know which page to load?</strong></p>
          <div style={{ backgroundColor: 'white', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
            <p>📁 <strong>Folder = Route!</strong></p>
            <ul>
              <li>URL: <code>/</code> → loads <code>app/page.tsx</code></li>
              <li>URL: <code>/about</code> → loads <code>app/about/page.tsx</code></li>
              <li>URL: <code>/blog</code> → loads <code>app/blog/page.tsx</code></li>
              <li>URL: <code>/blog/post-1</code> → loads <code>app/blog/post-1/page.tsx</code></li>
            </ul>
          </div>
        </div>
        
        <Navigation />
        
        <div style={{ 
          border: '3px dashed green', 
          padding: '10px',
          backgroundColor: '#f0fff0',
          marginBottom: '20px'
        }}>
          <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>
            ⬇️ The {`{children}`} prop starts here ⬇️
          </p>
          
          {/* 🎯 THIS IS WHERE THE PAGE CONTENT APPEARS! */}
          {children}
          
          <p style={{ margin: '10px 0 0 0', fontWeight: 'bold' }}>
            ⬆️ The {`{children}`} prop ends here ⬆️
          </p>
        </div>
        
        <div style={{ 
          backgroundColor: 'lightyellow', 
          padding: '15px',
          borderRadius: '10px'
        }}>
          <h3>🧠 How it Works:</h3>
          <ol>
            <li>You visit a URL (like <code>/about</code>)</li>
            <li>Next.js looks for <code>app/about/page.tsx</code></li>
            <li>Next.js passes that page as the <code>children</code> prop to layout.tsx</li>
            <li>Layout renders with the page inside it!</li>
          </ol>
        </div>
      </body>
    </html>
  );
}