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
      onClick={() => router.push('/signin')}
    >
      {!session ? (
        <div className="flex items-center justify-center">
          <FcGoogle fontSize={30} className="mr-2" />
          <span>Sign in with Google</span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img
            src={session.user.image}
            className="h-5 w-5 rounded-full shadow-lg"
            alt=""
            onClick={signOut}
          />
          <p>{session.user.name}</p>
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
