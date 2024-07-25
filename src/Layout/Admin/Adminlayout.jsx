import React from 'react'
import Header from '../../Components/Admin/Header'
import Saidbar from '../../Components/Admin/Saidbar'
import { Outlet } from 'react-router-dom'
const Adminlayout = () => {
  return (


    <>
    <Header/>
    <Outlet/>
    <Saidbar />
        </>
    )
}

export default Adminlayout