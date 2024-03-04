'use client'

import Link from 'next/link';
import { FaRegBell } from 'react-icons/fa6';
import SearchBar from '../SearchBar';
import { useState } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <nav className="bg-primary px-4">
      <div className="flex justify-between items-center flex-wrap py-6 mx-auto max-w-[1440px]">
        <Link href="/" className="text-[24px] font-semibold text-white">Crimatrix
        </Link>

        {/* Navbar Desktop */}
        <article className='lg:mx-auto lg:flex hidden'>
          <NavbarDesktop />
        </article>

        {/* navbar CTA container */}
        <article className="flex gap-4 items-center md:order-3">
          <div className='flex gap-2 items-center'>
            <div className=" bg-[#2c3444] cursor-pointer p-1 rounded-3xl">
              <FaRegBell className="text-white" size={20} />
            </div>
            <div className=" bg-[#2c3444] w-[26px] rounded-full cursor-pointer">
              <img className="rounded-3xl" src="/Images/user.jpg" alt="" />
            </div>
          </div>
        </article>

        {/* Search Bar Container */}
        <div className='w-full mt-4 md:order-2 md:my-0 md:w-auto md:ml-auto md:mr-2 '>
          <SearchBar value={searchValue} onChange={handleSearchChange} />
        </div>

        {/* Navbar Mobile */}
        <article>
          <NavbarMobile />
        </article>

      </div>
    </nav >
  );
};

export default Navbar;
