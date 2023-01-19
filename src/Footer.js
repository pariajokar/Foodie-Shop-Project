import React from 'react'
import './input.css'
import { BsInstagram } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { FiTwitter } from 'react-icons/fi';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineCopyright } from 'react-icons/ai';

function Footer() {
  return (
    <>
    <footer className="footer  flex py-20 md:px-5  md:flex-row flex-col justify-center md:items-start items-center" >
    
        <section className="p-11  flex flex-col gap-4 w-[30rem] ">
        <div className="flex   tracking-tighter font-black "><p className="font-black text-black" >Foodie</p><span className="text-[#FF9D2E]">.</span></div>
        <p className="text-[#878787] text-[1rem]">Financial experts support or help you to to find out which way you can raise your funds more.</p>
        <div className="flex gap-4">
            <button className="bg-[#FD8F2F] text-white w-8 h-8 text-[1rem] flex justify-center items-center"><BsInstagram/></button>
            <button className="bg-[#FD8F2F] text-white w-8 h-8 text-[1rem] flex justify-center items-center"><CiFacebook/></button>
            <button className="bg-[#FD8F2F] text-white w-8 h-8  text-[1rem] flex justify-center items-center"><FiTwitter/></button>
            <button className="bg-[#FD8F2F] text-white w-8 h-8 text-[1rem] flex justify-center items-center"><ImPinterest2/></button>
           
        </div>
        </section>
        <section className="p-11  flex flex-col gap-5  w-[30rem]">
            <p>Contact Info</p>
            <div className="text-[1rem] text-[#878787] flex flex-col gap-3">
                <p>+1 (062) 109-9222</p>
                <p>Info@YourGmail24.com</p>
                <p>153 Williamson Plaza, Maggieberg, MT 09514</p>
            </div>
        </section>

        <section className="p-11  flex flex-col gap-5  w-[30rem]">
            <p>Opening Hours</p>
            <div className="text-[1rem] text-[#878787] flex flex-col gap-3">
                <p>Monday-Friday: 08:00-22:00</p>
                <p>Tuesday 4PM: Till Mid Night</p>
                <p>Saturday: 10:00-16:00</p>
            </div>
        </section>

    </footer>
    <section className="border flex justify-center items-center p-5 text-sm text-[#797979] gap-1">
        <AiOutlineCopyright/>
        <p>2022 codewithparia</p>
    </section>
    </>
  )
}

export default Footer