import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Categorie from '../Catgori/Categorie'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
export default function Categories() {
  const [categories,setcCategories]=useState([])
  const[isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    getCatogires()
  },[])
  async function getCatogires(){
    setIsLoading(true)
    let{data}= await axios.get("https://ecommerce.routemisr.com/api/v1/categories ")
    setcCategories(data.data)
    setIsLoading(false)
  }
  if (isLoading){
    return <LoadingScreen/>
  }
  return (
    <div className='grid grid-cols-4 gap-3'>
      {categories.map((categorie,index)=>{
return <Categorie categorie={categorie} key={index}/>
      })}
    </div>
  )
}

