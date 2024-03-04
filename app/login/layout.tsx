import React from 'react'
import Image from 'next/image';
import Hamburger from './HamBurger';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="bg-[#f5f6fc] flex flex-col justify-between h-[100vh]">
            {/* Header */}
            <header className="flex justify-between py-[10px] px-4 text-white mb-[87px]  sticky top-0 z-10 shadow-md bg-white">
                <Image
                    src="/Images/logo.png"
                    alt="crimatrix logo"
                    width={223}
                    height={43}
                />
                <Hamburger />
            </header>

            {/* login pages container */}
            <article className='lg:flex flex-row-reverse gap-10 lg:max-w-[1540px] lg:mx-auto'>
                {children}
            </article>

            {/* Footer */}
            <footer className="text-[#cc0000] px-[15px] py-4">
                <span className="text-[13px] mb-2 text-center block
                ">&copy;2024 Naesta Technology</span>
                <ul className="flex gap-2 flex-wrap justify-center font-light text-[14px]">
                    <li className="border-r border-[#6c757d] pr-[5px]">
                        <Link href="">About</Link>
                    </li>

                    <li className="border-r border-[#6c757d] pr-[5px]">
                        <Link href="">Contact</Link>
                    </li>

                    <li className="border-r border-[#6c757d] pr-[5px]">
                        <Link href="">IPR Complaints</Link>
                    </li>

                    <li className="border-r border-[#6c757d] pr-[5px]">
                        <Link href="">Terms of Service</Link>
                    </li>

                    <li>
                        <Link href="">Privacy Policy</Link>
                    </li>
                </ul>
            </footer>
        </section>
    )
}

export default Layout;