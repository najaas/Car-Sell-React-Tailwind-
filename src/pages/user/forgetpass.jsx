import React from 'react'
import Forget from '../../components/loginForm'

const forgetpass = () => {
  return (
        <>
        <Forget 
        section2={
            <div className="md:block hidden w-1/2">
            <img className="rounded-2xl max-h-[1700px]" src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="login form image" />
          </div>
        }
        />
        </>
    )
}

export default forgetpass