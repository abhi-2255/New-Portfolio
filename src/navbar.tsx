import { useState } from "react";
import { Menu } from 'lucide-react';

export default function Navbar() {
    const [menuOpened, setOpened] = useState(false)
    console.log(menuOpened);

    return (
        <>
            <div className=" flex justify-between items-center px-10 h-15 w-full border-b border-gray-300 ">
                <h2 className="lg:text-xl md:text-lg sm:text-md text-md font-semibold">Alex's Portfolio</h2>
                <nav className="gap-4 hidden lg:inline-flex sm:hidden md:hidden ">
                    <h2 className="text-lg font-medium">Home</h2>
                    <h2 className="text-lg font-medium">Projects</h2>
                    <h2 className="text-lg font-medium">Skills</h2>
                    <h2 className="text-lg font-medium">Contact</h2>
                </nav>
                <button onClick={() => setOpened(!menuOpened)} className="lg:hidden">
                    <Menu />
                </button>
            </div>
            {
                menuOpened && (
                    <div className="bg-gray-500 absolute top-5 right-10">
                        <h2 className="text-lg font-medium">Home</h2>
                        <h2 className="text-lg font-medium">Projects</h2>
                        <h2 className="text-lg font-medium">Skills</h2>
                        <h2 className="text-lg font-medium">Contact</h2>
                    </div>
                )
            }

        </>
    )

}
