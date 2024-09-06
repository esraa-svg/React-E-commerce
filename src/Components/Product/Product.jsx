import React, { useState, useEffect, useContext } from 'react';
import RatingsStar from '../RatingsStar/RatingsStar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { addProducToCart } from '../../cartFile';
import { addProducToWishList } from '../AddwishList';
import {removeWishList} from '../removeWishList'

export default function Product({ product }) {
  
  const [isInWishlist, setIsInWishlist] = useState(false);
  let { userToken } = useContext(AuthContext);

  useEffect(() => {
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (Array.isArray(wishlist)) {
      setIsInWishlist(wishlist.includes(product._id));
    } else {
      setIsInWishlist(false);
    }
  }, [product._id]);
  const handleAddToWishlist = (productId) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
    
    if (isInWishlist) {
      wishlist = wishlist.filter(id => id !== productId);
      setIsInWishlist(false);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      removeWishList(productId);
      

    } else {
      
      wishlist.push(productId);
      setIsInWishlist(true);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      addProducToWishList(productId, userToken);
    }
  
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
  
  return (
    <div className="border max-w-2xl mx-auto gap-3 hover:border-green-500 transition-colors duration-300">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/ProductDetails/${product._id}`}>
          <img className="rounded-t-lg p-8" src={product.imageCover} alt={product.title} />
        </Link>
        <div className="px-5 pb-5">
          <Link to={`/ProductDetails/${product._id}`}>
            <RatingsStar rating={product.ratingsAverage} />
          </Link>
          <p className='line-clamp-2 text-green-600'>{product.category.name}</p>
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white line-clamp-1">
            {product.title}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            <button 
              onClick={() => addProducToCart(product._id, userToken)}
              className="text-white bg-green-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700"
            >
              Add to cart
            </button>
            <button onClick={() => handleAddToWishlist(product._id)} className={`flex items-center p-2 ${
  isInWishlist ? 'text-red-500' : 'text-gray-500'
}`}>
  <i className={`fa-solid fa-heart ${isInWishlist ? 'text-red-500' : 'text-black-500'} text-2xl`}></i>
</button>

          </div>
        </div>
      </div>
    </div>
  );
}
