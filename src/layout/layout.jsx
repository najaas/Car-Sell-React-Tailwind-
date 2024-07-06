  import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Header/header'
import Footer from '../components/footer'
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