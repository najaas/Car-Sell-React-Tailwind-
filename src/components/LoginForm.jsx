import React from 'react'
import { Link } from 'react-router-dom'


const Login = ({section,section2}) => {
  return (

    <>
    
<section className="bg-gray-200 min-h-screen flex box-border justify-center items-center">
        <div className="bg-white rounded-2xl flex max-w-3xl p-5 items-center">
         {section}
          {section2}
        </div>
      </section>

    </>

  )
}

export default Login