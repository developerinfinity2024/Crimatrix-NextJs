'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button";


interface NavbarSearchProps {
    handleModal: () => void
}

const NavbarSearchParameters: React.FC<NavbarSearchProps> = ({ handleModal }) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        guestName: "",
        roomNumber: "",
        phoneNumber: "",
        sex: "",
        identificationType: "",
        identificationDetails: "",
        dateOfBirth: "",
        comingFrom: "",
        goingTo: "",
        nationality: "",
        vehicleRegistrationNo: "",
        additionalMembers: "",
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSearch = () => {
        const searchParams = new URLSearchParams(formData);
        const searchUrl = `http://localhost:3000/police/logs?${searchParams.toString()}`;
        handleModal();
        router.push(searchUrl);
    };

    return (
        <section className="w-[857px] bg-white px-5 py-6 m-4 rounded-[5px]">
            <article className="grid grid-cols-3 gap-[18px]">
                <div className="flex flex-col gap-2">
                    <label htmlFor="guestName" className="text-[14px] text-[#525256]">
                        Guest Name
                    </label>
                    <input
                        name="guestName"
                        value={formData.guestName}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]"
                        type="text"
                        placeholder="Keywords"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="roomNumber" className="text-[14px] text-[#525256]">
                        Room Number
                    </label>
                    <input
                        name="roomNumber"
                        value={formData.roomNumber}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]"
                        type="text"
                        placeholder="Keywords"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phoneNumber" className="text-[14px] text-[#525256]">
                        Phone Number
                    </label>
                    <input
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]"
                        type="text"
                        placeholder="Keywords"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="sex" className="text-[14px] text-[#525256]">
                        Sex
                    </label>
                    <select
                        name="sex"
                        value={formData.sex}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[7.49px] px-[8px] bg-[#fcfcfc] text-[#525258c2] text-[14px] font-normal"
                    >
                        <option value="">Eg: Male, Female</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="identificationType" className="text-[14px] text-[#525256]">
                        Identification Type
                    </label>
                    <select
                        name="identificationType"
                        value={formData.identificationType}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[7.49px] px-[8px] bg-[#fcfcfc] text-[#525258c2] text-[14px] font-normal"
                    >
                        <option value="">Eg: Indian</option>
                        <option value="indian">Indian</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="identificationDetails" className="text-[14px] text-[#525256]">
                        Identification Details
                    </label>
                    <input
                        name="identificationDetails"
                        value={formData.identificationDetails}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]"
                        type="text"
                        placeholder="Keywords"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="dateOfBirth" className="text-[14px] text-[#525256]">
                        Date of Birth
                    </label>
                    <input
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]"
                        type="text"
                        placeholder="Keywords"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="comingFrom" className="text-[14px] text-[#525256]">
                        Coming From
                    </label>
                    <input
                        name="comingFrom"
                        value={formData.comingFrom}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]"
                        type="text"
                        placeholder="Keywords"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="goingTo" className="text-[14px] text-[#525256]">
                        Going To
                    </label>
                    <input
                        name="goingTo"
                        value={formData.goingTo}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]"
                        type="text"
                        placeholder="Keywords"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="nationality" className="text-[14px] text-[#525256]">
                        Nationality
                    </label>
                    <input
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]"
                        type="text"
                        placeholder="Eg: Indian"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="vehicleRegistrationNo" className="text-[14px] text-[#525256]">
                        Vehicle Registration No
                    </label>
                    <input
                        name="vehicleRegistrationNo"
                        value={formData.vehicleRegistrationNo}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[5px] px-[8px] bg-[#fcfcfc]"
                        type="text"
                        placeholder="Eg: DH Metro 201384"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="additionalMembers" className="text-[14px] text-[#525256]">
                        Additional Members
                    </label>
                    <select
                        name="additionalMembers"
                        value={formData.additionalMembers}
                        onChange={handleInputChange}
                        className="rounded-[5px] border-[#ccc] border-[1px] py-[7.49px] px-[8px] bg-[#fcfcfc] text-[#525258c2] text-[14px] font-normal"
                    >
                        <option value="">Select Value</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </article>

            <div className="flex justify-center mt-8 mb-4">
                <button className="bg-[#2aac95] text-white px-8 text-[14px] rounded-[6px] py-[7.6px] block w-fit" onClick={handleSearch}>Search</button>
            </div>
        </section>
    );
};

export default NavbarSearchParameters;
