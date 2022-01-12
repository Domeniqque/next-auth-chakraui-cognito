import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { DefaultLayout } from '../layout/DefaultLayout'

const Home: NextPage = () => {
  // const { data: session, status } = useSession()
  // console.log({ session, status })

  return (
    <DefaultLayout>
      <h1>Home</h1>
    </DefaultLayout>
  )
}

export default Home
