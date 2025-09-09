import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learning App with Auth",
  description: "Learning Next.js with Clerk Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      {/* ClerkProvider wraps EVERYTHING - makes auth available everywhere! */}
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

/* 
What ClerkProvider does:
1. Provides authentication context to entire app
2. Handles authentication state
3. Makes user info available to all components
4. Manages cookies and sessions
5. Enables Clerk components like <UserButton />

Think of it like:
- Without ClerkProvider: Components don't know about auth
- With ClerkProvider: All components can check if user is logged in
*/