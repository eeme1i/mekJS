import Head from 'next/head';
import Header from "../components/Header";
import Background from "../components/Background";
import Translation from '../components/Translation';
import Footer from '../components/Footer';
import Block from '../components/Block';

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>MEK JS</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono&display=swap" rel="stylesheet"></link>
      </Head>

      {/*hides everything when screen width <520px*/}
      <Block />
      <Background />
      <Header />
      <Translation />
      <Footer />
    </div>
  )
}
