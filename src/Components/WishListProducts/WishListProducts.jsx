import React, { useEffect, useState } from 'react';
import { toast, Bounce } from 'react-toastify';
import { addProducToCart } from '../../cartFile'
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import 'react-toastify/dist/ReactToastify.css';

export default function WishingListProducts({ product, setCart }) {

  const [productCount, setProductCount] = useState(product.count);
  const[isLoading,setIsLoading]=useState(true)

  async function removeWish(productId, setCart) {
    try {
       await axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist/' + productId, {
        headers: {
          token: localStorage.getItem('token')
        }
      });
      setCart((prevCart) => ({
        ...prevCart,
        data: prevCart.data.filter(item => item._id !== productId)
      }));
      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      if (!Array.isArray(wishlist)) {
        wishlist = [];
      }
      if (wishlist.includes(productId)) {
        wishlist.pop(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      }

      
      toast.success("Product has been removed successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        className: 'custom-toast-success',
      });
    } catch (error) {
      toast.error("Failed to remove product", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        className: 'custom-toast-error',
      });
    }
  }


  
  
useEffect(()=>{
  
},[])
if(isLoading){
  <LoadingScreen/>
}
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img src={product.imageCover} alt="product-image" className="w-full rounded-lg sm:w-40" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
          <p className="mt-1 text-xs text-gray-700">${product.price}</p>

        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
        
          <div className="flex items-center space-x-4">
          
          <button 
    onClick={() => addProducToCart(product._id)}
    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 duration-150"
  >
    Add to cart
  </button>
         
          </div>
          <button 
    onClick={() => removeWish(product._id, setCart)}
    className="flex items-center justify-center h-10 w-10 text-red-500 hover:text-red-600 focus:ring-2 focus:ring-red-300 font-medium rounded-full cursor-pointer duration-150"
  >
    <i className="fa-solid fa-trash"></i>
    <span className="ml-2 text-sm">Remove</span>
  </button>
        </div>
       
      </div>

  
    </div>
  );
}
