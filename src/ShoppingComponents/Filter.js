import React, { useState } from "react"
import Products from './Products'
import data from './ProductsData'
import Categories from './Categories'
import Cart from "./Cart"
import { AiOutlineShoppingCart } from 'react-icons/ai';


const allCategories = ["All", ...new Set(data.map((data) => data.category))]



function Filter() {

  const [menuItems, setMenuItems] = useState(data)

  const [categories, setCategories] = useState(allCategories)

  const [cartItems, setCartItems] = useState([]);

  const [basketStatus, setBasketStatus] = useState(false)


 

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(data)
      return

    }
    const newItem = data.filter((menuItem) => menuItem.category === category)
    setMenuItems(newItem)

  }



  const AddProducts = (product) => {

    const exist = cartItems.find((element) => element.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((element) => element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element)
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }

  }


  const removeProducts = (product)=>{
    const exist= cartItems.find((element)=>element.id===product.id)
    if(exist.qty===1){
    setCartItems(cartItems.filter((element)=>element.id!==product.id))  
    }else{
      setCartItems(
        cartItems.map((element) => element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element)
      )
    }
  
  }
 
  const len = cartItems.reduce((output,item , index)=> output+(index+1) *item.qty,0)
  const finalLen =len
  return (

    <>

      <Cart basketStatus={basketStatus} setBasketStatus={setBasketStatus}
      cartItems={cartItems} removeProducts={removeProducts}/>
    
      <div className=" text-center p-5 flex gap-7 flex-col">
        <p className="text-[.9rem] text-[#F42F25]">Popular Dishes</p>
        <h2 className="text-4xl font-bold">Our Delicious <span className="text-[#FF9D2E]">Foods</span></h2>
        <p className="text-sm max-w-[24rem] mx-auto text-[#787878] font-light">Food is any substance consumed to provide nutritional support for an organism.</p>


        <div className="  flex justify-center relative ">
        <AiOutlineShoppingCart onClick={()=>setBasketStatus(!basketStatus)} className="text-3xl block "/>
        {
          cartItems.length===0 ? <span></span>: <span className="absolute  -top-5 text-[#FF9D2E] text-xl">{finalLen}</span>
        }
       
        </div>
       
        <Categories filterItems={filterItems} categories={categories} />
      </div>
      <Products menuItems={menuItems} addProducts={AddProducts} />
     
    </>
  )
}

export default Filter
