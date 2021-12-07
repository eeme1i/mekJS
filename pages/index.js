import Head from 'next/head';
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="font-inter">
      <Head>
        <title>MEK JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />
    </div>
  )
}
