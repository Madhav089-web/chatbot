import Head from 'next/head'
import Chatbot from '../components/Chatbot'
import styles from '../styles/Chatbot.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Travel Chatbot</title>
        <meta name="description" content="Travel Chatbot using Gemini API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.chatContainer}>
        <Chatbot />
      </main>
    </div>
  )
}
