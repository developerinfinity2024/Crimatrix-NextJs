'use client'

import React from 'react'
import RecentLogs from '../components/RecentLogs';
import Button from '../components/Button';
import { CgSoftwareDownload } from "react-icons/cg"
import { TfiPrinter } from "react-icons/tfi";
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Logs = () => {
    const [searchValue, setSearchValue] = useState("")
    const searchChangeHandler = (value: string) => {
        setSearchValue(value)
    }
    return (
        <section className="my-8 containerMargin">
            <header className="flex justify-between items-center my-8">
                <h2 className="text-[22px] font-semibold">Recent Logs</h2>
                <article className="flex gap-3 items-center">
                    <SearchBar placeholder='Search' value={searchValue} onChange={searchChangeHandler} />
                    <Button link="" type='secondary'>Search</Button>
                    <Button link="" icon={<CgSoftwareDownload size={21} />}>Download PDF</Button>
                    <Button link="" icon={<TfiPrinter size={21} />}>Print Details</Button>
                </article>
            </header>
            <RecentLogs />
        </section>
    )
}

export default Logs;

