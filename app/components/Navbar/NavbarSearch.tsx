import Image from "next/image";


const NavbarSearch = () => {
    return (
        <article className="flex rounded-full bg-[#2c3444] gap-[16px] px-[18px] py-[11.5px] cursor-pointer relative">
            <Image width={24} height={24} src="/Images/search-normal.svg" alt="Search Icon" />
            <span className="text-[14px] font-normal text-[#ffffff50]">Search anything here</span>
        </article>
    )
}

export default NavbarSearch;