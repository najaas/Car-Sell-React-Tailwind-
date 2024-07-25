import React, { useState } from 'react';
import Nav from './Navbar';
import Logo from './Logo';
import SLbtn from './SLbtn'; // Assuming this is correctly named SLbtn
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  }

  return (
    <div className='w-full h-14 flex justify-between items-center bg-black fixed z-20'>
      <Logo />
      <Nav />
      <SLbtn />
      <button onClick={handleToggle} className="flex items-center md:hidden">
        {nav ? (
          <>
            <IoClose className="text-white text-2xl mr-4 cursor-pointer" />
            <div className="w-full absolute z-20 h-screen bg-black bg-opacity-80 flex justify-center top-14 left-0">
              <div className='w-[70%] h-[40%] bg-white rounded-lg shadow-black shadow-lg flex flex-col justify-evenly'>
                <Link to="/home" className='flex items-center text-black hover:bg-white hover:shadow-md hover:shadow-black h-[40px] w-full justify-center'>
                  HOME
                </Link>
                <Link to="#" className='flex items-center text-black hover:bg-white hover:shadow-md hover:shadow-black h-[40px] w-full justify-center'>
                  ABOUT
                </Link>
                <Link to="#" className='flex items-center text-black hover:bg-white hover:shadow-md hover:shadow-black h-[40px] w-full justify-center'>
                  SERVICES
                </Link>
                <Link to="#" className='flex items-center text-black hover:bg-white hover:shadow-md hover:shadow-black h-[40px] w-full justify-center'>
                  CONTACT
                </Link>
              </div>
            </div>
          </>
        ) : (
          <FiMenu className="text-white text-2xl mr-4 cursor-pointer" />
        )}
      </button>
    </div>
  );
}

export default Header;
