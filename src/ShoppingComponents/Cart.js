import { React } from 'react'
import Bounce from 'react-reveal/Bounce';
import '../input.css'
import { BsFillTrashFill } from 'react-icons/bs';


function Cart({ setBasketStatus, basketStatus, cartItems ,removeProducts}) {

  const itemsPrice = cartItems.reduce((output,item)=> output+item.price *item.qty,0)
  const totalPrice =itemsPrice
 
  console.log(cartItems)
  return (
    <>

      <section className={`bg-white cart h-screen w-[30rem] fixed top-0 z-50 overflow-y-scroll transition duration-700 ${basketStatus ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="border flex justify-between p-5 text-lg ">
        <div className="flex  tracking-tighter font-black text-2xl"><p className="font-black text-black" >Foodie</p><span className="text-[#FF9D2E]">.</span></div>
          <button onClick={() => setBasketStatus(!basketStatus)} className="">Close</button>
        </div>
        <div className="flex  flex-col justify-between p-4 gap-5 border   ">

          {cartItems.map((item,index) => {
            
            return (
              <>
                <Bounce left>
                <div key={index} className="flex flex-row gap-4 border justify-center">
                  <div className=" w-1/2  flex flex-col py-3 gap-3 justify-center items-center text-[1rem]" >
                    <img src={item.image} alt="" className="w-1/2  " />
                    <p className=" ">{item.title}</p>
                   
                  </div>

                  <div className="  border-l-slate-300 text-[1rem] px-5 flex flex-col items-center justify-evenly">
                    <div className="flex gap-4 items-center">
                      {/* {const x = item.reduce((output,item)=> output+item.price *item.qty,0)} */}
                      <span className="text-[1.4rem]">{item.price}$</span>
                      <span className="rounded-full p-2 bg-[#FF9D2E] ">{item.qty} buy</span>
                    </div>
                    <div><button className="text-2xl" onClick={()=>removeProducts(item)}><BsFillTrashFill/></button></div> 
                  </div></div>
                  </Bounce>
              </>
              )

          })}

        </div>



        <div className="text-[1.2rem] bg-[#ea8f28] p-10 flex justify-center gap-10 ">
          <p>Total Price :</p>
          <p>{totalPrice}$</p>
        </div>


      </section>
    </>
  )
}

export default Cart