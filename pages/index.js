import Head from 'next/head';
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="font-inter">
      <Head>
        <title>MEK JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*background*/}
      <div className="z-1 absolute inset-0 h-full w-full bg-gray-200"></div>

      <Header className="z-2 relative" />


      {/*translation area*/}
      <div className="z-2 relative py-8">
          <form>
            <textarea rows="7" type="text" placeholder="LaTeX" className="outline-none border-0 ring-0 shadow-none text-xl flex mx-auto w-3/4 bg-gray-100 p-8 rounded-3xl"/>
            {/*https://www.w3schools.com/howto/howto_js_copy_clipboard.asp*/}
            <button onclick="myFunction()" className="flex hover:scale-110 transition duration-100 mx-auto my-8 py-4 px-8 text-2xl text-white bg-green-400 rounded-full shadow-lg">
            Translate
            </button>
          </form>
          <form>
            <textarea rows="7" type="text" placeholder="LaTeX" className="outline-none border-0 ring-0 shadow-none text-xl flex mx-auto w-3/4 bg-gray-100 p-8 rounded-3xl"/>
            {/*https://www.w3schools.com/howto/howto_js_copy_clipboard.asp*/}
            <button onclick="myFunction()" className="flex hover:scale-110 transition duration-100 mx-auto my-8 py-4 px-8 text-2xl text-white bg-green-400 rounded-full shadow-lg">
            Translate
            </button>
          </form>
      </div>
    </div>
  )
}
