'use client'

import Link from "next/link";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { FiLock } from "react-icons/fi";
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';

import axios from "axios";
export default function Login() {


  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')
    axios({
      url: "https://backend.crimatrix.com/crimatrix-backend/v1/auth/signin",
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ username, password }),
  })
      .then((res) => {
        console.log(res)
        sessionStorage.setItem("accessToken", res?.data?.accessToken);
        router.push('/police')
      })
        .catch((err) => {});
  }

  return (
    <section className="bg-[#f5f6fc] flex flex-col justify-between h-[100vh]">
      {/* Header */}
      <nav className="flex justify-between py-[10px] px-4 text-white mb-[87px]  sticky top-0 z-10 shadow-md bg-white">
        <Image
          src="/Images/logo.png"
          alt="crimatrix logo"
          width={223}
          height={43}
        />
      </nav>

      {/* login pages container */}
      <article className='lg:flex flex-row-reverse gap-10 lg:max-w-[1540px] lg:mx-auto'>
        {/* Login Form Container */}
        <div className="p-[15px] pt-[8px] px-[15px] bg-white rounded-lg shadow-lg pb-8 mx-4 md:max-w-[500px] lg:min-w-[416px] md:mx-auto md:mb-14">
          <h2 className="text-[33px] font-light text-center mb-[4.2px]">Sign In</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
            <div className="flex gap-5 border py-[6px] px-4 items-center rounded-lg">
              <TfiEmail />
              <input className="w-full outline-none input-placeholder" type="email" required placeholder="Email" name="username" />
            </div>
            <div className="flex gap-5 border py-[6px] px-4 items-center rounded-lg">
              <FiLock />
              <input className='w-full outline-none input-placeholder' required type="password" name="password" placeholder="Password" />
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
      </article>

      {/* Footer */}
      <footer className="text-[#cc0000] px-[15px] py-4">
        <span className="text-[13px] mb-2 text-center block
        ">&copy;2024 Naesta Technology</span>
        <ul className="flex gap-2 flex-wrap justify-center font-light text-[14px]">
          <li className="border-r border-[#6c757d] pr-[5px]">
            <Link href="">About</Link>
          </li>

          <li className="border-r border-[#6c757d] pr-[5px]">
            <Link href="">Contact</Link>
          </li>

          <li className="border-r border-[#6c757d] pr-[5px]">
            <Link href="">IPR Complaints</Link>
          </li>

          <li className="border-r border-[#6c757d] pr-[5px]">
            <Link href="">Terms of Service</Link>
          </li>

          <li>
            <Link href="">Privacy Policy</Link>
          </li>
        </ul>
      </footer>
    </section>
  );
}

