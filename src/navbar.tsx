import { useState } from "react";
import { Menu } from 'lucide-react';

export default function Navbar() {
    const [menuOpened, setOpened] = useState(false)
    console.log(menuOpened);

    return (
        <>
            <div className="flex justify-between items-center sticky top-0 bg-white px-10 h-16 w-full border-b border-gray-300 ">
                <h2 className="lg:text-xl md:text-lg sm:text-lg text-lg font-semibold">Alex's Portfolio</h2>
                <nav className="gap-10 hidden lg:inline-flex sm:hidden md:hidden ">
                    <h2 className="text-lg font-medium hover:bg-sky-200 rounded-md transition-all cursor-pointer">Home</h2>
                    <h2 className="text-lg font-medium hover:bg-sky-200 rounded-md transition-all cursor-pointer">Projects</h2>
                    <h2 className="text-lg font-medium hover:bg-sky-200 rounded-md transition-all cursor-pointer">Skills</h2>
                    <h2 className="text-lg font-medium hover:bg-sky-200 rounded-md  transition-all cursor-pointer">Contact</h2>
                </nav>
                <button onClick={() => setOpened(!menuOpened)} className="lg:hidden">
                    <Menu />
                </button>
            </div>
            {
                menuOpened && (
                    <div className="absolute top-20 left-0 right-4 p-4 w-full bg-white gap-5 flex flex-col items-center transform transition-transform lg:hidden">
                        <h2 className="text-lg font-medium cursor-pointer">Home</h2>
                        <h2 className="text-lg font-medium cursor-pointer">Projects</h2>
                        <h2 className="text-lg font-medium cursor-pointer">Skills</h2>
                        <h2 className="text-lg font-medium cursor-pointer">Contact</h2>
                    </div>
                )
            }

        </>
    )

}
