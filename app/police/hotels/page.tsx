'use client'

import React, { useEffect } from 'react'
import RecentHotel from '../../components/RecentHotel';
import Button from '../../components/Button';
import { CgSoftwareDownload } from "react-icons/cg";
import { TfiPrinter } from "react-icons/tfi";
import SearchBar from '../../components/SearchBar';
import { useState } from 'react'
import axios from 'axios';
import Pagination from '@/app/components/Pagination';

interface Hotel {
    name: string,
    active: string,
    watchlist: string,
    lookOut: string,
    location: string,
    actions: string,
}

const hotelinfo: Hotel[] = [
    {
        name: "Tajmahal Hotel",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Khanapara Hotel",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Sixmile Hotel 1",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Jayanagar Hotel 1",
        active: "433",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Jayanagar Hotel 2",
        active: "433",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Jayanagar Hotel 3",
        active: "433",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Sixmile Hotel 2",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Sixmile Hotel 3",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Sixmile Hotel 13",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Sixmile Hotel 15",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Sixmile Hotel 18",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Sixmile Hotel 21",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Sixmile Hotel 24",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "Sixmile Hotel 28",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
]

const Hotels = () => {
    const [searchValue, setSearchValue] = useState("");
    const [hotelData, setHotelData] = useState(hotelinfo)
    const [filteredHotelData, setFilteredHotelData] = useState<Hotel[]>(hotelinfo)
    const [currentPage, setCurrentPage] = useState(1);
    const [hotelsPerPage, setHotelPerPage] = useState(5);
    const paginationOptions = [5, 10, 20, 50];

    const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value)
    }

    const pageChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setHotelPerPage(parseInt(value))
    }

    useEffect(() => {
        const filteredData = hotelData.filter((hotel) => {
            return hotel.name.toLowerCase().includes(searchValue.toLowerCase())
        })

        setFilteredHotelData(filteredData)
    }, [searchValue])

    // Get current hotels
    const indexOfLastHotel = currentPage * hotelsPerPage;
    const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
    const currentHotels = filteredHotelData.slice(indexOfFirstHotel, indexOfLastHotel);

    // Handling Previous page
    const handlePrevPage = () => {
        setCurrentPage(state => state - 1);
    };

    // Handling Next Page
    const handleNextPage = () => {
        setCurrentPage(state => state + 1);
    };

    return (
        <>
            <section className="my-y mt-[28px] containerMargin">
                <header className='flex justify-between items-center my-8'>
                    <h2 className="text-[22px] font-semibold">Recent Hotels</h2>
                    <article className='flex items-center gap-3'>
                        <SearchBar placeholder='Search' value={searchValue} onChange={searchChangeHandler} />
                        <Button link="" icon={<CgSoftwareDownload size={21} />}>Download PDF</Button>
                        <Button link="" icon={<TfiPrinter size={21} />}>Print Details</Button>
                    </article>
                </header>

                {/* Recent Hotel Container */}
                <RecentHotel HotelData={currentHotels} />

                {/* Hotel Pagination */}
                <article className='flex justify-between'>
                    {/*  Items per Page */}
                    <div className="flex gap-2 text-[14px] items-center text-[#8e8e8e]">
                        <span>Load</span>
                        <select
                            value={hotelsPerPage}
                            onChange={pageChangeHandler}
                            className="font-semibld p-2 text-black outline-0 rounded-[6px] border-[1.25px] border-[#e1e8ee]"
                        >
                            {paginationOptions.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                        <span>rows at a time</span>
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(filteredHotelData.length / hotelsPerPage)}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                    />
                </article>
            </section >
        </>
    )
}

export default Hotels;