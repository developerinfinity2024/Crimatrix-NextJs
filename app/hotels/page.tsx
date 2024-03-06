'use client'

import React from 'react'
import RecentHotel from '../components/RecentHotel';
import Button from '../components/Button';
import { CgSoftwareDownload } from "react-icons/cg";
import { TfiPrinter } from "react-icons/tfi";
import SearchBar from '../components/SearchBar';
import { useState } from 'react'

const Hotels = () => {
    const [searchValue, setSearchValue] = useState("");
    const searchChangeHandler = (value: string) => {
        setSearchValue(value)
    }

    return (
        <section className="my-8 containerMargin">
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
        </section>
    )
}

export default Hotels;