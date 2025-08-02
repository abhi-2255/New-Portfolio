import React from 'react'

export default function Navbar() {
    return (
            <div className=" flex justify-between items-center px-10 h-15 w-full border-b border-gray-300 ">
                <h2 className="text-xl font-semibold">Alex's Portfolio</h2>
                <nav className="flex gap-4 ">
                    <h2 className="text-lg font-medium">Home</h2>
                    <h2 className="text-lg font-medium">Projects</h2>
                    <h2 className="text-lg font-medium">Skills</h2>
                    <h2 className="text-lg font-medium">Contact</h2>
                </nav>
            </div>
    )
}
