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
    jwt: async ({ token, user }) => {
      if (user) {
        token.sub = user.sub;
      }
      return token;
    }
  },
  
  adapter: FirebaseAdapter({
    db: db,
    ...firestoreFunctions,
  }),

  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
})
