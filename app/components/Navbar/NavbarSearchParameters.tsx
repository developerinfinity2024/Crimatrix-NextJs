const NavbarSearchParameters = () => {
    return (
        <article className="grid grid-cols-3 gap-[18px] w-[857px] bg-white px-5 py-6 m-4 rounded-[5px]">
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Guest Name</label>
                <input className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]" type="text" placeholder="Keywords" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Room Number</label>
                <input className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]" type="text" placeholder="Keywords" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Phone Number</label>
                <input className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]" type="text" placeholder="Keywords" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Sex</label>
                <select className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]">

                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Indentication Type</label>
                <select className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]">

                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Indentification Details</label>
                <input className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]" type="text" placeholder="Keywords" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Date of Birth</label>
                <input className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]" type="text" placeholder="Keywords" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Coming From</label>
                <input className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]" type="text" placeholder="Keywords" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Going To</label>
                <input className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]" type="text" placeholder="Keywords" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Nationality</label>
                <input className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]" type="text" placeholder="Eg: Indian" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Vechicle Registration No</label>
                <input className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]" type="text" placeholder="Eg: DH Metro 201384" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-[14px] text-[#525256]" >Additional Members</label>
                <select className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]">

                </select>
            </div>
        </article>
    )
}

export default NavbarSearchParameters;