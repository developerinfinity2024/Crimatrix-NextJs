import { TfiEmail } from "react-icons/tfi";
import { FiLock } from "react-icons/fi";


const loginHotel = () => {
    return (
        <>
            {/* Login Form Container */}
            <div className="p-[15px] pt-[8px] px-[15px] bg-white rounded-lg shadow-lg pb-8 mx-4 md:max-w-[500px] lg:min-w-[416px] md:mx-auto md:mb-14">
                <h2 className="text-[33px] font-light text-center mb-[4.2px]">Sign In</h2>
                <form action="" className="flex flex-col gap-[10px]">
                    <div className="flex gap-5 border py-[6px] px-4 items-center rounded-lg">
                        <TfiEmail />
                        <input className="w-full outline-none input-placeholder" type="text" placeholder="Email" />
                    </div>
                    <div className="flex gap-5 border py-[6px] px-4 items-center rounded-lg">
                        <FiLock />
                        <input className='w-full outline-none input-placeholder' type="password" placeholder="Password" />
                    </div>
                    <button className="bg-[#cc0000] text-white py-[14px] px-[48px] rounded-md font-semibold text-[14px] mt-[36px] mb-3">Sign in</button>
                    <span className="text-[10px] text-[#cc0000] uppercase text-right"> I Forget my password</span>
                </form>
            </div>

            {/* Login Page Body Content */}
            <div className="flex flex-col gap-7 my-7 px-[15px] md:mx-6">
                <h2 className="text-[24px]">Hotel <span className="text-[#cc0000]">Guest List</span>Submission</h2>
                <h3 className="text-[21px]">Crimatrix allows registered hotels and guest houses to submit their guest records in real time</h3>
                <div className="text-[14px]">
                    <p>As per the Sarari Act, all hotels and guest houses are required to subnmit their guest lists to the nearest police station everyday. The Sarais Act, 1867  </p>

                    <p className="mt-[8px] mb-[7px]">Crimatix now allows registered hotels and guest houses to submit the guest record in real-time from an internet connected computer instaed of written reports. Crimatrix then cross checks the data immediately with available crime records and alerts the nearest police station if any match is found. Concerned officer will then alert the manager and provide further instructions. This helps in crime prevention and detection.</p>

                    <p className="mt-[8px] mb-[7px]">"The District Magistrate Kamrup (Metro) has instructed vide order dated 31 july 2013, that all hotels, guest houses and lodges shall submit their respective borders list online on Crimatrix.com"</p>

                    <img src="/Images/tagline.png"
                        alt="Empowering Citizens, Enabling Police"
                        className="h-[32px]"
                    />
                </div>
            </div>
        </>
    )
}

export default loginHotel;