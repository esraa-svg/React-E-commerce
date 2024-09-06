import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom" 
import './App.css'
import Register from './Components/Register'
import Login from './Components/Login/Login'
import Layout from './Components/Layout/Layout'
import Notfound from './Components/NotFound/Notfound'
import Home from './Components/Home/Home'
import WishingList from './Components/WishingList/WishingList'
import Categories from './Components/Categories/Categories'
import Brands from './Components/Brands/Brands'
import Cart from './Components/Cart/Cart'
import AuthContextProvider from './Context/AuthContext'
import Protcted from './Components/ProtrctedRoute/Protcted'
import ProductDetails from './ProductDetails/ProductDetails'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import VerifyCode from './Components/VerifyCode/VerifyCode'
import BrandShow from './Components/BrandShow/BrandShow'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import { ToastContainer } from 'react-toastify';
import ShippingAddrese from './Components/ShippingAddress/ShippingAddrese'
import Orders from './Components/Orders/Orders'
import Products from './Components/Products/Products'
function App() {
  
  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { index: true, element:<Protcted><Home /></Protcted>  },
        // { path: 'products', element: <Protcted><Product /></Protcted> },
        { path: 'categories', element: <Protcted><Categories /></Protcted> },
        { path: 'brands', element:<Protcted> <Brands /></Protcted> },
        { path: 'cart', element: <Protcted><Cart /></Protcted> },
      
        { path: '*', element: <Notfound /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forgetpassword', element: <ForgetPassword /> }, 
        { path: 'verfiycode', element: <VerifyCode/> },
        { path: 'resetpassword', element: <ResetPassword/> },
        { path: 'productDetails/:id', element: <Protcted><ProductDetails /></Protcted> },
        { path: 'Brandshow/:id', element: <Protcted><BrandShow /></Protcted> },
        { path: 'shipppingAddress/:cartId', element: <Protcted><ShippingAddrese /></Protcted> },
        { path: 'allorders', element: <Protcted><Orders /></Protcted> },
        { path: 'wishinglist', element: <Protcted><WishingList /></Protcted> },
        { path: 'products', element: <Protcted><Products /></Protcted> },

      ],
    },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthContextProvider>
  );
  
}

export default App
