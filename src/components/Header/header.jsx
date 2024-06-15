import React, { useState } from 'react'
import Nav from './navbar'
import Logo from './logo'
import Slbutten from './SLbtn'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';



const header = () => {

  const [change,setChange]=useState(true)
  const handil= ()=>{
    setChange(!change)
  }

  return (
    <>
   

    <div className='w-full h-14 flex justify-between items-center bg-cyan-500 border-b-2 border-black'>
      <Logo />
      <Nav />
      <Slbutten />
      <button onClick={handil} className="flex items-center md:hidden">
      <FiMenu className="text-white text-2xl mr-4 cursor-pointer" />
      </button>
    </div>
    <div className={`w-full absolute h-[300px] flex items-center justify-center  md:hidden ${change ? 'hidden':'block'} `} >
    <div className='w-3/4 h-3/4 bg-white rounded-lg shadow-black shadow-lg flex justify-evenly flex-col  '>

    <Link to="#" className='flex items-center hover:bg-white hover:shadow-md hover:shadow-black h-[40px] w-full justify-center ' >
          HOME
        </Link>
         <Link to="#" className='flex items-center hover:bg-white hover:shadow-md hover:shadow-black h-[40px] w-full justify-center ' >
          ABOUT
        </Link>
         <Link to="#" className='flex items-center hover:bg-white hover:shadow-md hover:shadow-black h-[40px] w-full justify-center' >
          SERVICES
        </Link>
         <Link to="#" className='flex items-center hover:bg-white hover:shadow-md hover:shadow-black h-[40px] w-full justify-center ' >
          CONTACT
        </Link>
    </div>
    </div>
    </>
  )
}

export default header