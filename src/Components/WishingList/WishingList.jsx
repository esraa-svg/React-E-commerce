import React, { useState } from 'react'
 import { useEffect } from 'react';
 import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import WishingListProducts from '../WishListProducts/WishListProducts';
export default function WishingList() {
  const [cart,setCart]=useState([])
  const[isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
getWish();


  },[])
 
  async function getWish() {
    setIsLoading(true)
      let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers: {
          token: localStorage.getItem("token")
        }
      }).finally(()=> {
        
        setIsLoading(false)
        
      })
      setCart(data)
  }

  

  if (isLoading){
    return <LoadingScreen/>
  }
  
  return (
    (cart.data)?
     <div className=" ">
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
      {cart?.data.map((product,index)=>{
        return  <WishingListProducts key ={index} product={product} setCart={setCart} />

     })}
       



       
      </div>
      
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        
      
        <hr className="my-4" />
     
      </div>
    </div>

  </div>: <h1>not correct</h1> 
  )
  
}
