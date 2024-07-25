import React from 'react'
import Adminlayout from '../Layout/Admin/Adminlayout'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard  from  '../Pages/Admin/Dashboard'
import Userlist from "../Pages/Admin/Userlist"
import Auctionlist from "../Pages/Admin/Auctionlist"
import LiveAuction from "../Pages/Admin/LiveAuction"



const AdminRouter = () => {
  return (
    <>
    <Routes>
    <Route path='/'   element ={<Adminlayout/>}>
    <Route path='/Dashbord' element ={<DashBoard/>} />
    <Route path='/auctionlist' element ={<Auctionlist/>} />
    <Route path='/userlist' element ={<Userlist/>} />
    <Route path='/liveauction' element ={<LiveAuction/>} />
    </Route>
    </Routes>

    </>
  )
}

export default AdminRouter