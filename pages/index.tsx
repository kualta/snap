import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { UserProfile, User } from '../components/user_profile'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [user, setUser] = useState({} as User);
  let handle: string = 'lectromoe'

  useEffect(() => {
    const fetchUser = async () => {
      let response = await fetch("/api/get_user", {
        method: 'POST',
        body: JSON.stringify(handle),
      })
      let user = await response.json();
      setUser(user);
    };
    fetchUser();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Pentagon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <Link href="api/hello.ts">Pentagon</Link>, {user.name}
        </h1>
        <h2> Your profile: </h2>
        <UserProfile {...user} />

      </main>
    </div>
  )
}
