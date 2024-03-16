import React from 'react'
import RecentLogs from "../components/RecentLogs";
import Button from "../components/Button";
import HotelStatistics from '@/app/components/HotelStatistics';

const guestData = [
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
];

const page = () => {
    return (
        <>
            {/* Top Header */}
            <section className="bg-[#1a2033] relative">
                <header className={`pb-[136px] pt-10 px-7 containerMargin`}>
                    <h1 className="font-semibold text-white text-[24px] mb-4">
                        Welcome back, Sarfaraz
                    </h1>
                    <p className="text-textDark text-[14px]">Dashboard</p>
                </header>
            </section>

            {/* Statistic Cards */}
            <section className="grid grid-cols-3 gap-6 absolute top-[252px] h-fit lg:bottom-[-114px] left-0 right-0 containerMargin">
                <HotelStatistics />
                <HotelStatistics />
                <HotelStatistics />
            </section>

            <section className="containerMargin mt-[176px] flex flex-col gap-2">

                {/* Recent Logs */}
                <article className="my-6">
                    <header className="flex justify-between items-center py-2">
                        <h2 className="font-semibold text-[22px]">Recent Logs</h2>
                        <Button link="/police/logs">View All</Button>
                    </header>
                    <RecentLogs logsData={guestData} />
                </article>
            </section>
        </>
    )
}

export default page