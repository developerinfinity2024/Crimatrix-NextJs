import { TfiEmail } from "react-icons/tfi";
import { FiLock } from "react-icons/fi";

const Login = () => {
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
                <h2 className="text-[24px]"><span className="text-[#cc0000]">Mission</span> Objective</h2>
                <h3 className="text-[21px]">To build safer cities with real time police-public partnership</h3>
                <div className="text-[14px]">
                    <p>Crimatrix is a community based real-time crime monitoring platform for police and citizens of Guwahati to harness the power of mobile and web technologies to monitor and prevent crimes in the city. We use multiple mobile and web apps to collect, analyze and share real-time crime data police officers</p>

                    <p className="mt-[8px] mb-[7px]">Relevant crime data and alerts that could be useful to citizens, like crime trends, hotspots and repeat offenders will be shared for public awareness and crime prevention.</p>

                    <img src="/Images/tagline.png"
                        alt="Empowering Citizens, Enabling Police"
                        className="h-[32px]"
                    />
                </div>
            </div>
        </>
    )
}

export default Login;

