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
  // callbacks: {
  //   async session(session, token) {
  //     session.accessToken = token;
  //     return session;
  //   },
  // },
  callbacks: {
    async session({session, token, user}) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  adapter: FirebaseAdapter({
    db: db,
    ...firestoreFunctions,
  }),
})
