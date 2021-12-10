import Link from 'next/Link';

function Header() {
    return (
        <div className="z-2 relative flex items-center justify-between w-3/4 max-w-4xl my-8 mx-auto px-8 py-6 bg-white bg-opacity-75 rounded-full">
                <a href="/" className="flex hover:scale-125 transition duration-200 space-x-3 text-xl font-semibold">
                <img src="/logo.svg"></img>
                </a>
            <div className="text-xl font-semibold tracking-tight text-gray-400 hidden mobile:block">
                <Link href="/">
                <a
                className="mr-10 hover:text-gray-800 transition duration-200">
                App
                </a>
                </Link>
                <Link href="/download">
                <a 
                className="mr-10 hover:text-gray-800 transition duration-200">
                Download
                </a>
                </Link>
                <a 
                target="_blank" 
                href="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja" 
                className="transition duration-200 hover:text-gray-800">
                Github
                </a>
            </div>
        </div>
    )
}

export default Header
