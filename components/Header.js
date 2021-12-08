function Header() {
    return (
        <div className="flex items-center justify-between max-w-4xl my-8 mx-auto px-16 py-4 bg-gray-50 rounded-full shadow-lg">
                <a href="/" className="flex hover:scale-125 transition duration-100 space-x-3 text-xl font-semibold">
                <img src="/logo.svg"></img>
                <span>MEK</span>
                </a>
            <div className="text-xl font-semibold tracking-tight text-gray-500">
                <a target="_blank" href="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja" className="mr-10 hover:text-gray-800 transition duration-100">
                Github
                </a>
                <a target="_blank" href="https://math.eem.works" className="hover:text-gray-800 transition duration-100">
                Download
                </a>
            </div>
        </div>
    )
}

export default Header
