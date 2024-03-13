'use client'

import Image from "next/image";
import NavbarSearchParameters from "./NavbarSearchParameters";
import { useState } from 'react'

const NavbarSearch = () => {

    const [isVisible, setIsVisible] = useState(false);

    const modalVisibilityHandler = () => {
        console.log('HI')
        setIsVisible(state => !state)
    }

    return (
        <>
            <button className="flex rounded-full bg-[#2c3444] gap-[16px] px-[18px] py-[11.5px] z-20 cursor-pointer relative" onClick={modalVisibilityHandler}>
                <Image width={24} height={24} src="/Images/search-normal.svg" alt="Search Icon" />
                <span className="text-[14px] font-normal translate-y-[2px] text-[#ffffff50]">Search anything here</span>
            </button>


            <div className={`absolute top-12 right-[124px] z-20 ${!isVisible ? "hidden" : ""}`}>
                <NavbarSearchParameters handleModal={modalVisibilityHandler} />
            </div>
            <div className={`${!isVisible ? "hidden" : ""} bg-[#00000060] w-full h-full fixed top-0 left-0 z-10`}></div>
        </>
    )
}

export default NavbarSearch;