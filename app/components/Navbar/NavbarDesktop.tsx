'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';

import axios from 'axios';
import tokenhandle from "../../common/tokenhandle"
import { useCookies } from 'react-cookie';
const navbarLinks = [
    {
        name: 'Dashboard',
        link: '/police',
    },
    {
        name: 'All Logs',
        link: '/police/logs',
    },
    {
        name: 'All Hotels',
        link: '/police/hotels',
    },
    {
        name: 'Log Out',
        link: '/logout',
    },
];

const NavbarDesktop = () => {
    const [, ,removeCookie] = useCookies(['accessToken']);
    const router = useRouter();
    const pathName = usePathname();
    const activeLink = (url: string, pathname: string) => pathname === url ? "bg-[#333b4a] text-white" : "";
    const handleLogout = () => {
        const token = sessionStorage.getItem("accessToken")
        axios({
            url: "https://backend.crimatrix.com/crimatrix-backend/v1/auth/signout",
            method: "POST",
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, },
        })
            .then((res) => {
                tokenhandle.clearToken();
                removeCookie('accessToken', { path: '/' });
                router.push("/");
            })
            .catch((err) => { });
    };

    return (
        <article>
            <ul className="gap-2 flex" >
                {
                    navbarLinks.map((item) => (
                        <li key={item.name}>
                            {item.name === 'Log Out' ? (
                                <button
                                    onClick={handleLogout}
                                    className={`px-[34px] py-[14px] font-medium text-textDark text-[14px] rounded-[14px]`}
                                >
                                    {item.name}
                                </button>
                            ) : (
                                <Link href={item.link} className={`px-[34px] inline-block py-[14px] font-medium text-textDark text-[14px] rounded-[14px] ${activeLink(item.link, pathName)}`}>
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default NavbarDesktop;
