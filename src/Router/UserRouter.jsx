import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/user/Login";
import Signup from "../Pages/user/Signup";
import Home from "../Pages/user/Home";
import Forget from "../Pages/user/ForgetPassword/Forgetpass";
import Otp from "../Pages/user/ForgetPassword/Otppage";
import NewPassword from "../Pages/user/ForgetPassword/Newpassword";
import Success from "../Pages/user/ForgetPassword/Success";
import Card from "../Components/User/Card";
import Card1 from "../Components/User/Card1";
import Header from "../Components/User/Header/Head";
import Card2 from "../Pages/user/Card2";
import UserLayout from "../Layout/Layout";


const UserRouter = () => {
  return (
<>

      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/success" element={<Success />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/card" element={<Card />} />
        <Route path="/card1" element={<Card1 />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card2" element={<Card2 />} />
      </Routes>


</> 
 )
}

export default UserRouter