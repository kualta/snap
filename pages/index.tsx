import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import UserProfile from '../components/user_profile'
import styles from '../styles/Home.module.css'

type User = {
  name: string,
  avatar: string,
}

async function GetUserInfo(url: string): Promise<User> {

  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);

  return data as User
}

export default function Home() {

  // const user = await GetUserInfo("https://twitter.com/lectromoe");

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

        <UserProfile />
      </main>



    </div>
  )
}
