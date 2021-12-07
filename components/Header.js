function Header() {
    return (
        <div className="flex items-center justify-between py-10 px-20">
                <a href="/" className="text-6xl">
                <img src="/logo.svg"></img>
                </a>
            <div className="text-xl font-semibold tracking-tight text-gray-500">
                <a className="px-5">
                Github
                </a>
                <a className="">
                Download
                </a>
            </div>
        </div>
    )
}

export default Header
