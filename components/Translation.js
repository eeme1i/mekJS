
function Translation() {
    return (
        <div>
        <div className="z-20 relative py-8">
          <form>
            <textarea 
            spellcheck="false" 
            id="input" 
            rows="7" 
            type="text" 
            placeholder="LaTeX" 
            className="shadow-2xl font-mono outline-none border-0 ring-0 shadow-none text-xl flex mx-auto w-3/4 max-w-4xl bg-white bg-opacity-75 p-8 rounded-3xl"/>
            <button
            type="button"
            onClick={() => {console.log("translate")}}
            className="flex hover:scale-110 transition duration-150 mx-auto my-8 py-4 px-8 text-2xl text-white bg-blue-400 hover:bg-indigo-400 rounded-full shadow-lg">
            Translate
            </button>
          </form>
          <form>
            <textarea        
            value="asdasdasd"
            spellcheck="false" 
            readonly="readonly" 
            id="output" 
            type="text" 
            rows="7" 
            placeholder="CAS Export" 
            className="shadow-2xl font-mono outline-none border-0 ring-0 shadow-none text-xl flex mx-auto w-3/4 max-w-4xl bg-white bg-opacity-75 p-8 rounded-3xl"/>
            {/*https://www.w3schools.com/howto/howto_js_copy_clipboard.asp*/}
            <button         
            type="button" 
            className="flex hover:scale-110 transition duration-150 mx-auto my-8 py-4 px-8 text-2xl text-white bg-green-400 hover:bg-green-300 rounded-full shadow-lg">
            Copy
            </button>
          </form>
        </div>
        </div>
    )
}

export default Translation
