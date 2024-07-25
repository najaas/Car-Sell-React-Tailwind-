import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className=' m-4 lg:w-[15%]  flex items-center justify-center font-black text-4xl text-white'>
        <Link to="/home">Logoo</Link>
    </div>
  )
}
export default Logo