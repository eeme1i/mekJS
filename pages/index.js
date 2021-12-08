import Head from 'next/head';
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>MEK JS</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono&display=swap" rel="stylesheet"></link>
      </Head>

      {/*background*/}
      <div className="z-1 fixed inset-0 min-h-screen h-full w-full bg-hero-pattern"></div>

      <Header className="z-20 relative" />


      {/*translation area*/}
      <div className="z-20 relative py-8">
          <form>
            <textarea id="input" rows="7" type="text" placeholder="LaTeX" className="shadow-2xl font-mono outline-none border-0 ring-0 shadow-none text-xl flex mx-auto w-3/4 max-w-4xl bg-white bg-opacity-75 p-8 rounded-3xl"/>
            <button className="flex hover:scale-110 transition duration-150 mx-auto my-8 py-4 px-8 text-2xl text-white bg-blue-400 hover:bg-indigo-400 rounded-full shadow-lg">
            Translate
            </button>
          </form>
          <form>
            <textarea id="output" readonly="readonly" type="text" rows="7" placeholder="CAS Export" className="shadow-2xl font-mono outline-none border-0 ring-0 shadow-none text-xl flex mx-auto w-3/4 max-w-4xl bg-white bg-opacity-75 p-8 rounded-3xl"/>
            {/*https://www.w3schools.com/howto/howto_js_copy_clipboard.asp*/}
            <button className="flex hover:scale-110 transition duration-100 mx-auto my-8 py-4 px-8 text-2xl text-white bg-green-400 hover:bg-green-300 rounded-full shadow-lg">
            Copy
            </button>
          </form>
      </div>
    </div>
  )
}
