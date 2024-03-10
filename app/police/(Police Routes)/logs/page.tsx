'use client'

import React, { useEffect } from 'react'
import RecentLogs from '../../../components/RecentLogs';
import Button from '../../../components/Button';
import { CgSoftwareDownload } from "react-icons/cg"
import { TfiPrinter } from "react-icons/tfi";
import { FormEvent } from 'react'
import { useState } from 'react';
import SearchBar from '../../../components/SearchBar';
import Image from 'next/image';
import axios from "axios";
import Pagination from '@/app/components/Pagination';
import ProtectedRoute from '@/app/middleware/protectedRoute';
const Logs = () => {
    const [searchValue, setSearchValue] = useState("")
  
    const [recentLogData, setRecentLogData] = useState<GuestData[]>([]);;
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemPerPage] = useState(5); // Number of items per page
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    // Default selected size is the first option

    const options = ["5","10", "20", "25", "50","100"];
    const handlePageSizeChange = (event: any) => {
        setItemPerPage(event.target?.value);
       
    };

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
    // useEffect(() => {
       
    //     fetchRecentLogs()
    // }, [itemsPerPage, currentPage])
    useEffect(() => {
       
        fetchRecentLogs()
    }, [])

    const fetchRecentLogs = async () => {
        setLoading(true)
        const token = sessionStorage.getItem("accessToken")
        axios({
            url: "https://backend.crimatrix.com/crimatrix-backend/v1/police-report/advance-guest-search?idCardNo=&name=&mobile=123",
            method: "GET",
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, },
        })
            .then((res) => {
                console.log(res?.data);
                //setRecentLogData(res?.data);
                setRecentLogData(guestData);
                setLoading(false);
               // setTotalPages(2);
            })
            .catch((err) => { });

    }


    useEffect(() => {
        const totalPagesCount = Math.ceil(guestData.length / itemsPerPage);
        console.log(totalPages)
        setTotalPages(totalPagesCount);
    }, [recentLogData, itemsPerPage]);


    const paginateRecentLogs = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return recentLogData.slice(startIndex, endIndex);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    
    const searchChangeHandler = (e: any) => {
        const query = e.target.value.toLowerCase();
        setSearchValue(query);
        const filtered = guestData.filter(guest => {
            const name = guest.name.toLowerCase();
            const number = guest.number.toLowerCase();
            return name.includes(query) || number.includes(query);
        });
        setRecentLogData(filtered);
    };
    
    return (
        <ProtectedRoute>
        <section className="my-6 mt-[208px] containerMargin">
            {/* Header */}
            <header className="flex justify-between items-center my-8">
                <h2 className="text-[22px] font-semibold">Recent Logs</h2>
                <article className="flex gap-3 items-center">
                    <SearchBar placeholder='Search' value={searchValue} handleOnChange={searchChangeHandler} />
                    <Button link="" type='secondary'>Search</Button>
                    <Button link="" icon={<CgSoftwareDownload size={21} />}>Download PDF</Button>
                    <Button link="" icon={<TfiPrinter size={21} />}>Print Details</Button>
                </article>
            </header>

            <RecentLogs loading={loading} recentLogData={paginateRecentLogs()} />

            {/* Pagination */}
            <article className="flex justify-between">
                {/* Number of Items Selector */}
                <div className='flex gap-2 text-[14px] items-center text-[#8e8e8e]'>
                    <span>Load</span>
                    <select
                value={itemsPerPage}
                onChange={handlePageSizeChange}
                className="font-semibold p-2 text-black outline-0 rounded-[6px] border-[1.25px] border-[#e1e8ee]"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
                    <span>rows at a time</span>
                </div>
                {/* Pagination controller */}
                <Pagination

                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage}

                />
            </article>
            </section>
            </ProtectedRoute>
    )
}

export default Logs;


