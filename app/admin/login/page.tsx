'use client'

import Link from 'next/link'

export default function AdminLoginPage(){
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
        <p className="text-sm text-slate-600 mb-4">Use your administrator credentials to sign in.</p>
        <div className="space-y-3">
          <a href="/api/auth/signin" className="btn-primary block text-center">Sign in</a>
          <Link href="/api/auth/signin/google" className="block text-center py-2 border rounded-md">Sign in with Google</Link>
        </div>
      </div>
    </section>
  )
}
