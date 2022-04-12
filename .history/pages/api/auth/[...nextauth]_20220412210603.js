import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {FirebaseAdapter} from '@next-auth/firebase-adapter'

import { db } from '../../../firebase.config'
import * as firestoreFunctions from 'firebase/firestore'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    }
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  adapter: FirebaseAdapter({
    db: db,
    ...firestoreFunctions,
  }),
})
