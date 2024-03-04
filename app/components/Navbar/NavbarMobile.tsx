import React from 'react'
import Link from 'next/link'

const navbarLinks = [
    {
        name: 'Dashboard',
        link: '/',
    },
    {
        name: 'Settings',
        link: 'settings',
    },
    {
        name: 'All Logs',
        link: 'logs',
    },
    {
        name: 'All Hotels',
        link: 'hotels',
    },
    {
        name: 'Log Out',
        link: 'logout',
    },
];

const NavbarMobile = () => {
    return (
        <ul className="gap-5 hidden" >
            {
                navbarLinks.map((item) => (
                    <li className="text-[14px]" key={item.name}>
                        <Link href={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default NavbarMobile;