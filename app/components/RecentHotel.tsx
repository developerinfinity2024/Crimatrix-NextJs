'use client'

import Image from "next/image"

const HotelHeader = [
    "Hotel Name",
    "Active",
    "Watchlist",
    "Look Out",
    "Location",
    "Actions"
]

const hotelData = [
    {
        name: "New Tajmahal Hotel",
        active: "443",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "New Tajmahal Hotel",
        active: "443",
        watchlist: "233",
        LookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "New Tajmahal Hotel",
        active: "443",
        watchist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
    {
        name: "New Tajmahal Hotel",
        active: "433",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "CTA"
    },
]

const actionsEventHandler = (index: number) => {
    const ele = document.getElementById(`actions-${index}`);
    if (ele) {
        ele.classList.toggle('hidden')
    }
}

const RecentHotel = () => {
    return (
        <>
            {/* Table Headers */}
            <div className="bg-white rounded-[6.28px] my-4 py-2 px-4 grid grid-cols-6">
                {HotelHeader.map((hotel, index) => {
                    const textAlignClass = index === 0 ? "text-left" : index === 5 ? "text-right pr-[28px]" : "text-center";
                    return (
                        <div className={`font-medium text-[#1A2D4A] text-[15px] ${textAlignClass}`} key={hotel}>
                            {hotel}
                        </div>
                    )
                })}
            </div>

            {/* Table Rows */}
            {hotelData.map((hotel, rowIndex) => {
                return (
                    <div key={rowIndex} className={`grid grid-cols-6 gap-4 justify-between bg-white rounded-md my-4 py-[13.5px] px-4 items-center border-[1.26px] border-[#E1E8EE]`}>
                        {Object.values(hotel).map((item, index) => {
                            const textAlignClass = index === 0 ? "text-left" : index === 5 ? "text-right" : "text-center";
                            if (item === "CTA") {
                                return (
                                    <div onClick={() => actionsEventHandler(rowIndex)} className="relative cursor-pointer flex justify-center" key={index}>
                                        <button className="flex pr-11 justify-end w-full items-center p-2 text-sm font-medium">
                                            <Image width={20.10} height={20.10} src="/Images/more.svg" alt="More Options Button for Hotels" />
                                        </button>

                                        <div id={`actions-${rowIndex}`} className="z-10 hidden text-[#0e1d44] rounded-md shadow bg-white absolute top-10 w-[192px] right-[41px]">
                                            <p className="block px-4 overflow-hidden py-[7px] text-sm text-inherit font-semibold">Actions</p>
                                            <ul className="text-sm text-[#0e1d44]">
                                                <li>
                                                    <a href="#" className="flex gap-2 text-inherit px-4 overflow-hidden py-[11px] text-sm border-y-[1px] border-[#00000009] text-black hover:bg-gray-100 font-semibold">
                                                        <Image width={17} height={17} src="/Images/info.svg" alt="" />
                                                        <span>View Guest List</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex gap-2 px-4 text-inherit overflow-hidden py-[11px] text-sm text-black hover:bg-gray-100 font-semibold">
                                                        <Image width={17} height={17} src="/Images/Comment.svg" alt="" />
                                                        <span>Messsage the Hotel</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <div className={`font-medium ${textAlignClass}`} key={index}>{item}</div>
                            )
                        })}
                    </div>
                )
            })}
        </>

    )
}

export default RecentHotel;