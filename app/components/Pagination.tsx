import React from 'react';
import Image from 'next/image';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePrevPage: () => void;
    handleNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
    return (
        <div className="flex gap-2 items-center">
            <button className="bg-[#2AAC95] w-[40px] h-[40px] inline-flex justify-center items-center rounded-[6.30px]" onClick={handlePrevPage} disabled={currentPage === 1}>
                <Image width={5.62} height={9.78} src="/Images/left.svg" alt="pagination left side button" />
            </button>
            <div className="text-[#2AAC95] font-semibold text-[13.54px] border-[1.26px] border-[#2AAC9520] w-[40px] h-[40px] inline-flex justify-center items-center rounded-[6.30px]">{currentPage}</div>
            <p className='text-[#848484]'>of <span className='text-[#2aac95]'>{totalPages}</span></p>
            <button className="bg-[#2AAC95] w-[40px] h-[40px] inline-flex justify-center items-center rounded-[6.30px]" onClick={handleNextPage} disabled={currentPage === totalPages}>
                <Image width={5.62} height={9.78} src="/Images/right.svg" alt="pagination right side button" />
            </button>
        </div>
    );
};

export default Pagination;
