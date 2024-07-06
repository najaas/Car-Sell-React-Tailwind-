import React from 'react'
import Forget from '../../../components/loginForm'
import { Link } from 'react-router-dom'


const Forgetpass = () => {
  return (
        <>
        <Forget 
        section2={
          <div className="md:w-1/2 px-8">
      <h2 className="font-bold text-3xl text-[#002D74]">Forget Password</h2>

      <form action="" className="flex flex-col gap-4">
        <input className="p-2 mt-8 rounded-xl border" type="email" name="email" id="email" placeholder="Email" />

      <div className="mt-6 items-center text-gray-100">
        <hr className="border-gray-300" />
        <p className="text-center text-sm">OR</p>
      </div>
        <Link to='/otp' className="bg-[#002D74] text-white py-2 flex   justify-center rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium" type="submit">
          Submit
      </Link>
      </form>
    </div>
}
        section={
             <div className="md:block hidden w-7/12 h-[500px]">
            <img className="rounded-2xl bg-cover w-full h-full" src="https://t3.ftcdn.net/jpg/06/97/22/62/360_F_697226263_0BW9X8QxFN9YiXDmK2sxAcQIwVrRyRNQ.jpg" />
          </div>
        }
        />
        </>
    )
}

export default Forgetpass