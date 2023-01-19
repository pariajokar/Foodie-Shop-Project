import {React,useState} from 'react'
import Data from './ReviewsData'
import { Icon } from 'react-icons-kit'
import {chevronRight} from 'react-icons-kit/fa/chevronRight'
import {chevronLeft} from 'react-icons-kit/fa/chevronLeft'

function Comments() {

  const [index, setIndex] = useState(0)  
  const {name,job,img,desc} = Data[index]


  let checkNumber = (number)=>{

    if(number>Data.length-1){
      return 0
  }
    if(number<0){

      return Data.length-1
  }return number
  
  }

  const nextSlide=()=>{
    setIndex((x)=>{
      let newIndex= x+1
      return checkNumber(newIndex)
     
    }
    )

   
  }
  const prevSlide=()=>{
    setIndex((x)=>{
        let newIndex= x-1
        return checkNumber(newIndex)
        
      }
      )
  }
 

  
  return (
  <>
    <div className=" text-center px-5 py-16 flex gap-7 flex-col bg-[#F9F6F0]
    after:content[' '] relative
    after:bg-[url('images/shape-white.png')] after:absolute after:bottom-0 after:left-0 after:w-full
    after:h-[15px] before:content[' ']
    before:bg-[url('images/shape-white.png')]  before:absolute before:top-0 before:left-0 before:rotate-180 before:w-full before:h-[15px]" >

      <p className="text-[.9rem] text-[#F42F25]" > Testimonials </p> 
      < h2 className="text-4xl font-bold" > Our Customers < span className="text-[#FF9D2E]" > Reviews </span>
      </h2 >
      <p className="text-sm max-w-[24rem] mx-auto text-[#787878] font-light" > Food is any substance consumed to provide nutritional support for an organism.
       </p>

       <section className=" border max-w-lg mx-auto shadow-xl h-auto mb-9 text-center px-8 py-8
    grid gap-3 justify-items-center bg-white">

      <div className="flex justify-start  gap-5 items-center py-5 px-3  w-full">
      <img src={img} alt="" className="rounded-full w-24 h-24"/>
       <div>
       <h1 className="font-bold text-[1.3rem] ">{name}</h1>
        <p className="text-[1.1rem] ">{job}</p>
        </div> 
      </div>
       
        <p className="text-[1rem] text-left   px-3 text-[#787878]">{desc}</p>

        <section className="flex justify-between w-56 ">

      

        <div className="flex gap-2  w-full justify-center">

          <button onClick={nextSlide}><Icon icon={chevronLeft}/></button>
          <button onClick={prevSlide}><Icon icon={chevronRight}/></button>


        </div>

       

        </section>
       


    </section>


  </div>
  
  </>
  )
}

export default Comments