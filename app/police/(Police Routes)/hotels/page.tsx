'use client'

import React from 'react'
import RecentHotel from '../../../components/RecentHotel';
import Button from '../../../components/Button';
import { CgSoftwareDownload } from "react-icons/cg";
import { TfiPrinter } from "react-icons/tfi";
import SearchBar from '../../../components/SearchBar';
import { useState } from 'react'
import Image from 'next/image'
import ProtectedRoute from '@/app/middleware/protectedRoute';

const Hotels = () => {
    const [searchValue, setSearchValue] = useState("");
    const searchChangeHandler = (value: string) => {
        setSearchValue(value)
    }

    return (
        <>
            <ProtectedRoute>
            <section className="my-y mt-[208px] containerMargin">
                <header className='flex justify-between items-center my-8'>
                    <h2 className="text-[22px] font-semibold">Recent Hotels</h2>
                    <article className='flex items-center gap-3'>
                        <SearchBar placeholder='Search' value={searchValue} onChange={searchChangeHandler} />
                        <Button link="" type='secondary'>Search</Button>
                        <Button link="" icon={<CgSoftwareDownload size={21} />}>Download PDF</Button>
                        <Button link="" icon={<TfiPrinter size={21} />}>Print Details</Button>
                    </article>
                </header>
                <RecentHotel />
                {/* Pagination */}
                <article className="flex justify-between">
                    {/* Number of Items Selector */}
                    <div className='flex gap-2 text-[14px] items-center text-[#8e8e8e]'>
                        <span>Load</span>
                        <select name="" id="" className="font-semibold p-2 text-black outline-0 rounded-[6px] border-[1.25px] border-[#e1e8ee]">
                            <option value="">20</option>
                            <option value="">25</option>
                            <option value="">30</option>
                        </select>
                        <span>rows at a time</span>
                    </div>
                    {/* Pagination controller */}
                    <div className="flex gap-2 items-center">
                        <div className="bg-[#2AAC95] w-[40px] h-[40px] inline-flex justify-center items-center rounded-[6.30px]">
                            <Image width={5.62} height={9.78} src="/Images/left.svg" alt="pagination left side button" />
                        </div>
                        <div className="text-[#2AAC95] font-semibold text-[13.54px] border-[1.26px] border-[#2AAC9520] w-[40px] h-[40px] inline-flex justify-center items-center rounded-[6.30px]">01</div>
                        <p className='text-[#848484]'>of <span className='text-[#2aac95]'>4,1246</span></p>
                        <div className="bg-[#2AAC95] w-[40px] h-[40px] inline-flex justify-center items-center rounded-[6.30px]">
                            <Image width={5.62} height={9.78} src="/Images/right.svg" alt="pagination left side button" />
                        </div>
                    </div>
                </article>
                </section>
                </ProtectedRoute>
        </>
    )
}

export default Hotels;