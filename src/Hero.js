import { React } from 'react'
import './input.css'
import herobanner from './images/hero-banner.png'
import herobannrbg from './images/hero-banner-bg.png'

function Hero() {
  return (


    <>

    

    <section className="hero relative bg-no-repeat bg-cover bg-center z-10  
    after:absolute after:content['c'] md:after:right-0 md:after:w-full md:after:h-full md:after:bg-[url('images/hero-bg-shape.png')] md:after:bg-right-bottom md:after:bg-no-repeat md:after:bg-contain md:after:bottom-[-2px] md:after:-z-10 px-10 pt-[9rem] md:pt-[10rem] lg:pt-[14rem] lg:pb-[9rem]
    md:pb-[5rem] pb-[3rem]  ">

    <div className="container">

      <div className="hero-content md:text-left text-center">
            <p className="hero-subtitle text-[#FF9D2E] lg:text-3xl  md:2xl text-xl md:text-left text-center ">Eat Sleep And</p>
            <h2 className="hero-title md:text-left text-center bold lg:text-7xl md:text-5xl text-3xl text-[#F1D6C6] md:max-w-[15ch] ">Supper delicious Burger in town!</h2>
            <p className="text-[#F1D6C6] md:text-left text-center md:max-w-[44ch] md:text-[1rem] text-sm py-8  ">Food is any substance consumed to provide nutritional support for an organism.</p>
            <button className='bg-[#FF9D2E] text-white text-sm p-4 '>Book A Table</button>
            
      </div>
      <figure>
        <img src={herobanner} alt="" className=" bottom-0  hidden md:block absolute right-8 max-w-[45%] 
        top-[30%] " />
        <img src={herobannrbg} alt="" className=" bottom-0 absolute  hidden md:block aspect-[1/0.9] max-w-[50%] right-0   top-[20%] " />
      </figure>
    </div>
   
  </section>
  
  </>
  )
}

export default Hero