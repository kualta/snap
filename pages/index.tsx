import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GetUserInfo, UserHandle, UserProfile, User } from '../components/user_profile'
import styles from '../styles/Home.module.css'
// import useSWR from 'swr' TODO

export default function Home() {
  const [user, setUser] = useState({} as User);
  let handle: UserHandle = { username: 'lectromoe' }

  useEffect(() => {
    const fetchUser = async () => {
      const user = await GetUserInfo(handle);
      console.log(user);
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
          Welcome to the <Link href="api/hello.ts">Pentagon</Link>
        </h1>

        <UserProfile {...user} />
      </main>



    </div>
  )
}
