import { React, useState, useEffect,useRef } from 'react'
import './input.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { FiChevronUp } from 'react-icons/fi';

function Header() {

  const [headerStatus, setHeaderStatus] = useState(true)
  const [showLinks, setShowLinks] = useState(true)
  const linksContainerRef = useRef(null)
  const linksRef=useRef(null)
  const upRef = useRef(null)

  const onScroll = () => {
    if (window.scrollY >= 100) {
      setHeaderStatus(false)
    } else {
      setHeaderStatus(true)
    }

    if(window.scrollY>=400){
      upRef.current.style.opacity=1
    }else{
      upRef.current.style.opacity=0
    }
  }

  useEffect(() => {

    window.addEventListener("scroll", onScroll)

  }, [headerStatus]);


  useEffect(() => {
    const height = linksRef.current.getBoundingClientRect().height;
    if(!showLinks) {
      linksContainerRef.current.style.height =`${height}px`
    }else{
      linksContainerRef.current.style.height =`${0}px`
    }
  }, [showLinks]);


  const scrollTop=()=>{
    window.scroll({top:0})
  }
  return (
    <>
    
      
      <header className={`absolute w-full z-40 top-0 left-0 p-3  border-b border-zinc-500 flex justify-center transition duration-700  ${!headerStatus ? 'active' : ''}`}>
        <section className="container mx-5  flex items-center md:justify-between justify-evenly ">
          <div className="flex  p-3 tracking-tighter font-black"><p className="font-black text-white" >Foodie</p><span className="text-[#FF9D2E]">.</span></div>
          <ul className="grow gap-6 p-5 whitespace-nowrap justify-end text-lg text-[#F1D6C6] hidden md:flex">
            <li><a href="/">Home</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact us</a></li>
          </ul>
          <div className=" gap-3 flex">
          
            <button className="bg-[#FF9D2E] text-white text-sm px-8 p-3"><p>Reservation</p></button>
            <button onClick={()=>setShowLinks(!showLinks)}
            className="md:hidden text-white">{showLinks? <GiHamburgerMenu />:<VscChromeClose/>}</button>
          </div>
        </section>
       
        <section ref={linksContainerRef} 
        className="flex md:hidden flex-col h-0 overflow-hidden absolute transition duration-1000 -translate-x-[50%] top-[100%] left-[50%]  bg-white w-[90%]">
        <ul ref={linksRef}
        className="grow gap-3  flex flex-col transition duration-1000 p-5 whitespace-nowrap justify-end text-sm text-black ">
            <li><a href="/">Home</a></li>
            <hr />
            <li><a href="/">About us</a></li>
            <hr />
            <li><a href="/">Shop</a></li>
            <hr />
            <li><a href="/">Blog</a></li>
            <hr />
            <li><a href="/">Contact us</a></li>
          </ul>
        </section>
      </header>
     
      <button ref={upRef} onClick={scrollTop} className="fixed opacity-0 transition duration-500 ease-in bg-[#FF9D2E] text-white z-50 bottom-8 right-9 p-3 rounded-full ">
        <FiChevronUp/>
      </button>
    </>

  )
}

export default Header