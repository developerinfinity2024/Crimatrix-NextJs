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

const NavbarDesktop = () => {
    return (
        <ul className="gap-5 flex" >
            {
                navbarLinks.map((item) => (
                    <li key={item.name}>
                        <Link href={item.link} className='px-4 py-3 text-textDark text-[14px]'>
                            {item.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default NavbarDesktop;