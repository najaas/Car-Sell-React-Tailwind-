import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";


const Btn = () => {
    const [user,setUser]=useState(true)
    const btnn = ()=>{
    setUser(!user)
    }
  return (
    <div>
        <div className={`w-full h-[400px] ${user ? 'bg-red-700': 'bg-green-600'}  flex justify-evenly items-center `}>
            <div>
            
              <button onClick={btnn}>
                <FiMenu />
                </button>
                </div>
        </div>
    </div>
  )
}

export default Btn