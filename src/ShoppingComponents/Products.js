import React from 'react'
// import Data from './Data.json'

function Products({menuItems , addProducts}) {
    return (
        <section className="flex w-full gap-5 flex-wrap p-5 justify-evenly items-center">

            {
                menuItems.map((menuItem , index) =>{
                    const{image,title,price}=menuItem
                    return(

                        <div className="bg-white p-5 py-10 w-[24rem] relative group" key={index}>
                        <figure className="">
                            <img src={image} alt="" className="mx-auto" />
                        </figure>
                        <div className=" px-10 pt-10 ">
                            <h2 className="text-2xl font-bold whitespace-nowrap">{title}</h2>
                            <div className="flex gap-3 py-2 items-center ">

                                <p className="text-[red] text-[1.2rem]">PRICE:</p><span className="text-[1.2rem] text-[#FF9D2E]">${price}</span>
                              
                                <button onClick={()=>addProducts(menuItem)} 
                                className="absolute transition duration-700 top-[35%] bg-[#F43125] text-sm text-white left-[30%] p-2 w-[10rem] opacity-0 invisible  group-hover:opacity-100 group-hover:visible
                                hover:bg-[#FF9D2E] ">Order Now</button>
                            </div>
                           

                        </div>
                    </div>
                    )
                }


                )
            }




        </section>
    )
}

export default Products