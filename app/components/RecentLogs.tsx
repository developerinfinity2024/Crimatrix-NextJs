'use client'

import Image from "next/image";

const GuestHeader = [
  "Guest Name",
  "Age",
  "Mobile Number",
  "Status",
  "Hotel",
  "Room No",
  "Actions",
];

interface Guest {
  name: string;
  age: string;
  number: string;
  status: string;
  hotel: string;
  roomNumber: string;
  action: string;
}

interface RecentGuestProps {
  logsData: Guest[]
}

const actionsEventHandler = (index: number) => {
  const ele = document.getElementById(`guest-actions-${index}`);
  if (ele) {
    ele.classList.toggle("hidden");
  }
};

const RecentLogs: React.FC<RecentGuestProps> = ({ logsData }) => {
  return (
    <>
      {/* Table Headers */}
      <div className="grid grid-cols-7 bg-white rounded-[6.28px] my-4 w-full py-2 px-4">
        {GuestHeader.map((column, index) => {
          const textAlignClass = index === 0 ? "text-left" : index === 6 ? "text-right pr-[27px]" : "text-center";
          return (
            <div className={`text-[#1A2D4A] text-[15px] font-medium ${textAlignClass}`} key={column}>
              {column}
            </div>
          );
        })}
      </div>

      {/* Table Rows */}
      {logsData.map((hotel: any, rowIndex: any) => (
        <div key={rowIndex} className={`grid grid-cols-7 gap-4 justify-between bg-white rounded-md my-4 py-[13.5px] px-4 items-center border-[1.26px] border-[#E1E8EE]`}>
          {Object.values(hotel).map((item, index) => {
            const textAlignClass = index === 0 ? "text-left" : index === 6 ? "text-right" : "text-center";
            if (item === "...") {
              return (
                <div key={index} onClick={() => actionsEventHandler(rowIndex)} className="relative cursor-pointer flex justify-center">
                  <button className="flex pr-11 w-full justify-end items-center p-2 text-sm font-medium" type="button">
                    <Image width={20.10} height={20.10} src="/Images/more.svg" alt="More options Button for Logs" />
                  </button>

                  <div id={`guest-actions-${rowIndex}`} className="z-10 text-[#0e1d44] hidden rounded-md shadow w-[192px] bg-white absolute top-10 right-[42px]">
                    <p className="block px-4 overflow-hidden py-2 border-b-[1.15px] border-[#00000009] text-sm font-semibold">Actions</p>
                    <ul className="text-sm">
                      <li>
                        <a href="#" className="flex gap-2 px-4 overflow-hidden py-2 text-sm text-inherit hover:bg-gray-100 font-semibold">
                          <Image width={17} height={17} src="/Images/info.svg" alt="Button for finding similar Guest" />
                          <span>Find Similar Guest</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }
            return (
              <div className={`font-medium ${textAlignClass}`} key={index}>{item as React.ReactNode}</div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default RecentLogs;

