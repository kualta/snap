import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { User } from '../components/user_profile'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  // const [user, setUser] = useState({} as User);
  const [handle, setHandle] = useState('');
  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    router.push("/profile/" + handle)
  }
  const handleChange = (e: any) => {
    setHandle(e.target.value)
  }

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

        <h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">username: </label>
            <input type="text" name="username" id="username" onChange={handleChange} />
            <button type="submit">Go to your profile ➜</button>
          </form>
        </h2>
      </main>
    </div>
  )
}
