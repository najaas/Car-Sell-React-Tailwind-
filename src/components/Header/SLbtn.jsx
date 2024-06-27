import React from 'react'
import { Link } from 'react-router-dom'


const SLbtn = () => {
  return (
    <div className='w-[18%]  flex gap-2 items-center justify-center hidden md:block '>
        <Link to='/signup'>
        <button className='w-24 h-9 rounded-2xl hover:scale-90 text-white bg-cyan-500 font-black shadow-md shadow-black'>Signup</button>
        </Link>
        <Link to='/login'>
        <button className='w-24 h-9 rounded-2xl text-cyan-500 hover:scale-90 font-black bg-white shadow-md shadow-black'>Login</button>
        </Link>
    </div>
  )
}


export default SLbtn