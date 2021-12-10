import Header from "../components/Header"
import Background from "../components/Background";
import Image from "next/image";
import Footer from "../components/Footer";

function download() {
    return (
        <div>
        <Background />
        <Header />
            <div className="z-2 relative mx-auto w-3/4 max-w-4xl">
                <div className="px-8">
                <p className=" text-6xl tracking-tighter font-medium text-gray-700 pb-16">
                LaTeX to Nspire<br/>Translator
                </p>
                </div>
                <div className="invisible mobile:visible pb-16">
                    <Image src="/translation2.png" height={514} width={1632}/>
                </div>
                <div className="text-2xl font-medium tracking-tighter mx-auto w-100 bg-white p-8 mobile:w-3/4 rounded-2xl mb-16">
                    <p className="leading-6 pb-4">Download MEK to<br/>your computer</p>
                    <div className="text-xl flex justify-between text-white bg-black py-4 px-8 rounded-2xl">
                        <p>MEK 3.0</p>
                        <a className="hover:scale-125 transition duration-200" href="https://github.com/matikkaeditorinkaantaja/Matikkaeditorinkaantaja/archive/refs/tags/v3.0.zip" class="dl">
                            <svg className="stroke-green-400" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1629 20.5815L16.1629 4.52679" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M20.051 16.6779L16.163 20.5819L12.275 16.6779" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M22.3401 10.8373H23.5841C26.2974 10.8373 28.4961 13.036 28.4961 15.7507L28.4961 22.2627C28.4961 24.9693 26.3028 27.1627 23.5961 27.1627L8.74276 27.1627C6.02943 27.1627 3.82943 24.9627 3.82943 22.2493L3.82943 15.736C3.82943 13.0307 6.02409 10.8373 8.72943 10.8373H9.98543" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>                        
                        </a>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    )
}

export default download
