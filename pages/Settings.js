function Settings() {
    return (
        <div className="mx-auto w-5/6 max-w-4xl p-8 bg-gray-200 rounded-3xl tracking-tighter font-medium text-gray-700">
            <p
            className="text-5xl">
                Settings
            </p>
            <div className="my-8">
                <p className="text-3xl pb-4">Tila</p>
                <div className="flex justify-center">
                    <button
                    type="button"
                    className="text-2xl tracking-tighter font-medium w-3/4 py-4 bg-white rounded-2xl hover:bg-green-400 transition duration-200">
                       Math 1 
                    </button>
                    <button
                    type="button"
                    className="text-2xl tracking-tighter font-medium w-3/4 py-4 hover:bg-green-400 bg-white rounded-2xl mx-8 transition duration-200">
                       Math 2 
                    </button>
                    <button
                    type="button"
                    className="text-2xl tracking-tighter font-medium w-3/4 py-4 hover:bg-green-400 bg-white rounded-2xl transition duration-200">
                       Physics
                    </button>
                </div>
            </div>
            <div className="my-8">
                <p className="text-3xl pb-4">Tila</p>
                <div className="flex justify-center">
                    <button
                    type="button"
                    className="text-2xl tracking-tighter font-medium w-3/4 py-4 bg-white rounded-2xl hover:bg-green-400 mx-4 transition duration-200">
                      Vaalea 
                    </button>
                    <button
                    type="button"
                    className="text-2xl tracking-tighter font-medium w-3/4 py-4 hover:bg-green-400 bg-white rounded-2xl mx-4 transition duration-200">
                       Tumma 
                    </button>
                </div>
            </div>
            <div className="my-8">
                <p className="text-3xl pb-4">Muu</p>
                <div className="text-2xl">
                    <button type="button" className="flex text-2xl tracking-tighter font-medium p-4 hover:bg-green-400 bg-white rounded-2xl transition duration-200">
                        <p className="">Geometriatila</p>
                    </button>
                    <button type="button" className="flex text-2xl tracking-tighter font-medium p-4 hover:bg-green-400 bg-white rounded-2xl transition duration-200">
                        <p>Geometriatila</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Settings
 