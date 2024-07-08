  import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Header/Header'
import Footer from '../components/Footerform'
const Layout = () => {
  return (
    <>
      
<Navbar/>
<Outlet/>
<Footer />

    </>
  )
}

export default Layout