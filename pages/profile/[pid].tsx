import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { UserProfile, User } from '../../components/user_profile'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const [user, setUser] = useState({} as User);
  const router = useRouter()
  const { query } = router.query
  // let handle = query?.at(0)?.toString()? : ""; FIXME

  useEffect(() => {
    let fetchData = async () => {
      let user = await fetchUser(handle)
      setUser(user);
    }
    fetchData().catch(console.error)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Pentagon</title>
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
    body: JSON.stringify(handle),
  })
  let user = await response.json()
  return user;
}