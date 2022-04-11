import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  // apiKey: "AIzaSyAMvQfLrahfxr1I3xYlMIF-TSaNV5eV9_Y",
  // authDomain: "meflick410.firebaseapp.com",
  // projectId: "meflick410",
  // storageBucket: "meflick410.appspot.com",
  // messagingSenderId: "650989087398",
  // appId: "1:650989087398:web:73ac5017b41fb747e52267"
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHA_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSEAGING_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
