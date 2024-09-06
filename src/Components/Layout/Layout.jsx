import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar.'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <div className="pt-24 pb-8 container mx-auto">
<Outlet/>
</div>
      <Footer/>
    </div>
  )
}
