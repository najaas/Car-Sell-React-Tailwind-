  import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Header/Header'
import Footer from '../components/Footer'
const layout = () => {
  return (
    <>
      
<Navbar/>
<Outlet/>
<Footer />

    </>
  )
}

export default layout