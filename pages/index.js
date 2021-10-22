import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PBrowse Official</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to PBrowse!" />
        <p className="description">
          Join Discord for downloads and updates: <a href="discord.gg/3qS69y5UK2">Join!</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
