import NextAuth from "next-auth/next";
import CognitoProvider from "next-auth/providers/cognito";
// import CognitoProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import { prisma } from '../../../lib/prisma';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials })
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log({ url, baseUrl })
      return baseUrl
    },
    async session({ session, user, token }) {
      console.log({ session, user, token })
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log({ token, user, account, profile, isNewUser })
      return token
    }
  }
})