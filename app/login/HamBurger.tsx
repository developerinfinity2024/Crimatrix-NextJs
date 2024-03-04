'use client'

import { useState } from 'react'
import Link from "next/link";


const Hamburger = () => {
    const [isVisible, setIsVisible] = useState(false);

    const navbarDropdownActiveHandler = () => {
        setIsVisible(state => !state);
    }

    return (
        <>
            <div onClick={navbarDropdownActiveHandler} className="relative cursor-pointer inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 ">
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
            </div>

            <div className={`absolute ${isVisible ? "" : "hidden"} top-12 right-2 z-10 mx-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 overflow-hidden `}>
                <ul className="text-sm text-gray-700">
                    <li className="">
                        <Link href="police" className="block px-4 py-2 hover:bg-gray-100 border-b border-[#ededed] dark:hover:text-black">Police Sign In</Link>
                    </li>
                    <li>
                        <Link href="hotel" className="block px-4 py-2 hover:bg-gray-100 hover:text-black">Hotel Sign In</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Hamburger;