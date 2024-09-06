import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartProducts from '../CartProduct/CartProducts';
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    setIsLoading(true);
    let { data } = await axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .finally(() => {
        setIsLoading(false);
      });
    if (data.numOfCartItems === 0) {
      setCart(null);
    } else setCart(data);
  }

  function ClearCart() {
    axios
      .delete("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .finally(() => {
        setCart(null);
      });
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return cart ? (
    <div className="container mx-auto p-6">
      <h1 className="mb-10 text-center text-3xl font-bold text-gray-800">Cart Items ({cart?.numOfCartItems})</h1>
      <div className="flex flex-col-reverse md:flex-row md:space-x-6 lg:px-20">
        <div className="md:w-2/3 space-y-4">
          {cart?.data.products.map((product, index) => (
            <CartProducts key={index} product={product} setCart={setCart} cart={cart} />
          ))}
          {cart?.data.products.length === 0 && (
            <h1 className="text-center text-xl text-gray-600">No products in your cart</h1>
          )}
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between mb-4">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${cart?.data.totalCartPrice}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$0</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="text-lg font-bold">${cart?.data.totalCartPrice} USD</p>
              <p className="text-sm text-gray-500">including VAT</p>
            </div>
          </div>
          <Link
            to={`/shippingAddress/${cart?.data._id}`}
            className="mt-6 block text-center bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300"
          >
            Check out
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={ClearCart}
          className="bg-red-500 text-white border border-red-500 rounded-lg px-6 py-3 hover:bg-red-600 hover:border-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
        >
          Clear Cart
        </button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-center text-4xl font-semibold text-gray-800 bg-gradient-to-r from-teal-400 to-teal-600 p-6 rounded-lg shadow-md">
        No products in your cart
      </h1>
    </div>
  );
}
