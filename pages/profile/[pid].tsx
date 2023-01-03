import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { UserProfile, User } from '../../components/user_profile'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Page() {
  const [user, setUser] = useState({} as User);
  const router = useRouter()
  const { pid } = router.query
  const handle = typeof pid === 'string' ? pid : pid?.at(0);

  useEffect(() => {
    if (!router.isReady) { return }
    if (!handle) {
      console.log(`Invalid handle: ${handle}`)
      return
    }

    let fetchData = async () => {
      let user = await fetchUser(handle)
      setUser(user);
    }

    fetchData().catch(console.error)
  }, [router, pid])

  return (
    <div className={styles.container}>
      <Head>
        <title>Pentagon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2> Your profile: </h2>
        <UserProfile {...user} />
      </main>
    </div>
  )
}

async function fetchUser(handle: string) {
  let response = await fetch("/api/get_user", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(handle),
  })
  let user = await response.json()
  return user;
}