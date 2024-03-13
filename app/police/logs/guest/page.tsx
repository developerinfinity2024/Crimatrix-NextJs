import React from 'react'
import Image from 'next/image'

const GuestData = [
    {
        title: 'Guest Name',
        value: 'Mictchel Lensink'
    },
    {
        title: 'Room Number',
        value: 'A-07-003'
    },
    {
        title: 'Phone Number',
        value: '0901605000'
    },
    {
        title: 'Sex',
        value: 'Male'
    },
    {
        title: 'Identification Type',
        value: 'Indian'
    },
    {
        title: 'Indentification Details',
        value: 'Nationality'
    },
    {
        title: 'Date of Birth',
        value: '14 November 2002'
    },
    {
        title: 'Coming From',
        value: 'Ho Chi Minh City'
    },
    {
        title: 'Going To',
        value: 'Vietnam'
    },
    {
        title: 'Nationality',
        value: 'Indian'
    },
    {
        title: 'Vehicle Registration No',
        value: 'DH Metro 201387'
    },
    {
        title: 'Additional Members',
        value: '1'
    },
]

const Guest = () => {
    return (
        <section className='containerMargin flex gap-12 p-[39px] bg-white rounded-[14px] my-10'>
            <img src="/Images/Guest.png" className='object-cover w-[152px] h-[152px]' alt='Guest user Image' />
            <article className='grid grid-cols-2 w-full gap-x-[28.55px] gap-y-[26.54px]'>
                {GuestData.map((item) => {
                    return (
                        <div className='flex flex-col gap-[6.44px] text-[#333F4E] border-[#DADADA] border-[1.08px] rounded-[12.8px] p-[17.22px]'>
                            <h4 className="text-[14px] font-normal">{item.title}</h4>
                            <p className='text-[16px] font-semibold'>{item.value}</p>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}

export default Guest;