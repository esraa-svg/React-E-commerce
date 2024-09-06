import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import  Products from '../Products/Products'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import HomeSlider from '../HomeSlider/HomeSlider'
import CateogrySlider from '../CateogrySlider/CateogrySlider'
export default function Home() {
  
  const [products,setProducts]=useState([])
  const[isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    getProducts()
  },[])
  async function getProducts(){
    setIsLoading(true)
    let{data}= await axios.get("https://ecommerce.routemisr.com/api/v1/products ")
    setProducts(data.data || []);
    setIsLoading(false)
  }
  if (isLoading){
    return <LoadingScreen/>
  }
  return (

    
   <div className=" space-x-10">
      <div className="relative w-full md:w-10/12 lg:w-9/12 xl:w-8/12 xl:max-w-[1400px] mx-auto mb-20">
        <HomeSlider />
      </div>
    <div className="flex justify-center w-full mb-20">
    
  <div className="w-full md:w-8/12 lg:w-6/12 lg:h-96 object-contain">
    
    <CateogrySlider />
  </div>
</div>
<div class="flex justify-center mt-4">
  <input
    type="text"
    placeholder="search..."
    class="border rounded-full py-2 px-4  mb-6 w-1/2 shadow focus:outline-none focus:ring-2 focus:ring-blue-600"
  />
</div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
     
      {products.map((product,index)=>{
         
      
return     <React.Fragment >
          <Product key={index} product={product} />
          
          
          
        </React.Fragment>
         
      })}
    </div>
    </div>
  )

}

