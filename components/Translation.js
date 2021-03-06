import CallTranslation from "./CallTranslation"
import copyText from "./CopyText"
function Translation() {
    return (
        <div>
        <div className="z-20 relative pt-8">
          <form>
            <textarea 
            spellcheck="false" 
            id="inputBox" 
            rows="7" 
            type="text" 
            placeholder="LaTeX" 
            className="shadow-2xl font-mono outline-none border-0 ring-0 shadow-none text-xl flex mx-auto w-3/4 max-w-4xl bg-white bg-opacity-75 p-8 rounded-3xl"/>
            <button
            type="button"
            onClick={CallTranslation}   // call "callTranslation function in Translation.js
            className="flex hover:scale-110 transition duration-150 mx-auto my-8 py-4 px-8 text-2xl text-white bg-blue-400 hover:bg-indigo-400 rounded-full shadow-lg">
            Translate
            </button>
          </form>
          <form>
            <textarea
            spellcheck="false" 
            readonly="readonly" 
            id="outputBox" 
            type="text" 
            rows="7" 
            placeholder="CAS Export" 
            className="shadow-2xl font-mono outline-none border-0 ring-0 shadow-none text-xl flex mx-auto w-3/4 max-w-4xl bg-white bg-opacity-75 p-8 rounded-3xl"/>
            <button         
            type="button" 
            onClick={copyText}    // call "copy" function in Translation.js
            className="flex hover:scale-110 transition duration-150 mx-auto my-8 py-4 px-8 text-2xl text-white bg-green-400 hover:bg-green-300 rounded-full shadow-lg">
            Copy
            </button>
          </form>
        </div>
        </div>
    )
}

export default Translation
