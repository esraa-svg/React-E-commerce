import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Brand from '../Brand/Brand'
import BrandShow from '../BrandShow/BrandShow'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
export default function Brands() {
  const [brands,setBrands]=useState([])
  const[isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    getBrands()
  },[])
  async function getBrands(){
    setIsLoading(true)
    let{data}= await axios.get("https://ecommerce.routemisr.com/api/v1/brands ")
    setBrands(data.data)
    setIsLoading(false)
  }
  if (isLoading){
    return <LoadingScreen/>
  }
  return (
    <div className='p-6 bg-gray-100 min-h-screen"'>
     <h1 className='text-center text-4xl font-extrabold text-gray-800 mb-8'> All Brands</h1> 
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    
      {brands.map((brand, index) => {
        
  
        return (
           
            
          <div key={index} >
            <Brand brand={brand} />
           
          </div>
        );
      })}
    </div>

    </div>
  );
  
}
