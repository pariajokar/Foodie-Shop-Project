import React from 'react'
import './input.css'
import banner from './images/cta-banner.png'
import shape from './images/sale-shape.png'

function Offer() {
    return (
        <>
     
        <section className=" bg-[#F9F6F0] offer h-auto w-full relative after:content[' '] md:pt-[7rem] px-[3.4rem] pt-[6rem] sm:pb-[4rem] lg:pb-0
        after:bg-[url('images/shape-white.png')] after:absolute after:bottom-0 after:left-0 after:w-full
        after:h-[15px] before:content[' ']
        before:bg-[url('images/shape-white.png')]  before:absolute before:top-0 before:left-0 before:rotate-180 before:w-full before:h-[15px]">

            <div className=" flex  w-full justify-center flex-col md:flex-row md:mx-0 ">
            <div className="offer-content  flex flex-col gap-8 text-center md:text-left  items-center md:items-start">
                <h1 className="text-bolder offer-title text-white  text-3xl md:text-4xl lg:text-5xl max-w-[20ch] ">The Foodie Have Excellent Of <span className="text-[#FF9D2E] text-3xl md:text-4xl lg:text-5xl">Quality Burgers!</span></h1>
                <p className="max-w-[40rem] text-[#ffffffbe] text-[1rem] font-thin ">The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.</p>
                <button className='bg-[#FF9D2E] text-white text-sm p-4 w-[10rem]'>Order Now</button>
            </div>
            <figure className="relative  aspect-[1/0.9] ">
                <img src={banner} alt="" className="scale[1.3]  md:translate-x-[70px]   "/>
               
            </figure>
            </div>
        </section>
        </>
    )
}

export default Offer