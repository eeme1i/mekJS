function Footer() {
    return (
        <div className="z-2 flex justify-between relative w-3/4 max-w-4xl my-8 mx-auto px-16 py-6 bg-white bg-opacity-75 rounded-3xl">
            <a href="/" className="items-center space-x-3 text-xl font-semibold">
                <img src="/logo.svg"></img>
            </a>
            <div className="text-xl text-right flex flex-col justify-items-end font-semibold tracking-tight text-gray-400">
            <a target="_blank" href="/" className="hover:text-gray-800 transition duration-200">
                App
                </a>
                <a target="_blank" href="https://math.eem.works" className="hover:text-gray-800 transition duration-200">
                Download
                </a>
                <a target="_blank" href="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja" className="transition duration-200 hover:text-gray-800">
                Github
                </a>
                <a target="_blank" href="mailto:eeruoh@gmail.com" className="hover:text-gray-800 transition duration-200">
                Contact
                </a>
            </div>
        </div>
    )
}

export default Footer
