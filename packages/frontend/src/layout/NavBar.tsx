export default function NavBar(){
    return(
        <nav className="flex w-full justify-between border-b-purple-700 border p-4">
            {/* LEFT SIDE ELEMENTS */}
            <div className="w-1/3 text-xl">
                <h2>TypeScript Bug Tracker</h2>
            </div>
            
            {/* MIDDLE ELEMENT */}
            <div className="w-1/3 text-center text-xl">
                <h2>Hello, <span className="border-b border-b-violet-700">$NAME</span></h2>
            </div>

            {/* RIGHT SIDE ELEMENTS */}
            <div className="w-1/3 flex flex-grow justify-end">
                <button className="px-6 py-1 mx-2 border bg-purple-700 text-white rounded-xl">
                    Log In
                </button>
                <button className="px-6 py-1 mx-2 border bg-purple-700 text-white rounded-xl">
                    Support
                </button>
            </div>
        </nav>
    )
}