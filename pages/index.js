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

      {/*translation area*/}
      <div>
        <div className="">
        <form>
          <input type="text" placeholder="LaTeX" className="outline-none border-0 ring-0 shadow-none text-xl flex mx-auto w-3/4 bg-gray-100 p-8 rounded-3xl"/>
          <button className="flex hover:scale-110 transition duration-100 mx-auto my-8 py-4 px-8 text-2xl text-white bg-green-400 rounded-full shadow-lg">
          Translate
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}
