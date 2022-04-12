import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { signIn, signOut, useSession, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const AcountIcon = () => {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <div
      className="flex h-auto w-auto cursor-pointer items-center justify-center rounded-full px-4 py-2"
      onClick={() => router.push('auth/signin')}
    >
      {!session ? (
        <div className="flex items-center justify-center">
          <FcGoogle fontSize={30} className="mr-2" />
          <span>Sign in with Google</span>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p>{session.user.name}</p>
          <img
            src={session.user.image}
            className="h-10 w-10 rounded-full shadow-lg ml-5"
            alt=""
            onClick={signOut}
          />
        </div>
      )}
    </div>
  )
}

export default AcountIcon

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: {
      session,
    },
  }
}
