'use client'

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
        actions: "..."
    },
    {
        name: "New Tajmahal Hotel",
        active: "443",
        watchlist: "233",
        LookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "..."
    },
    {
        name: "New Tajmahal Hotel",
        active: "443",
        watchist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "..."
    },
    {
        name: "New Tajmahal Hotel",
        active: "433",
        watchlist: "233",
        lookOut: "0",
        location: "Chakbazar, New Delhi, India",
        actions: "..."
    }
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
            <div className="bg-white rounded-md my-4 py-2 px-4 grid grid-cols-6">
                {/* Table Headers  */}
                {HotelHeader.map((hotel, index) => {
                    const textAlignClass = index === 0 ? "text-left" : index === 5 ? "text-right pr-[28px]" : "text-center";
                    return (
                        <div className={`font-medium ${textAlignClass}`} key={hotel
                        }>
                            {hotel}
                        </div>
                    )
                })}
            </div>

            {/* Table Rows */}
            {hotelData.map((hotel, rowIndex) => {
                return (
                    <div key={rowIndex} className={`grid grid-cols-6 gap-4 justify-between bg-white rounded-md my-4 py-4 px-4 items-center border border-[textDark]`}>
                        {Object.values(hotel).map((item, index) => {
                            const textAlignClass = index === 0 ? "text-left" : index === 5 ? "text-right" : "text-center";
                            if (item === "...") {
                                return (
                                    <div onClick={() => actionsEventHandler(rowIndex)} className="relative cursor-pointer flex justify-center" key={index}>
                                        <button className="flex pr-11 justify-end w-full items-center p-2 text-sm font-medium">
                                            <svg
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 16 3"
                                            >
                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                            </svg>
                                        </button>

                                        <div id={`actions-${rowIndex}`} className="z-10 hidden divide-y divide-gray-100 rounded-md shadow w-44 bg-white dark:divide-gray-200 absolute top-10 right-[41px]"
                                        >
                                            <p className="block px-4 overflow-hidden py-2 text-sm text-black hover:bg-gray-100 font-semibold">
                                                Actions
                                            </p>
                                            <ul className="text-sm text-black">
                                                <li>
                                                    <a href="#" className="block px-4 overflow-hidden py-2 text-sm text-black hover:bg-gray-100 font-semibold">
                                                        View Guest List
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        className="block px-4 overflow-hidden py-2 text-sm text-black hover:bg-gray-100 font-semibold">
                                                        Messsage the Hotel
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