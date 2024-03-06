'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const navbarLinks = [
    {
        name: 'Dashboard',
        link: '/',
    },
    {
        name: 'Settings',
        link: '/settings',
    },
    {
        name: 'All Logs',
        link: '/logs',
    },
    {
        name: 'All Hotels',
        link: '/hotels',
    },
    {
        name: 'Log Out',
        link: '/logout',
    },
];


const NavbarDesktop = () => {

    const pathName = usePathname();
    const activeLink = (url: string, pathname: string) => pathname === url ? "bg-[#333b4a] text-white" : "";

    return (
        <article>
            <ul className="gap-2 flex" >
                {
                    navbarLinks.map((item) => (
                        <li key={item.name}>
                            <Link href={item.link} className={`px-[34px] py-[14px] font-medium text-textDark text-[14px] rounded-[14px] ${activeLink(item.link, pathName)}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default NavbarDesktop;