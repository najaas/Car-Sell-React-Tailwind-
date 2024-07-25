  import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/User/Header/Head'
import Footer from '../Components/User/Footer'
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