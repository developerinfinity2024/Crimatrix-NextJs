'use client'

const GuestHeader = [
  "Guest Name",
  "Age",
  "Mobile Number",
  "Status",
  "Hotel",
  "Room No",
  "Actions",
];

const guestData = [
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

const actionsEventHandler = (index: number) => {
  const ele = document.getElementById(`guest-actions-${index}`);
  if (ele) {
    ele.classList.toggle("hidden");
  }
};

const RecentLogs = () => {
  return (
    <>
      <div className="bg-white rounded-md my-4 w-full py-2 px-4">
        <div className={`grid grid-cols-7`}>
          {GuestHeader.map((column, index) => {
            const textAlignClass = index === 0 ? "text-left" : index === 6 ? "text-right pr-[27px]" : "text-center";
            return (
              <span className={`inline-block font-medium ${textAlignClass}`} key={column}>
                {column}
              </span>
            );
          })}
        </div>
      </div>

      {/* Table Rows */}
      {guestData.map((hotel, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid grid-cols-7 gap-4 justify-between bg-white rounded-md my-4 py-4 px-4 items-center border border-[textDark]`}
        >
          {Object.values(hotel).map((item, index) => {
            const textAlignClass = index === 0 ? "text-left" : index === 6 ? "text-right" : "text-center";
            if (item === "...") {
              return (
                <div
                  onClick={() => actionsEventHandler(rowIndex)}
                  className="relative cursor-pointer flex justify-center"
                >
                  <button
                    className="flex pr-11 w-full justify-end items-center p-2 text-sm font-medium"
                    type="button"
                  >
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

                  <div
                    id={`guest-actions-${rowIndex}`}
                    className="z-10 hidden divide-y divide-gray-100 rounded-md shadow w-44 bg-white dark:divide-gray-200 absolute top-10 right-[42px]"
                  >
                    <p className="block px-4 overflow-hidden py-2 text-sm text-black hover:bg-gray-100 font-semibold">
                      Actions
                    </p>
                    <ul className="text-sm text-black">
                      <li>
                        <a
                          href="#"
                          className="block px-4 overflow-hidden py-2 text-sm text-black hover:bg-gray-100 font-semibold"
                        >
                          Find Similar Guest
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }
            return (
              <div className={`font-medium ${textAlignClass}`} key={index}>
                {item}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default RecentLogs;
