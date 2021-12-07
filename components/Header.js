function Header() {
    return (
        <div className="flex items-center justify-between py-10 px-20">
                <a href="/" className="text-6xl">
                <img src="/logo.svg"></img>
                </a>
            <div className="text-xl font-semibold tracking-tight text-gray-500">
                <a target="_blank" href="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja" className="px-5 hover:text-gray-800 transition duration-100">
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
