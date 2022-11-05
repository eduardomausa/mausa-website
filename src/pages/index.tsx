import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Mausa Blog</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.sectionContent}>
          <h2>Sharing my journey as a Software Developer.</h2>
        </section>
      </main>
    </>
  )
}
