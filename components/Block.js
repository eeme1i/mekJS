function Block() {
    return (
        <div>
            <div className="flex flex-col text-9xl z-50 fixed inset-0 min-h-screen h-full w-full mobile:hidden bg-red-600">
                <p className="my-auto tracking-tighter">
                    PLEASE<br/>USE A<br/>LARGER<br/>SCREEN
                </p>
                <p className="text-4xl tracking-tighter">Currently only optimized for desktop.</p>
            </div>
        </div>
    )
}

export default Block
