'use client'

import React, { useEffect } from 'react'
import RecentLogs from '@/app/components/RecentLogs';
import Button from '@/app/components/Button';
import { CgSoftwareDownload } from "react-icons/cg"
import { TfiPrinter } from "react-icons/tfi";
import { useState } from 'react';
import SearchBar from '@/app/components/SearchBar';
import axios from "axios";
import Pagination from '@/app/components/Pagination';

interface GuestData {
    name: string;
    age: string;
    number: string;
    status: string;
    hotel: string;
    roomNumber: string;
    action: string;
}

const guestData: GuestData[] = [
    {
        name: "Test Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
    {
        name: "Nusrat Jahan Nowshin",
        age: "19",
        number: "+880 0170 00 22 332",
        status: "Active",
        hotel: "New Tajmahal Hotel",
        roomNumber: "A-10-05",
        action: "...",
    },
];

const Logs = () => {
    const [searchValue, setSearchValue] = useState("")
    const [logsData, setLogsData] = useState(guestData);
    const [filteredLogsData, setFilteredLogsData] = useState<GuestData[]>(guestData)
    const [currentPage, setCurrentPage] = useState(1);
    const [logsPerPage, setLogsPerPage] = useState(5);
    const paginationOptions = [5, 10, 20, 50];

    const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value)
    }

    const pageChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setLogsPerPage(parseInt(value))
    }

    useEffect(() => {
        const filteredData = logsData.filter((guest) => {
            return guest.name.toLocaleLowerCase().includes(searchValue.toLowerCase())
        })

        setFilteredLogsData(filteredData)
    }, [searchValue])

    // Get Current Logs 
    const indexOfLastLog = currentPage * logsPerPage
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    const currentLogs = filteredLogsData.slice(indexOfFirstLog, indexOfLastLog)

    // Handle Previous Page
    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    // Handler Next Page
    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    // const fetchRecentLogs = async () => {
    //     setLoading(true)
    //     const token = sessionStorage.getItem("accessToken")
    //     axios({
    //         url: "https://backend.crimatrix.com/crimatrix-backend/v1/police-report/advance-guest-search?idCardNo=&name=&mobile=123",
    //         method: "GET",
    //         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, },
    //     })
    //         .then((res) => {
    //             console.log(res?.data);

    //             setRecentLogData(guestData);
    //             setLoading(false);
    //         })
    //         .catch((err) => { });
    // }

    // useEffect(() => {
    //     const totalPagesCount = Math.ceil(guestData.length / itemsPerPage);
    //     console.log(totalPages)
    //     setTotalPages(totalPagesCount);
    // }, [itemsPerPage]);

    return (
        <section className="my-6 mt-[28px] containerMargin">
            {/* Header */}
            <header className="flex justify-between items-center my-8">
                <h2 className="text-[22px] font-semibold">Recent Logs</h2>
                <article className="flex gap-3 items-center">
                    <SearchBar placeholder='Search' value={searchValue} onChange={searchChangeHandler} />
                    <Button link="" icon={<CgSoftwareDownload size={21} />}>Download PDF</Button>
                    <Button link="" icon={<TfiPrinter size={21} />}>Print Details</Button>
                </article>
            </header>

            {/* Recent Logs */}
            <RecentLogs logsData={currentLogs} />

            {/* Pagination */}
            <article className="flex justify-between">
                {/* Items Per Page*/}
                <div className='flex gap-2 text-[14px] items-center text-[#8e8e8e]'>
                    <span>Load</span>
                    <select
                        value={logsPerPage}
                        onChange={pageChangeHandler}
                        className="font-semibold p-2 text-black outline-0 rounded-[6px] border-[1.25px] border-[#e1e8ee]"
                    >
                        {paginationOptions.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    <span>rows at a time</span>
                </div>
                {/* Pagination controller */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredLogsData.length / logsPerPage)}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage}
                />
            </article>
        </section>
    )
}

export default Logs;


