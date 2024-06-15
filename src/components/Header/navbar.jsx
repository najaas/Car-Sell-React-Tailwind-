import React from 'react'
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <>
      <div className='w-[60%] font-bold text-white hidden md:block' >
        <div className='flex justify-evenly items-center'>

        <Link to="#" className='hover:text-red-500 hover:shadow-md hover:shadow-black' >
          HOME
        </Link>
         <Link to="#" className='hover:text-red-500 hover:shadow-md hover:shadow-black' >
          ABOUT
        </Link>
         <Link to="#" className='hover:text-red-500 hover:shadow-md hover:shadow-black' >
          SERVICES
        </Link>
         <Link to="#" className='hover:shadow-md hover:text-black hover:shadow-black ' >
          CONTACT
        </Link>
      </div>
        </div>
    </>
  )
}

export default navbar