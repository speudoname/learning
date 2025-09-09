import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">🎓 Learning App</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Show this when user is NOT signed in */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            
            {/* Show this when user IS signed in */}
            <SignedIn>
              <span className="text-sm text-gray-600">Welcome back!</span>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}

/* 
Clerk Components Explained:

1. <SignedOut> - Only renders children when user is NOT logged in
2. <SignedIn> - Only renders children when user IS logged in
3. <SignInButton> - Opens sign-in modal/page
4. <SignUpButton> - Opens sign-up modal/page
5. <UserButton> - Shows user avatar with dropdown menu

These components automatically:
- Check authentication state
- Handle the UI for sign in/up
- Manage redirects after auth
- Show/hide based on auth status
*/