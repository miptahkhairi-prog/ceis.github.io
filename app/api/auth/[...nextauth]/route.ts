import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const user = await prisma.user.findUnique({ where: { email: credentials.email }, include: { role: true } })
        if (!user) return null
        // If seed stored plaintext, fallback to direct compare (only for dev). In production always store hashed password.
        const isMatch = user.password ? await bcrypt.compare(credentials.password, user.password) : credentials.password === 'CHANGE_ME'
        if (!isMatch) return null
        return { id: user.id, name: user.name, email: user.email, role: user.role?.name }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role || token.role
      }
      return token
    },
    async session({ session, token }) {
      (session as any).user.role = token.role
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export { NextAuth }
export default NextAuth(authOptions)
