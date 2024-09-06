import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
export default function Products() {
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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {products.map((product,index)=>{
         if (!product) {
          console.error('Product is undefined', { product, index });
        }
      
return     <React.Fragment >
          <Product key={index} product={product} />
          
        </React.Fragment>
         
      })}
    </div>
  )
}
