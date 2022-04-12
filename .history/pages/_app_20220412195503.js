import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider className='dark' session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
