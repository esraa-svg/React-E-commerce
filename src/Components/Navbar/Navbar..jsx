import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import myimg from '../../assets/images/freshcart-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userToken, setUserToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const SignOut = () => {
    setUserToken("");
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={myimg} className="w-22 h-10" alt="Logo" />

          {userToken && (
            <>
              <div className="hidden md:flex items-center space-x-7">
                <NavLink to="/" className="text-gray-700 hover:text-gray-900">Home</NavLink>
                <NavLink to="/products" className="text-gray-700 hover:text-gray-900">Products</NavLink>
                <NavLink to="/categories" className="text-gray-700 hover:text-gray-900">Categories</NavLink>
                <NavLink to="/brands" className="text-gray-700 hover:text-gray-900">Brands</NavLink>
                <NavLink to="/cart" className="text-gray-700 hover:text-gray-900">Cart</NavLink>
                <NavLink to="/wishinglist" className="text-gray-700 hover:text-gray-900">WishList</NavLink>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center p-2 text-gray-700 hover:text-gray-900"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </>
          )}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <i className="fa-brands fa-facebook-f text-gray-600 hover:text-gray-900 cursor-pointer"></i>
          <i className="fa-brands fa-twitter text-gray-600 hover:text-gray-900 cursor-pointer"></i>
          <i className="fa-brands fa-linkedin text-gray-600 hover:text-gray-900 cursor-pointer"></i>
          <i className="fa-brands fa-youtube text-gray-600 hover:text-gray-900 cursor-pointer"></i>
          <i className="fa-brands fa-tiktok text-gray-600 hover:text-gray-900 cursor-pointer"></i>
        </div>

        <div className="flex items-center space-x-4">
          {!userToken ? (
            <>
              <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">Login</Link>
              <Link to="/register" className="bg-transparent text-gray-700 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">Register</Link>
            </>
          ) : (
            <button
              onClick={SignOut}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              LogOut
            </button>
          )}
        </div>
      </nav>

      {userToken && (
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md absolute top-full left-0 w-full`}>
          <ul className="space-y-2 p-4">
            <li><NavLink to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Home</NavLink></li>
            <li><NavLink to="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Products</NavLink></li>
            <li><NavLink to="/categories" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Categories</NavLink></li>
            <li><NavLink to="/brands" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Brands</NavLink></li>
            <li><NavLink to="/cart" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Cart</NavLink></li>
            <li><NavLink to="/wishinglist" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">WishList</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
}
