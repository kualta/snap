import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
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
        <h1 className={styles.title}> Pentagon </h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username: </label>
          <input type="text" name="username" id="username" onChange={handleChange} />
          <br />
          <Link href={`/profile/${handle}`}>{`Add >`}</Link>
        </form>
      </main>
    </div>
  )
}
